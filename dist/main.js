/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CroissantOne-Regular.otf */ "./src/fonts/CroissantOne-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/coffeestuff.jpg */ "./src/images/coffeestuff.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'crossaint-one';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    letter-spacing: 2px;\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 16px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\n\nbody {\n    position: relative;\n    min-height: 100vh;\n    /* overflow-x:hidden; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: contain;\n    background-attachment: fixed;\n}\n\n.navbar {\n    top: 0;\n    width:100%;\n    position: sticky;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0, 0, 0);\n    height: 6vh;\n    gap: 5vw;\n    padding: 0 10vw;\n    box-sizing: border-box;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.671);\n    z-index: 4;\n}\n\n.navItem {\n    font-weight: bold;\n    text-decoration: underline;\n    color:white;\n    font-size: 1.8rem;\n    font-family: 'crossaint-one', sans-serif;\n}\n\n.navItem:hover {\n    cursor:pointer;\n}\n\n#mid {\n    justify-self: stretch;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: rgba(160, 160, 160, 0.541);\n    min-height: 50%;\n    width:55%;\n    flex-grow: 1;\n    font-family: 'crossaint-one', sans-serif;\n    padding-bottom: 1rem;\n}\n\n.title {\n    font-size: 4rem;\n    letter-spacing: 2px;\n    text-align: center;\n    width: 60%;\n    margin-top: 2rem;\n    color: rgba(22, 5, 3, 0.897);\n    -webkit-text-stroke: 6px;\n    -webkit-text-stroke-color: rgba(0, 0, 0, 0.363);\n    background-color: rgba(90, 90, 90, 0.596);\n    padding: 1rem 1rem;\n    border-radius: 12px;\n    border-style:solid;\n    border-width: 3px;\n    border-color: rgba(22, 5, 3, 0.897);;\n    clip-path: polygon(7% 0, 100% 0, 91% 100%, 0% 100%);\n}\n\n.wrapper {\n    padding: 1rem 2rem;\n    box-sizing:border-box;\n    border-style: solid;\n    border-color: black;\n    border-width: 4px;\n    border-radius: 20px;\n    width: 60%;\n    height:auto;\n    text-align: center;\n}\n\n.article-header {\n    font-family: 'crossaint-one', sans-serif;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n}\n\np {\n    font-family: sans-serif;\n}\n\n.foot {\n    font-weight: bold;\n    width: 100%;\n    padding: 1rem 0;\n    text-align: center;\n    border-top: 2px solid rgba(0, 0, 0, 0.671);\n    background-color: rgb(160, 160, 160);\n    font-size: 1.2rem;\n}\n\n.cat-container {\n    height:auto;\n    width: 80%;\n    text-align: center;\n}\n\n.cat-container:not(:first-child) {\n    border-top: 2px solid rgba(0, 0, 0, 0.671);\n}\n\n.menu-head {\n    font-family: 'crossaint-one';\n    font-size: 2.5rem;\n    -webkit-text-stroke: 6px;\n    -webkit-text-stroke-color: rgba(0, 0, 0, 0.363);\n    margin-top: 1rem;\n}\n\n.item-grid {\n    display: grid;\n    grid-template-columns: 42% 42%;\n    grid-auto-rows: 25vh;\n    justify-content: space-around;\n    margin-top: 1rem;\n    background-color: rgba(160, 160, 160, 0.596);\n    border-radius: 1rem;\n    gap: .5rem;\n    padding: 1rem;\n}\n\n.item-container {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: rgba(158, 98, 80, 0.705);\n    border-radius: 1rem;\n    padding-top: 2vh;\n    border: 4px solid rgba(99, 62, 51, 0.541);\n}\n\n.item-image {\n    height: 75%;\n    width:auto;\n    border: 2px solid black;\n}\n\n.item-name {\n    font-size: 1.2rem;\n    margin-top: 2vh;\n    text-decoration: underline;\n}\n\n.about-wrap {\n    background-color: rgba(160, 160, 160, 0.596);\n}\n\n.bio-name {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n}\n\n.portrait {\n    float:left;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n    height: 100px;\n    width:auto;\n    border: 4px solid rgba(0, 0, 0, 0.705);\n    background-color: rgba(109, 109, 109, 0.555);\n    border-radius: 1rem;\n}\n\ntable {\n    width: 50%;\n    margin-left:auto;\n    margin-right:auto;\n    border: 2px solid black;\n    overflow: hidden;\n    text-align: left;\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\ntable tr:nth-child(2n), thead {\n    background-color: rgba(160, 160, 160, 0.596);;\n}\n\ntd {\n    padding: 8px 4px;\n    border: 2px solid rgba(0, 0, 0, 0.644);\n}\n\nthead {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.397);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'crossaint-one';\n    src: url('./fonts/CroissantOne-Regular.otf');\n    letter-spacing: 2px;\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 16px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\n\nbody {\n    position: relative;\n    min-height: 100vh;\n    /* overflow-x:hidden; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url('./images/coffeestuff.jpg');\n    background-size: contain;\n    background-attachment: fixed;\n}\n\n.navbar {\n    top: 0;\n    width:100%;\n    position: sticky;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(0, 0, 0);\n    height: 6vh;\n    gap: 5vw;\n    padding: 0 10vw;\n    box-sizing: border-box;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.671);\n    z-index: 4;\n}\n\n.navItem {\n    font-weight: bold;\n    text-decoration: underline;\n    color:white;\n    font-size: 1.8rem;\n    font-family: 'crossaint-one', sans-serif;\n}\n\n.navItem:hover {\n    cursor:pointer;\n}\n\n#mid {\n    justify-self: stretch;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: rgba(160, 160, 160, 0.541);\n    min-height: 50%;\n    width:55%;\n    flex-grow: 1;\n    font-family: 'crossaint-one', sans-serif;\n    padding-bottom: 1rem;\n}\n\n.title {\n    font-size: 4rem;\n    letter-spacing: 2px;\n    text-align: center;\n    width: 60%;\n    margin-top: 2rem;\n    color: rgba(22, 5, 3, 0.897);\n    -webkit-text-stroke: 6px;\n    -webkit-text-stroke-color: rgba(0, 0, 0, 0.363);\n    background-color: rgba(90, 90, 90, 0.596);\n    padding: 1rem 1rem;\n    border-radius: 12px;\n    border-style:solid;\n    border-width: 3px;\n    border-color: rgba(22, 5, 3, 0.897);;\n    clip-path: polygon(7% 0, 100% 0, 91% 100%, 0% 100%);\n}\n\n.wrapper {\n    padding: 1rem 2rem;\n    box-sizing:border-box;\n    border-style: solid;\n    border-color: black;\n    border-width: 4px;\n    border-radius: 20px;\n    width: 60%;\n    height:auto;\n    text-align: center;\n}\n\n.article-header {\n    font-family: 'crossaint-one', sans-serif;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n}\n\np {\n    font-family: sans-serif;\n}\n\n.foot {\n    font-weight: bold;\n    width: 100%;\n    padding: 1rem 0;\n    text-align: center;\n    border-top: 2px solid rgba(0, 0, 0, 0.671);\n    background-color: rgb(160, 160, 160);\n    font-size: 1.2rem;\n}\n\n.cat-container {\n    height:auto;\n    width: 80%;\n    text-align: center;\n}\n\n.cat-container:not(:first-child) {\n    border-top: 2px solid rgba(0, 0, 0, 0.671);\n}\n\n.menu-head {\n    font-family: 'crossaint-one';\n    font-size: 2.5rem;\n    -webkit-text-stroke: 6px;\n    -webkit-text-stroke-color: rgba(0, 0, 0, 0.363);\n    margin-top: 1rem;\n}\n\n.item-grid {\n    display: grid;\n    grid-template-columns: 42% 42%;\n    grid-auto-rows: 25vh;\n    justify-content: space-around;\n    margin-top: 1rem;\n    background-color: rgba(160, 160, 160, 0.596);\n    border-radius: 1rem;\n    gap: .5rem;\n    padding: 1rem;\n}\n\n.item-container {\n    box-sizing: border-box;\n    text-align: center;\n    background-color: rgba(158, 98, 80, 0.705);\n    border-radius: 1rem;\n    padding-top: 2vh;\n    border: 4px solid rgba(99, 62, 51, 0.541);\n}\n\n.item-image {\n    height: 75%;\n    width:auto;\n    border: 2px solid black;\n}\n\n.item-name {\n    font-size: 1.2rem;\n    margin-top: 2vh;\n    text-decoration: underline;\n}\n\n.about-wrap {\n    background-color: rgba(160, 160, 160, 0.596);\n}\n\n.bio-name {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n}\n\n.portrait {\n    float:left;\n    margin-right: 1rem;\n    margin-bottom: 1rem;\n    height: 100px;\n    width:auto;\n    border: 4px solid rgba(0, 0, 0, 0.705);\n    background-color: rgba(109, 109, 109, 0.555);\n    border-radius: 1rem;\n}\n\ntable {\n    width: 50%;\n    margin-left:auto;\n    margin-right:auto;\n    border: 2px solid black;\n    overflow: hidden;\n    text-align: left;\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\ntable tr:nth-child(2n), thead {\n    background-color: rgba(160, 160, 160, 0.596);;\n}\n\ntd {\n    padding: 8px 4px;\n    border: 2px solid rgba(0, 0, 0, 0.644);\n}\n\nthead {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.397);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/formats.js":
/*!************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/formats.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FORMAT_PLAIN = exports.FORMAT_HTML = exports.FORMATS = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGT1JNQVRfSFRNTCIsIkZPUk1BVF9QTEFJTiIsIkZPUk1BVFMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc3RhbnRzL2Zvcm1hdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRfUExBSU4gPSBcInBsYWluXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRTID0gW0ZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU5dO1xyXG5leHBvcnQgdHlwZSBMb3JlbUZvcm1hdCA9IFwicGxhaW5cIiB8IFwiaHRtbFwiO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQUNGLFdBQUQsRUFBY0MsWUFBZCxDQUFoQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js":
/*!****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/lineEndings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMSU5FX0VORElOR1MiLCJQT1NJWCIsIldJTjMyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9saW5lRW5kaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTElORV9FTkRJTkdTID0ge1xyXG4gIFBPU0lYOiBcIlxcblwiLFxyXG4gIFdJTjMyOiBcIlxcclxcblwiLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsS0FBSyxFQUFFLElBRG1CO0VBRTFCQyxLQUFLLEVBQUU7QUFGbUIsQ0FBckIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/platforms.js":
/*!**************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/platforms.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTVVBQT1JURURfUExBVEZPUk1TIiwiREFSV0lOIiwiTElOVVgiLCJXSU4zMiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvcGxhdGZvcm1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVVBQT1JURURfUExBVEZPUk1TID0ge1xyXG4gIERBUldJTjogXCJkYXJ3aW5cIixcclxuICBMSU5VWDogXCJsaW51eFwiLFxyXG4gIFdJTjMyOiBcIndpbjMyXCIsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsbUJBQW1CLEdBQUc7RUFDakNDLE1BQU0sRUFBRSxRQUR5QjtFQUVqQ0MsS0FBSyxFQUFFLE9BRjBCO0VBR2pDQyxLQUFLLEVBQUU7QUFIMEIsQ0FBNUIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/units.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/units.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UNIT_WORDS = exports.UNIT_WORD = exports.UNIT_SENTENCES = exports.UNIT_SENTENCE = exports.UNIT_PARAGRAPHS = exports.UNIT_PARAGRAPH = exports.UNITS = void 0;
var UNIT_WORDS = "words";
exports.UNIT_WORDS = UNIT_WORDS;
var UNIT_WORD = "word";
exports.UNIT_WORD = UNIT_WORD;
var UNIT_SENTENCES = "sentences";
exports.UNIT_SENTENCES = UNIT_SENTENCES;
var UNIT_SENTENCE = "sentence";
exports.UNIT_SENTENCE = UNIT_SENTENCE;
var UNIT_PARAGRAPHS = "paragraphs";
exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
var UNIT_PARAGRAPH = "paragraph";
exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
exports.UNITS = UNITS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVTklUX1dPUkRTIiwiVU5JVF9XT1JEIiwiVU5JVF9TRU5URU5DRVMiLCJVTklUX1NFTlRFTkNFIiwiVU5JVF9QQVJBR1JBUEhTIiwiVU5JVF9QQVJBR1JBUEgiLCJVTklUUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvdW5pdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVOSVRfV09SRFMgPSBcIndvcmRzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnQgY29uc3QgVU5JVF9TRU5URU5DRVMgPSBcInNlbnRlbmNlc1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfU0VOVEVOQ0UgPSBcInNlbnRlbmNlXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEggPSBcInBhcmFncmFwaFwiO1xuZXhwb3J0IGNvbnN0IFVOSVRTID0gW1xuICBVTklUX1dPUkRTLFxuICBVTklUX1dPUkQsXG4gIFVOSVRfU0VOVEVOQ0VTLFxuICBVTklUX1NFTlRFTkNFLFxuICBVTklUX1BBUkFHUkFQSFMsXG4gIFVOSVRfUEFSQUdSQVBILFxuXTtcbmV4cG9ydCB0eXBlIExvcmVtVW5pdCA9IFwid29yZHNcIiB8IFwid29yZFwiIHwgXCJzZW50ZW5jZXNcIiB8IFwic2VudGVuY2VcIiB8IFwicGFyYWdyYXBoc1wiIHwgXCJwYXJhZ3JhcGhcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLE9BQW5COztBQUNBLElBQU1DLFNBQVMsR0FBRyxNQUFsQjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFVBQXRCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxZQUF4Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQ25CTixVQURtQixFQUVuQkMsU0FGbUIsRUFHbkJDLGNBSG1CLEVBSW5CQyxhQUptQixFQUtuQkMsZUFMbUIsRUFNbkJDLGNBTm1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/words.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/words.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJXT1JEUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvd29yZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFdPUkRTID0gW1xyXG4gIFwiYWRcIixcclxuICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgXCJhbGlxdWFcIixcclxuICBcImFsaXF1aXBcIixcclxuICBcImFtZXRcIixcclxuICBcImFuaW1cIixcclxuICBcImF1dGVcIixcclxuICBcImNpbGx1bVwiLFxyXG4gIFwiY29tbW9kb1wiLFxyXG4gIFwiY29uc2VjdGV0dXJcIixcclxuICBcImNvbnNlcXVhdFwiLFxyXG4gIFwiY3VscGFcIixcclxuICBcImN1cGlkYXRhdFwiLFxyXG4gIFwiZGVzZXJ1bnRcIixcclxuICBcImRvXCIsXHJcbiAgXCJkb2xvclwiLFxyXG4gIFwiZG9sb3JlXCIsXHJcbiAgXCJkdWlzXCIsXHJcbiAgXCJlYVwiLFxyXG4gIFwiZWl1c21vZFwiLFxyXG4gIFwiZWxpdFwiLFxyXG4gIFwiZW5pbVwiLFxyXG4gIFwiZXNzZVwiLFxyXG4gIFwiZXN0XCIsXHJcbiAgXCJldFwiLFxyXG4gIFwiZXVcIixcclxuICBcImV4XCIsXHJcbiAgXCJleGNlcHRldXJcIixcclxuICBcImV4ZXJjaXRhdGlvblwiLFxyXG4gIFwiZnVnaWF0XCIsXHJcbiAgXCJpZFwiLFxyXG4gIFwiaW5cIixcclxuICBcImluY2lkaWR1bnRcIixcclxuICBcImlwc3VtXCIsXHJcbiAgXCJpcnVyZVwiLFxyXG4gIFwibGFib3JlXCIsXHJcbiAgXCJsYWJvcmlzXCIsXHJcbiAgXCJsYWJvcnVtXCIsXHJcbiAgXCJMb3JlbVwiLFxyXG4gIFwibWFnbmFcIixcclxuICBcIm1pbmltXCIsXHJcbiAgXCJtb2xsaXRcIixcclxuICBcIm5pc2lcIixcclxuICBcIm5vblwiLFxyXG4gIFwibm9zdHJ1ZFwiLFxyXG4gIFwibnVsbGFcIixcclxuICBcIm9jY2FlY2F0XCIsXHJcbiAgXCJvZmZpY2lhXCIsXHJcbiAgXCJwYXJpYXR1clwiLFxyXG4gIFwicHJvaWRlbnRcIixcclxuICBcInF1aVwiLFxyXG4gIFwicXVpc1wiLFxyXG4gIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gIFwic2ludFwiLFxyXG4gIFwic2l0XCIsXHJcbiAgXCJzdW50XCIsXHJcbiAgXCJ0ZW1wb3JcIixcclxuICBcInVsbGFtY29cIixcclxuICBcInV0XCIsXHJcbiAgXCJ2ZWxpdFwiLFxyXG4gIFwidmVuaWFtXCIsXHJcbiAgXCJ2b2x1cHRhdGVcIixcclxuXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUcsQ0FDbkIsSUFEbUIsRUFFbkIsYUFGbUIsRUFHbkIsUUFIbUIsRUFJbkIsU0FKbUIsRUFLbkIsTUFMbUIsRUFNbkIsTUFObUIsRUFPbkIsTUFQbUIsRUFRbkIsUUFSbUIsRUFTbkIsU0FUbUIsRUFVbkIsYUFWbUIsRUFXbkIsV0FYbUIsRUFZbkIsT0FabUIsRUFhbkIsV0FibUIsRUFjbkIsVUFkbUIsRUFlbkIsSUFmbUIsRUFnQm5CLE9BaEJtQixFQWlCbkIsUUFqQm1CLEVBa0JuQixNQWxCbUIsRUFtQm5CLElBbkJtQixFQW9CbkIsU0FwQm1CLEVBcUJuQixNQXJCbUIsRUFzQm5CLE1BdEJtQixFQXVCbkIsTUF2Qm1CLEVBd0JuQixLQXhCbUIsRUF5Qm5CLElBekJtQixFQTBCbkIsSUExQm1CLEVBMkJuQixJQTNCbUIsRUE0Qm5CLFdBNUJtQixFQTZCbkIsY0E3Qm1CLEVBOEJuQixRQTlCbUIsRUErQm5CLElBL0JtQixFQWdDbkIsSUFoQ21CLEVBaUNuQixZQWpDbUIsRUFrQ25CLE9BbENtQixFQW1DbkIsT0FuQ21CLEVBb0NuQixRQXBDbUIsRUFxQ25CLFNBckNtQixFQXNDbkIsU0F0Q21CLEVBdUNuQixPQXZDbUIsRUF3Q25CLE9BeENtQixFQXlDbkIsT0F6Q21CLEVBMENuQixRQTFDbUIsRUEyQ25CLE1BM0NtQixFQTRDbkIsS0E1Q21CLEVBNkNuQixTQTdDbUIsRUE4Q25CLE9BOUNtQixFQStDbkIsVUEvQ21CLEVBZ0RuQixTQWhEbUIsRUFpRG5CLFVBakRtQixFQWtEbkIsVUFsRG1CLEVBbURuQixLQW5EbUIsRUFvRG5CLE1BcERtQixFQXFEbkIsZUFyRG1CLEVBc0RuQixNQXREbUIsRUF1RG5CLEtBdkRtQixFQXdEbkIsTUF4RG1CLEVBeURuQixRQXpEbUIsRUEwRG5CLFNBMURtQixFQTJEbkIsSUEzRG1CLEVBNERuQixPQTVEbUIsRUE2RG5CLFFBN0RtQixFQThEbkIsV0E5RG1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "LoremIpsum", ({
  enumerable: true,
  get: function get() {
    return _LoremIpsum["default"];
  }
}));
exports.loremIpsum = void 0;

var _formats = __webpack_require__(/*! ./constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _units = __webpack_require__(/*! ./constants/units */ "./node_modules/lorem-ipsum/dist/constants/units.js");

