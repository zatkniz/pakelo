<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="ma-5" shaped outlined :loading="loading">
                    <v-data-table
                    :headers="headers"
                    :items="items"
                    sort-by="name"
                    class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="secondary" dark>
                                <v-toolbar-title>{{cardTitle}}</v-toolbar-title>
                                <v-divider
                                class="mx-4"
                                inset
                                vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" dark class="mb-2" @click="editItem({})">Προσθηκη</v-btn>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.action="{ item }">
                            <v-btn class="mx-0" fab dark x-small color="teal" @click="editItem(item)">
                                <v-icon small>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-0" fab dark x-small color="primary" @click="openDeleteDialog(item)">
                                <v-icon small>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-data-table> 
                    <delete-dialog :itemRoute="item" :item="editedItem" :deleteDialog="deleteDialog" @itemDeleted="getItems(); snackbar = true;" @closeDialog="deleteDialog = false" />
                    <edit-dialog :itemRoute="item" :item="editedItem" :dialog="dialog" @itemEdited="getItems(); snackbar = true;" @closeDialog="dialog = false" />
                    
                    <v-snackbar v-model="snackbar">
                      Η επιλογή σας αποθηκεύτηκε επιτυχώς
                      <v-btn color="pink" text @click="snackbar = false">
                        κλεισιμο
                      </v-btn>
                    </v-snackbar>
                    
                </v-card>
            </v-col>
        </v-row>    
    </v-container>
</template>

<script>
  import deleteDialog from '../components/lists/DeleteDialog';
  import editDialog from '../components/lists/EditDialog';
  export default {
    components: {
      deleteDialog,
      editDialog,
    },
    data: () => ({
      dialog: false,
      snackbar: false,
      deleteDialog: false,
      loading: false,
      item: null,
      cardTitle: null,
      headers: [
        {
          text: 'Όνομα',
          align: 'left',
          value: 'name',
        },
        {
          text: 'Σύνολο',
          align: 'center',
          value: 'items_count',
        },
        { text: 'Ενέργειες', value: 'action', align: 'right', },
      ],
      items: [],
      editedItem: {},
    }),

    created () {
      this.cardTitle = this.$route.query.cardTitle;
      this.item = this.$route.query.item;
      this.getItems();
    },

    methods: {
      getItems () {
        this.loading = true;
        axios.get(this.item).then( res => {
          this.items = res.data;
          this.loading= false;
        })
      },

      editItem (item) {
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      openDeleteDialog (item) {
        this.editedItem = Object.assign({}, item)
        this.deleteDialog = true;
      },
    },
  }
</script>