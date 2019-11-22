(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{56:function(e,t,s){"use strict";s.r(t);var a={components:{customerDetails:s(6).a},data:function(){return{tab:null}}},o=s(0),r=Object(o.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"ma-5"},[s("v-tabs",{attrs:{"background-color":"secondary",color:"#fff",grow:"",dark:"",height:"64"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab",[e._v("Στοιχεια")]),e._v(" "),s("v-tab",[e._v("Παραγγελιες")])],1),e._v(" "),s("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-tab-item",[s("customer-details")],1),e._v(" "),s("v-tab-item",[s("v-card",{attrs:{flat:"",color:"basil"}},[s("v-card-text",[e._v("Παραγγελίες")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},6:function(e,t,s){"use strict";var a=s(2);function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var l={props:{customer_id:Number},data:function(){return{loading:!1,snackbar:!1,valid:!1,nameRules:[function(e){return!!e||"Συμπληρώστε την επωνυμία του πελάτη."}],users:[],cities:[],brandTypes:[],sellerTypes:[],status:[{value:!1,text:"Ανενεργός"},{value:!0,text:"Ενεργός"}]}},methods:{getCustomer:function(){this.customer_id||this.$route.params.id?this.$store.dispatch("getSinglecustomer",this.customer_id||this.$route.params.id):this.$store.dispatch("getSinglecustomer",null)},saveCustomer:function(){var e=this;this.loading=!0,axios.post("customers",this.customer).then((function(t){e.loading=!1,e.snackbar=!0,e.$store.dispatch("getAllcustomers")}))},validate:function(){this.$refs.form.validate()&&this.saveCustomer()},getUsers:function(){var e=this;axios.get("users").then((function(t){e.users=t.data}))},getBrandTypes:function(){var e=this;axios.get("brand-types").then((function(t){e.brandTypes=t.data}))},getSellerTypes:function(){var e=this;axios.get("seller-types").then((function(t){e.sellerTypes=t.data}))},getCities:function(){var e=this;axios.get("cities").then((function(t){e.cities=t.data}))}},mounted:function(){this.getCustomer(),this.getUsers(),this.getCities(),this.getBrandTypes(),this.getSellerTypes()},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(s,!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(a.b)({customer:"getcustomer"})),watch:{customer_id:function(e){this.$store.dispatch("getSinglecustomer",e)}}},c=s(0),i=Object(c.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{attrs:{loading:e.loading}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.validate(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{rules:e.nameRules,label:"Επωνυμία"},model:{value:e.customer.name,callback:function(t){e.$set(e.customer,"name",t)},expression:"customer.name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Α.Φ.Μ."},model:{value:e.customer.afm,callback:function(t){e.$set(e.customer,"afm",t)},expression:"customer.afm"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Δ.Ο.Υ."},model:{value:e.customer.doy,callback:function(t){e.$set(e.customer,"doy",t)},expression:"customer.doy"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Διακριτικό Όνομα"},model:{value:e.customer.display_name,callback:function(t){e.$set(e.customer,"display_name",t)},expression:"customer.display_name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Υπεύθυνος"},model:{value:e.customer.responsible,callback:function(t){e.$set(e.customer,"responsible",t)},expression:"customer.responsible"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Τηλέφ. 1"},model:{value:e.customer.phone,callback:function(t){e.$set(e.customer,"phone",t)},expression:"customer.phone"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-text-field",{attrs:{label:"Τηλέφ. 2"},model:{value:e.customer.phone_2,callback:function(t){e.$set(e.customer,"phone_2",t)},expression:"customer.phone_2"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("v-text-field",{attrs:{label:"Email"},model:{value:e.customer.email,callback:function(t){e.$set(e.customer,"email",t)},expression:"customer.email"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("v-text-field",{attrs:{label:"Κινητό"},model:{value:e.customer.mobile,callback:function(t){e.$set(e.customer,"mobile",t)},expression:"customer.mobile"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("v-text-field",{attrs:{label:"FAX"},model:{value:e.customer.fax,callback:function(t){e.$set(e.customer,"fax",t)},expression:"customer.fax"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[s("v-text-field",{attrs:{label:"Επάγγελμα"},model:{value:e.customer.job,callback:function(t){e.$set(e.customer,"job",t)},expression:"customer.job"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[s("v-autocomplete",{attrs:{items:e.cities,label:"Πόλη","item-text":"name","item-value":"id"},model:{value:e.customer.city_id,callback:function(t){e.$set(e.customer,"city_id",t)},expression:"customer.city_id"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"5",md:"5"}},[s("v-text-field",{attrs:{label:"Διεύθυνση"},model:{value:e.customer.address,callback:function(t){e.$set(e.customer,"address",t)},expression:"customer.address"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[s("v-text-field",{attrs:{label:"Πιστωτικό Όριο","append-icon":"mdi-currency-eur"},model:{value:e.customer.limit,callback:function(t){e.$set(e.customer,"limit",t)},expression:"customer.limit"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[s("v-autocomplete",{attrs:{items:e.users,label:"Πωλητής","item-text":"name","item-value":"id"},model:{value:e.customer.user_id,callback:function(t){e.$set(e.customer,"user_id",t)},expression:"customer.user_id"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[s("v-select",{attrs:{items:e.status,label:"Κατάσταση","item-text":"text","item-value":"value"},model:{value:e.customer.active,callback:function(t){e.$set(e.customer,"active",t)},expression:"customer.active"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[s("v-autocomplete",{attrs:{items:e.brandTypes,label:"Μάρκα","item-text":"name","item-value":"id"},model:{value:e.customer.brand_type_id,callback:function(t){e.$set(e.customer,"brand_type_id",t)},expression:"customer.brand_type_id"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[s("v-select",{attrs:{items:e.sellerTypes,label:"Τύπος","item-text":"name","item-value":"id"},model:{value:e.customer.seller_type_id,callback:function(t){e.$set(e.customer,"seller_type_id",t)},expression:"customer.seller_type_id"}})],1)],1)],1)],1),e._v(" "),e.customer_id?e._e():s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"mx-5 mb-5",attrs:{color:"primary",type:"submit"}},[e._v("Αποθηκευση")])],1)],1),e._v(" "),s("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    Η επιλογή σας αποθηκεύτηκε επιτυχώς\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("κλεισιμο")])],1)],1)}),[],!1,null,null,null);t.a=i.exports}}]);