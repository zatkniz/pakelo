<template>
    <v-dialog
        v-model="deleteDialog"
        max-width="290"
        >
        <v-card :loading="loading">
            <v-card-title class="headline">Διαγραφή Χρήστη</v-card-title>

            <v-card-text>
            Είστε σίγουροι ότι θέλετε να διαγράψετε τον χρήστη {{user.name}}?
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="closeDialog()"
            >
                Ακυρωση
            </v-btn>

            <v-btn
                color="primary"
                text
                @click="deleteItem()"
            >
                διαγραφη
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: {
        deleteDialog: Boolean,
        user: Object
    },
    data: () => ({
        loading: false,
    }),

    methods: {
      closeDialog () {
        this.$emit('closeDialog');
      },

      deleteItem () {
          this.loading = true;
          axios.delete(`users/${this.user.id}`).then(res => {
            this.$emit('closeDialog');
            this.$emit('userDeleted');
            this.loading = false;
          });
      },
    },
  }
</script>