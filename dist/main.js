/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("content");

  //   const contactDiv = document.querySelector("#content");
  //   contactDiv.innerHTML = "";

  //   const header = document.createElement("div");
  //   header.classList.add("header");
  //   const logo = document.createElement("div");
  //   logo.classList.add("logo");
  //   const logoTitle = document.createElement("p");
  //   logoTitle.textContent = "The Brunch";

  //   const nav = document.createElement("div");
  //   nav.classList.add("nav");
  //   const home = document.createElement("a");
  //   home.setAttribute("href", "#");
  //   home.textContent = "Home";
  //   const menu = document.createElement("a");
  //   menu.setAttribute("href", "#");
  //   menu.textContent = "Menu";
  //   const contactLink = document.createElement("a");
  //   contactLink.textContent = "Contact";

  //   nav.appendChild(home);
  //   nav.appendChild(menu);
  //   nav.appendChild(contactLink);
  //   logo.appendChild(logoTitle);
  //   header.appendChild(logo);
  //   header.appendChild(nav);

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const introStraight = document.createElement("h1");
  introStraight.textContent = "Contact";
  introStraight.classList.add("intro__straight");

  intro.appendChild(introStraight);
  introContainer.appendChild(intro);

  //   contactDiv.appendChild(header);
  contactDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(contactDiv);
  //   body.appendChild(contactDiv);
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("content");

  // const header = document.createElement("div");
  // header.classList.add("header");
  // const logo = document.createElement("div");
  // logo.classList.add("logo");
  // const logoTitle = document.createElement("p");
  // logoTitle.textContent = "The Brunch";

  // const nav = document.createElement("div");
  // nav.classList.add("nav");
  // const home = document.createElement("a");
  // home.setAttribute("href", "someway");
  // home.textContent = "Home";
  // const menu = document.createElement("a");
  // menu.setAttribute("href", "#");
  // menu.textContent = "Menu";
  // const contactLink = document.createElement("a");
  // contactLink.setAttribute("href", "#");
  // contactLink.textContent = "Contact";

  // nav.appendChild(home);
  // nav.appendChild(menu);
  // nav.appendChild(contactLink);
  // logo.appendChild(logoTitle);
  // header.appendChild(logo);
  // header.appendChild(nav);

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const introStraight = document.createElement("h1");
  introStraight.textContent = "Menu";
  introStraight.classList.add("intro__straight");

  intro.appendChild(introStraight);
  introContainer.appendChild(intro);

  // menuDiv.appendChild(header);
  menuDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(menuDiv);
}




/***/ }),

/***/ "./src/onPageLoad.js":
/*!***************************!*\
  !*** ./src/onPageLoad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onPageLoad": () => (/* binding */ onPageLoad)
/* harmony export */ });
function onPageLoad() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("content");
  // const header = document.createElement("div");
  // header.classList.add("header");
  // const logo = document.createElement("div");
  // logo.classList.add("logo");
  // const logoTitle = document.createElement("p");
  // logoTitle.textContent = "The Brunch";

  // const nav = document.createElement("div");
  // nav.classList.add("nav");

  // const home = document.createElement("a");
  // home.setAttribute("href", "#");
  // home.setAttribute("id", "home-tab");
  // home.textContent = "Home";

  // const menu = document.createElement("a");
  // menu.classList.add("menu");
  // menu.setAttribute("id", "menu-tab");
  // menu.setAttribute("href", "#");
  // menu.textContent = "Menu";

  // const contactLink = document.createElement("a");
  // contactLink.classList.add("contact-link");
  // contactLink.setAttribute("id", "contact-tab");
  // contactLink.setAttribute("href", "#");
  // contactLink.textContent = "Contact";

  // nav.appendChild(home);
  // nav.appendChild(menu);
  // nav.appendChild(contactLink);
  // logo.appendChild(logoTitle);
  // header.appendChild(logo);
  // header.appendChild(nav);

  const introContainer = document.createElement("div");
  const intro = document.createElement("div");
  const introCursive = document.createElement("h1");
  introCursive.textContent = "Welcome to";
  const introStraight = document.createElement("h1");
  introStraight.textContent = "The Brunch";
  const introDefinition = document.createElement("p");
  introDefinition.textContent = "The best meals in the galaxy";

  intro.classList.add("intro");
  introCursive.classList.add("intro__cursive");
  introStraight.classList.add("intro__straight");

  intro.appendChild(introCursive);
  intro.appendChild(introStraight);
  intro.appendChild(introDefinition);
  introContainer.appendChild(intro);

  // contentDiv.appendChild(header);
  homeDiv.appendChild(introContainer);

  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.appendChild(homeDiv);
}




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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onPageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onPageLoad.js */ "./src/onPageLoad.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




