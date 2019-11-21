<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5" shaped outlined :loading="loading">
          <v-toolbar flat color="secondary" dark>
            <v-toolbar-title>Προϊοντα</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="customer">Προσθηκη Προϊοντος</v-btn>
          </v-toolbar>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Αναζήτηση"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="fitleredproducts"
            sort-by="name"
            :search="search"
            class="elevation-1"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
          >
            <template v-slot:top>
              <v-row class="px-5">
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    @input="runFilters"
                    :items="productDescriptions"
                    label="Περιγραφή"
                    clearable
                    v-model="searchQuery.product_description_id"
                    item-text="name"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    @input="runFilters"
                    :items="productCategories"
                    clearable
                    label="Κατηγορία"
                    v-model="searchQuery.product_category_id"
                    item-text="name"
                    item-value="id"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    @input="runFilters"
                    :items="productUses"
                    clearable
                    label="Εφαρμογή"
                    v-model="searchQuery.product_use_id"
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
            <template v-slot:expanded-item="{item , headers}">
              <td :colspan="headers.length" class="pa-0">
                <v-data-table
                  hide-default-footer
                  :headers="[ { text: 'Κωδικός', align: 'center', sortable: false, value: 'code', }, { text: 'Lt/Kg', align: 'center', value: 'lt_kg' }, { text: 'Tιμή',align: 'center', value: 'price' }, { text: 'Tιμή Lt/Kg', align: 'center', value: 'price_per_kg' }]"
                  :items="item.attributes"
                ></v-data-table>
              </td>
            </template>
          </v-data-table>
          <delete-customer-dialog
            :user="editedItem"
            :deleteDialog="deleteDialog"
            @userDeleted="getproducts(); snackbar = true;"
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
    expanded: [],
    singleExpand: false,
    snackbar: false,
    deleteDialog: false,
    loading: false,
    searchQuery: {},
    fitleredproducts: [],
    productUses: [],
    productDescriptions: [],
    productCategories: [],
    users: [],
    search: "",
    headers: [
      {
        text: "Όνομα",
        align: "left",
        value: "name"
      },
      { text: "Περιγραφή", value: "description.name" },
      { text: "Ιξώδες", value: "ixodes" },
      { text: "Κατηγορία", value: "category.name" },
      { text: "Εφαρμογή", value: "use.name" },
      {
        text: "Ενέργειες",
        value: "action",
        align: "right",
        sortable: false,
        width: 135
      },
      { text: "", value: "data-table-expand" }
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

    getproducts() {
      this.$store.dispatch("getAllproducts");
    },

    getProductDescriptions() {
      axios.get("products-descriptions").then(res => {
        this.productDescriptions = res.data;
      });
    },
    getProductCategories() {
      axios.get("products-categories").then(res => {
        this.productCategories = res.data;
      });
    },
    getProductUses() {
      axios.get("products-uses").then(res => {
        this.productUses = res.data;
      });
    },

    runFilters() {
      this.fitleredproducts = this.products;
      Object.keys(this.searchQuery).map(q => {
        if (this.searchQuery[q])
          this.fitleredproducts = this.fitleredproducts.filter(
            product => product[q] == this.searchQuery[q]
          );
      });
    }
  },

  created() {
    this.getProductUses();
    this.getProductDescriptions();
    this.getProductCategories();
    this.runFilters();
  },

  computed: {
    ...mapGetters({
      products: "getproducts"
    })
  },

  watch: {
    products(val) {
      this.fitleredproducts = val;
    }
  }
};
</script>

<style>
.v-data-table__expanded td.v-data-table__mobile-row {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>