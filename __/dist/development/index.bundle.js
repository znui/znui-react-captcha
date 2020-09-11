(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./RandomCaptcha.js":
/*!**************************!*\
  !*** ./RandomCaptcha.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function genetateCaptcha(max) {
  var text = '',
      i;

  for (i = 0; i < max; i += 1) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        text += String.fromCharCode(48 + Math.floor(Math.random() * 10));
        break;

      case 1:
        text += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        break;

      case 2:
        text += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        break;

      default:
        break;
    }
  }

  return text;
}

module.exports = React.createClass({
  displayName: 'RandomCaptcha',
  getDefaultProps: function getDefaultProps() {
    return {
      placeholder: '请输入验证码',
      caseSensitive: false,
      length: 6,
      width: 200
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: '',
      solution: genetateCaptcha(this.props.length),
      checked: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.drawCaptcha();
  },
  refresh: function refresh() {
    var _this = this;

    var _solution = genetateCaptcha(this.props.length);

    this.setState({
      solution: _solution,
      input: ''
    }, function () {
      return _this.drawCaptcha();
    });
    this.props.onRefresh && this.props.onRefresh(_solution);
  },
  drawCaptcha: function drawCaptcha() {
    var solution = this.state.solution;
    var width = this.canvas.width;
    var height = this.canvas.height;
    var ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.font = "".concat(getRandomInt(30, 40), "px serif");
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(solution, width / 2, height / 2 + 3);
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(getRandomInt(5, 20), getRandomInt(5, 20));
    ctx.lineTo(width - getRandomInt(5, 20), height - getRandomInt(5, 20));
    ctx.stroke();
    ctx.moveTo(getRandomInt(15, 30), getRandomInt(15, 30));
    ctx.lineTo(width - getRandomInt(15, 30), height - getRandomInt(15, 30));
    ctx.stroke();
    ctx.moveTo(getRandomInt(5, 20), height - getRandomInt(5, 20));
    ctx.lineTo(width - getRandomInt(5, 20), getRandomInt(5, 20));
    ctx.stroke();
    ctx.moveTo(getRandomInt(15, 30), height - getRandomInt(15, 30));
    ctx.lineTo(width - getRandomInt(15, 30), getRandomInt(15, 30));
    ctx.stroke();
    ctx.moveTo(getRandomInt(width / 10, width / 10 + 10), height - getRandomInt(15, 30));
    ctx.lineTo(getRandomInt(width / 2, width / 2 + 10), getRandomInt(5, 20));
    ctx.stroke();
    ctx.closePath();
  },
  playAudio: function playAudio() {
    console.log(this.state.solution);

    if (this.state.solution) {
      var audio = new SpeechSynthesisUtterance(this.state.solution.toString().split('').join(' '));
      audio.rate = 1;
      audio.lang = 'zh-cn';
      window.speechSynthesis.speak(audio);
    }
  },
  __onInputChange: function __onInputChange(event) {
    var _value = event.target.value;
    var solution = this.state.solution;
    var checked = _value.toString().toLowerCase() === solution.toString().toLowerCase();

    if (this.props.caseSensitive) {
      checked = _value.toString() === solution.toString();
    }

    this.setState({
      value: _value,
      checked: checked
    });
    event.value = event.checked = checked;
    this.props.onChange && this.props.onChange(event, this);
  },
  render: function render() {
    var _this2 = this;

    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-random-captcha", this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: "rnc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rnc-row"
    }, /*#__PURE__*/React.createElement("canvas", {
      ref: function ref(el) {
        return _this2.canvas = el;
      },
      width: this.props.width,
      height: 50,
      className: "rnc-canvas",
      "data-testid": "captcha-canvas"
    }), /*#__PURE__*/React.createElement("div", {
      className: "rnc-column"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "get new captcha",
      onClick: this.refresh,
      className: "rnc-button",
      "data-testid": "captcha-refresh"
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "refresh"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "24",
      height: "24",
      opacity: "0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"
    }))))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "play audio",
      onClick: this.playAudio,
      className: "rnc-button",
      "data-testid": "captcha-audio"
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "Layer 2"
    }, /*#__PURE__*/React.createElement("g", {
      "data-name": "volume-up"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "24",
      height: "24",
      opacity: "0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"
    }))))))), /*#__PURE__*/React.createElement("input", {
      value: this.state.value,
      onChange: this.__onInputChange,
      placeholder: this.props.placeholder,
      className: "rnc-input",
      "data-testid": "captcha-input"
    })));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'RandomCaptcha': __webpack_require__(/*! ./RandomCaptcha */ "./RandomCaptcha.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmFuZG9tQ2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXRhdGVDYXB0Y2hhIiwidGV4dCIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInBsYWNlaG9sZGVyIiwiY2FzZVNlbnNpdGl2ZSIsImxlbmd0aCIsIndpZHRoIiwiZ2V0SW5pdGlhbFN0YXRlIiwidmFsdWUiLCJzb2x1dGlvbiIsInByb3BzIiwiY2hlY2tlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZHJhd0NhcHRjaGEiLCJyZWZyZXNoIiwiX3NvbHV0aW9uIiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uUmVmcmVzaCIsInN0YXRlIiwiY2FudmFzIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwicGxheUF1ZGlvIiwiY29uc29sZSIsImxvZyIsImF1ZGlvIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwidG9TdHJpbmciLCJzcGxpdCIsImpvaW4iLCJyYXRlIiwibGFuZyIsIndpbmRvdyIsInNwZWVjaFN5bnRoZXNpcyIsInNwZWFrIiwiX19vbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJfdmFsdWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsIm9uQ2hhbmdlIiwicmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImVsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDL0JELEtBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxLQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxTQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLENBQVgsSUFBMENBLEdBQWpEO0FBQ0E7O0FBRUQsU0FBU00sZUFB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QUFXWCxLQURuQjtBQUVDLGNBQVEsRUFBRSxLQUFLd0MsZUFGaEI7QUFHQyxpQkFBVyxFQUFFLEtBQUt0QyxLQUFMLENBQVdQLFdBSHpCO0FBSUMsZUFBUyxFQUFDLFdBSlg7QUFLQyxxQkFBWTtBQUxiLE1BNUJELENBREQsQ0FERDtBQXdDQTtBQTNIaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNyQkFMLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLG1CQUFpQmQsbUJBQU8sQ0FBQywyQ0FBRDtBQURYLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdG1pbiA9IE1hdGguY2VpbChtaW4pO1xuXHRtYXggPSBNYXRoLmZsb29yKG1heCk7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG4gIFxuZnVuY3Rpb24gZ2VuZXRhdGVDYXB0Y2hhKG1heCkge1xuXHR2YXIgdGV4dCA9ICcnLCBpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbWF4OyBpICs9IDEpIHtcblx0XHRzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpKSB7XG5cdFx0Y2FzZSAwOiB0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNDggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpOyBicmVha1xuXHRcdGNhc2UgMTogdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpKTsgYnJlYWtcblx0XHRjYXNlIDI6IHRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSk7IGJyZWFrXG5cdFx0ZGVmYXVsdDogYnJlYWtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGV4dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidSYW5kb21DYXB0Y2hhJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cGxhY2Vob2xkZXI6ICfor7fovpPlhaXpqozor4HnoIEnLFxuXHRcdFx0Y2FzZVNlbnNpdGl2ZTogZmFsc2UsXG5cdFx0XHRsZW5ndGg6IDYsXG5cdFx0XHR3aWR0aDogMjAwXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0c29sdXRpb246IGdlbmV0YXRlQ2FwdGNoYSh0aGlzLnByb3BzLmxlbmd0aCksXG5cdFx0XHRjaGVja2VkOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR0aGlzLmRyYXdDYXB0Y2hhKCk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfc29sdXRpb24gPSBnZW5ldGF0ZUNhcHRjaGEodGhpcy5wcm9wcy5sZW5ndGgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c29sdXRpb246IF9zb2x1dGlvbixcblx0XHRcdGlucHV0OiAnJ1xuXHRcdH0sICgpID0+IHRoaXMuZHJhd0NhcHRjaGEoKSk7XG5cdFx0dGhpcy5wcm9wcy5vblJlZnJlc2ggJiYgdGhpcy5wcm9wcy5vblJlZnJlc2goX3NvbHV0aW9uKTtcblx0fSxcblx0ZHJhd0NhcHRjaGE6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBzb2x1dGlvbiA9IHRoaXMuc3RhdGUuc29sdXRpb247XG5cdFx0dmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblx0XHR2YXIgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdGN0eC5mb250ID0gYCR7Z2V0UmFuZG9tSW50KDMwLCA0MCl9cHggc2VyaWZgO1xuXHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblx0XHRjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG5cdFx0Y3R4LmZpbGxUZXh0KHNvbHV0aW9uLCB3aWR0aCAvIDIsIGhlaWdodCAvIDIgKyAzKTtcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAncHVycGxlJztcblxuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgubW92ZVRvKGdldFJhbmRvbUludCg1LCAyMCksIGdldFJhbmRvbUludCg1LCAyMCkpOyBcblx0XHRjdHgubGluZVRvKHdpZHRoIC0gZ2V0UmFuZG9tSW50KDUsIDIwKSwgaGVpZ2h0IC0gZ2V0UmFuZG9tSW50KDUsIDIwKSk7IFxuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHgubW92ZVRvKGdldFJhbmRvbUludCgxNSwgMzApLCBnZXRSYW5kb21JbnQoMTUsIDMwKSk7XG5cdFx0Y3R4LmxpbmVUbyh3aWR0aCAtIGdldFJhbmRvbUludCgxNSwgMzApLCBoZWlnaHQgLSBnZXRSYW5kb21JbnQoMTUsIDMwKSk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdGN0eC5tb3ZlVG8oZ2V0UmFuZG9tSW50KDUsIDIwKSwgaGVpZ2h0IC0gZ2V0UmFuZG9tSW50KDUsIDIwKSk7XG5cdFx0Y3R4LmxpbmVUbyh3aWR0aCAtIGdldFJhbmRvbUludCg1LCAyMCksIGdldFJhbmRvbUludCg1LCAyMCkpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHgubW92ZVRvKGdldFJhbmRvbUludCgxNSwgMzApLCBoZWlnaHQgLSBnZXRSYW5kb21JbnQoMTUsIDMwKSk7XG5cdFx0Y3R4LmxpbmVUbyh3aWR0aCAtIGdldFJhbmRvbUludCgxNSwgMzApLCBnZXRSYW5kb21JbnQoMTUsIDMwKSk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdGN0eC5tb3ZlVG8oZ2V0UmFuZG9tSW50KHdpZHRoIC8gMTAsICh3aWR0aCAvIDEwKSArIDEwKSwgaGVpZ2h0IC0gZ2V0UmFuZG9tSW50KDE1LCAzMCkpO1xuXHRcdGN0eC5saW5lVG8oZ2V0UmFuZG9tSW50KHdpZHRoIC8gMiwgd2lkdGggLyAyICsgMTApLCBnZXRSYW5kb21JbnQoNSwgMjApKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0Y3R4LmNsb3NlUGF0aCgpO1xuXHR9LFxuXHRwbGF5QXVkaW86IGZ1bmN0aW9uICgpe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc29sdXRpb24pO1xuXHRcdGlmKHRoaXMuc3RhdGUuc29sdXRpb24pIHtcblx0XHRcdHZhciBhdWRpbyA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGhpcy5zdGF0ZS5zb2x1dGlvbi50b1N0cmluZygpLnNwbGl0KCcnKS5qb2luKCcgJykpXG5cdFx0XHRhdWRpby5yYXRlID0gMTtcblx0XHRcdGF1ZGlvLmxhbmcgPSAnemgtY24nO1xuXHRcdFx0d2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhhdWRpbyk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR2YXIgc29sdXRpb24gPSB0aGlzLnN0YXRlLnNvbHV0aW9uO1xuXHRcdHZhciBjaGVja2VkID0gX3ZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gc29sdXRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmKHRoaXMucHJvcHMuY2FzZVNlbnNpdGl2ZSkge1xuXHRcdFx0Y2hlY2tlZCA9IF92YWx1ZS50b1N0cmluZygpID09PSBzb2x1dGlvbi50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IF92YWx1ZSxcblx0XHRcdGNoZWNrZWQ6IGNoZWNrZWRcblx0XHR9KTtcblx0XHRldmVudC52YWx1ZSA9IGV2ZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcyk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1yYW5kb20tY2FwdGNoYVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JuYyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JuYy1yb3cnPlxuXHRcdFx0XHRcdFx0PGNhbnZhcyByZWY9e2VsID0+ICh0aGlzLmNhbnZhcyA9IGVsKX0gd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9IGhlaWdodD17NTB9IGNsYXNzTmFtZT0ncm5jLWNhbnZhcycgZGF0YS10ZXN0aWQ9J2NhcHRjaGEtY2FudmFzJy8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm5jLWNvbHVtbic+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBhcmlhLWxhYmVsPSdnZXQgbmV3IGNhcHRjaGEnIG9uQ2xpY2s9e3RoaXMucmVmcmVzaH0gY2xhc3NOYW1lPSdybmMtYnV0dG9uJyBkYXRhLXRlc3RpZD0nY2FwdGNoYS1yZWZyZXNoJz5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxnIGRhdGEtbmFtZT0nTGF5ZXIgMic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxnIGRhdGEtbmFtZT0ncmVmcmVzaCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgb3BhY2l0eT0nMCcgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTIwLjMgMTMuNDNhMSAxIDAgMCAwLTEuMjUuNjVBNy4xNCA3LjE0IDAgMCAxIDEyLjE4IDE5IDcuMSA3LjEgMCAwIDEgNSAxMmE3LjEgNy4xIDAgMCAxIDcuMTgtNyA3LjI2IDcuMjYgMCAwIDEgNC42NSAxLjY3bC0yLjE3LS4zNmExIDEgMCAwIDAtMS4xNS44MyAxIDEgMCAwIDAgLjgzIDEuMTVsNC4yNC43aC4xN2ExIDEgMCAwIDAgLjM0LS4wNi4zMy4zMyAwIDAgMCAuMS0uMDYuNzguNzggMCAwIDAgLjItLjExbC4wOS0uMTFjMC0uMDUuMDktLjA5LjEzLS4xNXMwLS4xLjA1LS4xNGExLjM0IDEuMzQgMCAwIDAgLjA3LS4xOGwuNzUtNGExIDEgMCAwIDAtMi0uMzhsLS4yNyAxLjQ1QTkuMjEgOS4yMSAwIDAgMCAxMi4xOCAzIDkuMSA5LjEgMCAwIDAgMyAxMmE5LjEgOS4xIDAgMCAwIDkuMTggOUE5LjEyIDkuMTIgMCAwIDAgMjEgMTQuNjhhMSAxIDAgMCAwLS43LTEuMjV6JyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J2J1dHRvbicgYXJpYS1sYWJlbD0ncGxheSBhdWRpbycgb25DbGljaz17dGhpcy5wbGF5QXVkaW99IGNsYXNzTmFtZT0ncm5jLWJ1dHRvbicgZGF0YS10ZXN0aWQ9J2NhcHRjaGEtYXVkaW8nPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgZGF0YS1uYW1lPSdMYXllciAyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGcgZGF0YS1uYW1lPSd2b2x1bWUtdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cmVjdCB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIG9wYWNpdHk9JzAnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xOC4yOCA4LjM3YTEgMSAwIDEgMC0xLjU2IDEuMjYgNCA0IDAgMCAxIDAgNC43NEExIDEgMCAwIDAgMTcuNSAxNmExIDEgMCAwIDAgLjc4LS4zNyA2IDYgMCAwIDAgMC03LjI2eicgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE5LjY0IDUuMjNhMSAxIDAgMSAwLTEuMjggMS41NEE2LjggNi44IDAgMCAxIDIxIDEyYTYuOCA2LjggMCAwIDEtMi42NCA1LjIzIDEgMSAwIDAgMC0uMTMgMS40MUExIDEgMCAwIDAgMTkgMTlhMSAxIDAgMCAwIC42NC0uMjNBOC43NSA4Ljc1IDAgMCAwIDIzIDEyYTguNzUgOC43NSAwIDAgMC0zLjM2LTYuNzd6JyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTUgMy4xMmExIDEgMCAwIDAtMSAwTDcuNTIgNy41N2gtNWExIDEgMCAwIDAtMSAxdjYuODZhMSAxIDAgMCAwIDEgMWg1bDYuNDEgNC40YTEuMDYgMS4wNiAwIDAgMCAuNTcuMTcgMSAxIDAgMCAwIDEtMVY0YTEgMSAwIDAgMC0uNS0uODh6bS0xLjQ3IDE1TDguNCAxNC42YTEgMSAwIDAgMC0uNTctLjE3SDMuNVY5LjU3aDQuMzNhMSAxIDAgMCAwIC41Ny0uMTdsNS4xLTMuNXonIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vbklucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JuYy1pbnB1dCdcblx0XHRcdFx0XHRcdGRhdGEtdGVzdGlkPSdjYXB0Y2hhLWlucHV0J1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ1JhbmRvbUNhcHRjaGEnOiByZXF1aXJlKCcuL1JhbmRvbUNhcHRjaGEnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=