webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrencyInput/index.js":
/*!*******************************************!*\
  !*** ./components/CurrencyInput/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _jsxFileName = "C:\\Users\\jungb\\Documents\\DEV\\Nodejs\\my-lab\\components\\CurrencyInput\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var currencyFormatter = function currencyFormatter(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

var CurrencyInput = function CurrencyInput(props) {
  _s();

  var defaultValue = props.defaultValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue || 0),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
      style: {
        width: 400,
        marginLeft: "1rem"
      },
      formatter: function formatter() {
        return currencyFormatter(inputValue);
      },
      onChange: function onChange(value) {
        return setInputValue(parseFloat(value.toString().replace(/[^\d]/g, '').replace(/(\d\d?)$/, '.$1')).toFixed(2));
      },
      value: inputValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), inputValue]
  }, void 0, true);
};

_s(CurrencyInput, "IHDL5eEJkM8VP+KFr58Hoa+a7rk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIkN1cnJlbmN5SW5wdXQiLCJwcm9wcyIsImRlZmF1bHRWYWx1ZSIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSyxFQUFJO0FBQ2pDLFNBQU8sSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3BDQyxTQUFLLEVBQUUsVUFENkI7QUFFcENDLFlBQVEsRUFBRTtBQUYwQixHQUEvQixFQUdKQyxNQUhJLENBR0dMLEtBSEgsQ0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN2QkMsWUFEdUIsR0FDTkQsS0FETSxDQUN2QkMsWUFEdUI7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUNELFlBQVksSUFBSSxDQUFqQixDQUZmO0FBQUEsTUFFdkJFLFVBRnVCO0FBQUEsTUFFWEMsYUFGVzs7QUFJL0Isc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUNFLFdBQUssRUFBRTtBQUNMQyxhQUFLLEVBQUUsR0FERjtBQUVMQyxrQkFBVSxFQUFFO0FBRlAsT0FEVDtBQUtFLGVBQVMsRUFBRTtBQUFBLGVBQU1kLGlCQUFpQixDQUFDVyxVQUFELENBQXZCO0FBQUEsT0FMYjtBQU1FLGNBQVEsRUFBRSxrQkFBQVYsS0FBSztBQUFBLGVBQUlXLGFBQWEsQ0FBQ0csVUFBVSxDQUFDZCxLQUFLLENBQUNlLFFBQU4sR0FBaUJDLE9BQWpCLENBQXlCLFFBQXpCLEVBQWtDLEVBQWxDLEVBQXNDQSxPQUF0QyxDQUE4QyxVQUE5QyxFQUF5RCxLQUF6RCxDQUFELENBQVYsQ0FBNEVDLE9BQTVFLENBQW9GLENBQXBGLENBQUQsQ0FBakI7QUFBQSxPQU5qQjtBQU9FLFdBQUssRUFBRVA7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFVSUEsVUFWSjtBQUFBLGtCQURGO0FBY0QsQ0FsQkQ7O0dBQU1KLGE7O0tBQUFBLGE7QUFvQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkMmQ1YzY3ZThlOTYyMzAwNDg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcclxuICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSB8fCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9ybWF0dGVyPXsoKSA9PiBjdXJyZW5jeUZvcm1hdHRlcihpbnB1dFZhbHVlKX1cclxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0SW5wdXRWYWx1ZShwYXJzZUZsb2F0KHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvW15cXGRdL2csJycpLnJlcGxhY2UoLyhcXGRcXGQ/KSQvLCcuJDEnKSkudG9GaXhlZCgyKSl9XHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsgaW5wdXRWYWx1ZSB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=