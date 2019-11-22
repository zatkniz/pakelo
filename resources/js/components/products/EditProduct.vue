<template>
  <v-dialog v-model="dialog" max-width="800px" @click:outside="closeDialog">
    <product-details :product_id="product.id" />
  </v-dialog>
</template>

<script>
import productDetails from "./Details";
export default {
  props: {
    dialog: Boolean,
    product: Object
  },
  components: {
    productDetails
  },
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>