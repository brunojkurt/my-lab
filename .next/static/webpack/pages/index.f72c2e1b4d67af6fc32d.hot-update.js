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

var currencyParser = function currencyParser(val) {
  if (typeof val === "string" && !val.length) val = "0,0";
  val = val.replace(/[^0-9\.|\,]/g, "");
  val = val.replace('.', '');
  val = val.replace(',', '.');
  return Number.isNaN(val) ? 0 : val; // try {
  //   if (typeof val === "string" && !val.length)
  //     val = "0,0";
  //   let group = '.';
  //   let decimal = ',';
  //   let reversedVal = val.replace(/[^0-9\.|\,]/g, "");
  //   reversedVal = reversedVal.replace(new RegExp("\\" + group, "g"), "");
  //   reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
  //   return Number.isNaN(reversedVal) ? 0 : reversedVal;
  // } catch (error) {
  //   console.error(error);
  // }
};

var CurrencyInput = function CurrencyInput() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(150),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
      style: {
        width: 400,
        marginLeft: "1rem"
      },
      formatter: currencyFormatter,
      parser: currencyParser,
      onChange: function onChange(value) {
        return setInputValue(value.toFixed(2));
      },
      value: inputValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), inputValue]
  }, void 0, true);
};

_s(CurrencyInput, "Y+K8bCpdMgNJQrJuXT+8daD2B7M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwicmVwbGFjZSIsIk51bWJlciIsImlzTmFOIiwiQ3VycmVuY3lJbnB1dCIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFDRUQsR0FBRyxHQUFHLEtBQU47QUFFRkEsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFFQSxTQUFPQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUosR0FBYixJQUFvQixDQUFwQixHQUF3QkEsR0FBL0IsQ0FSNEIsQ0FTNUI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEdBQUQsQ0FEcEI7QUFBQSxNQUNsQkMsVUFEa0I7QUFBQSxNQUNOQyxhQURNOztBQUcxQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRSxHQURGO0FBRUxDLGtCQUFVLEVBQUU7QUFGUCxPQURUO0FBS0UsZUFBUyxFQUFFbEIsaUJBTGI7QUFNRSxZQUFNLEVBQUVPLGNBTlY7QUFPRSxjQUFRLEVBQUUsa0JBQUFOLEtBQUs7QUFBQSxlQUFJZSxhQUFhLENBQUNmLEtBQUssQ0FBQ2tCLE9BQU4sQ0FBYyxDQUFkLENBQUQsQ0FBakI7QUFBQSxPQVBqQjtBQVFFLFdBQUssRUFBRUo7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFXSUEsVUFYSjtBQUFBLGtCQURGO0FBZUQsQ0FsQkQ7O0dBQU1GLGE7O0tBQUFBLGE7QUFvQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3MmMyZTFiNGQ2N2FmNmZjMzJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlbmN5UGFyc2VyID0gdmFsID0+IHtcclxuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLmxlbmd0aClcclxuICAgIHZhbCA9IFwiMCwwXCJcclxuXHJcbiAgdmFsID0gdmFsLnJlcGxhY2UoL1teMC05XFwufFxcLF0vZywgXCJcIilcclxuICB2YWwgPSB2YWwucmVwbGFjZSgnLicsICcnKVxyXG4gIHZhbCA9IHZhbC5yZXBsYWNlKCcsJywgJy4nKVxyXG5cclxuICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbCkgPyAwIDogdmFsO1xyXG4gIC8vIHRyeSB7XHJcbiAgICBcclxuICAvLyAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICF2YWwubGVuZ3RoKVxyXG4gIC8vICAgICB2YWwgPSBcIjAsMFwiO1xyXG5cclxuICAvLyAgIGxldCBncm91cCA9ICcuJztcclxuICAvLyAgIGxldCBkZWNpbWFsID0gJywnO1xyXG4gIC8vICAgbGV0IHJldmVyc2VkVmFsID0gdmFsLnJlcGxhY2UoL1teMC05XFwufFxcLF0vZywgXCJcIik7XHJcbiAgLy8gICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGdyb3VwLCBcImdcIiksIFwiXCIpO1xyXG4gIC8vICAgcmV2ZXJzZWRWYWwgPSByZXZlcnNlZFZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcXCIgKyBkZWNpbWFsLCBcImdcIiksIFwiLlwiKTtcclxuXHJcbiAgLy8gICByZXR1cm4gTnVtYmVyLmlzTmFOKHJldmVyc2VkVmFsKSA/IDAgOiByZXZlcnNlZFZhbDtcclxuICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgLy8gfVxyXG59O1xyXG5cclxuY29uc3QgQ3VycmVuY3lJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IHVzZVN0YXRlKDE1MCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SW5wdXROdW1iZXJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiXHJcbiAgICAgICAgfX1cclxuICAgICAgICBmb3JtYXR0ZXI9e2N1cnJlbmN5Rm9ybWF0dGVyfVxyXG4gICAgICAgIHBhcnNlcj17Y3VycmVuY3lQYXJzZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldElucHV0VmFsdWUodmFsdWUudG9GaXhlZCgyKSl9XHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsgaW5wdXRWYWx1ZSB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=