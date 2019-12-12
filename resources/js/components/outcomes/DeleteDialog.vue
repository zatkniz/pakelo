<template>
  <v-dialog v-model="deleteDialog" max-width="290" @click:outside="closeDialog">
    <v-card :loading="loading">
      <v-card-title class="headline">Διαγραφή Είσπραξης</v-card-title>

      <v-card-text>Είστε σίγουροι ότι θέλετε να διαγράψετε την είσπραξη στον {{outcome.customer ? outcome.customer.name : ''}}?</v-card-text>

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
    outcome: Object
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
      axios.delete(`outcomes/${this.outcome.id}`).then(res => {
        this.$emit("closeDialog");
        this.$emit("outcomeDeleted");
        this.loading = false;
      });
    }
  }
};
</script>