window.addEventListener("load", () => {
  (0,_onPageLoad_js__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)();

  const contactTab = document.querySelector("#contact-tab");
  contactTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.contact)();
  });

  const menuTab = document.querySelector("#menu-tab");
  menuTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();
  });

  const homeTab = document.querySelector("#home-tab");
  homeTab.addEventListener("click", (event) => {
    event.preventDefault(); // prevent default action
    (0,_onPageLoad_js__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7QUNwRG5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7QUNqRGhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7OztVQy9EdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ047QUFDTjtBQUNqQztBQUNBO0FBQ0EsRUFBRSwwREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixJQUFJLG9EQUFPO0FBQ1gsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixJQUFJLDhDQUFJO0FBQ1IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixJQUFJLDBEQUFVO0FBQ2QsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb25QYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAvLyAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgLy8gICBjb250YWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIC8vICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIC8vICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gIC8vICAgY29uc3QgbG9nb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgLy8gICBsb2dvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBCcnVuY2hcIjtcclxuXHJcbiAgLy8gICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbiAgLy8gICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gICBob21lLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gIC8vICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIC8vICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIC8vICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAvLyAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAvLyAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAvLyAgIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICAvLyAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICAvLyAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XHJcbiAgLy8gICBsb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XHJcbiAgLy8gICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgLy8gICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgY29uc3QgaW50cm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnRyby5jbGFzc0xpc3QuYWRkKFwiaW50cm9cIik7XHJcblxyXG4gIGNvbnN0IGludHJvU3RyYWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaW50cm9TdHJhaWdodC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gIGludHJvU3RyYWlnaHQuY2xhc3NMaXN0LmFkZChcImludHJvX19zdHJhaWdodFwiKTtcclxuXHJcbiAgaW50cm8uYXBwZW5kQ2hpbGQoaW50cm9TdHJhaWdodCk7XHJcbiAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG5cclxuICAvLyAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcclxuICAvLyAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QgfTtcclxuIiwiZnVuY3Rpb24gbWVudSgpIHtcclxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xyXG5cclxuICAvLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIC8vIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XHJcbiAgLy8gY29uc3QgbG9nb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgLy8gbG9nb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQnJ1bmNoXCI7XHJcblxyXG4gIC8vIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy8gbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcbiAgLy8gY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIC8vIGhvbWUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcInNvbWV3YXlcIik7XHJcbiAgLy8gaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIC8vIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAvLyBtZW51LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gIC8vIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAvLyBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIC8vIGNvbnRhY3RMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gIC8vIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIC8vIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICAvLyBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgLy8gbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICAvLyBsb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XHJcbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIC8vIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludHJvLmNsYXNzTGlzdC5hZGQoXCJpbnRyb1wiKTtcclxuXHJcbiAgY29uc3QgaW50cm9TdHJhaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBpbnRyb1N0cmFpZ2h0LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgaW50cm9TdHJhaWdodC5jbGFzc0xpc3QuYWRkKFwiaW50cm9fX3N0cmFpZ2h0XCIpO1xyXG5cclxuICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb1N0cmFpZ2h0KTtcclxuICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRybyk7XHJcblxyXG4gIC8vIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICBtZW51RGl2LmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudSB9O1xyXG4iLCJmdW5jdGlvbiBvblBhZ2VMb2FkKCkge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XHJcbiAgLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuICAvLyBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvLyBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG4gIC8vIGNvbnN0IGxvZ29UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIC8vIGxvZ29UaXRsZS50ZXh0Q29udGVudCA9IFwiVGhlIEJydW5jaFwiO1xyXG5cclxuICAvLyBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIC8vIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5cclxuICAvLyBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gaG9tZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAvLyBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10YWJcIik7XHJcbiAgLy8gaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cclxuICAvLyBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICAvLyBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS10YWJcIik7XHJcbiAgLy8gbWVudS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICAvLyBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gIC8vIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgLy8gY29udGFjdExpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuICAvLyBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtdGFiXCIpO1xyXG4gIC8vIGNvbnRhY3RMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gIC8vIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIC8vIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICAvLyBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgLy8gbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcclxuICAvLyBsb2dvLmFwcGVuZENoaWxkKGxvZ29UaXRsZSk7XHJcbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIC8vIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGludHJvQ3Vyc2l2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBpbnRyb0N1cnNpdmUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG9cIjtcclxuICBjb25zdCBpbnRyb1N0cmFpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGludHJvU3RyYWlnaHQudGV4dENvbnRlbnQgPSBcIlRoZSBCcnVuY2hcIjtcclxuICBjb25zdCBpbnRyb0RlZmluaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbnRyb0RlZmluaXRpb24udGV4dENvbnRlbnQgPSBcIlRoZSBiZXN0IG1lYWxzIGluIHRoZSBnYWxheHlcIjtcclxuXHJcbiAgaW50cm8uY2xhc3NMaXN0LmFkZChcImludHJvXCIpO1xyXG4gIGludHJvQ3Vyc2l2ZS5jbGFzc0xpc3QuYWRkKFwiaW50cm9fX2N1cnNpdmVcIik7XHJcbiAgaW50cm9TdHJhaWdodC5jbGFzc0xpc3QuYWRkKFwiaW50cm9fX3N0cmFpZ2h0XCIpO1xyXG5cclxuICBpbnRyby5hcHBlbmRDaGlsZChpbnRyb0N1cnNpdmUpO1xyXG4gIGludHJvLmFwcGVuZENoaWxkKGludHJvU3RyYWlnaHQpO1xyXG4gIGludHJvLmFwcGVuZENoaWxkKGludHJvRGVmaW5pdGlvbik7XHJcbiAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG5cclxuICAvLyBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChpbnRyb0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG9uUGFnZUxvYWQgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBvblBhZ2VMb2FkIH0gZnJvbSBcIi4vb25QYWdlTG9hZC5qc1wiO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBvblBhZ2VMb2FkKCk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiXCIpO1xyXG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvblxyXG4gICAgY29udGFjdCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXRhYlwiKTtcclxuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb25cclxuICAgIG1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS10YWJcIik7XHJcbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uXHJcbiAgICBvblBhZ2VMb2FkKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=