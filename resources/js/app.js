require("./bootstrap");

const Vue = require("vue");
import Vuetify from "vuetify";

Vue.use(Vuetify);

import layout from "./components/layout/Layout";
import login from "./views/Login";

import router from "./router";
import store from "./store";

require("../css/main.css");
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: "#e41513",
                    secondary: "#242424",
                    accent: "#8bc34a",
                    error: "#3f51b5",
                    warning: "#2196f3",
                    info: "#03a9f4",
                    success: "#ffc107"
                }
            }
        }
    }),
    router,
    store,
    components: {
        layout,
        login
    },
    created() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js");
        }
        this.$store.dispatch("getAuth");
        this.$store.dispatch("getAllproducts");
        return this.$store.dispatch("getAllcustomers");
    }
});
