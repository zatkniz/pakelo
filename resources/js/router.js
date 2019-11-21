import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Dashboard",
            component: () => import("./views/Dashboard")
        },
        {
            path: "/users",
            name: "Users",
            component: () => import("./views/Users")
        },
        {
            path: "/customers",
            name: "Customers",
            component: () => import("./views/Customers")
        },
        {
            path: "/customer/:id",
            name: "Customers Single",
            component: () => import("./views/CustomerSingle")
        },
        {
            path: "/customer",
            name: "Customers New",
            component: () => import("./views/CustomerSingle")
        },
        {
            path: "/products",
            name: "Products",
            component: () => import("./views/Products")
        }
    ]
});

export default router;
