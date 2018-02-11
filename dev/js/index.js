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
__webpack_require__(2);
module.exports = __webpack_require__(6);


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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__a_js__ = __webpack_require__(7);

// let c = require('./c.js')
// console.log(c)
// setTimeout(() => {
//     console.log(c)
// },1000)

// c = {c: 0}
// console.log(c.c)
// setTimeout(() => {
//     console.log(c.c)
// },1000)

// a=100
// console.log(a)

// 会报错
__WEBPACK_IMPORTED_MODULE_0__a_js__["a"].a = 200;
console.log(__WEBPACK_IMPORTED_MODULE_0__a_js__["a"].a);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
// setTimeout(() => {
//     a = 3
// },500)
//
// export var a = 1

setTimeout(function () {
    a.a = 3;
}, 500);

var a = { a: 1 };

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNiM2RhMTMyNTlkN2Q3ZjMxMmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uL2Zvcm1DaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2Jvb3RUZXN0L2IuanMiLCJ3ZWJwYWNrOi8vLy4vYm9vdFRlc3QvYS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsb2dpbiIsIm9wdHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJldmVudCIsImJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnB1dCIsImNoZWNrIiwiZm9ybUNoZWNrIiwib25jbGljayIsImFsZXJ0Iiwib25pbnB1dCIsImZvcm0iLCJpZCIsInRwbCIsImlubmVySFRNTCIsImEiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0Esd0I7Ozs7Ozs7Ozs7QUNEQTtBQUNBOztBQUVBQSxPQUFPQyxLQUFQLEdBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQU1DLFlBQVlELEtBQUtDLFNBQXZCO0FBQ0FDLElBQUEsbUVBQUFBLENBQU9ELFNBQVA7QUFDQUUsSUFBQSxrRUFBQUE7QUFDSCxDQUpELEM7Ozs7Ozs7O0FDSEE7QUFDQSx5REFBZSxZQUFNO0FBQ2pCLFFBQUlDLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBVjtBQUNBLFFBQUlDLFFBQVFGLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBWjtBQUNBLFFBQU1FLFFBQVEsNkVBQUFDLENBQVVKLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBVixDQUFkO0FBQ0FGLFFBQUlNLE9BQUosR0FBYyxZQUFZO0FBQ3RCQyxjQUFNLElBQU47QUFDQUg7QUFDSCxLQUhEO0FBSUFELFVBQU1LLE9BQU4sR0FBZ0IsWUFBTTtBQUNsQko7QUFDSCxLQUZEO0FBR0gsQ0FYRCxFOzs7Ozs7O0FDREEseURBQWUsVUFBQ0ssSUFBRCxFQUFVO0FBQ3JCLFdBQU8sWUFBTTtBQUNURixjQUFNRSxLQUFLQyxFQUFYO0FBQ0gsS0FGRDtBQUdILENBSkQsRTs7Ozs7OztBQ0FBLHlEQUFlLFVBQUNiLFNBQUQsRUFBZTtBQUMxQixRQUFJYyx3TkFBSjtBQUtBZCxjQUFVZSxTQUFWLEdBQXNCRCxHQUF0QjtBQUNILENBUEQsRTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUFBRSxDQUFFQSxDQUFGLEdBQU0sR0FBTjtBQUNBQyxRQUFRQyxHQUFSLENBQVksd0NBQUFGLENBQUVBLENBQWQsRTs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFHLFdBQVcsWUFBTTtBQUNiSCxNQUFFQSxDQUFGLEdBQU0sQ0FBTjtBQUNILENBRkQsRUFFRSxHQUZGOztBQUlPLElBQUlBLElBQUksRUFBQ0EsR0FBRSxDQUFILEVBQVIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQzYjNkYTEzMjU5ZDdkN2YzMTJmIiwiLy8gY29uc29sZS5sb2coJ2EnKTtcbi8vIGFsZXJ0KCdoZWxsbyB3b3JsZCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyIsImltcG9ydCBldmVudCBmcm9tICcuL2V2ZW50LmpzJ1xyXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyLmpzJ1xyXG5cclxud2luZG93LmxvZ2luID0gKG9wdHMpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyXHJcbiAgICByZW5kZXIoY29udGFpbmVyKVxyXG4gICAgZXZlbnQoKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJpbXBvcnQgZm9ybUNoZWNrIGZyb20gJy4uL2NvbW1vbi9mb3JtQ2hlY2suanMnXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JylcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpXHJcbiAgICBjb25zdCBjaGVjayA9IGZvcm1DaGVjayhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKVxyXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWxlcnQoMTExMSlcclxuICAgICAgICBjaGVjaygpXHJcbiAgICB9XHJcbiAgICBpbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrKClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsImV4cG9ydCBkZWZhdWx0IChmb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KGZvcm0uaWQpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tbW9uL2Zvcm1DaGVjay5qcyIsImV4cG9ydCBkZWZhdWx0IChjb250YWluZXIpID0+IHtcclxuICAgIGxldCB0cGwgPSBgPGZvcm0gaWQ9XCJmb3JtXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiaW5wdXRcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIueZu+mZhlwiPlxyXG48L2Zvcm0+YFxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHRwbFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsImltcG9ydCB7IGEgfSBmcm9tICcuL2EuanMnXHJcbi8vIGxldCBjID0gcmVxdWlyZSgnLi9jLmpzJylcclxuLy8gY29uc29sZS5sb2coYylcclxuLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjKVxyXG4vLyB9LDEwMDApXHJcblxyXG4vLyBjID0ge2M6IDB9XHJcbi8vIGNvbnNvbGUubG9nKGMuYylcclxuLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjLmMpXHJcbi8vIH0sMTAwMClcclxuXHJcbi8vIGE9MTAwXHJcbi8vIGNvbnNvbGUubG9nKGEpXHJcblxyXG4vLyDkvJrmiqXplJlcclxuYS5hID0gMjAwXHJcbmNvbnNvbGUubG9nKGEuYSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib290VGVzdC9iLmpzIiwiLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICBhID0gM1xyXG4vLyB9LDUwMClcclxuLy9cclxuLy8gZXhwb3J0IHZhciBhID0gMVxyXG5cclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBhLmEgPSAzXHJcbn0sNTAwKVxyXG5cclxuZXhwb3J0IHZhciBhID0ge2E6MX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib290VGVzdC9hLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==