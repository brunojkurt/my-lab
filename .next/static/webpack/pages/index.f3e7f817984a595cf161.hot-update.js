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
  console.log("currency ".concat(value));
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

var currencyParser = function currencyParser(val) {
  try {
    // for when the input gets clears
    if (typeof val === "string" && !val.length) {
      val = "0,0";
    } // detecting and parsing between comma and dot


    var group = '.';
    var decimal = ',';
    var reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
    console.log(val, reversedVal);
    reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), ".");
    console.log(val, reversedVal); //  => 1232.21 €
    // removing everything except the digits and dot

    reversedVal = reversedVal.replace(/[^0-9\.|\,]/g, ""); //  => 1232.21
    // // appending digits properly
    // const digitsAfterDecimalCount = (reversedVal.split(".")[1] || []).length;
    // const needsDigitsAppended = digitsAfterDecimalCount > 2;
    // if (needsDigitsAppended) {
    //   reversedVal = reversedVal * Math.pow(10, digitsAfterDecimalCount - 2);
    // }

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
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJjdXJyZW5jeVBhcnNlciIsInZhbCIsImxlbmd0aCIsImdyb3VwIiwiZGVjaW1hbCIsInJldmVyc2VkVmFsIiwicmVwbGFjZSIsIlJlZ0V4cCIsIk51bWJlciIsImlzTmFOIiwiZXJyb3IiLCJDdXJyZW5jeUlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixvQkFBd0JGLEtBQXhCO0FBQ0EsU0FBTyxJQUFJRyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR1AsS0FISCxDQUFQO0FBSUQsQ0FORDs7QUFRQSxJQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJO0FBQ0Y7QUFDQSxRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFBNEM7QUFDMUNELFNBQUcsR0FBRyxLQUFOO0FBQ0QsS0FKQyxDQU1GOzs7QUFDQSxRQUFJRSxLQUFLLEdBQUcsR0FBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxHQUFkO0FBQ0EsUUFBSUMsV0FBVyxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsT0FBT0osS0FBbEIsRUFBeUIsR0FBekIsQ0FBWixFQUEyQyxFQUEzQyxDQUFsQjtBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWU8sR0FBWixFQUFpQkksV0FBakI7QUFDQUEsZUFBVyxHQUFHQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsSUFBSUMsTUFBSixDQUFXLE9BQU9ILE9BQWxCLEVBQTJCLEdBQTNCLENBQXBCLEVBQXFELEdBQXJELENBQWQ7QUFDQVgsV0FBTyxDQUFDQyxHQUFSLENBQVlPLEdBQVosRUFBaUJJLFdBQWpCLEVBWkUsQ0FhRjtBQUVBOztBQUNBQSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQixjQUFwQixFQUFvQyxFQUFwQyxDQUFkLENBaEJFLENBaUJGO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQU9FLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSixXQUFiLElBQTRCLENBQTVCLEdBQWdDQSxXQUF2QztBQUNELEdBNUJELENBNEJFLE9BQU9LLEtBQVAsRUFBYztBQUNkakIsV0FBTyxDQUFDaUIsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixDQWhDRDs7QUFrQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsR0FERjtBQUVMQyxnQkFBVSxFQUFFO0FBRlAsS0FGVDtBQU1FLGFBQVMsRUFBRXRCLGlCQU5iO0FBT0UsVUFBTSxFQUFFUztBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1XLGE7QUFjU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNlN2Y4MTc5ODRhNTk1Y2YxNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IGN1cnJlbmN5Rm9ybWF0dGVyID0gdmFsdWUgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBjdXJyZW5jeSAke3ZhbHVlfWApXHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnQlJMJ1xyXG4gIH0pLmZvcm1hdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBjdXJyZW5jeVBhcnNlciA9IHZhbCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGZvciB3aGVuIHRoZSBpbnB1dCBnZXRzIGNsZWFyc1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpIHtcclxuICAgICAgdmFsID0gXCIwLDBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlY3RpbmcgYW5kIHBhcnNpbmcgYmV0d2VlbiBjb21tYSBhbmQgZG90XHJcbiAgICBsZXQgZ3JvdXAgPSAnLic7XHJcbiAgICBsZXQgZGVjaW1hbCA9ICcsJztcclxuICAgIGxldCByZXZlcnNlZFZhbCA9IHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcXCIgKyBncm91cCwgXCJnXCIpLCBcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbCwgcmV2ZXJzZWRWYWwpO1xyXG4gICAgcmV2ZXJzZWRWYWwgPSByZXZlcnNlZFZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcXCIgKyBkZWNpbWFsLCBcImdcIiksIFwiLlwiKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbCwgcmV2ZXJzZWRWYWwpO1xyXG4gICAgLy8gID0+IDEyMzIuMjEg4oKsXHJcblxyXG4gICAgLy8gcmVtb3ZpbmcgZXZlcnl0aGluZyBleGNlcHQgdGhlIGRpZ2l0cyBhbmQgZG90XHJcbiAgICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UoL1teMC05XFwufFxcLF0vZywgXCJcIik7XHJcbiAgICAvLyAgPT4gMTIzMi4yMVxyXG5cclxuICAgIC8vIC8vIGFwcGVuZGluZyBkaWdpdHMgcHJvcGVybHlcclxuICAgIC8vIGNvbnN0IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID0gKHJldmVyc2VkVmFsLnNwbGl0KFwiLlwiKVsxXSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgLy8gY29uc3QgbmVlZHNEaWdpdHNBcHBlbmRlZCA9IGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50ID4gMjtcclxuXHJcbiAgICAvLyBpZiAobmVlZHNEaWdpdHNBcHBlbmRlZCkge1xyXG4gICAgLy8gICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsICogTWF0aC5wb3coMTAsIGRpZ2l0c0FmdGVyRGVjaW1hbENvdW50IC0gMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihyZXZlcnNlZFZhbCkgPyAwIDogcmV2ZXJzZWRWYWw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dE51bWJlclxyXG4gICAgICBkZWZhdWx0VmFsdWU9ezE1MH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiXHJcbiAgICAgIH19XHJcbiAgICAgIGZvcm1hdHRlcj17Y3VycmVuY3lGb3JtYXR0ZXJ9XHJcbiAgICAgIHBhcnNlcj17Y3VycmVuY3lQYXJzZXJ9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW5jeUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==