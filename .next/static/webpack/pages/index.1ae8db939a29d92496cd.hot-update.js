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
    var reversedVal = val.replace(new RegExp("\\" + group, "g"), ""); //reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
    //  => 1232.21 €
    // removing everything except the digits and dot

    reversedVal = reversedVal.replace(/[^0-9.]/g, ""); //  => 1232.21
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
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwiZ3JvdXAiLCJyZXBsYWNlIiwiZGVjaW1hbCIsInJldmVyc2VkVmFsIiwiUmVnRXhwIiwiZGlnaXRzQWZ0ZXJEZWNpbWFsQ291bnQiLCJzcGxpdCIsIm5lZWRzRGlnaXRzQXBwZW5kZWQiLCJNYXRoIiwicG93IiwiTnVtYmVyIiwiaXNOYU4iLCJlcnJvciIsImNvbnNvbGUiLCJDdXJyZW5jeUlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJO0FBQ0Y7QUFDQSxRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFBNEM7QUFDMUNELFNBQUcsR0FBRyxLQUFOO0FBQ0QsS0FKQyxDQU1GOzs7QUFDQSxRQUFJRSxLQUFLLEdBQUcsSUFBSVIsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCRyxNQUEvQixDQUFzQyxJQUF0QyxFQUE0Q0ssT0FBNUMsQ0FBb0QsSUFBcEQsRUFBMEQsRUFBMUQsQ0FBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxJQUFJVixJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JHLE1BQS9CLENBQXNDLEdBQXRDLEVBQTJDSyxPQUEzQyxDQUFtRCxJQUFuRCxFQUF5RCxFQUF6RCxDQUFkO0FBQ0EsUUFBSUUsV0FBVyxHQUFHTCxHQUFHLENBQUNHLE9BQUosQ0FBWSxJQUFJRyxNQUFKLENBQVcsT0FBT0osS0FBbEIsRUFBeUIsR0FBekIsQ0FBWixFQUEyQyxFQUEzQyxDQUFsQixDQVRFLENBVUY7QUFDQTtBQUVBOztBQUNBRyxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0YsT0FBWixDQUFvQixVQUFwQixFQUFnQyxFQUFoQyxDQUFkLENBZEUsQ0FlRjtBQUVBOztBQUNBLFFBQU1JLHVCQUF1QixHQUFHLENBQUNGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixLQUE2QixFQUE5QixFQUFrQ1AsTUFBbEU7QUFDQSxRQUFNUSxtQkFBbUIsR0FBR0YsdUJBQXVCLEdBQUcsQ0FBdEQ7O0FBRUEsUUFBSUUsbUJBQUosRUFBeUI7QUFDdkJKLGlCQUFXLEdBQUdBLFdBQVcsR0FBR0ssSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhSix1QkFBdUIsR0FBRyxDQUF2QyxDQUE1QjtBQUNEOztBQUVELFdBQU9LLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhUixXQUFiLElBQTRCLENBQTVCLEdBQWdDQSxXQUF2QztBQUNELEdBMUJELENBMEJFLE9BQU9TLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBQ0YsQ0E5QkQ7O0FBZ0NBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixzQkFDRSxxRUFBQyxnREFBRDtBQUNFLGdCQUFZLEVBQUUsR0FEaEI7QUFFRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLEdBREY7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBRlQ7QUFNRSxhQUFTLEVBQUUxQixpQkFOYjtBQU9FLFVBQU0sRUFBRU87QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztLQUFNaUIsYTtBQWNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYWU4ZGI5MzlhMjlkOTI0OTZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgY3VycmVuY3lGb3JtYXR0ZXIgPSB2YWx1ZSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnQlJMJ1xyXG4gIH0pLmZvcm1hdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBjdXJyZW5jeVBhcnNlciA9IHZhbCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGZvciB3aGVuIHRoZSBpbnB1dCBnZXRzIGNsZWFyc1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpIHtcclxuICAgICAgdmFsID0gXCIwLjBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlY3RpbmcgYW5kIHBhcnNpbmcgYmV0d2VlbiBjb21tYSBhbmQgZG90XHJcbiAgICBsZXQgZ3JvdXAgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJykuZm9ybWF0KDExMTEpLnJlcGxhY2UoLzEvZywgXCJcIik7XHJcbiAgICBsZXQgZGVjaW1hbCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInKS5mb3JtYXQoMS4xKS5yZXBsYWNlKC8xL2csIFwiXCIpO1xyXG4gICAgbGV0IHJldmVyc2VkVmFsID0gdmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGdyb3VwLCBcImdcIiksIFwiXCIpO1xyXG4gICAgLy9yZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG4gICAgLy8gID0+IDEyMzIuMjEg4oKsXHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgZXZlcnl0aGluZyBleGNlcHQgdGhlIGRpZ2l0cyBhbmQgZG90XHJcbiAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XHJcbiAgICAvLyAgPT4gMTIzMi4yMVxyXG5cclxuICAgIC8vIGFwcGVuZGluZyBkaWdpdHMgcHJvcGVybHlcclxuICAgIGNvbnN0IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID0gKHJldmVyc2VkVmFsLnNwbGl0KFwiLlwiKVsxXSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgY29uc3QgbmVlZHNEaWdpdHNBcHBlbmRlZCA9IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID4gMjtcclxuXHJcbiAgICBpZiAobmVlZHNEaWdpdHNBcHBlbmRlZCkge1xyXG4gICAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsICogTWF0aC5wb3coMTAsIGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50IC0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihyZXZlcnNlZFZhbCkgPyAwIDogcmV2ZXJzZWRWYWw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dE51bWJlclxyXG4gICAgICBkZWZhdWx0VmFsdWU9ezE1MH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiXHJcbiAgICAgIH19XHJcbiAgICAgIGZvcm1hdHRlcj17Y3VycmVuY3lGb3JtYXR0ZXJ9XHJcbiAgICAgIHBhcnNlcj17Y3VycmVuY3lQYXJzZXJ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==