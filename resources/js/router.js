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
            path: "/visits",
            name: "Visits",
            component: () => import("./views/Visits")
        },
        {
            path: "/offers",
            name: "Offers",
            component: () => import("./views/Users")
        },
        {
            path: "/orders",
            name: "Orders",
            component: () => import("./views/Users")
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
        },
        {
            path: "/product/:id",
            name: "Product Single",
            component: () => import("./views/ProductSingle")
        },
        {
            path: "/product",
            name: "Product New",
            component: () => import("./views/ProductSingle")
        },
        {
            path: "/lists-descriptions",
            name: "Lists Description",
            component: () => import("./views/Lists")
        },
        {
            path: "/lists-categories",
            name: "Lists Categories",
            component: () => import("./views/Lists")
        },
        {
            path: "/lists-uses",
            name: "Lists Uses",
            component: () => import("./views/Lists")
        },
        {
            path: "/lists-brand-types",
            name: "Lists Brands",
            component: () => import("./views/Lists")
        },
        {
            path: "/lists-cities",
            name: "Lists Cities",
            component: () => import("./views/Lists")
        },
        {
            path: "/lists-seller-types",
            name: "Lists Seller Types",
            component: () => import("./views/Lists")
        }
    ]
});

export default router;
