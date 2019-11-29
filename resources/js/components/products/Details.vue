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
            <v-col cols="12" sm="12" md="12" v-if="product.attributes">
               <v-data-table
                  class="products-table"
                  hide-default-footer
                  :headers="[ { text: 'Κωδικός', align: 'center', sortable: false, value: 'code', }, { text: 'Lt/Kg', align: 'center', value: 'lt_kg' }, { text: 'Tιμή',align: 'center', value: 'price' }, { text: 'Tιμή Lt/Kg', align: 'center', value: 'price_per_kg' }]"
                  :items="product.attributes"
                >
                  <template v-slot:item.price="{ item }">
                    {{ item.price }}€
                  </template>
                  <template v-slot:item.lt_kg="{ item }">
                    {{ item.lt_kg }}Lt
                  </template>
                  <template v-slot:item.price_per_kg="{ item }">
                    {{ (item.price / item.lt_kg).toFixed(2) }}€
                  </template>
                </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions v-if="!product_id">
        <v-spacer></v-spacer>
        <v-btn class="mx-5 mb-5" color="primary" type="submit">Αποθηκευση</v-btn>
      </v-card-actions>
    </v-form>

    <v-snackbar v-model="snackbar">
      Η επιλογή σας αποθηκεύτηκε επιτυχώς
      <v-btn color="pink" text @click="snackbar = false">κλεισιμο</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    product_id: Number
  },
  data: () => ({
    loading: false,
    snackbar: false,
    valid: false,
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό."],
    products: [],
    categories: [],
    descriptions: [],
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
      axios.post("products", this.product).then(res => {
        this.loading = false;
        this.snackbar = true;
        this.$store.dispatch("getAllproducts");
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
  },

  computed: {
    ...mapGetters({
      product: "getproduct"
    })
  },

  watch: {
    product_id(val) {
      this.$store.dispatch("getSingleproduct", val);
    }
  }
};
</script>