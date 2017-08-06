'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

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