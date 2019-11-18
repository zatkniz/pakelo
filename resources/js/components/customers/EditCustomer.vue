<template>
  <v-dialog v-model="dialog" max-width="800px" @click:outside="closeDialog">
    <customer-details :customer_id="user.id" />
  </v-dialog>
</template>

<script>
import customerDetails from "./Details";
export default {
  props: {
    dialog: Boolean,
    user: Object
  },
  components: {
    customerDetails
  },
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    }
  }
};
</script>