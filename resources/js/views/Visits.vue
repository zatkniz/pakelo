<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5" shaped outlined :loading="loading">
          <v-data-table :headers="headers" :items="visits" sort-by="name" class="elevation-1">
            <template v-slot:top>
              <v-toolbar flat color="secondary" dark>
                <v-toolbar-title>Επισκέψεις</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark class="mb-2" @click="editItem({})">Προσθηκη Επίσκεψης</v-btn>
              </v-toolbar>
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
            @closeDialog="dialog = false; $route.query.newVisit = false;"
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
  components: {
    deleteDialog,
    editDialog
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    deleteDialog: false,
    loading: false,
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
    editedItem: {}
  }),

  created() {
    this.getvisits();
    if (this.$route.query.newVisit) this.dialog = true;
  },

  methods: {
    getvisits() {
      this.loading = true;
      axios.get("visits").then(res => {
        this.visits = res.data;
        this.loading = false;
        this.$route.query.newVisit;
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
      if (this.$route.query.newVisit) this.dialog = true;
    }
  }
};
</script>