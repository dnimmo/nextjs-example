'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _banner_button = require('./banner_button');

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