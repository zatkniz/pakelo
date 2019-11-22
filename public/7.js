(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_users_DeleteUserDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/users/DeleteUserDialog */ "./resources/js/components/users/DeleteUserDialog.vue");
/* harmony import */ var _components_users_EditUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/users/EditUser */ "./resources/js/components/users/EditUser.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    deleteUserDialog: _components_users_DeleteUserDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    editUserDialog: _components_users_EditUser__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      deleteDialog: false,
      loading: false,
      headers: [{
        text: 'Όνομα',
        align: 'left',
        value: 'name'
      }, {
        text: 'Εmail',
        value: 'email'
      }, {
        text: 'Username',
        value: 'username'
      }, {
        text: 'Ρόλος',
        value: 'user_role.name'
      }, {
        text: 'Κατάσταση',
        value: 'active_state'
      }, {
        text: 'Ενέργειες',
        value: 'action',
        align: 'right'
      }],
      users: [],
      editedItem: {}
    };
  },
  created: function created() {
    this.getUsers();
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      this.loading = true;
      axios.get('users').then(function (res) {
        _this.users = res.data;
        _this.loading = false;
      });
    },
    editItem: function editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    openDeleteDialog: function openDeleteDialog(user) {
      this.editedItem = Object.assign({}, user);
      this.deleteDialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-card",
                {
                  staticClass: "ma-5",
                  attrs: { shaped: "", outlined: "", loading: _vm.loading }
                },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.users,
                      "sort-by": "calories"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function() {
                          return [
                            _c(
                              "v-toolbar",
                              {
                                attrs: {
                                  flat: "",
                                  color: "secondary",
                                  dark: ""
                                }
                              },
                              [
                                _c("v-toolbar-title", [_vm._v("Χρήστες")]),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "mx-4",
                                  attrs: { inset: "", vertical: "" }
                                }),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "primary", dark: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editItem({})
                                      }
                                    }
                                  },
                                  [_vm._v("Προσθηκη Χρηστη")]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-0",
                                attrs: {
                                  fab: "",
                                  dark: "",
                                  "x-small": "",
                                  color: "teal"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editItem(item)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { small: "" } }, [
                                  _vm._v(
                                    "\n                                mdi-pencil\n                            "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-0",
                                attrs: {
                                  fab: "",
                                  dark: "",
                                  "x-small": "",
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.openDeleteDialog(item)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { small: "" } }, [
                                  _vm._v(
                                    "\n                                mdi-delete\n                            "
                                  )
                                ])
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c("delete-user-dialog", {
                    attrs: {
                      user: _vm.editedItem,
                      deleteDialog: _vm.deleteDialog
                    },
                    on: {
                      userDeleted: function($event) {
                        _vm.getUsers()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.deleteDialog = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("edit-user-dialog", {
                    attrs: { user: _vm.editedItem, dialog: _vm.dialog },
                    on: {
                      userEdited: function($event) {
                        _vm.getUsers()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.dialog = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-snackbar",
                    {
                      model: {
                        value: _vm.snackbar,
                        callback: function($$v) {
                          _vm.snackbar = $$v
                        },
                        expression: "snackbar"
                      }
                    },
                    [
                      _vm._v(
                        "\n                  Η επιλογή σας αποθηκεύτηκε επιτυχώς\n                  "
                      ),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", text: "" },
                          on: {
                            click: function($event) {
                              _vm.snackbar = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    κλεισιμο\n                  "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=e2911f0e& */ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Users.vue?vue&type=template&id=e2911f0e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=e2911f0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users.vue?vue&type=template&id=e2911f0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_e2911f0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);