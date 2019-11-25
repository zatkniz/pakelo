<template>
  <v-dialog v-model="dialog" max-width="400px" @click:outside="closeDialog">
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
                  v-model="visit.customer_id"
                  label="Πελάτης"
                  item-text="name"
                  item-value="id"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="visit.created_at" label="Ημερομηνία"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea rows="1" auto-grow v-model="visit.comments" label="Σχόλια"></v-textarea>
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
    visit: Object
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
        if (!visit.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }
    ]
  }),

  computed: {
    formTitle() {
      return !this.visit.id ? "Προσθήκη Επίσκεψης" : "Επεξεργασία Επίσκεψης";
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
        axios.post(`visits`, this.visit).then(res => {
          this.$emit("closeDialog");
          this.$emit("visitEdited");
          this.loading = false;
        });
      }
    }
  },

  created() {
    this.getCustomers();
  },

  watch: {
    visit(val) {
      window.visit = val;
    }
  }
};
</script>