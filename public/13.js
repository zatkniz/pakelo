(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Incomes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Incomes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_orders_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/orders/DeleteDialog */ "./resources/js/components/orders/DeleteDialog.vue");
/* harmony import */ var _components_orders_EditDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/orders/EditDialog */ "./resources/js/components/orders/EditDialog.vue");
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
  props: {
    isOrder: Boolean,
    hideToolbar: Boolean,
    customer: Number
  },
  components: {
    deleteDialog: _components_orders_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    editDialog: _components_orders_EditDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      isSingleOrder: false,
      expanded: [],
      menu: false,
      menuTo: false,
      date: new Date().toISOString().substr(0, 10),
      searchQuery: [new Date().toISOString().substr(0, 10), null],
      singleExpand: false,
      deleteDialog: false,
      loading: false,
      search: "",
      headers: [{
        text: "Πελάτης",
        align: "left",
        value: "customer.name"
      }, {
        text: "Πωλητής",
        value: "user.name"
      }, {
        text: "Ποσό",
        value: "amount",
        align: "center"
      }, {
        text: "Ημερομηνία",
        value: "created_at"
      }, {
        text: "Ενέργειες",
        value: "action",
        align: "right"
      }],
      orders: [],
      editedItem: {},
      users: [],
      user_id: ""
    };
  },
  created: function created() {
    if (this.$route.name == "Customers Single") {
      this.isSingleOrder = this.isOrder;
    } else {
      this.isSingleOrder = this.$route.name == "Orders";
    }

    this.getorders();
    if (this.$route.query["new"]) this.dialog = true;
    this.getUsers();
  },
  methods: {
    getorders: function getorders() {
      var _this = this;

      if (!this.user_id) this.user_id = "";
      this.loading = true;
      axios.get("incomes?orders=".concat(this.isSingleOrder, "&date=").concat(this.searchQuery, "&user=").concat(this.user_id, "&customer=").concat(this.customer)).then(function (res) {
        _this.orders = res.data;
        _this.loading = false;
        _this.$route.query["new"];
      });
    },
    getUsers: function getUsers() {
      var _this2 = this;

      axios.get("users").then(function (res) {
        _this2.users = res.data;
      });
    },
    editItem: function editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    openDeleteDialog: function openDeleteDialog(order) {
      this.editedItem = Object.assign({}, order);
      this.deleteDialog = true;
    }
  },
  watch: {
    "$route.query": function $routeQuery() {
      if (this.$route.query["new"]) this.dialog = true;
    }
  },
  computed: {
    pageTitle: function pageTitle() {
      return this.$route.name == "Orders" ? "Παραγγελίες" : "Προσφορές";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { class: { "pa-0": _vm.customer } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { class: { "pa-0": _vm.customer } },
            [
              _c(
                "v-card",
                {
                  class: { "ma-0": _vm.customer, "ma-5": !_vm.customer },
                  attrs: { shaped: "", outlined: "", loading: _vm.loading }
                },
                [
                  !_vm.hideToolbar
                    ? _c(
                        "v-toolbar",
                        { attrs: { flat: "", color: "secondary", dark: "" } },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(_vm._s(_vm.pageTitle))
                          ]),
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
                                  return _vm.editItem({ products: [] })
                                }
                              }
                            },
                            [_vm._v("Προσθηκη")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.orders,
                      "sort-by": "name",
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "px-10",
                                    attrs: { cols: "12", sm: "6", md: "6" }
                                  },
                                  [
                                    _c("v-autocomplete", {
                                      attrs: {
                                        items: _vm.users,
                                        label: "Πωλητής",
                                        clearable: "",
                                        "item-text": "name",
                                        "item-value": "id"
                                      },
                                      on: {
                                        input: _vm.getorders,
                                        "click:clear": function($event) {
                                          return _vm.getorders()
                                        }
                                      },
                                      model: {
                                        value: _vm.user_id,
                                        callback: function($$v) {
                                          _vm.user_id = $$v
                                        },
                                        expression: "user_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "px-10",
                                    attrs: { cols: "12", sm: "6", md: "6" }
                                  },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        "append-icon": "mdi-magnify",
                                        label: "Αναζήτηση",
                                        "single-line": "",
                                        "hide-details": "",
                                        clearable: ""
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { staticClass: "px-5" },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        ref: "menu",
                                        attrs: {
                                          "close-on-content-click": false,
                                          "return-value": _vm.searchQuery[0],
                                          transition: "scale-transition",
                                          "offset-y": "",
                                          "min-width": "290px"
                                        },
                                        on: {
                                          "update:returnValue": function(
                                            $event
                                          ) {
                                            return _vm.$set(
                                              _vm.searchQuery,
                                              0,
                                              $event
                                            )
                                          },
                                          "update:return-value": function(
                                            $event
                                          ) {
                                            return _vm.$set(
                                              _vm.searchQuery,
                                              0,
                                              $event
                                            )
                                          }
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-text-field",
                                                  _vm._g(
                                                    {
                                                      attrs: {
                                                        label: "Από",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        readonly: "",
                                                        clearable: ""
                                                      },
                                                      on: {
                                                        "click:clear": function(
                                                          $event
                                                        ) {
                                                          _vm.searchQuery[0] = null
                                                          _vm.getorders()
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.searchQuery[0],
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.searchQuery,
                                                            0,
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "searchQuery[0]"
                                                      }
                                                    },
                                                    on
                                                  )
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.menu,
                                          callback: function($$v) {
                                            _vm.menu = $$v
                                          },
                                          expression: "menu"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-date-picker",
                                          {
                                            attrs: {
                                              "no-title": "",
                                              scrollable: "",
                                              reactive: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.getorders()
                                                _vm.$refs.menu.save(
                                                  _vm.searchQuery[0]
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.searchQuery[0],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.searchQuery,
                                                  0,
                                                  $$v
                                                )
                                              },
                                              expression: "searchQuery[0]"
                                            }
                                          },
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.menu = false
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.$refs.menu.save(
                                                      _vm.searchQuery[0]
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("OK")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        ref: "menuTo",
                                        attrs: {
                                          "close-on-content-click": false,
                                          "return-value": _vm.searchQuery[1],
                                          transition: "scale-transition",
                                          "offset-y": "",
                                          "min-width": "290px"
                                        },
                                        on: {
                                          "update:returnValue": function(
                                            $event
                                          ) {
                                            return _vm.$set(
                                              _vm.searchQuery,
                                              1,
                                              $event
                                            )
                                          },
                                          "update:return-value": function(
                                            $event
                                          ) {
                                            return _vm.$set(
                                              _vm.searchQuery,
                                              1,
                                              $event
                                            )
                                          }
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-text-field",
                                                  _vm._g(
                                                    {
                                                      attrs: {
                                                        label: "Έως",
                                                        clearable: "",
                                                        "prepend-icon":
                                                          "mdi-calendar",
                                                        readonly: ""
                                                      },
                                                      on: {
                                                        "click:clear": function(
                                                          $event
                                                        ) {
                                                          _vm.searchQuery[1] = null
                                                          _vm.getorders()
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.searchQuery[1],
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.searchQuery,
                                                            1,
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "searchQuery[1]"
                                                      }
                                                    },
                                                    on
                                                  )
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.menuTo,
                                          callback: function($$v) {
                                            _vm.menuTo = $$v
                                          },
                                          expression: "menuTo"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-date-picker",
                                          {
                                            attrs: {
                                              "no-title": "",
                                              scrollable: "",
                                              reactive: ""
                                            },
                                            on: {
                                              input: function($event) {
                                                _vm.getorders()
                                                _vm.$refs.menuTo.save(
                                                  _vm.searchQuery[1]
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.searchQuery[1],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.searchQuery,
                                                  1,
                                                  $$v
                                                )
                                              },
                                              expression: "searchQuery[1]"
                                            }
                                          },
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.menuTo = false
                                                  }
                                                }
                                              },
                                              [_vm._v("Cancel")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  color: "primary"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.$refs.menuTo.save(
                                                      _vm.searchQuery[1]
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("OK")]
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
                                  _vm._v("mdi-pencil")
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
                                  _vm._v("mdi-delete")
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
                  _c("delete-dialog", {
                    attrs: {
                      order: _vm.editedItem,
                      deleteDialog: _vm.deleteDialog
                    },
                    on: {
                      orderDeleted: function($event) {
                        _vm.getorders()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.deleteDialog = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("edit-dialog", {
                    attrs: { order: _vm.editedItem, dialog: _vm.dialog },
                    on: {
                      orderEdited: function($event) {
                        _vm.getorders()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.dialog = false
                        _vm.$route.query.new = false
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
                        "\n          Η επιλογή σας αποθηκεύτηκε επιτυχώς\n          "
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
                        [_vm._v("κλεισιμο")]
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

/***/ "./resources/js/views/Incomes.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Incomes.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incomes.vue?vue&type=template&id=8317b9ca& */ "./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca&");
/* harmony import */ var _Incomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incomes.vue?vue&type=script&lang=js& */ "./resources/js/views/Incomes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Incomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Incomes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Incomes.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Incomes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Incomes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Incomes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Incomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Incomes.vue?vue&type=template&id=8317b9ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Incomes.vue?vue&type=template&id=8317b9ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incomes_vue_vue_type_template_id_8317b9ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);