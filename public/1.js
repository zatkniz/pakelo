(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/Details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customers/Details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    customer_id: Number
  },
  data: function data() {
    return {
      loading: false,
      snackbar: false,
      valid: false,
      nameRules: [function (v) {
        return !!v || "Συμπληρώστε την επωνυμία του πελάτη.";
      }],
      users: [],
      cities: [],
      brandTypes: [],
      sellerTypes: [],
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
    getCustomer: function getCustomer() {
      if (this.customer_id || this.$route.params.id) this.$store.dispatch("getSinglecustomer", this.customer_id || this.$route.params.id);else this.$store.dispatch("getSinglecustomer", null);
    },
    saveCustomer: function saveCustomer() {
      var _this = this;

      this.loading = true;
      axios.post("customers", this.customer).then(function (res) {
        _this.loading = false;
        _this.snackbar = true;

        _this.$store.dispatch("getAllcustomers");
      });
    },
    validate: function validate() {
      if (this.$refs.form.validate()) {
        this.saveCustomer();
      }
    },
    getUsers: function getUsers() {
      var _this2 = this;

      axios.get("users").then(function (res) {
        _this2.users = res.data;
      });
    },
    getBrandTypes: function getBrandTypes() {
      var _this3 = this;

      axios.get("brand-types").then(function (res) {
        _this3.brandTypes = res.data;
      });
    },
    getSellerTypes: function getSellerTypes() {
      var _this4 = this;

      axios.get("seller-types").then(function (res) {
        _this4.sellerTypes = res.data;
      });
    },
    getCities: function getCities() {
      var _this5 = this;

      axios.get("cities").then(function (res) {
        _this5.cities = res.data;
      });
    }
  },
  mounted: function mounted() {
    this.getCustomer();
    this.getUsers();
    this.getCities();
    this.getBrandTypes();
    this.getSellerTypes();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    customer: "getcustomer"
  })),
  watch: {
    customer_id: function customer_id(val) {
      this.$store.dispatch("getSinglecustomer", val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad& ***!
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
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { rules: _vm.nameRules, label: "Επωνυμία" },
                            model: {
                              value: _vm.customer.name,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "name", $$v)
                              },
                              expression: "customer.name"
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
                            attrs: { label: "Α.Φ.Μ." },
                            model: {
                              value: _vm.customer.afm,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "afm", $$v)
                              },
                              expression: "customer.afm"
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
                            attrs: { label: "Δ.Ο.Υ." },
                            model: {
                              value: _vm.customer.doy,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "doy", $$v)
                              },
                              expression: "customer.doy"
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
                            attrs: { label: "Διακριτικό Όνομα" },
                            model: {
                              value: _vm.customer.display_name,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "display_name", $$v)
                              },
                              expression: "customer.display_name"
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
                            attrs: { label: "Υπεύθυνος" },
                            model: {
                              value: _vm.customer.responsible,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "responsible", $$v)
                              },
                              expression: "customer.responsible"
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
                            attrs: { label: "Τηλέφ. 1" },
                            model: {
                              value: _vm.customer.phone,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "phone", $$v)
                              },
                              expression: "customer.phone"
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
                            attrs: { label: "Τηλέφ. 2" },
                            model: {
                              value: _vm.customer.phone_2,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "phone_2", $$v)
                              },
                              expression: "customer.phone_2"
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
                          _c("v-text-field", {
                            attrs: { label: "Email" },
                            model: {
                              value: _vm.customer.email,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "email", $$v)
                              },
                              expression: "customer.email"
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
                          _c("v-text-field", {
                            attrs: { label: "Κινητό" },
                            model: {
                              value: _vm.customer.mobile,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "mobile", $$v)
                              },
                              expression: "customer.mobile"
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
                          _c("v-text-field", {
                            attrs: { label: "FAX" },
                            model: {
                              value: _vm.customer.fax,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "fax", $$v)
                              },
                              expression: "customer.fax"
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
                          _c("v-text-field", {
                            attrs: { label: "Επάγγελμα" },
                            model: {
                              value: _vm.customer.job,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "job", $$v)
                              },
                              expression: "customer.job"
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
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.cities,
                              label: "Πόλη",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.customer.city_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "city_id", $$v)
                              },
                              expression: "customer.city_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "5", md: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Διεύθυνση" },
                            model: {
                              value: _vm.customer.address,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "address", $$v)
                              },
                              expression: "customer.address"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "3" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.users,
                              label: "Πωλητής",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.customer.user_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "user_id", $$v)
                              },
                              expression: "customer.user_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "4", md: "2" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.status,
                              label: "Κατάσταση",
                              "item-text": "text",
                              "item-value": "value"
                            },
                            model: {
                              value: _vm.customer.active,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "active", $$v)
                              },
                              expression: "customer.active"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "3" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.brandTypes,
                              label: "Μάρκα",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.customer.brand_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "brand_type_id", $$v)
                              },
                              expression: "customer.brand_type_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "2" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.sellerTypes,
                              label: "Τύπος",
                              "item-text": "name",
                              "item-value": "id"
                            },
                            model: {
                              value: _vm.customer.seller_type_id,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "seller_type_id", $$v)
                              },
                              expression: "customer.seller_type_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "2", md: "2" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Πιστωτικό Όριο",
                              "append-icon": "mdi-currency-eur"
                            },
                            model: {
                              value: _vm.customer.limit,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "limit", $$v)
                              },
                              expression: "customer.limit"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "2", md: "2" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Ποσοστό",
                              "append-icon": "mdi-currency-eur"
                            },
                            model: {
                              value: _vm.customer.percentage,
                              callback: function($$v) {
                                _vm.$set(_vm.customer, "percentage", $$v)
                              },
                              expression: "customer.percentage"
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
          !_vm.customer_id
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

/***/ "./resources/js/components/customers/Details.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/customers/Details.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=2e3a27ad& */ "./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/components/customers/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customers/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customers/Details.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/customers/Details.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=2e3a27ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/Details.vue?vue&type=template&id=2e3a27ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_2e3a27ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);