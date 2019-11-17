<template>
  <v-app id="inspire">
    <appSidebar :drawer="drawer" />
    <app-header @toggleSidebar="drawer = !drawer" />

    <v-content>
      <router-view />
    </v-content>

    <v-btn bottom color="primary" dark fab fixed right> 
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
    import appSidebar from './Sidebar';
    import appHeader from './Header';

    export default {
        props: {
          source: String,
        },
        components:{
           appSidebar,
           appHeader 
        },

        data: () => ({
            drawer: true,
        }),
    }
</script>