'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

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