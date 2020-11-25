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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    defaultValue: 150,
    style: {
      width: 400,
      marginLeft: "1rem"
    },
    formatter: currencyFormatter,
    parser: currencyParser,
    onChange: function onChange(value) {
      return console.log(value);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwicmVwbGFjZSIsIk51bWJlciIsImlzTmFOIiwiQ3VycmVuY3lJbnB1dCIsIndpZHRoIiwibWFyZ2luTGVmdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxTQUFPLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNwQ0MsU0FBSyxFQUFFLFVBRDZCO0FBRXBDQyxZQUFRLEVBQUU7QUFGMEIsR0FBL0IsRUFHSkMsTUFISSxDQUdHTCxLQUhILENBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1NLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsR0FBRyxFQUFJO0FBQzVCLE1BQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkIsQ0FBQ0EsR0FBRyxDQUFDQyxNQUFwQyxFQUNFRCxHQUFHLEdBQUcsS0FBTjtBQUVGQSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLGNBQVosRUFBNEIsRUFBNUIsQ0FBTjtBQUNBRixLQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FBTjtBQUNBRixLQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBTjtBQUVBLFNBQU9DLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSixHQUFiLElBQW9CLENBQXBCLEdBQXdCQSxHQUEvQixDQVI0QixDQVM1QjtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQXhCRDs7QUEwQkEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLHNCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQVksRUFBRSxHQURoQjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsR0FERjtBQUVMQyxnQkFBVSxFQUFFO0FBRlAsS0FGVDtBQU1FLGFBQVMsRUFBRWYsaUJBTmI7QUFPRSxVQUFNLEVBQUVPLGNBUFY7QUFRRSxZQUFRLEVBQUUsa0JBQUFOLEtBQUs7QUFBQSxhQUFJZSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLEtBQVosQ0FBSjtBQUFBO0FBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBYkQ7O0tBQU1ZLGE7QUFlU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjk4NGFlZWZhZTkxMWY5OTAyOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IGN1cnJlbmN5Rm9ybWF0dGVyID0gdmFsdWUgPT4ge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xyXG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICBjdXJyZW5jeTogJ0JSTCdcclxuICB9KS5mb3JtYXQodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgY3VycmVuY3lQYXJzZXIgPSB2YWwgPT4ge1xyXG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICF2YWwubGVuZ3RoKVxyXG4gICAgdmFsID0gXCIwLDBcIlxyXG5cclxuICB2YWwgPSB2YWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKVxyXG4gIHZhbCA9IHZhbC5yZXBsYWNlKCcuJywgJycpXHJcbiAgdmFsID0gdmFsLnJlcGxhY2UoJywnLCAnLicpXHJcblxyXG4gIHJldHVybiBOdW1iZXIuaXNOYU4odmFsKSA/IDAgOiB2YWw7XHJcbiAgLy8gdHJ5IHtcclxuICAgIFxyXG4gIC8vICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpXHJcbiAgLy8gICAgIHZhbCA9IFwiMCwwXCI7XHJcblxyXG4gIC8vICAgbGV0IGdyb3VwID0gJy4nO1xyXG4gIC8vICAgbGV0IGRlY2ltYWwgPSAnLCc7XHJcbiAgLy8gICBsZXQgcmV2ZXJzZWRWYWwgPSB2YWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKTtcclxuICAvLyAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZ3JvdXAsIFwiZ1wiKSwgXCJcIik7XHJcbiAgLy8gICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG5cclxuICAvLyAgIHJldHVybiBOdW1iZXIuaXNOYU4ocmV2ZXJzZWRWYWwpID8gMCA6IHJldmVyc2VkVmFsO1xyXG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAvLyB9XHJcbn07XHJcblxyXG5jb25zdCBDdXJyZW5jeUlucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW5wdXROdW1iZXJcclxuICAgICAgZGVmYXVsdFZhbHVlPXsxNTB9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxyXG4gICAgICB9fVxyXG4gICAgICBmb3JtYXR0ZXI9e2N1cnJlbmN5Rm9ybWF0dGVyfVxyXG4gICAgICBwYXJzZXI9e2N1cnJlbmN5UGFyc2VyfVxyXG4gICAgICBvbkNoYW5nZT17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=