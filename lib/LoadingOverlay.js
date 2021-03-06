'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background: ', ';\n  color: ', ';\n  transition: opacity ', 'ms ease-out;\n  display: flex;\n  text-align: center;\n  font-size: 1.2em;\n  z-index: ', ';\n  &._loading-overlay-transition-appear,\n  &._loading-overlay-transition-enter {\n    opacity: 0.01;\n  }\n  &._loading-overlay-transition-appear._loading-overlay-transition-appear-active,\n  &._loading-overlay-transition-enter._loading-overlay-transition-enter-active {\n    opacity: 1;\n    transition: opacity .5s ease-in;\n  }\n  &._loading-overlay-transition-leave {\n    opacity: 1;\n  }\n  &._loading-overlay-transition-leave._loading-overlay-transition-leave-active {\n    opacity: 0;\n    transition: opacity .5s ease-in;\n  }\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background: ', ';\n  color: ', ';\n  transition: opacity ', 'ms ease-out;\n  display: flex;\n  text-align: center;\n  font-size: 1.2em;\n  z-index: ', ';\n  &._loading-overlay-transition-appear,\n  &._loading-overlay-transition-enter {\n    opacity: 0.01;\n  }\n  &._loading-overlay-transition-appear._loading-overlay-transition-appear-active,\n  &._loading-overlay-transition-enter._loading-overlay-transition-enter-active {\n    opacity: 1;\n    transition: opacity .5s ease-in;\n  }\n  &._loading-overlay-transition-leave {\n    opacity: 1;\n  }\n  &._loading-overlay-transition-leave._loading-overlay-transition-leave-active {\n    opacity: 0;\n    transition: opacity .5s ease-in;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  margin: 0px auto 10px auto;\n  width: ', ';\n  max-height: 100%;\n  &:before {\n    content: \'\';\n    display: block;\n    padding-top: 100%;\n  }\n'], ['\n  position: relative;\n  margin: 0px auto 10px auto;\n  width: ', ';\n  max-height: 100%;\n  &:before {\n    content: \'\';\n    display: block;\n    padding-top: 100%;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: auto;\n'], ['\n  margin: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'], ['\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  0% {\n    stroke-dasharray: 1,200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -124px;\n  }\n'], ['\n  0% {\n    stroke-dasharray: 1,200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -124px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  animation: ', ' 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0; bottom: 0; left: 0; right: 0;\n  margin: auto;\n'], ['\n  animation: ', ' 2s linear infinite;\n  height: 100%;\n  transform-origin: center center;\n  width: 100%;\n  position: absolute;\n  top: 0; bottom: 0; left: 0; right: 0;\n  margin: auto;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  animation: ', ' 1.5s ease-in-out infinite;\n  stroke-dasharray: 1,200;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  stroke: ', ';\n'], ['\n  animation: ', ' 1.5s ease-in-out infinite;\n  stroke-dasharray: 1,200;\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  stroke: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LoadingOverlay
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Set as child component in a container. Toggle state with `active` prop.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React transition group will handle the fade of the overlay.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FirstChild = function FirstChild(props) {
  return _react.Children.toArray(props.children)[0] || null;
};

var LoadingOverlayWrapper = function (_React$Component) {
  _inherits(LoadingOverlayWrapper, _React$Component);

  function LoadingOverlayWrapper() {
    _classCallCheck(this, LoadingOverlayWrapper);

    return _possibleConstructorReturn(this, (LoadingOverlayWrapper.__proto__ || Object.getPrototypeOf(LoadingOverlayWrapper)).apply(this, arguments));
  }

  _createClass(LoadingOverlayWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var s = nextProps.style;
      if (nextProps.active && (s.overflow || s.overflowY || s.overflowX)) {
        this.wrapper.scrollTop = 0;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          animate = _props.animate,
          spinner = _props.spinner;


      var loadNode = active && _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        {
          key: i,
          classNames: '_loading-overlay-transition',
          timeout: { enter: 500, exit: 500, appear: 500 } },
        _react2.default.createElement(LoadingOverlay, _extends({ key: 'the_dimmer' }, this.props))
      );
      if (animate || spinner) {
        loadNode = _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          {
            component: FirstChild
          },
          loadNode
        );
      }

      var styles = _extends({
        position: 'relative'
      }, this.props.style);
      if (active) {
        if (styles.overflow) styles.overflow = 'hidden';
        if (styles.overflowY) styles.overflowY = 'hidden';
        if (styles.overflowX) styles.overflowX = 'hidden';
      }
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(n) {
            _this2.wrapper = n;
          },
          className: this.props.className,
          style: styles
        },
        loadNode,
        this.props.children
      );
    }
  }]);

  return LoadingOverlayWrapper;
}(_react2.default.Component);

