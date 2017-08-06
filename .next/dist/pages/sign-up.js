'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _page_head = require('../components/common/page_head');

var _page_head2 = _interopRequireDefault(_page_head);

var _header = require('../components/common/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../components/common/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/nimmo/misc/nextjs-example/pages/sign-up.js?entry';


var page = function page() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_page_head2.default, { pageTitle: 'Sign-up Page', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_header2.default, { pageTitle: 'NextJS Example - Sign-up', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('main', { className: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Sign up!'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Or don\'t, because I\'m not making a sign-up page for a demo site. Instead, hit the thing below this text to pretend you\'ve signed in.'), _react2.default.createElement('span', { className: 'button', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Log in')), _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
};

exports.default = page;