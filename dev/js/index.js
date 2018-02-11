/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// console.log('a');
// alert('hello world');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(5);



window.login = function (opts) {
    var container = opts.container;
    Object(__WEBPACK_IMPORTED_MODULE_1__render_js__["a" /* default */])(container);
    Object(__WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */])();
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["a"] = (function () {
    var btn = document.getElementById('submit');
    var input = document.getElementById('input');
    var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__["a" /* default */])(document.getElementById('form'));
    btn.onclick = function () {
        alert(1111);
        check();
    };
    input.oninput = function () {
        check();
    };
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
    return function () {
        alert(form.id);
    };
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {
    var tpl = "<form id=\"form\">\n    <input type=\"text\" name=\"name\" id=\"input\">\n    <input type=\"text\" name=\"password\">\n    <input type=\"submit\" id=\"submit\" name=\"submit\" value=\"\u767B\u9646\">\n</form>";
    container.innerHTML = tpl;
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzYwNGQ3MGVhNDE1ZThmZDgyNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL2Zvcm1DaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vcmVuZGVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxvZ2luIiwib3B0cyIsImNvbnRhaW5lciIsInJlbmRlciIsImV2ZW50IiwiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0IiwiY2hlY2siLCJmb3JtQ2hlY2siLCJvbmNsaWNrIiwiYWxlcnQiLCJvbmlucHV0IiwiZm9ybSIsImlkIiwidHBsIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDREE7QUFDQTs7QUFFQUEsT0FBT0MsS0FBUCxHQUFlLFVBQUNDLElBQUQsRUFBVTtBQUNyQixRQUFNQyxZQUFZRCxLQUFLQyxTQUF2QjtBQUNBQyxJQUFBLG1FQUFBQSxDQUFPRCxTQUFQO0FBQ0FFLElBQUEsa0VBQUFBO0FBQ0gsQ0FKRCxDOzs7Ozs7OztBQ0hBO0FBQ0EseURBQWUsWUFBTTtBQUNqQixRQUFJQyxNQUFNQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQVY7QUFDQSxRQUFJQyxRQUFRRixTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxRQUFNRSxRQUFRLDZFQUFBQyxDQUFVSixTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQVYsQ0FBZDtBQUNBRixRQUFJTSxPQUFKLEdBQWMsWUFBWTtBQUN0QkMsY0FBTSxJQUFOO0FBQ0FIO0FBQ0gsS0FIRDtBQUlBRCxVQUFNSyxPQUFOLEdBQWdCLFlBQU07QUFDbEJKO0FBQ0gsS0FGRDtBQUdILENBWEQsRTs7Ozs7OztBQ0RBLHlEQUFlLFVBQUNLLElBQUQsRUFBVTtBQUNyQixXQUFPLFlBQU07QUFDVEYsY0FBTUUsS0FBS0MsRUFBWDtBQUNILEtBRkQ7QUFHSCxDQUpELEU7Ozs7Ozs7QUNBQSx5REFBZSxVQUFDYixTQUFELEVBQWU7QUFDMUIsUUFBSWMsd05BQUo7QUFLQWQsY0FBVWUsU0FBVixHQUFzQkQsR0FBdEI7QUFDSCxDQVBELEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjA0ZDcwZWE0MTVlOGZkODI1ZiIsIi8vIGNvbnNvbGUubG9nKCdhJyk7XG4vLyBhbGVydCgnaGVsbG8gd29ybGQnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJpbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudC5qcydcclxuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlci5qcydcclxuXHJcbndpbmRvdy5sb2dpbiA9IChvcHRzKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBvcHRzLmNvbnRhaW5lclxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcilcclxuICAgIGV2ZW50KClcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9pbml0LmpzIiwiaW1wb3J0IGZvcm1DaGVjayBmcm9tICcuLi9jb21tb24vZm9ybUNoZWNrLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKVxyXG4gICAgY29uc3QgY2hlY2sgPSBmb3JtQ2hlY2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSlcclxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KDExMTEpXHJcbiAgICAgICAgY2hlY2soKVxyXG4gICAgfVxyXG4gICAgaW5wdXQub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjaGVjaygpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJleHBvcnQgZGVmYXVsdCAoZm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBhbGVydChmb3JtLmlkKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiLCJleHBvcnQgZGVmYXVsdCAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBsZXQgdHBsID0gYDxmb3JtIGlkPVwiZm9ybVwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cImlucHV0XCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCLnmbvpmYZcIj5cclxuPC9mb3JtPmBcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0cGxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9yZW5kZXIuanMiXSwic291cmNlUm9vdCI6IiJ9