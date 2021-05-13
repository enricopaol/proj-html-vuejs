/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#app',
  data: {
    pages: ['Home', 'Meet The Brand', 'Live Dates', 'Latest News', 'Albums', 'Fans'],
    navOpen: false,
    dateOpen: -1,
    liveDates: [{
      date: '17/08/2020 Gem Festival 2020 Anakalia, Georgia ',
      iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47143.839623291155!2d41.559132921311104!3d42.39601032108319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405dd3503d5ccb83%3A0xe6594e70d69782bc!2sAnaklia%2C%20Georgia!5e0!3m2!1sit!2sit!4v1620815528095!5m2!1sit!2sit'
    }, {
      date: '24/09/2020 Groovefest Dominical Republic',
      iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1106733332094!2d-68.40322868510518!3d18.659028987328522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea8ecc141b4de87%3A0xc1a9012d0c5050ab!2sBarcel%C3%B3%20B%C3%A1varo%20Beach%20-%20Adults%20Only!5e0!3m2!1sit!2sit!4v1620815938146!5m2!1sit!2sit'
    }, {
      date: '31/10/2020 Oasis Festival 2020 Marrakech, Morocco',
      iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217406.37638548054!2d-8.1479381904096!3d31.63454497560447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Marocco!5e0!3m2!1sit!2sit!4v1620816376124!5m2!1sit!2sit'
    }, {
      date: '07/11/2020 Moga Festival - Essaouria, Morocco',
      iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.8385861556!2d-9.78005180001179!3d31.510978945276168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sProvincia%20di%20Essaouira%2C%20Marocco!5e0!3m2!1sit!2sit!4v1620816428560!5m2!1sit!2sit'
    }, {
      date: '10/12/2020 Envision Festival - Uvita, Costa Rica',
      iFrameLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.211376917334!2d-83.7555601243083!3d9.163364997555368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa15797d4474891%3A0x39ea10029c9e9f27!2sProvincia%20di%20Puntarenas%2C%20Uvita%2C%20Costa%20Rica!5e0!3m2!1sit!2sit!4v1620816477187!5m2!1sit!2sit'
    }]
  },
  methods: {
    toggleNav: function toggleNav() {
      this.navOpen = !this.navOpen;
    },
    toggleDate: function toggleDate(index) {
      var elementHeight = document.getElementsByClassName('info-container')[index].scrollHeight; // First I close all the dates

      var dates = document.getElementsByClassName('info-container');

      for (var i = 0; i < dates.length; i++) {
        thisDate = dates[i];
        thisDate.style.height = 0 + 'px';
      } // Then i toggle the class 'open' (that controls icon, margin and opacity)


      if (this.dateOpen != index) {
        this.dateOpen = index;
        document.getElementsByClassName('info-container')[index].style.height = elementHeight + 'px';
      } else {
        this.dateOpen = -1;
        document.getElementsByClassName('info-container')[index].style.height = 0 + 'px';
      }
    }
  }
});
window.addEventListener('scroll', parallax);

function parallax() {
  var element = document.querySelector('.parallax');
  var scrollY = window.pageYOffset;
  var elementOffset = element.offsetTop;
  var viewPortHeight = window.innerHeight;
  var positionY = scrollY * -0.7 + elementOffset * 0.7 - viewPortHeight * 0.2 + 'px';
  element.style.backgroundPosition = 'center ' + positionY;
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;