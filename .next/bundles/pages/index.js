
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(558);


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

var _page_head = __webpack_require__(570);

var _page_head2 = _interopRequireDefault(_page_head);

var _header = __webpack_require__(572);

var _header2 = _interopRequireDefault(_header);

var _banner = __webpack_require__(604);

var _banner2 = _interopRequireDefault(_banner);

var _business_challenges = __webpack_require__(606);

var _business_challenges2 = _interopRequireDefault(_business_challenges);

var _product_features = __webpack_require__(607);

var _product_features2 = _interopRequireDefault(_product_features);

var _footer = __webpack_require__(608);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/pages/index.js?entry';


var page = function page() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_page_head2.default, { pageTitle: 'Index Page', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_header2.default, { pageTitle: 'NextJS Example - Home', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('main', { className: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_banner2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_business_challenges2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_product_features2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};

exports.default = page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _global = __webpack_require__(571);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/common/page_head.js';


var pageHead = function pageHead(_ref) {
  var pageTitle = _ref.pageTitle;
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, pageTitle), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('meta', {
    name: 'mobile-webb-app-capable',
    content: 'yes', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', {
    name: 'apple-mobile-webb-app-capable',
    content: 'yes', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _global2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
};

exports.default = pageHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/common/page_head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/common/page_head.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

var __styledJsxDefaultExport = new String("html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}header{background-color:#321f3e;padding:2%;text-align:left}header .logo{color:#fff;height:50px;width:auto}@media screen and (min-width:1040px){header .logo{height:70px}}.banner{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-mobile.jpg\");background-position:right bottom;background-size:cover;color:#fff;margin-top:-20px;min-height:70vh;padding-bottom:14%;padding-left:3%;padding-right:3%;padding-top:2%}@media screen and (min-width:640px){.banner{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-tablet.jpg\")}}@media screen and (min-width:1040px){.banner{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-web.jpg\");text-align:left}}.banner h1{font-size:55px;font-weight:normal;line-height:55px;padding:50px}@media screen and (min-width:1040px){.banner h1{padding:0}}.banner .button{background-color:#fff;border-color:#fff;color:#9e1e62}.banner .button:hover{background-color:#9e1e62;color:#fff}.banner span{font-size:20px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px}.businessChallenges{font-size:18px;padding:100px}@media screen and (min-width:1040px){.challengeItem{display:inline-block;max-width:30vw;margin:20px}}.productFeatures{background-color:#f7f7f7;padding:20px}.productFeatures h2{padding-top:20px}@media screen and (min-width:1040px){.productFeatures{padding:0}}.featureContainer{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.featureDescription{background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;margin-bottom:2vw;padding:20px;width:80vw}.featureDescription h3{font-size:22px}.featureDescription p{font-size:18px}@media screen and (min-width:1040px){.featureDescription{display:inline-block;margin-left:3vw;margin-right:3vw;min-height:400px;width:24vw}}.siteNavigation{background-color:#321f3e}.siteNavigation a{border-bottom:1px solid #fff;color:#fff;display:block;padding:20px;text-decoration:none;-webkit-transition:all linear .3s;-webkit-transition:all linear .3s;transition:all linear .3s}.siteNavigation a:hover{background-color:#fff;color:#321f3e}.siteNavigation a:last-of-type{border-bottom:0}@media screen and (min-width:1040px){.siteNavigation a{border-bottom:none;border-radius:5px;display:inline-block}}.siteNavigation .closed{height:0}@media screen and (min-width:1040px){.siteNavigation{position:absolute;right:0;top:0}.siteNavigation.closed{height:100%}}footer{background-color:#141418;color:#fff;-ms-flex-negative:0;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;margin-top:auto;padding:20px}html{height:100%}body{background-color:#161618;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:'Source Sans Pro',sans-serif;min-height:100vh;text-align:center}.content{background-color:#fff;min-height:55vh;padding:20px 0}.button{background-color:#9e1e62;border:1px solid #9e1e62;border-radius:35px;color:#fff;cursor:pointer;display:block;font-size:20px;margin:40px 15vw;max-width:60vw;padding:14px 20px;text-decoration:none;-webkit-transition:all linear .3s;-webkit-transition:all linear .3s;transition:all linear .3s}.button:hover{background-color:#fff;color:#9e1e62}@media screen and (min-width:1040px){.button{display:inline-block;margin-left:5vw;margin-right:0}.button:first-of-type{margin-left:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxBQWFvQixBQWFSLEFBYUssQUFTQSxBQWVBLEFBUUUsQUFTZSxBQVlFLEFBYUosQUFVVixBQVlDLEFBU0QsQUFXYyxBQVNmLEFBUUksQUFTUixBQVVBLEFBT0MsQUFJSixBQVlVLEFBUVIsQUFTSyxBQVFGLEFBZ0JPLEFBYU4sQUFVRyxBQWFNLEFBV1IsQUFZWSxBQVFBLEFBV0EsQUFlVCxBQVNQLEFBVWdCLEFBV2xCLEFBU2lCLEFBVUwsQUFTRSxBQWNaLEFBUUksQUFXRyxBQVFSLEFBV0EsQUFJWSxBQUtaLEFBTUssQUFHb0YsQUFhSSxBQUlILEFBSXRGLEFBT0QsQUFHUSxBQUtLLEFBSVosQUFJRixBQUtRLEFBS0UsQUFJTixBQUlMLEFBR00sQUFPRSxBQVNMLEFBR0EsQUFJUSxBQU9BLEFBR00sQUFTTCxBQUlOLEFBSUssQUFLZCxBQUlXLEFBSUosQUFHTyxBQVFiLEFBR2EsQUFhSCxBQUtHLEFBZUQsQUFLQyxBQUlMLFNBam5CdEIsQUFpakJjLENBNUZLLEFBa0NGLENBL1VqQixBQXlRZ0IsQ0F6RmhCLEFBOEZxQixBQW1JQSxBQVdOLENBeFlKLEFBaU9YLEFBV0EsQ0EzWkEsQUFTa0IsQUFlbEIsQUE4R0EsQUFVZ0IsQUFzS2hCLEFBK0RBLEFBK091QixDQTdjdkIsQUEyU3VCLEFBbUJBLEFBSVAsQUFvQ0ksQUFHQSxDQWhlcEIsQUFnS0EsQUEyVnVCLENBcmpCSyxBQXVQNUIsQUF5UXNCLENBalh0QixBQW1FQSxBQXVFWSxBQThIWixBQTRLYyxDQTdkYyxBQXFCNUIsQUErYjBCLENBeGMxQixBQStJQSxBQXVRc0IsQ0F2VXRCLEFBc0kwQixBQTJGMUIsQUFzRm1CLEFBdUNHLEFBNEZBLENBcGVULEFBbURiLEFBNFJzQixBQXlDRCxBQW1DRCxBQWdERixBQW9CQSxDQTVZRCxBQXFORixDQXZFZixDQWlFYSxBQWtESSxBQWtCRixBQXdDYSxBQXFDZixBQVdTLEFBa0JLLENBelYzQixBQW1IZSxBQW1NSCxFQXpaUSxBQStHcEIsQ0E5THVDLEFBa1JqQixBQXFJTCxBQXNERixDQXJnQmYsQUFpUUEsQUFRQSxBQVdnQyxBQWtDQSxDQXZSQyxDQVlqQixBQXVEQSxBQThiSCxDQTVhYixDQXVTZ0IsQUE4QkssRUFuQ0gsQUFpREEsQUFjRixBQXlESyxBQXlCQyxBQTJDSCxDQXRGSSxBQTJCTSxBQWlFUixDQWpaRixBQWtSSCxBQXNHQyxDQWpPakIsQ0FxR2tCLEFBa0NILEFBaUNHLENBMUJRLEVBL2dCTSxFQXNHVyxBQWlPM0MsQUE4UXNCLENBdGdCdEIsQUF1REEsQUFxQzBCLEVBNlVULENBMUlqQixDQXlQcUIsQ0ExSUosQ0FyS0QsQUFrQ0osQUErRk8sQUFrTUcsQ0F6QkosQ0EvaEJQLEFBbWFRLEFBMERJLEFBVU4sQ0EvVE4sQ0FnV1MsRUFqQlUsR0ExQ1IsQ0FyTHRCLENBdlJtQixDQXdLbkIsQUFpUGtCLENBeUhILENBMWZmLEFBNk5nQixDQWtQUyxFQTZEWixDQTViYixDQXFYaUIsRUFoaUJqQixPQW9FQSxBQXFQaUIsQUErU0EsRUF4RUMsSUExYnlCLEVBcWNMLE9BalAxQixBQStTSSxJQW5KTSxHQWpCYSxBQVkwRSxHQXRKeEYsR0FrTEcsQ0FtQ0osQUEwRkgsQ0EvQkMsSUFuRUcsQ0FsREUsSUEvV3ZCLEdBcWM4QixFQWhQOUIsQUErU21CLEVBL0JKLENBM0RBLE1BUk0sRUFuRUcsSUFzSVIsQUFVYyxDQXBFakIsQ0EwRkksVUExRkgsS0EyRk0sQ0F0S1AsVUFnSmtCLENBL0laLE1Bc0tJLFFBbEVRLEdBbkdiLEtBZ0VJLEtBc0djLENBdkJKLEtBOUlYLG1CQUNILEVBOEljLE9BdUJKLE9BcEtULGlCQUNGLGVBQUMscUJBbUtXLFdBdEJlLHlDQUN6QixpQkFDQyxrQkFBQyIsImZpbGUiOiJzdHlsZXMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pbW1vL21pc2MvbmV4dGpzLWV4YW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxcbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mIGBib2xkZXJgIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMsIC8qIDEgKi9cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5jYW52YXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRkZW5cXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMWYzZTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgaGVhZGVyIC5sb2dvIHtcXG4gICAgICAgIGhlaWdodDogNzBweDsgfSB9XFxuXFxuLmJhbm5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvdHJhdmVsLWNsb3VkLWhlYWRlci1tb2JpbGUuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTQlO1xcbiAgcGFkZGluZy1sZWZ0OiAzJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgcGFkZGluZy10b3A6IDIlOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gICAgLmJhbm5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3RyYXZlbC1jbG91ZC1oZWFkZXItdGFibGV0LmpwZ1xcXCIpOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLmJhbm5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3RyYXZlbC1jbG91ZC1oZWFkZXItd2ViLmpwZ1xcXCIpO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH0gfVxcblxcbi5iYW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDU1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xcbiAgICBwYWRkaW5nOiA1MHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgLmJhbm5lciBoMSB7XFxuICAgICAgICBwYWRkaW5nOiAwOyB9IH1cXG5cXG4uYmFubmVyIC5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjOWUxZTYyOyB9XFxuXFxuLmJhbm5lciAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWUxZTYyO1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJhbm5lciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyB9XFxuXFxuLmJ1c2luZXNzQ2hhbGxlbmdlcyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAxMDBweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgLmNoYWxsZW5nZUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgbWFyZ2luOiAyMHB4OyB9IH1cXG5cXG4ucHJvZHVjdEZlYXR1cmVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLnByb2R1Y3RGZWF0dXJlcyBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgIC5wcm9kdWN0RmVhdHVyZXMge1xcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxcblxcbi5mZWF0dXJlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZmVhdHVyZURlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgwdnc7IH1cXG5cXG4uZmVhdHVyZURlc2NyaXB0aW9uIGgzIHtcXG4gICAgZm9udC1zaXplOiAyMnB4OyB9XFxuXFxuLmZlYXR1cmVEZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgIC5mZWF0dXJlRGVzY3JpcHRpb24ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgIG1hcmdpbi1yaWdodDogM3Z3O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICAgIHdpZHRoOiAyNHZ3OyB9IH1cXG5cXG4uc2l0ZU5hdmlnYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMWYzZTsgfVxcblxcbi5zaXRlTmF2aWdhdGlvbiBhIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjNzO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zczsgfVxcblxcbi5zaXRlTmF2aWdhdGlvbiBhOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIGNvbG9yOiAjMzIxZjNlOyB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIGE6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAwOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgLnNpdGVOYXZpZ2F0aW9uIGEge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIC5jbG9zZWQge1xcbiAgICBoZWlnaHQ6IDA7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLnNpdGVOYXZpZ2F0aW9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgICAgLnNpdGVOYXZpZ2F0aW9uLmNsb3NlZCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IH0gfVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE4O1xcbiAgY29sb3I6ICNmZmY7XFxuICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDU1dmg7XFxuICBwYWRkaW5nOiAyMHB4IDA7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTFlNjI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOWUxZTYyO1xcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDQwcHggMTV2dztcXG4gIG1heC13aWR0aDogNjB2dztcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zczsgfVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzllMWU2MjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgICAuYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAuYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxcblwiIl19 */\n/*@ sourceURL=styles/global.scss */");

__styledJsxDefaultExport.__hash = "13264778073";
__styledJsxDefaultExport.__scoped = "html[data-jsx-ext~=\"23264778073\"]{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body[data-jsx-ext~=\"23264778073\"]{margin:0}article[data-jsx-ext~=\"23264778073\"],aside[data-jsx-ext~=\"23264778073\"],footer[data-jsx-ext~=\"23264778073\"],header[data-jsx-ext~=\"23264778073\"],nav[data-jsx-ext~=\"23264778073\"],section[data-jsx-ext~=\"23264778073\"]{display:block}h1[data-jsx-ext~=\"23264778073\"]{font-size:2em;margin:0.67em 0}figcaption[data-jsx-ext~=\"23264778073\"],figure[data-jsx-ext~=\"23264778073\"],main[data-jsx-ext~=\"23264778073\"]{display:block}figure[data-jsx-ext~=\"23264778073\"]{margin:1em 40px}hr[data-jsx-ext~=\"23264778073\"]{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre[data-jsx-ext~=\"23264778073\"]{font-family:monospace,monospace;font-size:1em}a[data-jsx-ext~=\"23264778073\"]{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title][data-jsx-ext~=\"23264778073\"]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-jsx-ext~=\"23264778073\"],strong[data-jsx-ext~=\"23264778073\"]{font-weight:inherit}b[data-jsx-ext~=\"23264778073\"],strong[data-jsx-ext~=\"23264778073\"]{font-weight:bolder}code[data-jsx-ext~=\"23264778073\"],kbd[data-jsx-ext~=\"23264778073\"],samp[data-jsx-ext~=\"23264778073\"]{font-family:monospace,monospace;font-size:1em}dfn[data-jsx-ext~=\"23264778073\"]{font-style:italic}mark[data-jsx-ext~=\"23264778073\"]{background-color:#ff0;color:#000}small[data-jsx-ext~=\"23264778073\"]{font-size:80%}sub[data-jsx-ext~=\"23264778073\"],sup[data-jsx-ext~=\"23264778073\"]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-jsx-ext~=\"23264778073\"]{bottom:-0.25em}sup[data-jsx-ext~=\"23264778073\"]{top:-0.5em}audio[data-jsx-ext~=\"23264778073\"],video[data-jsx-ext~=\"23264778073\"]{display:inline-block}audio[data-jsx-ext~=\"23264778073\"]:not([controls]){display:none;height:0}img[data-jsx-ext~=\"23264778073\"]{border-style:none}svg[data-jsx-ext~=\"23264778073\"]:not(:root){overflow:hidden}button[data-jsx-ext~=\"23264778073\"],input[data-jsx-ext~=\"23264778073\"],optgroup[data-jsx-ext~=\"23264778073\"],select[data-jsx-ext~=\"23264778073\"],textarea[data-jsx-ext~=\"23264778073\"]{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button[data-jsx-ext~=\"23264778073\"],input[data-jsx-ext~=\"23264778073\"]{overflow:visible}button[data-jsx-ext~=\"23264778073\"],select[data-jsx-ext~=\"23264778073\"]{text-transform:none}button[data-jsx-ext~=\"23264778073\"],html[data-jsx-ext~=\"23264778073\"] [type=\"button\"][data-jsx-ext~=\"23264778073\"],[type=\"reset\"][data-jsx-ext~=\"23264778073\"],[type=\"submit\"][data-jsx-ext~=\"23264778073\"]{-webkit-appearance:button}button[data-jsx-ext~=\"23264778073\"]::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner[data-jsx-ext~=\"23264778073\"],[type=\"reset\"]::-moz-focus-inner[data-jsx-ext~=\"23264778073\"],[type=\"submit\"]::-moz-focus-inner[data-jsx-ext~=\"23264778073\"]{border-style:none;padding:0}button[data-jsx-ext~=\"23264778073\"]:-moz-focusring,[type=\"button\"]:-moz-focusring[data-jsx-ext~=\"23264778073\"],[type=\"reset\"]:-moz-focusring[data-jsx-ext~=\"23264778073\"],[type=\"submit\"]:-moz-focusring[data-jsx-ext~=\"23264778073\"]{outline:1px dotted ButtonText}fieldset[data-jsx-ext~=\"23264778073\"]{padding:0.35em 0.75em 0.625em}legend[data-jsx-ext~=\"23264778073\"]{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-jsx-ext~=\"23264778073\"]{display:inline-block;vertical-align:baseline}textarea[data-jsx-ext~=\"23264778073\"]{overflow:auto}[type=\"checkbox\"][data-jsx-ext~=\"23264778073\"],[type=\"radio\"][data-jsx-ext~=\"23264778073\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button[data-jsx-ext~=\"23264778073\"],[type=\"number\"]::-webkit-outer-spin-button[data-jsx-ext~=\"23264778073\"]{height:auto}[type=\"search\"][data-jsx-ext~=\"23264778073\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button[data-jsx-ext~=\"23264778073\"],[type=\"search\"]::-webkit-search-decoration[data-jsx-ext~=\"23264778073\"]{-webkit-appearance:none}[data-jsx-ext~=\"23264778073\"]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[data-jsx-ext~=\"23264778073\"],menu[data-jsx-ext~=\"23264778073\"]{display:block}summary[data-jsx-ext~=\"23264778073\"]{display:list-item}canvas[data-jsx-ext~=\"23264778073\"]{display:inline-block}template[data-jsx-ext~=\"23264778073\"]{display:none}[hidden][data-jsx-ext~=\"23264778073\"]{display:none}header[data-jsx-ext~=\"23264778073\"]{background-color:#321f3e;padding:2%;text-align:left}header[data-jsx-ext~=\"23264778073\"] .logo[data-jsx-ext~=\"23264778073\"]{color:#fff;height:50px;width:auto}@media screen and (min-width:1040px){header[data-jsx-ext~=\"23264778073\"] .logo[data-jsx-ext~=\"23264778073\"]{height:70px}}.banner[data-jsx-ext~=\"23264778073\"]{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-mobile.jpg\");background-position:right bottom;background-size:cover;color:#fff;margin-top:-20px;min-height:70vh;padding-bottom:14%;padding-left:3%;padding-right:3%;padding-top:2%}@media screen and (min-width:640px){.banner[data-jsx-ext~=\"23264778073\"]{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-tablet.jpg\")}}@media screen and (min-width:1040px){.banner[data-jsx-ext~=\"23264778073\"]{background-image:url(\"http://travel.cloud/wp-content/uploads/2017/03/travel-cloud-header-web.jpg\");text-align:left}}.banner[data-jsx-ext~=\"23264778073\"] h1[data-jsx-ext~=\"23264778073\"]{font-size:55px;font-weight:normal;line-height:55px;padding:50px}@media screen and (min-width:1040px){.banner[data-jsx-ext~=\"23264778073\"] h1[data-jsx-ext~=\"23264778073\"]{padding:0}}.banner[data-jsx-ext~=\"23264778073\"] .button[data-jsx-ext~=\"23264778073\"]{background-color:#fff;border-color:#fff;color:#9e1e62}.banner[data-jsx-ext~=\"23264778073\"] .button[data-jsx-ext~=\"23264778073\"]:hover{background-color:#9e1e62;color:#fff}.banner[data-jsx-ext~=\"23264778073\"] span[data-jsx-ext~=\"23264778073\"]{font-size:20px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px}.businessChallenges[data-jsx-ext~=\"23264778073\"]{font-size:18px;padding:100px}@media screen and (min-width:1040px){.challengeItem[data-jsx-ext~=\"23264778073\"]{display:inline-block;max-width:30vw;margin:20px}}.productFeatures[data-jsx-ext~=\"23264778073\"]{background-color:#f7f7f7;padding:20px}.productFeatures[data-jsx-ext~=\"23264778073\"] h2[data-jsx-ext~=\"23264778073\"]{padding-top:20px}@media screen and (min-width:1040px){.productFeatures[data-jsx-ext~=\"23264778073\"]{padding:0}}.featureContainer[data-jsx-ext~=\"23264778073\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.featureDescription[data-jsx-ext~=\"23264778073\"]{background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;-ms-flex-grow:1;flex-grow:1;margin-bottom:2vw;padding:20px;width:80vw}.featureDescription[data-jsx-ext~=\"23264778073\"] h3[data-jsx-ext~=\"23264778073\"]{font-size:22px}.featureDescription[data-jsx-ext~=\"23264778073\"] p[data-jsx-ext~=\"23264778073\"]{font-size:18px}@media screen and (min-width:1040px){.featureDescription[data-jsx-ext~=\"23264778073\"]{display:inline-block;margin-left:3vw;margin-right:3vw;min-height:400px;width:24vw}}.siteNavigation[data-jsx-ext~=\"23264778073\"]{background-color:#321f3e}.siteNavigation[data-jsx-ext~=\"23264778073\"] a[data-jsx-ext~=\"23264778073\"]{border-bottom:1px solid #fff;color:#fff;display:block;padding:20px;text-decoration:none;-webkit-transition:all linear .3s;-webkit-transition:all linear .3s;transition:all linear .3s}.siteNavigation[data-jsx-ext~=\"23264778073\"] a[data-jsx-ext~=\"23264778073\"]:hover{background-color:#fff;color:#321f3e}.siteNavigation[data-jsx-ext~=\"23264778073\"] a[data-jsx-ext~=\"23264778073\"]:last-of-type{border-bottom:0}@media screen and (min-width:1040px){.siteNavigation[data-jsx-ext~=\"23264778073\"] a[data-jsx-ext~=\"23264778073\"]{border-bottom:none;border-radius:5px;display:inline-block}}.siteNavigation[data-jsx-ext~=\"23264778073\"] .closed[data-jsx-ext~=\"23264778073\"]{height:0}@media screen and (min-width:1040px){.siteNavigation[data-jsx-ext~=\"23264778073\"]{position:absolute;right:0;top:0}.siteNavigation.closed[data-jsx-ext~=\"23264778073\"]{height:100%}}footer[data-jsx-ext~=\"23264778073\"]{background-color:#141418;color:#fff;-ms-flex-negative:0;-webkit-flex-shrink:0;-ms-flex-shrink:0;flex-shrink:0;margin-top:auto;padding:20px}html[data-jsx-ext~=\"23264778073\"]{height:100%}body[data-jsx-ext~=\"23264778073\"]{background-color:#161618;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:'Source Sans Pro',sans-serif;min-height:100vh;text-align:center}.content[data-jsx-ext~=\"23264778073\"]{background-color:#fff;min-height:55vh;padding:20px 0}.button[data-jsx-ext~=\"23264778073\"]{background-color:#9e1e62;border:1px solid #9e1e62;border-radius:35px;color:#fff;cursor:pointer;display:block;font-size:20px;margin:40px 15vw;max-width:60vw;padding:14px 20px;text-decoration:none;-webkit-transition:all linear .3s;-webkit-transition:all linear .3s;transition:all linear .3s}.button[data-jsx-ext~=\"23264778073\"]:hover{background-color:#fff;color:#9e1e62}@media screen and (min-width:1040px){.button[data-jsx-ext~=\"23264778073\"]{display:inline-block;margin-left:5vw;margin-right:0}.button[data-jsx-ext~=\"23264778073\"]:first-of-type{margin-left:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxBQWFvQixBQWFSLEFBYUssQUFTQSxBQWVBLEFBUUUsQUFTZSxBQVlFLEFBYUosQUFVVixBQVlDLEFBU0QsQUFXYyxBQVNmLEFBUUksQUFTUixBQVVBLEFBT0MsQUFJSixBQVlVLEFBUVIsQUFTSyxBQVFGLEFBZ0JPLEFBYU4sQUFVRyxBQWFNLEFBV1IsQUFZWSxBQVFBLEFBV0EsQUFlVCxBQVNQLEFBVWdCLEFBV2xCLEFBU2lCLEFBVUwsQUFTRSxBQWNaLEFBUUksQUFXRyxBQVFSLEFBV0EsQUFJWSxBQUtaLEFBTUssQUFHb0YsQUFhSSxBQUlILEFBSXRGLEFBT0QsQUFHUSxBQUtLLEFBSVosQUFJRixBQUtRLEFBS0UsQUFJTixBQUlMLEFBR00sQUFPRSxBQVNMLEFBR0EsQUFJUSxBQU9BLEFBR00sQUFTTCxBQUlOLEFBSUssQUFLZCxBQUlXLEFBSUosQUFHTyxBQVFiLEFBR2EsQUFhSCxBQUtHLEFBZUQsQUFLQyxBQUlMLFNBam5CdEIsQUFpakJjLENBNUZLLEFBa0NGLENBL1VqQixBQXlRZ0IsQ0F6RmhCLEFBOEZxQixBQW1JQSxBQVdOLENBeFlKLEFBaU9YLEFBV0EsQ0EzWkEsQUFTa0IsQUFlbEIsQUE4R0EsQUFVZ0IsQUFzS2hCLEFBK0RBLEFBK091QixDQTdjdkIsQUEyU3VCLEFBbUJBLEFBSVAsQUFvQ0ksQUFHQSxDQWhlcEIsQUFnS0EsQUEyVnVCLENBcmpCSyxBQXVQNUIsQUF5UXNCLENBalh0QixBQW1FQSxBQXVFWSxBQThIWixBQTRLYyxDQTdkYyxBQXFCNUIsQUErYjBCLENBeGMxQixBQStJQSxBQXVRc0IsQ0F2VXRCLEFBc0kwQixBQTJGMUIsQUFzRm1CLEFBdUNHLEFBNEZBLENBcGVULEFBbURiLEFBNFJzQixBQXlDRCxBQW1DRCxBQWdERixBQW9CQSxDQTVZRCxBQXFORixDQXZFZixDQWlFYSxBQWtESSxBQWtCRixBQXdDYSxBQXFDZixBQVdTLEFBa0JLLENBelYzQixBQW1IZSxBQW1NSCxFQXpaUSxBQStHcEIsQ0E5THVDLEFBa1JqQixBQXFJTCxBQXNERixDQXJnQmYsQUFpUUEsQUFRQSxBQVdnQyxBQWtDQSxDQXZSQyxDQVlqQixBQXVEQSxBQThiSCxDQTVhYixDQXVTZ0IsQUE4QkssRUFuQ0gsQUFpREEsQUFjRixBQXlESyxBQXlCQyxBQTJDSCxDQXRGSSxBQTJCTSxBQWlFUixDQWpaRixBQWtSSCxBQXNHQyxDQWpPakIsQ0FxR2tCLEFBa0NILEFBaUNHLENBMUJRLEVBL2dCTSxFQXNHVyxBQWlPM0MsQUE4UXNCLENBdGdCdEIsQUF1REEsQUFxQzBCLEVBNlVULENBMUlqQixDQXlQcUIsQ0ExSUosQ0FyS0QsQUFrQ0osQUErRk8sQUFrTUcsQ0F6QkosQ0EvaEJQLEFBbWFRLEFBMERJLEFBVU4sQ0EvVE4sQ0FnV1MsRUFqQlUsR0ExQ1IsQ0FyTHRCLENBdlJtQixDQXdLbkIsQUFpUGtCLENBeUhILENBMWZmLEFBNk5nQixDQWtQUyxFQTZEWixDQTViYixDQXFYaUIsRUFoaUJqQixPQW9FQSxBQXFQaUIsQUErU0EsRUF4RUMsSUExYnlCLEVBcWNMLE9BalAxQixBQStTSSxJQW5KTSxHQWpCYSxBQVkwRSxHQXRKeEYsR0FrTEcsQ0FtQ0osQUEwRkgsQ0EvQkMsSUFuRUcsQ0FsREUsSUEvV3ZCLEdBcWM4QixFQWhQOUIsQUErU21CLEVBL0JKLENBM0RBLE1BUk0sRUFuRUcsSUFzSVIsQUFVYyxDQXBFakIsQ0EwRkksVUExRkgsS0EyRk0sQ0F0S1AsVUFnSmtCLENBL0laLE1Bc0tJLFFBbEVRLEdBbkdiLEtBZ0VJLEtBc0djLENBdkJKLEtBOUlYLG1CQUNILEVBOEljLE9BdUJKLE9BcEtULGlCQUNGLGVBQUMscUJBbUtXLFdBdEJlLHlDQUN6QixpQkFDQyxrQkFBQyIsImZpbGUiOiJzdHlsZXMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VSb290IjoiL1VzZXJzL25pbW1vL21pc2MvbmV4dGpzLWV4YW1wbGUiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLyohIG5vcm1hbGl6ZS5jc3MgdjcuMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpblxcbiAqICAgIElFIG9uIFdpbmRvd3MgUGhvbmUgYW5kIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbm1haW4geyAvKiAxICovXFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IG1hcmdpbiBpbiBJRSA4LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIGdhcHMgaW4gbGlua3MgdW5kZXJsaW5lIGluIGlPUyA4KyBhbmQgU2FmYXJpIDgrLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gYW5kIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUHJldmVudCB0aGUgZHVwbGljYXRlIGFwcGxpY2F0aW9uIG9mIGBib2xkZXJgIGJ5IHRoZSBuZXh0IHJ1bGUgaW4gU2FmYXJpIDYuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgYmFja2dyb3VuZCBhbmQgY29sb3IgaW4gSUUgOS0uXFxuICovXFxuXFxubWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2BcXG4gKiAgICBjb250cm9scyBpbiBBbmRyb2lkIDQuXFxuICogMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMsIC8qIDEgKi9cXG5tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5jYW52YXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIaWRkZW5cXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMWYzZTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgaGVhZGVyIC5sb2dvIHtcXG4gICAgICAgIGhlaWdodDogNzBweDsgfSB9XFxuXFxuLmJhbm5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvdHJhdmVsLWNsb3VkLWhlYWRlci1tb2JpbGUuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTQlO1xcbiAgcGFkZGluZy1sZWZ0OiAzJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgcGFkZGluZy10b3A6IDIlOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gICAgLmJhbm5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3RyYXZlbC1jbG91ZC1oZWFkZXItdGFibGV0LmpwZ1xcXCIpOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLmJhbm5lciB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3RyYXZlbC1jbG91ZC1oZWFkZXItd2ViLmpwZ1xcXCIpO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH0gfVxcblxcbi5iYW5uZXIgaDEge1xcbiAgICBmb250LXNpemU6IDU1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xcbiAgICBwYWRkaW5nOiA1MHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgLmJhbm5lciBoMSB7XFxuICAgICAgICBwYWRkaW5nOiAwOyB9IH1cXG5cXG4uYmFubmVyIC5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjOWUxZTYyOyB9XFxuXFxuLmJhbm5lciAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWUxZTYyO1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJhbm5lciBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4OyB9XFxuXFxuLmJ1c2luZXNzQ2hhbGxlbmdlcyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAxMDBweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgLmNoYWxsZW5nZUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgbWFyZ2luOiAyMHB4OyB9IH1cXG5cXG4ucHJvZHVjdEZlYXR1cmVzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLnByb2R1Y3RGZWF0dXJlcyBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgIC5wcm9kdWN0RmVhdHVyZXMge1xcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxcblxcbi5mZWF0dXJlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uZmVhdHVyZURlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDgwdnc7IH1cXG5cXG4uZmVhdHVyZURlc2NyaXB0aW9uIGgzIHtcXG4gICAgZm9udC1zaXplOiAyMnB4OyB9XFxuXFxuLmZlYXR1cmVEZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgIC5mZWF0dXJlRGVzY3JpcHRpb24ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgICAgIG1hcmdpbi1yaWdodDogM3Z3O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICAgIHdpZHRoOiAyNHZ3OyB9IH1cXG5cXG4uc2l0ZU5hdmlnYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMWYzZTsgfVxcblxcbi5zaXRlTmF2aWdhdGlvbiBhIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjNzO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zczsgfVxcblxcbi5zaXRlTmF2aWdhdGlvbiBhOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIGNvbG9yOiAjMzIxZjNlOyB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIGE6bGFzdC1vZi10eXBlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAwOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgICAgLnNpdGVOYXZpZ2F0aW9uIGEge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIC5jbG9zZWQge1xcbiAgICBoZWlnaHQ6IDA7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLnNpdGVOYXZpZ2F0aW9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiAwOyB9XFxuICAgICAgLnNpdGVOYXZpZ2F0aW9uLmNsb3NlZCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IH0gfVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE4O1xcbiAgY29sb3I6ICNmZmY7XFxuICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICBmbGV4LXNocmluazogMDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDU1dmg7XFxuICBwYWRkaW5nOiAyMHB4IDA7IH1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTFlNjI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOWUxZTYyO1xcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDQwcHggMTV2dztcXG4gIG1heC13aWR0aDogNjB2dztcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zczsgfVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogIzllMWU2MjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgICAuYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDV2dztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAuYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7IH0gfVxcblwiIl19 */\n/*@ sourceURL=styles/global.scss */";
__styledJsxDefaultExport.__scopedHash = "23264778073";
module.exports = __styledJsxDefaultExport;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(199);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

var _navigation = __webpack_require__(573);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/common/header.js';


var header = function header() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: '/index', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: 'logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Logo goes here'))), _react2.default.createElement(_navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

exports.default = header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/common/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/common/header.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/common/navigation.js';


var navigation = function navigation() {
  return _react2.default.createElement('nav', { className: 'siteNavigation', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: '/index', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Home'), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'About'), _react2.default.createElement(_link2.default, { href: '/sign-up', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Sign up/in'), _react2.default.createElement(_link2.default, { href: '/book-demo', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Book a demo'));
};

exports.default = navigation;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/common/navigation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/common/navigation.js"); } } })();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _banner_button = __webpack_require__(605);

var _banner_button2 = _interopRequireDefault(_banner_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/homepage/banner.js';


var banner = function banner() {
  return _react2.default.createElement('div', { className: 'banner', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Do something. Do something else. Do a third thing.'), _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Here is a bit of text that clarifies the bit of text above.'), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_banner_button2.default, {
    link: '/sign-up',
    text: 'Sign in!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_banner_button2.default, {
    link: '/book-demo',
    text: 'Look at this!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })));
};

exports.default = banner;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/homepage/banner.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/homepage/banner.js"); } } })();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/homepage/banner_button.js';


var bannerButton = function bannerButton(_ref) {
  var text = _ref.text,
      link = _ref.link;
  return _react2.default.createElement(_link2.default, { href: link, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: 'button', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, text));
};

exports.default = bannerButton;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/homepage/banner_button.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/homepage/banner_button.js"); } } })();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/homepage/business_challenges.js';

var ChallengeItem = function ChallengeItem(_ref) {
  var imageSrc = _ref.imageSrc,
      text = _ref.text;
  return _react2.default.createElement('div', { className: 'challengeItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement('img', { src: imageSrc, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, text));
};

var challengeComponent = function challengeComponent() {
  return _react2.default.createElement('div', { className: 'businessChallenges', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Do any of the following apply to you?'), _react2.default.createElement(ChallengeItem, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-1.svg',
    text: 'Do you stare at your monitor, not allowing your lack of eyes get in your way?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(ChallengeItem, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-2.svg',
    text: 'Are you sick of being told to "like, share and subscribe"?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(ChallengeItem, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-3.svg',
    text: 'Are you confused by Capitalism?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(ChallengeItem, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-5.svg',
    text: 'Do you find yourself constantly wondering how you will afford your next suitcase?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement(ChallengeItem, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/05/1614-Click-Travel-travel.cloud-May-Retainer-V2_challenge-4.svg',
    text: 'Do your colleagues seem distant, even when you spent all night coming up fancy graphs just to see them smile again?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }));
};

exports.default = challengeComponent;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/homepage/business_challenges.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/homepage/business_challenges.js"); } } })();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/components/homepage/product_features.js';

var FeatureDescription = function FeatureDescription(_ref) {
  var imageSrc = _ref.imageSrc,
      title = _ref.title,
      text = _ref.text;
  return _react2.default.createElement('div', { className: 'featureDescription', __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement('img', { src: imageSrc, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, title), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, text));
};

var features = function features() {
  return _react2.default.createElement('div', { className: 'productFeatures', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'We can probably make your life better!'), _react2.default.createElement('div', { className: 'featureContainer', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/04/tc-icons_update-teams-01-3.svg',
    title: 'An Email thing',
    text: 'Something about email here! Email is great! Or it is rubbish? Whichever one you agree with, our product will help!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/03/feedback-01.svg',
    title: 'A shared baskets thing',
    text: 'Something about shared baskets here! Share all your baskets, all the time!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/03/saved-time-1-01.svg',
    title: 'A thing for cost codes',
    text: 'You want cost codes? You got them!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/03/travel-overview-01-1-01.svg',
    title: 'Policy and approvals',
    text: 'Policies! Approvals! Together!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/03/tc-icons_event-reporting-01.svg',
    title: 'Reporting',
    text: 'Because no-one likes reporting. Shut up, Brian.',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement(FeatureDescription, {
    imageSrc: 'http://travel.cloud/wp-content/uploads/2017/04/tc-icons_free-cost-01.svg',
    title: 'Comes with a free money-finder',
    text: 'Cool, right?',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })));
};

exports.default = features;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/homepage/product_features.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/homepage/product_features.js"); } } })();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/nimmo/misc/nextjs-example/components/common/footer.js";

var footer = function footer() {
  return _react2.default.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "This is a footer. Exciting stuff! This is a basic example of a site using NextJS. It's pretty nice to use! :)"));
};

exports.default = footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/nimmo/misc/nextjs-example/components/common/footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/nimmo/misc/nextjs-example/components/common/footer.js"); } } })();

/***/ })

},[557]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2JiNGI2MmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vcGFnZV9oZWFkLmpzP2JiNGI2MmQiLCJ3ZWJwYWNrOi8vL3N0eWxlcy9nbG9iYWwuc2Nzcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci5qcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL25hdmlnYXRpb24uanM/YmI0YjYyZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWVwYWdlL2Jhbm5lci5qcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFubmVyX2J1dHRvbi5qcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvYnVzaW5lc3NfY2hhbGxlbmdlcy5qcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvcHJvZHVjdF9mZWF0dXJlcy5qcz9iYjRiNjJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2Zvb3Rlci5qcz9iYjRiNjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQYWdlSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9wYWdlX2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlcidcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9iYW5uZXInXG5pbXBvcnQgQ2hhbGxlbmdlcyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL2J1c2luZXNzX2NoYWxsZW5nZXMnXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9wcm9kdWN0X2ZlYXR1cmVzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9mb290ZXInXG5cbmNvbnN0IHBhZ2UgPSBcbiAgKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8UGFnZUhlYWQgcGFnZVRpdGxlPSdJbmRleCBQYWdlJy8+XG4gICAgICA8SGVhZGVyIHBhZ2VUaXRsZT0nTmV4dEpTIEV4YW1wbGUgLSBIb21lJy8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICA8QmFubmVyLz5cbiAgICAgICAgPENoYWxsZW5nZXMvPlxuICAgICAgICA8RmVhdHVyZXMvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3Rlci8+XG4gICAgPC9kaXY+XG4gIClcblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbC5zY3NzJ1xuXG5jb25zdCBwYWdlSGVhZCA9IFxuICAoeyBwYWdlVGl0bGUgfSkgPT4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntwYWdlVGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIFxuICAgICAgICBuYW1lPVwidmlld3BvcnRcIiBcbiAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPG1ldGEgXG4gICAgICAgIG5hbWU9XCJtb2JpbGUtd2ViYi1hcHAtY2FwYWJsZVwiIFxuICAgICAgICBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDxtZXRhIFxuICAgICAgICBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYmItYXBwLWNhcGFibGVcIiBcbiAgICAgICAgY29udGVudD1cInllc1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Byb1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0eWxlc2hlZXR9fS8+XG4gICAgPC9IZWFkPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlSGVhZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29tbW9uL3BhZ2VfaGVhZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiEgbm9ybWFsaXplLmNzcyB2Ny4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluXFxuICogICAgSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXFxuICovXFxuXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxubWFpbiB7IC8qIDEgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMWVtIDQwcHg7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgZ2FwcyBpbiBsaW5rcyB1bmRlcmxpbmUgaW4gaU9TIDgrIGFuZCBTYWZhcmkgOCsuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSBhbmQgRmlyZWZveCAzOS0uXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc3R5bGUgaW4gQW5kcm9pZCA0LjMtLlxcbiAqL1xcblxcbmRmbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBiYWNrZ3JvdW5kIGFuZCBjb2xvciBpbiBJRSA5LS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXFxuICovXFxuXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03LlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBIaWRlIHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLS5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGFuZCBjYW5jZWwgYnV0dG9ucyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscywgLyogMSAqL1xcbm1lbnUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBTY3JpcHRpbmdcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEhpZGRlblxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIxZjNlO1xcbiAgcGFkZGluZzogMiU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgICBoZWFkZXIgLmxvZ28ge1xcbiAgICAgICAgaGVpZ2h0OiA3MHB4OyB9IH1cXG5cXG4uYmFubmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy90cmF2ZWwtY2xvdWQtaGVhZGVyLW1vYmlsZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgbWluLWhlaWdodDogNzB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMlO1xcbiAgcGFkZGluZy1yaWdodDogMyU7XFxuICBwYWRkaW5nLXRvcDogMiU7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgICAuYmFubmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvdHJhdmVsLWNsb3VkLWhlYWRlci10YWJsZXQuanBnXFxcIik7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgICAuYmFubmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvdHJhdmVsLWNsb3VkLWhlYWRlci13ZWIuanBnXFxcIik7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfSB9XFxuXFxuLmJhbm5lciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XFxuICAgIHBhZGRpbmc6IDUwcHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgICAuYmFubmVyIGgxIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7IH0gfVxcblxcbi5iYW5uZXIgLmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICM5ZTFlNjI7IH1cXG5cXG4uYmFubmVyIC5idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZTFlNjI7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmFubmVyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7IH1cXG5cXG4uYnVzaW5lc3NDaGFsbGVuZ2VzIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwMHB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAuY2hhbGxlbmdlSXRlbSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICBtYXJnaW46IDIwcHg7IH0gfVxcblxcbi5wcm9kdWN0RmVhdHVyZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4ucHJvZHVjdEZlYXR1cmVzIGgyIHtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLnByb2R1Y3RGZWF0dXJlcyB7XFxuICAgICAgcGFkZGluZzogMDsgfSB9XFxuXFxuLmZlYXR1cmVDb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5mZWF0dXJlRGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogODB2dzsgfVxcblxcbi5mZWF0dXJlRGVzY3JpcHRpb24gaDMge1xcbiAgICBmb250LXNpemU6IDIycHg7IH1cXG5cXG4uZmVhdHVyZURlc2NyaXB0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgLmZlYXR1cmVEZXNjcmlwdGlvbiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICAgICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgICAgd2lkdGg6IDI0dnc7IH0gfVxcblxcbi5zaXRlTmF2aWdhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIxZjNlOyB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIGEge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGxpbmVhciAuM3M7XFxuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjNzOyB9XFxuXFxuLnNpdGVOYXZpZ2F0aW9uIGE6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgY29sb3I6ICMzMjFmM2U7IH1cXG5cXG4uc2l0ZU5hdmlnYXRpb24gYTpsYXN0LW9mLXR5cGUge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDA7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDQwcHgpIHtcXG4gICAgICAuc2l0ZU5hdmlnYXRpb24gYSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IH1cXG5cXG4uc2l0ZU5hdmlnYXRpb24gLmNsb3NlZCB7XFxuICAgIGhlaWdodDogMDsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgICAuc2l0ZU5hdmlnYXRpb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0b3A6IDA7IH1cXG4gICAgICAuc2l0ZU5hdmlnYXRpb24uY2xvc2VkIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTsgfSB9XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxODtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWluLWhlaWdodDogNTV2aDtcXG4gIHBhZGRpbmc6IDIwcHggMDsgfVxcblxcbi5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllMWU2MjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ZTFlNjI7XFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogNDBweCAxNXZ3O1xcbiAgbWF4LXdpZHRoOiA2MHZ3O1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgbGluZWFyIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgLjNzOyB9XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiAjOWUxZTYyOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA0MHB4KSB7XFxuICAgIC5idXR0b24ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXJnaW4tbGVmdDogNXZ3O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgIC5idXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDsgfSB9XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGVzL2dsb2JhbC5zY3NzIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vbmF2aWdhdGlvbidcblxuY29uc3QgaGVhZGVyID0gXG4gICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPExpbmsgaHJlZj0nL2luZGV4Jz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2xvZ28nID5cbiAgICAgICAgICAgIExvZ28gZ29lcyBoZXJlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICA8L2Rpdj5cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IG5hdmlnYXRpb24gPSBcbiAgKCkgPT4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPSdzaXRlTmF2aWdhdGlvbic+XG4gICAgICA8TGluayBocmVmPScvaW5kZXgnPkhvbWU8L0xpbms+XG4gICAgICA8TGluayBocmVmPScvYWJvdXQnPkFib3V0PC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj0nL3NpZ24tdXAnPlNpZ24gdXAvaW48L0xpbms+XG4gICAgICA8TGluayBocmVmPScvYm9vay1kZW1vJz5Cb29rIGEgZGVtbzwvTGluaz5cbiAgICA8L25hdj5cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi5qcyIsImltcG9ydCBCYW5uZXJCdXR0b24gZnJvbSAnLi9iYW5uZXJfYnV0dG9uJ1xuXG5jb25zdCBiYW5uZXIgPSBcbiAgKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiYW5uZXInPlxuICAgICAgPGgxPkRvIHNvbWV0aGluZy4gRG8gc29tZXRoaW5nIGVsc2UuIERvIGEgdGhpcmQgdGhpbmcuPC9oMT5cbiAgICAgIDxzcGFuPkhlcmUgaXMgYSBiaXQgb2YgdGV4dCB0aGF0IGNsYXJpZmllcyB0aGUgYml0IG9mIHRleHQgYWJvdmUuPC9zcGFuPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhbm5lckJ1dHRvbiBcbiAgICAgICAgICBsaW5rPScvc2lnbi11cCcgXG4gICAgICAgICAgdGV4dD0nU2lnbiBpbiEnXG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICA8QmFubmVyQnV0dG9uIFxuICAgICAgICAgIGxpbms9Jy9ib29rLWRlbW8nIFxuICAgICAgICAgIHRleHQ9J0xvb2sgYXQgdGhpcyEnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hvbWVwYWdlL2Jhbm5lci5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgYmFubmVyQnV0dG9uID0gXG4gICh7dGV4dCwgbGlua30pID0+IChcbiAgICA8TGluayBocmVmPXtsaW5rfT5cbiAgICAgIDxhIGNsYXNzTmFtZT0nYnV0dG9uJz57dGV4dH08L2E+XG4gICAgPC9MaW5rPlxuICApXG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lckJ1dHRvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFubmVyX2J1dHRvbi5qcyIsImNvbnN0IENoYWxsZW5nZUl0ZW0gPSBcbiAgKHtpbWFnZVNyYywgdGV4dH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhbGxlbmdlSXRlbSc+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VTcmN9Lz5cbiAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxuXG5jb25zdCBjaGFsbGVuZ2VDb21wb25lbnQgPSBcbiAgKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdidXNpbmVzc0NoYWxsZW5nZXMnPlxuICAgICAgPGgyPkRvIGFueSBvZiB0aGUgZm9sbG93aW5nIGFwcGx5IHRvIHlvdT88L2gyPlxuICAgICAgXG4gICAgICA8Q2hhbGxlbmdlSXRlbVxuICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xNjE0LUNsaWNrLVRyYXZlbC10cmF2ZWwuY2xvdWQtTWF5LVJldGFpbmVyLVYyX2NoYWxsZW5nZS0xLnN2ZycgXG4gICAgICAgIHRleHQ9J0RvIHlvdSBzdGFyZSBhdCB5b3VyIG1vbml0b3IsIG5vdCBhbGxvd2luZyB5b3VyIGxhY2sgb2YgZXllcyBnZXQgaW4geW91ciB3YXk/J1xuICAgICAgLz5cblxuICAgICAgPENoYWxsZW5nZUl0ZW1cbiAgICAgICAgaW1hZ2VTcmM9J2h0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDUvMTYxNC1DbGljay1UcmF2ZWwtdHJhdmVsLmNsb3VkLU1heS1SZXRhaW5lci1WMl9jaGFsbGVuZ2UtMi5zdmcnIFxuICAgICAgICB0ZXh0PSdBcmUgeW91IHNpY2sgb2YgYmVpbmcgdG9sZCB0byBcImxpa2UsIHNoYXJlIGFuZCBzdWJzY3JpYmVcIj8nXG4gICAgICAvPlxuXG4gICAgICA8Q2hhbGxlbmdlSXRlbVxuICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xNjE0LUNsaWNrLVRyYXZlbC10cmF2ZWwuY2xvdWQtTWF5LVJldGFpbmVyLVYyX2NoYWxsZW5nZS0zLnN2ZycgXG4gICAgICAgIHRleHQ9J0FyZSB5b3UgY29uZnVzZWQgYnkgQ2FwaXRhbGlzbT8nXG4gICAgICAvPlxuXG4gICAgICA8Q2hhbGxlbmdlSXRlbVxuICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xNjE0LUNsaWNrLVRyYXZlbC10cmF2ZWwuY2xvdWQtTWF5LVJldGFpbmVyLVYyX2NoYWxsZW5nZS01LnN2ZycgXG4gICAgICAgIHRleHQ9J0RvIHlvdSBmaW5kIHlvdXJzZWxmIGNvbnN0YW50bHkgd29uZGVyaW5nIGhvdyB5b3Ugd2lsbCBhZmZvcmQgeW91ciBuZXh0IHN1aXRjYXNlPycgXG4gICAgICAvPlxuICAgICAgXG4gICAgICA8Q2hhbGxlbmdlSXRlbVxuICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xNjE0LUNsaWNrLVRyYXZlbC10cmF2ZWwuY2xvdWQtTWF5LVJldGFpbmVyLVYyX2NoYWxsZW5nZS00LnN2ZycgXG4gICAgICAgIHRleHQ9J0RvIHlvdXIgY29sbGVhZ3VlcyBzZWVtIGRpc3RhbnQsIGV2ZW4gd2hlbiB5b3Ugc3BlbnQgYWxsIG5pZ2h0IGNvbWluZyB1cCBmYW5jeSBncmFwaHMganVzdCB0byBzZWUgdGhlbSBzbWlsZSBhZ2Fpbj8nIFxuICAgICAgLz5cblxuICAgIDwvZGl2PlxuICApXG5cbmV4cG9ydCBkZWZhdWx0IGNoYWxsZW5nZUNvbXBvbmVudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaG9tZXBhZ2UvYnVzaW5lc3NfY2hhbGxlbmdlcy5qcyIsImNvbnN0IEZlYXR1cmVEZXNjcmlwdGlvbiA9IFxuICAoe2ltYWdlU3JjLCB0aXRsZSwgdGV4dH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZURlc2NyaXB0aW9uJz5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30vPlxuICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgPHA+e3RleHR9PC9wPlxuICAgIDwvZGl2PlxuICApXG5cbmNvbnN0IGZlYXR1cmVzID0gXG4gICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdEZlYXR1cmVzJz5cbiAgICAgIDxoMj5XZSBjYW4gcHJvYmFibHkgbWFrZSB5b3VyIGxpZmUgYmV0dGVyITwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZUNvbnRhaW5lcic+XG4gICAgICAgIDxGZWF0dXJlRGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNC90Yy1pY29uc191cGRhdGUtdGVhbXMtMDEtMy5zdmcnXG4gICAgICAgICAgdGl0bGU9J0FuIEVtYWlsIHRoaW5nJ1xuICAgICAgICAgIHRleHQ9J1NvbWV0aGluZyBhYm91dCBlbWFpbCBoZXJlISBFbWFpbCBpcyBncmVhdCEgT3IgaXQgaXMgcnViYmlzaD8gV2hpY2hldmVyIG9uZSB5b3UgYWdyZWUgd2l0aCwgb3VyIHByb2R1Y3Qgd2lsbCBoZWxwISdcbiAgICAgICAgLz5cblxuICAgICAgICA8RmVhdHVyZURlc2NyaXB0aW9uXG4gICAgICAgICAgaW1hZ2VTcmM9J2h0dHA6Ly90cmF2ZWwuY2xvdWQvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvZmVlZGJhY2stMDEuc3ZnJ1xuICAgICAgICAgIHRpdGxlPSdBIHNoYXJlZCBiYXNrZXRzIHRoaW5nJ1xuICAgICAgICAgIHRleHQ9J1NvbWV0aGluZyBhYm91dCBzaGFyZWQgYmFza2V0cyBoZXJlISBTaGFyZSBhbGwgeW91ciBiYXNrZXRzLCBhbGwgdGhlIHRpbWUhJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDxGZWF0dXJlRGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9zYXZlZC10aW1lLTEtMDEuc3ZnJ1xuICAgICAgICAgIHRpdGxlPSdBIHRoaW5nIGZvciBjb3N0IGNvZGVzJ1xuICAgICAgICAgIHRleHQ9J1lvdSB3YW50IGNvc3QgY29kZXM/IFlvdSBnb3QgdGhlbSEnXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZlYXR1cmVEZXNjcmlwdGlvblxuICAgICAgICAgIGltYWdlU3JjPSdodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL3RyYXZlbC1vdmVydmlldy0wMS0xLTAxLnN2ZydcbiAgICAgICAgICB0aXRsZT0nUG9saWN5IGFuZCBhcHByb3ZhbHMnXG4gICAgICAgICAgdGV4dD0nUG9saWNpZXMhIEFwcHJvdmFscyEgVG9nZXRoZXIhJ1xuICAgICAgICAvPlxuXG4gICAgICAgIDxGZWF0dXJlRGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZVNyYz0naHR0cDovL3RyYXZlbC5jbG91ZC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy90Yy1pY29uc19ldmVudC1yZXBvcnRpbmctMDEuc3ZnJ1xuICAgICAgICAgIHRpdGxlPSdSZXBvcnRpbmcnXG4gICAgICAgICAgdGV4dD0nQmVjYXVzZSBuby1vbmUgbGlrZXMgcmVwb3J0aW5nLiBTaHV0IHVwLCBCcmlhbi4nXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZlYXR1cmVEZXNjcmlwdGlvblxuICAgICAgICAgIGltYWdlU3JjPSdodHRwOi8vdHJhdmVsLmNsb3VkL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA0L3RjLWljb25zX2ZyZWUtY29zdC0wMS5zdmcnXG4gICAgICAgICAgdGl0bGU9J0NvbWVzIHdpdGggYSBmcmVlIG1vbmV5LWZpbmRlcidcbiAgICAgICAgICB0ZXh0PSdDb29sLCByaWdodD8nXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuXG5leHBvcnQgZGVmYXVsdCBmZWF0dXJlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaG9tZXBhZ2UvcHJvZHVjdF9mZWF0dXJlcy5qcyIsImNvbnN0IGZvb3RlciA9IFxuICAoKSA9PiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxwPlRoaXMgaXMgYSBmb290ZXIuIEV4Y2l0aW5nIHN0dWZmISBUaGlzIGlzIGEgYmFzaWMgZXhhbXBsZSBvZiBhIHNpdGUgdXNpbmcgTmV4dEpTLiBJdCdzIHByZXR0eSBuaWNlIHRvIHVzZSEgOik8L3A+XG4gICAgPC9mb290ZXI+XG4gIClcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb21tb24vZm9vdGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUZBO0FBR0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUZBO0FBR0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUZBO0FBR0E7QUFIQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUFBOztBQUZBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUFBOztBQUZBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQU1BO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        