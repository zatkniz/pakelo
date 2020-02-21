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
            :items="outcomes"
            sort-by="name"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:top>
              <v-row>
                <v-col class="px-10" cols="12" sm="6" md="6">
                  <v-autocomplete
                    :items="users"
                    label="Χρήστης"
                    clearable
                    v-model="user_id"
                    item-text="name"
                    item-value="id"
                    @input="getoutcomes"
                    @click:clear="getoutcomes()"
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
                <v-col class="px-4" cols="12" sm="4" md="4">
                  <v-autocomplete
                    :items="outcomeTypes"
                    label="Τύπος Εξόδου"
                    clearable
                    v-model="outcome_type_id"
                    item-text="name"
                    item-value="id"
                    @input="getoutcomes"
                    @click:clear="getoutcomes()"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="4" md="4">
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
                        @click:clear="searchQuery[0] = null; getoutcomes()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[0]"
                      no-title
                      scrollable
                      @input="getoutcomes(); $refs.menu.save(searchQuery[0])"
                      reactive
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(searchQuery[0])">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="4" md="4">
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
                        @click:clear="searchQuery[1] = null; getoutcomes()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="searchQuery[1]"
                      no-title
                      scrollable
                      @input="getoutcomes(); $refs.menuTo.save(searchQuery[1])"
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
            :outcome="editedItem"
            :deleteDialog="deleteDialog"
            @outcomeDeleted="getoutcomes(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-dialog
            :outcome="editedItem"
            :dialog="dialog"
            @outcomeEdited="getoutcomes(); snackbar = true;"
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
import deleteDialog from "../components/outcomes/DeleteDialog";
import editDialog from "../components/outcomes/EditDialog";
export default {
  props: {
    isoutcome: Boolean,
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
    isSingleoutcome: false,
    expanded: [],
    menu: false,
    menuTo: false,
    outcome_type_id: null,
    date: new Date().toISOString().substr(0, 10),
    searchQuery: [new Date().toISOString().substr(0, 10), null],
    singleExpand: false,
    deleteDialog: false,
    loading: false,
    search: "",
    headers: [
      {
        text: "Έξοδο",
        align: "left",
        value: "type.name"
      },
      { text: "Πωλητής", value: "user.name" },
      { text: "Ποσό", value: "amount", align: "center" },
      { text: "Ημερομηνία", value: "created_at" },
      { text: "Ενέργειες", value: "action", align: "right" }
    ],
    outcomes: [],
    outcomeTypes: [],
    editedItem: {},
    users: [],
    user_id: ""
  }),

  created() {
    if (this.$route.name == "Customers Single") {
      this.isSingleoutcome = this.isoutcome;
    } else {
      this.isSingleoutcome = this.$route.name == "outcomes";
    }

    this.getoutcomes();
    if (this.$route.query.new) this.dialog = true;

    this.getoutcomeTypes();
    this.getUsers();
  },

  methods: {
    getoutcomes() {
      if (!this.user_id) this.user_id = "";

      this.loading = true;
      axios
        .get(
          `outcomes?outcomes=${this.isSingleoutcome}&date=${this.searchQuery}&user=${this.user_id}&outcome_type_id=${this.outcome_type_id}`
        )
        .then(res => {
          this.outcomes = res.data;
          this.loading = false;
          this.$route.query.new;
        });
    },

    getoutcomeTypes() {
      axios.get("outcome-types").then(res => (this.outcomeTypes = res.data));
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

    openDeleteDialog(outcome) {
      this.editedItem = Object.assign({}, outcome);
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
      return "Έξοδα";
    }
  }
};
</script>