LoadingOverlayWrapper.propTypes = {
  active: _propTypes2.default.bool,
  text: _propTypes2.default.string,
  spinner: _propTypes2.default.bool,
  spinnerSize: _propTypes2.default.string,
  className: _propTypes2.default.string,
  background: _propTypes2.default.string,
  color: _propTypes2.default.string,
  zIndex: _propTypes2.default.number,
  animate: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

LoadingOverlayWrapper.defaultProps = {
  active: false,
  className: '_loading-overlay',
  background: 'rgba(0, 0, 0, 0.7)',
  spinnerSize: '50px',
  color: '#FFF',
  zIndex: 800,
  animate: false,
  style: {}
};

var Overlay = _styledComponents2.default.div(_templateObject, function (props) {
  return props.background;
}, function (props) {
  return props.color;
}, function (props) {
  return props.speed;
}, function (props) {
  return props.zIndex;
});

var Spinner = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.spinnerSize;
});

var Content = _styledComponents2.default.div(_templateObject3);

var rotate360 = (0, _styledComponents.keyframes)(_templateObject4);

var spinnerDash = (0, _styledComponents.keyframes)(_templateObject5);

var Svg = _styledComponents2.default.svg(_templateObject6, rotate360);

var Circle = _styledComponents2.default.circle(_templateObject7, spinnerDash, function (props) {
  return props.color;
});

var LoadingOverlay = function (_React$Component2) {
  _inherits(LoadingOverlay, _React$Component2);

  function LoadingOverlay() {
    _classCallCheck(this, LoadingOverlay);

    return _possibleConstructorReturn(this, (LoadingOverlay.__proto__ || Object.getPrototypeOf(LoadingOverlay)).apply(this, arguments));
  }

  _createClass(LoadingOverlay, [{
    key: 'render',
    value: function render() {
      var spinnerNode = null;
      if (this.props.spinner) {
        spinnerNode = _react2.default.createElement(
          Spinner,
          { spinnerSize: this.props.spinnerSize },
          _react2.default.createElement(
            Svg,
            { viewBox: '25 25 50 50' },
            _react2.default.createElement(Circle, { color: this.props.color, cx: '50', cy: '50', r: '20', fill: 'none', strokeWidth: '2', strokeMiterlimit: '10' })
          )
        );
      }

      var textNode = null;
      if (this.props.text) textNode = _react2.default.createElement(
        'div',
        null,
        this.props.text
      );

      var contentNode = null;
      if (this.props.text || this.props.spinner) {
        contentNode = _react2.default.createElement(
          Content,
          null,
          spinnerNode,
          textNode
        );
      }

      return _react2.default.createElement(
        Overlay,
        {
          background: this.props.background,
          color: this.props.color,
          speed: this.props.speed,
          zIndex: this.props.zIndex,
          key: 'dimmer',
          onClick: this.props.onClick },
        contentNode
      );
    }
  }]);

  return LoadingOverlay;
}(_react2.default.Component);

LoadingOverlay.defaultProps = {
  text: null,
  spinner: false,
  onClick: null
};

exports.default = LoadingOverlayWrapper;