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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmFuZG9tQ2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXRhdGVDYXB0Y2hhIiwidGV4dCIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInBsYWNlaG9sZGVyIiwiY2FzZVNlbnNpdGl2ZSIsImxlbmd0aCIsIndpZHRoIiwiZ2V0SW5pdGlhbFN0YXRlIiwidmFsdWUiLCJzb2x1dGlvbiIsInByb3BzIiwiY2hlY2tlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZHJhd0NhcHRjaGEiLCJyZWZyZXNoIiwiX3NvbHV0aW9uIiwic2V0U3RhdGUiLCJpbnB1dCIsIm9uUmVmcmVzaCIsInN0YXRlIiwiY2FudmFzIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwicGxheUF1ZGlvIiwiYXVkaW8iLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJ0b1N0cmluZyIsInNwbGl0Iiwiam9pbiIsInJhdGUiLCJsYW5nIiwid2luZG93Iiwic3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJfX29uSW5wdXRDaGFuZ2UiLCJldmVudCIsIl92YWx1ZSIsInRhcmdldCIsInRvTG93ZXJDYXNlIiwib25DaGFuZ2Ui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Q0FBV1AsV0FIekI7QUFJQyxlQUFTLEVBQUMsV0FKWDtBQUtDLHFCQUFZO0FBTGIsTUE1QkQsQ0FERCxDQUREO0FBd0NBO0FBMUhpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ3JCQUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IsbUJBQWlCZCxtQkFBTyxDQUFDLDJDQUFEO0FBRFgsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XG5cdG1heCA9IE1hdGguZmxvb3IobWF4KTtcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cbiAgXG5mdW5jdGlvbiBnZW5ldGF0ZUNhcHRjaGEobWF4KSB7XG5cdHZhciB0ZXh0ID0gJycsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtYXg7IGkgKz0gMSkge1xuXHRcdHN3aXRjaCAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykpIHtcblx0XHRjYXNlIDA6IHRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg0OCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7IGJyZWFrXG5cdFx0Y2FzZSAxOiB0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNikpOyBicmVha1xuXHRcdGNhc2UgMjogdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpKTsgYnJlYWtcblx0XHRkZWZhdWx0OiBicmVha1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0ZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1JhbmRvbUNhcHRjaGEnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpemqjOivgeeggScsXG5cdFx0XHRjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcblx0XHRcdGxlbmd0aDogNixcblx0XHRcdHdpZHRoOiAyMDBcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRzb2x1dGlvbjogZ2VuZXRhdGVDYXB0Y2hhKHRoaXMucHJvcHMubGVuZ3RoKSxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuZHJhd0NhcHRjaGEoKTtcblx0fSxcblx0cmVmcmVzaDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9zb2x1dGlvbiA9IGdlbmV0YXRlQ2FwdGNoYSh0aGlzLnByb3BzLmxlbmd0aCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzb2x1dGlvbjogX3NvbHV0aW9uLFxuXHRcdFx0aW5wdXQ6ICcnXG5cdFx0fSwgKCkgPT4gdGhpcy5kcmF3Q2FwdGNoYSgpKTtcblx0XHR0aGlzLnByb3BzLm9uUmVmcmVzaCAmJiB0aGlzLnByb3BzLm9uUmVmcmVzaChfc29sdXRpb24pO1xuXHR9LFxuXHRkcmF3Q2FwdGNoYTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIHNvbHV0aW9uID0gdGhpcy5zdGF0ZS5zb2x1dGlvbjtcblx0XHR2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcblx0XHR2YXIgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuXHRcdHZhciBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LmZvbnQgPSBgJHtnZXRSYW5kb21JbnQoMzAsIDQwKX1weCBzZXJpZmA7XG5cdFx0Y3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXHRcdGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcblx0XHRjdHguZmlsbFRleHQoc29sdXRpb24sIHdpZHRoIC8gMiwgaGVpZ2h0IC8gMiArIDMpO1xuXHRcdGN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xuXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5tb3ZlVG8oZ2V0UmFuZG9tSW50KDUsIDIwKSwgZ2V0UmFuZG9tSW50KDUsIDIwKSk7IFxuXHRcdGN0eC5saW5lVG8od2lkdGggLSBnZXRSYW5kb21JbnQoNSwgMjApLCBoZWlnaHQgLSBnZXRSYW5kb21JbnQoNSwgMjApKTsgXG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdGN0eC5tb3ZlVG8oZ2V0UmFuZG9tSW50KDE1LCAzMCksIGdldFJhbmRvbUludCgxNSwgMzApKTtcblx0XHRjdHgubGluZVRvKHdpZHRoIC0gZ2V0UmFuZG9tSW50KDE1LCAzMCksIGhlaWdodCAtIGdldFJhbmRvbUludCgxNSwgMzApKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0Y3R4Lm1vdmVUbyhnZXRSYW5kb21JbnQoNSwgMjApLCBoZWlnaHQgLSBnZXRSYW5kb21JbnQoNSwgMjApKTtcblx0XHRjdHgubGluZVRvKHdpZHRoIC0gZ2V0UmFuZG9tSW50KDUsIDIwKSwgZ2V0UmFuZG9tSW50KDUsIDIwKSk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXHRcdGN0eC5tb3ZlVG8oZ2V0UmFuZG9tSW50KDE1LCAzMCksIGhlaWdodCAtIGdldFJhbmRvbUludCgxNSwgMzApKTtcblx0XHRjdHgubGluZVRvKHdpZHRoIC0gZ2V0UmFuZG9tSW50KDE1LCAzMCksIGdldFJhbmRvbUludCgxNSwgMzApKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0Y3R4Lm1vdmVUbyhnZXRSYW5kb21JbnQod2lkdGggLyAxMCwgKHdpZHRoIC8gMTApICsgMTApLCBoZWlnaHQgLSBnZXRSYW5kb21JbnQoMTUsIDMwKSk7XG5cdFx0Y3R4LmxpbmVUbyhnZXRSYW5kb21JbnQod2lkdGggLyAyLCB3aWR0aCAvIDIgKyAxMCksIGdldFJhbmRvbUludCg1LCAyMCkpO1xuXHRcdGN0eC5zdHJva2UoKTtcblx0XHRjdHguY2xvc2VQYXRoKCk7XG5cdH0sXG5cdHBsYXlBdWRpbzogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5zb2x1dGlvbikge1xuXHRcdFx0dmFyIGF1ZGlvID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0aGlzLnN0YXRlLnNvbHV0aW9uLnRvU3RyaW5nKCkuc3BsaXQoJycpLmpvaW4oJyAnKSlcblx0XHRcdGF1ZGlvLnJhdGUgPSAxO1xuXHRcdFx0YXVkaW8ubGFuZyA9ICd6aC1jbic7XG5cdFx0XHR3aW5kb3cuc3BlZWNoU3ludGhlc2lzLnNwZWFrKGF1ZGlvKTtcblx0XHR9XG5cdH0sXG5cdF9fb25JbnB1dENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHZhciBzb2x1dGlvbiA9IHRoaXMuc3RhdGUuc29sdXRpb247XG5cdFx0dmFyIGNoZWNrZWQgPSBfdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBzb2x1dGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYodGhpcy5wcm9wcy5jYXNlU2Vuc2l0aXZlKSB7XG5cdFx0XHRjaGVja2VkID0gX3ZhbHVlLnRvU3RyaW5nKCkgPT09IHNvbHV0aW9uLnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0Y2hlY2tlZDogY2hlY2tlZFxuXHRcdH0pO1xuXHRcdGV2ZW50LnZhbHVlID0gZXZlbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXJhbmRvbS1jYXB0Y2hhXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm5jJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm5jLXJvdyc+XG5cdFx0XHRcdFx0XHQ8Y2FudmFzIHJlZj17ZWwgPT4gKHRoaXMuY2FudmFzID0gZWwpfSB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH0gaGVpZ2h0PXs1MH0gY2xhc3NOYW1lPSdybmMtY2FudmFzJyBkYXRhLXRlc3RpZD0nY2FwdGNoYS1jYW52YXMnLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdybmMtY29sdW1uJz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdidXR0b24nIGFyaWEtbGFiZWw9J2dldCBuZXcgY2FwdGNoYScgb25DbGljaz17dGhpcy5yZWZyZXNofSBjbGFzc05hbWU9J3JuYy1idXR0b24nIGRhdGEtdGVzdGlkPSdjYXB0Y2hhLXJlZnJlc2gnPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgZGF0YS1uYW1lPSdMYXllciAyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGcgZGF0YS1uYW1lPSdyZWZyZXNoJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHJlY3Qgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyBvcGFjaXR5PScwJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMjAuMyAxMy40M2ExIDEgMCAwIDAtMS4yNS42NUE3LjE0IDcuMTQgMCAwIDEgMTIuMTggMTkgNy4xIDcuMSAwIDAgMSA1IDEyYTcuMSA3LjEgMCAwIDEgNy4xOC03IDcuMjYgNy4yNiAwIDAgMSA0LjY1IDEuNjdsLTIuMTctLjM2YTEgMSAwIDAgMC0xLjE1LjgzIDEgMSAwIDAgMCAuODMgMS4xNWw0LjI0LjdoLjE3YTEgMSAwIDAgMCAuMzQtLjA2LjMzLjMzIDAgMCAwIC4xLS4wNi43OC43OCAwIDAgMCAuMi0uMTFsLjA5LS4xMWMwLS4wNS4wOS0uMDkuMTMtLjE1czAtLjEuMDUtLjE0YTEuMzQgMS4zNCAwIDAgMCAuMDctLjE4bC43NS00YTEgMSAwIDAgMC0yLS4zOGwtLjI3IDEuNDVBOS4yMSA5LjIxIDAgMCAwIDEyLjE4IDMgOS4xIDkuMSAwIDAgMCAzIDEyYTkuMSA5LjEgMCAwIDAgOS4xOCA5QTkuMTIgOS4xMiAwIDAgMCAyMSAxNC42OGExIDEgMCAwIDAtLjctMS4yNXonIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBhcmlhLWxhYmVsPSdwbGF5IGF1ZGlvJyBvbkNsaWNrPXt0aGlzLnBsYXlBdWRpb30gY2xhc3NOYW1lPSdybmMtYnV0dG9uJyBkYXRhLXRlc3RpZD0nY2FwdGNoYS1hdWRpbyc+XG5cdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZyBkYXRhLW5hbWU9J0xheWVyIDInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZyBkYXRhLW5hbWU9J3ZvbHVtZS11cCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxyZWN0IHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgb3BhY2l0eT0nMCcgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE4LjI4IDguMzdhMSAxIDAgMSAwLTEuNTYgMS4yNiA0IDQgMCAwIDEgMCA0Ljc0QTEgMSAwIDAgMCAxNy41IDE2YTEgMSAwIDAgMCAuNzgtLjM3IDYgNiAwIDAgMCAwLTcuMjZ6JyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMTkuNjQgNS4yM2ExIDEgMCAxIDAtMS4yOCAxLjU0QTYuOCA2LjggMCAwIDEgMjEgMTJhNi44IDYuOCAwIDAgMS0yLjY0IDUuMjMgMSAxIDAgMCAwLS4xMyAxLjQxQTEgMSAwIDAgMCAxOSAxOWExIDEgMCAwIDAgLjY0LS4yM0E4Ljc1IDguNzUgMCAwIDAgMjMgMTJhOC43NSA4Ljc1IDAgMCAwLTMuMzYtNi43N3onIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9J00xNSAzLjEyYTEgMSAwIDAgMC0xIDBMNy41MiA3LjU3aC01YTEgMSAwIDAgMC0xIDF2Ni44NmExIDEgMCAwIDAgMSAxaDVsNi40MSA0LjRhMS4wNiAxLjA2IDAgMCAwIC41Ny4xNyAxIDEgMCAwIDAgMS0xVjRhMSAxIDAgMCAwLS41LS44OHptLTEuNDcgMTVMOC40IDE0LjZhMSAxIDAgMCAwLS41Ny0uMTdIMy41VjkuNTdoNC4zM2ExIDEgMCAwIDAgLjU3LS4xN2w1LjEtMy41eicgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm5jLWlucHV0J1xuXHRcdFx0XHRcdFx0ZGF0YS10ZXN0aWQ9J2NhcHRjaGEtaW5wdXQnXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnUmFuZG9tQ2FwdGNoYSc6IHJlcXVpcmUoJy4vUmFuZG9tQ2FwdGNoYScpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==