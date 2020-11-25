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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
      style: {
        width: 400,
        marginLeft: "1rem"
      },
      formatter: function formatter() {
        return currencyFormatter(inputValue);
      } // parser={currencyParser}
      ,
      onChange: function onChange(value) {
        return setInputValue(parseFloat(value.replace(/[^\d]/g, '').replace(/(\d\d?)$/, '.$1')).toFixed(2));
      },
      value: inputValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW5jeUlucHV0L2luZGV4LmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0dGVyIiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsImN1cnJlbmN5UGFyc2VyIiwidmFsIiwibGVuZ3RoIiwicmVwbGFjZSIsIk51bWJlciIsImlzTmFOIiwiQ3VycmVuY3lJbnB1dCIsInByb3BzIiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsU0FBTyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDcENDLFNBQUssRUFBRSxVQUQ2QjtBQUVwQ0MsWUFBUSxFQUFFO0FBRjBCLEdBQS9CLEVBR0pDLE1BSEksQ0FHR0wsS0FISCxDQUFQO0FBSUQsQ0FMRDs7QUFPQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBSTtBQUM1QixNQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLENBQUNBLEdBQUcsQ0FBQ0MsTUFBcEMsRUFDRUQsR0FBRyxHQUFHLEtBQU47QUFFRkEsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQU47QUFDQUYsS0FBRyxHQUFHQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFFQSxTQUFPQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUosR0FBYixJQUFvQixDQUFwQixHQUF3QkEsR0FBL0IsQ0FSNEIsQ0FTNUI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDdkJDLFlBRHVCLEdBQ05ELEtBRE0sQ0FDdkJDLFlBRHVCOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDRCxZQUFZLElBQUksQ0FBakIsQ0FGZjtBQUFBLE1BRXZCRSxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBSS9CLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUU7QUFDTEMsYUFBSyxFQUFFLEdBREY7QUFFTEMsa0JBQVUsRUFBRTtBQUZQLE9BRFQ7QUFLRSxlQUFTLEVBQUU7QUFBQSxlQUFNcEIsaUJBQWlCLENBQUNpQixVQUFELENBQXZCO0FBQUEsT0FMYixDQU1FO0FBTkY7QUFPRSxjQUFRLEVBQUUsa0JBQUFoQixLQUFLO0FBQUEsZUFBSWlCLGFBQWEsQ0FBQ0csVUFBVSxDQUFDcEIsS0FBSyxDQUFDUyxPQUFOLENBQWMsUUFBZCxFQUF1QixFQUF2QixFQUEyQkEsT0FBM0IsQ0FBbUMsVUFBbkMsRUFBOEMsS0FBOUMsQ0FBRCxDQUFWLENBQWlFWSxPQUFqRSxDQUF5RSxDQUF6RSxDQUFELENBQWpCO0FBQUEsT0FQakI7QUFRRSxXQUFLLEVBQUVMO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBV0lBLFVBWEo7QUFBQSxrQkFERjtBQWVELENBbkJEOztHQUFNSixhOztLQUFBQSxhO0FBcUJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMmYxZjI0NjZmMmVlNTllNDM0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgY3VycmVuY3lGb3JtYXR0ZXIgPSB2YWx1ZSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgncHQtQlInLCB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnQlJMJ1xyXG4gIH0pLmZvcm1hdCh2YWx1ZSk7XHJcbn07XHJcblxyXG5jb25zdCBjdXJyZW5jeVBhcnNlciA9IHZhbCA9PiB7XHJcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC5sZW5ndGgpXHJcbiAgICB2YWwgPSBcIjAsMFwiXHJcblxyXG4gIHZhbCA9IHZhbC5yZXBsYWNlKC9bXjAtOVxcLnxcXCxdL2csIFwiXCIpXHJcbiAgdmFsID0gdmFsLnJlcGxhY2UoJy4nLCAnJylcclxuICB2YWwgPSB2YWwucmVwbGFjZSgnLCcsICcuJylcclxuXHJcbiAgcmV0dXJuIE51bWJlci5pc05hTih2YWwpID8gMCA6IHZhbDtcclxuICAvLyB0cnkge1xyXG4gICAgXHJcbiAgLy8gICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLmxlbmd0aClcclxuICAvLyAgICAgdmFsID0gXCIwLDBcIjtcclxuXHJcbiAgLy8gICBsZXQgZ3JvdXAgPSAnLic7XHJcbiAgLy8gICBsZXQgZGVjaW1hbCA9ICcsJztcclxuICAvLyAgIGxldCByZXZlcnNlZFZhbCA9IHZhbC5yZXBsYWNlKC9bXjAtOVxcLnxcXCxdL2csIFwiXCIpO1xyXG4gIC8vICAgcmV2ZXJzZWRWYWwgPSByZXZlcnNlZFZhbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcXCIgKyBncm91cCwgXCJnXCIpLCBcIlwiKTtcclxuICAvLyAgIHJldmVyc2VkVmFsID0gcmV2ZXJzZWRWYWwucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFwiICsgZGVjaW1hbCwgXCJnXCIpLCBcIi5cIik7XHJcblxyXG4gIC8vICAgcmV0dXJuIE51bWJlci5pc05hTihyZXZlcnNlZFZhbCkgPyAwIDogcmV2ZXJzZWRWYWw7XHJcbiAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIC8vIH1cclxufTtcclxuXHJcbmNvbnN0IEN1cnJlbmN5SW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcclxuICBjb25zdCBbIGlucHV0VmFsdWUsIHNldElucHV0VmFsdWUgXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSB8fCAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZm9ybWF0dGVyPXsoKSA9PiBjdXJyZW5jeUZvcm1hdHRlcihpbnB1dFZhbHVlKX1cclxuICAgICAgICAvLyBwYXJzZXI9e2N1cnJlbmN5UGFyc2VyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRJbnB1dFZhbHVlKHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgvW15cXGRdL2csJycpLnJlcGxhY2UoLyhcXGRcXGQ/KSQvLCcuJDEnKSkudG9GaXhlZCgyKSl9XHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsgaW5wdXRWYWx1ZSB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=