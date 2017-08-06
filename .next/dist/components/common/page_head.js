'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _global = require('../../styles/global.scss');

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