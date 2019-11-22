(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{53:function(e,t,s){"use strict";s.r(t);var a={props:{deleteDialog:Boolean,user:Object},data:function(){return{loading:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteItem:function(){var e=this;this.loading=!0,axios.delete("users/".concat(this.user.id)).then((function(t){e.$emit("closeDialog"),e.$emit("userDeleted"),e.loading=!1}))}}},l=s(0),r=Object(l.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":e.closeDialog},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[s("v-card",{attrs:{loading:e.loading}},[s("v-card-title",{staticClass:"headline"},[e._v("Διαγραφή Χρήστη")]),e._v(" "),s("v-card-text",[e._v("Είστε σίγουροι ότι θέλετε να διαγράψετε τον χρήστη "+e._s(e.user.name)+"?")]),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v("Ακυρωση")]),e._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.deleteItem()}}},[e._v("διαγραφη")])],1)],1)],1)}),[],!1,null,null,null).exports,i={props:{dialog:Boolean,user:Object},data:function(){return{loading:!1,roles:[],valid:!1,activeItems:[{text:"Ενεργός",value:1},{text:"Ανενεργός",value:0}],nameRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],emailRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"},function(e){return/.+@.+/.test(e)||"Το email δεν είναι σωστό"}],requiredRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],passRules:[function(e){return user.id||e?!!e:"Το πεδίο είναι υποχρεωτικό"}]}},computed:{formTitle:function(){return this.user.id?"Επεξεργασία Χρήστη":"Προσθήκη Χρήστη"}},methods:{closeDialog:function(){this.$emit("closeDialog")},getUserRoles:function(){var e=this;axios.get("user-roles").then((function(t){return e.roles=t.data}))},save:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,axios.post("users",this.user).then((function(t){e.$emit("closeDialog"),e.$emit("userEdited"),e.loading=!1})))}},created:function(){this.getUserRoles()},watch:{user:function(e){window.user=e}}},n={components:{deleteUserDialog:r,editUserDialog:Object(l.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{"max-width":"800px"},on:{"click:outside":e.closeDialog},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{attrs:{loading:e.loading}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.save(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{required:"",rules:e.nameRules,label:"Όνομα"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[s("v-text-field",{attrs:{required:"",rules:e.emailRules,label:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{required:"",rules:e.requiredRules,label:"Username"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Τηλέφωνο"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Τηλέφωνο 2"},model:{value:e.user.phone_2,callback:function(t){e.$set(e.user,"phone_2",t)},expression:"user.phone_2"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-select",{attrs:{required:"",rules:e.requiredRules,items:e.roles,label:"Ρόλος","item-text":"name","item-value":"id"},model:{value:e.user.user_role_id,callback:function(t){e.$set(e.user,"user_role_id",t)},expression:"user.user_role_id"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-select",{attrs:{required:"",rules:e.requiredRules,items:e.activeItems,label:"Κατάσταση","item-text":"text","item-value":"value"},model:{value:e.user.active,callback:function(t){e.$set(e.user,"active",t)},expression:"user.active"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{rules:e.passRules,label:"Κωδικός",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Ακυρωση")]),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Αποθηκευση")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{dialog:!1,snackbar:!1,deleteDialog:!1,loading:!1,headers:[{text:"Όνομα",align:"left",value:"name"},{text:"Εmail",value:"email"},{text:"Username",value:"username"},{text:"Ρόλος",value:"user_role.name"},{text:"Κατάσταση",value:"active_state"},{text:"Ενέργειες",value:"action",align:"right"}],users:[],editedItem:{}}},created:function(){this.getUsers()},methods:{getUsers:function(){var e=this;this.loading=!0,axios.get("users").then((function(t){e.users=t.data,e.loading=!1}))},editItem:function(e){this.editedItem=Object.assign({},e),this.dialog=!0},openDeleteDialog:function(e){this.editedItem=Object.assign({},e),this.deleteDialog=!0}}},o=Object(l.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"ma-5",attrs:{shaped:"",outlined:"",loading:e.loading}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"sort-by":"name"},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"secondary",dark:""}},[s("v-toolbar-title",[e._v("Χρήστες")]),e._v(" "),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.editItem({})}}},[e._v("Προσθηκη Χρηστη")])],1)]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return[s("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"teal"},on:{click:function(t){return e.editItem(a)}}},[s("v-icon",{attrs:{small:""}},[e._v("\n                                mdi-pencil\n                            ")])],1),e._v(" "),s("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(t){return e.openDeleteDialog(a)}}},[s("v-icon",{attrs:{small:""}},[e._v("\n                                mdi-delete\n                            ")])],1)]}}])}),e._v(" "),s("delete-user-dialog",{attrs:{user:e.editedItem,deleteDialog:e.deleteDialog},on:{userDeleted:function(t){e.getUsers(),e.snackbar=!0},closeDialog:function(t){e.deleteDialog=!1}}}),e._v(" "),s("edit-user-dialog",{attrs:{user:e.editedItem,dialog:e.dialog},on:{userEdited:function(t){e.getUsers(),e.snackbar=!0},closeDialog:function(t){e.dialog=!1}}}),e._v(" "),s("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                  Η επιλογή σας αποθηκεύτηκε επιτυχώς\n                  "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n                    κλεισιμο\n                  ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);