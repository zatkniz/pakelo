<template>
  <v-content style="background: #e41513;">
    <v-container class="fill-height" fluid>
      <v-row class="flex-column" align="center" justify="center">
        <img class="mb-5" src="/assets/logo.png" />
        <v-card color="#fff" class="ml-3 pa-5 elevation-5" width="400" :loading="loading">
          <v-card-title>Συμπληρώστε τα στοιχεία εισόδου</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
            <v-text-field v-model="name" :rules="nameRules" label="Username" required outlined></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passRules"
              label="Κωδικός"
              type="password"
              required
              outlined
            ></v-text-field>

            <v-spacer></v-spacer>

            <v-btn :disabled="!valid" color="primary" class="mr-4 float-right" type="submit">Εισοδος</v-btn>
          </v-form>
        </v-card>
      </v-row>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <v-btn :loading="loading" color="pink" text @click="snackbar = false">κλεισιμο</v-btn>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    snackbar: false,
    loading: false,
    name: "",
    text: "",
    nameRules: [v => !!v || "Συμπληρώστε το όνομα χρήστη"],
    password: "",
    passRules: [v => !!v || "Συμπληρώστε τον κωδικό σας"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.login();
      }
    },

    login() {
      this.loading = true;
      axios
        .post("login", { username: this.name, password: this.password })
        .then(res => {
          window.location.reload();
          this.loading = false;
        })
        .catch(error => {
          this.snackbar = true;
          this.loading = false;
          for (let err in error.response.data.errors) {
            this.text = error.response.data.errors[err][0];
          }
        });
    }
  }
};
</script>