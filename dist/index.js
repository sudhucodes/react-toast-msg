'use strict';

var React = require('react');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function ToastContainer(_ref) {
  var _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 3000 : _ref$duration;
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  React.useEffect(function () {
    _register(function (toast) {
      var newToast = _objectSpread2(_objectSpread2({}, toast), {}, {
        id: Date.now() + Math.random()
      });
      setToasts(function (prev) {
        return [newToast].concat(_toConsumableArray(prev));
      });
      setTimeout(function () {
        setToasts(function (prev) {
          return prev.filter(function (t) {
            return t.id !== newToast.id;
          });
        });
      }, duration);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "toast-container"
  }, toasts.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "toast toast-".concat(t.type)
    }, /*#__PURE__*/React.createElement("div", {
      className: "toast-content"
    }, t.type === 'success' ? /*#__PURE__*/React.createElement("svg", {
      className: "toast-icon toast-".concat(t.type, "-icon"),
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: "28",
      height: "28",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z",
      clipRule: "evenodd"
    })) : /*#__PURE__*/React.createElement("svg", {
      className: "toast-icon toast-".concat(t.type, "-icon"),
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: "28",
      height: "28",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z",
      clipRule: "evenodd"
    })), /*#__PURE__*/React.createElement("p", null, t.message)), /*#__PURE__*/React.createElement("button", {
      className: "toast-close",
      "aria-label": "Close",
      onClick: function onClick() {
        return setToasts(function (prev) {
          return prev.filter(function (x) {
            return x.id !== t.id;
          });
        });
      }
    }, /*#__PURE__*/React.createElement("svg", {
      className: "close-icon",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      fill: "none",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6 18 17.94 6M18 18 6.06 6"
    }))));
  }));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root{--color-success-bg:oklch(0.962 0.044 156.743);--color-success-border:oklch(0.723 0.219 149.579);--color-success-icon:oklch(0.627 0.194 149.214);--color-success-text:oklch(0.393 0.095 152.535);--color-error-bg:oklch(0.936 0.032 17.717);--color-error-border:oklch(0.637 0.237 25.331);--color-error-icon:oklch(0.577 0.245 27.325);--color-error-text:oklch(0.396 0.141 25.723)}*{box-sizing:border-box;margin:0;padding:0}.toast-container{align-items:end;display:flex;flex-direction:column;gap:8px;height:100vh;position:fixed;right:20px;top:20px;z-index:9999}.toast{align-items:start;animation:reveal .3s ease-in-out forwards;border-left:4px solid;border-radius:.375rem;display:flex;justify-content:space-between;opacity:0;padding:.5rem .5rem .5rem 0;transform:translateX(100%);width:300px}.toast-content{align-items:center;display:flex;padding:.5rem}.toast-icon{flex-shrink:0;height:1.75rem;margin-right:.5rem;width:1.75rem}.toast-close{background:none;border:none;color:#333;cursor:pointer;margin-left:1rem}.close-icon{height:1rem;width:1rem}@keyframes reveal{to{opacity:1;transform:translateX(0)}}.toast-success{background-color:var(--color-success-bg);border-left-color:var(--color-success-border);color:var(--color-success-text)}.toast-error{background-color:var(--color-error-bg);border-left-color:var(--color-error-border);color:var(--color-error-text)}.toast-success-icon{color:var(--color-success-icon)}.toast-error-icon{color:var(--color-error-icon)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFDSSw2Q0FBOEMsQ0FDOUMsaURBQWtELENBQ2xELCtDQUFnRCxDQUNoRCwrQ0FBZ0QsQ0FFaEQsMENBQTJDLENBQzNDLDhDQUErQyxDQUMvQyw0Q0FBNkMsQ0FDN0MsNENBQ0osQ0FFQSxFQUdJLHFCQUFzQixDQUZ0QixRQUFTLENBQ1QsU0FFSixDQUVBLGlCQU9JLGVBQWdCLENBRGhCLFlBQWEsQ0FFYixxQkFBc0IsQ0FDdEIsT0FBUSxDQUxSLFlBQWEsQ0FIYixjQUFlLENBRWYsVUFBVyxDQURYLFFBQVMsQ0FHVCxZQUtKLENBRUEsT0FFSSxpQkFBa0IsQ0FTbEIseUNBQTJDLENBSjNDLHFCQUFzQixDQUN0QixxQkFBdUIsQ0FQdkIsWUFBYSxDQUViLDZCQUE4QixDQU05QixTQUFVLENBSFYsMkJBQWtCLENBSWxCLDBCQUEyQixDQU4zQixXQVFKLENBRUEsZUFFSSxrQkFBbUIsQ0FEbkIsWUFBYSxDQUViLGFBQ0osQ0FFQSxZQUlJLGFBQWMsQ0FGZCxjQUFlLENBQ2Ysa0JBQW9CLENBRnBCLGFBSUosQ0FFQSxhQUVJLGVBQWdCLENBQ2hCLFdBQVksQ0FDWixVQUFzQixDQUN0QixjQUFlLENBSmYsZ0JBS0osQ0FFQSxZQUVJLFdBQVksQ0FEWixVQUVKLENBRUEsa0JBQ0ksR0FDSSxTQUFVLENBQ1YsdUJBQ0osQ0FDSixDQUdBLGVBQ0ksd0NBQXlDLENBQ3pDLDZDQUE4QyxDQUM5QywrQkFDSixDQUVBLGFBQ0ksc0NBQXVDLENBQ3ZDLDJDQUE0QyxDQUM1Qyw2QkFDSixDQUVBLG9CQUNJLCtCQUNKLENBRUEsa0JBQ0ksNkJBQ0oiLCJmaWxlIjoiZ2xvYmFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0tY29sb3Itc3VjY2Vzcy1iZzogb2tsY2goMC45NjIgMC4wNDQgMTU2Ljc0Myk7XHJcbiAgICAtLWNvbG9yLXN1Y2Nlc3MtYm9yZGVyOiBva2xjaCgwLjcyMyAwLjIxOSAxNDkuNTc5KTtcclxuICAgIC0tY29sb3Itc3VjY2Vzcy1pY29uOiBva2xjaCgwLjYyNyAwLjE5NCAxNDkuMjE0KTtcclxuICAgIC0tY29sb3Itc3VjY2Vzcy10ZXh0OiBva2xjaCgwLjM5MyAwLjA5NSAxNTIuNTM1KTtcclxuXHJcbiAgICAtLWNvbG9yLWVycm9yLWJnOiBva2xjaCgwLjkzNiAwLjAzMiAxNy43MTcpO1xyXG4gICAgLS1jb2xvci1lcnJvci1ib3JkZXI6IG9rbGNoKDAuNjM3IDAuMjM3IDI1LjMzMSk7XHJcbiAgICAtLWNvbG9yLWVycm9yLWljb246IG9rbGNoKDAuNTc3IDAuMjQ1IDI3LjMyNSk7XHJcbiAgICAtLWNvbG9yLWVycm9yLXRleHQ6IG9rbGNoKDAuMzk2IDAuMTQxIDI1LjcyMyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi50b2FzdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBhbmltYXRpb246IHJldmVhbCAwLjNzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG4udG9hc3QtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLnRvYXN0LWljb24ge1xyXG4gICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udG9hc3QtY2xvc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmV2ZWFsIHtcclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogVE9BU1QgU1RZTEVTICovXHJcbi50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtYmcpO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtYm9yZGVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzLXRleHQpO1xyXG59XHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZXJyb3ItYmcpO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLWVycm9yLWJvcmRlcik7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3ItdGV4dCk7XHJcbn1cclxuXHJcbi50b2FzdC1zdWNjZXNzLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtaWNvbik7XHJcbn1cclxuXHJcbi50b2FzdC1lcnJvci1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvci1pY29uKTtcclxufSJdfQ== */";
styleInject(css_248z);

var addToast;
var toast = {
  success: function success(message) {
    addToast && addToast({
      message: message,
      type: 'success'
    });
  },
  error: function error(message) {
    addToast && addToast({
      message: message,
      type: 'error'
    });
  }
};
function _register(fn) {
  addToast = fn;
}

exports.ToastContainer = ToastContainer;
exports._register = _register;
exports.toast = toast;
//# sourceMappingURL=index.js.map
