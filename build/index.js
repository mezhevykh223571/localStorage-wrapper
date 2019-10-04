"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CookieService =
/*#__PURE__*/
function () {
  function CookieService() {
    _classCallCheck(this, CookieService);

    if (!window || !window.document || !window.document.cookie) {
      throw new Error('Cookies are not supported');
    }
  }

  _createClass(CookieService, [{
    key: "setItem",
    value: function setItem(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 31;
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "expires=".concat(date.toUTCString());
      window.document.cookie = "".concat(name, "=").concat(value, "; ").concat(expires, "; path=/");
    }
  }, {
    key: "getItem",
    value: function getItem(name) {
      var getCookie = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return getCookie ? getCookie[2] : null;
    }
  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return window.document.cookie.split(';').map(function (item) {
        return item.trim().split('=');
      }).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            itemName = _ref2[0],
            itemValue = _ref2[1];

        return _objectSpread({}, acc, _defineProperty({}, itemName, itemValue));
      }, {});
    }
  }, {
    key: "removeItem",
    value: function removeItem(name) {
      window.document.cookie = "".concat(name, "=; Max-Age=-99999999;");
    }
  }, {
    key: "removeAllItems",
    value: function removeAllItems() {
      var _this = this;

      Object.keys(this.getAllItems()).forEach(function (itemName) {
        _this.removeItem(itemName);
      });
    }
  }]);

  return CookieService;
}();

var _default = CookieService;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalStorageService =
/*#__PURE__*/
function () {
  function LocalStorageService() {
    _classCallCheck(this, LocalStorageService);

    if (!window || !window.localStorage || !window.localStorage) {
      throw new Error('Local Storage is not supported');
    }
  }

  _createClass(LocalStorageService, [{
    key: "setItem",
    value: function setItem(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      window.localStorage.setItem(name, value);
    }
  }, {
    key: "getItem",
    value: function getItem(name) {
      return window.localStorage.getItem(name);
    }
  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return _objectSpread({}, window.localStorage);
    }
  }, {
    key: "removeItem",
    value: function removeItem(name) {
      window.localStorage.removeItem(name);
    }
  }, {
    key: "removeAllItems",
    value: function removeAllItems() {
      var _this = this;

      Object.keys(window.localStorage).forEach(function (itemName) {
        _this.removeItem(itemName);
      });
    }
  }]);

  return LocalStorageService;
}();

var _default = LocalStorageService;
exports.default = _default;
"use strict";

var _CookieService = _interopRequireDefault(require("./CookieService"));

