import te, { useState as ne, useEffect as oe } from "react";
var h = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ae() {
  if (M) return R;
  M = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(c, u, f) {
    var d = null;
    if (f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), "key" in u) {
      f = {};
      for (var m in u)
        m !== "key" && (f[m] = u[m]);
    } else f = u;
    return u = f.ref, {
      $$typeof: t,
      type: c,
      key: d,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return R.Fragment = n, R.jsx = i, R.jsxs = i, R;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function se() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
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
          case k:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function i(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), n(e);
      }
    }
    function c(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function f() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function o() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function v() {
      var e = t(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, r, o, a, w, A) {
      var s = o.ref;
      return e = {
        $$typeof: C,
        type: e,
        key: r,
        props: o,
        _owner: a
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
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
        value: w
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, o, a, w, A) {
      var s = r.children;
      if (s !== void 0)
        if (a)
          if (ee(s)) {
            for (a = 0; a < s.length; a++)
              P(s[a]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(s);
      if (Y.call(r, "key")) {
        s = t(e);
        var p = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        a = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", D[s + a] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          s,
          p,
          s
        ), D[s + a] = !0);
      }
      if (s = null, o !== void 0 && (i(o), s = "" + o), d(r) && (i(r.key), s = "" + r.key), "key" in r) {
        o = {};
        for (var S in r)
          S !== "key" && (o[S] = r[S]);
      } else o = r;
      return s && m(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        s,
        o,
        u(),
        w,
        A
      );
    }
    function P(e) {
      N(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? N(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function N(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    var x = te, C = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), j = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ee = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, $ = {}, L = x.react_stack_bottom_frame.bind(
      x,
      f
    )(), F = O(c(f)), D = {};
    T.Fragment = g, T.jsx = function(e, r, o) {
      var a = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        o,
        !1,
        a ? Error("react-stack-top-frame") : L,
        a ? O(c(e)) : F
      );
    }, T.jsxs = function(e, r, o) {
      var a = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        o,
        !0,
        a ? Error("react-stack-top-frame") : L,
        a ? O(c(e)) : F
      );
    };
  })()), T;
}
var U;
function le() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? h.exports = ae() : h.exports = se()), h.exports;
}
var l = le();
const ce = ({ size: t = 24, strokeWidth: n = 2 }) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ l.jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ l.jsx("path", { d: "m9 12 2 2 4-4" })
    ]
  }
), ie = ({ size: t = 24, strokeWidth: n = 2 }) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-circle-x-icon lucide-circle-x",
    children: [
      /* @__PURE__ */ l.jsx("circle", { cx: 12, cy: 12, r: 10 }),
      /* @__PURE__ */ l.jsx("path", { d: "m15 9-6 6" }),
      /* @__PURE__ */ l.jsx("path", { d: "m9 9 6 6" })
    ]
  }
), ue = ({ size: t = 24, strokeWidth: n = 2 }) => /* @__PURE__ */ l.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: n,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "lucide lucide-triangle-alert-icon lucide-triangle-alert",
    children: [
      /* @__PURE__ */ l.jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }),
      /* @__PURE__ */ l.jsx("path", { d: "M12 9v4" }),
      /* @__PURE__ */ l.jsx("path", { d: "M12 17h.01" })
    ]
  }
);
function fe(t) {
  switch (t) {
    case "success":
      return /* @__PURE__ */ l.jsx(ce, { size: 20 });
    case "error":
      return /* @__PURE__ */ l.jsx(ie, { size: 20 });
    case "warning":
      return /* @__PURE__ */ l.jsx(ue, { size: 18 });
    default:
      return null;
  }
}
function de({ message: t, type: n = "default", icon: i, leaving: c }) {
  return /* @__PURE__ */ l.jsxs("div", { className: `toast toast-${n} ${c ? "toast-exit" : "toast-enter"}`, children: [
    i,
    t
  ] });
}
let b;
function ve({ autoClose: t = 3e3 }) {
  const [n, i] = ne([]);
  return oe(() => {
    b = (c, u = "default", f) => {
      const d = Date.now(), m = f || t;
      i((v) => [...v, { id: d, message: c, type: u, leaving: !1 }]), setTimeout(() => {
        i(
          (v) => v.map(
            (E) => E.id === d ? { ...E, leaving: !0 } : E
          )
        ), setTimeout(() => {
          i((v) => v.filter((E) => E.id !== d));
        }, 400);
      }, m);
    };
  }, [t]), /* @__PURE__ */ l.jsx("div", { className: "toast-container", children: n.map((c) => /* @__PURE__ */ l.jsx(
    de,
    {
      message: c.message,
      type: c.type,
      icon: fe(c.type),
      leaving: c.leaving
    },
    c.id
  )) });
}
function _(t, n = "default", i) {
  typeof n == "number" ? b && b(t, "default", n) : b && b(t, n, i);
}
_.success = (t, n) => _(t, "success", n);
_.error = (t, n) => _(t, "error", n);
_.warning = (t, n) => _(t, "warning", n);
export {
  ve as ToastContainer,
  _ as toast
};
