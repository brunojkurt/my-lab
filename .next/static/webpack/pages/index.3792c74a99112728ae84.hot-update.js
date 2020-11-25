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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "C:\\Users\\jungb\\Documents\\DEV\\Nodejs\\my-lab\\components\\CurrencyInput\\index.js",
    _this = undefined;



var currencyFormatter = function currencyFormatter(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

var currencyParser = function currencyParser(val) {
  try {
    // for when the input gets clears
    if (typeof val === "string" && !val.length) {
      val = "0.0";
    } // detecting and parsing between comma and dot


    var group = new Intl.NumberFormat('pt-BR').format(1111).replace(/1/g, "");
    var decimal = new Intl.NumberFormat('pt-BR').format(1.1).replace(/1/g, "");
    var reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
    console.log(reversedVal);
    reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), "."); //  => 1232.21 €
    // removing everything except the digits and dot

    reversedVal = reversedVal.replace(/[^0-9\.|\,]/g, ""); //  => 1232.21
    // appending digits properly

    var digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
    var needsDigitsAppended = digitsAfterDecimalCount > 2;

    if (needsDigitsAppended) {
      reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
    }

    return Number.isNaN(reversedVal) ? 0 : reversedVal;
  } catch (error) {
    console.error(error);
  }
};

var CurrencyInput = function CurrencyInput() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    defaultValue: 150,
    style: {
      width: 400,
      marginLeft: "1rem"
    },
    formatter: currencyFormatter,
    parser: currencyParser
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwiZ3JvdXAiLCJyZXBsYWNlIiwiZGVjaW1hbCIsInJldmVyc2VkVmFsIiwiUmVnRXhwIiwiY29uc29sZSIsImxvZyIsImRpZ2l0c0FmdGVyRGVjaW1hbENvdW50Iiwic3BsaXQiLCJuZWVkc0RpZ2l0c0FwcGVuZGVkIiwiTWF0aCIsInBvdyIsIk51bWJlciIsImlzTmFOIiwiZXJyb3IiLCJDdXJyZW5jeUlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJO0FBQ0Y7QUFDQSxRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFBNEM7QUFDMUNELFNBQUcsR0FBRyxLQUFOO0FBQ0QsS0FKQyxDQU1GOzs7QUFDQSxRQUFJRSxLQUFLLEdBQUcsSUFBSVIsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCRyxNQUEvQixDQUFzQyxJQUF0QyxFQUE0Q0ssT0FBNUMsQ0FBb0QsSUFBcEQsRUFBMEQsRUFBMUQsQ0FBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJVixJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JHLE1BQS9CLENBQXNDLEdBQXRDLEVBQTJDSyxPQUEzQyxDQUFtRCxJQUFuRCxFQUF5RCxFQUF6RCxDQUFkO0FBQ0EsUUFBSUUsV0FBVyxHQUFHTCxHQUFHLENBQUNHLE9BQUosQ0FBWSxJQUFJRyxNQUFKLENBQVcsT0FBT0osS0FBbEIsRUFBeUIsR0FBekIsQ0FBWixFQUEyQyxFQUEzQyxDQUFsQjtBQUNBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBQSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0YsT0FBWixDQUFvQixJQUFJRyxNQUFKLENBQVcsT0FBT0YsT0FBbEIsRUFBMkIsR0FBM0IsQ0FBcEIsRUFBcUQsR0FBckQsQ0FBZCxDQVhFLENBWUY7QUFFQTs7QUFDQUMsZUFBVyxHQUFHQSxXQUFXLENBQUNGLE9BQVosQ0FBb0IsY0FBcEIsRUFBb0MsRUFBcEMsQ0FBZCxDQWZFLENBZ0JGO0FBRUE7O0FBQ0EsUUFBTU0sdUJBQXVCLEdBQUcsQ0FBQ0osV0FBVyxDQUFDSyxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEtBQTZCLEVBQTlCLEVBQWtDVCxNQUFsRTtBQUNBLFFBQU1VLG1CQUFtQixHQUFHRix1QkFBdUIsR0FBRyxDQUF0RDs7QUFFQSxRQUFJRSxtQkFBSixFQUF5QjtBQUN2Qk4saUJBQVcsR0FBR0EsV0FBVyxHQUFHTyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFKLHVCQUF1QixHQUFHLENBQXZDLENBQTVCO0FBQ0Q7O0FBRUQsV0FBT0ssTUFBTSxDQUFDQyxLQUFQLENBQWFWLFdBQWIsSUFBNEIsQ0FBNUIsR0FBZ0NBLFdBQXZDO0FBQ0QsR0EzQkQsQ0EyQkUsT0FBT1csS0FBUCxFQUFjO0FBQ2RULFdBQU8sQ0FBQ1MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixDQS9CRDs7QUFpQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsR0FERjtBQUVMQyxnQkFBVSxFQUFFO0FBRlAsS0FGVDtBQU1FLGFBQVMsRUFBRTNCLGlCQU5iO0FBT0UsVUFBTSxFQUFFTztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1rQixhO0FBY1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3OTJjNzRhOTkxMTI3MjhhZTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlbmN5UGFyc2VyID0gdmFsID0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gZm9yIHdoZW4gdGhlIGlucHV0IGdldHMgY2xlYXJzXHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLmxlbmd0aCkge1xyXG4gICAgICB2YWwgPSBcIjAuMFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRldGVjdGluZyBhbmQgcGFyc2luZyBiZXR3ZWVuIGNvbW1hIGFuZCBkb3RcclxuICAgIGxldCBncm91cCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInKS5mb3JtYXQoMTExMSkucmVwbGFjZSgvMS9nLCBcIlwiKTtcclxuICAgIGxldCBkZWNpbWFsID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicpLmZvcm1hdCgxLjEpLnJlcGxhY2UoLzEvZywgXCJcIik7XHJcbiAgICBsZXQgcmV2ZXJzZWRWYWwgPSB2YWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZ3JvdXAsIFwiZ1wiKSwgXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXZlcnNlZFZhbCk7XHJcbiAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG4gICAgLy8gID0+IDEyMzIuMjEg4oKsXHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgZXZlcnl0aGluZyBleGNlcHQgdGhlIGRpZ2l0cyBhbmQgZG90XHJcbiAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UoL1teMC05XFwufFxcLF0vZywgXCJcIik7XHJcbiAgICAvLyAgPT4gMTIzMi4yMVxyXG5cclxuICAgIC8vIGFwcGVuZGluZyBkaWdpdHMgcHJvcGVybHlcclxuICAgIGNvbnN0IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID0gKHJldmVyc2VkVmFsLnNwbGl0KFwiLlwiKVsxXSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgY29uc3QgbmVlZHNEaWdpdHNBcHBlbmRlZCA9IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID4gMjtcclxuXHJcbiAgICBpZiAobmVlZHNEaWdpdHNBcHBlbmRlZCkge1xyXG4gICAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsICogTWF0aC5wb3coMTAsIGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50IC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihyZXZlcnNlZFZhbCkgPyAwIDogcmV2ZXJzZWRWYWw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dE51bWJlclxyXG4gICAgICBkZWZhdWx0VmFsdWU9ezE1MH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiXHJcbiAgICAgIH19XHJcbiAgICAgIGZvcm1hdHRlcj17Y3VycmVuY3lGb3JtYXR0ZXJ9XHJcbiAgICAgIHBhcnNlcj17Y3VycmVuY3lQYXJzZXJ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==