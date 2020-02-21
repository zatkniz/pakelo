(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
        _this.$store.dispatch("getAllcustomers");

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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    orderSum: function orderSum() {
      if (this.order.products) {
        return this.order.products.reduce(function (total, currentValue) {
          return total + parseFloat(currentValue.price);
        }, 0).toFixed(2);
      }

      return 0;
    }
  },
  methods: {
    closeDialog: function closeDialog() {
      this.$emit("closeDialog");
    },
    searchProduct: function searchProduct(item, queryText, itemText) {
      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1 || item.product.name.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1;
    },
    findCustomer: function findCustomer() {
      var _this = this;

      this.order.customer = this.customers.find(function (customer) {
        return customer.id == _this.order.customer_id;
      });
    },
    calculatePrice: function calculatePrice(price) {
      var itemPercentage = parseFloat(price) * (parseFloat(this.order.customer.percentage) / 100);
      var returnValue = parseFloat(itemPercentage) + parseFloat(price);
      return returnValue.toFixed(2);
    },
    customersPrice: function customersPrice(item) {
      if (item.product) {
        return this.calculatePrice(item.product.price);
      }

      return 0;
    },
    updateItem: function updateItem(item, d) {
      var selectedProduct = this.products.find(function (product) {
        return product.id == item.product_id;
      });
      item.product = selectedProduct;
      if (selectedProduct) return item.price = (item.quantity * this.calculatePrice(selectedProduct.price)).toFixed(2);
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
      var _this2 = this;

      axios.get("customers").then(function (res) {
        return _this2.customers = res.data;
      });
    },
    getAttributes: function getAttributes() {
      var _this3 = this;

      axios.get("products-attributes").then(function (res) {
        _this3.initProducts = _this3.products = res.data;
      });
    },
    save: function save() {
      var _this4 = this;

      if (this.$refs.form.validate()) {
        // this.loading = true;
        if (!this.order.id && this.$route.name == "Orders") {
          this.order.is_offer = 1;
        }

        axios.post("orders", this.order).then(function (res) {
          _this4.$store.dispatch("getAllcustomers");

          _this4.$emit("closeDialog");

          _this4.$emit("orderEdited");

          _this4.loading = false;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      axios.get("orders?orders=".concat(this.isSingleOrder, "&date=").concat(this.searchQuery, "&user=").concat(this.user_id, "&customer=").concat(this.customer)).then(function (res) {
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

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

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
                                on: { input: _vm.findCustomer },
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
                                            filter: _vm.searchProduct,
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
                                                      _vm._s(item.code) +
                                                        " - " +
                                                        _vm._s(
                                                          item.product.name
                                                        ) +
                                                        " (" +
                                                        _vm._s(item.lt_kg) +
                                                        "lt)"
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
                                                      _vm._s(item.code) +
                                                        " - " +
                                                        _vm._s(
                                                          item.product.name
                                                        ) +
                                                        " (" +
                                                        _vm._s(item.lt_kg) +
                                                        "lt)"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  readonly: "",
                                  label: "Σύνολο Παραγγελίας"
                                },
                                model: {
                                  value: _vm.orderSum,
                                  callback: function($$v) {
                                    _vm.orderSum = $$v
                                  },
                                  expression: "orderSum"
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
                              _c("v-text-field", {
                                attrs: { label: "Αριθμός Τιμολογίου" },
                                model: {
                                  value: _vm.order.vat_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.order, "vat_number", $$v)
                                  },
                                  expression: "order.vat_number"
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
                              _c("v-checkbox", {
                                attrs: {
                                  color: "primary",
                                  label: "Χωρίς Τιμολόγιο"
                                },
                                model: {
                                  value: _vm.order.no_vat,
                                  callback: function($$v) {
                                    _vm.$set(_vm.order, "no_vat", $$v)
                                  },
                                  expression: "order.no_vat"
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