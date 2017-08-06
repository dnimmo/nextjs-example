'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _navigation = require('./navigation');

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