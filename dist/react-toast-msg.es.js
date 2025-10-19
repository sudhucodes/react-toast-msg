import te, { useState as ne, useEffect as ae } from "react";
var T = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function oe() {
  if (I) return _;
  I = 1;
  var n = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function l(d, u, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), u.key !== void 0 && (i = "" + u.key), "key" in u) {
      s = {};
      for (var E in u)
        E !== "key" && (s[E] = u[E]);
    } else s = u;
    return u = s.ref, {
      $$typeof: n,
      type: d,
      key: i,
      ref: u !== void 0 ? u : null,
      props: s
    };
  }
  return _.Fragment = c, _.jsx = l, _.jsxs = l, _;
}
var v = {};
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
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case B:
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
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function l(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(e);
      }
    }
    function d(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function W() {
      var e = n(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, a, b, x) {
      var o = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: b
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, t, a, b, x) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (ee(o)) {
            for (a = 0; a < o.length; a++)
              S(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(o);
      if (C.call(r, "key")) {
        o = n(e);
        var m = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          m,
          o
        ), F[o + a] = !0);
      }
      if (o = null, t !== void 0 && (l(t), o = "" + t), i(r) && (l(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var O in r)
          O !== "key" && (t[O] = r[O]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        o,
        t,
        u(),
        b,
        x
      );
    }
    function S(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var R = te, y = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), h = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, Y = {}, $ = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), L = g(d(s)), F = {};
    v.Fragment = k, v.jsx = function(e, r, t) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : $,
        a ? g(d(e)) : L
      );
    }, v.jsxs = function(e, r, t) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : $,
        a ? g(d(e)) : L
      );
    };
  })()), v;
}
var M;
function ue() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = oe() : T.exports = se()), T.exports;
}
var p = ue();
let j;
function ie() {
  const [n, c] = ne([]);
  return ae(() => {
    j = (l, d = "default") => {
      const u = Date.now();
      c((s) => [...s, { id: u, message: l, type: d, leaving: !1 }]), setTimeout(() => {
        c(
          (s) => s.map((i) => i.id === u ? { ...i, leaving: !0 } : i)
        ), setTimeout(() => {
          c((s) => s.filter((i) => i.id !== u));
        }, 400);
      }, 3e3);
    };
  }, []), /* @__PURE__ */ p.jsx("div", { className: "toast-container", children: n.map((l) => /* @__PURE__ */ p.jsxs("div", { className: `toast toast-${l.type || "default"} ${l.leaving ? "toast-exit" : "toast-enter"}`, children: [
    /* @__PURE__ */ p.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ p.jsx("path", { d: "M21.8006 9.99999C22.2573 12.2413 21.9318 14.5714 20.8785 16.6018C19.8251 18.6322 18.1075 20.24 16.0121 21.1573C13.9167 22.0746 11.5702 22.2458 9.36391 21.6424C7.15758 21.0389 5.2248 19.6974 3.88789 17.8414C2.55097 15.9854 1.89073 13.7272 2.01728 11.4434C2.14382 9.15952 3.04949 6.98808 4.58326 5.29116C6.11703 3.59424 8.18619 2.47442 10.4457 2.11844C12.7052 1.76247 15.0184 2.19185 16.9996 3.33499", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ p.jsx("path", { d: "M9 11L12 14L22 4", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    l.message
  ] }, l.id)) });
}
function f(n, c = "default") {
  j && j(n, c);
}
f.success = (n) => f(n, "success");
f.error = (n) => f(n, "error");
f.warning = (n) => f(n, "warning");
f.info = (n) => f(n, "info");
export {
  ie as ToastContainer,
  f as toast
};
