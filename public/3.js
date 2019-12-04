(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js& ***!
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
    order: Object
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
      axios["delete"]("orders/".concat(this.order.id)).then(function (res) {
        _this.$emit("closeDialog");

        _this.$emit("orderDeleted");

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    order: Object
  },
  data: function data() {
    return {
      loading: false,
      menu: false,
      customers: [],
      initProducts: [],
      products: [],
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
        if (!order.id && !v) {
          return "Το πεδίο είναι υποχρεωτικό";
        } else {
          return !!v;
        }
      }]
    };
  },
  computed: {
    formTitle: function formTitle() {
      var name = this.$route.name == "Orders" ? "Παραγγελίας" : "Προσφοράς";
      return !this.order.id ? "\u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7 ".concat(name) : "\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 ".concat(name);
    }
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    customersPrice: function customersPrice(item) {
      // console.log(item);
      // console.log(this.order);
      // let percentage = this.order.customer.percentage ? parseFloat(this.order.customer.percentage) / 100 : 0.4;
      // if(item.product)
      //   item.product.price += item.product.price * percentage;
      return item.product ? item.product.price : 0;
    },
    updateItem: function updateItem(item, d) {
      var selectedProduct = this.products.find(function (product) {
        return product.id == item.product_id;
      });
      item.product = selectedProduct;
      if (selectedProduct) return item.price = (item.quantity * selectedProduct.price).toFixed(2);
      item.price = 0;
    },
    addItem: function addItem() {
      this.order.products.push({
        price: 0,
        quantity: 1,
        id: Math.random() * 2525
      });
    },
    saveAsOrder: function saveAsOrder() {
      this.order.is_offer = 1;
      this.save();
    },
    removeItem: function removeItem(item) {
      var index = this.order.products.findIndex(function (p) {
        return p.id == item.id;
      });
      this.order.products.splice(index, 1);
    },
    getCustomers: function getCustomers() {
      var _this = this;

      axios.get("customers").then(function (res) {
        return _this.customers = res.data;
      });
    },
    getAttributes: function getAttributes() {
      var _this2 = this;

      axios.get("products-attributes").then(function (res) {
        _this2.initProducts = _this2.products = res.data;
      });
    },
    save: function save() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        // this.loading = true;
        axios.post("orders", this.order).then(function (res) {
          _this3.$emit("closeDialog");

          _this3.$emit("orderEdited");

          _this3.loading = false;
        });
      }
    }
  },
  created: function created() {
    this.getCustomers();
    this.getAttributes();
  },
  watch: {
    order: function order(val) {
      window.order = val;
    } // 'order.customer_id'(){
    //   console.log(this.order.customer_id);
    //   console.log(this.products);
    //     this.products = this.initProducts.map(product => {
    //       product.price = product.price + 100;
    //     });
    //     this.order.products = this.order.products.map(product => {
    //       console.log(product);
    //       product.price = product.price + 100;
    //     });
    // }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    deleteDialog: _components_orders_DeleteDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    editDialog: _components_orders_EditDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      expanded: [],
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
        text: "Αριθμός",
        value: "products_count",
        align: "center"
      }, {
        text: "Ποσό",
        value: "summary",
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
      editedItem: {}
    };
  },
  created: function created() {
    this.getorders();
    if (this.$route.query["new"]) this.dialog = true;
  },
  methods: {
    getorders: function getorders() {
      var _this = this;

      this.loading = true;
      axios.get("orders?orders=".concat(this.$route.name == "Orders")).then(function (res) {
        _this.orders = res.data;
        _this.loading = false;
        _this.$route.query["new"];
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c& ***!
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
                _vm._s(_vm.order.customer ? _vm.order.customer.name : "") +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e& ***!
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
      attrs: { "max-width": "1200px" },
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
                                  value: _vm.order.customer_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.order, "customer_id", $$v)
                                  },
                                  expression: "order.customer_id"
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
                                attrs: {
                                  "prepend-icon": "mdi-calendar",
                                  readonly: "",
                                  label: "Ημερομηνία"
                                },
                                model: {
                                  value: _vm.order.created_at,
                                  callback: function($$v) {
                                    _vm.$set(_vm.order, "created_at", $$v)
                                  },
                                  expression: "order.created_at"
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
                                  value: _vm.order.comments,
                                  callback: function($$v) {
                                    _vm.$set(_vm.order, "comments", $$v)
                                  },
                                  expression: "order.comments"
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
                            {
                              staticClass: "text-right",
                              attrs: { cols: "12", sm: "12", md: "12" }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-2",
                                  attrs: { color: "primary", dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addItem()
                                    }
                                  }
                                },
                                [_vm._v("Προσθηκη")]
                              ),
                              _vm._v(" "),
                              _c("v-data-table", {
                                staticClass: "products-table",
                                attrs: {
                                  dark: "",
                                  "hide-default-footer": "",
                                  headers: [
                                    {
                                      text: "Κωδικός",
                                      align: "center",
                                      sortable: false,
                                      value: "product.code"
                                    },
                                    {
                                      text: "Ποσότητα",
                                      align: "left",
                                      value: "quantity",
                                      width: 106
                                    },
                                    {
                                      text: "Tιμή",
                                      align: "left",
                                      value: "price",
                                      width: 150
                                    },
                                    {
                                      text: "Tιμή Μονάδας",
                                      align: "center",
                                      value: "product.price"
                                    },
                                    {
                                      text: "Ενέργειες",
                                      align: "center",
                                      value: "action",
                                      sortable: false
                                    }
                                  ],
                                  items: _vm.order.products
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "item.product.code",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-autocomplete", {
                                          staticClass: "edit-product-dialog",
                                          attrs: {
                                            label: "Προιόν",
                                            items: _vm.products,
                                            required: "",
                                            rules: _vm.requiredRules,
                                            "item-text": "code",
                                            "item-value": "id",
                                            clearable: "",
                                            dark: ""
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.updateItem(item)
                                            }
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "item",
                                                fn: function(ref) {
                                                  var item = ref.item
                                                  return [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(item.code) +
                                                        " - " +
                                                        _vm._s(
                                                          item.product.name
                                                        ) +
                                                        " (" +
                                                        _vm._s(item.lt_kg) +
                                                        "lt)\n                  "
                                                    )
                                                  ]
                                                }
                                              },
                                              {
                                                key: "selection",
                                                fn: function(ref) {
                                                  var item = ref.item
                                                  return [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(item.code) +
                                                        " - " +
                                                        _vm._s(
                                                          item.product.name
                                                        ) +
                                                        " (" +
                                                        _vm._s(item.lt_kg) +
                                                        "lt)\n                  "
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          ),
                                          model: {
                                            value: item.product_id,
                                            callback: function($$v) {
                                              _vm.$set(item, "product_id", $$v)
                                            },
                                            expression: "item.product_id"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.price",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            dark: "",
                                            "append-icon": "mdi-currency-eur"
                                          },
                                          model: {
                                            value: item.price,
                                            callback: function($$v) {
                                              _vm.$set(item, "price", $$v)
                                            },
                                            expression: "item.price"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.quantity",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: { dark: "", type: "number" },
                                          on: {
                                            input: function($event) {
                                              return _vm.updateItem(item)
                                            }
                                          },
                                          model: {
                                            value: item.quantity,
                                            callback: function($$v) {
                                              _vm.$set(item, "quantity", $$v)
                                            },
                                            expression: "item.quantity"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.product.price",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "span",
                                          { staticStyle: { color: "#fff" } },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.customersPrice(item)) +
                                                "€"
                                            )
                                          ]
                                        )
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
                                              color: "primary"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.removeItem(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { small: "" } },
                                              [_vm._v("mdi-close")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
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
                  ),
                  _vm._v(" "),
                  _vm.$route.name == "Offers"
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "blue darken-1",
                            text: "",
                            type: "buttom"
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveAsOrder()
                            }
                          }
                        },
                        [_vm._v("Μετατροπη σε παραγγελια")]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
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
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", color: "secondary", dark: "" } },
                    [
                      _c("v-toolbar-title", [_vm._v(_vm._s(_vm.pageTitle))]),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-title",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
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
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.orders,
                      "sort-by": "name",
                      "single-expand": _vm.singleExpand,
                      expanded: _vm.expanded,
                      search: _vm.search,
                      "show-expand": ""
                    },
                    on: {
                      "update:expanded": function($event) {
                        _vm.expanded = $event
                      }
                    },
                    scopedSlots: _vm._u([
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
                      },
                      {
                        key: "expanded-item",
                        fn: function(ref) {
                          var item = ref.item
                          var headers = ref.headers
                          return [
                            _c(
                              "td",
                              {
                                staticClass: "pa-0 tables-td",
                                attrs: { colspan: headers.length }
                              },
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
                                        value: "product.code"
                                      },
                                      {
                                        text: "Ποσότητα",
                                        align: "center",
                                        value: "quantity"
                                      },
                                      {
                                        text: "Tιμή",
                                        align: "center",
                                        value: "price"
                                      },
                                      {
                                        text: "Tιμή Ποσότητας",
                                        align: "center",
                                        value: "price_per_kg"
                                      }
                                    ],
                                    items: item.products
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "item.product.code",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { right: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "div",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.product
                                                                    .code
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Ονομασία: " +
                                                      _vm._s(
                                                        item.product.product
                                                          .name
                                                      ) +
                                                      "lt"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Ποσότητα: " +
                                                      _vm._s(
                                                        item.product.lt_kg
                                                      ) +
                                                      "lt"
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        }
                                      },
                                      {
                                        key: "item.price",
                                        fn: function(ref) {
                                          var item = ref.item
                                          return [
                                            _vm._v(_vm._s(item.price) + "€")
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
                                              _vm._s(
                                                (
                                                  item.price / item.quantity
                                                ).toFixed(2)
                                              ) + "€"
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "sum-table-div pa-5" },
                                  [
                                    _vm._v(
                                      "Σύνολο Παραγγελίας: " +
                                        _vm._s(item.summary) +
                                        "€"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "sum-table-div pb-5" },
                                  [
                                    _vm._v(
                                      "Αριθμός Προϊόντων: " +
                                        _vm._s(item.products_count)
                                    )
                                  ]
                                )
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

/***/ "./resources/js/components/orders/DeleteDialog.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/orders/DeleteDialog.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=template&id=5d295d3c& */ "./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c&");
/* harmony import */ var _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/DeleteDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/DeleteDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteDialog.vue?vue&type=template&id=5d295d3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/DeleteDialog.vue?vue&type=template&id=5d295d3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteDialog_vue_vue_type_template_id_5d295d3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/orders/EditDialog.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/orders/EditDialog.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=template&id=f360fe7e& */ "./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e&");
/* harmony import */ var _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/orders/EditDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/EditDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditDialog.vue?vue&type=template&id=f360fe7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/orders/EditDialog.vue?vue&type=template&id=f360fe7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDialog_vue_vue_type_template_id_f360fe7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Orders.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Orders.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=36c3bb78& */ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Orders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Orders.vue?vue&type=template&id=36c3bb78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);