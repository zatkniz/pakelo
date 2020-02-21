(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js& ***!
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
    item: Object
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
      axios["delete"]("products-attributes/".concat(this.item.id)).then(function (res) {
        _this.$store.dispatch("getAllproducts");

        setTimeout(function () {
          _this.loading = false;
          _this.editedItem = {};

          _this.$emit("closeDialog");

          _this.$emit("attributeSaved");
        }, 1000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Details.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Details.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EditProductAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProductAttribute */ "./resources/js/components/products/EditProductAttribute.vue");
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteDialog */ "./resources/js/components/products/DeleteDialog.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    product_id: Number
  },
  components: {
    editAttribute: _EditProductAttribute__WEBPACK_IMPORTED_MODULE_2__["default"],
    deleteDialog: _DeleteDialog__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      deleteDialog: false,
      selectedAttribute: null,
      loading: false,
      snackbar: false,
      valid: false,
      editedItem: {},
      nameRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό.";
      }],
      products: [],
      categories: [],
      descriptions: [],
      tableHeaders: [{
        text: "Κωδικός",
        align: "center",
        sortable: false,
        value: "code"
      }, {
        text: "Lt/Kg",
        align: "center",
        value: "lt_kg"
      }, {
        text: "Tιμή",
        align: "center",
        value: "price"
      }, {
        text: "Tιμή Lt/Kg",
        align: "center",
        value: "price_per_kg"
      }],
      uses: [],
      status: [{
        value: false,
        text: "Ανενεργός"
      }, {
        value: true,
        text: "Ενεργός"
      }]
    };
  },
  methods: {
    openEditAttributeDialog: function openEditAttributeDialog(item) {
      this.selectedAttribute = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    openDeleteDialog: function openDeleteDialog(item) {
      this.editedItem = Object.assign({}, item);
      this.deleteDialog = true;
    },
    retriveProducts: function retriveProducts() {
      this.dialog = false;
      this.$store.dispatch("getSingleproduct", this.product_id || this.$route.params.id);
    },
    calculatePrice: function calculatePrice(price) {
      var itemPercentage = parseFloat(price) * (40 / 100);
      var returnValue = parseFloat(itemPercentage) + parseFloat(price);
      return returnValue.toFixed(2);
    },
    getproduct: function getproduct() {
      if (this.product_id || this.$route.params.id) this.$store.dispatch("getSingleproduct", this.product_id || this.$route.params.id);else this.$store.dispatch("getSingleproduct", null);
    },
    saveproduct: function saveproduct() {
      var _this = this;

      this.loading = true;
      axios.post("products", this.product).then(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = false;
                _this.snackbar = true;
                _context.next = 4;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.$store.dispatch("getAllproducts"));

              case 4:
                if (!_this.$route.params.id) {
                  setTimeout(function () {
                    window.location.hash = "#/product/".concat(res.data.id);
                  }, 1000);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        });
      });
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.saveproduct();
      }
    },
    getproducts: function getproducts() {
      var _this2 = this;

      axios.get("products").then(function (res) {
        _this2.products = res.data;
      });
    },
    getdescriptions: function getdescriptions() {
      var _this3 = this;

      axios.get("products-descriptions").then(function (res) {
        _this3.descriptions = res.data;
      });
    },
    getuses: function getuses() {
      var _this4 = this;

      axios.get("products-uses").then(function (res) {
        _this4.uses = res.data;
      });
    },
    getcategories: function getcategories() {
      var _this5 = this;

      axios.get("products-categories").then(function (res) {
        _this5.categories = res.data;
      });
    }
  },
  mounted: function mounted() {
    this.getproduct();
    this.getproducts();
    this.getcategories();
    this.getdescriptions();
    this.getuses();

    if (this.auth.user_role_id == 1) {
      this.tableHeaders.push({
        text: "Ενέργειες",
        value: "action",
        align: "right"
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    product: "getproduct",
    auth: "getAuth"
  })),
  watch: {
    product_id: function product_id(val) {
      this.$store.dispatch("getSingleproduct", val);
    },
    auth: function auth() {
      if (this.auth.user_role_id == 1) {
        this.tableHeaders.push({
          text: "Ενέργειες",
          value: "action",
          align: "right"
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details */ "./resources/js/components/products/Details.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    selectedAttribute: Number,
    editedItem: Object
  },
  components: {
    productDetails: _Details__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: false,
      attribute: {},
      valid: false,
      nameRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό.";
      }]
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.saveproduct();
      }
    },
    saveproduct: function saveproduct() {
      var _this = this;

      this.loading = true;
      this.editedItem.product_id = this.$route.params.id;
      this.editedItem.price_per_kg = parseInt(this.editedItem.price) / parseFloat(this.editedItem.lt_kg);
      axios.post("products-attributes", this.editedItem).then(function (res) {
        _this.$store.dispatch("getAllproducts");

        setTimeout(function () {
          _this.loading = false;
          _this.editedItem = {};

          _this.$emit("attributeSaved");
        }, 1000);
      });
    }
  } // watch: {
  //   selectedAttribute(val) {
  //     if (val)
  //       this.attribute = this.product.attributes.find(attr => attr.id == val);
  //   }
  // }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa& ***!
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
          _c("v-card-title", { staticClass: "headline" }, [_vm._v("Διαγραφή")]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "Είστε σίγουροι ότι θέλετε να διαγράψετε το " +
                _vm._s(_vm.item.code) +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
              return _vm.validate($event)
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
                        { attrs: { cols: "12", sm: "9", md: "9" } },
                        [
                          _c("v-text-field", {
                            attrs: { rules: _vm.nameRules, label: "Ονομασία" },
                            model: {
                              value: _vm.product.name,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "name", $$v)
                              },
                              expression: "product.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "3", md: "3" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Ιξώδες" },
                            model: {
                              value: _vm.product.ixodes,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "ixodes", $$v)
                              },
                              expression: "product.ixodes"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              readonly: _vm.auth.user_role_id == 1,
                              items: _vm.categories,
                              label: "Κατηγορία",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.product.product_category_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.product,
                                  "product_category_id",
                                  $$v
                                )
                              },
                              expression: "product.product_category_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.descriptions,
                              label: "Περιγραφή",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.product.product_description_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.product,
                                  "product_description_id",
                                  $$v
                                )
                              },
                              expression: "product.product_description_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.uses,
                              label: "Εφαρμογή",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.product.product_use_id,
                              callback: function($$v) {
                                _vm.$set(_vm.product, "product_use_id", $$v)
                              },
                              expression: "product.product_use_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.product.attributes
                        ? _c(
                            "v-col",
                            {
                              staticClass: "text-right",
                              attrs: { cols: "12", sm: "12", md: "12" }
                            },
                            [
                              _vm.auth.user_role_id == 1
                                ? _c(
                                    "v-btn",
                                    {
                                      staticClass: "mb-5",
                                      attrs: { color: "primary" },
                                      on: { click: _vm.openEditAttributeDialog }
                                    },
                                    [_vm._v("Προσθηκη")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-data-table", {
                                staticClass: "products-table",
                                attrs: {
                                  "hide-default-footer": "",
                                  headers: _vm.tableHeaders,
                                  items: _vm.product.attributes
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item.price",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.calculatePrice(item.price)
                                              ) +
                                              "€\n                "
                                          ),
                                          _vm.auth.user_role_id == 1
                                            ? _c("span", [
                                                _vm._v(
                                                  "(" +
                                                    _vm._s(item.price) +
                                                    "€)"
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      }
                                    },
                                    {
                                      key: "item.lt_kg",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(_vm._s(item.lt_kg) + "Lt")
                                        ]
                                      }
                                    },
                                    {
                                      key: "item.price_per_kg",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm.calculatePrice(
                                                  item.price / item.lt_kg
                                                )
                                              ) +
                                              "€\n                "
                                          ),
                                          _vm.auth.user_role_id == 1
                                            ? _c("span", [
                                                _vm._v(
                                                  "(" +
                                                    _vm._s(
                                                      (
                                                        item.price / item.lt_kg
                                                      ).toFixed(2)
                                                    ) +
                                                    "€)"
                                                )
                                              ])
                                            : _vm._e()
                                        ]
                                      }
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
                                                  return _vm.openEditAttributeDialog(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [_vm._v("mdi-pencil")]
                                              )
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
                                                  return _vm.openDeleteDialog(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [_vm._v("mdi-delete")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2715084581
                                )
                              })
                            ],
                            1
                          )
                        : _vm._e()
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
          !_vm.product_id
            ? _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.auth.user_role_id == 1
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "mx-5 mb-5",
                          attrs: { color: "primary", type: "submit" }
                        },
                        [_vm._v("Αποθηκευση")]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("edit-attribute", {
        attrs: { editedItem: _vm.editedItem, dialog: _vm.dialog },
        on: {
          closeDialog: function($event) {
            _vm.dialog = false
          },
          attributeSaved: function($event) {
            _vm.retriveProducts()
            _vm.snackbar = true
          }
        }
      }),
      _vm._v(" "),
      _c("delete-dialog", {
        attrs: { item: _vm.editedItem, deleteDialog: _vm.deleteDialog },
        on: {
          attributeSaved: function($event) {
            _vm.retriveProducts()
            _vm.snackbar = true
          },
          closeDialog: function($event) {
            _vm.deleteDialog = false
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
          _vm._v("\n    Η επιλογή σας αποθηκεύτηκε επιτυχώς\n    "),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      on: {
        "click:outside": function($event) {
          _vm.closeDialog()
          _vm.editedItem = {}
        }
      },
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
                  return _vm.validate($event)
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
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.nameRules,
                                  label: "Κωδικός"
                                },
                                model: {
                                  value: _vm.editedItem.code,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "code", $$v)
                                  },
                                  expression: "editedItem.code"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { rules: _vm.nameRules, label: "Lt/Kg" },
                                model: {
                                  value: _vm.editedItem.lt_kg,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "lt_kg", $$v)
                                  },
                                  expression: "editedItem.lt_kg"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "6", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { rules: _vm.nameRules, label: "Τιμή" },
                                model: {
                                  value: _vm.editedItem.price,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price", $$v)
                                  },
                                  expression: "editedItem.price"
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
                      staticClass: "mx-5 mb-5",
                      attrs: { color: "primary", type: "submit" }
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

/***/ "./resources/js/components/products/DeleteDialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/products/DeleteDialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=template&id=a37eacfa& */ "./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa&");
/* harmony import */ var _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/DeleteDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=template&id=a37eacfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/DeleteDialog.vue?vue&type=template&id=a37eacfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_a37eacfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/Details.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/products/Details.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=ef4d817c& */ "./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/products/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/Details.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/products/Details.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=ef4d817c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Details.vue?vue&type=template&id=ef4d817c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_ef4d817c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/EditProductAttribute.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/products/EditProductAttribute.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProductAttribute.vue?vue&type=template&id=406a4547& */ "./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547&");
/* harmony import */ var _EditProductAttribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProductAttribute.vue?vue&type=script&lang=js& */ "./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProductAttribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/EditProductAttribute.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductAttribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProductAttribute.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/EditProductAttribute.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductAttribute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProductAttribute.vue?vue&type=template&id=406a4547& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/EditProductAttribute.vue?vue&type=template&id=406a4547&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductAttribute_vue_vue_type_template_id_406a4547___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);