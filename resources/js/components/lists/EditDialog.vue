<template>
  <v-dialog v-model="dialog" max-width="300px" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field required :rules="nameRules" v-model="item.name" label="Όνομα"></v-text-field>
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
    item: Object,
    itemRoute: String,
  },
  data: () => ({
    loading: false,
    valid: false,
    nameRules: [v => !!v || "Το πεδίο είναι υποχρεωτικό"],
  }),

  computed: {
    formTitle() {
      return !this.item.id ? "Προσθήκη" : "Επεξεργασία";
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    save() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post(this.itemRoute, this.item).then(res => {
          this.$emit("closeDialog");
          this.$emit("itemEdited");
          this.loading = false;
        });
      }
    }
  },

  watch: {
    item(val) {
      window.item = val;
    }
  }
};
</script>