(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{10:function(e,t,n){"use strict";n.r(t);var a={props:{deleteDialog:Boolean,income:Object},data:function(){return{loading:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteItem:function(){var e=this;this.loading=!0,axios.delete("incomes/".concat(this.income.id)).then((function(t){e.$emit("closeDialog"),e.$emit("incomeDeleted"),e.loading=!1}))}}},o=n(0),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":e.closeDialog},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[n("v-card",{attrs:{loading:e.loading}},[n("v-card-title",{staticClass:"headline"},[e._v("Διαγραφή Είσπραξης")]),e._v(" "),n("v-card-text",[e._v("Είστε σίγουροι ότι θέλετε να διαγράψετε την είσπραξη στον "+e._s(e.income.customer?e.income.customer.name:"")+"?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v("Ακυρωση")]),e._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.deleteItem()}}},[e._v("διαγραφη")])],1)],1)],1)}),[],!1,null,null,null).exports,s={props:{dialog:Boolean,income:Object},data:function(){return{loading:!1,customers:[],valid:!1,activeItems:[{text:"Ενεργός",value:1},{text:"Ανενεργός",value:0}],nameRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],emailRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"},function(e){return/.+@.+/.test(e)||"Το email δεν είναι σωστό"}],requiredRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],passRules:[function(e){return income.id||e?!!e:"Το πεδίο είναι υποχρεωτικό"}]}},computed:{formTitle:function(){return this.income.id?"Επεξεργασία Είσπραξης":"Προσθήκη Είσπραξης"}},methods:{closeDialog:function(){this.$emit("closeDialog")},getCustomers:function(){var e=this;axios.get("customers").then((function(t){return e.customers=t.data}))},save:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,axios.post("incomes",this.income).then((function(t){e.$emit("closeDialog"),e.$emit("incomeEdited"),e.loading=!1})))}},created:function(){this.getCustomers()},watch:{income:function(e){window.income=e}}},c=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"400px"},on:{"click:outside":e.closeDialog},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{loading:e.loading}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.save(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-autocomplete",{attrs:{required:"",rules:e.requiredRules,items:e.customers,label:"Πελάτης","item-text":"name","item-value":"id"},model:{value:e.income.customer_id,callback:function(t){e.$set(e.income,"customer_id",t)},expression:"income.customer_id"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Ημερομηνία"},model:{value:e.income.created_at,callback:function(t){e.$set(e.income,"created_at",t)},expression:"income.created_at"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Ποσό"},model:{value:e.income.amount,callback:function(t){e.$set(e.income,"amount",t)},expression:"income.amount"}})],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Σχόλια"},model:{value:e.income.comments,callback:function(t){e.$set(e.income,"comments",t)},expression:"income.comments"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Ακυρωση")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Αποθηκευση")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,r={props:{isincome:Boolean,hideToolbar:Boolean,customer:String},components:{deleteDialog:i,editDialog:c},data:function(){return{dialog:!1,snackbar:!1,isSingleincome:!1,expanded:[],menu:!1,menuTo:!1,date:(new Date).toISOString().substr(0,10),searchQuery:[(new Date).toISOString().substr(0,10),null],singleExpand:!1,deleteDialog:!1,loading:!1,search:"",headers:[{text:"Πελάτης",align:"left",value:"customer.name"},{text:"Πωλητής",value:"user.name"},{text:"Ποσό",value:"amount",align:"center"},{text:"Ημερομηνία",value:"created_at"},{text:"Ενέργειες",value:"action",align:"right"}],incomes:[],editedItem:{},users:[],user_id:""}},created:function(){"Customers Single"==this.$route.name?this.isSingleincome=this.isincome:this.isSingleincome="incomes"==this.$route.name,this.getincomes(),this.$route.query.new&&(this.dialog=!0),this.getUsers()},methods:{getincomes:function(){var e=this;this.user_id||(this.user_id=""),this.loading=!0,axios.get("incomes?incomes=".concat(this.isSingleincome,"&date=").concat(this.searchQuery,"&user=").concat(this.user_id,"&customer=").concat(this.customer)).then((function(t){e.incomes=t.data,e.loading=!1,e.$route.query.new}))},getUsers:function(){var e=this;axios.get("users").then((function(t){e.users=t.data}))},editItem:function(e){this.editedItem=Object.assign({},e),this.dialog=!0},openDeleteDialog:function(e){this.editedItem=Object.assign({},e),this.deleteDialog=!0}},watch:{"$route.query":function(){this.$route.query.new&&(this.dialog=!0)}},computed:{pageTitle:function(){return"Εισπράξεις"}}},l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{class:{"pa-0":e.customer}},[n("v-row",[n("v-col",{class:{"pa-0":e.customer}},[n("v-card",{class:{"ma-0":e.customer,"ma-5":!e.customer},attrs:{shaped:"",outlined:"",loading:e.loading}},[e.hideToolbar?e._e():n("v-toolbar",{attrs:{flat:"",color:"secondary",dark:""}},[n("v-toolbar-title",[e._v(e._s(e.pageTitle))]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.editItem({products:[]})}}},[e._v("Προσθηκη")])],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.incomes,"sort-by":"name",search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-row",[n("v-col",{staticClass:"px-10",attrs:{cols:"12",sm:"6",md:"6"}},[n("v-autocomplete",{attrs:{items:e.users,label:"Πωλητής",clearable:"","item-text":"name","item-value":"id"},on:{input:e.getincomes,"click:clear":function(t){return e.getincomes()}},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),e._v(" "),n("v-col",{staticClass:"px-10",attrs:{cols:"12",sm:"6",md:"6"}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Αναζήτηση","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),n("v-row",{staticClass:"px-5"},[n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.searchQuery[0],transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.searchQuery,0,t)},"update:return-value":function(t){return e.$set(e.searchQuery,0,t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Από","prepend-icon":"mdi-calendar",readonly:"",clearable:""},on:{"click:clear":function(t){e.searchQuery[0]=null,e.getincomes()}},model:{value:e.searchQuery[0],callback:function(t){e.$set(e.searchQuery,0,t)},expression:"searchQuery[0]"}},a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",reactive:""},on:{input:function(t){e.getincomes(),e.$refs.menu.save(e.searchQuery[0])}},model:{value:e.searchQuery[0],callback:function(t){e.$set(e.searchQuery,0,t)},expression:"searchQuery[0]"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.searchQuery[0])}}},[e._v("OK")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[n("v-menu",{ref:"menuTo",attrs:{"close-on-content-click":!1,"return-value":e.searchQuery[1],transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.searchQuery,1,t)},"update:return-value":function(t){return e.$set(e.searchQuery,1,t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Έως",clearable:"","prepend-icon":"mdi-calendar",readonly:""},on:{"click:clear":function(t){e.searchQuery[1]=null,e.getincomes()}},model:{value:e.searchQuery[1],callback:function(t){e.$set(e.searchQuery,1,t)},expression:"searchQuery[1]"}},a))]}}]),model:{value:e.menuTo,callback:function(t){e.menuTo=t},expression:"menuTo"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",reactive:""},on:{input:function(t){e.getincomes(),e.$refs.menuTo.save(e.searchQuery[1])}},model:{value:e.searchQuery[1],callback:function(t){e.$set(e.searchQuery,1,t)},expression:"searchQuery[1]"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menuTo=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menuTo.save(e.searchQuery[1])}}},[e._v("OK")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return[n("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"teal"},on:{click:function(t){return e.editItem(a)}}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-pencil")])],1),e._v(" "),n("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(t){return e.openDeleteDialog(a)}}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-delete")])],1)]}}])}),e._v(" "),n("delete-dialog",{attrs:{income:e.editedItem,deleteDialog:e.deleteDialog},on:{incomeDeleted:function(t){e.getincomes(),e.snackbar=!0},closeDialog:function(t){e.deleteDialog=!1}}}),e._v(" "),n("edit-dialog",{attrs:{income:e.editedItem,dialog:e.dialog},on:{incomeEdited:function(t){e.getincomes(),e.snackbar=!0},closeDialog:function(t){e.dialog=!1,e.$route.query.new=!1}}}),e._v(" "),n("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          Η επιλογή σας αποθηκεύτηκε επιτυχώς\n          "),n("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("κλεισιμο")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);