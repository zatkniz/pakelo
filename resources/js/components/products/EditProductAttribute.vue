<template>
  <v-dialog v-model="dialog" max-width="400px" @click:outside="closeDialog(); editedItem = {}">
    <v-card :loading="loading">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field :rules="nameRules" label="Κωδικός" v-model="editedItem.code"></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-text-field :rules="nameRules" label="Lt/Kg" v-model="editedItem.lt_kg"></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-text-field :rules="nameRules" label="Τιμή" v-model="editedItem.price"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mx-5 mb-5" color="primary" type="submit">Αποθηκευση</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import productDetails from "./Details";
export default {
  props: {
    dialog: Boolean,
    selectedAttribute: Number,
    editedItem: Object
  },
  components: {
    productDetails
  },
  data: () => ({
    loading: false,
    attribute: {},
    valid: false,
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό."]
  }),
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.saveproduct();
      }
    },
    saveproduct() {
      this.loading = true;
      this.editedItem.product_id = this.$route.params.id;
      this.editedItem.price_per_kg =
        parseInt(this.editedItem.price) / parseFloat(this.editedItem.lt_kg);
      axios.post("products-attributes", this.editedItem).then(res => {
        this.$store.dispatch("getAllproducts");
        setTimeout(() => {
          this.loading = false;
          this.editedItem = {};
          this.$emit("attributeSaved");
        }, 1000);
      });
    }
  }
  // watch: {
  //   selectedAttribute(val) {
  //     if (val)
  //       this.attribute = this.product.attributes.find(attr => attr.id == val);
  //   }
  // }
};
</script>