<template>
  <v-app id="inspire">
    <appSidebar :drawer="drawer" @updateDrawer="updateDrawer" />
    <app-header @toggleSidebar="drawer = !drawer" />

    <v-content>
      <router-view :key="$route.path" />

      <v-speed-dial v-model="fab" bottom right fixed>
        <template v-slot:activator>
          <v-btn v-model="fab" color="primary" dark fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-btn to="/visits?new=true" fab dark small color="red">
          <v-icon>mdi-car-side</v-icon>
        </v-btn>
        <v-btn to="/offers?new=true" fab dark small color="red">
          <v-icon>mdi-message</v-icon>
        </v-btn>
        <v-btn to="/orders?new=true" fab dark small color="red">
          <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn to="/incomes?new=true" fab dark small color="red">
          <v-icon>mdi-cash-100</v-icon>
        </v-btn>
        <v-btn to="/customer?new=true" fab dark small color="red">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-content>

    <!-- <v-btn bottom color="primary" dark fab fixed right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>-->
  </v-app>
</template>

<script>
import appSidebar from "./Sidebar";
import appHeader from "./Header";

export default {
  props: {
    source: String
  },
  components: {
    appSidebar,
    appHeader
  },

  data: () => ({
    drawer: true,
    fab: false
  }),

  methods: {
    updateDrawer(val) {
      this.drawer = val;
    }
  }
};
</script>