(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(t,e,i){"use strict";i.r(e);var a={props:{deleteDialog:Boolean,item:Object,itemRoute:String},data:function(){return{loading:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteItem:function(){var t=this;this.loading=!0,axios.delete("".concat(this.itemRoute,"/").concat(this.item.id)).then((function(e){t.$emit("closeDialog"),t.$emit("itemDeleted"),t.loading=!1}))}}},n=i(0),l=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":t.closeDialog},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[i("v-card",{attrs:{loading:t.loading}},[i("v-card-title",{staticClass:"headline"},[t._v("Διαγραφή")]),t._v(" "),i("v-card-text",[t._v("Είστε σίγουροι ότι θέλετε να διαγράψετε το "+t._s(t.item.name)+"?")]),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v("Ακυρωση")]),t._v(" "),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("διαγραφη")])],1)],1)],1)}),[],!1,null,null,null).exports,o={props:{dialog:Boolean,item:Object,itemRoute:String},data:function(){return{loading:!1,valid:!1,nameRules:[function(t){return!!t||"Το πεδίο είναι υποχρεωτικό"}]}},computed:{formTitle:function(){return this.item.id?"Επεξεργασία":"Προσθήκη"}},methods:{closeDialog:function(){this.$emit("closeDialog")},save:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,axios.post(this.itemRoute,this.item).then((function(e){t.$emit("closeDialog"),t.$emit("itemEdited"),t.loading=!1})))}},watch:{item:function(t){window.item=t}}},s={components:{deleteDialog:l,editDialog:Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"300px"},on:{"click:outside":t.closeDialog},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{loading:t.loading}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-text-field",{attrs:{required:"",rules:t.nameRules,label:"Όνομα"},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1)],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("Ακυρωση")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v("Αποθηκευση")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{dialog:!1,snackbar:!1,deleteDialog:!1,loading:!1,item:null,cardTitle:null,headers:[{text:"Όνομα",align:"left",value:"name"},{text:"Σύνολο",align:"center",value:"items_count"},{text:"Ενέργειες",value:"action",align:"right"}],items:[],editedItem:{}}},created:function(){this.cardTitle=this.$route.query.cardTitle,this.item=this.$route.query.item,this.getItems()},methods:{getItems:function(){var t=this;this.loading=!0,axios.get(this.item).then((function(e){t.items=e.data,t.loading=!1}))},editItem:function(t){this.editedItem=Object.assign({},t),this.dialog=!0},openDeleteDialog:function(t){this.editedItem=Object.assign({},t),this.deleteDialog=!0}}},c=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"ma-5",attrs:{shaped:"",outlined:"",loading:t.loading}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"sort-by":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"secondary",dark:""}},[i("v-toolbar-title",[t._v(t._s(t.cardTitle))]),t._v(" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(e){return t.editItem({})}}},[t._v("Προσθηκη")])],1)]},proxy:!0},{key:"item.action",fn:function(e){var a=e.item;return[i("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"teal"},on:{click:function(e){return t.editItem(a)}}},[i("v-icon",{attrs:{small:""}},[t._v("\n                                mdi-pencil\n                            ")])],1),t._v(" "),i("v-btn",{staticClass:"mx-0",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(e){return t.openDeleteDialog(a)}}},[i("v-icon",{attrs:{small:""}},[t._v("\n                                mdi-delete\n                            ")])],1)]}}])}),t._v(" "),i("delete-dialog",{attrs:{itemRoute:t.item,item:t.editedItem,deleteDialog:t.deleteDialog},on:{itemDeleted:function(e){t.getItems(),t.snackbar=!0},closeDialog:function(e){t.deleteDialog=!1}}}),t._v(" "),i("edit-dialog",{attrs:{itemRoute:t.item,item:t.editedItem,dialog:t.dialog},on:{itemEdited:function(e){t.getItems(),t.snackbar=!0},closeDialog:function(e){t.dialog=!1}}}),t._v(" "),i("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n                  Η επιλογή σας αποθηκεύτηκε επιτυχώς\n                  "),i("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n                    κλεισιμο\n                  ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);