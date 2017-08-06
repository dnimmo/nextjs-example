'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

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