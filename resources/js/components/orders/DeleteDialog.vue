<template>
  <v-dialog v-model="deleteDialog" max-width="290" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-card-title class="headline">Διαγραφή Χρήστη</v-card-title>

      <v-card-text>Είστε σίγουροι ότι θέλετε να διαγράψετε την επίσκεψη στον {{order.customer ? order.customer.name : ''}}?</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="closeDialog()">Ακυρωση</v-btn>

        <v-btn color="primary" text @click="deleteItem()">διαγραφη</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    deleteDialog: Boolean,
    order: Object
  },
  data: () => ({
    loading: false
  }),

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    deleteItem() {
      this.loading = true;
      axios.delete(`orders/${this.order.id}`).then(res => {
        this.$store.dispatch("getAllcustomers");
        this.$emit("closeDialog");
        this.$emit("orderDeleted");
        this.loading = false;
      });
    }
  }
};
</script>