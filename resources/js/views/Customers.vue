<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5" shaped outlined :loading="loading">
          <v-toolbar flat color="secondary" dark>
            <v-toolbar-title>Πελάτες</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="customer">Προσθηκη Πελατη</v-btn>
          </v-toolbar>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Αναζήτηση"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="fitleredCustomers"
            sort-by="name"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-row class="px-5">
                <v-col cols="12" sm="6" md="3">
                  <v-autocomplete
                    @input="runFilters"
                    :items="users"
                    label="Πωλητής"
                    clearable
                    v-model="searchQuery.user_id"
                    item-text="name"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-autocomplete
                    @input="runFilters"
                    :items="brandTypes"
                    clearable
                    label="Μάρκα"
                    v-model="searchQuery.brand_type_id"
                    item-text="name"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-select
                    @input="runFilters"
                    :items="sellerTypes"
                    clearable
                    label="Τύπος"
                    v-model="searchQuery.seller_type_id"
                    item-text="name"
                    item-value="id"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-select
                    @input="runFilters"
                    :items="cities"
                    clearable
                    label="Πόλη"
                    v-model="searchQuery.city_id"
                    item-text="name"
                    item-value="id"
                  ></v-select>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn class="mx-0" fab dark x-small color="secondary" @click="editItem(item)">
                <v-icon small>mdi-eye</v-icon>
              </v-btn>
              <v-btn class="mx-0" fab dark x-small color="teal" :to="'customer/' + item.id">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-0" fab dark x-small color="primary" @click="openDeleteDialog(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <delete-customer-dialog
            :user="editedItem"
            :deleteDialog="deleteDialog"
            @userDeleted="getcustomers(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-customer-dialog :user="editedItem" :dialog="dialog" @closeDialog="dialog = false" />

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
import deleteCustomerDialog from "../components/customers/DeleteCustomerDialog";
import editCustomerDialog from "../components/customers/EditCustomer";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    deleteCustomerDialog,
    editCustomerDialog
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    deleteDialog: false,
    loading: false,
    searchQuery: {},
    fitleredCustomers: [],
    cities: [],
    brandTypes: [],
    sellerTypes: [],
    users: [],
    search: "",
    headers: [
      {
        text: "Όνομα",
        align: "left",
        value: "name"
      },
      { text: "Εmail", value: "email" },
      { text: "Διεύθυνση", value: "address" },
      { text: "Τηλέφωνο", value: "mobile" },
      { text: "Υπεύθυνος", value: "responsible" },
      { text: "Πόλη", value: "city.name" },
      {
        text: "Ενέργειες",
        value: "action",
        align: "right",
        sortable: false,
        width: 135
      }
    ],
    editedItem: {}
  }),

  methods: {
    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    openDeleteDialog(user) {
      this.editedItem = Object.assign({}, user);
      this.deleteDialog = true;
    },

    getcustomers() {
      this.$store.dispatch("getAllcustomers");
    },

    getBrandTypes() {
      axios.get("brand-types").then(res => {
        this.brandTypes = res.data;
      });
    },
    getSellerTypes() {
      axios.get("seller-types").then(res => {
        this.sellerTypes = res.data;
      });
    },
    getCities() {
      axios.get("cities").then(res => {
        this.cities = res.data;
      });
    },

    getUsers() {
      axios.get("users").then(res => {
        this.users = res.data;
      });
    },

    runFilters() {
      this.fitleredCustomers = this.customers;
      Object.keys(this.searchQuery).map(q => {
        if (this.searchQuery[q])
          this.fitleredCustomers = this.fitleredCustomers.filter(
            customer => customer[q] == this.searchQuery[q]
          );
      });
    }
  },

  created() {
    this.getUsers();
    this.getCities();
    this.getBrandTypes();
    this.getSellerTypes();
    this.runFilters();
  },

  computed: {
    ...mapGetters({
      customers: "getcustomers"
    })
  },

  watch: {
    customers(val) {
      this.fitleredCustomers = val;
    }
  }
};
</script>