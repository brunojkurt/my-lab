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
  val.replace('.', '');
  val.replace(',', '.');
  return val; // try {
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
    parser: currencyParser
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwicmVwbGFjZSIsIkN1cnJlbmN5SW5wdXQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxTQUFPLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNwQ0MsU0FBSyxFQUFFLFVBRDZCO0FBRXBDQyxZQUFRLEVBQUU7QUFGMEIsR0FBL0IsRUFHSkMsTUFISSxDQUdHTCxLQUhILENBQVA7QUFJRCxDQUxEOztBQU9BLElBQU1NLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsR0FBRyxFQUFJO0FBQzVCLE1BQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkIsQ0FBQ0EsR0FBRyxDQUFDQyxNQUFwQyxFQUNFRCxHQUFHLEdBQUcsS0FBTjtBQUVGQSxLQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCO0FBQ0FGLEtBQUcsQ0FBQ0UsT0FBSixDQUFZLEdBQVosRUFBaUIsR0FBakI7QUFFQSxTQUFPRixHQUFQLENBUDRCLENBUTVCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBdkJEOztBQXlCQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxnQkFBWSxFQUFFLEdBRGhCO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxHQURGO0FBRUxDLGdCQUFVLEVBQUU7QUFGUCxLQUZUO0FBTUUsYUFBUyxFQUFFYixpQkFOYjtBQU9FLFVBQU0sRUFBRU87QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztLQUFNSSxhO0FBY1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiYmRkMDBlN2FiZWZiNWY3OWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IHZhbHVlID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdCUkwnXHJcbiAgfSkuZm9ybWF0KHZhbHVlKTtcclxufTtcclxuXHJcbmNvbnN0IGN1cnJlbmN5UGFyc2VyID0gdmFsID0+IHtcclxuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLmxlbmd0aClcclxuICAgIHZhbCA9IFwiMCwwXCI7XHJcblxyXG4gIHZhbC5yZXBsYWNlKCcuJywgJycpXHJcbiAgdmFsLnJlcGxhY2UoJywnLCAnLicpO1xyXG5cclxuICByZXR1cm4gdmFsXHJcbiAgLy8gdHJ5IHtcclxuICAgIFxyXG4gIC8vICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpXHJcbiAgLy8gICAgIHZhbCA9IFwiMCwwXCI7XHJcblxyXG4gIC8vICAgbGV0IGdyb3VwID0gJy4nO1xyXG4gIC8vICAgbGV0IGRlY2ltYWwgPSAnLCc7XHJcbiAgLy8gICBsZXQgcmV2ZXJzZWRWYWwgPSB2YWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKTtcclxuICAvLyAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZ3JvdXAsIFwiZ1wiKSwgXCJcIik7XHJcbiAgLy8gICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG5cclxuICAvLyAgIHJldHVybiBOdW1iZXIuaXNOYU4ocmV2ZXJzZWRWYWwpID8gMCA6IHJldmVyc2VkVmFsO1xyXG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAvLyB9XHJcbn07XHJcblxyXG5jb25zdCBDdXJyZW5jeUlucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW5wdXROdW1iZXJcclxuICAgICAgZGVmYXVsdFZhbHVlPXsxNTB9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxyXG4gICAgICB9fVxyXG4gICAgICBmb3JtYXR0ZXI9e2N1cnJlbmN5Rm9ybWF0dGVyfVxyXG4gICAgICBwYXJzZXI9e2N1cnJlbmN5UGFyc2VyfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=