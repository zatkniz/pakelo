<template>
  <v-navigation-drawer
    color="secondary"
    :clipped="$vuetify.breakpoint.lgAndUp"
    dark
    @input="broadcastEvent"
    v-model="drawer"
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-row v-if="item.heading" :key="item.heading" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-col>
          <v-col cols="6" class="text-center">
            <a href="#!" class="body-2 secondary--text">EDIT</a>
          </v-col>
        </v-row>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item v-for="(child, i) in item.children" :key="i" link :to="item.href">
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" link :to="item.href">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    items: [
      { icon: "mdi-home", text: "Dashboard", href: "/" },
      { icon: "mdi-history", text: "Παραγγελίες" },
      { icon: "mdi-car-side", text: "Επισκέψεις" },
      {
        icon: "mdi-account",
        text: "Πελάτες",
        href: "/customers"
      },
      { icon: "mdi-archive", text: "Προϊόντα", href: "/products" },
      { icon: "mdi-message", text: "Προσφορές" },
      { icon: "mdi-cash-register", text: "Ταμείο" },
      { icon: "mdi-contacts", text: "Χρήστες", href: "/users" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Λίστες",
        model: false,
        children: [{ text: "Import" }, { text: "Export" }]
      }
    ]
  }),

  methods: {
    broadcastEvent() {
      this.$emit("updateDrawer", this.drawer);
    }
  }
};
</script>