var _words = __webpack_require__(/*! ./constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _LoremIpsum = _interopRequireDefault(__webpack_require__(/*! ./lib/LoremIpsum */ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum["default"](options, format, suffix);

  switch (units) {
    case _units.UNIT_PARAGRAPHS:
    case _units.UNIT_PARAGRAPH:
      return lorem.generateParagraphs(count);

    case _units.UNIT_SENTENCES:
    case _units.UNIT_SENTENCE:
      return lorem.generateSentences(count);

    case _units.UNIT_WORDS:
    case _units.UNIT_WORD:
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb3JlbUlwc3VtIiwiY291bnQiLCJmb3JtYXQiLCJGT1JNQVRfUExBSU4iLCJwYXJhZ3JhcGhMb3dlckJvdW5kIiwicGFyYWdyYXBoVXBwZXJCb3VuZCIsInJhbmRvbSIsInNlbnRlbmNlTG93ZXJCb3VuZCIsInNlbnRlbmNlVXBwZXJCb3VuZCIsInVuaXRzIiwiVU5JVF9TRU5URU5DRVMiLCJ3b3JkcyIsIldPUkRTIiwic3VmZml4Iiwib3B0aW9ucyIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJsb3JlbSIsIkxvcmVtSXBzdW0iLCJVTklUX1BBUkFHUkFQSFMiLCJVTklUX1BBUkFHUkFQSCIsImdlbmVyYXRlUGFyYWdyYXBocyIsIlVOSVRfU0VOVEVOQ0UiLCJnZW5lcmF0ZVNlbnRlbmNlcyIsIlVOSVRfV09SRFMiLCJVTklUX1dPUkQiLCJnZW5lcmF0ZVdvcmRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvcmVtRm9ybWF0LCBGT1JNQVRfUExBSU4gfSBmcm9tIFwiLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExvcmVtVW5pdCxcclxuICBVTklUX1BBUkFHUkFQSCxcclxuICBVTklUX1BBUkFHUkFQSFMsXHJcbiAgVU5JVF9TRU5URU5DRVMsXHJcbiAgVU5JVF9TRU5URU5DRSxcclxuICBVTklUX1dPUkRTLFxyXG4gIFVOSVRfV09SRCxcclxufSBmcm9tIFwiLi9jb25zdGFudHMvdW5pdHNcIjtcclxuaW1wb3J0IHsgV09SRFMgfSBmcm9tIFwiLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgSVBybmcgfSBmcm9tIFwiLi9saWIvZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBMb3JlbUlwc3VtIGZyb20gXCIuL2xpYi9Mb3JlbUlwc3VtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb3JlbUlwc3VtUGFyYW1zIHtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBmb3JtYXQ/OiBMb3JlbUZvcm1hdDtcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHBhcmFncmFwaFVwcGVyQm91bmQ/OiBudW1iZXI7XHJcbiAgcmFuZG9tPzogSVBybmc7XHJcbiAgc2VudGVuY2VMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHNlbnRlbmNlVXBwZXJCb3VuZD86IG51bWJlcjtcclxuICB1bml0cz86IExvcmVtVW5pdDtcclxuICB3b3Jkcz86IHN0cmluZ1tdO1xyXG4gIHN1ZmZpeD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgbG9yZW1JcHN1bSA9ICh7XHJcbiAgY291bnQgPSAxLFxyXG4gIGZvcm1hdCA9IEZPUk1BVF9QTEFJTixcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kID0gMyxcclxuICBwYXJhZ3JhcGhVcHBlckJvdW5kID0gNyxcclxuICByYW5kb20sXHJcbiAgc2VudGVuY2VMb3dlckJvdW5kID0gNSxcclxuICBzZW50ZW5jZVVwcGVyQm91bmQgPSAxNSxcclxuICB1bml0cyA9IFVOSVRfU0VOVEVOQ0VTLFxyXG4gIHdvcmRzID0gV09SRFMsXHJcbiAgc3VmZml4ID0gXCJcIixcclxufTogSUxvcmVtSXBzdW1QYXJhbXMgPSB7fSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJhbmRvbSxcclxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xyXG4gICAgICBtYXg6IHBhcmFncmFwaFVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogcGFyYWdyYXBoTG93ZXJCb3VuZCxcclxuICAgIH0sXHJcbiAgICB3b3JkcyxcclxuICAgIHdvcmRzUGVyU2VudGVuY2U6IHtcclxuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogc2VudGVuY2VMb3dlckJvdW5kLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3JlbTogTG9yZW1JcHN1bSA9IG5ldyBMb3JlbUlwc3VtKG9wdGlvbnMsIGZvcm1hdCwgc3VmZml4KTtcclxuXHJcbiAgc3dpdGNoICh1bml0cykge1xyXG4gICAgY2FzZSBVTklUX1BBUkFHUkFQSFM6XHJcbiAgICBjYXNlIFVOSVRfUEFSQUdSQVBIOlxyXG4gICAgICByZXR1cm4gbG9yZW0uZ2VuZXJhdGVQYXJhZ3JhcGhzKGNvdW50KTtcclxuICAgIGNhc2UgVU5JVF9TRU5URU5DRVM6XHJcbiAgICBjYXNlIFVOSVRfU0VOVEVOQ0U6XHJcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XHJcbiAgICBjYXNlIFVOSVRfV09SRFM6XHJcbiAgICBjYXNlIFVOSVRfV09SRDpcclxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlV29yZHMoY291bnQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbG9yZW1JcHN1bSwgTG9yZW1JcHN1bSB9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFTQTs7QUFFQTs7OztBQWVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBV21CO0VBQUEsK0VBQWYsRUFBZTtFQUFBLHNCQVZwQ0MsS0FVb0M7RUFBQSxJQVZwQ0EsS0FVb0MsMkJBVjVCLENBVTRCO0VBQUEsdUJBVHBDQyxNQVNvQztFQUFBLElBVHBDQSxNQVNvQyw0QkFUM0JDLHFCQVMyQjtFQUFBLGlDQVJwQ0MsbUJBUW9DO0VBQUEsSUFScENBLG1CQVFvQyxzQ0FSZCxDQVFjO0VBQUEsaUNBUHBDQyxtQkFPb0M7RUFBQSxJQVBwQ0EsbUJBT29DLHNDQVBkLENBT2M7RUFBQSxJQU5wQ0MsTUFNb0MsUUFOcENBLE1BTW9DO0VBQUEsaUNBTHBDQyxrQkFLb0M7RUFBQSxJQUxwQ0Esa0JBS29DLHNDQUxmLENBS2U7RUFBQSxpQ0FKcENDLGtCQUlvQztFQUFBLElBSnBDQSxrQkFJb0Msc0NBSmYsRUFJZTtFQUFBLHNCQUhwQ0MsS0FHb0M7RUFBQSxJQUhwQ0EsS0FHb0MsMkJBSDVCQyxxQkFHNEI7RUFBQSxzQkFGcENDLEtBRW9DO0VBQUEsSUFGcENBLEtBRW9DLDJCQUY1QkMsWUFFNEI7RUFBQSx1QkFEcENDLE1BQ29DO0VBQUEsSUFEcENBLE1BQ29DLDRCQUQzQixFQUMyQjs7RUFDcEMsSUFBTUMsT0FBTyxHQUFHO0lBQ2RSLE1BQU0sRUFBTkEsTUFEYztJQUVkUyxxQkFBcUIsRUFBRTtNQUNyQkMsR0FBRyxFQUFFWCxtQkFEZ0I7TUFFckJZLEdBQUcsRUFBRWI7SUFGZ0IsQ0FGVDtJQU1kTyxLQUFLLEVBQUxBLEtBTmM7SUFPZE8sZ0JBQWdCLEVBQUU7TUFDaEJGLEdBQUcsRUFBRVIsa0JBRFc7TUFFaEJTLEdBQUcsRUFBRVY7SUFGVztFQVBKLENBQWhCO0VBYUEsSUFBTVksS0FBaUIsR0FBRyxJQUFJQyxzQkFBSixDQUFlTixPQUFmLEVBQXdCWixNQUF4QixFQUFnQ1csTUFBaEMsQ0FBMUI7O0VBRUEsUUFBUUosS0FBUjtJQUNFLEtBQUtZLHNCQUFMO0lBQ0EsS0FBS0MscUJBQUw7TUFDRSxPQUFPSCxLQUFLLENBQUNJLGtCQUFOLENBQXlCdEIsS0FBekIsQ0FBUDs7SUFDRixLQUFLUyxxQkFBTDtJQUNBLEtBQUtjLG9CQUFMO01BQ0UsT0FBT0wsS0FBSyxDQUFDTSxpQkFBTixDQUF3QnhCLEtBQXhCLENBQVA7O0lBQ0YsS0FBS3lCLGlCQUFMO0lBQ0EsS0FBS0MsZ0JBQUw7TUFDRSxPQUFPUixLQUFLLENBQUNTLGFBQU4sQ0FBb0IzQixLQUFwQixDQUFQOztJQUNGO01BQ0UsT0FBTyxFQUFQO0VBWEo7QUFhRCxDQXhDRCJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _formats = __webpack_require__(/*! ../constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _lineEndings = __webpack_require__(/*! ../constants/lineEndings */ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js");

var _generator = _interopRequireDefault(__webpack_require__(/*! ../lib/generator */ "./node_modules/lorem-ipsum/dist/lib/generator.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum = /*#__PURE__*/function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    this.format = format;
    this.suffix = suffix;

    _defineProperty(this, "generator", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.generator = new _generator["default"](options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwib3B0aW9ucyIsImZvcm1hdCIsIkZPUk1BVF9QTEFJTiIsInN1ZmZpeCIsIkZPUk1BVFMiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpvaW4iLCJnZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJpc1JlYWN0TmF0aXZlIiwiaXNOb2RlIiwiaXNXaW5kb3dzIiwiTElORV9FTkRJTkdTIiwiV0lOMzIiLCJQT1NJWCIsInN0ciIsIkZPUk1BVF9IVE1MIiwic3RyaW5ncyIsIm1hcCIsImZvcm1hdFN0cmluZyIsIm51bSIsImdlbmVyYXRlUmFuZG9tV29yZHMiLCJnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaCIsIm1ha2VTdHJpbmciLCJiaW5kIiwiZm9ybWF0U3RyaW5ncyIsIm1ha2VBcnJheU9mU3RyaW5ncyIsImdldExpbmVFbmRpbmciXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0xvcmVtSXBzdW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTiwgRk9STUFUUywgTG9yZW1Gb3JtYXQgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zvcm1hdHNcIjtcclxuaW1wb3J0IHsgTElORV9FTkRJTkdTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saW5lRW5kaW5nc1wiO1xyXG5pbXBvcnQgR2VuZXJhdG9yLCB7IElHZW5lcmF0b3JPcHRpb25zIH0gZnJvbSBcIi4uL2xpYi9nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgaXNOb2RlLCBpc1JlYWN0TmF0aXZlLCBpc1dpbmRvd3MsIG1ha2VBcnJheU9mU3RyaW5ncyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jbGFzcyBMb3JlbUlwc3VtIHtcclxuICBwdWJsaWMgZ2VuZXJhdG9yOiBHZW5lcmF0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgb3B0aW9uczogSUdlbmVyYXRvck9wdGlvbnMgPSB7fSxcclxuICAgIHB1YmxpYyBmb3JtYXQ6IExvcmVtRm9ybWF0ID0gRk9STUFUX1BMQUlOLFxyXG4gICAgcHVibGljIHN1ZmZpeD86IHN0cmluZyxcclxuICApIHtcclxuICAgIGlmIChGT1JNQVRTLmluZGV4T2YoZm9ybWF0LnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7Zm9ybWF0fSBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSAke0ZPUk1BVFMuam9pbihcIiBvciBcIil9LmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3Iob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZUVuZGluZygpIHtcclxuICAgIGlmICh0aGlzLnN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWZmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlKCkgJiYgaXNOb2RlKCkgJiYgaXNXaW5kb3dzKCkpIHtcclxuICAgICAgcmV0dXJuIExJTkVfRU5ESU5HUy5XSU4zMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTElORV9FTkRJTkdTLlBPU0lYO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IEZPUk1BVF9IVE1MKSB7XHJcbiAgICAgIHJldHVybiBgPHA+JHtzdHJ9PC9wPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZ3Moc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gc3RyaW5ncy5tYXAoKHN0cikgPT4gdGhpcy5mb3JtYXRTdHJpbmcoc3RyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVXb3JkcyhudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVTZW50ZW5jZXMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVBhcmFncmFwaHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWFrZVN0cmluZyA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoLmJpbmQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdG9yLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MobWFrZUFycmF5T2ZTdHJpbmdzKG51bSwgbWFrZVN0cmluZykpLmpvaW4oXHJcbiAgICAgIHRoaXMuZ2V0TGluZUVuZGluZygpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvcmVtSXBzdW07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTtFQUdKLHNCQUlFO0lBQUEsSUFIQUMsT0FHQSx1RUFINkIsRUFHN0I7SUFBQSxJQUZPQyxNQUVQLHVFQUY2QkMscUJBRTdCO0lBQUEsSUFET0MsTUFDUDs7SUFBQTs7SUFBQSxLQUZPRixNQUVQLEdBRk9BLE1BRVA7SUFBQSxLQURPRSxNQUNQLEdBRE9BLE1BQ1A7O0lBQUE7O0lBQ0EsSUFBSUMsZ0JBQUEsQ0FBUUMsT0FBUixDQUFnQkosTUFBTSxDQUFDSyxXQUFQLEVBQWhCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7TUFDaEQsTUFBTSxJQUFJQyxLQUFKLFdBQ0ROLE1BREMsK0NBQzBDRyxnQkFBQSxDQUFRSSxJQUFSLENBQWEsTUFBYixDQUQxQyxPQUFOO0lBR0Q7O0lBQ0QsS0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjVixPQUFkLENBQWpCO0VBQ0Q7Ozs7V0FFRCx5QkFBdUI7TUFDckIsSUFBSSxLQUFLRyxNQUFULEVBQWlCO1FBQ2YsT0FBTyxLQUFLQSxNQUFaO01BQ0Q7O01BRUQsSUFBSSxDQUFDLElBQUFRLG1CQUFBLEdBQUQsSUFBb0IsSUFBQUMsWUFBQSxHQUFwQixJQUFnQyxJQUFBQyxlQUFBLEdBQXBDLEVBQWlEO1FBQy9DLE9BQU9DLHlCQUFBLENBQWFDLEtBQXBCO01BQ0Q7O01BRUQsT0FBT0QseUJBQUEsQ0FBYUUsS0FBcEI7SUFDRDs7O1dBRUQsc0JBQW9CQyxHQUFwQixFQUF5QztNQUN2QyxJQUFJLEtBQUtoQixNQUFMLEtBQWdCaUIsb0JBQXBCLEVBQWlDO1FBQy9CLG9CQUFhRCxHQUFiO01BQ0Q7O01BQ0QsT0FBT0EsR0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJFLE9BQXJCLEVBQWtEO01BQUE7O01BQ2hELE9BQU9BLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNILEdBQUQ7UUFBQSxPQUFTLEtBQUksQ0FBQ0ksWUFBTCxDQUFrQkosR0FBbEIsQ0FBVDtNQUFBLENBQVosQ0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJLLEdBQXJCLEVBQTJDO01BQ3pDLE9BQU8sS0FBS0QsWUFBTCxDQUFrQixLQUFLWixTQUFMLENBQWVjLG1CQUFmLENBQW1DRCxHQUFuQyxDQUFsQixDQUFQO0lBQ0Q7OztXQUVELDJCQUF5QkEsR0FBekIsRUFBK0M7TUFDN0MsT0FBTyxLQUFLRCxZQUFMLENBQWtCLEtBQUtaLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNGLEdBQXZDLENBQWxCLENBQVA7SUFDRDs7O1dBRUQsNEJBQTBCQSxHQUExQixFQUErQztNQUM3QyxJQUFNRyxVQUFVLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNFLElBQXZDLENBQ2pCLEtBQUtqQixTQURZLENBQW5CO01BR0EsT0FBTyxLQUFLa0IsYUFBTCxDQUFtQixJQUFBQyx3QkFBQSxFQUFtQk4sR0FBbkIsRUFBd0JHLFVBQXhCLENBQW5CLEVBQXdEakIsSUFBeEQsQ0FDTCxLQUFLcUIsYUFBTCxFQURLLENBQVA7SUFHRDs7Ozs7O2VBR1k5QixVIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/generator.js":
/*!********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/generator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _words = __webpack_require__(/*! ../constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator = /*#__PURE__*/function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHZW5lcmF0b3IiLCJzZW50ZW5jZXNQZXJQYXJhZ3JhcGgiLCJtYXgiLCJtaW4iLCJ3b3Jkc1BlclNlbnRlbmNlIiwicmFuZG9tIiwic2VlZCIsIndvcmRzIiwiV09SRFMiLCJFcnJvciIsIk1hdGgiLCJmbG9vciIsIm51bSIsImxlbmd0aCIsImdlbmVyYXRlUmFuZG9tSW50ZWdlciIsIm1ha2VBcnJheU9mTGVuZ3RoIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbmRleCIsInBsdWNrUmFuZG9tV29yZCIsInRyaW0iLCJjYXBpdGFsaXplIiwiZ2VuZXJhdGVSYW5kb21Xb3JkcyIsImdlbmVyYXRlUmFuZG9tU2VudGVuY2UiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2dlbmVyYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZUFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzIHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBybmcgPSAoKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgdHlwZSBJU2VlZFJhbmRvbSA9IG5ldyAoc2VlZD86IHN0cmluZykgPT4gSVBybmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRoIHtcclxuICBzZWVkcmFuZG9tOiBJU2VlZFJhbmRvbTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhdG9yT3B0aW9ucyB7XHJcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoPzogSUJvdW5kcztcclxuICB3b3Jkc1BlclNlbnRlbmNlPzogSUJvdW5kcztcclxuICByYW5kb20/OiBJUHJuZztcclxuICBzZWVkPzogc3RyaW5nO1xyXG4gIHdvcmRzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcbiAgcHVibGljIHNlbnRlbmNlc1BlclBhcmFncmFwaDogSUJvdW5kcztcclxuICBwdWJsaWMgd29yZHNQZXJTZW50ZW5jZTogSUJvdW5kcztcclxuICBwdWJsaWMgcmFuZG9tOiBJUHJuZztcclxuICBwdWJsaWMgd29yZHM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSB7IG1heDogNywgbWluOiAzIH0sXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlID0geyBtYXg6IDE1LCBtaW46IDUgfSxcclxuICAgIHJhbmRvbSxcclxuICAgIHNlZWQsXHJcbiAgICB3b3JkcyA9IFdPUkRTLFxyXG4gIH06IElHZW5lcmF0b3JPcHRpb25zID0ge30pIHtcclxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoICgke1xyXG4gICAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHtzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoJHtcclxuICAgICAgICAgIHdvcmRzUGVyU2VudGVuY2UubWluXHJcbiAgICAgICAgfSkgY2Fubm90IGV4Y2VlZCBtYXhpbXVtICgke3dvcmRzUGVyU2VudGVuY2UubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcclxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcclxuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XHJcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMud29yZHNQZXJTZW50ZW5jZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKVxyXG4gICAgICAucmVkdWNlKChhY2N1bXVsYXRvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wbHVja1JhbmRvbVdvcmQoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtjYXBpdGFsaXplKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKX0uYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpfSAke2FjY3VtdWxhdG9yfWA7XHJcbiAgICAgIH0sIFwiXCIpXHJcbiAgICAgIC50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1Y2tSYW5kb21Xb3JkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBdUJNQSxTO0VBTUoscUJBTTJCO0lBQUEsK0VBQUosRUFBSTtJQUFBLGlDQUx6QkMscUJBS3lCO0lBQUEsSUFMekJBLHFCQUt5QixzQ0FMRDtNQUFFQyxHQUFHLEVBQUUsQ0FBUDtNQUFVQyxHQUFHLEVBQUU7SUFBZixDQUtDO0lBQUEsaUNBSnpCQyxnQkFJeUI7SUFBQSxJQUp6QkEsZ0JBSXlCLHNDQUpOO01BQUVGLEdBQUcsRUFBRSxFQUFQO01BQVdDLEdBQUcsRUFBRTtJQUFo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

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/capitalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/capitalize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXBpdGFsaXplIiwic3RyIiwidHJpbW1lZCIsInRyaW0iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY2FwaXRhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIHN0ciAgQSBzdHJpbmcgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBjYXBpdGFsaXplZC5cclxuICogQHJldHVybnMgICAgQSBjYXBpdGFsaXplZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB0cmltbWVkID0gc3RyLnRyaW0oKTtcclxuICByZXR1cm4gdHJpbW1lZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRyaW1tZWQuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBeUI7RUFDMUMsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLElBQUosRUFBaEI7RUFDQSxPQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxXQUFsQixLQUFrQ0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxDQUF6QztBQUNELENBSEQ7O2VBS2VOLFUifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "capitalize", ({
  enumerable: true,
  get: function get() {
    return _capitalize["default"];
  }
}));
Object.defineProperty(exports, "isNode", ({
  enumerable: true,
  get: function get() {
    return _isNode["default"];
  }
}));
Object.defineProperty(exports, "isReactNative", ({
  enumerable: true,
  get: function get() {
    return _isReactNative["default"];
  }
}));
Object.defineProperty(exports, "isWindows", ({
  enumerable: true,
  get: function get() {
    return _isWindows["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfLength", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfStrings", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings["default"];
  }
}));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! ./capitalize */ "./node_modules/lorem-ipsum/dist/util/capitalize.js"));

var _isNode = _interopRequireDefault(__webpack_require__(/*! ./isNode */ "./node_modules/lorem-ipsum/dist/util/isNode.js"));

var _isReactNative = _interopRequireDefault(__webpack_require__(/*! ./isReactNative */ "./node_modules/lorem-ipsum/dist/util/isReactNative.js"));

var _isWindows = _interopRequireDefault(__webpack_require__(/*! ./isWindows */ "./node_modules/lorem-ipsum/dist/util/isWindows.js"));

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

var _makeArrayOfStrings = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfStrings */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4vY2FwaXRhbGl6ZVwiO1xyXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xyXG5pbXBvcnQgaXNSZWFjdE5hdGl2ZSBmcm9tIFwiLi9pc1JlYWN0TmF0aXZlXCI7XHJcbmltcG9ydCBpc1dpbmRvd3MgZnJvbSBcIi4vaXNXaW5kb3dzXCI7XHJcbmltcG9ydCBtYWtlQXJyYXlPZkxlbmd0aCBmcm9tIFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiO1xyXG5pbXBvcnQgbWFrZUFycmF5T2ZTdHJpbmdzIGZyb20gXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGlzTm9kZSxcclxuICBpc1JlYWN0TmF0aXZlLFxyXG4gIGlzV2luZG93cyxcclxuICBtYWtlQXJyYXlPZkxlbmd0aCxcclxuICBtYWtlQXJyYXlPZlN0cmluZ3MsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isNode.js":
/*!******************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isNode.js ***!
  \******************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return  true && !!module.exports;
};

var _default = isNode;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc05vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNOb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xyXG5jb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBZTtFQUM1QixPQUFPLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQWpEO0FBQ0QsQ0FGRDs7ZUFJZUYsTSJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isReactNative.js":
/*!*************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isReactNative.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Check if runtime is ReactNative.
 * Solution based on https://github.com/knicklabs/lorem-ipsum.js/pull/52/files
 *
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  var isReactNativeResult = false;

  try {
    isReactNativeResult = navigator.product === "ReactNative";
  } catch (e) {
    isReactNativeResult = false;
  }

  return isReactNativeResult;
};

var _default = isReactNative;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1JlYWN0TmF0aXZlIiwiaXNSZWFjdE5hdGl2ZVJlc3VsdCIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNSZWFjdE5hdGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2hlY2sgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICogU29sdXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2tuaWNrbGFicy9sb3JlbS1pcHN1bS5qcy9wdWxsLzUyL2ZpbGVzXHJcbiAqXHJcbiAqIEByZXR1cm5zICBUcnVlIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqL1xyXG5jb25zdCBpc1JlYWN0TmF0aXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1JlYWN0TmF0aXZlUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNSZWFjdE5hdGl2ZVJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUmVhY3ROYXRpdmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBZTtFQUNuQyxJQUFJQyxtQkFBNEIsR0FBRyxLQUFuQzs7RUFFQSxJQUFJO0lBQ0ZBLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsYUFBNUM7RUFDRCxDQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0lBQ1ZILG1CQUFtQixHQUFHLEtBQXRCO0VBQ0Q7O0VBRUQsT0FBT0EsbUJBQVA7QUFDRCxDQVZEOztlQVllRCxhIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isWindows.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isWindows.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _platforms = __webpack_require__(/*! ../constants/platforms */ "./node_modules/lorem-ipsum/dist/constants/platforms.js");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  var isWindowsResult = false;

  try {
    isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
  } catch (e) {
    isWindowsResult = false;
  }

  return isWindowsResult;
};

var _default = isWindows;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJpc1dpbmRvd3NSZXN1bHQiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTVVBQT1JURURfUExBVEZPUk1TIiwiV0lOMzIiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNXaW5kb3dzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNVUFBPUlRFRF9QTEFURk9STVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3BsYXRmb3Jtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgcHJvY2VzcyBpcyB3aW5kb3dzLlxyXG4gKi9cclxuY29uc3QgaXNXaW5kb3dzID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1dpbmRvd3NSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0cnkge1xyXG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gU1VQUE9SVEVEX1BMQVRGT1JNUy5XSU4zMjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIGlzV2luZG93c1Jlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzV2luZG93cztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBZTtFQUMvQixJQUFJQyxlQUF3QixHQUFHLEtBQS9COztFQUNBLElBQUk7SUFDRkEsZUFBZSxHQUFHQyxPQUFPLENBQUNDLFFBQVIsS0FBcUJDLDhCQUFBLENBQW9CQyxLQUEzRDtFQUNELENBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7SUFDVkwsZUFBZSxHQUFHLEtBQWxCO0VBQ0Q7O0VBQ0QsT0FBT0EsZUFBUDtBQUNELENBUkQ7O2VBVWVELFMifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZkxlbmd0aCIsImxlbmd0aCIsIkFycmF5IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZkxlbmd0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xyXG5jb25zdCBtYWtlQXJyYXlPZkxlbmd0aCA9IChsZW5ndGg6IG51bWJlciA9IDApOiBudW1iZXJbXSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcChcclxuICAgIChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gaW5kZXgsXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mTGVuZ3RoO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBa0M7RUFBQSxJQUFqQ0MsTUFBaUMsdUVBQWhCLENBQWdCO0VBQzFELE9BQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JELEtBQUssQ0FBQ0QsTUFBRCxDQUF2QixFQUFpQ0csR0FBakMsQ0FDTCxVQUFDQyxJQUFELEVBQVlDLEtBQVo7SUFBQSxPQUFzQ0EsS0FBdEM7RUFBQSxDQURLLENBQVA7QUFHRCxDQUpEOztlQU1lTixpQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js":
/*!******************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _makeArrayOfLength["default"])(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZlN0cmluZ3MiLCJsZW5ndGgiLCJtYWtlU3RyaW5nIiwiYXJyIiwibWFrZUFycmF5T2ZMZW5ndGgiLCJtYXAiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZlN0cmluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ha2VBcnJheU9mTGVuZ3RoIGZyb20gXCIuL21ha2VBcnJheU9mTGVuZ3RoXCI7XHJcbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cclxuY29uc3QgbWFrZUFycmF5T2ZTdHJpbmdzID0gKFxyXG4gIGxlbmd0aDogbnVtYmVyLFxyXG4gIG1ha2VTdHJpbmc6ICgpID0+IHN0cmluZyxcclxuKTogc3RyaW5nW10gPT4ge1xyXG4gIGNvbnN0IGFyciA9IG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aCk7XHJcbiAgcmV0dXJuIGFyci5tYXAoKCkgPT4gbWFrZVN0cmluZygpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mU3RyaW5ncztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FDekJDLE1BRHlCLEVBRXpCQyxVQUZ5QixFQUdaO0VBQ2IsSUFBTUMsR0FBRyxHQUFHLElBQUFDLDZCQUFBLEVBQWtCSCxNQUFsQixDQUFaO0VBQ0EsT0FBT0UsR0FBRyxDQUFDRSxHQUFKLENBQVE7SUFBQSxPQUFNSCxVQUFVLEVBQWhCO0VBQUEsQ0FBUixDQUFQO0FBQ0QsQ0FORDs7ZUFRZUYsa0IifQ==

/***/ }),

/***/ "./src/data/klonoa.txt":
/*!*****************************!*\
  !*** ./src/data/klonoa.txt ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Klonoa (クロノア, Kuronoa), sometimes referred to as Klonoa of the Wind (風のクロノア, Kaze no Kuronoa) is an anthropomorphic humanoid long-eared cat like creature who is the main protagonist in the Klonoa franchise. He was created by Namco and Klonoa Works, and has starred in his own series since 1997.\n\nKlonoa is known for being a determined, friendly and good-natured individual, often helping others and saving the various worlds he finds himself in from all sorts of trouble.\n\nHis kindness was reflected in Lunatea's Veil, when a strange voice was calling him, known as a \"Dream Voice\", and was later found out to be the King of Sorrow, for he was sad because people had forgotten him. When Klonoa acknowledged who the voice was, with an open heart, he helped the King of Sorrow by ringing the Fifth Bell of the Kingdom of Sorrow and made sure that Lunatea would never forget sorrow.");

/***/ }),

