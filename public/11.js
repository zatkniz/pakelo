(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{11:function(e,t,a){"use strict";a.r(t);var i={props:{deleteDialog:Boolean,visit:Object},data:function(){return{loading:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteItem:function(){var e=this;this.loading=!0,axios.delete("visits/".concat(this.visit.id)).then((function(t){e.$emit("closeDialog"),e.$emit("visitDeleted"),e.loading=!1}))}}},s=a(0),n=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":e.closeDialog},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("v-card",{attrs:{loading:e.loading}},[a("v-card-title",{staticClass:"headline"},[e._v("Διαγραφή Χρήστη")]),e._v(" "),a("v-card-text",[e._v("Είστε σίγουροι ότι θέλετε να διαγράψετε την επίσκεψη στον "+e._s(e.visit.customer?e.visit.customer.name:"")+"?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v("Ακυρωση")]),e._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.deleteItem()}}},[e._v("διαγραφη")])],1)],1)],1)}),[],!1,null,null,null).exports,r={props:{dialog:Boolean,visit:Object},data:function(){return{loading:!1,customers:[],valid:!1,activeItems:[{text:"Ενεργός",value:1},{text:"Ανενεργός",value:0}],nameRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],emailRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"},function(e){return/.+@.+/.test(e)||"Το email δεν είναι σωστό"}],requiredRules:[function(e){return!!e||"Το πεδίο είναι υποχρεωτικό"}],passRules:[function(e){return visit.id||e?!!e:"Το πεδίο είναι υποχρεωτικό"}]}},computed:{formTitle:function(){return this.visit.id?"Επεξεργασία Επίσκεψης":"Προσθήκη Επίσκεψης"}},methods:{closeDialog:function(){this.$emit("closeDialog")},getCustomers:function(){var e=this;axios.get("customers").then((function(t){return e.customers=t.data}))},save:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,axios.post("visits",this.visit).then((function(t){e.$emit("closeDialog"),e.$emit("visitEdited"),e.loading=!1})))}},created:function(){this.getCustomers()},watch:{visit:function(e){window.visit=e}}},o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"400px"},on:{"click:outside":e.closeDialog},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{loading:e.loading}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.save(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-autocomplete",{attrs:{required:"",rules:e.requiredRules,items:e.customers,label:"Πελάτης","item-text":"name","item-value":"id"},model:{value:e.visit.customer_id,callback:function(t){e.$set(e.visit,"customer_id",t)},expression:"visit.customer_id"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Ημερομηνία"},model:{value:e.visit.created_at,callback:function(t){e.$set(e.visit,"created_at",t)},expression:"visit.created_at"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Σχόλια"},model:{value:e.visit.comments,callback:function(t){e.$set(e.visit,"comments",t)},expression:"visit.comments"}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Ακυρωση")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[e._v("Αποθηκευση")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,l={props:{isOrder:Boolean,hideToolbar:Boolean,customer:String},components:{deleteDialog:n,editDialog:o},data:function(){return{dialog:!1,snackbar:!1,menu:!1,menuTo:!1,date:(new Date).toISOString().substr(0,10),deleteDialog:!1,loading:!1,searchQuery:[(new Date).toISOString().substr(0,10),null],search:"",headers:[{text:"Πελάτης",align:"left",value:"customer.name"},{text:"Πωλητής",value:"user.name"},{text:"Ημερομηνία",value:"created_at"},{text:"Ενέργειες",value:"action",align:"right"}],visits:[],users:[],user_id:"",editedItem:{}}},created:function(){this.getvisits(),this.$route.query.new&&(this.dialog=!0),this.getUsers()},methods:{getvisits:function(){var e=this;this.user_id||(this.user_id=""),this.loading=!0,axios.get("visits?date=".concat(this.searchQuery,"&user=").concat(this.user_id,"&customer=").concat(this.customer)).then((function(t){e.visits=t.data,e.loading=!1,e.$route.query.new}))},getUsers:function(){var e=this;axios.get("users").then((function(t){e.users=t.data}))},editItem:function(e){this.editedItem=Object.assign({},e),this.dialog=!0},openDeleteDialog:function(e){this.editedItem=Object.assign({},e),this.deleteDialog=!0}},watch:{"$route.query":function(){this.$route.query.new&&(this.dialog=!0)}}},c=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{class:{"pa-0":e.customer}},[a("v-row",[a("v-col",{class:{"pa-0":e.customer}},[a("v-card",{class:{"ma-0":e.customer,"ma-5":!e.customer},attrs:{shaped:"",outlined:"",loading:e.loading}},[e.hideToolbar?e._e():a("v-toolbar",{attrs:{flat:"",color:"secondary",dark:""}},[a("v-toolbar-title",[e._v("Επισκέψεις")]),e._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.editItem({})}}},[e._v("Προσθηκη Επισκεψης")])],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{search:e.search,headers:e.headers,items:e.visits,"sort-by":"name"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-row",[a("v-col",{staticClass:"px-10",attrs:{cols:"12",sm:"6",md:"6"}},[a("v-autocomplete",{attrs:{items:e.users,label:"Πωλητής",clearable:"","item-text":"name","item-value":"id"},on:{input:e.getvisits,"click:clear":function(t){return e.getvisits()}},model:{value:e.user_id,callback:function(t){e.user_id=t},expression:"user_id"}})],1),e._v(" "),a("v-col",{staticClass:"px-10",attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Αναζήτηση","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),a("v-row",{staticClass:"px-5"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.searchQuery[0],transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.searchQuery,0,t)},"update:return-value":function(t){return e.$set(e.searchQuery,0,t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-text-field",e._g({attrs:{label:"Από","prepend-icon":"mdi-calendar",readonly:"",clearable:""},on:{"click:clear":function(t){e.searchQuery[0]=null,e.getvisits()}},model:{value:e.searchQuery[0],callback:function(t){e.$set(e.searchQuery,0,t)},expression:"searchQuery[0]"}},i))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",reactive:""},on:{input:function(t){e.getvisits(),e.$refs.menu.save(e.searchQuery[0])}},model:{value:e.searchQuery[0],callback:function(t){e.$set(e.searchQuery,0,t)},expression:"searchQuery[0]"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.searchQuery[0])}}},[e._v("OK")])],1)],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-menu",{ref:"menuTo",attrs:{"close-on-content-click":!1,"return-value":e.searchQuery[1],transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.searchQuery,1,t)},"update:return-value":function(t){return e.$set(e.searchQuery,1,t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-text-field",e._g({attrs:{label:"Έως",clearable:"","prepend-icon":"mdi-calendar",readonly:""},on:{"click:clear":function(t){e.searchQuery[1]=null,e.getvisits()}},model:{value:e.searchQuery[1],callback:function(t){e.$set(e.searchQuery,1,t)},expression:"searchQuery[1]"}},i))]}}]),model:{value:e.menuTo,callback:function(t){e.menuTo=t},expression:"menuTo"}},[e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",reactive:""},on:{input:function(t){e.getvisits(),e.$refs.menuTo.save(e.searchQuery[1])}},model:{value:e.searchQuery[1],callback:function(t){e.$set(e.searchQuery,1,t)},expression:"searchQuery[1]"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menuTo=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menuTo.save(e.searchQuery[1])}}},[e._v("OK")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var i=t.item;return[a("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"teal"},on:{click:function(t){return e.editItem(i)}}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-pencil")])],1),e._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(t){return e.openDeleteDialog(i)}}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-delete")])],1)]}}])}),e._v(" "),a("delete-dialog",{attrs:{visit:e.editedItem,deleteDialog:e.deleteDialog},on:{visitDeleted:function(t){e.getvisits(),e.snackbar=!0},closeDialog:function(t){e.deleteDialog=!1}}}),e._v(" "),a("edit-dialog",{attrs:{visit:e.editedItem,dialog:e.dialog},on:{visitEdited:function(t){e.getvisits(),e.snackbar=!0},closeDialog:function(t){e.dialog=!1,e.$route.query.new=!1}}}),e._v(" "),a("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          Η επιλογή σας αποθηκεύτηκε επιτυχώς\n          "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("κλεισιμο")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);