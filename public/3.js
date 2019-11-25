(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/Details.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/Details.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product_id: Number
  },
  data: function data() {
    return {
      loading: false,
      snackbar: false,
      valid: false,
      nameRules: [function (v) {
        return !!v || "Το πεδίο είναι υποχρεωτικό.";
      }],
      products: [],
      categories: [],
      descriptions: [],
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
    getproduct: function getproduct() {
      if (this.product_id || this.$route.params.id) this.$store.dispatch("getSingleproduct", this.product_id || this.$route.params.id);else this.$store.dispatch("getSingleproduct", null);
    },
    saveproduct: function saveproduct() {
      var _this = this;

      this.loading = true;
      axios.post("products", this.product).then(function (res) {
        _this.loading = false;
        _this.snackbar = true;

        _this.$store.dispatch("getAllproducts");
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
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    product: "getproduct"
  })),
  watch: {
    product_id: function product_id(val) {
      this.$store.dispatch("getSingleproduct", val);
    }
  }
});

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
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-data-table", {
                                staticClass: "products-table",
                                attrs: {
                                  "hide-default-footer": "",
                                  headers: [
                                    {
                                      text: "Κωδικός",
                                      align: "center",
                                      sortable: false,
                                      value: "code"
                                    },
                                    {
                                      text: "Lt/Kg",
                                      align: "center",
                                      value: "lt_kg"
                                    },
                                    {
                                      text: "Tιμή",
                                      align: "center",
                                      value: "price"
                                    },
                                    {
                                      text: "Tιμή Lt/Kg",
                                      align: "center",
                                      value: "price_per_kg"
                                    }
                                  ],
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
                                            "\n                  " +
                                              _vm._s(item.price) +
                                              "€\n                "
                                          )
                                        ]
                                      }
                                    },
                                    {
                                      key: "item.lt_kg",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(item.lt_kg) +
                                              "Lt\n                "
                                          )
                                        ]
                                      }
                                    },
                                    {
                                      key: "item.price_per_kg",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(
                                                (
                                                  item.price / item.lt_kg
                                                ).toFixed(2)
                                              ) +
                                              "€\n                "
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  4228467026
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
            : _vm._e()
        ],
        1
      ),
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



/***/ })

}]);