/***/ "./src/data/niko.txt":
/*!***************************!*\
  !*** ./src/data/niko.txt ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Niko is the playable protagonist of OneShot. They are a child with blue hair with three \"whiskers\" jutting out from the sides, yellow catlike eyes, and tan skin. They wear a brown overcoat extending over their arms, a long light blue scarf, a brown hat with catlike ears, and grayish-purple bottoms that appear to be leggings. They are tasked with returning the Sun to the Tower and saving the World from dying out.\n\n    Niko is a very kind and caring kid. Being the messiah that the prophecy had foretold, they became determined to reach the Tower and bring the sun back to it in order to save the World, even despite various other people stating that the sun won't stop the World from dying. Niko is also helpful, which is shown when they repair the Rowbot at the dock in the Barrens, and volunteer to find Alula and return her to Calamus in the Glen.");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/about-exclusive/descriptor.js":
/*!******************************************************!*\
  !*** ./src/components/about-exclusive/descriptor.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showBiography": () => (/* binding */ showBiography)
/* harmony export */ });
/* harmony import */ var _data_niko_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/niko.txt */ "./src/data/niko.txt");
/* harmony import */ var _data_klonoa_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/klonoa.txt */ "./src/data/klonoa.txt");
/* harmony import */ var _images_niko_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/niko.png */ "./src/images/niko.png");
/* harmony import */ var _images_klonoa_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/klonoa.png */ "./src/images/klonoa.png");





let info = {
    "niko" : {
        name: "Niko",
        bio: _data_niko_txt__WEBPACK_IMPORTED_MODULE_0__["default"],
        picture: _images_niko_png__WEBPACK_IMPORTED_MODULE_2__
    },
    "klonoa" : {
        name: "Klonoa",
        bio: _data_klonoa_txt__WEBPACK_IMPORTED_MODULE_1__["default"],
        picture: _images_klonoa_png__WEBPACK_IMPORTED_MODULE_3__
    },
};

function showBiography (name) {
    let div = document.createElement('div');
    div.classList.add('wrapper', 'about-wrap');

    let title = document.createElement('h2');
    title.textContent = info[name].name;
    title.classList = "bio-name"
    div.appendChild(title);

    let portrait = new Image;
    portrait.classList.add('portrait');
    portrait.src = info[name].picture;
    div.appendChild(portrait);

    let bio = document.createElement('p');
    bio.textContent = info[name].bio;
    bio.classList.add('biography');
    div.appendChild(bio);

    return div;
}



/***/ }),

/***/ "./src/components/about-exclusive/display-hours.js":
/*!*********************************************************!*\
  !*** ./src/components/about-exclusive/display-hours.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showHours": () => (/* binding */ showHours)
/* harmony export */ });
/* harmony import */ var _makeTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeTable */ "./src/components/about-exclusive/makeTable.js");


function showHours() {
    return (0,_makeTable__WEBPACK_IMPORTED_MODULE_0__.newTable)();
}



/***/ }),

/***/ "./src/components/about-exclusive/hours-info.js":
/*!******************************************************!*\
  !*** ./src/components/about-exclusive/hours-info.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hours": () => (/* binding */ hours)
/* harmony export */ });
let hours = [
    {
        date: "Monday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Tuesday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Wednesday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Thursday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Friday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Saturday",
        hours: "6:00AM - 8:00PM"
    },
    {
        date: "Sunday",
        hours: "CLOSED"
    },
]



/***/ }),

/***/ "./src/components/about-exclusive/makeTable.js":
/*!*****************************************************!*\
  !*** ./src/components/about-exclusive/makeTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTable": () => (/* binding */ newTable)
/* harmony export */ });
/* harmony import */ var _hours_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hours-info */ "./src/components/about-exclusive/hours-info.js");


function newTable() {
    let t = document.createElement('table');
    let theader = t.createTHead();
    let theaderRow = theader.insertRow();
    let td = theaderRow.insertCell();
    td.textContent = "Date";
    let td2 = theaderRow.insertCell();
    td2.textContent = "Hours";

    let format = ["date", "hours"];

    let tBody = t.createTBody();
    for(let i = 0; i < 7; i++) {
        let tb_row = tBody.insertRow();
        for (let j = 0; j < 2; j++) {
            let tbrow_td = tb_row.insertCell();
            tbrow_td.textContent = _hours_info__WEBPACK_IMPORTED_MODULE_0__.hours[i][format[j]];
        }
    }

    return t;
}

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAbout": () => (/* binding */ showAbout)
/* harmony export */ });
/* harmony import */ var _content_remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-remove.js */ "./src/components/content-remove.js");
/* harmony import */ var _about_exclusive_descriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-exclusive/descriptor.js */ "./src/components/about-exclusive/descriptor.js");
/* harmony import */ var _cat_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat-header.js */ "./src/components/cat-header.js");
/* harmony import */ var _about_exclusive_display_hours_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-exclusive/display-hours.js */ "./src/components/about-exclusive/display-hours.js");
/* harmony import */ var _homepage_exclusive_js_title_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage-exclusive.js/title.js */ "./src/components/homepage-exclusive.js/title.js");






function showAbout() {
    let main = document.querySelector('#mid');
    (0,_content_remove_js__WEBPACK_IMPORTED_MODULE_0__.removeContent)(main);

    main.appendChild((0,_homepage_exclusive_js_title_js__WEBPACK_IMPORTED_MODULE_4__["default"])("ABOUT US"))

    let header = document.createElement('h1');
    header.textContent = "ABOUT";
    header.classList.add("title");
    main.appendChild((0,_cat_header_js__WEBPACK_IMPORTED_MODULE_2__.newHeader)("WHO ARE WE?"));

    main.appendChild((0,_about_exclusive_descriptor_js__WEBPACK_IMPORTED_MODULE_1__.showBiography)('niko'));
    main.appendChild((0,_about_exclusive_descriptor_js__WEBPACK_IMPORTED_MODULE_1__.showBiography)('klonoa'));

    main.appendChild((0,_cat_header_js__WEBPACK_IMPORTED_MODULE_2__.newHeader)("WHEN ARE WE OPEN?"));
    main.appendChild((0,_about_exclusive_display_hours_js__WEBPACK_IMPORTED_MODULE_3__.showHours)());
}



/***/ }),

/***/ "./src/components/article.js":
/*!***********************************!*\
  !*** ./src/components/article.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newContainer": () => (/* binding */ newContainer)
/* harmony export */ });
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lorem-ipsum */ "./node_modules/lorem-ipsum/dist/index.js");


function articleHeader(t) {
    let text = document.createElement('h1');
    text.className = "article-header";
    text.textContent = t;
    return text;
}

function headerBody() {
    const lorem = new lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__.LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
    });
    let text = document.createElement('p');
    text.textContent = lorem.generateParagraphs(1);
    return text;
}

function newContainer(t) {
    let container = document.createElement('div');
    container.className = "wrapper"
    container.appendChild(articleHeader(t));
    container.appendChild(headerBody());
    return container;
}



/***/ }),

/***/ "./src/components/cat-header.js":
/*!**************************************!*\
  !*** ./src/components/cat-header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newHeader": () => (/* binding */ newHeader)
/* harmony export */ });
function newHeader(text) {
    let header = document.createElement('h1');
    header.textContent = text;
    header.classList.add('menu-head');
    return header;
}



/***/ }),

/***/ "./src/components/content-remove.js":
/*!******************************************!*\
  !*** ./src/components/content-remove.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeContent": () => (/* binding */ removeContent)
/* harmony export */ });
function removeContent (ele) {
    while(ele.hasChildNodes()){
        ele.removeChild(ele.firstChild);
    }
    return;
}



/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showFooter": () => (/* binding */ showFooter)
/* harmony export */ });
function showFooter() {
    let div = document.createElement('div');

    div.classList.add('foot');
    div.textContent = "Website designed by: ";
    div.appendChild(createLink());
    return div;
}

function createLink() {
    let link = document.createElement('a');
    link.href = 'https://github.com/NMGVox';
    link.title="Github Link";
    let text = document.createTextNode("NMGVox"); 
    link.appendChild(text);
    return link;
}



/***/ }),

/***/ "./src/components/homepage-exclusive.js/title.js":
/*!*******************************************************!*\
  !*** ./src/components/homepage-exclusive.js/title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ title)
/* harmony export */ });
function title(text) {
    let title = document.createElement('h1');
    title.className = 'title';

    title.textContent = text;

    return title;
}

/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHome)
/* harmony export */ });
/* harmony import */ var _homepage_exclusive_js_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-exclusive.js/title.js */ "./src/components/homepage-exclusive.js/title.js");
/* harmony import */ var _article_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.js */ "./src/components/article.js");
/* harmony import */ var _content_remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-remove.js */ "./src/components/content-remove.js");




function showHome() {
    let main = document.querySelector('#mid');

    (0,_content_remove_js__WEBPACK_IMPORTED_MODULE_2__.removeContent)(main);

    main.appendChild((0,_homepage_exclusive_js_title_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Niko & Klonoa's Coffee Tavern"));
    main.appendChild((0,_article_js__WEBPACK_IMPORTED_MODULE_1__.newContainer)("GET READY TO SAY 'WAHOO!' WHEN YOU TASTE OUR BREW!"));
    main.appendChild((0,_article_js__WEBPACK_IMPORTED_MODULE_1__.newContainer)("OUR STORY!"));
    main.appendChild((0,_article_js__WEBPACK_IMPORTED_MODULE_1__.newContainer)("COME HANG WITH US!"));

    return main;
}

/***/ }),

/***/ "./src/components/menu-exlusive/display-item.js":
/*!******************************************************!*\
  !*** ./src/components/menu-exlusive/display-item.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newItem": () => (/* binding */ newItem)
/* harmony export */ });
function newItem(item) {
    let container = document.createElement('div');
    container.className = "item-container";
    let image = new Image;
    image.src = item.src;
    image.classList.add('item-image');
    let itemName = document.createElement('h2');
    itemName.className = "item-name";
    itemName.textContent = item.name;

    container.appendChild(image);
    container.appendChild(itemName);
    return container;
} 

/***/ }),

/***/ "./src/components/menu-exlusive/menu-category.js":
/*!*******************************************************!*\
  !*** ./src/components/menu-exlusive/menu-category.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newCat": () => (/* binding */ newCat)
/* harmony export */ });
/* harmony import */ var _display_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-item */ "./src/components/menu-exlusive/display-item.js");
/* harmony import */ var _cat_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cat-header */ "./src/components/cat-header.js");

 

function newCat (items, title) {
    let div = document.createElement('div');
    div.classList.add('cat-container');

    div.appendChild((0,_cat_header__WEBPACK_IMPORTED_MODULE_1__.newHeader)(title));

    let grid = document.createElement('div');
    grid.classList.add("item-grid");

    items.forEach(item => {
        grid.appendChild((0,_display_item__WEBPACK_IMPORTED_MODULE_0__.newItem)(item));
    });
    
    div.appendChild(grid);
    return div;
}



/***/ }),

/***/ "./src/components/menu-exlusive/menu-items.js":
/*!****************************************************!*\
  !*** ./src/components/menu-exlusive/menu-items.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dessert": () => (/* binding */ dessert),
/* harmony export */   "drinks": () => (/* binding */ drinks),
/* harmony export */   "food": () => (/* binding */ food)
/* harmony export */ });
/* harmony import */ var _images_espresso_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/espresso.jpg */ "./src/images/espresso.jpg");
/* harmony import */ var _images_pancake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/pancake.jpg */ "./src/images/pancake.jpg");
/* harmony import */ var _images_capp_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/capp.PNG */ "./src/images/capp.PNG");
/* harmony import */ var _images_klospecial_PNG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/klospecial.PNG */ "./src/images/klospecial.PNG");
/* harmony import */ var _images_steakeggs_PNG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/steakeggs.PNG */ "./src/images/steakeggs.PNG");
/* harmony import */ var _images_mocha_PNG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/mocha.PNG */ "./src/images/mocha.PNG");
/* harmony import */ var _images_darkvelvet_PNG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/darkvelvet.PNG */ "./src/images/darkvelvet.PNG");
/* harmony import */ var _images_sausbagel_PNG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/sausbagel.PNG */ "./src/images/sausbagel.PNG");
/* harmony import */ var _images_redvelvetcake_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/redvelvetcake.jpg */ "./src/images/redvelvetcake.jpg");
/* harmony import */ var _images_sugarcookie_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/sugarcookie.jpg */ "./src/images/sugarcookie.jpg");











let drinks = [
    {
        src: _images_mocha_PNG__WEBPACK_IMPORTED_MODULE_5__,
        name: "Niko's Starry Mocha"
    },
    {
        src: _images_darkvelvet_PNG__WEBPACK_IMPORTED_MODULE_6__,
        name: "Dark Velvet Brew"
    },
    {
        src: _images_espresso_jpg__WEBPACK_IMPORTED_MODULE_0__,
        name: "OneShot QuickShot Espresso"
    },
    {
        src: _images_capp_PNG__WEBPACK_IMPORTED_MODULE_2__,
        name: "Wahoo Cappuccino"
    }
]

let food = [
    {
        src: _images_pancake_jpg__WEBPACK_IMPORTED_MODULE_1__,
        name: "Chocolate Panacakes"
    },
    {
        src: _images_steakeggs_PNG__WEBPACK_IMPORTED_MODULE_4__,
        name: "Steak and Eggs"
    },
    {
        src: _images_sausbagel_PNG__WEBPACK_IMPORTED_MODULE_7__,
        name: "Sausage-Egg Bagel"
    },
]

let dessert = [
    {
        src: _images_sugarcookie_jpg__WEBPACK_IMPORTED_MODULE_9__,
        name: "Sugariest Cookie"
    },
    {
        src: _images_redvelvetcake_jpg__WEBPACK_IMPORTED_MODULE_8__,
        name: "Red Velvet Cake"
    },
    {
        src: _images_klospecial_PNG__WEBPACK_IMPORTED_MODULE_3__,
        name: "The Klonoa Special"
    },
]



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMenu": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _content_remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-remove.js */ "./src/components/content-remove.js");
/* harmony import */ var _menu_exlusive_menu_category_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-exlusive/menu-category.js */ "./src/components/menu-exlusive/menu-category.js");
/* harmony import */ var _menu_exlusive_menu_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-exlusive/menu-items.js */ "./src/components/menu-exlusive/menu-items.js");




function showMenu() {
    let main = document.querySelector('#mid')
    ;(0,_content_remove_js__WEBPACK_IMPORTED_MODULE_0__.removeContent)(main);
    
    let header = document.createElement('h1');
    header.textContent = "MENU";
    header.classList.add("title");
    main.appendChild(header);

    main.appendChild((0,_menu_exlusive_menu_category_js__WEBPACK_IMPORTED_MODULE_1__.newCat)(_menu_exlusive_menu_items_js__WEBPACK_IMPORTED_MODULE_2__.drinks, "DRINKS"));
    main.appendChild((0,_menu_exlusive_menu_category_js__WEBPACK_IMPORTED_MODULE_1__.newCat)(_menu_exlusive_menu_items_js__WEBPACK_IMPORTED_MODULE_2__.food, "FOOD"));
    main.appendChild((0,_menu_exlusive_menu_category_js__WEBPACK_IMPORTED_MODULE_1__.newCat)(_menu_exlusive_menu_items_js__WEBPACK_IMPORTED_MODULE_2__.dessert, "DESSERT"));
}



/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNav)
/* harmony export */ });
/* harmony import */ var _navitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navitem.js */ "./src/components/navitem.js");


function displayNav() {
    let navbar = document.createElement('div');
    navbar.className = "navbar";

    navbar.appendChild((0,_navitem_js__WEBPACK_IMPORTED_MODULE_0__.navItem)("Home"));
    navbar.appendChild((0,_navitem_js__WEBPACK_IMPORTED_MODULE_0__.navItem)("Menu"));
    navbar.appendChild((0,_navitem_js__WEBPACK_IMPORTED_MODULE_0__.navItem)("About"));

    return navbar;
}

/***/ }),

/***/ "./src/components/navitem.js":
/*!***********************************!*\
  !*** ./src/components/navitem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItem": () => (/* binding */ navItem)
/* harmony export */ });
function navItem(text) {
    let item = document.createElement('div');
    item.textContent = text;
    item.id = text;
    item.classList.add("navItem");

    return item;
}



/***/ }),

/***/ "./src/fonts/CroissantOne-Regular.otf":
/*!********************************************!*\
  !*** ./src/fonts/CroissantOne-Regular.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "426bbd6f3affefa7200c.otf";

/***/ }),

/***/ "./src/images/capp.PNG":
/*!*****************************!*\
  !*** ./src/images/capp.PNG ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18f16872c41aad6ec2bf.PNG";

/***/ }),

/***/ "./src/images/coffeestuff.jpg":
/*!************************************!*\
  !*** ./src/images/coffeestuff.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1939b3774ba2e23da0ac.jpg";

/***/ }),

/***/ "./src/images/darkvelvet.PNG":
/*!***********************************!*\
  !*** ./src/images/darkvelvet.PNG ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4879a4d862b128f042ab.PNG";

/***/ }),

/***/ "./src/images/espresso.jpg":
/*!*********************************!*\
  !*** ./src/images/espresso.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59f76e78bc8e25f0f379.jpg";

/***/ }),

/***/ "./src/images/klonoa.png":
/*!*******************************!*\
  !*** ./src/images/klonoa.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdd085420790f3c55b71.png";

/***/ }),

/***/ "./src/images/klospecial.PNG":
/*!***********************************!*\
  !*** ./src/images/klospecial.PNG ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bd305c3a9a7d9a4f272.PNG";

/***/ }),

/***/ "./src/images/mocha.PNG":
/*!******************************!*\
  !*** ./src/images/mocha.PNG ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6fbe4449734b4328697.PNG";

/***/ }),

/***/ "./src/images/niko.png":
/*!*****************************!*\
  !*** ./src/images/niko.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae35d7a9272503ef2429.png";

/***/ }),

/***/ "./src/images/pancake.jpg":
/*!********************************!*\
  !*** ./src/images/pancake.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "983e6080a790d54b1a38.jpg";

/***/ }),

/***/ "./src/images/redvelvetcake.jpg":
/*!**************************************!*\
  !*** ./src/images/redvelvetcake.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2264bb3417950f6ec4de.jpg";

/***/ }),

/***/ "./src/images/sausbagel.PNG":
/*!**********************************!*\
  !*** ./src/images/sausbagel.PNG ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7127ac1242664edcd3de.PNG";

/***/ }),

/***/ "./src/images/steakeggs.PNG":
/*!**********************************!*\
  !*** ./src/images/steakeggs.PNG ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2a789d8d200ae460937.PNG";

/***/ }),

/***/ "./src/images/sugarcookie.jpg":
/*!************************************!*\
  !*** ./src/images/sugarcookie.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9282ee92b37760318303.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar.js */ "./src/components/navbar.js");
/* harmony import */ var _components_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage.js */ "./src/components/homepage.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.js */ "./src/components/footer.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about.js */ "./src/components/about.js");







