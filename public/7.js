(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_customers_Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/customers/Details */ "./resources/js/components/customers/Details.vue");
/* harmony import */ var _views_Orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Orders */ "./resources/js/views/Orders.vue");
/* harmony import */ var _views_Visits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Visits */ "./resources/js/views/Visits.vue");
/* harmony import */ var _views_Incomes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/Incomes */ "./resources/js/views/Incomes.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    customerDetails: _components_customers_Details__WEBPACK_IMPORTED_MODULE_0__["default"],
    orders: _views_Orders__WEBPACK_IMPORTED_MODULE_1__["default"],
    visits: _views_Visits__WEBPACK_IMPORTED_MODULE_2__["default"],
    incomes: _views_Incomes__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      tab: null
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6& ***!
  \************************************************************************************************************************************************************************************************************/
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
                { staticClass: "ma-5" },
                [
                  _c(
                    "v-tabs",
                    {
                      attrs: {
                        "background-color": "secondary",
                        color: "#fff",
                        grow: "",
                        dark: "",
                        height: "64"
                      },
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c("v-tab", [_vm._v("Στοιχεια")]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Παραγγελιες")]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Προσφορες")]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Επισκεψεις")]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("Εισπραξεις")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c("v-tab-item", [_c("customer-details")], 1),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "", color: "basil" } },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "px-3 py-0" },
                                [
                                  _c("orders", {
                                    attrs: {
                                      isOrder: true,
                                      hideToolbar: true,
                                      customer: _vm.$route.params.id
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "", color: "basil" } },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "px-3 py-0" },
                                [
                                  _c("orders", {
                                    attrs: {
                                      isOrder: false,
                                      hideToolbar: true,
                                      customer: _vm.$route.params.id
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "", color: "basil" } },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "px-3 py-0" },
                                [
                                  _c("visits", {
                                    attrs: {
                                      isOrder: false,
                                      hideToolbar: true,
                                      customer: _vm.$route.params.id
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "", color: "basil" } },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "px-3 py-0" },
                                [
                                  _c("incomes", {
                                    attrs: {
                                      isOrder: false,
                                      hideToolbar: true,
                                      customer: _vm.$route.params.id
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

/***/ "./resources/js/views/CustomerSingle.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/CustomerSingle.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerSingle.vue?vue&type=template&id=94ad7cb6& */ "./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6&");
/* harmony import */ var _CustomerSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerSingle.vue?vue&type=script&lang=js& */ "./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CustomerSingle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSingle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CustomerSingle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSingle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerSingle.vue?vue&type=template&id=94ad7cb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CustomerSingle.vue?vue&type=template&id=94ad7cb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerSingle_vue_vue_type_template_id_94ad7cb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);