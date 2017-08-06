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

var _banner = require('../components/homepage/banner');

var _banner2 = _interopRequireDefault(_banner);

var _business_challenges = require('../components/homepage/business_challenges');

var _business_challenges2 = _interopRequireDefault(_business_challenges);

var _product_features = require('../components/homepage/product_features');

var _product_features2 = _interopRequireDefault(_product_features);

var _footer = require('../components/common/footer');

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