function showDefault() {
    document.querySelector('body').appendChild((0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

    let div = document.createElement('div');
    div.id = 'mid';
    document.querySelector('body').appendChild(div);
    document.querySelector('body').appendChild((0,_components_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    document.querySelector('body').appendChild((0,_components_footer_js__WEBPACK_IMPORTED_MODULE_3__.showFooter)());

    document.querySelector('#Menu').addEventListener('pointerdown', _components_menu_js__WEBPACK_IMPORTED_MODULE_4__.showMenu);
    document.querySelector('#Home').addEventListener('pointerdown', _components_homepage_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    document.querySelector('#About').addEventListener('pointerdown', _components_about_js__WEBPACK_IMPORTED_MODULE_5__.showAbout);
}
//document.querySelector('body').appendChild(showHome());

window.addEventListener('load', showDefault);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ0E7QUFDSTtBQUNKO0FBQ0U7O0FBRWxEO0FBQ0EsK0NBQStDLGlFQUFVOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUVBQVE7QUFDdkQsK0NBQStDLGlFQUFVOztBQUV6RCxvRUFBb0UseURBQVE7QUFDNUUsb0VBQW9FLCtEQUFRO0FBQzVFLHFFQUFxRSwyREFBUztBQUM5RTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2xpbmVFbmRpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy9wbGF0Zm9ybXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3VuaXRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy93b3Jkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvTG9yZW1JcHN1bS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNOb2RlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNSZWFjdE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2lzV2luZG93cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL21ha2VBcnJheU9mTGVuZ3RoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZTdHJpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kYXRhL2tsb25vYS50eHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RhdGEvbmlrby50eHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtZXhjbHVzaXZlL2Rlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtZXhjbHVzaXZlL2Rpc3BsYXktaG91cnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtZXhjbHVzaXZlL2hvdXJzLWluZm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQtZXhjbHVzaXZlL21ha2VUYWJsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NhdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC1yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWVwYWdlLWV4Y2x1c2l2ZS5qcy90aXRsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LWV4bHVzaXZlL2Rpc3BsYXktaXRlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LWV4bHVzaXZlL21lbnUtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS1leGx1c2l2ZS9tZW51LWl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdml0ZW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JvaXNzYW50T25lLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29mZmVlc3R1ZmYuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2Nyb3NzYWludC1vbmUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogb3ZlcmZsb3cteDpoaWRkZW47ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGdhcDogNXZ3O1xcbiAgICBwYWRkaW5nOiAwIDEwdnc7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG4gICAgei1pbmRleDogNDtcXG59XFxuXFxuLm5hdkl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdjcm9zc2FpbnQtb25lJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdkl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuI21pZCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNTQxKTtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgICB3aWR0aDo1NSU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1mYW1pbHk6ICdjcm9zc2FpbnQtb25lJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBjb2xvcjogcmdiYSgyMiwgNSwgMywgMC44OTcpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiA2cHg7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCA5MCwgOTAsIDAuNTk2KTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjIsIDUsIDMsIDAuODk3KTs7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbig3JSAwLCAxMDAlIDAsIDkxJSAxMDAlLCAwJSAxMDAlKTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcnRpY2xlLWhlYWRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY3Jvc3NhaW50LW9uZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNhdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2F0LWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNjcxKTtcXG59XFxuXFxuLm1lbnUtaGVhZCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY3Jvc3NhaW50LW9uZSc7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiA2cHg7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjMpO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uaXRlbS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MiUgNDIlO1xcbiAgICBncmlkLWF1dG8tcm93czogMjV2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41OTYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBnYXA6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU4LCA5OCwgODAsIDAuNzA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSg5OSwgNjIsIDUxLCAwLjU0MSk7XFxufVxcblxcbi5pdGVtLWltYWdlIHtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5hYm91dC13cmFwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjU5Nik7XFxufVxcblxcbi5iaW8tbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wb3J0cmFpdCB7XFxuICAgIGZsb2F0OmxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6YXV0bztcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAxMDksIDEwOSwgMC41NTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRhYmxlIHRyOm50aC1jaGlsZCgybiksIHRoZWFkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjU5Nik7O1xcbn1cXG5cXG50ZCB7XFxuICAgIHBhZGRpbmc6IDhweCA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42NDQpO1xcbn1cXG5cXG50aGVhZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUEsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLE1BQU07SUFDTixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkNBQTZDO0lBQzdDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNENBQTRDO0lBQzVDLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsK0NBQStDO0lBQy9DLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLDRDQUE0QztJQUM1QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY3Jvc3NhaW50LW9uZSc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0Nyb2lzc2FudE9uZS1SZWd1bGFyLm90ZicpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIC8qIG92ZXJmbG93LXg6aGlkZGVuOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2NvZmZlZXN0dWZmLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBnYXA6IDV2dztcXG4gICAgcGFkZGluZzogMCAxMHZ3O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjY3MSk7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcblxcbi5uYXZJdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnY3Jvc3NhaW50LW9uZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbiNtaWQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjU0MSk7XFxuICAgIG1pbi1oZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6NTUlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnY3Jvc3NhaW50LW9uZScsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgY29sb3I6IHJnYmEoMjIsIDUsIDMsIDAuODk3KTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogNnB4O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgOTAsIDkwLCAwLjU5Nik7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyLCA1LCAzLCAwLjg5Nyk7O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNyUgMCwgMTAwJSAwLCA5MSUgMTAwJSwgMCUgMTAwJSk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXJ0aWNsZS1oZWFkZXIge1xcbiAgICBmb250LWZhbWlseTogJ2Nyb3NzYWludC1vbmUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbnAge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvb3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjY3MSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jYXQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhdC1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjY3MSk7XFxufVxcblxcbi5tZW51LWhlYWQge1xcbiAgICBmb250LWZhbWlseTogJ2Nyb3NzYWludC1vbmUnO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogNnB4O1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYzKTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLml0ZW0tZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDIlIDQyJTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDI1dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNTk2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgOTgsIDgwLCAwLjcwNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAydmg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoOTksIDYyLCA1MSwgMC41NDEpO1xcbn1cXG5cXG4uaXRlbS1pbWFnZSB7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICB3aWR0aDphdXRvO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uYWJvdXQtd3JhcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41OTYpO1xcbn1cXG5cXG4uYmlvLW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucG9ydHJhaXQge1xcbiAgICBmbG9hdDpsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOmF1dG87XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43MDUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwOSwgMTA5LCAxMDksIDAuNTU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxudGFibGUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50YWJsZSB0cjpudGgtY2hpbGQoMm4pLCB0aGVhZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41OTYpOztcXG59XFxuXFxudGQge1xcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNjQ0KTtcXG59XFxuXFxudGhlYWQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gZXhwb3J0cy5GT1JNQVRfSFRNTCA9IGV4cG9ydHMuRk9STUFUUyA9IHZvaWQgMDtcbnZhciBGT1JNQVRfSFRNTCA9IFwiaHRtbFwiO1xuZXhwb3J0cy5GT1JNQVRfSFRNTCA9IEZPUk1BVF9IVE1MO1xudmFyIEZPUk1BVF9QTEFJTiA9IFwicGxhaW5cIjtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gRk9STUFUX1BMQUlOO1xudmFyIEZPUk1BVFMgPSBbRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTl07XG5leHBvcnRzLkZPUk1BVFMgPSBGT1JNQVRTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpHVDFKTlFWUmZTRlJOVENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSWtaUFVrMUJWRk1pWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZMjl1YzNSaGJuUnpMMlp2Y20xaGRITXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdOdmJuTjBJRVpQVWsxQlZGOUlWRTFNSUQwZ1hDSm9kRzFzWENJN1hISmNibVY0Y0c5eWRDQmpiMjV6ZENCR1QxSk5RVlJmVUV4QlNVNGdQU0JjSW5Cc1lXbHVYQ0k3WEhKY2JtVjRjRzl5ZENCamIyNXpkQ0JHVDFKTlFWUlRJRDBnVzBaUFVrMUJWRjlJVkUxTUxDQkdUMUpOUVZSZlVFeEJTVTVkTzF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JNYjNKbGJVWnZjbTFoZENBOUlGd2ljR3hoYVc1Y0lpQjhJRndpYUhSdGJGd2lPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZQTEVsQlFVMUJMRmRCUVZjc1IwRkJSeXhOUVVGd1FqczdRVUZEUVN4SlFVRk5ReXhaUVVGWkxFZEJRVWNzVDBGQmNrSTdPMEZCUTBFc1NVRkJUVU1zVDBGQlR5eEhRVUZITEVOQlFVTkdMRmRCUVVRc1JVRkJZME1zV1VGQlpDeERRVUZvUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MSU5FX0VORElOR1MgPSB2b2lkIDA7XG52YXIgTElORV9FTkRJTkdTID0ge1xuICBQT1NJWDogXCJcXG5cIixcbiAgV0lOMzI6IFwiXFxyXFxuXCJcbn07XG5leHBvcnRzLkxJTkVfRU5ESU5HUyA9IExJTkVfRU5ESU5HUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKTVNVNUZYMFZPUkVsT1IxTWlMQ0pRVDFOSldDSXNJbGRKVGpNeUlsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJOdmJuTjBZVzUwY3k5c2FXNWxSVzVrYVc1bmN5NTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdURWxPUlY5RlRrUkpUa2RUSUQwZ2UxeHlYRzRnSUZCUFUwbFlPaUJjSWx4Y2Jsd2lMRnh5WEc0Z0lGZEpUak15T2lCY0lseGNjbHhjYmx3aUxGeHlYRzU5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGUExFbEJRVTFCTEZsQlFWa3NSMEZCUnp0RlFVTXhRa01zUzBGQlN5eEZRVUZGTEVsQlJHMUNPMFZCUlRGQ1F5eExRVUZMTEVWQlFVVTdRVUZHYlVJc1EwRkJja0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TVVBQT1JURURfUExBVEZPUk1TID0gdm9pZCAwO1xudmFyIFNVUFBPUlRFRF9QTEFURk9STVMgPSB7XG4gIERBUldJTjogXCJkYXJ3aW5cIixcbiAgTElOVVg6IFwibGludXhcIixcbiAgV0lOMzI6IFwid2luMzJcIlxufTtcbmV4cG9ydHMuU1VQUE9SVEVEX1BMQVRGT1JNUyA9IFNVUFBPUlRFRF9QTEFURk9STVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJaXdpUkVGU1YwbE9JaXdpVEVsT1ZWZ2lMQ0pYU1U0ek1pSmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmNHeGhkR1p2Y20xekxuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJRDBnZTF4eVhHNGdJRVJCVWxkSlRqb2dYQ0prWVhKM2FXNWNJaXhjY2x4dUlDQk1TVTVWV0RvZ1hDSnNhVzUxZUZ3aUxGeHlYRzRnSUZkSlRqTXlPaUJjSW5kcGJqTXlYQ0lzWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVThzU1VGQlRVRXNiVUpCUVcxQ0xFZEJRVWM3UlVGRGFrTkRMRTFCUVUwc1JVRkJSU3hSUVVSNVFqdEZRVVZxUTBNc1MwRkJTeXhGUVVGRkxFOUJSakJDTzBWQlIycERReXhMUVVGTExFVkJRVVU3UVVGSU1FSXNRMEZCTlVJaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IGV4cG9ydHMuVU5JVF9XT1JEID0gZXhwb3J0cy5VTklUX1NFTlRFTkNFUyA9IGV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IGV4cG9ydHMuVU5JVF9QQVJBR1JBUEhTID0gZXhwb3J0cy5VTklUX1BBUkFHUkFQSCA9IGV4cG9ydHMuVU5JVFMgPSB2b2lkIDA7XG52YXIgVU5JVF9XT1JEUyA9IFwid29yZHNcIjtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IFVOSVRfV09SRFM7XG52YXIgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnRzLlVOSVRfV09SRCA9IFVOSVRfV09SRDtcbnZhciBVTklUX1NFTlRFTkNFUyA9IFwic2VudGVuY2VzXCI7XG5leHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gVU5JVF9TRU5URU5DRVM7XG52YXIgVU5JVF9TRU5URU5DRSA9IFwic2VudGVuY2VcIjtcbmV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IFVOSVRfU0VOVEVOQ0U7XG52YXIgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIUyA9IFVOSVRfUEFSQUdSQVBIUztcbnZhciBVTklUX1BBUkFHUkFQSCA9IFwicGFyYWdyYXBoXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gVU5JVF9QQVJBR1JBUEg7XG52YXIgVU5JVFMgPSBbVU5JVF9XT1JEUywgVU5JVF9XT1JELCBVTklUX1NFTlRFTkNFUywgVU5JVF9TRU5URU5DRSwgVU5JVF9QQVJBR1JBUEhTLCBVTklUX1BBUkFHUkFQSF07XG5leHBvcnRzLlVOSVRTID0gVU5JVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlZUa2xVWDFkUFVrUlRJaXdpVlU1SlZGOVhUMUpFSWl3aVZVNUpWRjlUUlU1VVJVNURSVk1pTENKVlRrbFVYMU5GVGxSRlRrTkZJaXdpVlU1SlZGOVFRVkpCUjFKQlVFaFRJaXdpVlU1SlZGOVFRVkpCUjFKQlVFZ2lMQ0pWVGtsVVV5SmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmRXNXBkSE11ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHTnZibk4wSUZWT1NWUmZWMDlTUkZNZ1BTQmNJbmR2Y21SelhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlYVDFKRUlEMGdYQ0ozYjNKa1hDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlUUlU1VVJVNURSVk1nUFNCY0luTmxiblJsYm1ObGMxd2lPMXh1Wlhod2IzSjBJR052Ym5OMElGVk9TVlJmVTBWT1ZFVk9RMFVnUFNCY0luTmxiblJsYm1ObFhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlRUVZKQlIxSkJVRWhUSUQwZ1hDSndZWEpoWjNKaGNHaHpYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5UVFWSkJSMUpCVUVnZ1BTQmNJbkJoY21GbmNtRndhRndpTzF4dVpYaHdiM0owSUdOdmJuTjBJRlZPU1ZSVElEMGdXMXh1SUNCVlRrbFVYMWRQVWtSVExGeHVJQ0JWVGtsVVgxZFBVa1FzWEc0Z0lGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4dUlDQlZUa2xVWDFORlRsUkZUa05GTEZ4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hHNGdJRlZPU1ZSZlVFRlNRVWRTUVZCSUxGeHVYVHRjYm1WNGNHOXlkQ0IwZVhCbElFeHZjbVZ0Vlc1cGRDQTlJRndpZDI5eVpITmNJaUI4SUZ3aWQyOXlaRndpSUh3Z1hDSnpaVzUwWlc1alpYTmNJaUI4SUZ3aWMyVnVkR1Z1WTJWY0lpQjhJRndpY0dGeVlXZHlZWEJvYzF3aUlId2dYQ0p3WVhKaFozSmhjR2hjSWp0Y2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVU4c1NVRkJUVUVzVlVGQlZTeEhRVUZITEU5QlFXNUNPenRCUVVOQkxFbEJRVTFETEZOQlFWTXNSMEZCUnl4TlFVRnNRanM3UVVGRFFTeEpRVUZOUXl4alFVRmpMRWRCUVVjc1YwRkJka0k3TzBGQlEwRXNTVUZCVFVNc1lVRkJZU3hIUVVGSExGVkJRWFJDT3p0QlFVTkJMRWxCUVUxRExHVkJRV1VzUjBGQlJ5eFpRVUY0UWpzN1FVRkRRU3hKUVVGTlF5eGpRVUZqTEVkQlFVY3NWMEZCZGtJN08wRkJRMEVzU1VGQlRVTXNTMEZCU3l4SFFVRkhMRU5CUTI1Q1RpeFZRVVJ0UWl4RlFVVnVRa01zVTBGR2JVSXNSVUZIYmtKRExHTkJTRzFDTEVWQlNXNUNReXhoUVVwdFFpeEZRVXR1UWtNc1pVRk1iVUlzUlVGTmJrSkRMR05CVG0xQ0xFTkJRV1FpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XT1JEUyA9IHZvaWQgMDtcbnZhciBXT1JEUyA9IFtcImFkXCIsIFwiYWRpcGlzaWNpbmdcIiwgXCJhbGlxdWFcIiwgXCJhbGlxdWlwXCIsIFwiYW1ldFwiLCBcImFuaW1cIiwgXCJhdXRlXCIsIFwiY2lsbHVtXCIsIFwiY29tbW9kb1wiLCBcImNvbnNlY3RldHVyXCIsIFwiY29uc2VxdWF0XCIsIFwiY3VscGFcIiwgXCJjdXBpZGF0YXRcIiwgXCJkZXNlcnVudFwiLCBcImRvXCIsIFwiZG9sb3JcIiwgXCJkb2xvcmVcIiwgXCJkdWlzXCIsIFwiZWFcIiwgXCJlaXVzbW9kXCIsIFwiZWxpdFwiLCBcImVuaW1cIiwgXCJlc3NlXCIsIFwiZXN0XCIsIFwiZXRcIiwgXCJldVwiLCBcImV4XCIsIFwiZXhjZXB0ZXVyXCIsIFwiZXhlcmNpdGF0aW9uXCIsIFwiZnVnaWF0XCIsIFwiaWRcIiwgXCJpblwiLCBcImluY2lkaWR1bnRcIiwgXCJpcHN1bVwiLCBcImlydXJlXCIsIFwibGFib3JlXCIsIFwibGFib3Jpc1wiLCBcImxhYm9ydW1cIiwgXCJMb3JlbVwiLCBcIm1hZ25hXCIsIFwibWluaW1cIiwgXCJtb2xsaXRcIiwgXCJuaXNpXCIsIFwibm9uXCIsIFwibm9zdHJ1ZFwiLCBcIm51bGxhXCIsIFwib2NjYWVjYXRcIiwgXCJvZmZpY2lhXCIsIFwicGFyaWF0dXJcIiwgXCJwcm9pZGVudFwiLCBcInF1aVwiLCBcInF1aXNcIiwgXCJyZXByZWhlbmRlcml0XCIsIFwic2ludFwiLCBcInNpdFwiLCBcInN1bnRcIiwgXCJ0ZW1wb3JcIiwgXCJ1bGxhbWNvXCIsIFwidXRcIiwgXCJ2ZWxpdFwiLCBcInZlbmlhbVwiLCBcInZvbHVwdGF0ZVwiXTtcbmV4cG9ydHMuV09SRFMgPSBXT1JEUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKWFQxSkVVeUpkTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjV6ZEdGdWRITXZkMjl5WkhNdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElGZFBVa1JUSUQwZ1cxeHlYRzRnSUZ3aVlXUmNJaXhjY2x4dUlDQmNJbUZrYVhCcGMybGphVzVuWENJc1hISmNiaUFnWENKaGJHbHhkV0ZjSWl4Y2NseHVJQ0JjSW1Gc2FYRjFhWEJjSWl4Y2NseHVJQ0JjSW1GdFpYUmNJaXhjY2x4dUlDQmNJbUZ1YVcxY0lpeGNjbHh1SUNCY0ltRjFkR1ZjSWl4Y2NseHVJQ0JjSW1OcGJHeDFiVndpTEZ4eVhHNGdJRndpWTI5dGJXOWtiMXdpTEZ4eVhHNGdJRndpWTI5dWMyVmpkR1YwZFhKY0lpeGNjbHh1SUNCY0ltTnZibk5sY1hWaGRGd2lMRnh5WEc0Z0lGd2lZM1ZzY0dGY0lpeGNjbHh1SUNCY0ltTjFjR2xrWVhSaGRGd2lMRnh5WEc0Z0lGd2laR1Z6WlhKMWJuUmNJaXhjY2x4dUlDQmNJbVJ2WENJc1hISmNiaUFnWENKa2IyeHZjbHdpTEZ4eVhHNGdJRndpWkc5c2IzSmxYQ0lzWEhKY2JpQWdYQ0prZFdselhDSXNYSEpjYmlBZ1hDSmxZVndpTEZ4eVhHNGdJRndpWldsMWMyMXZaRndpTEZ4eVhHNGdJRndpWld4cGRGd2lMRnh5WEc0Z0lGd2laVzVwYlZ3aUxGeHlYRzRnSUZ3aVpYTnpaVndpTEZ4eVhHNGdJRndpWlhOMFhDSXNYSEpjYmlBZ1hDSmxkRndpTEZ4eVhHNGdJRndpWlhWY0lpeGNjbHh1SUNCY0ltVjRYQ0lzWEhKY2JpQWdYQ0psZUdObGNIUmxkWEpjSWl4Y2NseHVJQ0JjSW1WNFpYSmphWFJoZEdsdmJsd2lMRnh5WEc0Z0lGd2lablZuYVdGMFhDSXNYSEpjYmlBZ1hDSnBaRndpTEZ4eVhHNGdJRndpYVc1Y0lpeGNjbHh1SUNCY0ltbHVZMmxrYVdSMWJuUmNJaXhjY2x4dUlDQmNJbWx3YzNWdFhDSXNYSEpjYmlBZ1hDSnBjblZ5WlZ3aUxGeHlYRzRnSUZ3aWJHRmliM0psWENJc1hISmNiaUFnWENKc1lXSnZjbWx6WENJc1hISmNiaUFnWENKc1lXSnZjblZ0WENJc1hISmNiaUFnWENKTWIzSmxiVndpTEZ4eVhHNGdJRndpYldGbmJtRmNJaXhjY2x4dUlDQmNJbTFwYm1sdFhDSXNYSEpjYmlBZ1hDSnRiMnhzYVhSY0lpeGNjbHh1SUNCY0ltNXBjMmxjSWl4Y2NseHVJQ0JjSW01dmJsd2lMRnh5WEc0Z0lGd2libTl6ZEhKMVpGd2lMRnh5WEc0Z0lGd2liblZzYkdGY0lpeGNjbHh1SUNCY0ltOWpZMkZsWTJGMFhDSXNYSEpjYmlBZ1hDSnZabVpwWTJsaFhDSXNYSEpjYmlBZ1hDSndZWEpwWVhSMWNsd2lMRnh5WEc0Z0lGd2ljSEp2YVdSbGJuUmNJaXhjY2x4dUlDQmNJbkYxYVZ3aUxGeHlYRzRnSUZ3aWNYVnBjMXdpTEZ4eVhHNGdJRndpY21Wd2NtVm9aVzVrWlhKcGRGd2lMRnh5WEc0Z0lGd2ljMmx1ZEZ3aUxGeHlYRzRnSUZ3aWMybDBYQ0lzWEhKY2JpQWdYQ0p6ZFc1MFhDSXNYSEpjYmlBZ1hDSjBaVzF3YjNKY0lpeGNjbHh1SUNCY0luVnNiR0Z0WTI5Y0lpeGNjbHh1SUNCY0luVjBYQ0lzWEhKY2JpQWdYQ0oyWld4cGRGd2lMRnh5WEc0Z0lGd2lkbVZ1YVdGdFhDSXNYSEpjYmlBZ1hDSjJiMngxY0hSaGRHVmNJaXhjY2x4dVhUdGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJUeXhKUVVGTlFTeExRVUZMTEVkQlFVY3NRMEZEYmtJc1NVRkViVUlzUlVGRmJrSXNZVUZHYlVJc1JVRkhia0lzVVVGSWJVSXNSVUZKYmtJc1UwRktiVUlzUlVGTGJrSXNUVUZNYlVJc1JVRk5ia0lzVFVGT2JVSXNSVUZQYmtJc1RVRlFiVUlzUlVGUmJrSXNVVUZTYlVJc1JVRlRia0lzVTBGVWJVSXNSVUZWYmtJc1lVRldiVUlzUlVGWGJrSXNWMEZZYlVJc1JVRlpia0lzVDBGYWJVSXNSVUZoYmtJc1YwRmliVUlzUlVGamJrSXNWVUZrYlVJc1JVRmxia0lzU1VGbWJVSXNSVUZuUW01Q0xFOUJhRUp0UWl4RlFXbENia0lzVVVGcVFtMUNMRVZCYTBKdVFpeE5RV3hDYlVJc1JVRnRRbTVDTEVsQmJrSnRRaXhGUVc5Q2JrSXNVMEZ3UW0xQ0xFVkJjVUp1UWl4TlFYSkNiVUlzUlVGelFtNUNMRTFCZEVKdFFpeEZRWFZDYmtJc1RVRjJRbTFDTEVWQmQwSnVRaXhMUVhoQ2JVSXNSVUY1UW01Q0xFbEJla0p0UWl4RlFUQkNia0lzU1VFeFFtMUNMRVZCTWtKdVFpeEpRVE5DYlVJc1JVRTBRbTVDTEZkQk5VSnRRaXhGUVRaQ2JrSXNZMEUzUW0xQ0xFVkJPRUp1UWl4UlFUbENiVUlzUlVFclFtNUNMRWxCTDBKdFFpeEZRV2REYmtJc1NVRm9RMjFDTEVWQmFVTnVRaXhaUVdwRGJVSXNSVUZyUTI1Q0xFOUJiRU50UWl4RlFXMURia0lzVDBGdVEyMUNMRVZCYjBOdVFpeFJRWEJEYlVJc1JVRnhRMjVDTEZOQmNrTnRRaXhGUVhORGJrSXNVMEYwUTIxQ0xFVkJkVU51UWl4UFFYWkRiVUlzUlVGM1EyNUNMRTlCZUVOdFFpeEZRWGxEYmtJc1QwRjZRMjFDTEVWQk1FTnVRaXhSUVRGRGJVSXNSVUV5UTI1Q0xFMUJNME50UWl4RlFUUkRia0lzUzBFMVEyMUNMRVZCTmtOdVFpeFRRVGREYlVJc1JVRTRRMjVDTEU5Qk9VTnRRaXhGUVN0RGJrSXNWVUV2UTIxQ0xFVkJaMFJ1UWl4VFFXaEViVUlzUlVGcFJHNUNMRlZCYWtSdFFpeEZRV3RFYmtJc1ZVRnNSRzFDTEVWQmJVUnVRaXhMUVc1RWJVSXNSVUZ2Ukc1Q0xFMUJjRVJ0UWl4RlFYRkVia0lzWlVGeVJHMUNMRVZCYzBSdVFpeE5RWFJFYlVJc1JVRjFSRzVDTEV0QmRrUnRRaXhGUVhkRWJrSXNUVUY0UkcxQ0xFVkJlVVJ1UWl4UlFYcEViVUlzUlVFd1JHNUNMRk5CTVVSdFFpeEZRVEpFYmtJc1NVRXpSRzFDTEVWQk5FUnVRaXhQUVRWRWJVSXNSVUUyUkc1Q0xGRkJOMFJ0UWl4RlFUaEVia0lzVjBFNVJHMUNMRU5CUVdRaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvcmVtSXBzdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvcmVtSXBzdW1bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHMubG9yZW1JcHN1bSA9IHZvaWQgMDtcblxudmFyIF9mb3JtYXRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2Zvcm1hdHNcIik7XG5cbnZhciBfdW5pdHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvdW5pdHNcIik7XG5cbnZhciBfd29yZHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfTG9yZW1JcHN1bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL0xvcmVtSXBzdW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGxvcmVtSXBzdW0gPSBmdW5jdGlvbiBsb3JlbUlwc3VtKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9yZWYkY291bnQsXG4gICAgICBfcmVmJGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZiRmb3JtYXQgPT09IHZvaWQgMCA/IF9mb3JtYXRzLkZPUk1BVF9QTEFJTiA6IF9yZWYkZm9ybWF0LFxuICAgICAgX3JlZiRwYXJhZ3JhcGhMb3dlckJvID0gX3JlZi5wYXJhZ3JhcGhMb3dlckJvdW5kLFxuICAgICAgcGFyYWdyYXBoTG93ZXJCb3VuZCA9IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyA9PT0gdm9pZCAwID8gMyA6IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyxcbiAgICAgIF9yZWYkcGFyYWdyYXBoVXBwZXJCbyA9IF9yZWYucGFyYWdyYXBoVXBwZXJCb3VuZCxcbiAgICAgIHBhcmFncmFwaFVwcGVyQm91bmQgPSBfcmVmJHBhcmFncmFwaFVwcGVyQm8gPT09IHZvaWQgMCA/IDcgOiBfcmVmJHBhcmFncmFwaFVwcGVyQm8sXG4gICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgIF9yZWYkc2VudGVuY2VMb3dlckJvdSA9IF9yZWYuc2VudGVuY2VMb3dlckJvdW5kLFxuICAgICAgc2VudGVuY2VMb3dlckJvdW5kID0gX3JlZiRzZW50ZW5jZUxvd2VyQm91ID09PSB2b2lkIDAgPyA1IDogX3JlZiRzZW50ZW5jZUxvd2VyQm91LFxuICAgICAgX3JlZiRzZW50ZW5jZVVwcGVyQm91ID0gX3JlZi5zZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBzZW50ZW5jZVVwcGVyQm91bmQgPSBfcmVmJHNlbnRlbmNlVXBwZXJCb3UgPT09IHZvaWQgMCA/IDE1IDogX3JlZiRzZW50ZW5jZVVwcGVyQm91LFxuICAgICAgX3JlZiR1bml0cyA9IF9yZWYudW5pdHMsXG4gICAgICB1bml0cyA9IF9yZWYkdW5pdHMgPT09IHZvaWQgMCA/IF91bml0cy5VTklUX1NFTlRFTkNFUyA6IF9yZWYkdW5pdHMsXG4gICAgICBfcmVmJHdvcmRzID0gX3JlZi53b3JkcyxcbiAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcyxcbiAgICAgIF9yZWYkc3VmZml4ID0gX3JlZi5zdWZmaXgsXG4gICAgICBzdWZmaXggPSBfcmVmJHN1ZmZpeCA9PT0gdm9pZCAwID8gXCJcIiA6IF9yZWYkc3VmZml4O1xuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xuICAgICAgbWF4OiBwYXJhZ3JhcGhVcHBlckJvdW5kLFxuICAgICAgbWluOiBwYXJhZ3JhcGhMb3dlckJvdW5kXG4gICAgfSxcbiAgICB3b3Jkczogd29yZHMsXG4gICAgd29yZHNQZXJTZW50ZW5jZToge1xuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBtaW46IHNlbnRlbmNlTG93ZXJCb3VuZFxuICAgIH1cbiAgfTtcbiAgdmFyIGxvcmVtID0gbmV3IF9Mb3JlbUlwc3VtW1wiZGVmYXVsdFwiXShvcHRpb25zLCBmb3JtYXQsIHN1ZmZpeCk7XG5cbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgX3VuaXRzLlVOSVRfUEFSQUdSQVBIUzpcbiAgICBjYXNlIF91bml0cy5VTklUX1BBUkFHUkFQSDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVBhcmFncmFwaHMoY291bnQpO1xuXG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRVM6XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRTpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XG5cbiAgICBjYXNlIF91bml0cy5VTklUX1dPUkRTOlxuICAgIGNhc2UgX3VuaXRzLlVOSVRfV09SRDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVdvcmRzKGNvdW50KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufTtcblxuZXhwb3J0cy5sb3JlbUlwc3VtID0gbG9yZW1JcHN1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKc2IzSmxiVWx3YzNWdElpd2lZMjkxYm5RaUxDSm1iM0p0WVhRaUxDSkdUMUpOUVZSZlVFeEJTVTRpTENKd1lYSmhaM0poY0doTWIzZGxja0p2ZFc1a0lpd2ljR0Z5WVdkeVlYQm9WWEJ3WlhKQ2IzVnVaQ0lzSW5KaGJtUnZiU0lzSW5ObGJuUmxibU5sVEc5M1pYSkNiM1Z1WkNJc0luTmxiblJsYm1ObFZYQndaWEpDYjNWdVpDSXNJblZ1YVhSeklpd2lWVTVKVkY5VFJVNVVSVTVEUlZNaUxDSjNiM0prY3lJc0lsZFBVa1JUSWl3aWMzVm1abWw0SWl3aWIzQjBhVzl1Y3lJc0luTmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhQ0lzSW0xaGVDSXNJbTFwYmlJc0luZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVaUxDSnNiM0psYlNJc0lreHZjbVZ0U1hCemRXMGlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNGTWlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNDSXNJbWRsYm1WeVlYUmxVR0Z5WVdkeVlYQm9jeUlzSWxWT1NWUmZVMFZPVkVWT1EwVWlMQ0puWlc1bGNtRjBaVk5sYm5SbGJtTmxjeUlzSWxWT1NWUmZWMDlTUkZNaUxDSlZUa2xVWDFkUFVrUWlMQ0puWlc1bGNtRjBaVmR2Y21SeklsMHNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMmx1WkdWNExuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUV4dmNtVnRSbTl5YldGMExDQkdUMUpOUVZSZlVFeEJTVTRnZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdlptOXliV0YwYzF3aU8xeHlYRzVwYlhCdmNuUWdlMXh5WEc0Z0lFeHZjbVZ0Vlc1cGRDeGNjbHh1SUNCVlRrbFVYMUJCVWtGSFVrRlFTQ3hjY2x4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hISmNiaUFnVlU1SlZGOVRSVTVVUlU1RFJWTXNYSEpjYmlBZ1ZVNUpWRjlUUlU1VVJVNURSU3hjY2x4dUlDQlZUa2xVWDFkUFVrUlRMRnh5WEc0Z0lGVk9TVlJmVjA5U1JDeGNjbHh1ZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdmRXNXBkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dWMDlTUkZNZ2ZTQm1jbTl0SUZ3aUxpOWpiMjV6ZEdGdWRITXZkMjl5WkhOY0lqdGNjbHh1YVcxd2IzSjBJSHNnU1ZCeWJtY2dmU0JtY205dElGd2lMaTlzYVdJdloyVnVaWEpoZEc5eVhDSTdYSEpjYm1sdGNHOXlkQ0JNYjNKbGJVbHdjM1Z0SUdaeWIyMGdYQ0l1TDJ4cFlpOU1iM0psYlVsd2MzVnRYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxNYjNKbGJVbHdjM1Z0VUdGeVlXMXpJSHRjY2x4dUlDQmpiM1Z1ZEQ4NklHNTFiV0psY2p0Y2NseHVJQ0JtYjNKdFlYUS9PaUJNYjNKbGJVWnZjbTFoZER0Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVEvT2lCdWRXMWlaWEk3WEhKY2JpQWdjbUZ1Wkc5dFB6b2dTVkJ5Ym1jN1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSE5sYm5SbGJtTmxWWEJ3WlhKQ2IzVnVaRDg2SUc1MWJXSmxjanRjY2x4dUlDQjFibWwwY3o4NklFeHZjbVZ0Vlc1cGREdGNjbHh1SUNCM2IzSmtjejg2SUhOMGNtbHVaMXRkTzF4eVhHNGdJSE4xWm1acGVEODZJSE4wY21sdVp6dGNjbHh1ZlZ4eVhHNWNjbHh1WTI5dWMzUWdiRzl5WlcxSmNITjFiU0E5SUNoN1hISmNiaUFnWTI5MWJuUWdQU0F4TEZ4eVhHNGdJR1p2Y20xaGRDQTlJRVpQVWsxQlZGOVFURUZKVGl4Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrSUQwZ015eGNjbHh1SUNCd1lYSmhaM0poY0doVmNIQmxja0p2ZFc1a0lEMGdOeXhjY2x4dUlDQnlZVzVrYjIwc1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrSUQwZ05TeGNjbHh1SUNCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1RZ1BTQXhOU3hjY2x4dUlDQjFibWwwY3lBOUlGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4eVhHNGdJSGR2Y21SeklEMGdWMDlTUkZNc1hISmNiaUFnYzNWbVptbDRJRDBnWENKY0lpeGNjbHh1ZlRvZ1NVeHZjbVZ0U1hCemRXMVFZWEpoYlhNZ1BTQjdmU2s2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnWTI5dWMzUWdiM0IwYVc5dWN5QTlJSHRjY2x4dUlDQWdJSEpoYm1SdmJTeGNjbHh1SUNBZ0lITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhRG9nZTF4eVhHNGdJQ0FnSUNCdFlYZzZJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVFzWEhKY2JpQWdJQ0FnSUcxcGJqb2djR0Z5WVdkeVlYQm9URzkzWlhKQ2IzVnVaQ3hjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0IzYjNKa2N5eGNjbHh1SUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVNklIdGNjbHh1SUNBZ0lDQWdiV0Y0T2lCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1Rc1hISmNiaUFnSUNBZ0lHMXBiam9nYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrTEZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0I5TzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JzYjNKbGJUb2dURzl5WlcxSmNITjFiU0E5SUc1bGR5Qk1iM0psYlVsd2MzVnRLRzl3ZEdsdmJuTXNJR1p2Y20xaGRDd2djM1ZtWm1sNEtUdGNjbHh1WEhKY2JpQWdjM2RwZEdOb0lDaDFibWwwY3lrZ2UxeHlYRzRnSUNBZ1kyRnpaU0JWVGtsVVgxQkJVa0ZIVWtGUVNGTTZYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZVRUZTUVVkU1FWQklPbHh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiRzl5WlcwdVoyVnVaWEpoZEdWUVlYSmhaM0poY0doektHTnZkVzUwS1R0Y2NseHVJQ0FnSUdOaGMyVWdWVTVKVkY5VFJVNVVSVTVEUlZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlUwVk9WRVZPUTBVNlhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCc2IzSmxiUzVuWlc1bGNtRjBaVk5sYm5SbGJtTmxjeWhqYjNWdWRDazdYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZWMDlTUkZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlYwOVNSRHBjY2x4dUlDQWdJQ0FnY21WMGRYSnVJR3h2Y21WdExtZGxibVZ5WVhSbFYyOXlaSE1vWTI5MWJuUXBPMXh5WEc0Z0lDQWdaR1ZtWVhWc2REcGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlGd2lYQ0k3WEhKY2JpQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owSUhzZ2JHOXlaVzFKY0hOMWJTd2dURzl5WlcxSmNITjFiU0I5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGVFFUczdRVUZGUVRzN096dEJRV1ZCTEVsQlFVMUJMRlZCUVZVc1IwRkJSeXhUUVVGaVFTeFZRVUZoTEVkQlYyMUNPMFZCUVVFc0swVkJRV1lzUlVGQlpUdEZRVUZCTEhOQ1FWWndRME1zUzBGVmIwTTdSVUZCUVN4SlFWWndRMEVzUzBGVmIwTXNNa0pCVmpWQ0xFTkJWVFJDTzBWQlFVRXNkVUpCVkhCRFF5eE5RVk52UXp0RlFVRkJMRWxCVkhCRFFTeE5RVk52UXl3MFFrRlVNMEpETEhGQ1FWTXlRanRGUVVGQkxHbERRVkp3UTBNc2JVSkJVVzlETzBWQlFVRXNTVUZTY0VOQkxHMUNRVkZ2UXl4elEwRlNaQ3hEUVZGak8wVkJRVUVzYVVOQlVIQkRReXh0UWtGUGIwTTdSVUZCUVN4SlFWQndRMEVzYlVKQlQyOURMSE5EUVZCa0xFTkJUMk03UlVGQlFTeEpRVTV3UTBNc1RVRk5iME1zVVVGT2NFTkJMRTFCVFc5RE8wVkJRVUVzYVVOQlRIQkRReXhyUWtGTGIwTTdSVUZCUVN4SlFVeHdRMEVzYTBKQlMyOURMSE5EUVV4bUxFTkJTMlU3UlVGQlFTeHBRMEZLY0VORExHdENRVWx2UXp0RlFVRkJMRWxCU25CRFFTeHJRa0ZKYjBNc2MwTkJTbVlzUlVGSlpUdEZRVUZCTEhOQ1FVaHdRME1zUzBGSGIwTTdSVUZCUVN4SlFVaHdRMEVzUzBGSGIwTXNNa0pCU0RWQ1F5eHhRa0ZITkVJN1JVRkJRU3h6UWtGR2NFTkRMRXRCUlc5RE8wVkJRVUVzU1VGR2NFTkJMRXRCUlc5RExESkNRVVkxUWtNc1dVRkZORUk3UlVGQlFTeDFRa0ZFY0VORExFMUJRMjlETzBWQlFVRXNTVUZFY0VOQkxFMUJRMjlETERSQ1FVUXpRaXhGUVVNeVFqczdSVUZEY0VNc1NVRkJUVU1zVDBGQlR5eEhRVUZITzBsQlEyUlNMRTFCUVUwc1JVRkJUa0VzVFVGRVl6dEpRVVZrVXl4eFFrRkJjVUlzUlVGQlJUdE5RVU55UWtNc1IwRkJSeXhGUVVGRldDeHRRa0ZFWjBJN1RVRkZja0paTEVkQlFVY3NSVUZCUldJN1NVRkdaMElzUTBGR1ZEdEpRVTFrVHl4TFFVRkxMRVZCUVV4QkxFdEJUbU03U1VGUFpFOHNaMEpCUVdkQ0xFVkJRVVU3VFVGRGFFSkdMRWRCUVVjc1JVRkJSVklzYTBKQlJGYzdUVUZGYUVKVExFZEJRVWNzUlVGQlJWWTdTVUZHVnp0RlFWQktMRU5CUVdoQ08wVkJZVUVzU1VGQlRWa3NTMEZCYVVJc1IwRkJSeXhKUVVGSlF5eHpRa0ZCU2l4RFFVRmxUaXhQUVVGbUxFVkJRWGRDV2l4TlFVRjRRaXhGUVVGblExY3NUVUZCYUVNc1EwRkJNVUk3TzBWQlJVRXNVVUZCVVVvc1MwRkJVanRKUVVORkxFdEJRVXRaTEhOQ1FVRk1PMGxCUTBFc1MwRkJTME1zY1VKQlFVdzdUVUZEUlN4UFFVRlBTQ3hMUVVGTExFTkJRVU5KTEd0Q1FVRk9MRU5CUVhsQ2RFSXNTMEZCZWtJc1EwRkJVRHM3U1VGRFJpeExRVUZMVXl4eFFrRkJURHRKUVVOQkxFdEJRVXRqTEc5Q1FVRk1PMDFCUTBVc1QwRkJUMHdzUzBGQlN5eERRVUZEVFN4cFFrRkJUaXhEUVVGM1FuaENMRXRCUVhoQ0xFTkJRVkE3TzBsQlEwWXNTMEZCUzNsQ0xHbENRVUZNTzBsQlEwRXNTMEZCUzBNc1owSkJRVXc3VFVGRFJTeFBRVUZQVWl4TFFVRkxMRU5CUVVOVExHRkJRVTRzUTBGQmIwSXpRaXhMUVVGd1FpeERRVUZRT3p0SlFVTkdPMDFCUTBVc1QwRkJUeXhGUVVGUU8wVkJXRW83UVVGaFJDeERRWGhEUkNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZm9ybWF0cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZm9ybWF0c1wiKTtcblxudmFyIF9saW5lRW5kaW5ncyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbGluZUVuZGluZ3NcIik7XG5cbnZhciBfZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL2dlbmVyYXRvclwiKSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTG9yZW1JcHN1bSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvcmVtSXBzdW0oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF9mb3JtYXRzLkZPUk1BVF9QTEFJTjtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9yZW1JcHN1bSk7XG5cbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdlbmVyYXRvclwiLCB2b2lkIDApO1xuXG4gICAgaWYgKF9mb3JtYXRzLkZPUk1BVFMuaW5kZXhPZihmb3JtYXQudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoZm9ybWF0LCBcIiBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSBcIikuY29uY2F0KF9mb3JtYXRzLkZPUk1BVFMuam9pbihcIiBvciBcIiksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBuZXcgX2dlbmVyYXRvcltcImRlZmF1bHRcIl0ob3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9yZW1JcHN1bSwgW3tcbiAgICBrZXk6IFwiZ2V0TGluZUVuZGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaW5lRW5kaW5nKCkge1xuICAgICAgaWYgKHRoaXMuc3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX3V0aWwuaXNSZWFjdE5hdGl2ZSkoKSAmJiAoMCwgX3V0aWwuaXNOb2RlKSgpICYmICgwLCBfdXRpbC5pc1dpbmRvd3MpKCkpIHtcbiAgICAgICAgcmV0dXJuIF9saW5lRW5kaW5ncy5MSU5FX0VORElOR1MuV0lOMzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbGluZUVuZGluZ3MuTElORV9FTkRJTkdTLlBPU0lYO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRTdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5nKHN0cikge1xuICAgICAgaWYgKHRoaXMuZm9ybWF0ID09PSBfZm9ybWF0cy5GT1JNQVRfSFRNTCkge1xuICAgICAgICByZXR1cm4gXCI8cD5cIi5jb25jYXQoc3RyLCBcIjwvcD5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFN0cmluZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5ncyhzdHJpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0U3RyaW5nKHN0cik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVXb3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlU2VudGVuY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlU2VudGVuY2VzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVBhcmFncmFwaHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVQYXJhZ3JhcGhzKG51bSkge1xuICAgICAgdmFyIG1ha2VTdHJpbmcgPSB0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaC5iaW5kKHRoaXMuZ2VuZXJhdG9yKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MoKDAsIF91dGlsLm1ha2VBcnJheU9mU3RyaW5ncykobnVtLCBtYWtlU3RyaW5nKSkuam9pbih0aGlzLmdldExpbmVFbmRpbmcoKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvcmVtSXBzdW07XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IExvcmVtSXBzdW07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpNYjNKbGJVbHdjM1Z0SWl3aWIzQjBhVzl1Y3lJc0ltWnZjbTFoZENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSW5OMVptWnBlQ0lzSWtaUFVrMUJWRk1pTENKcGJtUmxlRTltSWl3aWRHOU1iM2RsY2tOaGMyVWlMQ0pGY25KdmNpSXNJbXB2YVc0aUxDSm5aVzVsY21GMGIzSWlMQ0pIWlc1bGNtRjBiM0lpTENKcGMxSmxZV04wVG1GMGFYWmxJaXdpYVhOT2IyUmxJaXdpYVhOWGFXNWtiM2R6SWl3aVRFbE9SVjlGVGtSSlRrZFRJaXdpVjBsT016SWlMQ0pRVDFOSldDSXNJbk4wY2lJc0lrWlBVazFCVkY5SVZFMU1JaXdpYzNSeWFXNW5jeUlzSW0xaGNDSXNJbVp2Y20xaGRGTjBjbWx1WnlJc0ltNTFiU0lzSW1kbGJtVnlZWFJsVW1GdVpHOXRWMjl5WkhNaUxDSm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNJc0ltMWhhMlZUZEhKcGJtY2lMQ0ppYVc1a0lpd2labTl5YldGMFUzUnlhVzVuY3lJc0ltMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN5SXNJbWRsZEV4cGJtVkZibVJwYm1jaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwweHZjbVZ0U1hCemRXMHVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1JrOVNUVUZVWDBoVVRVd3NJRVpQVWsxQlZGOVFURUZKVGl3Z1JrOVNUVUZVVXl3Z1RHOXlaVzFHYjNKdFlYUWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDJadmNtMWhkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dURWxPUlY5RlRrUkpUa2RUSUgwZ1puSnZiU0JjSWk0dUwyTnZibk4wWVc1MGN5OXNhVzVsUlc1a2FXNW5jMXdpTzF4eVhHNXBiWEJ2Y25RZ1IyVnVaWEpoZEc5eUxDQjdJRWxIWlc1bGNtRjBiM0pQY0hScGIyNXpJSDBnWm5KdmJTQmNJaTR1TDJ4cFlpOW5aVzVsY21GMGIzSmNJanRjY2x4dWFXMXdiM0owSUhzZ2FYTk9iMlJsTENCcGMxSmxZV04wVG1GMGFYWmxMQ0JwYzFkcGJtUnZkM01zSUcxaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3lCOUlHWnliMjBnWENJdUxpOTFkR2xzWENJN1hISmNibHh5WEc1amJHRnpjeUJNYjNKbGJVbHdjM1Z0SUh0Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHOXlPaUJIWlc1bGNtRjBiM0k3WEhKY2JseHlYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHlYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1NVZGxibVZ5WVhSdmNrOXdkR2x2Ym5NZ1BTQjdmU3hjY2x4dUlDQWdJSEIxWW14cFl5Qm1iM0p0WVhRNklFeHZjbVZ0Um05eWJXRjBJRDBnUms5U1RVRlVYMUJNUVVsT0xGeHlYRzRnSUNBZ2NIVmliR2xqSUhOMVptWnBlRDg2SUhOMGNtbHVaeXhjY2x4dUlDQXBJSHRjY2x4dUlDQWdJR2xtSUNoR1QxSk5RVlJUTG1sdVpHVjRUMllvWm05eWJXRjBMblJ2VEc5M1pYSkRZWE5sS0NrcElEMDlQU0F0TVNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZQ1I3Wm05eWJXRjBmU0JwY3lCaGJpQnBiblpoYkdsa0lHWnZjbTFoZEM0Z1VHeGxZWE5sSUhWelpTQWtlMFpQVWsxQlZGTXVhbTlwYmloY0lpQnZjaUJjSWlsOUxtQXNYSEpjYmlBZ0lDQWdJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0IwYUdsekxtZGxibVZ5WVhSdmNpQTlJRzVsZHlCSFpXNWxjbUYwYjNJb2IzQjBhVzl1Y3lrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWMFRHbHVaVVZ1WkdsdVp5Z3BJSHRjY2x4dUlDQWdJR2xtSUNoMGFHbHpMbk4xWm1acGVDa2dlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRXWm1hWGc3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0ZwYzFKbFlXTjBUbUYwYVhabEtDa2dKaVlnYVhOT2IyUmxLQ2tnSmlZZ2FYTlhhVzVrYjNkektDa3BJSHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVJRXhKVGtWZlJVNUVTVTVIVXk1WFNVNHpNanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnVEVsT1JWOUZUa1JKVGtkVExsQlBVMGxZTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WnloemRISTZJSE4wY21sdVp5azZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQnBaaUFvZEdocGN5NW1iM0p0WVhRZ1BUMDlJRVpQVWsxQlZGOUlWRTFNS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCZ1BIQStKSHR6ZEhKOVBDOXdQbUE3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J5WlhSMWNtNGdjM1J5TzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WjNNb2MzUnlhVzVuY3pvZ2MzUnlhVzVuVzEwcE9pQnpkSEpwYm1kYlhTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuY3k1dFlYQW9LSE4wY2lrZ1BUNGdkR2hwY3k1bWIzSnRZWFJUZEhKcGJtY29jM1J5S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZYYjNKa2N5aHVkVzAvT2lCdWRXMWlaWElwT2lCemRISnBibWNnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVptOXliV0YwVTNSeWFXNW5LSFJvYVhNdVoyVnVaWEpoZEc5eUxtZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZUWlc1MFpXNWpaWE1vYm5WdFB6b2diblZ0WW1WeUtUb2djM1J5YVc1bklIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVp2Y20xaGRGTjBjbWx1WnloMGFHbHpMbWRsYm1WeVlYUnZjaTVuWlc1bGNtRjBaVkpoYm1SdmJWQmhjbUZuY21Gd2FDaHVkVzBwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJuWlc1bGNtRjBaVkJoY21GbmNtRndhSE1vYm5WdE9pQnVkVzFpWlhJcE9pQnpkSEpwYm1jZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnYldGclpWTjBjbWx1WnlBOUlIUm9hWE11WjJWdVpYSmhkRzl5TG1kbGJtVnlZWFJsVW1GdVpHOXRVR0Z5WVdkeVlYQm9MbUpwYm1Rb1hISmNiaUFnSUNBZ0lIUm9hWE11WjJWdVpYSmhkRzl5TEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnZjbTFoZEZOMGNtbHVaM01vYldGclpVRnljbUY1VDJaVGRISnBibWR6S0c1MWJTd2diV0ZyWlZOMGNtbHVaeWtwTG1wdmFXNG9YSEpjYmlBZ0lDQWdJSFJvYVhNdVoyVjBUR2x1WlVWdVpHbHVaeWdwTEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dmNtVnRTWEJ6ZFcwN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRVRXNWVHRGUVVkS0xITkNRVWxGTzBsQlFVRXNTVUZJUVVNc1QwRkhRU3gxUlVGSU5rSXNSVUZITjBJN1NVRkJRU3hKUVVaUFF5eE5RVVZRTEhWRlFVWTJRa01zY1VKQlJUZENPMGxCUVVFc1NVRkVUME1zVFVGRFVEczdTVUZCUVRzN1NVRkJRU3hMUVVaUFJpeE5RVVZRTEVkQlJrOUJMRTFCUlZBN1NVRkJRU3hMUVVSUFJTeE5RVU5RTEVkQlJFOUJMRTFCUTFBN08wbEJRVUU3TzBsQlEwRXNTVUZCU1VNc1owSkJRVUVzUTBGQlVVTXNUMEZCVWl4RFFVRm5Ra29zVFVGQlRTeERRVUZEU3l4WFFVRlFMRVZCUVdoQ0xFMUJRVEJETEVOQlFVTXNRMEZCTDBNc1JVRkJhMFE3VFVGRGFFUXNUVUZCVFN4SlFVRkpReXhMUVVGS0xGZEJRMFJPTEUxQlJFTXNLME5CUXpCRFJ5eG5Ra0ZCUVN4RFFVRlJTU3hKUVVGU0xFTkJRV0VzVFVGQllpeERRVVF4UXl4UFFVRk9PMGxCUjBRN08wbEJRMFFzUzBGQlMwTXNVMEZCVEN4SFFVRnBRaXhKUVVGSlF5eHhRa0ZCU2l4RFFVRmpWaXhQUVVGa0xFTkJRV3BDTzBWQlEwUTdPenM3VjBGRlJDeDVRa0ZCZFVJN1RVRkRja0lzU1VGQlNTeExRVUZMUnl4TlFVRlVMRVZCUVdsQ08xRkJRMllzVDBGQlR5eExRVUZMUVN4TlFVRmFPMDFCUTBRN08wMUJSVVFzU1VGQlNTeERRVUZETEVsQlFVRlJMRzFDUVVGQkxFZEJRVVFzU1VGQmIwSXNTVUZCUVVNc1dVRkJRU3hIUVVGd1FpeEpRVUZuUXl4SlFVRkJReXhsUVVGQkxFZEJRWEJETEVWQlFXbEVPMUZCUXk5RExFOUJRVTlETEhsQ1FVRkJMRU5CUVdGRExFdEJRWEJDTzAxQlEwUTdPMDFCUlVRc1QwRkJUMFFzZVVKQlFVRXNRMEZCWVVVc1MwRkJjRUk3U1VGRFJEczdPMWRCUlVRc2MwSkJRVzlDUXl4SFFVRndRaXhGUVVGNVF6dE5RVU4yUXl4SlFVRkpMRXRCUVV0b1FpeE5RVUZNTEV0QlFXZENhVUlzYjBKQlFYQkNMRVZCUVdsRE8xRkJReTlDTEc5Q1FVRmhSQ3hIUVVGaU8wMUJRMFE3TzAxQlEwUXNUMEZCVDBFc1IwRkJVRHRKUVVORU96czdWMEZGUkN4MVFrRkJjVUpGTEU5QlFYSkNMRVZCUVd0RU8wMUJRVUU3TzAxQlEyaEVMRTlCUVU5QkxFOUJRVThzUTBGQlEwTXNSMEZCVWl4RFFVRlpMRlZCUVVOSUxFZEJRVVE3VVVGQlFTeFBRVUZUTEV0QlFVa3NRMEZCUTBrc1dVRkJUQ3hEUVVGclFrb3NSMEZCYkVJc1EwRkJWRHROUVVGQkxFTkJRVm9zUTBGQlVEdEpRVU5FT3pzN1YwRkZSQ3gxUWtGQmNVSkxMRWRCUVhKQ0xFVkJRVEpETzAxQlEzcERMRTlCUVU4c1MwRkJTMFFzV1VGQlRDeERRVUZyUWl4TFFVRkxXaXhUUVVGTUxFTkJRV1ZqTEcxQ1FVRm1MRU5CUVcxRFJDeEhRVUZ1UXl4RFFVRnNRaXhEUVVGUU8wbEJRMFE3T3p0WFFVVkVMREpDUVVGNVFrRXNSMEZCZWtJc1JVRkJLME03VFVGRE4wTXNUMEZCVHl4TFFVRkxSQ3haUVVGTUxFTkJRV3RDTEV0QlFVdGFMRk5CUVV3c1EwRkJaV1VzZFVKQlFXWXNRMEZCZFVOR0xFZEJRWFpETEVOQlFXeENMRU5CUVZBN1NVRkRSRHM3TzFkQlJVUXNORUpCUVRCQ1FTeEhRVUV4UWl4RlFVRXJRenROUVVNM1F5eEpRVUZOUnl4VlFVRlZMRWRCUVVjc1MwRkJTMmhDTEZOQlFVd3NRMEZCWldVc2RVSkJRV1lzUTBGQmRVTkZMRWxCUVhaRExFTkJRMnBDTEV0QlFVdHFRaXhUUVVSWkxFTkJRVzVDTzAxQlIwRXNUMEZCVHl4TFFVRkxhMElzWVVGQlRDeERRVUZ0UWl4SlFVRkJReXgzUWtGQlFTeEZRVUZ0UWs0c1IwRkJia0lzUlVGQmQwSkhMRlZCUVhoQ0xFTkJRVzVDTEVWQlFYZEVha0lzU1VGQmVFUXNRMEZEVEN4TFFVRkxjVUlzWVVGQlRDeEZRVVJMTEVOQlFWQTdTVUZIUkRzN096czdPMlZCUjFrNVFpeFZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF93b3JkcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJHNlbnRlbmNlc1BlclBhcmEgPSBfcmVmLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gX3JlZiRzZW50ZW5jZXNQZXJQYXJhID09PSB2b2lkIDAgPyB7XG4gICAgICBtYXg6IDcsXG4gICAgICBtaW46IDNcbiAgICB9IDogX3JlZiRzZW50ZW5jZXNQZXJQYXJhLFxuICAgICAgICBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgIHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPT09IHZvaWQgMCA/IHtcbiAgICAgIG1heDogMTUsXG4gICAgICBtaW46IDVcbiAgICB9IDogX3JlZiR3b3Jkc1BlclNlbnRlbmNlLFxuICAgICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgICAgc2VlZCA9IF9yZWYuc2VlZCxcbiAgICAgICAgX3JlZiR3b3JkcyA9IF9yZWYud29yZHMsXG4gICAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW5lcmF0b3IpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VudGVuY2VzUGVyUGFyYWdyYXBoXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3b3Jkc1BlclNlbnRlbmNlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyYW5kb21cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndvcmRzXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiA+IHNlbnRlbmNlc1BlclBhcmFncmFwaC5tYXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoIChcIi5jb25jYXQoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiwgXCIpIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoXCIpLmNvbmNhdChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4LCBcIikuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaW11bSBudW1iZXIgb2Ygd29yZHMgcGVyIHNlbnRlbmNlIChcIi5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5taW4sIFwiKSBjYW5ub3QgZXhjZWVkIG1heGltdW0gKFwiKS5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5tYXgsIFwiKS5cIikpO1xuICAgIH1cblxuICAgIHRoaXMuc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gc2VudGVuY2VzUGVyUGFyYWdyYXBoO1xuICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICB0aGlzLndvcmRzUGVyU2VudGVuY2UgPSB3b3Jkc1BlclNlbnRlbmNlO1xuICAgIHRoaXMucmFuZG9tID0gcmFuZG9tIHx8IE1hdGgucmFuZG9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdlbmVyYXRvciwgW3tcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21JbnRlZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tV29yZHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyR3b3Jkc1BlclNlbnRlbmMgPSB0aGlzLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgICAgbWluID0gX3RoaXMkd29yZHNQZXJTZW50ZW5jLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyR3b3Jkc1BlclNlbnRlbmMubWF4O1xuICAgICAgdmFyIGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgICByZXR1cm4gKDAsIF91dGlsLm1ha2VBcnJheU9mTGVuZ3RoKShsZW5ndGgpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wbHVja1JhbmRvbVdvcmQoKSwgXCIgXCIpLmNvbmNhdChhY2N1bXVsYXRvcik7XG4gICAgICB9LCBcIlwiKS50cmltKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tU2VudGVuY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TZW50ZW5jZShudW0pIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCgoMCwgX3V0aWwuY2FwaXRhbGl6ZSkodGhpcy5nZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkpLCBcIi5cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzZW50ZW5jZXNQZXJQYXIgPSB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRzZW50ZW5jZXNQZXJQYXIubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHNlbnRlbmNlc1BlclBhci5tYXg7XG4gICAgICB2YXIgbGVuZ3RoID0gbnVtIHx8IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICAgIHJldHVybiAoMCwgX3V0aWwubWFrZUFycmF5T2ZMZW5ndGgpKGxlbmd0aCkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzMi5nZW5lcmF0ZVJhbmRvbVNlbnRlbmNlKCksIFwiIFwiKS5jb25jYXQoYWNjdW11bGF0b3IpO1xuICAgICAgfSwgXCJcIikudHJpbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbHVja1JhbmRvbVdvcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGx1Y2tSYW5kb21Xb3JkKCkge1xuICAgICAgdmFyIG1pbiA9IDA7XG4gICAgICB2YXIgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgICAgcmV0dXJuIHRoaXMud29yZHNbaW5kZXhdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHZW5lcmF0b3I7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IEdlbmVyYXRvcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SkhaVzVsY21GMGIzSWlMQ0p6Wlc1MFpXNWpaWE5RWlhKUVlYSmhaM0poY0dnaUxDSnRZWGdpTENKdGFXNGlMQ0ozYjNKa2MxQmxjbE5sYm5SbGJtTmxJaXdpY21GdVpHOXRJaXdpYzJWbFpDSXNJbmR2Y21Seklpd2lWMDlTUkZNaUxDSkZjbkp2Y2lJc0lrMWhkR2dpTENKbWJHOXZjaUlzSW01MWJTSXNJbXhsYm1kMGFDSXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lJc0ltMWhhMlZCY25KaGVVOW1UR1Z1WjNSb0lpd2ljbVZrZFdObElpd2lZV05qZFcxMWJHRjBiM0lpTENKcGJtUmxlQ0lzSW5Cc2RXTnJVbUZ1Wkc5dFYyOXlaQ0lzSW5SeWFXMGlMQ0pqWVhCcGRHRnNhWHBsSWl3aVoyVnVaWEpoZEdWU1lXNWtiMjFYYjNKa2N5SXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwyZGxibVZ5WVhSdmNpNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCWFQxSkVVeUI5SUdaeWIyMGdYQ0l1TGk5amIyNXpkR0Z1ZEhNdmQyOXlaSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dZMkZ3YVhSaGJHbDZaU3dnYldGclpVRnljbUY1VDJaTVpXNW5kR2dnZlNCbWNtOXRJRndpTGk0dmRYUnBiRndpTzF4eVhHNWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKUW05MWJtUnpJSHRjY2x4dUlDQnRhVzQ2SUc1MWJXSmxjanRjY2x4dUlDQnRZWGc2SUc1MWJXSmxjanRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUhSNWNHVWdTVkJ5Ym1jZ1BTQW9LU0E5UGlCdWRXMWlaWEk3WEhKY2JseHlYRzVsZUhCdmNuUWdkSGx3WlNCSlUyVmxaRkpoYm1SdmJTQTlJRzVsZHlBb2MyVmxaRDg2SUhOMGNtbHVaeWtnUFQ0Z1NWQnlibWM3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxOWVhSb0lIdGNjbHh1SUNCelpXVmtjbUZ1Wkc5dE9pQkpVMlZsWkZKaGJtUnZiVHRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSlIyVnVaWEpoZEc5eVQzQjBhVzl1Y3lCN1hISmNiaUFnYzJWdWRHVnVZMlZ6VUdWeVVHRnlZV2R5WVhCb1B6b2dTVUp2ZFc1a2N6dGNjbHh1SUNCM2IzSmtjMUJsY2xObGJuUmxibU5sUHpvZ1NVSnZkVzVrY3p0Y2NseHVJQ0J5WVc1a2IyMC9PaUJKVUhKdVp6dGNjbHh1SUNCelpXVmtQem9nYzNSeWFXNW5PMXh5WEc0Z0lIZHZjbVJ6UHpvZ2MzUnlhVzVuVzEwN1hISmNibjFjY2x4dVhISmNibU5zWVhOeklFZGxibVZ5WVhSdmNpQjdYSEpjYmlBZ2NIVmliR2xqSUhObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FEb2dTVUp2ZFc1a2N6dGNjbHh1SUNCd2RXSnNhV01nZDI5eVpITlFaWEpUWlc1MFpXNWpaVG9nU1VKdmRXNWtjenRjY2x4dUlDQndkV0pzYVdNZ2NtRnVaRzl0T2lCSlVISnVaenRjY2x4dUlDQndkV0pzYVdNZ2QyOXlaSE02SUhOMGNtbHVaMXRkTzF4eVhHNWNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaDdYSEpjYmlBZ0lDQnpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2dnUFNCN0lHMWhlRG9nTnl3Z2JXbHVPaUF6SUgwc1hISmNiaUFnSUNCM2IzSmtjMUJsY2xObGJuUmxibU5sSUQwZ2V5QnRZWGc2SURFMUxDQnRhVzQ2SURVZ2ZTeGNjbHh1SUNBZ0lISmhibVJ2YlN4Y2NseHVJQ0FnSUhObFpXUXNYSEpjYmlBZ0lDQjNiM0prY3lBOUlGZFBVa1JUTEZ4eVhHNGdJSDA2SUVsSFpXNWxjbUYwYjNKUGNIUnBiMjV6SUQwZ2UzMHBJSHRjY2x4dUlDQWdJR2xtSUNoelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ3ViV2x1SUQ0Z2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFoZUNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZRTFwYm1sdGRXMGdiblZ0WW1WeUlHOW1JSE5sYm5SbGJtTmxjeUJ3WlhJZ2NHRnlZV2R5WVhCb0lDZ2tlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFwYmx4eVhHNGdJQ0FnSUNBZ0lIMHBJR05oYm01dmRDQmxlR05sWldRZ2JXRjRhVzExYlNBb0pIdHpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2d1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvZDI5eVpITlFaWEpUWlc1MFpXNWpaUzV0YVc0Z1BpQjNiM0prYzFCbGNsTmxiblJsYm1ObExtMWhlQ2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1lFMXBibWx0ZFcwZ2JuVnRZbVZ5SUc5bUlIZHZjbVJ6SUhCbGNpQnpaVzUwWlc1alpTQW9KSHRjY2x4dUlDQWdJQ0FnSUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVdWJXbHVYSEpjYmlBZ0lDQWdJQ0FnZlNrZ1kyRnVibTkwSUdWNFkyVmxaQ0J0WVhocGJYVnRJQ2drZTNkdmNtUnpVR1Z5VTJWdWRHVnVZMlV1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FDQTlJSE5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUR0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhNZ1BTQjNiM0prY3p0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhOUVpYSlRaVzUwWlc1alpTQTlJSGR2Y21SelVHVnlVMlZ1ZEdWdVkyVTdYSEpjYmlBZ0lDQjBhR2x6TG5KaGJtUnZiU0E5SUhKaGJtUnZiU0I4ZkNCTllYUm9MbkpoYm1SdmJUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIQjFZbXhwWXlCblpXNWxjbUYwWlZKaGJtUnZiVWx1ZEdWblpYSW9iV2x1T2lCdWRXMWlaWElzSUcxaGVEb2diblZ0WW1WeUtUb2diblZ0WW1WeUlIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIUm9hWE11Y21GdVpHOXRLQ2tnS2lBb2JXRjRJQzBnYldsdUlDc2dNU2tnS3lCdGFXNHBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0UHpvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUh0Y2NseHVJQ0FnSUdOdmJuTjBJSHNnYldsdUxDQnRZWGdnZlNBOUlIUm9hWE11ZDI5eVpITlFaWEpUWlc1MFpXNWpaVHRjY2x4dUlDQWdJR052Ym5OMElHeGxibWQwYUNBOUlHNTFiU0I4ZkNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnYldGclpVRnljbUY1VDJaTVpXNW5kR2dvYkdWdVozUm9LVnh5WEc0Z0lDQWdJQ0F1Y21Wa2RXTmxLQ2hoWTJOMWJYVnNZWFJ2Y2pvZ2MzUnlhVzVuTENCcGJtUmxlRG9nYm5WdFltVnlLVG9nYzNSeWFXNW5JRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1d2JIVmphMUpoYm1SdmJWZHZjbVFvS1gwZ0pIdGhZMk4xYlhWc1lYUnZjbjFnTzF4eVhHNGdJQ0FnSUNCOUxDQmNJbHdpS1Z4eVhHNGdJQ0FnSUNBdWRISnBiU2dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR2RsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVb2JuVnRQem9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmdKSHRqWVhCcGRHRnNhWHBsS0hSb2FYTXVaMlZ1WlhKaGRHVlNZVzVrYjIxWGIzSmtjeWh1ZFcwcEtYMHVZRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5Qm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNodWRXMC9PaUJ1ZFcxaVpYSXBPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2V5QnRhVzRzSUcxaGVDQjlJRDBnZEdocGN5NXpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2c3WEhKY2JpQWdJQ0JqYjI1emRDQnNaVzVuZEdnZ1BTQnVkVzBnZkh3Z2RHaHBjeTVuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVMQ0J0WVhncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvS0d4bGJtZDBhQ2xjY2x4dUlDQWdJQ0FnTG5KbFpIVmpaU2dvWVdOamRXMTFiR0YwYjNJNklITjBjbWx1Wnl3Z2FXNWtaWGc2SUc1MWJXSmxjaWs2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdVoyVnVaWEpoZEdWU1lXNWtiMjFUWlc1MFpXNWpaU2dwZlNBa2UyRmpZM1Z0ZFd4aGRHOXlmV0E3WEhKY2JpQWdJQ0FnSUgwc0lGd2lYQ0lwWEhKY2JpQWdJQ0FnSUM1MGNtbHRLQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdjR3gxWTJ0U1lXNWtiMjFYYjNKa0tDazZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQmpiMjV6ZENCdGFXNGdQU0F3TzF4eVhHNGdJQ0FnWTI5dWMzUWdiV0Y0SUQwZ2RHaHBjeTUzYjNKa2N5NXNaVzVuZEdnZ0xTQXhPMXh5WEc0Z0lDQWdZMjl1YzNRZ2FXNWtaWGdnUFNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTNiM0prYzF0cGJtUmxlRjA3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JIWlc1bGNtRjBiM0k3WEhKY2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3pzN096czdPenM3TzBsQmRVSk5RU3hUTzBWQlRVb3NjVUpCVFRKQ08wbEJRVUVzSzBWQlFVb3NSVUZCU1R0SlFVRkJMR2xEUVV4NlFrTXNjVUpCUzNsQ08wbEJRVUVzU1VGTWVrSkJMSEZDUVV0NVFpeHpRMEZNUkR0TlFVRkZReXhIUVVGSExFVkJRVVVzUTBGQlVEdE5RVUZWUXl4SFFVRkhMRVZCUVVVN1NVRkJaaXhEUVV0RE8wbEJRVUVzYVVOQlNucENReXhuUWtGSmVVSTdTVUZCUVN4SlFVcDZRa0VzWjBKQlNYbENMSE5EUVVwT08wMUJRVVZHTEVkQlFVY3NSVUZCUlN4RlFVRlFPMDFCUVZkRExFZEJRVWNzUlVGQlJUdEpRVUZvUWl4RFFVbE5PMGxCUVVFc1NVRklla0pGTEUxQlIzbENMRkZCU0hwQ1FTeE5RVWQ1UWp0SlFVRkJMRWxCUm5wQ1F5eEpRVVY1UWl4UlFVWjZRa0VzU1VGRmVVSTdTVUZCUVN4elFrRkVla0pETEV0QlEzbENPMGxCUVVFc1NVRkVla0pCTEV0QlEzbENMREpDUVVScVFrTXNXVUZEYVVJN08wbEJRVUU3TzBsQlFVRTdPMGxCUVVFN08wbEJRVUU3TzBsQlFVRTdPMGxCUTNwQ0xFbEJRVWxRTEhGQ1FVRnhRaXhEUVVGRFJTeEhRVUYwUWl4SFFVRTBRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJRWFJFTEVWQlFUSkVPMDFCUTNwRUxFMUJRVTBzU1VGQlNVOHNTMEZCU2l4elJFRkZSbElzY1VKQlFYRkNMRU5CUVVORkxFZEJSbkJDTEhORFFVZDNRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJTRGxETEZGQlFVNDdTVUZMUkRzN1NVRkZSQ3hKUVVGSlJTeG5Ra0ZCWjBJc1EwRkJRMFFzUjBGQmFrSXNSMEZCZFVKRExHZENRVUZuUWl4RFFVRkRSaXhIUVVFMVF5eEZRVUZwUkR0TlFVTXZReXhOUVVGTkxFbEJRVWxQTEV0QlFVb3NhVVJCUlVaTUxHZENRVUZuUWl4RFFVRkRSQ3hIUVVabUxITkRRVWQzUWtNc1owSkJRV2RDTEVOQlFVTkdMRWRCU0hwRExGRkJRVTQ3U1VGTFJEczdTVUZGUkN4TFFVRkxSQ3h4UWtGQlRDeEhRVUUyUWtFc2NVSkJRVGRDTzBsQlEwRXNTMEZCUzAwc1MwRkJUQ3hIUVVGaFFTeExRVUZpTzBsQlEwRXNTMEZCUzBnc1owSkJRVXdzUjBGQmQwSkJMR2RDUVVGNFFqdEpRVU5CTEV0QlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlRTeEpRVUZKU3l4SlFVRkpMRU5CUVVOTUxFMUJRVGRDTzBWQlEwUTdPenM3VjBGRlJDd3JRa0ZCTmtKR0xFZEJRVGRDTEVWQlFUQkRSQ3hIUVVFeFF5eEZRVUVyUkR0TlFVTTNSQ3hQUVVGUFVTeEpRVUZKTEVOQlFVTkRMRXRCUVV3c1EwRkJWeXhMUVVGTFRpeE5RVUZNTEUxQlFXbENTQ3hIUVVGSExFZEJRVWRETEVkQlFVNHNSMEZCV1N4RFFVRTNRaXhKUVVGclEwRXNSMEZCTjBNc1EwRkJVRHRKUVVORU96czdWMEZGUkN3MlFrRkJNa0pUTEVkQlFUTkNMRVZCUVdsRU8wMUJRVUU3TzAxQlF5OURMRFJDUVVGeFFpeExRVUZMVWl4blFrRkJNVUk3VFVGQlFTeEpRVUZSUkN4SFFVRlNMSGxDUVVGUlFTeEhRVUZTTzAxQlFVRXNTVUZCWVVRc1IwRkJZaXg1UWtGQllVRXNSMEZCWWp0TlFVTkJMRWxCUVUxWExFMUJRVTBzUjBGQlIwUXNSMEZCUnl4SlFVRkpMRXRCUVV0RkxIRkNRVUZNTEVOQlFUSkNXQ3hIUVVFelFpeEZRVUZuUTBRc1IwRkJhRU1zUTBGQmRFSTdUVUZEUVN4UFFVRlBMRWxCUVVGaExIVkNRVUZCTEVWQlFXdENSaXhOUVVGc1FpeEZRVU5LUnl4TlFVUkpMRU5CUTBjc1ZVRkJRME1zVjBGQlJDeEZRVUZ6UWtNc1MwRkJkRUlzUlVGQlowUTdVVUZEZEVRc2FVSkJRVlVzUzBGQlNTeERRVUZEUXl4bFFVRk1MRVZCUVZZc1kwRkJiME5HTEZkQlFYQkRPMDFCUTBRc1EwRklTU3hGUVVkR0xFVkJTRVVzUlVGSlNrY3NTVUZLU1N4RlFVRlFPMGxCUzBRN096dFhRVVZFTEdkRFFVRTRRbElzUjBGQk9VSXNSVUZCYjBRN1RVRkRiRVFzYVVKQlFWVXNTVUZCUVZNc1owSkJRVUVzUlVGQlZ5eExRVUZMUXl4dFFrRkJUQ3hEUVVGNVFsWXNSMEZCZWtJc1EwRkJXQ3hEUVVGV08wbEJRMFE3T3p0WFFVVkVMR2xEUVVFclFrRXNSMEZCTDBJc1JVRkJjVVE3VFVGQlFUczdUVUZEYmtRc05FSkJRWEZDTEV0QlFVdFlMSEZDUVVFeFFqdE5RVUZCTEVsQlFWRkZMRWRCUVZJc2VVSkJRVkZCTEVkQlFWSTdUVUZCUVN4SlFVRmhSQ3hIUVVGaUxIbENRVUZoUVN4SFFVRmlPMDFCUTBFc1NVRkJUVmNzVFVGQlRTeEhRVUZIUkN4SFFVRkhMRWxCUVVrc1MwRkJTMFVzY1VKQlFVd3NRMEZCTWtKWUxFZEJRVE5DTEVWQlFXZERSQ3hIUVVGb1F5eERRVUYwUWp0TlFVTkJMRTlCUVU4c1NVRkJRV0VzZFVKQlFVRXNSVUZCYTBKR0xFMUJRV3hDTEVWQlEwcEhMRTFCUkVrc1EwRkRSeXhWUVVGRFF5eFhRVUZFTEVWQlFYTkNReXhMUVVGMFFpeEZRVUZuUkR0UlFVTjBSQ3hwUWtGQlZTeE5RVUZKTEVOQlFVTkxMSE5DUVVGTUxFVkJRVllzWTBGQk1rTk9MRmRCUVRORE8wMUJRMFFzUTBGSVNTeEZRVWRHTEVWQlNFVXNSVUZKU2tjc1NVRktTU3hGUVVGUU8wbEJTMFE3T3p0WFFVVkVMREpDUVVGcFF6dE5RVU12UWl4SlFVRk5ha0lzUjBGQlJ5eEhRVUZITEVOQlFWbzdUVUZEUVN4SlFVRk5SQ3hIUVVGSExFZEJRVWNzUzBGQlMwc3NTMEZCVEN4RFFVRlhUU3hOUVVGWUxFZEJRVzlDTEVOQlFXaERPMDFCUTBFc1NVRkJUVXNzUzBGQlN5eEhRVUZITEV0QlFVdEtMSEZDUVVGTUxFTkJRVEpDV0N4SFFVRXpRaXhGUVVGblEwUXNSMEZCYUVNc1EwRkJaRHROUVVOQkxFOUJRVThzUzBGQlMwc3NTMEZCVEN4RFFVRlhWeXhMUVVGWUxFTkJRVkE3U1VGRFJEczdPenM3TzJWQlIxbHNRaXhUSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcGFyYW0gc3RyICBBIHN0cmluZyB0aGF0IG1heSBvciBtYXkgbm90IGJlIGNhcGl0YWxpemVkLlxyXG4gKiBAcmV0dXJucyAgICBBIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHZhciB0cmltbWVkID0gc3RyLnRyaW0oKTtcbiAgcmV0dXJuIHRyaW1tZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0cmltbWVkLnNsaWNlKDEpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SmpZWEJwZEdGc2FYcGxJaXdpYzNSeUlpd2lkSEpwYlcxbFpDSXNJblJ5YVcwaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2WTJGd2FYUmhiR2w2WlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUUhCaGNtRnRJSE4wY2lBZ1FTQnpkSEpwYm1jZ2RHaGhkQ0J0WVhrZ2IzSWdiV0Y1SUc1dmRDQmlaU0JqWVhCcGRHRnNhWHBsWkM1Y2NseHVJQ29nUUhKbGRIVnlibk1nSUNBZ1FTQmpZWEJwZEdGc2FYcGxaQ0J6ZEhKcGJtY3VYSEpjYmlBcUwxeHlYRzVqYjI1emRDQmpZWEJwZEdGc2FYcGxJRDBnS0hOMGNqb2djM1J5YVc1bktUb2djM1J5YVc1bklEMCtJSHRjY2x4dUlDQmpiMjV6ZENCMGNtbHRiV1ZrSUQwZ2MzUnlMblJ5YVcwb0tUdGNjbHh1SUNCeVpYUjFjbTRnZEhKcGJXMWxaQzVqYUdGeVFYUW9NQ2t1ZEc5VmNIQmxja05oYzJVb0tTQXJJSFJ5YVcxdFpXUXVjMnhwWTJVb01TazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqWVhCcGRHRnNhWHBsTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxGVkJRVlVzUjBGQlJ5eFRRVUZpUVN4VlFVRmhMRU5CUVVORExFZEJRVVFzUlVGQmVVSTdSVUZETVVNc1NVRkJUVU1zVDBGQlR5eEhRVUZIUkN4SFFVRkhMRU5CUVVORkxFbEJRVW9zUlVGQmFFSTdSVUZEUVN4UFFVRlBSQ3hQUVVGUExFTkJRVU5GTEUxQlFWSXNRMEZCWlN4RFFVRm1MRVZCUVd0Q1F5eFhRVUZzUWl4TFFVRnJRMGdzVDBGQlR5eERRVUZEU1N4TFFVRlNMRU5CUVdNc1EwRkJaQ3hEUVVGNlF6dEJRVU5FTEVOQlNFUTdPMlZCUzJWT0xGVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjYXBpdGFsaXplXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jYXBpdGFsaXplW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc05vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lzTm9kZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNSZWFjdE5hdGl2ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXNSZWFjdE5hdGl2ZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNXaW5kb3dzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pc1dpbmRvd3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1ha2VBcnJheU9mTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZkxlbmd0aFtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZUFycmF5T2ZTdHJpbmdzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZlN0cmluZ3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcblxudmFyIF9jYXBpdGFsaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jYXBpdGFsaXplXCIpKTtcblxudmFyIF9pc05vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzTm9kZVwiKSk7XG5cbnZhciBfaXNSZWFjdE5hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNSZWFjdE5hdGl2ZVwiKSk7XG5cbnZhciBfaXNXaW5kb3dzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc1dpbmRvd3NcIikpO1xuXG52YXIgX21ha2VBcnJheU9mTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiKSk7XG5cbnZhciBfbWFrZUFycmF5T2ZTdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZlN0cmluZ3NcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2VzEwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1YwYVd3dmFXNWtaWGd1ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTmhjR2wwWVd4cGVtVWdabkp2YlNCY0lpNHZZMkZ3YVhSaGJHbDZaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTk9iMlJsSUdaeWIyMGdYQ0l1TDJselRtOWtaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTlNaV0ZqZEU1aGRHbDJaU0JtY205dElGd2lMaTlwYzFKbFlXTjBUbUYwYVhabFhDSTdYSEpjYm1sdGNHOXlkQ0JwYzFkcGJtUnZkM01nWm5KdmJTQmNJaTR2YVhOWGFXNWtiM2R6WENJN1hISmNibWx0Y0c5eWRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQm1jbTl0SUZ3aUxpOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFGd2lPMXh5WEc1cGJYQnZjblFnYldGclpVRnljbUY1VDJaVGRISnBibWR6SUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVUzUnlhVzVuYzF3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0JqWVhCcGRHRnNhWHBsTEZ4eVhHNGdJR2x6VG05a1pTeGNjbHh1SUNCcGMxSmxZV04wVG1GMGFYWmxMRnh5WEc0Z0lHbHpWMmx1Wkc5M2N5eGNjbHh1SUNCdFlXdGxRWEp5WVhsUFpreGxibWQwYUN4Y2NseHVJQ0J0WVd0bFFYSnlZWGxQWmxOMGNtbHVaM01zWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHJldHVybnMgIFRydWUgaWYgdGhlIHJ1bnRpbWUgaXMgTm9kZUpTLlxyXG4gKi9cbnZhciBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUoKSB7XG4gIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmICEhbW9kdWxlLmV4cG9ydHM7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc05vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpwYzA1dlpHVWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2YVhOT2IyUmxMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QWdWSEoxWlNCcFppQjBhR1VnY25WdWRHbHRaU0JwY3lCT2IyUmxTbE11WEhKY2JpQXFMMXh5WEc1amIyNXpkQ0JwYzA1dlpHVWdQU0FvS1RvZ1ltOXZiR1ZoYmlBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ0YjJSMWJHVWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdKaVlnSVNGdGIyUjFiR1V1Wlhod2IzSjBjenRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdselRtOWtaVHRjY2x4dUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlRVRXNUVUZCVFN4SFFVRkhMRk5CUVZSQkxFMUJRVk1zUjBGQlpUdEZRVU0xUWl4UFFVRlBMRTlCUVU5RExFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zUTBGQlF5eERRVUZEUVN4TlFVRk5MRU5CUVVORExFOUJRV3BFTzBGQlEwUXNRMEZHUkRzN1pVRkpaVVlzVFNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBDaGVjayBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKiBTb2x1dGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va25pY2tsYWJzL2xvcmVtLWlwc3VtLmpzL3B1bGwvNTIvZmlsZXNcclxuICpcclxuICogQHJldHVybnMgIFRydWUgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICovXG52YXIgaXNSZWFjdE5hdGl2ZSA9IGZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XG4gIHZhciBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1JlYWN0TmF0aXZlUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNSZWFjdE5hdGl2ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SnBjMUpsWVdOMFRtRjBhWFpsSWl3aWFYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2RDSXNJbTVoZG1sbllYUnZjaUlzSW5CeWIyUjFZM1FpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5TWldGamRFNWhkR2wyWlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUTJobFkyc2dhV1lnY25WdWRHbHRaU0JwY3lCU1pXRmpkRTVoZEdsMlpTNWNjbHh1SUNvZ1UyOXNkWFJwYjI0Z1ltRnpaV1FnYjI0Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwydHVhV05yYkdGaWN5OXNiM0psYlMxcGNITjFiUzVxY3k5d2RXeHNMelV5TDJacGJHVnpYSEpjYmlBcVhISmNiaUFxSUVCeVpYUjFjbTV6SUNCVWNuVmxJR2xtSUhKMWJuUnBiV1VnYVhNZ1VtVmhZM1JPWVhScGRtVXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnBjMUpsWVdOMFRtRjBhWFpsSUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4eVhHNGdJR3hsZENCcGMxSmxZV04wVG1GMGFYWmxVbVZ6ZFd4ME9pQmliMjlzWldGdUlEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lIUnllU0I3WEhKY2JpQWdJQ0JwYzFKbFlXTjBUbUYwYVhabFVtVnpkV3gwSUQwZ2JtRjJhV2RoZEc5eUxuQnliMlIxWTNRZ1BUMDlJRndpVW1WaFkzUk9ZWFJwZG1WY0lqdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMUpsWVdOMFRtRjBhWFpsVW1WemRXeDBJRDBnWm1Gc2MyVTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2FYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2REdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x6VW1WaFkzUk9ZWFJwZG1VN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR0ZCUVdFc1IwRkJSeXhUUVVGb1FrRXNZVUZCWjBJc1IwRkJaVHRGUVVOdVF5eEpRVUZKUXl4dFFrRkJORUlzUjBGQlJ5eExRVUZ1UXpzN1JVRkZRU3hKUVVGSk8wbEJRMFpCTEcxQ1FVRnRRaXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTlCUVZZc1MwRkJjMElzWVVGQk5VTTdSVUZEUkN4RFFVWkVMRU5CUlVVc1QwRkJUME1zUTBGQlVDeEZRVUZWTzBsQlExWklMRzFDUVVGdFFpeEhRVUZITEV0QlFYUkNPMFZCUTBRN08wVkJSVVFzVDBGQlQwRXNiVUpCUVZBN1FVRkRSQ3hEUVZaRU96dGxRVmxsUkN4aEluMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3BsYXRmb3JtcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCIpO1xuXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xudmFyIGlzV2luZG93cyA9IGZ1bmN0aW9uIGlzV2luZG93cygpIHtcbiAgdmFyIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gX3BsYXRmb3Jtcy5TVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNXaW5kb3dzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKcGMxZHBibVJ2ZDNNaUxDSnBjMWRwYm1SdmQzTlNaWE4xYkhRaUxDSndjbTlqWlhOeklpd2ljR3hoZEdadmNtMGlMQ0pUVlZCUVQxSlVSVVJmVUV4QlZFWlBVazFUSWl3aVYwbE9NeklpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5YYVc1a2IzZHpMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lGTlZVRkJQVWxSRlJGOVFURUZVUms5U1RWTWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDNCc1lYUm1iM0p0YzF3aU8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFQnlaWFIxY201eklGUnlkV1VnYVdZZ2NISnZZMlZ6Y3lCcGN5QjNhVzVrYjNkekxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2FYTlhhVzVrYjNkeklEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHlYRzRnSUd4bGRDQnBjMWRwYm1SdmQzTlNaWE4xYkhRNklHSnZiMnhsWVc0Z1BTQm1ZV3h6WlR0Y2NseHVJQ0IwY25rZ2UxeHlYRzRnSUNBZ2FYTlhhVzVrYjNkelVtVnpkV3gwSUQwZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlNBOVBUMGdVMVZRVUU5U1ZFVkVYMUJNUVZSR1QxSk5VeTVYU1U0ek1qdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMWRwYm1SdmQzTlNaWE4xYkhRZ1BTQm1ZV3h6WlR0Y2NseHVJQ0I5WEhKY2JpQWdjbVYwZFhKdUlHbHpWMmx1Wkc5M2MxSmxjM1ZzZER0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHpWMmx1Wkc5M2N6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVTBGQlV5eEhRVUZITEZOQlFWcEJMRk5CUVZrc1IwRkJaVHRGUVVNdlFpeEpRVUZKUXl4bFFVRjNRaXhIUVVGSExFdEJRUzlDT3p0RlFVTkJMRWxCUVVrN1NVRkRSa0VzWlVGQlpTeEhRVUZIUXl4UFFVRlBMRU5CUVVORExGRkJRVklzUzBGQmNVSkRMRGhDUVVGQkxFTkJRVzlDUXl4TFFVRXpSRHRGUVVORUxFTkJSa1FzUTBGRlJTeFBRVUZQUXl4RFFVRlFMRVZCUVZVN1NVRkRWa3dzWlVGQlpTeEhRVUZITEV0QlFXeENPMFZCUTBRN08wVkJRMFFzVDBGQlQwRXNaVUZCVUR0QlFVTkVMRU5CVWtRN08yVkJWV1ZFTEZNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xudmFyIG1ha2VBcnJheU9mTGVuZ3RoID0gZnVuY3Rpb24gbWFrZUFycmF5T2ZMZW5ndGgoKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IG1ha2VBcnJheU9mTGVuZ3RoO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpreGxibWQwYUNJc0lteGxibWQwYUNJc0lrRnljbUY1SWl3aVlYQndiSGtpTENKdFlYQWlMQ0pwZEdWdElpd2lhVzVrWlhnaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNjbHh1SUNvZ1FIQmhjbUZ0SUd4bGJtZDBhQ0JNWlc1bmRHZ2dYQ0o0WENJdVhISmNiaUFxSUVCeVpYUjFjbTV6SUNBZ0lDQWdRVzRnWVhKeVlYa2diMllnYVc1a1pYaGxjeUJ2WmlCc1pXNW5kR2dnWENKNFhDSXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQTlJQ2hzWlc1bmRHZzZJRzUxYldKbGNpQTlJREFwT2lCdWRXMWlaWEpiWFNBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUVGeWNtRjVMbUZ3Y0d4NUtHNTFiR3dzSUVGeWNtRjVLR3hsYm1kMGFDa3BMbTFoY0NoY2NseHVJQ0FnSUNocGRHVnRPaUJoYm5rc0lHbHVaR1Y0T2lCdWRXMWlaWElwT2lCdWRXMWlaWElnUFQ0Z2FXNWtaWGdzWEhKY2JpQWdLVHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxHbENRVUZwUWl4SFFVRkhMRk5CUVhCQ1FTeHBRa0ZCYjBJc1IwRkJhME03UlVGQlFTeEpRVUZxUTBNc1RVRkJhVU1zZFVWQlFXaENMRU5CUVdkQ08wVkJRekZFTEU5QlFVOURMRXRCUVVzc1EwRkJRME1zUzBGQlRpeERRVUZaTEVsQlFWb3NSVUZCYTBKRUxFdEJRVXNzUTBGQlEwUXNUVUZCUkN4RFFVRjJRaXhGUVVGcFEwY3NSMEZCYWtNc1EwRkRUQ3hWUVVGRFF5eEpRVUZFTEVWQlFWbERMRXRCUVZvN1NVRkJRU3hQUVVGelEwRXNTMEZCZEVNN1JVRkJRU3hEUVVSTExFTkJRVkE3UVVGSFJDeERRVXBFT3p0bFFVMWxUaXhwUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfbWFrZUFycmF5T2ZMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mTGVuZ3RoXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cbnZhciBtYWtlQXJyYXlPZlN0cmluZ3MgPSBmdW5jdGlvbiBtYWtlQXJyYXlPZlN0cmluZ3MobGVuZ3RoLCBtYWtlU3RyaW5nKSB7XG4gIHZhciBhcnIgPSAoMCwgX21ha2VBcnJheU9mTGVuZ3RoW1wiZGVmYXVsdFwiXSkobGVuZ3RoKTtcbiAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlU3RyaW5nKCk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gbWFrZUFycmF5T2ZTdHJpbmdzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNaUxDSnNaVzVuZEdnaUxDSnRZV3RsVTNSeWFXNW5JaXdpWVhKeUlpd2liV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ2lMQ0p0WVhBaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBabE4wY21sdVozTXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvSUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVRHVnVaM1JvWENJN1hISmNiaThxS2x4eVhHNGdLaUJBY0dGeVlXMGdiR1Z1WjNSb0lDQk1aVzVuZEdnZ1hDSjRYQ0l1WEhKY2JpQXFJRUJ5WlhSMWNtNXpJQ0FnSUNBZ0lFRnVJR0Z5Y21GNUlHOW1JSE4wY21sdVozTWdiMllnYkdWdVozUm9JRndpZUZ3aUxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2JXRnJaVUZ5Y21GNVQyWlRkSEpwYm1keklEMGdLRnh5WEc0Z0lHeGxibWQwYURvZ2JuVnRZbVZ5TEZ4eVhHNGdJRzFoYTJWVGRISnBibWM2SUNncElEMCtJSE4wY21sdVp5eGNjbHh1S1RvZ2MzUnlhVzVuVzEwZ1BUNGdlMXh5WEc0Z0lHTnZibk4wSUdGeWNpQTlJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9LR3hsYm1kMGFDazdYSEpjYmlBZ2NtVjBkWEp1SUdGeWNpNXRZWEFvS0NrZ1BUNGdiV0ZyWlZOMGNtbHVaeWdwS1R0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR3RDUVVGclFpeEhRVUZITEZOQlFYSkNRU3hyUWtGQmNVSXNRMEZEZWtKRExFMUJSSGxDTEVWQlJYcENReXhWUVVaNVFpeEZRVWRhTzBWQlEySXNTVUZCVFVNc1IwRkJSeXhIUVVGSExFbEJRVUZETERaQ1FVRkJMRVZCUVd0Q1NDeE5RVUZzUWl4RFFVRmFPMFZCUTBFc1QwRkJUMFVzUjBGQlJ5eERRVUZEUlN4SFFVRktMRU5CUVZFN1NVRkJRU3hQUVVGTlNDeFZRVUZWTEVWQlFXaENPMFZCUVVFc1EwRkJVaXhEUVVGUU8wRkJRMFFzUTBGT1JEczdaVUZSWlVZc2EwSWlmUT09IiwiZXhwb3J0IGRlZmF1bHQgXCJLbG9ub2EgKOOCr+ODreODjuOCoiwgS3Vyb25vYSksIHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyBLbG9ub2Egb2YgdGhlIFdpbmQgKOmiqOOBruOCr+ODreODjuOCoiwgS2F6ZSBubyBLdXJvbm9hKSBpcyBhbiBhbnRocm9wb21vcnBoaWMgaHVtYW5vaWQgbG9uZy1lYXJlZCBjYXQgbGlrZSBjcmVhdHVyZSB3aG8gaXMgdGhlIG1haW4gcHJvdGFnb25pc3QgaW4gdGhlIEtsb25vYSBmcmFuY2hpc2UuIEhlIHdhcyBjcmVhdGVkIGJ5IE5hbWNvIGFuZCBLbG9ub2EgV29ya3MsIGFuZCBoYXMgc3RhcnJlZCBpbiBoaXMgb3duIHNlcmllcyBzaW5jZSAxOTk3Llxcblxcbktsb25vYSBpcyBrbm93biBmb3IgYmVpbmcgYSBkZXRlcm1pbmVkLCBmcmllbmRseSBhbmQgZ29vZC1uYXR1cmVkIGluZGl2aWR1YWwsIG9mdGVuIGhlbHBpbmcgb3RoZXJzIGFuZCBzYXZpbmcgdGhlIHZhcmlvdXMgd29ybGRzIGhlIGZpbmRzIGhpbXNlbGYgaW4gZnJvbSBhbGwgc29ydHMgb2YgdHJvdWJsZS5cXG5cXG5IaXMga2luZG5lc3Mgd2FzIHJlZmxlY3RlZCBpbiBMdW5hdGVhJ3MgVmVpbCwgd2hlbiBhIHN0cmFuZ2Ugdm9pY2Ugd2FzIGNhbGxpbmcgaGltLCBrbm93biBhcyBhIFxcXCJEcmVhbSBWb2ljZVxcXCIsIGFuZCB3YXMgbGF0ZXIgZm91bmQgb3V0IHRvIGJlIHRoZSBLaW5nIG9mIFNvcnJvdywgZm9yIGhlIHdhcyBzYWQgYmVjYXVzZSBwZW9wbGUgaGFkIGZvcmdvdHRlbiBoaW0uIFdoZW4gS2xvbm9hIGFja25vd2xlZGdlZCB3aG8gdGhlIHZvaWNlIHdhcywgd2l0aCBhbiBvcGVuIGhlYXJ0LCBoZSBoZWxwZWQgdGhlIEtpbmcgb2YgU29ycm93IGJ5IHJpbmdpbmcgdGhlIEZpZnRoIEJlbGwgb2YgdGhlIEtpbmdkb20gb2YgU29ycm93IGFuZCBtYWRlIHN1cmUgdGhhdCBMdW5hdGVhIHdvdWxkIG5ldmVyIGZvcmdldCBzb3Jyb3cuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJOaWtvIGlzIHRoZSBwbGF5YWJsZSBwcm90YWdvbmlzdCBvZiBPbmVTaG90LiBUaGV5IGFyZSBhIGNoaWxkIHdpdGggYmx1ZSBoYWlyIHdpdGggdGhyZWUgXFxcIndoaXNrZXJzXFxcIiBqdXR0aW5nIG91dCBmcm9tIHRoZSBzaWRlcywgeWVsbG93IGNhdGxpa2UgZXllcywgYW5kIHRhbiBza2luLiBUaGV5IHdlYXIgYSBicm93biBvdmVyY29hdCBleHRlbmRpbmcgb3ZlciB0aGVpciBhcm1zLCBhIGxvbmcgbGlnaHQgYmx1ZSBzY2FyZiwgYSBicm93biBoYXQgd2l0aCBjYXRsaWtlIGVhcnMsIGFuZCBncmF5aXNoLXB1cnBsZSBib3R0b21zIHRoYXQgYXBwZWFyIHRvIGJlIGxlZ2dpbmdzLiBUaGV5IGFyZSB0YXNrZWQgd2l0aCByZXR1cm5pbmcgdGhlIFN1biB0byB0aGUgVG93ZXIgYW5kIHNhdmluZyB0aGUgV29ybGQgZnJvbSBkeWluZyBvdXQuXFxuXFxuICAgIE5pa28gaXMgYSB2ZXJ5IGtpbmQgYW5kIGNhcmluZyBraWQuIEJlaW5nIHRoZSBtZXNzaWFoIHRoYXQgdGhlIHByb3BoZWN5IGhhZCBmb3JldG9sZCwgdGhleSBiZWNhbWUgZGV0ZXJtaW5lZCB0byByZWFjaCB0aGUgVG93ZXIgYW5kIGJyaW5nIHRoZSBzdW4gYmFjayB0byBpdCBpbiBvcmRlciB0byBzYXZlIHRoZSBXb3JsZCwgZXZlbiBkZXNwaXRlIHZhcmlvdXMgb3RoZXIgcGVvcGxlIHN0YXRpbmcgdGhhdCB0aGUgc3VuIHdvbid0IHN0b3AgdGhlIFdvcmxkIGZyb20gZHlpbmcuIE5pa28gaXMgYWxzbyBoZWxwZnVsLCB3aGljaCBpcyBzaG93biB3aGVuIHRoZXkgcmVwYWlyIHRoZSBSb3dib3QgYXQgdGhlIGRvY2sgaW4gdGhlIEJhcnJlbnMsIGFuZCB2b2x1bnRlZXIgdG8gZmluZCBBbHVsYSBhbmQgcmV0dXJuIGhlciB0byBDYWxhbXVzIGluIHRoZSBHbGVuLlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG5pa29iaW8gZnJvbSAnLi4vLi4vZGF0YS9uaWtvLnR4dCc7XG5pbXBvcnQga2xvYmlvIGZyb20gJy4uLy4uL2RhdGEva2xvbm9hLnR4dCc7XG5pbXBvcnQgbmlrb3BvcnRyYWl0IGZyb20gJy4uLy4uL2ltYWdlcy9uaWtvLnBuZyc7XG5pbXBvcnQga2xvbm9hcG9ydHJhaXQgZnJvbSAnLi4vLi4vaW1hZ2VzL2tsb25vYS5wbmcnO1xuXG5sZXQgaW5mbyA9IHtcbiAgICBcIm5pa29cIiA6IHtcbiAgICAgICAgbmFtZTogXCJOaWtvXCIsXG4gICAgICAgIGJpbzogbmlrb2JpbyxcbiAgICAgICAgcGljdHVyZTogbmlrb3BvcnRyYWl0XG4gICAgfSxcbiAgICBcImtsb25vYVwiIDoge1xuICAgICAgICBuYW1lOiBcIktsb25vYVwiLFxuICAgICAgICBiaW86IGtsb2JpbyxcbiAgICAgICAgcGljdHVyZToga2xvbm9hcG9ydHJhaXRcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gc2hvd0Jpb2dyYXBoeSAobmFtZSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicsICdhYm91dC13cmFwJyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaW5mb1tuYW1lXS5uYW1lO1xuICAgIHRpdGxlLmNsYXNzTGlzdCA9IFwiYmlvLW5hbWVcIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgcG9ydHJhaXQgPSBuZXcgSW1hZ2U7XG4gICAgcG9ydHJhaXQuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKTtcbiAgICBwb3J0cmFpdC5zcmMgPSBpbmZvW25hbWVdLnBpY3R1cmU7XG4gICAgZGl2LmFwcGVuZENoaWxkKHBvcnRyYWl0KTtcblxuICAgIGxldCBiaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmlvLnRleHRDb250ZW50ID0gaW5mb1tuYW1lXS5iaW87XG4gICAgYmlvLmNsYXNzTGlzdC5hZGQoJ2Jpb2dyYXBoeScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChiaW8pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgc2hvd0Jpb2dyYXBoeSB9IiwiaW1wb3J0IHsgbmV3VGFibGUgfSBmcm9tIFwiLi9tYWtlVGFibGVcIjtcblxuZnVuY3Rpb24gc2hvd0hvdXJzKCkge1xuICAgIHJldHVybiBuZXdUYWJsZSgpO1xufVxuXG5leHBvcnQgeyBzaG93SG91cnMgfTsiLCJsZXQgaG91cnMgPSBbXG4gICAge1xuICAgICAgICBkYXRlOiBcIk1vbmRheVwiLFxuICAgICAgICBob3VyczogXCI2OjAwQU0gLSA4OjAwUE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRlOiBcIlR1ZXNkYXlcIixcbiAgICAgICAgaG91cnM6IFwiNjowMEFNIC0gODowMFBNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF0ZTogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgaG91cnM6IFwiNjowMEFNIC0gODowMFBNXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGF0ZTogXCJUaHVyc2RheVwiLFxuICAgICAgICBob3VyczogXCI2OjAwQU0gLSA4OjAwUE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRlOiBcIkZyaWRheVwiLFxuICAgICAgICBob3VyczogXCI2OjAwQU0gLSA4OjAwUE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBkYXRlOiBcIlNhdHVyZGF5XCIsXG4gICAgICAgIGhvdXJzOiBcIjY6MDBBTSAtIDg6MDBQTVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRhdGU6IFwiU3VuZGF5XCIsXG4gICAgICAgIGhvdXJzOiBcIkNMT1NFRFwiXG4gICAgfSxcbl1cblxuZXhwb3J0IHsgaG91cnMgfTsiLCJpbXBvcnQgeyBob3VycyB9IGZyb20gXCIuL2hvdXJzLWluZm9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1RhYmxlKCkge1xuICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICBsZXQgdGhlYWRlciA9IHQuY3JlYXRlVEhlYWQoKTtcbiAgICBsZXQgdGhlYWRlclJvdyA9IHRoZWFkZXIuaW5zZXJ0Um93KCk7XG4gICAgbGV0IHRkID0gdGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XG4gICAgdGQudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBsZXQgdGQyID0gdGhlYWRlclJvdy5pbnNlcnRDZWxsKCk7XG4gICAgdGQyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuXG4gICAgbGV0IGZvcm1hdCA9IFtcImRhdGVcIiwgXCJob3Vyc1wiXTtcblxuICAgIGxldCB0Qm9keSA9IHQuY3JlYXRlVEJvZHkoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGxldCB0Yl9yb3cgPSB0Qm9keS5pbnNlcnRSb3coKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0YnJvd190ZCA9IHRiX3Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICB0YnJvd190ZC50ZXh0Q29udGVudCA9IGhvdXJzW2ldW2Zvcm1hdFtqXV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbn0iLCJpbXBvcnQgeyByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4vY29udGVudC1yZW1vdmUuanNcIjtcbmltcG9ydCB7IHNob3dCaW9ncmFwaHkgfSBmcm9tIFwiLi9hYm91dC1leGNsdXNpdmUvZGVzY3JpcHRvci5qc1wiO1xuaW1wb3J0IHsgbmV3SGVhZGVyIH0gZnJvbSBcIi4vY2F0LWhlYWRlci5qc1wiO1xuaW1wb3J0IHsgc2hvd0hvdXJzIH0gZnJvbSBcIi4vYWJvdXQtZXhjbHVzaXZlL2Rpc3BsYXktaG91cnMuanNcIjtcbmltcG9ydCB0aXRsZSBmcm9tIFwiLi9ob21lcGFnZS1leGNsdXNpdmUuanMvdGl0bGUuanNcIjtcblxuZnVuY3Rpb24gc2hvd0Fib3V0KCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pZCcpO1xuICAgIHJlbW92ZUNvbnRlbnQobWFpbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKFwiQUJPVVQgVVNcIikpXG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0hlYWRlcihcIldITyBBUkUgV0U/XCIpKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2hvd0Jpb2dyYXBoeSgnbmlrbycpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNob3dCaW9ncmFwaHkoJ2tsb25vYScpKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3SGVhZGVyKFwiV0hFTiBBUkUgV0UgT1BFTj9cIikpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2hvd0hvdXJzKCkpO1xufVxuXG5leHBvcnQgeyBzaG93QWJvdXQgfTsiLCJpbXBvcnQgeyBMb3JlbUlwc3VtLCBsb3JlbUlwc3VtIH0gZnJvbSBcImxvcmVtLWlwc3VtXCI7XG5cbmZ1bmN0aW9uIGFydGljbGVIZWFkZXIodCkge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiYXJ0aWNsZS1oZWFkZXJcIjtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdDtcbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gaGVhZGVyQm9keSgpIHtcbiAgICBjb25zdCBsb3JlbSA9IG5ldyBMb3JlbUlwc3VtKHtcbiAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoOiB7XG4gICAgICAgICAgbWF4OiA4LFxuICAgICAgICAgIG1pbjogNFxuICAgICAgICB9LFxuICAgICAgICB3b3Jkc1BlclNlbnRlbmNlOiB7XG4gICAgICAgICAgbWF4OiAxNixcbiAgICAgICAgICBtaW46IDRcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBsb3JlbS5nZW5lcmF0ZVBhcmFncmFwaHMoMSk7XG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmZ1bmN0aW9uIG5ld0NvbnRhaW5lcih0KSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIndyYXBwZXJcIlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlSGVhZGVyKHQpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQm9keSgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQge25ld0NvbnRhaW5lcn07IiwiZnVuY3Rpb24gbmV3SGVhZGVyKHRleHQpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWQnKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgeyBuZXdIZWFkZXIgfSIsImZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQgKGVsZSkge1xuICAgIHdoaWxlKGVsZS5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmV4cG9ydCB7IHJlbW92ZUNvbnRlbnQgfSIsImZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3QnKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIldlYnNpdGUgZGVzaWduZWQgYnk6IFwiO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKCkpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsoKSB7XG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9OTUdWb3gnO1xuICAgIGxpbmsudGl0bGU9XCJHaXRodWIgTGlua1wiO1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOTUdWb3hcIik7IFxuICAgIGxpbmsuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIGxpbms7XG59XG5cbmV4cG9ydCB7c2hvd0Zvb3Rlcn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGl0bGUodGV4dCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiB0aXRsZTtcbn0iLCJpbXBvcnQgdGl0bGUgZnJvbSBcIi4vaG9tZXBhZ2UtZXhjbHVzaXZlLmpzL3RpdGxlLmpzXCI7XG5pbXBvcnQgeyBuZXdDb250YWluZXIgfSBmcm9tIFwiLi9hcnRpY2xlLmpzXCI7XG5pbXBvcnQgeyByZW1vdmVDb250ZW50IH0gZnJvbSBcIi4vY29udGVudC1yZW1vdmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlkJyk7XG5cbiAgICByZW1vdmVDb250ZW50KG1haW4pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZShcIk5pa28gJiBLbG9ub2EncyBDb2ZmZWUgVGF2ZXJuXCIpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcihcIkdFVCBSRUFEWSBUTyBTQVkgJ1dBSE9PIScgV0hFTiBZT1UgVEFTVEUgT1VSIEJSRVchXCIpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcihcIk9VUiBTVE9SWSFcIikpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKFwiQ09NRSBIQU5HIFdJVEggVVMhXCIpKTtcblxuICAgIHJldHVybiBtYWluO1xufSIsImV4cG9ydCBmdW5jdGlvbiBuZXdJdGVtKGl0ZW0pIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaXRlbS1jb250YWluZXJcIjtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgaW1hZ2Uuc3JjID0gaXRlbS5zcmM7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWFnZScpO1xuICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJpdGVtLW5hbWVcIjtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSAiLCJpbXBvcnQgeyBuZXdJdGVtIH0gZnJvbSBcIi4vZGlzcGxheS1pdGVtXCI7XG5pbXBvcnQgeyBuZXdIZWFkZXIgfSBmcm9tIFwiLi4vY2F0LWhlYWRlclwiOyBcblxuZnVuY3Rpb24gbmV3Q2F0IChpdGVtcywgdGl0bGUpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhdC1jb250YWluZXInKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdIZWFkZXIodGl0bGUpKTtcblxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1ncmlkXCIpO1xuXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChuZXdJdGVtKGl0ZW0pKTtcbiAgICB9KTtcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgbmV3Q2F0IH07IiwiaW1wb3J0IG15aW1nIGZyb20gJy4uLy4uL2ltYWdlcy9lc3ByZXNzby5qcGcnO1xuaW1wb3J0IHBhbmNha2UgZnJvbSAnLi4vLi4vaW1hZ2VzL3BhbmNha2UuanBnJztcbmltcG9ydCBjYXBwIGZyb20gJy4uLy4uL2ltYWdlcy9jYXBwLlBORyc7XG5pbXBvcnQga2xvc3BlY2lhbCBmcm9tICcuLi8uLi9pbWFnZXMva2xvc3BlY2lhbC5QTkcnO1xuaW1wb3J0IHN0ZWFrZWdncyBmcm9tICcuLi8uLi9pbWFnZXMvc3RlYWtlZ2dzLlBORyc7XG5pbXBvcnQgbW9jaGEgZnJvbSAnLi4vLi4vaW1hZ2VzL21vY2hhLlBORyc7XG5pbXBvcnQgdmVsdmV0YnJldyBmcm9tICcuLi8uLi9pbWFnZXMvZGFya3ZlbHZldC5QTkcnO1xuaW1wb3J0IHNlYiBmcm9tICcuLi8uLi9pbWFnZXMvc2F1c2JhZ2VsLlBORyc7XG5pbXBvcnQgcmVkdmVsdmV0IGZyb20gJy4uLy4uL2ltYWdlcy9yZWR2ZWx2ZXRjYWtlLmpwZyc7XG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2ltYWdlcy9zdWdhcmNvb2tpZS5qcGcnO1xuXG5sZXQgZHJpbmtzID0gW1xuICAgIHtcbiAgICAgICAgc3JjOiBtb2NoYSxcbiAgICAgICAgbmFtZTogXCJOaWtvJ3MgU3RhcnJ5IE1vY2hhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiB2ZWx2ZXRicmV3LFxuICAgICAgICBuYW1lOiBcIkRhcmsgVmVsdmV0IEJyZXdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IG15aW1nLFxuICAgICAgICBuYW1lOiBcIk9uZVNob3QgUXVpY2tTaG90IEVzcHJlc3NvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBjYXBwLFxuICAgICAgICBuYW1lOiBcIldhaG9vIENhcHB1Y2Npbm9cIlxuICAgIH1cbl1cblxubGV0IGZvb2QgPSBbXG4gICAge1xuICAgICAgICBzcmM6IHBhbmNha2UsXG4gICAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIFBhbmFjYWtlc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogc3RlYWtlZ2dzLFxuICAgICAgICBuYW1lOiBcIlN0ZWFrIGFuZCBFZ2dzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBzZWIsXG4gICAgICAgIG5hbWU6IFwiU2F1c2FnZS1FZ2cgQmFnZWxcIlxuICAgIH0sXG5dXG5cbmxldCBkZXNzZXJ0ID0gW1xuICAgIHtcbiAgICAgICAgc3JjOiBjb29raWUsXG4gICAgICAgIG5hbWU6IFwiU3VnYXJpZXN0IENvb2tpZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogcmVkdmVsdmV0LFxuICAgICAgICBuYW1lOiBcIlJlZCBWZWx2ZXQgQ2FrZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzoga2xvc3BlY2lhbCxcbiAgICAgICAgbmFtZTogXCJUaGUgS2xvbm9hIFNwZWNpYWxcIlxuICAgIH0sXG5dXG5cbmV4cG9ydCB7IGRyaW5rcywgZm9vZCwgZGVzc2VydCB9OyIsImltcG9ydCB7IHJlbW92ZUNvbnRlbnQgfSBmcm9tIFwiLi9jb250ZW50LXJlbW92ZS5qc1wiO1xuaW1wb3J0IHsgbmV3Q2F0IH0gZnJvbSBcIi4vbWVudS1leGx1c2l2ZS9tZW51LWNhdGVnb3J5LmpzXCI7XG5pbXBvcnQgeyBkcmlua3MsIGZvb2QsIGRlc3NlcnQgfSBmcm9tIFwiLi9tZW51LWV4bHVzaXZlL21lbnUtaXRlbXMuanNcIjtcblxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlkJylcbiAgICByZW1vdmVDb250ZW50KG1haW4pO1xuICAgIFxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuZXdDYXQoZHJpbmtzLCBcIkRSSU5LU1wiKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChuZXdDYXQoZm9vZCwgXCJGT09EXCIpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0NhdChkZXNzZXJ0LCBcIkRFU1NFUlRcIikpO1xufVxuXG5leHBvcnQge3Nob3dNZW51fTsiLCJpbXBvcnQgeyBuYXZJdGVtIH0gZnJvbSAnLi9uYXZpdGVtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU5hdigpIHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTmFtZSA9IFwibmF2YmFyXCI7XG5cbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2SXRlbShcIkhvbWVcIikpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZJdGVtKFwiTWVudVwiKSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW0oXCJBYm91dFwiKSk7XG5cbiAgICByZXR1cm4gbmF2YmFyO1xufSIsImZ1bmN0aW9uIG5hdkl0ZW0odGV4dCkge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaXRlbS5pZCA9IHRleHQ7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQge25hdkl0ZW19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGRpc3BsYXlOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXIuanNcIjtcbmltcG9ydCBzaG93SG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVwYWdlLmpzXCI7XG5pbXBvcnQgeyBzaG93Rm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci5qcyc7XG5pbXBvcnQgeyBzaG93TWVudSB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5qc1wiO1xuaW1wb3J0IHsgc2hvd0Fib3V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hYm91dC5qc1wiO1xuXG5mdW5jdGlvbiBzaG93RGVmYXVsdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZGlzcGxheU5hdigpKTtcblxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSAnbWlkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc2hvd0hvbWUoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHNob3dGb290ZXIoKSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgc2hvd01lbnUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNIb21lJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBzaG93SG9tZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Fib3V0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBzaG93QWJvdXQpO1xufVxuLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc2hvd0hvbWUoKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2hvd0RlZmF1bHQpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=