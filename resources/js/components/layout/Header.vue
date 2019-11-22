<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="toggleSidebar()" />
    <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
      <img src="/assets/logo.png" />
    </v-toolbar-title>
    <v-spacer />
    <v-autocomplete
      style="max-width: 20%;"
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Αναζήτηση"
      class="hidden-sm-and-down mr-10"
      :items="customers"
      item-text="name"
      item-value="id"
      v-model="customer"
      @change="navigateToCustomerSingle"
    />
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="elevation-3" fab text v-on="on">{{getNamesFirstLetters}}</v-btn>
      </template>
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-title>Έξοδος</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    customer: null
  }),
  methods: {
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
    logout() {
      axios
        .post("logout")
        .then(res => window.location.reload())
        .catch(err => window.location.reload());
    },
    navigateToCustomerSingle() {
      this.$router.push(`/customer/${this.customer}`);
    }
  },
  computed: {
    ...mapGetters({
      auth: "getAuth",
      customers: "getcustomers"
    }),
    getNamesFirstLetters() {
      if (this.auth.name)
        return (
          this.auth.name.split(" ")[0][0] + this.auth.name.split(" ")[1][0]
        );
    }
  }
};
</script>