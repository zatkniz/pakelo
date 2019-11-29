<template>
  <v-dialog v-model="dialog" max-width="800px" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-autocomplete
                  required
                  :rules="requiredRules"
                  :items="customers"
                  v-model="order.customer_id"
                  label="Πελάτης"
                  item-text="name"
                  item-value="id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="order.created_at" label="Ημερομηνία"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea rows="1" auto-grow v-model="order.comments" label="Σχόλια"></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-data-table
                  class="products-table"
                  hide-default-footer
                  :headers="[
                    { text: 'Κωδικός', align: 'center', sortable: false, value: 'product.code', },
                    { text: 'Ποσότητα', align: 'center', value: 'quantity' }, 
                    { text: 'Tιμή',align: 'center', value: 'price' }, 
                    { text: 'Tιμή Ποσότητας', align: 'center', value: 'price_per_kg' }
                  ]"
                  :items="order.products"
                >
                  <template v-slot:item.product.code="{ item }">
                    <v-tooltip right>
                      <template v-slot:activator="{ on }">
                        <div v-on="on">{{item.product.code}}</div>
                      </template>
                      <span>Ονομασία: {{item.product.product.name}}lt</span>
                      <br />
                      <span>Ποσότητα: {{item.product.lt_kg}}lt</span>
                    </v-tooltip>
                  </template>
                  <template v-slot:item.price="{ item }">{{ item.price }}€</template>
                  <template v-slot:item.lt_kg="{ item }">{{ item.lt_kg }}Lt</template>
                  <template
                    v-slot:item.price_per_kg="{ item }"
                  >{{ (item.price / item.quantity).toFixed(2) }}€</template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Ακυρωση</v-btn>
          <v-btn color="blue darken-1" text type="submit">Αποθηκευση</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    order: Object
  },
  data: () => ({
    loading: false,
    customers: [],
    valid: false,
    activeItems: [
      { text: "Ενεργός", value: 1 },
      { text: "Ανενεργός", value: 0 }
    ],
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό"],
    emailRules: [
      v => !!v || "Το πεδίο είναι υποχρεωτικό",
      v => /.+@.+/.test(v) || "Το email δεν είναι σωστό"
    ],
    requiredRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό"],
    passRules: [
      v => {
        if (!order.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }
    ]
  }),

  computed: {
    formTitle() {
      const name = this.$route.name == "Orders" ? "Παραγγελίας" : "Προσφοράς";
      return !this.order.id ? `Προσθήκη ${name}` : `Επεξεργασία ${name}`;
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    getCustomers() {
      axios.get("customers").then(res => (this.customers = res.data));
    },

    save() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post(`orders`, this.order).then(res => {
          this.$emit("closeDialog");
          this.$emit("orderEdited");
          this.loading = false;
        });
      }
    }
  },

  created() {
    this.getCustomers();
  },

  watch: {
    order(val) {
      window.order = val;
    }
  }
};
</script>