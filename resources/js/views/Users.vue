<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="ma-5" shaped outlined :loading="loading">
                    <v-data-table
                    :headers="headers"
                    :items="users"
                    sort-by="calories"
                    class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="secondary" dark>
                                <v-toolbar-title>Χρήστες</v-toolbar-title>
                                <v-divider
                                class="mx-4"
                                inset
                                vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" dark class="mb-2" @click="editItem({})">Προσθηκη Χρηστη</v-btn>
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
                    <delete-user-dialog :user="editedItem" :deleteDialog="deleteDialog" @userDeleted="getUsers(); snackbar = true;" @closeDialog="deleteDialog = false" />
                    <edit-user-dialog :user="editedItem" :dialog="dialog" @userEdited="getUsers(); snackbar = true;" @closeDialog="dialog = false" />
                    
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
  import deleteUserDialog from '../components/users/DeleteUserDialog';
  import editUserDialog from '../components/users/EditUser';
  export default {
    components: {
      deleteUserDialog,
      editUserDialog,
    },
    data: () => ({
      dialog: false,
      snackbar: false,
      deleteDialog: false,
      loading: false,
      headers: [
        {
          text: 'Όνομα',
          align: 'left',
          value: 'name',
        },
        { text: 'Εmail', value: 'email' },
        { text: 'Username', value: 'username' },
        { text: 'Ρόλος', value: 'user_role.name' },
        { text: 'Κατάσταση', value: 'active_state' },
        { text: 'Ενέργειες', value: 'action', align: 'right', },
      ],
      users: [],
      editedItem: {},
    }),

    created () {
      this.getUsers();
    },

    methods: {
      getUsers () {
        this.loading = true;
        axios.get('users').then( res => {
          this.users = res.data;
          this.loading= false;
        })
      },

      editItem (item) {
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      openDeleteDialog (user) {
        this.editedItem = Object.assign({}, user)
        this.deleteDialog = true;
      },
    },
  }
</script>