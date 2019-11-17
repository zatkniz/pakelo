<template>
    <v-dialog v-model="dialog" max-width="800px">
        <v-card :loading="loading">
             <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
                <v-card-title>
                 <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field required :rules="nameRules" v-model="user.name" label="Όνομα"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field  required :rules="emailRules" v-model="user.email" label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field required :rules="requiredRules" v-model="user.username" label="Username"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="user.phone" label="Τηλέφωνο"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="user.phone_2" label="Τηλέφωνο 2"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-select
                                        required
                                        :rules="requiredRules"
                                        :items="roles"
                                        v-model="user.user_role_id"
                                        label="Ρόλος"
                                        item-text="name"
                                        item-value="id"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-select
                                        required 
                                        :rules="requiredRules"
                                        :items="activeItems"
                                        v-model="user.active"
                                        label="Κατάσταση"
                                        item-text="text"
                                        item-value="value"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field :rules="passRules" v-model="user.password" label="Κωδικός" type="password"></v-text-field>
                                </v-col>
                            </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog">Ακυρωση</v-btn>
                    <v-btn color="blue darken-1" text type="submit">Αποθηκευση</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: {
        dialog: Boolean,
        user: Object
    },
    data: () => ({
        loading: false,
        roles: [],
        valid: false,
        activeItems: [
            {text: 'Ενεργός', value: 1},
            {text: 'Ανενεργός', value: 0}
        ],
        nameRules: [
            v => !!v || 'Το πεδίο είναι υποχρεωτικό',
        ],
        emailRules: [
            v => !!v || 'Το πεδίο είναι υποχρεωτικό',
            v => /.+@.+/.test(v) || 'Το email δεν είναι σωστό',
        ],
        requiredRules: [
            v => !!v || 'Το πεδίο είναι υποχρεωτικό',
        ],
        passRules: [
            v => {    
                if( !user.id && !v ){
                    return 'Το πεδίο είναι υποχρεωτικό';
                } else {
                    return  !!v
                }
            },
        ],
    }),

    computed: {
      formTitle () {
        return !this.user.id ? 'Προσθήκη Χρήστη' : 'Επεξεργασία Χρήστη';
      },
    },

    methods: {
        closeDialog () {
            this.$emit('closeDialog');
        },

        getUserRoles() {
            axios.get('user-roles').then( res => this.roles = res.data )
        },

        save () {
            if (this.$refs.form.validate()) {
                this.loading = true;
                axios.post(`users`, this.user).then(res => {
                    this.$emit('closeDialog');
                    this.$emit('userEdited');
                    this.loading = false;
                });
            }
        },
    },

    created() {
        this.getUserRoles();
    },

    watch: {
        user(val) {
            window.user = val
        }
    }
  }
</script>