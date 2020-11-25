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

var CurrencyInput = function CurrencyInput(props) {
  _s();

  var defaultValue = props.defaultValue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue || 0),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var updateValue = function updateValue(value) {
    console.log(value);
    if (value.toString().includes('.')) setInputValue(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
      style: {
        width: 400,
        marginLeft: "1rem"
      },
      formatter: currencyFormatter,
      parser: currencyParser,
      onChange: function onChange(value) {
        return updateValue(parseFloat(value));
      },
      value: inputValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwicmVwbGFjZSIsIk51bWJlciIsImlzTmFOIiwiQ3VycmVuY3lJbnB1dCIsInByb3BzIiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInVwZGF0ZVZhbHVlIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwYXJzZUZsb2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFDRUQsR0FBRyxHQUFHLEtBQU47QUFFRkEsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFFQSxTQUFPQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUosR0FBYixJQUFvQixDQUFwQixHQUF3QkEsR0FBL0IsQ0FSNEIsQ0FTNUI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDdkJDLFlBRHVCLEdBQ05ELEtBRE0sQ0FDdkJDLFlBRHVCOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDRCxZQUFZLElBQUksQ0FBakIsQ0FGZjtBQUFBLE1BRXZCRSxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBSS9CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNsQixLQUFELEVBQVc7QUFDN0JtQixXQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEtBQVo7QUFDQSxRQUFHQSxLQUFLLENBQUNxQixRQUFOLEdBQWlCQyxRQUFqQixDQUEwQixHQUExQixDQUFILEVBQ0VMLGFBQWEsQ0FBQ2pCLEtBQUQsQ0FBYjtBQUNILEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUNFLFdBQUssRUFBRTtBQUNMdUIsYUFBSyxFQUFFLEdBREY7QUFFTEMsa0JBQVUsRUFBRTtBQUZQLE9BRFQ7QUFLRSxlQUFTLEVBQUV6QixpQkFMYjtBQU1FLFlBQU0sRUFBRU8sY0FOVjtBQU9FLGNBQVEsRUFBRSxrQkFBQU4sS0FBSztBQUFBLGVBQUlrQixXQUFXLENBQUNPLFVBQVUsQ0FBQ3pCLEtBQUQsQ0FBWCxDQUFmO0FBQUEsT0FQakI7QUFRRSxXQUFLLEVBQUVnQjtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVdJQSxVQVhKO0FBQUEsa0JBREY7QUFlRCxDQXpCRDs7R0FBTUosYTs7S0FBQUEsYTtBQTJCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZjYTU4ZDUxN2Q5YjM1NWVlMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IGN1cnJlbmN5Rm9ybWF0dGVyID0gdmFsdWUgPT4ge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xyXG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICBjdXJyZW5jeTogJ0JSTCdcclxuICB9KS5mb3JtYXQodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgY3VycmVuY3lQYXJzZXIgPSB2YWwgPT4ge1xyXG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICF2YWwubGVuZ3RoKVxyXG4gICAgdmFsID0gXCIwLDBcIlxyXG5cclxuICB2YWwgPSB2YWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKVxyXG4gIHZhbCA9IHZhbC5yZXBsYWNlKCcuJywgJycpXHJcbiAgdmFsID0gdmFsLnJlcGxhY2UoJywnLCAnLicpXHJcblxyXG4gIHJldHVybiBOdW1iZXIuaXNOYU4odmFsKSA/IDAgOiB2YWw7XHJcbiAgLy8gdHJ5IHtcclxuICAgIFxyXG4gIC8vICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpXHJcbiAgLy8gICAgIHZhbCA9IFwiMCwwXCI7XHJcblxyXG4gIC8vICAgbGV0IGdyb3VwID0gJy4nO1xyXG4gIC8vICAgbGV0IGRlY2ltYWwgPSAnLCc7XHJcbiAgLy8gICBsZXQgcmV2ZXJzZWRWYWwgPSB2YWwucmVwbGFjZSgvW14wLTlcXC58XFwsXS9nLCBcIlwiKTtcclxuICAvLyAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZ3JvdXAsIFwiZ1wiKSwgXCJcIik7XHJcbiAgLy8gICByZXZlcnNlZFZhbCA9IHJldmVyc2VkVmFsLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxcIiArIGRlY2ltYWwsIFwiZ1wiKSwgXCIuXCIpO1xyXG5cclxuICAvLyAgIHJldHVybiBOdW1iZXIuaXNOYU4ocmV2ZXJzZWRWYWwpID8gMCA6IHJldmVyc2VkVmFsO1xyXG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAvLyB9XHJcbn07XHJcblxyXG5jb25zdCBDdXJyZW5jeUlucHV0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IHByb3BzXHJcbiAgY29uc3QgWyBpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlIF0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUgfHwgMClcclxuXHJcbiAgY29uc3QgdXBkYXRlVmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgaWYodmFsdWUudG9TdHJpbmcoKS5pbmNsdWRlcygnLicpKVxyXG4gICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbnB1dE51bWJlclxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIxcmVtXCJcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZvcm1hdHRlcj17Y3VycmVuY3lGb3JtYXR0ZXJ9XHJcbiAgICAgICAgcGFyc2VyPXtjdXJyZW5jeVBhcnNlcn1cclxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdXBkYXRlVmFsdWUocGFyc2VGbG9hdCh2YWx1ZSkpfVxyXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAvPlxyXG4gICAgICB7IGlucHV0VmFsdWUgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5SW5wdXQiXSwic291cmNlUm9vdCI6IiJ9