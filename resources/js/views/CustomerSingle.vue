<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5">
          <v-tabs v-model="tab" background-color="secondary" color="#fff" grow dark height="64">
            <v-tab>Στοιχεια</v-tab>
            <v-tab>Παραγγελιες</v-tab>
            <v-tab>Προσφορες</v-tab>
            <v-tab>Επισκεψεις</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <customer-details />
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="basil">
                <v-card-text class="px-3 py-0">
                  <orders :isOrder="true" :hideToolbar="true" :customer="$route.params.id" />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="basil">
                <v-card-text class="px-3 py-0">
                  <orders :isOrder="false" :hideToolbar="true" :customer="$route.params.id" />
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="basil">
                <v-card-text class="px-3 py-0">
                  <visits :isOrder="false" :hideToolbar="true" :customer="$route.params.id" />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import customerDetails from "../components/customers/Details";
import orders from "../views/Orders";
import visits from "../views/Visits";
export default {
  components: {
    customerDetails,
    orders,
    visits
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>