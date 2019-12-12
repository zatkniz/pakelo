(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    deleteDialog: Boolean,
    visit: Object
  },
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    deleteItem: function deleteItem() {
      var _this = this;

      this.loading = true;
      axios["delete"]("visits/".concat(this.visit.id)).then(function (res) {
        _this.$emit("closeDialog");

        _this.$emit("visitDeleted");

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    dialog: Boolean,
    visit: Object
  },
  data: function data() {
    return {
      loading: false,
      customers: [],
      valid: false,
      activeItems: [{
        text: "Ενεργός",
        value: 1
      }, {
        text: "Ανενεργός",
        value: 0
      }],
      nameRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό";
      }],
      emailRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό";
      }, function (v) {
        return /.+@.+/.test(v) || "Το email δεν είναι σωστό";
      }],
      requiredRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό";
      }],
      passRules: [function (v) {
        if (!visit.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }]
    };
  },
  computed: {
    formTitle: function formTitle() {
      return !this.visit.id ? "Προσθήκη Επίσκεψης" : "Επεξεργασία Επίσκεψης";
    }
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    getCustomers: function getCustomers() {
      var _this = this;

      axios.get("customers").then(function (res) {
        return _this.customers = res.data;
      });
    },
    save: function save() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post("visits", this.visit).then(function (res) {
          _this2.$emit("closeDialog");

          _this2.$emit("visitEdited");

          _this2.loading = false;
        });
      }
    }
  },
  created: function created() {
    this.getCustomers();
  },
  watch: {
    visit: function visit(val) {
      window.visit = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Visits.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Visits.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_visits_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/visits/DeleteDialog */ "./resources/js/components/visits/DeleteDialog.vue");
/* harmony import */ var _components_visits_EditDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/visits/EditDialog */ "./resources/js/components/visits/EditDialog.vue");
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
    customer: String
  },
  components: {
    deleteDialog: _components_visits_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    editDialog: _components_visits_EditDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      menu: false,
      menuTo: false,
      date: new Date().toISOString().substr(0, 10),
      deleteDialog: false,
      loading: false,
      searchQuery: [new Date().toISOString().substr(0, 10), null],
      search: "",
      headers: [{
        text: "Πελάτης",
        align: "left",
        value: "customer.name"
      }, {
        text: "Πωλητής",
        value: "user.name"
      }, {
        text: "Ημερομηνία",
        value: "created_at"
      }, {
        text: "Ενέργειες",
        value: "action",
        align: "right"
      }],
      visits: [],
      users: [],
      user_id: "",
      editedItem: {}
    };
  },
  created: function created() {
    this.getvisits();
    if (this.$route.query["new"]) this.dialog = true;
    this.getUsers();
  },
  methods: {
    getvisits: function getvisits() {
      var _this = this;

      if (!this.user_id) this.user_id = "";
      this.loading = true;
      axios.get("visits?date=".concat(this.searchQuery, "&user=").concat(this.user_id, "&customer=").concat(this.customer)).then(function (res) {
        _this.visits = res.data;
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
    openDeleteDialog: function openDeleteDialog(visit) {
      this.editedItem = Object.assign({}, visit);
      this.deleteDialog = true;
    }
  },
  watch: {
    "$route.query": function $routeQuery() {
      if (this.$route.query["new"]) this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "290" },
      on: { "click:outside": _vm.closeDialog },
      model: {
        value: _vm.deleteDialog,
        callback: function($$v) {
          _vm.deleteDialog = $$v
        },
        expression: "deleteDialog"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { loading: _vm.loading } },
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("Διαγραφή Χρήστη")
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "Είστε σίγουροι ότι θέλετε να διαγράψετε την επίσκεψη στον " +
                _vm._s(_vm.visit.customer ? _vm.visit.customer.name : "") +
                "?"
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.closeDialog()
                    }
                  }
                },
                [_vm._v("Ακυρωση")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.deleteItem()
                    }
                  }
                },
                [_vm._v("διαγραφη")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "400px" },
      on: { "click:outside": _vm.closeDialog },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { loading: _vm.loading } },
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.save($event)
                }
              },
              model: {
                value: _vm.valid,
                callback: function($$v) {
                  _vm.valid = $$v
                },
                expression: "valid"
              }
            },
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.formTitle))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  required: "",
                                  rules: _vm.requiredRules,
                                  items: _vm.customers,
                                  label: "Πελάτης",
                                  "item-text": "name",
                                  "item-value": "id"
                                },
                                model: {
                                  value: _vm.visit.customer_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.visit, "customer_id", $$v)
                                  },
                                  expression: "visit.customer_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Ημερομηνία" },
                                model: {
                                  value: _vm.visit.created_at,
                                  callback: function($$v) {
                                    _vm.$set(_vm.visit, "created_at", $$v)
                                  },
                                  expression: "visit.created_at"
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
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  rows: "1",
                                  "auto-grow": "",
                                  label: "Σχόλια"
                                },
                                model: {
                                  value: _vm.visit.comments,
                                  callback: function($$v) {
                                    _vm.$set(_vm.visit, "comments", $$v)
                                  },
                                  expression: "visit.comments"
                                }
                              })
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.closeDialog }
                    },
                    [_vm._v("Ακυρωση")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "blue darken-1",
                        text: "",
                        type: "submit"
                      }
                    },
                    [_vm._v("Αποθηκευση")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Visits.vue?vue&type=template&id=496c9267&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Visits.vue?vue&type=template&id=496c9267& ***!
  \****************************************************************************************************************************************************************************************************/
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
                          _c("v-toolbar-title", [_vm._v("Επισκέψεις")]),
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
                            [_vm._v("Προσθηκη Επισκεψης")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      search: _vm.search,
                      headers: _vm.headers,
                      items: _vm.visits,
                      "sort-by": "name"
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
                                        input: _vm.getvisits,
                                        "click:clear": function($event) {
                                          return _vm.getvisits()
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
                                                          _vm.getvisits()
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
                                                _vm.getvisits()
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
                                                          _vm.getvisits()
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
                                                _vm.getvisits()
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
                      visit: _vm.editedItem,
                      deleteDialog: _vm.deleteDialog
                    },
                    on: {
                      visitDeleted: function($event) {
                        _vm.getvisits()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.deleteDialog = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("edit-dialog", {
                    attrs: { visit: _vm.editedItem, dialog: _vm.dialog },
                    on: {
                      visitEdited: function($event) {
                        _vm.getvisits()
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

/***/ "./resources/js/components/visits/DeleteDialog.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/visits/DeleteDialog.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=template&id=14e5721f& */ "./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f&");
/* harmony import */ var _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/visits/DeleteDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=template&id=14e5721f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/DeleteDialog.vue?vue&type=template&id=14e5721f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_14e5721f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/visits/EditDialog.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/visits/EditDialog.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=template&id=7a64acbe& */ "./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe&");
/* harmony import */ var _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/visits/EditDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=template&id=7a64acbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/visits/EditDialog.vue?vue&type=template&id=7a64acbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_7a64acbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Visits.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Visits.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visits.vue?vue&type=template&id=496c9267& */ "./resources/js/views/Visits.vue?vue&type=template&id=496c9267&");
/* harmony import */ var _Visits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visits.vue?vue&type=script&lang=js& */ "./resources/js/views/Visits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Visits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Visits.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Visits.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Visits.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Visits.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Visits.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visits_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Visits.vue?vue&type=template&id=496c9267&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Visits.vue?vue&type=template&id=496c9267& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Visits.vue?vue&type=template&id=496c9267& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Visits.vue?vue&type=template&id=496c9267&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visits_vue_vue_type_template_id_496c9267___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);