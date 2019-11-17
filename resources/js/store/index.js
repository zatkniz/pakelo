import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
    customer: {},
    auth: {}
  },
  mutations: {
    SET_AUTH: (state, payload) => (state.auth = payload),
    SET_CUSTOMERS: (state, payload) => (state.customers = payload),
    SET_CUSTOMER: (state, payload) => (state.customer = payload)
  },
  actions: {
    getAuth: ({ commit }) =>
      axios.get('auth').then(res => {
        return commit('SET_AUTH', res.data);
      }),
    getAllcustomers: ({ commit }) =>
      axios.get('customers').then(res => {
        return commit('SET_CUSTOMERS', res.data);
      }),
    getSinglecustomer: ({ state, commit }, id) => {
      if( !id ){
        return commit(
          'SET_CUSTOMER',
          {}
        );
      }
      
      if (state.customers.length) {
        return commit(
          'SET_CUSTOMER',
          state.customers.find(customer => customer.id == id)
        );
      }

      axios.get(`customers/${id}`).then(res => {
        return commit('SET_CUSTOMER', res.data);
      });
    }
  },
  getters: {
    getAuth: state => state.auth,
    getcustomers: state => state.customers,
    getcustomer: state => state.customer
  },
  modules: {}
});