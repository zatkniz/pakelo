<template>
  <v-dialog v-model="deleteDialog" max-width="290" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-card-title class="headline">Διαγραφή</v-card-title>

      <v-card-text>Είστε σίγουροι ότι θέλετε να διαγράψετε το {{ item.code }}?</v-card-text>

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
    item: Object
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
      axios.delete(`products-attributes/${this.item.id}`).then(res => {
        this.$store.dispatch("getAllproducts");
        setTimeout(() => {
          this.loading = false;
          this.editedItem = {};
          this.$emit("closeDialog");
          this.$emit("attributeSaved");
        }, 1000);
      });
    }
  }
};
</script>