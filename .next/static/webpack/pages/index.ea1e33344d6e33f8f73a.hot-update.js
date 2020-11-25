webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrencyInput/index.js":
/*!*******************************************!*\
  !*** ./components/CurrencyInput/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_jungb_Documents_DEV_Nodejs_my_lab_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




var _jsxFileName = "C:\\Users\\jungb\\Documents\\DEV\\Nodejs\\my-lab\\components\\CurrencyInput\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_jungb_Documents_DEV_Nodejs_my_lab_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var currencyFormatter = function currencyFormatter(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

var CurrencyInput = function CurrencyInput(props) {
  _s();

  var defaultValue = props.defaultValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue.toFixed(2) || 0),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["InputNumber"], _objectSpread({
      formatter: function formatter() {
        return currencyFormatter(inputValue);
      },
      parser: function parser(value) {
        return setInputValue(parseFloat(value.toString().replace(/[^\d]/g, '').replace(/(\d\d?)$/, '.$1')).toFixed(2));
      }
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), inputValue]
  }, void 0, true);
};

_s(CurrencyInput, "Qq+6V7rHQGMsun+l0QT90itNJz4=");

_c = CurrencyInput;
/* harmony default export */ __webpack_exports__["default"] = (CurrencyInput);

var _c;

$RefreshReg$(_c, "CurrencyInput");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIkN1cnJlbmN5SW5wdXQiLCJwcm9wcyIsImRlZmF1bHRWYWx1ZSIsInVzZVN0YXRlIiwidG9GaXhlZCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFJO0FBQ2pDLFNBQU8sSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3BDQyxTQUFLLEVBQUUsVUFENkI7QUFFcENDLFlBQVEsRUFBRTtBQUYwQixHQUEvQixFQUdKQyxNQUhJLENBR0dMLEtBSEgsQ0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN2QkMsWUFEdUIsR0FDTkQsS0FETSxDQUN2QkMsWUFEdUI7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUNELFlBQVksQ0FBQ0UsT0FBYixDQUFxQixDQUFyQixLQUEyQixDQUE1QixDQUZmO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWEMsYUFGVzs7QUFJL0Isc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUNFLGVBQVMsRUFBRTtBQUFBLGVBQU1iLGlCQUFpQixDQUFDWSxVQUFELENBQXZCO0FBQUEsT0FEYjtBQUVFLFlBQU0sRUFBRSxnQkFBQVgsS0FBSztBQUFBLGVBQUlZLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDYixLQUFLLENBQUNjLFFBQU4sR0FBaUJDLE9BQWpCLENBQXlCLFFBQXpCLEVBQWtDLEVBQWxDLEVBQXNDQSxPQUF0QyxDQUE4QyxVQUE5QyxFQUF5RCxLQUF6RCxDQUFELENBQVYsQ0FBNEVMLE9BQTVFLENBQW9GLENBQXBGLENBQUQsQ0FBakI7QUFBQTtBQUZmLE9BR01ILEtBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUlJLFVBTko7QUFBQSxrQkFERjtBQVVELENBZEQ7O0dBQU1MLGE7O0tBQUFBLGE7QUFnQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhMWUzMzM0NGQ2ZTMzZjhmNzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcclxuICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZS50b0ZpeGVkKDIpIHx8IDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5wdXROdW1iZXJcclxuICAgICAgICBmb3JtYXR0ZXI9eygpID0+IGN1cnJlbmN5Rm9ybWF0dGVyKGlucHV0VmFsdWUpfVxyXG4gICAgICAgIHBhcnNlcj17dmFsdWUgPT4gc2V0SW5wdXRWYWx1ZShwYXJzZUZsb2F0KHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvW15cXGRdL2csJycpLnJlcGxhY2UoLyhcXGRcXGQ/KSQvLCcuJDEnKSkudG9GaXhlZCgyKSl9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgICB7IGlucHV0VmFsdWUgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9