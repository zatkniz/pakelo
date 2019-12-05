<template>
  <v-container :class="{ 'pa-0': customer}">
    <v-row>
      <v-col :class="{ 'pa-0': customer}">
        <v-card
          class
          shaped
          outlined
          :loading="loading"
          :class="{ 'ma-0': customer, 'ma-5': !customer }"
        >
          <v-toolbar flat color="secondary" dark v-if="!hideToolbar">
            <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="editItem({products:[]})">Προσθηκη</v-btn>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="incomes"
            sort-by="name"
            class="elevation-1"
            :search="search"
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
                    @input="getincomes"
                    @click:clear="getincomes()"
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
                        @click:clear="searchQuery[0] = null; getincomes()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[0]"
                      no-title
                      scrollable
                      @input="getincomes(); $refs.menu.save(searchQuery[0])"
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
                        @click:clear="searchQuery[1] = null; getincomes()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[1]"
                      no-title
                      scrollable
                      @input="getincomes(); $refs.menuTo.save(searchQuery[1])"
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
            :income="editedItem"
            :deleteDialog="deleteDialog"
            @incomeDeleted="getincomes(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-dialog
            :income="editedItem"
            :dialog="dialog"
            @incomeEdited="getincomes(); snackbar = true;"
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
import deleteDialog from "../components/incomes/DeleteDialog";
import editDialog from "../components/incomes/EditDialog";
export default {
  props: {
    isincome: Boolean,
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
    isSingleincome: false,
    expanded: [],
    menu: false,
    menuTo: false,
    date: new Date().toISOString().substr(0, 10),
    searchQuery: [new Date().toISOString().substr(0, 10), null],
    singleExpand: false,
    deleteDialog: false,
    loading: false,
    search: "",
    headers: [
      {
        text: "Πελάτης",
        align: "left",
        value: "customer.name"
      },
      { text: "Πωλητής", value: "user.name" },
      { text: "Ποσό", value: "amount", align: "center" },
      { text: "Ημερομηνία", value: "created_at" },
      { text: "Ενέργειες", value: "action", align: "right" }
    ],
    incomes: [],
    editedItem: {},
    users: [],
    user_id: ""
  }),

  created() {
    if (this.$route.name == "Customers Single") {
      this.isSingleincome = this.isincome;
    } else {
      this.isSingleincome = this.$route.name == "incomes";
    }

    this.getincomes();
    if (this.$route.query.new) this.dialog = true;

    this.getUsers();
  },

  methods: {
    getincomes() {
      if (!this.user_id) this.user_id = "";

      this.loading = true;
      axios
        .get(
          `incomes?incomes=${this.isSingleincome}&date=${this.searchQuery}&user=${this.user_id}&customer=${this.customer}`
        )
        .then(res => {
          this.incomes = res.data;
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

    openDeleteDialog(income) {
      this.editedItem = Object.assign({}, income);
      this.deleteDialog = true;
    }
  },
  watch: {
    "$route.query"() {
      if (this.$route.query.new) this.dialog = true;
    }
  },

  computed: {
    pageTitle() {
      return "Εισπράξεις";
    }
  }
};
</script>