<template>
  <v-app id="inspire">
    <appSidebar :drawer="drawer" @updateDrawer="updateDrawer" />
    <app-header @toggleSidebar="drawer = !drawer" />

    <v-content>
      <router-view :key="$route.path" />
    </v-content>

    <v-btn bottom color="primary" dark fab fixed right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
    drawer: true
  }),

  methods: {
    updateDrawer(val) {
      this.drawer = val;
    }
  }
};
</script>