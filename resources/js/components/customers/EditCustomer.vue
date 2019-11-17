<template>
    <v-dialog v-model="dialog" max-width="800px">
        <customer-details :customer_id="user.id" />
    </v-dialog>
</template>

<script>
    import customerDetails from './Details';
    export default {
        props: {
            dialog: Boolean,
            user: Object
        },
        components: {
            customerDetails
        },
        data: () => ({}),
    }
</script>