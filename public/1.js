(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{24:function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r,o){var i=e&&e.prototype instanceof v?e:v,n=Object.create(i.prototype),a=new E(o||[]);return n._invoke=function(t,e,r){var o=u;return function(i,n){if(o===p)throw new Error("Generator is already running");if(o===f){if("throw"===i)throw n;return $()}for(r.method=i,r.arg=n;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===u)throw o=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var s=l(t,e,r);if("normal"===s.type){if(o=r.done?f:d,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=f,r.method="throw",r.arg=s.arg)}}}(t,r,a),n}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",h={};function v(){}function m(){}function g(){}var _={};_[n]=function(){return this};var b=Object.getPrototypeOf,y=b&&b(b(I([])));y&&y!==r&&o.call(y,n)&&(_=y);var x=g.prototype=v.prototype=Object.create(_);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(r,i){function n(){return new Promise((function(e,n){!function e(r,i,n,a){var c=l(t[r],t,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,n,a)}),(function(t){e("throw",t,n,a)})):Promise.resolve(u).then((function(t){s.value=t,n(s)}),(function(t){return e("throw",t,n,a)}))}a(c.arg)}(r,i,e,n)}))}return e=e?e.then(n,n):n()}}function O(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=l(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,h;var n=i.arg;return n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function I(t){if(t){var r=t[n];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(o.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,o,i){var n=new k(s(e,r,o,i));return t.isGeneratorFunction(r)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},w(x),x[c]="Generator",x[n]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=I,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(o,i){return c.type="throw",c.arg=t,r.next=o,i&&(r.method="next",r.arg=e),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=t,a.arg=e,n?(this.method="next",this.next=n.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var i=o.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:I(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},3:function(t,e,r){t.exports=r(24)},8:function(t,e,r){"use strict";var o=r(3),i=r.n(o),n=r(1),a={props:{dialog:Boolean,selectedAttribute:Number,editedItem:Object},components:{productDetails:v},data:function(){return{loading:!1,attribute:{},valid:!1,nameRules:[function(t){return!!t||"Το πεδίο είναι υποχρεωτικό."}]}},methods:{closeDialog:function(){this.$emit("closeDialog")},validate:function(){this.$refs.form.validate()&&this.saveproduct()},saveproduct:function(){var t=this;this.loading=!0,this.editedItem.product_id=this.$route.params.id,this.editedItem.price_per_kg=parseInt(this.editedItem.price)/parseFloat(this.editedItem.lt_kg),axios.post("products-attributes",this.editedItem).then((function(e){t.$store.dispatch("getAllproducts"),setTimeout((function(){t.loading=!1,t.editedItem={},t.$emit("attributeSaved")}),1e3)}))}}},c=r(0),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"400px"},on:{"click:outside":function(e){t.closeDialog(),t.editedItem={}}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{attrs:{loading:t.loading}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.validate(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Κωδικός"},model:{value:t.editedItem.code,callback:function(e){t.$set(t.editedItem,"code",e)},expression:"editedItem.code"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Lt/Kg"},model:{value:t.editedItem.lt_kg,callback:function(e){t.$set(t.editedItem,"lt_kg",e)},expression:"editedItem.lt_kg"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6",sm:"6",md:"6"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Τιμή"},model:{value:t.editedItem.price,callback:function(e){t.$set(t.editedItem,"price",e)},expression:"editedItem.price"}})],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mx-5 mb-5",attrs:{color:"primary",type:"submit"}},[t._v("Αποθηκευση")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,l={props:{deleteDialog:Boolean,item:Object},data:function(){return{loading:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteItem:function(){var t=this;this.loading=!0,axios.delete("products-attributes/".concat(this.item.id)).then((function(e){t.$store.dispatch("getAllproducts"),setTimeout((function(){t.loading=!1,t.editedItem={},t.$emit("closeDialog"),t.$emit("attributeSaved")}),1e3)}))}}},u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":t.closeDialog},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("v-card",{attrs:{loading:t.loading}},[r("v-card-title",{staticClass:"headline"},[t._v("Διαγραφή")]),t._v(" "),r("v-card-text",[t._v("Είστε σίγουροι ότι θέλετε να διαγράψετε το "+t._s(t.item.code)+"?")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v("Ακυρωση")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("διαγραφη")])],1)],1)],1)}),[],!1,null,null,null).exports;function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={props:{product_id:Number},components:{editAttribute:s,deleteDialog:u},data:function(){return{dialog:!1,deleteDialog:!1,selectedAttribute:null,loading:!1,snackbar:!1,valid:!1,editedItem:{},nameRules:[function(t){return!!t||"Το πεδίο είναι υποχρεωτικό."}],products:[],categories:[],descriptions:[],tableHeaders:[{text:"Κωδικός",align:"center",sortable:!1,value:"code"},{text:"Lt/Kg",align:"center",value:"lt_kg"},{text:"Tιμή",align:"center",value:"price"},{text:"Tιμή Lt/Kg",align:"center",value:"price_per_kg"}],uses:[],status:[{value:!1,text:"Ανενεργός"},{value:!0,text:"Ενεργός"}]}},methods:{openEditAttributeDialog:function(t){this.selectedAttribute=t.id,this.editedItem=Object.assign({},t),this.dialog=!0},openDeleteDialog:function(t){this.editedItem=Object.assign({},t),this.deleteDialog=!0},retriveProducts:function(){this.dialog=!1,this.$store.dispatch("getSingleproduct",this.product_id||this.$route.params.id)},calculatePrice:function(t){var e=.4*parseFloat(t);return(parseFloat(e)+parseFloat(t)).toFixed(2)},getproduct:function(){this.product_id||this.$route.params.id?this.$store.dispatch("getSingleproduct",this.product_id||this.$route.params.id):this.$store.dispatch("getSingleproduct",null)},saveproduct:function(){var t=this;this.loading=!0,axios.post("products",this.product).then((function(e){return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!1,t.snackbar=!0,r.next=4,i.a.awrap(t.$store.dispatch("getAllproducts"));case 4:t.$route.params.id||setTimeout((function(){window.location.hash="#/product/".concat(e.data.id)}),1e3);case 5:case"end":return r.stop()}}))}))},validate:function(){this.$refs.form.validate()&&this.saveproduct()},getproducts:function(){var t=this;axios.get("products").then((function(e){t.products=e.data}))},getdescriptions:function(){var t=this;axios.get("products-descriptions").then((function(e){t.descriptions=e.data}))},getuses:function(){var t=this;axios.get("products-uses").then((function(e){t.uses=e.data}))},getcategories:function(){var t=this;axios.get("products-categories").then((function(e){t.categories=e.data}))}},mounted:function(){this.getproduct(),this.getproducts(),this.getcategories(),this.getdescriptions(),this.getuses(),1==this.auth.user_role_id&&this.tableHeaders.push({text:"Ενέργειες",value:"action",align:"right"})},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)({product:"getproduct",auth:"getAuth"})),watch:{product_id:function(t){this.$store.dispatch("getSingleproduct",t)},auth:function(){1==this.auth.user_role_id&&this.tableHeaders.push({text:"Ενέργειες",value:"action",align:"right"})}}},h=Object(c.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{loading:t.loading}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.validate(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"9",md:"9"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"Ονομασία"},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3",md:"3"}},[r("v-text-field",{attrs:{label:"Ιξώδες"},model:{value:t.product.ixodes,callback:function(e){t.$set(t.product,"ixodes",e)},expression:"product.ixodes"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-autocomplete",{attrs:{readonly:1==t.auth.user_role_id,items:t.categories,label:"Κατηγορία","item-text":"name","item-value":"id"},model:{value:t.product.product_category_id,callback:function(e){t.$set(t.product,"product_category_id",e)},expression:"product.product_category_id"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-autocomplete",{attrs:{items:t.descriptions,label:"Περιγραφή","item-text":"name","item-value":"id"},model:{value:t.product.product_description_id,callback:function(e){t.$set(t.product,"product_description_id",e)},expression:"product.product_description_id"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-autocomplete",{attrs:{items:t.uses,label:"Εφαρμογή","item-text":"name","item-value":"id"},model:{value:t.product.product_use_id,callback:function(e){t.$set(t.product,"product_use_id",e)},expression:"product.product_use_id"}})],1),t._v(" "),t.product.attributes?r("v-col",{staticClass:"text-right",attrs:{cols:"12",sm:"12",md:"12"}},[1==t.auth.user_role_id?r("v-btn",{staticClass:"mb-5",attrs:{color:"primary"},on:{click:t.openEditAttributeDialog}},[t._v("Προσθηκη")]):t._e(),t._v(" "),r("v-data-table",{staticClass:"products-table",attrs:{"hide-default-footer":"",headers:t.tableHeaders,items:t.product.attributes},scopedSlots:t._u([{key:"item.price",fn:function(e){var o=e.item;return[t._v("\n                "+t._s(t.calculatePrice(o.price))+"€\n                "),1==t.auth.user_role_id?r("span",[t._v("("+t._s(o.price)+"€)")]):t._e()]}},{key:"item.lt_kg",fn:function(e){var r=e.item;return[t._v(t._s(r.lt_kg)+"Lt")]}},{key:"item.price_per_kg",fn:function(e){var o=e.item;return[t._v("\n                "+t._s(t.calculatePrice(o.price/o.lt_kg))+"€\n                "),1==t.auth.user_role_id?r("span",[t._v("("+t._s((o.price/o.lt_kg).toFixed(2))+"€)")]):t._e()]}},{key:"item.action",fn:function(e){var o=e.item;return[r("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"teal"},on:{click:function(e){return t.openEditAttributeDialog(o)}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),t._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(e){return t.openDeleteDialog(o)}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)]}}],null,!1,2715084581)})],1):t._e()],1)],1)],1),t._v(" "),t.product_id?t._e():r("v-card-actions",[r("v-spacer"),t._v(" "),1==t.auth.user_role_id?r("v-btn",{staticClass:"mx-5 mb-5",attrs:{color:"primary",type:"submit"}},[t._v("Αποθηκευση")]):t._e()],1)],1),t._v(" "),r("edit-attribute",{attrs:{editedItem:t.editedItem,dialog:t.dialog},on:{closeDialog:function(e){t.dialog=!1},attributeSaved:function(e){t.retriveProducts(),t.snackbar=!0}}}),t._v(" "),r("delete-dialog",{attrs:{item:t.editedItem,deleteDialog:t.deleteDialog},on:{attributeSaved:function(e){t.retriveProducts(),t.snackbar=!0},closeDialog:function(e){t.deleteDialog=!1}}}),t._v(" "),r("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    Η επιλογή σας αποθηκεύτηκε επιτυχώς\n    "),r("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("κλεισιμο")])],1)],1)}),[],!1,null,null,null),v=e.a=h.exports}}]);