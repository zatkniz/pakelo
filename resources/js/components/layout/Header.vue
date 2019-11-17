<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="toggleSidebar()" />
        <v-toolbar-title
            style="width: 300px"
            class="ml-0 pl-0"
        >
            <img src="/assets/logo.png">
        </v-toolbar-title>
        <v-autocomplete
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="hidden-sm-and-down"
            :items="customers"
            item-text="name"
            item-value="id"
            v-model="customer"
            @change="navigateToCustomerSingle"
        />
        <v-spacer />
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                    text
                    v-on="on"
                    class="text-capitalize"
                >
                {{auth.name}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                @click="logout"
                >
                <v-list-item-title>Έξοδος</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        data: () => ({
            customer: null
        }),
        methods: {
            toggleSidebar() {
                this.$emit('toggleSidebar')
            },
            logout() {
                axios
                .post("logout")
                .then(res => window.location.reload())
                .catch(err => window.location.reload())
            },
            navigateToCustomerSingle () {
                this.$router.push(`/customer/${this.customer}`)
            }
        },
        computed: {
            ...mapGetters({
                auth :'getAuth',
                customers: 'getcustomers'
            })
        }
    }
</script>