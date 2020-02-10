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
          v-show="checkAuth(item)"
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.href">
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" link :to="item.href" v-show="checkAuth(item)">
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
import { mapGetters } from "vuex";
export default {
  props: {
    drawer: Boolean
  },
  data: () => ({
    items: [
      // { icon: "mdi-home", text: "Dashboard", href: "/" },
      { icon: "mdi-car-side", text: "Επισκέψεις", href: "/visits" },
      { icon: "mdi-message", text: "Προσφορές", href: "/offers" },
      { icon: "mdi-history", text: "Παραγγελίες", href: "/orders" },
      {
        icon: "mdi-account",
        text: "Πελάτες",
        href: "/customers"
      },
      {
        icon: "mdi-cash-100",
        text: "Εισπράξεις",
        href: "/incomes"
      },
      {
        icon: "mdi-currency-usd-off",
        text: "Έξοδα",
        href: "/outcomes"
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Λίστες Πελατών",
        model: false,
        children: [
          {
            text: "Μάρκες Αυτοκινήτων",
            href:
              "/lists-brand-types?item=brand-types&cardTitle=Τύπος Προϊόντος Πελάτη"
          },
          {
            text: "Πόλη",
            href: "/lists-cities?item=cities&cardTitle=Πόλεις%20Πελάτη"
          },
          {
            text: "Τύπος",
            href:
              "/lists-seller-types?item=seller-types&cardTitle=Τύπος%20Πελάτη"
          },
          {
            text: "Μάρκα Λαδιού",
            href: "/lists-oil-brands?item=oil-brands&cardTitle=Μάρκα%20Λαδιού"
          },
          {
            text: "Τύποι Εξόδων",
            href: "/lists-outcome-types?item=outcome-types&cardTitle=Έξοδα"
          }
        ]
      },
      // { icon: "mdi-cash-register", text: "Ταμείο" },
      { icon: "mdi-archive", text: "Προϊόντα", href: "/products" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Λίστες Προϊόντος",
        adminOnly: true,
        model: false,
        children: [
          {
            text: "Περιγραφές",
            href:
              "/lists-descriptions?item=products-descriptions&cardTitle=Περιγραφές%20Προϊόντος"
          },
          {
            text: "Κατηγορίες",
            href:
              "/lists-categories?item=products-categories&cardTitle=Κατηγορίες%20Προϊόντος"
          },
          {
            text: "Εφαρμογές",
            href:
              "/lists-uses?item=products-uses&cardTitle=Εφαρμογές%20Προϊόντος"
          }
        ]
      },
      { icon: "mdi-contacts", text: "Χρήστες", href: "/users", adminOnly: true }
    ]
  }),

  methods: {
    broadcastEvent() {
      this.$emit("updateDrawer", this.drawer);
    },
    checkAuth(item) {
      if (this.auth.user_role_id == 1) return true;
      return !item.adminOnly;
    }
  },

  computed: {
    ...mapGetters({
      auth: "getAuth"
    })
  }
};
</script>