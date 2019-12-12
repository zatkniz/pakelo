<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5" shaped outlined :loading="loading">
          <v-toolbar flat color="secondary" dark>
            <v-toolbar-title>Προϊοντα</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" to="product">Προσθηκη Προϊοντος</v-btn>
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
              <v-btn class="mx-0" fab dark x-small color="teal" :to="'product/' + item.id">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mx-0" fab dark x-small color="primary" @click="openDeleteDialog(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
            <template v-slot:expanded-item="{item , headers}">
              <td :colspan="headers.length" class="pa-0">
                <v-data-table
                  class="products-table"
                  hide-default-footer
                  :headers="[ { text: 'Κωδικός', align: 'center', sortable: false, value: 'code', }, { text: 'Lt/Kg', align: 'center', value: 'lt_kg' }, { text: 'Tιμή',align: 'center', value: 'price' }, { text: 'Tιμή Lt/Kg', align: 'center', value: 'price_per_kg' }]"
                  :items="item.attributes"
                >
                <template v-slot:item.price="{ item }">
                  {{ calculatePrice(item.price) }}€ 
                  <span v-if="auth.user_role_id == 1">({{ item.price }}€)</span>
                </template>
                <template v-slot:item.lt_kg="{ item }">{{ item.lt_kg }}Lt</template>
                <template
                  v-slot:item.price_per_kg="{ item }"
                >
                {{ calculatePrice(item.price / item.lt_kg)}}€ 
                <span v-if="auth.user_role_id == 1">({{ (item.price / item.lt_kg).toFixed(2) }}€)</span>
                </template>
                </v-data-table>
              </td>
            </template>
          </v-data-table>
          <delete-product-dialog
            :product="editedItem"
            :deleteDialog="deleteDialog"
            @productDeleted="getproducts(); snackbar = true;"
            @closeDialog="deleteDialog = false"
          />
          <edit-product-dialog :product="editedItem" :dialog="dialog" @closeDialog="dialog = false" />

          <v-snackbar v-model="snackbar">
            Η επιλογή σας αποθηκεύτηκε επιτυχώς
            <v-btn color="primary" text @click="snackbar = false">κλεισιμο</v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import deleteProductDialog from "../components/products/DeleteProductDialog";
import editProductDialog from "../components/products/EditProduct";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    deleteProductDialog,
    editProductDialog
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

    calculatePrice(price) {
      const itemPercentage =
        parseFloat(price) * (40 / 100);

      const returnValue = parseFloat(itemPercentage) + parseFloat(price);
      return returnValue.toFixed(2);
    },

    openDeleteDialog(product) {
      this.editedItem = Object.assign({}, product);
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
      products: "getproducts",
      auth: "getAuth"
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