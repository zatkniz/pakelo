import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: [],
        customer: {},
        products: [],
        product: {},
        auth: {}
    },
    mutations: {
        SET_AUTH: (state, payload) => (state.auth = payload),
        SET_CUSTOMERS: (state, payload) => (state.customers = payload),
        SET_CUSTOMER: (state, payload) => (state.customer = payload),
        SET_PRODUCTS: (state, payload) => (state.products = payload),
        SET_PRODUCT: (state, payload) => (state.product = payload)
    },
    actions: {
        getAuth: ({ commit }) =>
            axios.get("auth").then(res => {
                return commit("SET_AUTH", res.data);
            }),
        getAllcustomers: ({ commit }) =>
            axios.get("customers").then(res => {
                return commit("SET_CUSTOMERS", res.data);
            }),
        getSinglecustomer: ({ state, commit }, id) => {
            if (!id) {
                return commit("SET_CUSTOMER", {});
            }

            if (state.customers.length) {
                return commit(
                    "SET_CUSTOMER",
                    state.customers.find(customer => customer.id == id)
                );
            }

            axios.get(`customers/${id}`).then(res => {
                return commit("SET_CUSTOMER", res.data);
            });
        },
        getAllproducts: ({ commit }) =>
            axios.get("products").then(res => {
                return commit("SET_PRODUCTS", res.data);
            }),
        getSingleproduct: ({ state, commit }, id) => {
            if (!id) {
                return commit("SET_PRODUCT", {});
            }

            if (state.products.length) {
                return commit(
                    "SET_PRODUCT",
                    state.products.find(product => product.id == id)
                );
            }

            axios.get(`products/${id}`).then(res => {
                return commit("SET_PRODUCT", res.data);
            });
        }
    },
    getters: {
        getAuth: state => state.auth,
        getcustomers: state => state.customers,
        getcustomer: state => state.customer,
        getproducts: state => state.products,
        getproduct: state => state.product
    },
    modules: {}
});
