import te, { useState as ne, useEffect as oe } from "react";
var b = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ae() {
  if (F) return E;
  F = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function f(c, u, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      i = {};
      for (var m in u)
        m !== "key" && (i[m] = u[m]);
    } else i = u;
    return u = i.ref, {
      $$typeof: t,
      type: c,
      key: d,
      ref: u !== void 0 ? u : null,
      props: i
    };
  }
  return E.Fragment = l, E.jsx = f, E.jsxs = f, E;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case X:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case G:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function f(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), l(e);
      }
    }
    function c(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function n() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function W() {
      var e = t(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, n, o, T, k) {
      var a = n.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: n,
        _owner: o
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, n, o, T, k) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (ee(a)) {
            for (o = 0; o < a.length; o++)
              A(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(a);
      if (N.call(r, "key")) {
        a = t(e);
        var v = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        o = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", L[a + o] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          v,
          a
        ), L[a + o] = !0);
      }
      if (a = null, n !== void 0 && (f(n), a = "" + n), d(r) && (f(r.key), a = "" + r.key), "key" in r) {
        n = {};
        for (var j in r)
          j !== "key" && (n[j] = r[j]);
      } else n = r;
      return a && m(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        a,
        n,
        u(),
        T,
        k
      );
    }
    function A(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var R = te, P = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), h = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, ee = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, Y = {}, I = R.react_stack_bottom_frame.bind(
      R,
      i
    )(), $ = g(c(i)), L = {};
    _.Fragment = x, _.jsx = function(e, r, n) {
      var o = 1e4 > h.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !1,
        o ? Error("react-stack-top-frame") : I,
        o ? g(c(e)) : $
      );
    }, _.jsxs = function(e, r, n) {
      var o = 1e4 > h.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !0,
        o ? Error("react-stack-top-frame") : I,
        o ? g(c(e)) : $
      );
    };
  })()), _;
}
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? b.exports = ae() : b.exports = se()), b.exports;
}
var s = le();
const ce = ({ size: t = 24, strokeWidth: l = 2 }) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: l,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ s.jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ s.jsx("path", { d: "m9 12 2 2 4-4" })
    ]
  }
), ie = ({ size: t = 24, strokeWidth: l = 2 }) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: l,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-circle-x-icon lucide-circle-x",
    children: [
      /* @__PURE__ */ s.jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ s.jsx("path", { d: "m15 9-6 6" }),
      /* @__PURE__ */ s.jsx("path", { d: "m9 9 6 6" })
    ]
  }
), ue = ({ size: t = 24, strokeWidth: l = 2 }) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: l,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-triangle-alert-icon lucide-triangle-alert",
    children: [
      /* @__PURE__ */ s.jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }),
      /* @__PURE__ */ s.jsx("path", { d: "M12 9v4" }),
      /* @__PURE__ */ s.jsx("path", { d: "M12 17h.01" })
    ]
  }
);
function fe(t) {
  switch (t) {
    case "success":
      return /* @__PURE__ */ s.jsx(ce, { size: 20 });
    case "error":
      return /* @__PURE__ */ s.jsx(ie, { size: 20 });
    case "warning":
      return /* @__PURE__ */ s.jsx(ue, { size: 18 });
    default:
      return null;
  }
}
function de({ message: t, type: l = "default", icon: f, leaving: c }) {
  return /* @__PURE__ */ s.jsxs("div", { className: `toast toast-${l} ${c ? "toast-exit" : "toast-enter"}`, children: [
    f,
    t
  ] });
}
let O;
function ve({
  autoClose: t = 3e3
}) {
  const [l, f] = ne([]);
  return oe(() => {
    O = (c, u = "default") => {
      const i = Date.now();
      f((d) => [...d, { id: i, message: c, type: u, leaving: !1 }]), setTimeout(() => {
        f(
          (d) => d.map((m) => m.id === i ? { ...m, leaving: !0 } : m)
        ), setTimeout(() => {
          f((d) => d.filter((m) => m.id !== i));
        }, 400);
      }, t);
    };
  }, []), /* @__PURE__ */ s.jsx("div", { className: "toast-container", children: l.map((c) => /* @__PURE__ */ s.jsx(de, { message: c.message, type: c.type, icon: fe(c.type), leaving: c.leaving }, c.id)) });
}
function p(t, l = "default") {
  O && O(t, l);
}
p.success = (t) => p(t, "success");
p.error = (t) => p(t, "error");
p.warning = (t) => p(t, "warning");
export {
  ve as ToastContainer,
  p as toast
};
