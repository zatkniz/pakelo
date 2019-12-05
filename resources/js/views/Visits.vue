<template>
  <v-container :class="{ 'pa-0': customer}">
    <v-row>
      <v-col :class="{ 'pa-0': customer}">
        <v-card shaped outlined :loading="loading" :class="{ 'ma-0': customer, 'ma-5': !customer }">
          <v-toolbar flat color="secondary" dark v-if="!hideToolbar">
            <v-toolbar-title>Επισκέψεις</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="editItem({})">Προσθηκη Επισκεψης</v-btn>
          </v-toolbar>
          <v-data-table
            :search="search"
            :headers="headers"
            :items="visits"
            sort-by="name"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-row>
                <v-col class="px-10" cols="12" sm="6" md="6">
                  <v-autocomplete
                    :items="users"
                    label="Πωλητής"
                    clearable
                    v-model="user_id"
                    item-text="name"
                    item-value="id"
                    @input="getvisits"
                    @click:clear="getvisits()"
                  ></v-autocomplete>
                </v-col>
                <v-col class="px-10" cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Αναζήτηση"
                    single-line
                    hide-details
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="px-5">
                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="searchQuery[0]"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="searchQuery[0]"
                        label="Από"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        clearable
                        @click:clear="searchQuery[0] = null; getvisits()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[0]"
                      no-title
                      scrollable
                      @input="getvisits(); $refs.menu.save(searchQuery[0])"
                      reactive
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(searchQuery[0])">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    ref="menuTo"
                    v-model="menuTo"
                    :close-on-content-click="false"
                    :return-value.sync="searchQuery[1]"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="searchQuery[1]"
                        label="Έως"
                        clearable
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                        @click:clear="searchQuery[1] = null; getvisits()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[1]"
                      no-title
                      scrollable
                      @input="getvisits(); $refs.menuTo.save(searchQuery[1])"
                      reactive
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuTo = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menuTo.save(searchQuery[1])">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn class="mx-0" fab dark x-small color="teal" @click="editItem(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-0" fab dark x-small color="primary" @click="openDeleteDialog(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <delete-dialog
            :visit="editedItem"
            :deleteDialog="deleteDialog"
            @visitDeleted="getvisits(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-dialog
            :visit="editedItem"
            :dialog="dialog"
            @visitEdited="getvisits(); snackbar = true;"
            @closeDialog="dialog = false; $route.query.new = false;"
          />

          <v-snackbar v-model="snackbar">
            Η επιλογή σας αποθηκεύτηκε επιτυχώς
            <v-btn color="pink" text @click="snackbar = false">κλεισιμο</v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import deleteDialog from "../components/visits/DeleteDialog";
import editDialog from "../components/visits/EditDialog";
export default {
  props: {
    isOrder: Boolean,
    hideToolbar: Boolean,
    customer: String
  },
  components: {
    deleteDialog,
    editDialog
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    menu: false,
    menuTo: false,
    date: new Date().toISOString().substr(0, 10),
    deleteDialog: false,
    loading: false,
    searchQuery: [new Date().toISOString().substr(0, 10), null],
    search: "",
    headers: [
      {
        text: "Πελάτης",
        align: "left",
        value: "customer.name"
      },
      { text: "Πωλητής", value: "user.name" },
      { text: "Ημερομηνία", value: "created_at" },
      { text: "Ενέργειες", value: "action", align: "right" }
    ],
    visits: [],
    users: [],
    user_id: "",
    editedItem: {}
  }),

  created() {
    this.getvisits();
    if (this.$route.query.new) this.dialog = true;

    this.getUsers();
  },

  methods: {
    getvisits() {
      if (!this.user_id) this.user_id = "";

      this.loading = true;
      axios
        .get(
          `visits?date=${this.searchQuery}&user=${this.user_id}&customer=${this.customer}`
        )
        .then(res => {
          this.visits = res.data;
          this.loading = false;
          this.$route.query.new;
        });
    },

    getUsers() {
      axios.get("users").then(res => {
        this.users = res.data;
      });
    },

    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    openDeleteDialog(visit) {
      this.editedItem = Object.assign({}, visit);
      this.deleteDialog = true;
    }
  },
  watch: {
    "$route.query"() {
      if (this.$route.query.new) this.dialog = true;
    }
  }
};
</script>