var _LocalStorageService = _interopRequireDefault(require("./LocalStorageService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    try {
      this.localStorage = new _LocalStorageService.default();
    } catch (error) {
      console.error(error);
    }

    try {
      this.cookieService = new _CookieService.default();
    } catch (error) {
      console.error(error);
    }
  }

  _createClass(Store, [{
    key: "setItem",
    value: function setItem(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 31;

      if (!name) {
        throw new Error('Name was not specified');
      }

      if (this.localStorage) {
        this.localStorage.setItem(name, value);
      } else if (this.cookieService) {
        this.cookieService.setItem(name, value, days);
      }
    }
  }, {
    key: "getItem",
    value: function getItem(name) {
      if (!name) {
        return;
      }

      if (this.localStorage) {
        this.localStorage.getItem(name);
      } else if (this.cookieService) {
        this.cookieService.getItem(name);
      }
    }
  }, {
    key: "getAllItems",
    value: function getAllItems() {
      if (this.localStorage) {
        this.localStorage.getAllItems();
      } else if (this.cookieService) {
        this.cookieService.getAllItems();
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(name) {
      if (!name) {
        return;
      }

      if (this.localStorage) {
        this.localStorage.removeItem(name);
      } else if (this.cookieService) {
        this.cookieService.removeItem(name);
      }
    }
  }, {
    key: "removeAllItems",
    value: function removeAllItems() {
      if (this.localStorage) {
        this.localStorage.removeAllItems();
      } else if (this.cookieService) {
        this.cookieService.removeAllItems();
      }
    }
  }]);

  return Store;
}();

if (window) {
  window.store = new Store();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvb2tpZVNlcnZpY2UuanMiLCJMb2NhbFN0b3JhZ2VTZXJ2aWNlLmpzIiwiU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICghKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikpIHsgcmV0dXJuOyB9IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgQ29va2llU2VydmljZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvb2tpZVNlcnZpY2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvb2tpZVNlcnZpY2UpO1xuXG4gICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCAhd2luZG93LmRvY3VtZW50LmNvb2tpZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb29raWVzIGFyZSBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvb2tpZVNlcnZpY2UsIFt7XG4gICAga2V5OiBcInNldEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAgICAgdmFyIGRheXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMxO1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIuY29uY2F0KGRhdGUudG9VVENTdHJpbmcoKSk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID0gXCJcIi5jb25jYXQobmFtZSwgXCI9XCIpLmNvbmNhdCh2YWx1ZSwgXCI7IFwiKS5jb25jYXQoZXhwaXJlcywgXCI7IHBhdGg9L1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKG5hbWUpIHtcbiAgICAgIHZhciBnZXRDb29raWUgPSB3aW5kb3cuZG9jdW1lbnQuY29va2llLm1hdGNoKCcoXnw7KSA/JyArIG5hbWUgKyAnPShbXjtdKikoO3wkKScpO1xuICAgICAgcmV0dXJuIGdldENvb2tpZSA/IGdldENvb2tpZVsyXSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbEl0ZW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZikge1xuICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIGl0ZW1OYW1lID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBpdGVtVmFsdWUgPSBfcmVmMlsxXTtcblxuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgYWNjLCBfZGVmaW5lUHJvcGVydHkoe30sIGl0ZW1OYW1lLCBpdGVtVmFsdWUpKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlSXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJdGVtKG5hbWUpIHtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5jb29raWUgPSBcIlwiLmNvbmNhdChuYW1lLCBcIj07IE1heC1BZ2U9LTk5OTk5OTk5O1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQWxsSXRlbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsSXRlbXMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdldEFsbEl0ZW1zKCkpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1OYW1lKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZUl0ZW0oaXRlbU5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvb2tpZVNlcnZpY2U7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IENvb2tpZVNlcnZpY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgTG9jYWxTdG9yYWdlU2VydmljZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvY2FsU3RvcmFnZVNlcnZpY2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsU3RvcmFnZVNlcnZpY2UpO1xuXG4gICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwgIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9jYWwgU3RvcmFnZSBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsU3RvcmFnZVNlcnZpY2UsIFt7XG4gICAga2V5OiBcInNldEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKG5hbWUpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEFsbEl0ZW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFsbEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUl0ZW0obmFtZSkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVBbGxJdGVtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGxJdGVtcygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1OYW1lKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZUl0ZW0oaXRlbU5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvY2FsU3RvcmFnZVNlcnZpY2U7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IExvY2FsU3RvcmFnZVNlcnZpY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9Db29raWVTZXJ2aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Db29raWVTZXJ2aWNlXCIpKTtcblxudmFyIF9Mb2NhbFN0b3JhZ2VTZXJ2aWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgU3RvcmUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RvcmUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbmV3IF9Mb2NhbFN0b3JhZ2VTZXJ2aWNlLmRlZmF1bHQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29va2llU2VydmljZSA9IG5ldyBfQ29va2llU2VydmljZS5kZWZhdWx0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdG9yZSwgW3tcbiAgICBrZXk6IFwic2V0SXRlbVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJdGVtKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICAgICB2YXIgZGF5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMzE7XG5cbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgd2FzIG5vdCBzcGVjaWZpZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvb2tpZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldEl0ZW0obmFtZSwgdmFsdWUsIGRheXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW0obmFtZSkge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29va2llU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0SXRlbShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QWxsSXRlbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsSXRlbXMoKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0QWxsSXRlbXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29raWVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5nZXRBbGxJdGVtcygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVJdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUl0ZW0obmFtZSkge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29va2llU2VydmljZSkge1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlSXRlbShuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlQWxsSXRlbXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsSXRlbXMoKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlQWxsSXRlbXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29raWVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5yZW1vdmVBbGxJdGVtcygpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdG9yZTtcbn0oKTtcblxuaWYgKHdpbmRvdykge1xuICB3aW5kb3cuc3RvcmUgPSBuZXcgU3RvcmUoKTtcbn0iXX0=
