<template>
  <v-card :loading="loading">
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field :rules="nameRules" label="Επωνυμία" v-model="customer.name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Α.Φ.Μ." v-model="customer.afm"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Δ.Ο.Υ." v-model="customer.doy"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Διακριτικό Όνομα" v-model="customer.display_name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Υπεύθυνος" v-model="customer.responsible"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Τηλέφ. 1" v-model="customer.phone"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-text-field label="Τηλέφ. 2" v-model="customer.phone_2"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-text-field label="Email" v-model="customer.email"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-text-field label="Κινητό" v-model="customer.mobile"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-text-field label="FAX" v-model="customer.fax"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-text-field label="Επάγγελμα" v-model="customer.job"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="3">
              <v-autocomplete
                :items="cities"
                label="Πόλη"
                v-model="customer.city_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="5" md="5">
              <v-text-field label="Διεύθυνση" v-model="customer.address"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="3">
              <v-autocomplete
                :items="users"
                label="Πωλητής"
                v-model="customer.user_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4" md="2">
              <v-select
                :items="status"
                label="Κατάσταση"
                v-model="customer.active"
                item-text="text"
                item-value="value"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-autocomplete
                :items="brandTypes"
                label="Μάρκα"
                v-model="customer.brand_type_id"
                item-text="name"
                item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <v-select
                :items="sellerTypes"
                label="Τύπος"
                v-model="customer.seller_type_id"
                item-text="name"
                item-value="id"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-text-field
                label="Πιστωτικό Όριο"
                v-model="customer.limit"
                append-icon="mdi-currency-eur"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-text-field
                label="Ποσοστό"
                v-model="customer.percentage"
                append-icon="mdi-currency-eur"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions v-if="!customer_id">
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
    customer_id: Number
  },
  data: () => ({
    loading: false,
    snackbar: false,
    valid: false,
    nameRules: [v => !!v || "Συμπληρώστε την επωνυμία του πελάτη."],
    users: [],
    cities: [],
    brandTypes: [],
    sellerTypes: [],
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
    getCustomer() {
      if (this.customer_id || this.$route.params.id)
        this.$store.dispatch(
          "getSinglecustomer",
          this.customer_id || this.$route.params.id
        );
      else this.$store.dispatch("getSinglecustomer", null);
    },
    saveCustomer() {
      this.loading = true;
      axios.post("customers", this.customer).then(res => {
        this.loading = false;
        this.snackbar = true;
        this.$store.dispatch("getAllcustomers");
      });
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.saveCustomer();
      }
    },
    getUsers() {
      axios.get("users").then(res => {
        this.users = res.data;
      });
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
    }
  },

  mounted() {
    this.getCustomer();
    this.getUsers();
    this.getCities();
    this.getBrandTypes();
    this.getSellerTypes();
  },

  computed: {
    ...mapGetters({
      customer: "getcustomer"
    })
  },

  watch: {
    customer_id(val) {
      this.$store.dispatch("getSinglecustomer", val);
    }
  }
};
</script>