<template>
  <v-card :loading="loading">
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="9" md="9">
              <v-text-field :rules="nameRules" label="Ονομασία" v-model="product.name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Ιξώδες" v-model="product.ixodes"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-autocomplete
                :readonly="auth.user_role_id == 1"
                :items="categories"
                label="Κατηγορία"
                v-model="product.product_category_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-autocomplete
                :items="descriptions"
                label="Περιγραφή"
                v-model="product.product_description_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-autocomplete
                :items="uses"
                label="Εφαρμογή"
                v-model="product.product_use_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col class="text-right" cols="12" sm="12" md="12" v-if="product.attributes">
              <v-btn
                v-if="auth.user_role_id == 1"
                class="mb-5"
                color="primary"
                @click="openEditAttributeDialog"
              >Προσθηκη</v-btn>
              <v-data-table
                class="products-table"
                hide-default-footer
                :headers="tableHeaders"
                :items="product.attributes"
              >
                <template v-slot:item.price="{ item }">
                  {{ calculatePrice(item.price) }}€
                  <span
                    v-if="auth.user_role_id == 1"
                  >({{ item.price }}€)</span>
                </template>
                <template v-slot:item.lt_kg="{ item }">{{ item.lt_kg }}Lt</template>
                <template v-slot:item.price_per_kg="{ item }">
                  {{ calculatePrice(item.price / item.lt_kg)}}€
                  <span
                    v-if="auth.user_role_id == 1"
                  >({{ (item.price / item.lt_kg).toFixed(2) }}€)</span>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-btn
                    class="mx-0"
                    fab
                    dark
                    x-small
                    color="teal"
                    @click="openEditAttributeDialog(item)"
                  >
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-0"
                    fab
                    dark
                    x-small
                    color="primary"
                    @click="openDeleteDialog(item)"
                  >
                    <v-icon small>mdi-delete</v-icon>
                  </v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions v-if="!product_id">
        <v-spacer></v-spacer>
        <v-btn
          v-if="auth.user_role_id == 1"
          class="mx-5 mb-5"
          color="primary"
          type="submit"
        >Αποθηκευση</v-btn>
      </v-card-actions>
    </v-form>

    <edit-attribute
      :editedItem="editedItem"
      :dialog="dialog"
      @closeDialog="dialog = false;"
      @attributeSaved="retriveProducts(); snackbar = true;"
    />

    <delete-dialog
      :item="editedItem"
      :deleteDialog="deleteDialog"
      @attributeSaved="retriveProducts(); snackbar = true;"
      @closeDialog="deleteDialog = false"
    />

    <v-snackbar v-model="snackbar">
      Η επιλογή σας αποθηκεύτηκε επιτυχώς
      <v-btn color="pink" text @click="snackbar = false">κλεισιμο</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import editAttribute from "./EditProductAttribute";
import deleteDialog from "./DeleteDialog";
export default {
  props: {
    product_id: Number
  },
  components: {
    editAttribute,
    deleteDialog
  },
  data: () => ({
    dialog: false,
    deleteDialog: false,
    selectedAttribute: null,
    loading: false,
    snackbar: false,
    valid: false,
    editedItem: {},
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό."],
    products: [],
    categories: [],
    descriptions: [],
    tableHeaders: [
      { text: "Κωδικός", align: "center", sortable: false, value: "code" },
      { text: "Lt/Kg", align: "center", value: "lt_kg" },
      { text: "Tιμή", align: "center", value: "price" },
      { text: "Tιμή Lt/Kg", align: "center", value: "price_per_kg" }
    ],
    uses: [],
    status: [
      {
        value: false,
        text: "Ανενεργός"
      },
      {
        value: true,
        text: "Ενεργός"
      }
    ]
  }),

  methods: {
    openEditAttributeDialog(item) {
      this.selectedAttribute = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    openDeleteDialog(item) {
      this.editedItem = Object.assign({}, item);
      this.deleteDialog = true;
    },
    retriveProducts() {
      this.dialog = false;
      this.$store.dispatch(
        "getSingleproduct",
        this.product_id || this.$route.params.id
      );
    },

    calculatePrice(price) {
      const itemPercentage = parseFloat(price) * (40 / 100);

      const returnValue = parseFloat(itemPercentage) + parseFloat(price);
      return returnValue.toFixed(2);
    },

    getproduct() {
      if (this.product_id || this.$route.params.id)
        this.$store.dispatch(
          "getSingleproduct",
          this.product_id || this.$route.params.id
        );
      else this.$store.dispatch("getSingleproduct", null);
    },
    saveproduct() {
      this.loading = true;
      axios.post("products", this.product).then(async res => {
        this.loading = false;
        this.snackbar = true;
        await this.$store.dispatch("getAllproducts");
        if (!this.$route.params.id) {
          setTimeout(() => {
            window.location.hash = `#/product/${res.data.id}`;
          }, 1000);
        }
      });
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.saveproduct();
      }
    },
    getproducts() {
      axios.get("products").then(res => {
        this.products = res.data;
      });
    },
    getdescriptions() {
      axios.get("products-descriptions").then(res => {
        this.descriptions = res.data;
      });
    },
    getuses() {
      axios.get("products-uses").then(res => {
        this.uses = res.data;
      });
    },
    getcategories() {
      axios.get("products-categories").then(res => {
        this.categories = res.data;
      });
    }
  },

  mounted() {
    this.getproduct();
    this.getproducts();
    this.getcategories();
    this.getdescriptions();
    this.getuses();
    if (this.auth.user_role_id == 1) {
      this.tableHeaders.push({
        text: "Ενέργειες",
        value: "action",
        align: "right"
      });
    }
  },

  computed: {
    ...mapGetters({
      product: "getproduct",
      auth: "getAuth"
    })
  },

  watch: {
    product_id(val) {
      this.$store.dispatch("getSingleproduct", val);
    },
    auth() {
      if (this.auth.user_role_id == 1) {
        this.tableHeaders.push({
          text: "Ενέργειες",
          value: "action",
          align: "right"
        });
      }
    }
  }
};
</script>