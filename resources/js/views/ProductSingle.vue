<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="ma-5">
          <v-tabs v-model="tab" background-color="secondary" color="#fff" grow dark height="64">
            <v-tab>Στοιχεια</v-tab>
            <v-tab>Παραγγελιες</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <product-details />
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="basil">
                <v-card-text>Παραγγελίες</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productDetails from "../components/products/Details";
export default {
  components: {
    productDetails
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>