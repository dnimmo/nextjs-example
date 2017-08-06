'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

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