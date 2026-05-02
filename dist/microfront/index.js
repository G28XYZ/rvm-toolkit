import Se from "react";
import dr from "react-dom";
import { d as vr } from "../tslib.es6-DQYNRcek.js";
var V = { exports: {} }, $ = {};
var Oe;
function pr() {
  if (Oe) return $;
  Oe = 1;
  var E = Se, s = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, _ = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, d, w) {
    var y, O = {}, P = null, Y = null;
    w !== void 0 && (P = "" + w), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (Y = d.ref);
    for (y in d) f.call(d, y) && !g.hasOwnProperty(y) && (O[y] = d[y]);
    if (T && T.defaultProps) for (y in d = T.defaultProps, d) O[y] === void 0 && (O[y] = d[y]);
    return { $$typeof: s, type: T, key: P, ref: Y, props: O, _owner: _.current };
  }
  return $.Fragment = R, $.jsx = m, $.jsxs = m, $;
}
var W = {};
var Ce;
function Er() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var E = Se, s = /* @__PURE__ */ Symbol.for("react.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), d = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), Y = /* @__PURE__ */ Symbol.for("react.offscreen"), Z = Symbol.iterator, we = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[we];
      return typeof r == "function" ? r : null;
    }
    var j = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Ae = !1, Fe = !1, Ie = !1, $e = !1, Q;
    Q = /* @__PURE__ */ Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === g || $e || e === _ || e === w || e === y || Ie || e === Y || De || Ae || Fe || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === O || e.$$typeof === m || e.$$typeof === T || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case R:
          return "Portal";
        case g:
          return "Profiler";
        case _:
          return "StrictMode";
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ee(r) + ".Consumer";
          case m:
            var t = e;
            return ee(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case P: {
            var i = e, u = i._payload, o = i._init;
            try {
              return C(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, F = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ue() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: re
            }),
            info: x({}, e, {
              value: te
            }),
            warn: x({}, e, {
              value: ne
            }),
            error: x({}, e, {
              value: ae
            }),
            group: x({}, e, {
              value: oe
            }),
            groupCollapsed: x({}, e, {
              value: ie
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = j.ReactCurrentDispatcher, q;
    function U(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var B = !1, M;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Le();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), l = a.length - 1, c = p.length - 1; l >= 1 && c >= 0 && a[l] !== p[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== p[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== p[c]) {
                    var b = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, b), b;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        B = !1, J.current = u, Me(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", S = D ? U(D) : "";
      return typeof e == "function" && M.set(e, S), S;
    }
    function Ne(e, r, t) {
      return le(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ve(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case w:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ne(e.render);
          case O:
            return L(e.type, r, t);
          case P: {
            var n = e, i = n._payload, u = n._init;
            try {
              return L(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ce = {}, fe = j.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var u = Function.call.bind(I);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (N(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, N(i), v("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var qe = Array.isArray;
    function K(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Ke(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), de(e);
    }
    var pe = j.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, he;
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, p = null;
        t !== void 0 && (ve(t), a = "" + t), Xe(r) && (ve(r.key), a = "" + r.key), Ge(r) && (p = r.ref, He(r, i));
        for (u in r)
          I.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, c), p && Qe(o, c);
        }
        return er(e, a, p, i, n, pe.current, o);
      }
    }
    var z = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Re() {
      {
        if (z.current) {
          var e = C(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var _e = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + C(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && ge(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              X(o.value) && ge(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = C(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var me = {};
    function Te(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr();
          p ? a += p : a += Re();
          var l;
          e === null ? l = "null" : K(e) ? l = "array" : e !== void 0 && e.$$typeof === s ? (l = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = rr(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (K(b)) {
                for (var D = 0; D < b.length; D++)
                  be(b[D], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(b, e);
        }
        if (I.call(r, "key")) {
          var S = C(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), H = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!me[S + H]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, S, cr, S), me[S + H] = !0;
          }
        }
        return e === f ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    W.Fragment = f, W.jsx = sr, W.jsxs = lr;
  })()), W;
}
var Pe;
function hr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? V.exports = pr() : V.exports = Er()), V.exports;
}
var yr = hr(), A = {}, xe;
function Rr() {
  if (xe) return A;
  xe = 1;
  var E = dr;
  if (process.env.NODE_ENV === "production")
    A.createRoot = E.createRoot, A.hydrateRoot = E.hydrateRoot;
  else {
    var s = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    A.createRoot = function(R, f) {
      s.usingClientEntryPoint = !0;
      try {
        return E.createRoot(R, f);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    }, A.hydrateRoot = function(R, f, _) {
      s.usingClientEntryPoint = !0;
      try {
        return E.hydrateRoot(R, f, _);
      } finally {
        s.usingClientEntryPoint = !1;
      }
    };
  }
  return A;
}
var _r = Rr();
const gr = "microfront:update";
function br(E, s, R) {
  const f = _r.createRoot(E);
  return f.render(yr.jsx(s, Object.assign({}, R))), () => {
    f.unmount();
  };
}
function Cr({ component: E, meta: s, updateEvent: R = gr }) {
  return {
    microfrontMeta: s,
    mount(_, g) {
      return br(_, E, { context: g.context });
    }
  };
}
class Pr {
  constructor() {
    this.context = null;
  }
  setContext(s) {
    this.context = s;
  }
  getJson(s, R) {
    return vr(this, void 0, void 0, function* () {
      var f, _;
      const g = yield fetch(`${this.getBaseUrl(s)}${R}`, {
        credentials: "include",
        headers: {
          Accept: "application/json"
        }
      });
      if (!g.ok) {
        const T = yield g.text().catch(() => "");
        throw new Error(`HTTP ${g.status}: ${T || g.statusText}`);
      }
      const m = yield g.json();
      if (m.success === !1)
        throw new Error(String(((f = m.errors) === null || f === void 0 ? void 0 : f[0]) || "Microfront API request failed"));
      return (_ = m.data) !== null && _ !== void 0 ? _ : [];
    });
  }
  getLibvirtJson(s) {
    return this.getJson("libvirt", s);
  }
  getSystemJson(s) {
    return this.getJson("system", s);
  }
  getBaseUrl(s) {
    if (!this.context)
      throw new Error("Microfront host context is not initialized");
    return s === "libvirt" ? this.context.api.libvirtBaseUrl : this.context.api.systemBaseUrl;
  }
}
export {
  gr as MICROFRONT_UPDATE_EVENT,
  Pr as MicrofrontApiClient,
  Cr as createReactMicrofrontend,
  br as mountReactComponent
};
