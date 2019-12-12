(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
    outcome: Object
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
      axios["delete"]("outcomes/".concat(this.outcome.id)).then(function (res) {
        _this.$emit("closeDialog");

        _this.$emit("outcomeDeleted");

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    outcome: Object
  },
  data: function data() {
    return {
      loading: false,
      outcomeTypes: [],
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
        if (!outcome.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }]
    };
  },
  computed: {
    formTitle: function formTitle() {
      return !this.outcome.id ? "Προσθήκη Είσπραξης" : "Επεξεργασία Είσπραξης";
    }
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    getoutcomeTypes: function getoutcomeTypes() {
      var _this = this;

      axios.get("outcome-types").then(function (res) {
        return _this.outcomeTypes = res.data;
      });
    },
    save: function save() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios.post("outcomes", this.outcome).then(function (res) {
          _this2.$emit("closeDialog");

          _this2.$emit("outcomeEdited");

          _this2.loading = false;
        });
      }
    }
  },
  created: function created() {
    this.getoutcomeTypes();
  },
  watch: {
    outcome: function outcome(val) {
      window.outcome = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Outcomes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Outcomes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_outcomes_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/outcomes/DeleteDialog */ "./resources/js/components/outcomes/DeleteDialog.vue");
/* harmony import */ var _components_outcomes_EditDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/outcomes/EditDialog */ "./resources/js/components/outcomes/EditDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    isoutcome: Boolean,
    hideToolbar: Boolean,
    customer: String
  },
  components: {
    deleteDialog: _components_outcomes_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    editDialog: _components_outcomes_EditDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      isSingleoutcome: false,
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
        text: "Έξοδο",
        align: "left",
        value: "type.name"
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
      outcomes: [],
      editedItem: {},
      users: [],
      user_id: ""
    };
  },
  created: function created() {
    if (this.$route.name == "Customers Single") {
      this.isSingleoutcome = this.isoutcome;
    } else {
      this.isSingleoutcome = this.$route.name == "outcomes";
    }

    this.getoutcomes();
    if (this.$route.query["new"]) this.dialog = true;
    this.getUsers();
  },
  methods: {
    getoutcomes: function getoutcomes() {
      var _this = this;

      if (!this.user_id) this.user_id = "";
      this.loading = true;
      axios.get("outcomes?outcomes=".concat(this.isSingleoutcome, "&date=").concat(this.searchQuery, "&user=").concat(this.user_id, "&customer=").concat(this.customer)).then(function (res) {
        _this.outcomes = res.data;
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
    openDeleteDialog: function openDeleteDialog(outcome) {
      this.editedItem = Object.assign({}, outcome);
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
      return "Έξοδα";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Διαγραφή Είσπραξης")
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "Είστε σίγουροι ότι θέλετε να διαγράψετε την είσπραξη στον " +
                _vm._s(_vm.outcome.customer ? _vm.outcome.customer.name : "") +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6& ***!
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
                                  items: _vm.outcomeTypes,
                                  label: "Πελάτης",
                                  "item-text": "name",
                                  "item-value": "id"
                                },
                                model: {
                                  value: _vm.outcome.outcome_type_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.outcome,
                                      "outcome_type_id",
                                      $$v
                                    )
                                  },
                                  expression: "outcome.outcome_type_id"
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
                                  value: _vm.outcome.created_at,
                                  callback: function($$v) {
                                    _vm.$set(_vm.outcome, "created_at", $$v)
                                  },
                                  expression: "outcome.created_at"
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
                                  label: "Ποσό"
                                },
                                model: {
                                  value: _vm.outcome.amount,
                                  callback: function($$v) {
                                    _vm.$set(_vm.outcome, "amount", $$v)
                                  },
                                  expression: "outcome.amount"
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
                                  value: _vm.outcome.comments,
                                  callback: function($$v) {
                                    _vm.$set(_vm.outcome, "comments", $$v)
                                  },
                                  expression: "outcome.comments"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200& ***!
  \******************************************************************************************************************************************************************************************************/
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
                      items: _vm.outcomes,
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
                                        label: "Χρήστης",
                                        clearable: "",
                                        "item-text": "name",
                                        "item-value": "id"
                                      },
                                      on: {
                                        input: _vm.getoutcomes,
                                        "click:clear": function($event) {
                                          return _vm.getoutcomes()
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
                                                          _vm.getoutcomes()
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
                                                _vm.getoutcomes()
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
                                                          _vm.getoutcomes()
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
                                                _vm.getoutcomes()
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
                      outcome: _vm.editedItem,
                      deleteDialog: _vm.deleteDialog
                    },
                    on: {
                      outcomeDeleted: function($event) {
                        _vm.getoutcomes()
                        _vm.snackbar = true
                      },
                      closeDialog: function($event) {
                        _vm.deleteDialog = false
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("edit-dialog", {
                    attrs: { outcome: _vm.editedItem, dialog: _vm.dialog },
                    on: {
                      outcomeEdited: function($event) {
                        _vm.getoutcomes()
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

/***/ "./resources/js/components/outcomes/DeleteDialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/outcomes/DeleteDialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=template&id=836f9db4& */ "./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4&");
/* harmony import */ var _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/outcomes/DeleteDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=template&id=836f9db4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/DeleteDialog.vue?vue&type=template&id=836f9db4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_836f9db4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/outcomes/EditDialog.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/outcomes/EditDialog.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=template&id=3cacfcf6& */ "./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6&");
/* harmony import */ var _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/outcomes/EditDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=template&id=3cacfcf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/outcomes/EditDialog.vue?vue&type=template&id=3cacfcf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_3cacfcf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Outcomes.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Outcomes.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Outcomes.vue?vue&type=template&id=0e3b6200& */ "./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200&");
/* harmony import */ var _Outcomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Outcomes.vue?vue&type=script&lang=js& */ "./resources/js/views/Outcomes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Outcomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Outcomes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Outcomes.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Outcomes.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Outcomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Outcomes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Outcomes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Outcomes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Outcomes.vue?vue&type=template&id=0e3b6200& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Outcomes.vue?vue&type=template&id=0e3b6200&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Outcomes_vue_vue_type_template_id_0e3b6200___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);