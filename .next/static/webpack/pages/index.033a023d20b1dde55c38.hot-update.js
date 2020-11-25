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
      val = "0,0";
    } // detecting and parsing between comma and dot


    var group = '.';
    var decimal = ',';
    var reversedVal = val.replace(new RegExp("\\" + group, "g"), "");
    reversedVal = reversedVal.replace(new RegExp("\\" + decimal, "g"), "."); //  => 1232.21 €
    // removing everything except the digits and dot

    reversedVal = reversedVal.replace(/[^0-9\.|\,]/g, ""); //  => 1232.21

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
    step: 0.1,
    formatter: currencyFormatter,
    parser: currencyParser
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwiZ3JvdXAiLCJkZWNpbWFsIiwicmV2ZXJzZWRWYWwiLCJyZXBsYWNlIiwiUmVnRXhwIiwiTnVtYmVyIiwiaXNOYU4iLCJlcnJvciIsImNvbnNvbGUiLCJDdXJyZW5jeUlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJO0FBQ0Y7QUFDQSxRQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFBNEM7QUFDMUNELFNBQUcsR0FBRyxLQUFOO0FBQ0QsS0FKQyxDQU1GOzs7QUFDQSxRQUFJRSxLQUFLLEdBQUcsR0FBWjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxHQUFkO0FBQ0EsUUFBSUMsV0FBVyxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsT0FBT0osS0FBbEIsRUFBeUIsR0FBekIsQ0FBWixFQUEyQyxFQUEzQyxDQUFsQjtBQUNBRSxlQUFXLEdBQUdBLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQixJQUFJQyxNQUFKLENBQVcsT0FBT0gsT0FBbEIsRUFBMkIsR0FBM0IsQ0FBcEIsRUFBcUQsR0FBckQsQ0FBZCxDQVZFLENBV0Y7QUFFQTs7QUFDQUMsZUFBVyxHQUFHQSxXQUFXLENBQUNDLE9BQVosQ0FBb0IsY0FBcEIsRUFBb0MsRUFBcEMsQ0FBZCxDQWRFLENBZUY7O0FBRUEsV0FBT0UsTUFBTSxDQUFDQyxLQUFQLENBQWFKLFdBQWIsSUFBNEIsQ0FBNUIsR0FBZ0NBLFdBQXZDO0FBQ0QsR0FsQkQsQ0FrQkUsT0FBT0ssS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixDQXRCRDs7QUF3QkEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsR0FERjtBQUVMQyxnQkFBVSxFQUFFO0FBRlAsS0FGVDtBQU1FLFFBQUksRUFBRSxHQU5SO0FBT0UsYUFBUyxFQUFFckIsaUJBUGI7QUFRRSxVQUFNLEVBQUVPO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRDs7S0FBTVksYTtBQWVTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzNhMDIzZDIwYjFkZGU1NWMzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgY3VycmVuY3lGb3JtYXR0ZXIgPSB2YWx1ZSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnQlJMJ1xyXG4gIH0pLmZvcm1hdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBjdXJyZW5jeVBhcnNlciA9IHZhbCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGZvciB3aGVuIHRoZSBpbnB1dCBnZXRzIGNsZWFyc1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpIHtcclxuICAgICAgdmFsID0gXCIwLDBcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXRlY3RpbmcgYW5kIHBhcnNpbmcgYmV0d2VlbiBjb21tYSBhbmQgZG90XHJcbiAgICBsZXQgZ3JvdXAgPSAnLic7XHJcbiAgICBsZXQgZGVjaW1hbCA9ICcsJztcclxuICAgIGxldCByZXZlcnNlZFZhbCA9IHZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcXCIgKyBncm91cCwgXCJnXCIpLCBcIlwiKTtcclxuICAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZGVjaW1hbCwgXCJnXCIpLCBcIi5cIik7XHJcbiAgICAvLyAgPT4gMTIzMi4yMSDigqxcclxuXHJcbiAgICAvLyByZW1vdmluZyBldmVyeXRoaW5nIGV4Y2VwdCB0aGUgZGlnaXRzIGFuZCBkb3RcclxuICAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKTtcclxuICAgIC8vICA9PiAxMjMyLjIxXHJcblxyXG4gICAgcmV0dXJuIE51bWJlci5pc05hTihyZXZlcnNlZFZhbCkgPyAwIDogcmV2ZXJzZWRWYWw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dE51bWJlclxyXG4gICAgICBkZWZhdWx0VmFsdWU9ezE1MH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiXHJcbiAgICAgIH19XHJcbiAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgZm9ybWF0dGVyPXtjdXJyZW5jeUZvcm1hdHRlcn1cclxuICAgICAgcGFyc2VyPXtjdXJyZW5jeVBhcnNlcn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9