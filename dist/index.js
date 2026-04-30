import "reflect-metadata";
import { d as he, _ as L, a as K, b as U, c as D, e as ji } from "./tslib.es6-DQYNRcek.js";
import { makeObservable as cr, observable as ue, isObservable as qr, runInAction as W, computed as X, action as G, flow as Ti, isFlowCancellationError as Mi, makeAutoObservable as Ei } from "mobx";
import { observer as Di } from "mobx-react";
import { useMemo as Pi, useEffect as Ii, isValidElement as ki } from "react";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ae, Or;
function di() {
  if (Or) return Ae;
  Or = 1;
  var e = typeof le == "object" && le && le.Object === Object && le;
  return Ae = e, Ae;
}
var Ce, Ar;
function N() {
  if (Ar) return Ce;
  Ar = 1;
  var e = di(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Ce = r, Ce;
}
var Re, Cr;
function yr() {
  if (Cr) return Re;
  Cr = 1;
  var e = N(), t = e.Symbol;
  return Re = t, Re;
}
var je, Rr;
function Fi() {
  if (Rr) return je;
  Rr = 1;
  var e = yr(), t = Object.prototype, r = t.hasOwnProperty, i = t.toString, a = e ? e.toStringTag : void 0;
  function n(s) {
    var o = r.call(s, a), u = s[a];
    try {
      s[a] = void 0;
      var l = !0;
    } catch {
    }
    var d = i.call(s);
    return l && (o ? s[a] = u : delete s[a]), d;
  }
  return je = n, je;
}
var Te, jr;
function xi() {
  if (jr) return Te;
  jr = 1;
  var e = Object.prototype, t = e.toString;
  function r(i) {
    return t.call(i);
  }
  return Te = r, Te;
}
var Me, Tr;
function _e() {
  if (Tr) return Me;
  Tr = 1;
  var e = yr(), t = Fi(), r = xi(), i = "[object Null]", a = "[object Undefined]", n = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : i : n && n in Object(o) ? t(o) : r(o);
  }
  return Me = s, Me;
}
var Ee, Mr;
function hi() {
  if (Mr) return Ee;
  Mr = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ee = e, Ee;
}
var De, Er;
function mr() {
  if (Er) return De;
  Er = 1;
  var e = _e(), t = hi(), r = "[object AsyncFunction]", i = "[object Function]", a = "[object GeneratorFunction]", n = "[object Proxy]";
  function s(o) {
    if (!t(o))
      return !1;
    var u = e(o);
    return u == i || u == a || u == r || u == n;
  }
  return De = s, De;
}
var Li = mr();
const Ki = /* @__PURE__ */ gr(Li), H = (e, t, r) => Reflect.getOwnMetadata(e, t) || r || {}, z = (e, t, r) => Reflect.defineMetadata(e, t, r);
function Os(...e) {
  try {
    return JSON.stringify(e), !0;
  } catch {
    return !1;
  }
}
function Gi(e) {
  if (e && typeof e == "string") {
    let [t] = e.split(`
`)[2].replace(/at (get)?/, "").match(/.*/g) || [];
    return t && (t = t.trim()), t;
  }
}
const Dr = {}, Pe = [];
let Pr = !1;
const As = (e, ...t) => {
  const r = new Error().stack;
  if (!Pr)
    console.log("%c TODO", "background: #222; color: #bada55", Dr), Pr = !0;
  else {
    const a = Gi(r);
    Pe.includes(a) === !1 && (Pe.push(a), Reflect.set(Dr, `${Pe.length}) ${e}`, { msg: t, get path() {
      return console.info(t, a), a;
    } }));
  }
  function i(...a) {
  }
  return i;
}, Ir = /* @__PURE__ */ new WeakMap(), Q = (e, t) => !!e && (typeof t == "string" || typeof t == "symbol"), B = (e) => !!e && typeof e == "object" && "kind" in e, zi = (e) => ({
  kind: "class",
  name: e,
  addInitializer: () => {
  },
  metadata: {}
}), pe = (e, t, r) => {
  if (Q(e, t)) {
    r.defineLegacy(e, t);
    return;
  }
  if (B(t))
    return r.defineStage3(t), t.kind === "field" ? r.initializer : t;
}, ge = (e, t) => {
  if (!e)
    return;
  let r = Ir.get(e);
  r || (r = /* @__PURE__ */ new Map(), Ir.set(e, r));
  let i = r.get(t.metadataKey);
  i || (i = /* @__PURE__ */ new Set(), r.set(t.metadataKey, i));
  const a = String(t.name);
  if (i.has(a))
    return;
  const n = H(t.metadataKey, e, new Array());
  n.some((s) => String(s.name) === a) || z(t.metadataKey, [...n, t], e), i.add(a);
}, J = /* @__PURE__ */ Symbol("service-key"), ur = new Proxy({}, Reflect);
function Vi(e) {
  const t = (i, a) => {
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        if (Object.prototype.hasOwnProperty.call(this, a))
          return Reflect.get(this, a);
        const n = Z(e, "instance");
        if (n)
          return Object.defineProperty(this, a, { value: n, writable: !0, configurable: !0, enumerable: !0 }), n;
      },
      set(n) {
        const s = Z(e, "instance");
        Object.defineProperty(this, a, { value: s ?? n, writable: !0, configurable: !0, enumerable: !0 });
      }
    });
  };
  function r(i, a) {
    if (Q(i, a)) {
      t(i, a);
      return;
    }
    return a.addInitializer(function() {
      return he(this, void 0, void 0, function* () {
        const n = Z(e, "instance");
        n && Object.hasOwn(this, a.name) && Reflect.set(this, a.name, n);
      });
    }), (n) => n;
  }
  return r;
}
function Z(e, t) {
  var r;
  const i = H(J, ur);
  if (typeof e != "string") {
    const a = H(J, e);
    if (a)
      return t && t in a ? a[t] : a;
    for (const n in i) {
      const s = i[n];
      if (s.target === e) {
        e = s.context.name;
        break;
      }
    }
  }
  if (typeof e == "string")
    return t ? (r = i[e]) === null || r === void 0 ? void 0 : r[t] : i[e];
}
function vi(e, t) {
  const r = (a, n) => {
    const s = String(typeof e == "string" && e || typeof e == "object" && e?.id || n?.name || a?.name), o = H(J, ur), u = new Proxy({
      target: a,
      instance: typeof e == "object" && Reflect.get(e, "transient") || typeof e == "object" && Reflect.get(e, "lazy") ? a : new a(),
      context: n,
      options: e
    }, {
      get(l, d, h) {
        var b, _;
        if (d === "instance" && (!((b = l?.options) === null || b === void 0) && b.transient))
          return new a();
        if (d === "instance" && (!((_ = l?.options) === null || _ === void 0) && _.lazy) && l.instance === a) {
          const T = new a();
          return Reflect.set(l, d, T, h), T;
        }
        return Reflect.get(l, d, h);
      },
      set(l, d, h, b) {
        return Reflect.set(l, d, h, b);
      }
    });
    o[s] = u, z(J, o, ur), z(J, o[s], a);
  };
  function i(a, n) {
    var s, o;
    const u = a.__legacy_source__, l = B(n) ? n : zi((o = (s = u?.name) !== null && s !== void 0 ? s : a?.name) !== null && o !== void 0 ? o : "");
    r(a, l), u && u !== a && z(J, H(J, a), u);
  }
  return Ki(e) ? i(e, t) : e ? (a, n) => i(a, n) : i;
}
const Cs = (e, t) => {
  const { kind: r = "class", name: i = "", addInitializer: a = () => {
  }, metadata: n } = t?.ctx || {};
  return vi(t)(e, {
    kind: r,
    name: i,
    addInitializer: a,
    metadata: n
  }), Z(e).instance;
};
function Ie(e) {
  var t, r, i;
  const a = Object.assign({ enumerable: !1, writable: !0 }, e), n = Object.assign({ configurable: !0, enumerable: !1, writable: !0 }, e), s = {
    configurable: (t = n.configurable) !== null && t !== void 0 ? t : !0,
    enumerable: (r = n.enumerable) !== null && r !== void 0 ? r : !1,
    writable: (i = n.writable) !== null && i !== void 0 ? i : !0,
    value: void 0
  };
  return function(o, u) {
    if (Q(o, u)) {
      Object.defineProperty(o, u, {
        configurable: !0,
        enumerable: a.enumerable,
        get() {
        },
        set(l) {
          s.value = l, Object.defineProperty(this, u, s), s.value = void 0;
        }
      });
      return;
    }
    if (B(u)) {
      const l = u;
      return l.kind === "field" ? function(d) {
        return s.value = d, Object.defineProperty(this, l.name, s), s.value = void 0, d;
      } : (l.addInitializer(function() {
        const d = Object.getOwnPropertyDescriptor(this, l.name);
        d && Object.defineProperty(this, l.name, Object.assign(Object.assign({}, d), { enumerable: a.enumerable }));
      }), o);
    }
  };
}
function Rs(e, t) {
  return Q(e, t) || B(t) ? Ie()(e, t) : Ie(e);
}
function js(e, t) {
  const r = (n) => class extends n {
    constructor(...s) {
      super(...s), cr(this);
    }
  }, i = (n, s) => {
    if (typeof Reflect?.getOwnMetadataKeys == "function")
      for (const o of Reflect.getOwnMetadataKeys(n)) {
        const u = Reflect.getOwnMetadata(o, n);
        Reflect.defineMetadata(o, u, s);
      }
  };
  function a(n, s) {
    if (!B(s)) {
      const o = n, u = r(o);
      return Object.defineProperty(u, "__legacy_source__", { value: o, configurable: !0 }), i(o, u), u;
    }
    s.addInitializer(function() {
      cr(this);
    });
  }
  return e && !B(t) || e ? a(e, t) : a;
}
const $ = /* @__PURE__ */ Symbol("field-key"), re = /* @__PURE__ */ Symbol("validation-key"), ae = /* @__PURE__ */ Symbol("submit-key"), ie = /* @__PURE__ */ Symbol("exclude-key"), Hi = /* @__PURE__ */ Symbol("prop-from-view-key"), kr = (e, t) => !!e && Object.prototype.hasOwnProperty.call(e, t), x = (e, t) => e[t], V = (e, t, r) => {
  e[t] = r;
};
class te {
  isPrototypeObject(t) {
    const r = t?.constructor;
    return !!(r && r.prototype === t);
  }
  /**
   * Получить объект, по которому кешируются метаданные.
   * Для инстанса — это его prototype, для prototype — он сам.
   */
  getCacheTarget(t) {
    return !t || typeof t != "object" ? null : this.isPrototypeObject(t) ? t : Object.getPrototypeOf(t);
  }
  computeFromPrototype(t) {
    const r = [], i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    let n = t;
    for (; n; ) {
      const o = Reflect.getOwnMetadata(this.metadataKey, n);
      if (Array.isArray(o))
        for (const u of o) {
          const l = u?.name, d = String(l);
          a.has(d) || (a.add(d), r.push(u), i.set(d, u));
        }
      n = Object.getPrototypeOf(n);
    }
    return { ownRef: Reflect.getOwnMetadata(this.metadataKey, t), list: r, map: i };
  }
  /**
   * Создать базовые метаданные.
   */
  constructor(t = {}) {
    this.metadataKey = null, this.isInit = !1, this.cache = /* @__PURE__ */ new WeakMap(), this.name = t?.name, this.callback = t?.callback;
  }
  /**
   * Проверить, что данные соответствуют экземпляру метаданных.
   */
  isInstance(t = {}) {
    return t instanceof te || Object.getOwnPropertyNames(this).some((r) => Object.keys(t).includes(r));
  }
  /**
   * Получить метаданные конкретного поля модели.
   */
  fieldInstance(t, r) {
    const i = r && typeof r == "object" ? Reflect.getOwnMetadata(this.metadataKey, r) : void 0;
    if (Array.isArray(i))
      return i.find((o) => o.name === t);
    const a = this.getCacheTarget(r);
    if (!a)
      return;
    const n = Reflect.getOwnMetadata(this.metadataKey, a), s = this.cache.get(a);
    if (!s || s.ownRef !== n) {
      const o = this.computeFromPrototype(a);
      return this.cache.set(a, o), o.map.get(String(t));
    }
    return s.map.get(String(t));
  }
  /**
   * Получить массив метаданных полей модели.
   */
  fields(t) {
    const r = t && typeof t == "object" ? Reflect.getOwnMetadata(this.metadataKey, t) : void 0;
    if (Array.isArray(r)) {
      const o = [], u = /* @__PURE__ */ new Set();
      let l = t;
      for (; l; ) {
        const d = Reflect.getOwnMetadata(this.metadataKey, l);
        if (Array.isArray(d))
          for (const h of d) {
            const b = h?.name, _ = String(b);
            u.has(_) || (u.add(_), o.push(h));
          }
        l = Object.getPrototypeOf(l);
      }
      return o;
    }
    const i = this.getCacheTarget(t);
    if (!i)
      return [];
    const a = Reflect.getOwnMetadata(this.metadataKey, i), n = this.cache.get(i);
    if (n && n.ownRef === a)
      return n.list;
    const s = this.computeFromPrototype(i);
    return this.cache.set(i, s), s.list;
  }
}
class lr extends te {
  constructor() {
    super(...arguments), this.metadataKey = re;
  }
}
class fr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ae;
  }
}
class dr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ie;
  }
}
class hr extends te {
  /**
   * Создать метаданные поля модели.
   */
  constructor(t = {}) {
    super(t), this.factory = null, this.mapping = null, this.noObserve = null, this.collectChanges = !1, this.name = null, this.ctx = null, this.metadataKey = $, this.isInit = !1, this.factory = t.factory, this.mapping = t.mapping, this.noObserve = t.noObserve, this.name = t.name, this.ctx = t.ctx, this.collectChanges = !!t.collectChanges;
  }
}
class vr extends te {
  /**
   * Создать метаданные для PropFromView.
   */
  constructor(t = {}) {
    super(t), this.metadataKey = Hi;
    for (const r in this)
      t && r in t && V(this, r, x(t, r));
  }
}
function Ts(e) {
  const t = (a, n) => {
    const s = new vr({ name: e, originName: String(n) });
    s.name = e, s.originName = String(n);
    const o = H(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const n = new vr(), s = n.fields(this);
      for (const o in this)
        s instanceof Array && a.name === o && (n.name = e, n.originName = o, n.value = this[o], s.push(n));
      z(n.metadataKey, s, this);
    });
  };
  function i(a, n) {
    if (Q(a, n)) {
      t(a, n);
      return;
    }
    if (B(n))
      return r(n), n.kind === "field" ? (s) => s : n;
  }
  return e ? ((a, n) => i(a, n)) : ((a) => a);
}
function Ms(e) {
  const t = (a, n) => {
    const s = new dr({ callback: e, name: String(n) }), o = H(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const n = new dr({ callback: e, name: String(a.name) });
      ge(Object.getPrototypeOf(this), n);
    });
  };
  function i(a, n) {
    return pe(a, n, {
      defineLegacy: t,
      defineStage3: r
    });
  }
  if (e)
    return ((a, n) => i(a, n));
}
var ke, Fr;
function _i() {
  if (Fr) return ke;
  Fr = 1;
  var e = Object.prototype;
  function t(r) {
    var i = r && r.constructor, a = typeof i == "function" && i.prototype || e;
    return r === a;
  }
  return ke = t, ke;
}
var Fe, xr;
function Bi() {
  if (xr) return Fe;
  xr = 1;
  function e(t, r) {
    return function(i) {
      return t(r(i));
    };
  }
  return Fe = e, Fe;
}
var xe, Lr;
function Ni() {
  if (Lr) return xe;
  Lr = 1;
  var e = Bi(), t = e(Object.keys, Object);
  return xe = t, xe;
}
var Le, Kr;
function pi() {
  if (Kr) return Le;
  Kr = 1;
  var e = _i(), t = Ni(), r = Object.prototype, i = r.hasOwnProperty;
  function a(n) {
    if (!e(n))
      return t(n);
    var s = [];
    for (var o in Object(n))
      i.call(n, o) && o != "constructor" && s.push(o);
    return s;
  }
  return Le = a, Le;
}
var Ke, Gr;
function Ui() {
  if (Gr) return Ke;
  Gr = 1;
  var e = N(), t = e["__core-js_shared__"];
  return Ke = t, Ke;
}
var Ge, zr;
function Wi() {
  if (zr) return Ge;
  zr = 1;
  var e = Ui(), t = (function() {
    var i = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  })();
  function r(i) {
    return !!t && t in i;
  }
  return Ge = r, Ge;
}
var ze, Vr;
function gi() {
  if (Vr) return ze;
  Vr = 1;
  var e = Function.prototype, t = e.toString;
  function r(i) {
    if (i != null) {
      try {
        return t.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  return ze = r, ze;
}
var Ve, Hr;
function Yi() {
  if (Hr) return Ve;
  Hr = 1;
  var e = mr(), t = Wi(), r = hi(), i = gi(), a = /[\\^$.*+?()[\]{}|]/g, n = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, d = RegExp(
    "^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(b) {
    if (!r(b) || t(b))
      return !1;
    var _ = e(b) ? d : n;
    return _.test(i(b));
  }
  return Ve = h, Ve;
}
var He, Br;
function Qi() {
  if (Br) return He;
  Br = 1;
  function e(t, r) {
    return t?.[r];
  }
  return He = e, He;
}
var Be, Nr;
function ne() {
  if (Nr) return Be;
  Nr = 1;
  var e = Yi(), t = Qi();
  function r(i, a) {
    var n = t(i, a);
    return e(n) ? n : void 0;
  }
  return Be = r, Be;
}
var Ne, Ur;
function $i() {
  if (Ur) return Ne;
  Ur = 1;
  var e = ne(), t = N(), r = e(t, "DataView");
  return Ne = r, Ne;
}
var Ue, Wr;
function br() {
  if (Wr) return Ue;
  Wr = 1;
  var e = ne(), t = N(), r = e(t, "Map");
  return Ue = r, Ue;
}
var We, Yr;
function Ji() {
  if (Yr) return We;
  Yr = 1;
  var e = ne(), t = N(), r = e(t, "Promise");
  return We = r, We;
}
var Ye, Qr;
function Xi() {
  if (Qr) return Ye;
  Qr = 1;
  var e = ne(), t = N(), r = e(t, "Set");
  return Ye = r, Ye;
}
var Qe, $r;
function Zi() {
  if ($r) return Qe;
  $r = 1;
  var e = ne(), t = N(), r = e(t, "WeakMap");
  return Qe = r, Qe;
}
var $e, Jr;
function yi() {
  if (Jr) return $e;
  Jr = 1;
  var e = $i(), t = br(), r = Ji(), i = Xi(), a = Zi(), n = _e(), s = gi(), o = "[object Map]", u = "[object Object]", l = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", b = "[object DataView]", _ = s(e), T = s(t), S = s(r), C = s(i), A = s(a), y = n;
  return (e && y(new e(new ArrayBuffer(1))) != b || t && y(new t()) != o || r && y(r.resolve()) != l || i && y(new i()) != d || a && y(new a()) != h) && (y = function(M) {
    var g = n(M), f = g == u ? M.constructor : void 0, q = f ? s(f) : "";
    if (q)
      switch (q) {
        case _:
          return b;
        case T:
          return o;
        case S:
          return l;
        case C:
          return d;
        case A:
          return h;
      }
    return g;
  }), $e = y, $e;
}
var Je, Xr;
function ye() {
  if (Xr) return Je;
  Xr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Je = e, Je;
}
var Xe, Zr;
function en() {
  if (Zr) return Xe;
  Zr = 1;
  var e = _e(), t = ye(), r = "[object Arguments]";
  function i(a) {
    return t(a) && e(a) == r;
  }
  return Xe = i, Xe;
}
var Ze, ea;
function mi() {
  if (ea) return Ze;
  ea = 1;
  var e = en(), t = ye(), r = Object.prototype, i = r.hasOwnProperty, a = r.propertyIsEnumerable, n = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && i.call(s, "callee") && !a.call(s, "callee");
  };
  return Ze = n, Ze;
}
var et, ta;
function me() {
  if (ta) return et;
  ta = 1;
  var e = Array.isArray;
  return et = e, et;
}
var tt, ra;
function bi() {
  if (ra) return tt;
  ra = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return tt = t, tt;
}
var rt, aa;
function wi() {
  if (aa) return rt;
  aa = 1;
  var e = mr(), t = bi();
  function r(i) {
    return i != null && t(i.length) && !e(i);
  }
  return rt = r, rt;
}
var se = { exports: {} }, at, ia;
function tn() {
  if (ia) return at;
  ia = 1;
  function e() {
    return !1;
  }
  return at = e, at;
}
se.exports;
var na;
function wr() {
  return na || (na = 1, (function(e, t) {
    var r = N(), i = tn(), a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, l = u || i;
    e.exports = l;
  })(se, se.exports)), se.exports;
}
var it, sa;
function rn() {
  if (sa) return it;
  sa = 1;
  var e = _e(), t = bi(), r = ye(), i = "[object Arguments]", a = "[object Array]", n = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", l = "[object Map]", d = "[object Number]", h = "[object Object]", b = "[object RegExp]", _ = "[object Set]", T = "[object String]", S = "[object WeakMap]", C = "[object ArrayBuffer]", A = "[object DataView]", y = "[object Float32Array]", M = "[object Float64Array]", g = "[object Int8Array]", f = "[object Int16Array]", q = "[object Int32Array]", O = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", F = "[object Uint32Array]", m = {};
  m[y] = m[M] = m[g] = m[f] = m[q] = m[O] = m[P] = m[k] = m[F] = !0, m[i] = m[a] = m[C] = m[n] = m[A] = m[s] = m[o] = m[u] = m[l] = m[d] = m[h] = m[b] = m[_] = m[T] = m[S] = !1;
  function c(v) {
    return r(v) && t(v.length) && !!m[e(v)];
  }
  return it = c, it;
}
var nt, oa;
function an() {
  if (oa) return nt;
  oa = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return nt = e, nt;
}
var oe = { exports: {} };
oe.exports;
var ca;
function nn() {
  return ca || (ca = 1, (function(e, t) {
    var r = di(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, n = a && a.exports === i, s = n && r.process, o = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(oe, oe.exports)), oe.exports;
}
var st, ua;
function Sr() {
  if (ua) return st;
  ua = 1;
  var e = rn(), t = an(), r = nn(), i = r && r.isTypedArray, a = i ? t(i) : e;
  return st = a, st;
}
var ot, la;
function sn() {
  if (la) return ot;
  la = 1;
  var e = pi(), t = yi(), r = mi(), i = me(), a = wi(), n = wr(), s = _i(), o = Sr(), u = "[object Map]", l = "[object Set]", d = Object.prototype, h = d.hasOwnProperty;
  function b(_) {
    if (_ == null)
      return !0;
    if (a(_) && (i(_) || typeof _ == "string" || typeof _.splice == "function" || n(_) || o(_) || r(_)))
      return !_.length;
    var T = t(_);
    if (T == u || T == l)
      return !_.size;
    if (s(_))
      return !e(_).length;
    for (var S in _)
      if (h.call(_, S))
        return !1;
    return !0;
  }
  return ot = b, ot;
}
var on = sn();
const cn = /* @__PURE__ */ gr(on);
var ct, fa;
function un() {
  if (fa) return ct;
  fa = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ct = e, ct;
}
var ut, da;
function Si() {
  if (da) return ut;
  da = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ut = e, ut;
}
var lt, ha;
function be() {
  if (ha) return lt;
  ha = 1;
  var e = Si();
  function t(r, i) {
    for (var a = r.length; a--; )
      if (e(r[a][0], i))
        return a;
    return -1;
  }
  return lt = t, lt;
}
var ft, va;
function ln() {
  if (va) return ft;
  va = 1;
  var e = be(), t = Array.prototype, r = t.splice;
  function i(a) {
    var n = this.__data__, s = e(n, a);
    if (s < 0)
      return !1;
    var o = n.length - 1;
    return s == o ? n.pop() : r.call(n, s, 1), --this.size, !0;
  }
  return ft = i, ft;
}
var dt, _a;
function fn() {
  if (_a) return dt;
  _a = 1;
  var e = be();
  function t(r) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? void 0 : i[a][1];
  }
  return dt = t, dt;
}
var ht, pa;
function dn() {
  if (pa) return ht;
  pa = 1;
  var e = be();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return ht = t, ht;
}
var vt, ga;
function hn() {
  if (ga) return vt;
  ga = 1;
  var e = be();
  function t(r, i) {
    var a = this.__data__, n = e(a, r);
    return n < 0 ? (++this.size, a.push([r, i])) : a[n][1] = i, this;
  }
  return vt = t, vt;
}
var _t, ya;
function we() {
  if (ya) return _t;
  ya = 1;
  var e = un(), t = ln(), r = fn(), i = dn(), a = hn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, _t = n, _t;
}
var pt, ma;
function vn() {
  if (ma) return pt;
  ma = 1;
  var e = we();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return pt = t, pt;
}
var gt, ba;
function _n() {
  if (ba) return gt;
  ba = 1;
  function e(t) {
    var r = this.__data__, i = r.delete(t);
    return this.size = r.size, i;
  }
  return gt = e, gt;
}
var yt, wa;
function pn() {
  if (wa) return yt;
  wa = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return yt = e, yt;
}
var mt, Sa;
function gn() {
  if (Sa) return mt;
  Sa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return mt = e, mt;
}
var bt, qa;
function Se() {
  if (qa) return bt;
  qa = 1;
  var e = ne(), t = e(Object, "create");
  return bt = t, bt;
}
var wt, Oa;
function yn() {
  if (Oa) return wt;
  Oa = 1;
  var e = Se();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wt = t, wt;
}
var St, Aa;
function mn() {
  if (Aa) return St;
  Aa = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return St = e, St;
}
var qt, Ca;
function bn() {
  if (Ca) return qt;
  Ca = 1;
  var e = Se(), t = "__lodash_hash_undefined__", r = Object.prototype, i = r.hasOwnProperty;
  function a(n) {
    var s = this.__data__;
    if (e) {
      var o = s[n];
      return o === t ? void 0 : o;
    }
    return i.call(s, n) ? s[n] : void 0;
  }
  return qt = a, qt;
}
var Ot, Ra;
function wn() {
  if (Ra) return Ot;
  Ra = 1;
  var e = Se(), t = Object.prototype, r = t.hasOwnProperty;
  function i(a) {
    var n = this.__data__;
    return e ? n[a] !== void 0 : r.call(n, a);
  }
  return Ot = i, Ot;
}
var At, ja;
function Sn() {
  if (ja) return At;
  ja = 1;
  var e = Se(), t = "__lodash_hash_undefined__";
  function r(i, a) {
    var n = this.__data__;
    return this.size += this.has(i) ? 0 : 1, n[i] = e && a === void 0 ? t : a, this;
  }
  return At = r, At;
}
var Ct, Ta;
function qn() {
  if (Ta) return Ct;
  Ta = 1;
  var e = yn(), t = mn(), r = bn(), i = wn(), a = Sn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, Ct = n, Ct;
}
var Rt, Ma;
function On() {
  if (Ma) return Rt;
  Ma = 1;
  var e = qn(), t = we(), r = br();
  function i() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Rt = i, Rt;
}
var jt, Ea;
function An() {
  if (Ea) return jt;
  Ea = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return jt = e, jt;
}
var Tt, Da;
function qe() {
  if (Da) return Tt;
  Da = 1;
  var e = An();
  function t(r, i) {
    var a = r.__data__;
    return e(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
  }
  return Tt = t, Tt;
}
var Mt, Pa;
function Cn() {
  if (Pa) return Mt;
  Pa = 1;
  var e = qe();
  function t(r) {
    var i = e(this, r).delete(r);
    return this.size -= i ? 1 : 0, i;
  }
  return Mt = t, Mt;
}
var Et, Ia;
function Rn() {
  if (Ia) return Et;
  Ia = 1;
  var e = qe();
  function t(r) {
    return e(this, r).get(r);
  }
  return Et = t, Et;
}
var Dt, ka;
function jn() {
  if (ka) return Dt;
  ka = 1;
  var e = qe();
  function t(r) {
    return e(this, r).has(r);
  }
  return Dt = t, Dt;
}
var Pt, Fa;
function Tn() {
  if (Fa) return Pt;
  Fa = 1;
  var e = qe();
  function t(r, i) {
    var a = e(this, r), n = a.size;
    return a.set(r, i), this.size += a.size == n ? 0 : 1, this;
  }
  return Pt = t, Pt;
}
var It, xa;
function qi() {
  if (xa) return It;
  xa = 1;
  var e = On(), t = Cn(), r = Rn(), i = jn(), a = Tn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, It = n, It;
}
var kt, La;
function Mn() {
  if (La) return kt;
  La = 1;
  var e = we(), t = br(), r = qi(), i = 200;
  function a(n, s) {
    var o = this.__data__;
    if (o instanceof e) {
      var u = o.__data__;
      if (!t || u.length < i - 1)
        return u.push([n, s]), this.size = ++o.size, this;
      o = this.__data__ = new r(u);
    }
    return o.set(n, s), this.size = o.size, this;
  }
  return kt = a, kt;
}
var Ft, Ka;
function En() {
  if (Ka) return Ft;
  Ka = 1;
  var e = we(), t = vn(), r = _n(), i = pn(), a = gn(), n = Mn();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = n, Ft = s, Ft;
}
var xt, Ga;
function Dn() {
  if (Ga) return xt;
  Ga = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return xt = t, xt;
}
var Lt, za;
function Pn() {
  if (za) return Lt;
  za = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Lt = e, Lt;
}
var Kt, Va;
function In() {
  if (Va) return Kt;
  Va = 1;
  var e = qi(), t = Dn(), r = Pn();
  function i(a) {
    var n = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++n < s; )
      this.add(a[n]);
  }
  return i.prototype.add = i.prototype.push = t, i.prototype.has = r, Kt = i, Kt;
}
var Gt, Ha;
function kn() {
  if (Ha) return Gt;
  Ha = 1;
  function e(t, r) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (r(t[i], i, t))
        return !0;
    return !1;
  }
  return Gt = e, Gt;
}
var zt, Ba;
function Fn() {
  if (Ba) return zt;
  Ba = 1;
  function e(t, r) {
    return t.has(r);
  }
  return zt = e, zt;
}
var Vt, Na;
function Oi() {
  if (Na) return Vt;
  Na = 1;
  var e = In(), t = kn(), r = Fn(), i = 1, a = 2;
  function n(s, o, u, l, d, h) {
    var b = u & i, _ = s.length, T = o.length;
    if (_ != T && !(b && T > _))
      return !1;
    var S = h.get(s), C = h.get(o);
    if (S && C)
      return S == o && C == s;
    var A = -1, y = !0, M = u & a ? new e() : void 0;
    for (h.set(s, o), h.set(o, s); ++A < _; ) {
      var g = s[A], f = o[A];
      if (l)
        var q = b ? l(f, g, A, o, s, h) : l(g, f, A, s, o, h);
      if (q !== void 0) {
        if (q)
          continue;
        y = !1;
        break;
      }
      if (M) {
        if (!t(o, function(O, P) {
          if (!r(M, P) && (g === O || d(g, O, u, l, h)))
            return M.push(P);
        })) {
          y = !1;
          break;
        }
      } else if (!(g === f || d(g, f, u, l, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(s), h.delete(o), y;
  }
  return Vt = n, Vt;
}
var Ht, Ua;
function xn() {
  if (Ua) return Ht;
  Ua = 1;
  var e = N(), t = e.Uint8Array;
  return Ht = t, Ht;
}
var Bt, Wa;
function Ln() {
  if (Wa) return Bt;
  Wa = 1;
  function e(t) {
    var r = -1, i = Array(t.size);
    return t.forEach(function(a, n) {
      i[++r] = [n, a];
    }), i;
  }
  return Bt = e, Bt;
}
var Nt, Ya;
function Kn() {
  if (Ya) return Nt;
  Ya = 1;
  function e(t) {
    var r = -1, i = Array(t.size);
    return t.forEach(function(a) {
      i[++r] = a;
    }), i;
  }
  return Nt = e, Nt;
}
var Ut, Qa;
function Gn() {
  if (Qa) return Ut;
  Qa = 1;
  var e = yr(), t = xn(), r = Si(), i = Oi(), a = Ln(), n = Kn(), s = 1, o = 2, u = "[object Boolean]", l = "[object Date]", d = "[object Error]", h = "[object Map]", b = "[object Number]", _ = "[object RegExp]", T = "[object Set]", S = "[object String]", C = "[object Symbol]", A = "[object ArrayBuffer]", y = "[object DataView]", M = e ? e.prototype : void 0, g = M ? M.valueOf : void 0;
  function f(q, O, P, k, F, m, c) {
    switch (P) {
      case y:
        if (q.byteLength != O.byteLength || q.byteOffset != O.byteOffset)
          return !1;
        q = q.buffer, O = O.buffer;
      case A:
        return !(q.byteLength != O.byteLength || !m(new t(q), new t(O)));
      case u:
      case l:
      case b:
        return r(+q, +O);
      case d:
        return q.name == O.name && q.message == O.message;
      case _:
      case S:
        return q == O + "";
      case h:
        var v = a;
      case T:
        var p = k & s;
        if (v || (v = n), q.size != O.size && !p)
          return !1;
        var w = c.get(q);
        if (w)
          return w == O;
        k |= o, c.set(q, O);
        var E = i(v(q), v(O), k, F, m, c);
        return c.delete(q), E;
      case C:
        if (g)
          return g.call(q) == g.call(O);
    }
    return !1;
  }
  return Ut = f, Ut;
}
var Wt, $a;
function zn() {
  if ($a) return Wt;
  $a = 1;
  function e(t, r) {
    for (var i = -1, a = r.length, n = t.length; ++i < a; )
      t[n + i] = r[i];
    return t;
  }
  return Wt = e, Wt;
}
var Yt, Ja;
function Vn() {
  if (Ja) return Yt;
  Ja = 1;
  var e = zn(), t = me();
  function r(i, a, n) {
    var s = a(i);
    return t(i) ? s : e(s, n(i));
  }
  return Yt = r, Yt;
}
var Qt, Xa;
function Hn() {
  if (Xa) return Qt;
  Xa = 1;
  function e(t, r) {
    for (var i = -1, a = t == null ? 0 : t.length, n = 0, s = []; ++i < a; ) {
      var o = t[i];
      r(o, i, t) && (s[n++] = o);
    }
    return s;
  }
  return Qt = e, Qt;
}
var $t, Za;
function Bn() {
  if (Za) return $t;
  Za = 1;
  function e() {
    return [];
  }
  return $t = e, $t;
}
var Jt, ei;
function Nn() {
  if (ei) return Jt;
  ei = 1;
  var e = Hn(), t = Bn(), r = Object.prototype, i = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, n = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return i.call(s, o);
    }));
  } : t;
  return Jt = n, Jt;
}
var Xt, ti;
function Un() {
  if (ti) return Xt;
  ti = 1;
  function e(t, r) {
    for (var i = -1, a = Array(t); ++i < t; )
      a[i] = r(i);
    return a;
  }
  return Xt = e, Xt;
}
var Zt, ri;
function Wn() {
  if (ri) return Zt;
  ri = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(i, a) {
    var n = typeof i;
    return a = a ?? e, !!a && (n == "number" || n != "symbol" && t.test(i)) && i > -1 && i % 1 == 0 && i < a;
  }
  return Zt = r, Zt;
}
var er, ai;
function Yn() {
  if (ai) return er;
  ai = 1;
  var e = Un(), t = mi(), r = me(), i = wr(), a = Wn(), n = Sr(), s = Object.prototype, o = s.hasOwnProperty;
  function u(l, d) {
    var h = r(l), b = !h && t(l), _ = !h && !b && i(l), T = !h && !b && !_ && n(l), S = h || b || _ || T, C = S ? e(l.length, String) : [], A = C.length;
    for (var y in l)
      (d || o.call(l, y)) && !(S && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, A))) && C.push(y);
    return C;
  }
  return er = u, er;
}
var tr, ii;
function Qn() {
  if (ii) return tr;
  ii = 1;
  var e = Yn(), t = pi(), r = wi();
  function i(a) {
    return r(a) ? e(a) : t(a);
  }
  return tr = i, tr;
}
var rr, ni;
function $n() {
  if (ni) return rr;
  ni = 1;
  var e = Vn(), t = Nn(), r = Qn();
  function i(a) {
    return e(a, r, t);
  }
  return rr = i, rr;
}
var ar, si;
function Jn() {
  if (si) return ar;
  si = 1;
  var e = $n(), t = 1, r = Object.prototype, i = r.hasOwnProperty;
  function a(n, s, o, u, l, d) {
    var h = o & t, b = e(n), _ = b.length, T = e(s), S = T.length;
    if (_ != S && !h)
      return !1;
    for (var C = _; C--; ) {
      var A = b[C];
      if (!(h ? A in s : i.call(s, A)))
        return !1;
    }
    var y = d.get(n), M = d.get(s);
    if (y && M)
      return y == s && M == n;
    var g = !0;
    d.set(n, s), d.set(s, n);
    for (var f = h; ++C < _; ) {
      A = b[C];
      var q = n[A], O = s[A];
      if (u)
        var P = h ? u(O, q, A, s, n, d) : u(q, O, A, n, s, d);
      if (!(P === void 0 ? q === O || l(q, O, o, u, d) : P)) {
        g = !1;
        break;
      }
      f || (f = A == "constructor");
    }
    if (g && !f) {
      var k = n.constructor, F = s.constructor;
      k != F && "constructor" in n && "constructor" in s && !(typeof k == "function" && k instanceof k && typeof F == "function" && F instanceof F) && (g = !1);
    }
    return d.delete(n), d.delete(s), g;
  }
  return ar = a, ar;
}
var ir, oi;
function Xn() {
  if (oi) return ir;
  oi = 1;
  var e = En(), t = Oi(), r = Gn(), i = Jn(), a = yi(), n = me(), s = wr(), o = Sr(), u = 1, l = "[object Arguments]", d = "[object Array]", h = "[object Object]", b = Object.prototype, _ = b.hasOwnProperty;
  function T(S, C, A, y, M, g) {
    var f = n(S), q = n(C), O = f ? d : a(S), P = q ? d : a(C);
    O = O == l ? h : O, P = P == l ? h : P;
    var k = O == h, F = P == h, m = O == P;
    if (m && s(S)) {
      if (!s(C))
        return !1;
      f = !0, k = !1;
    }
    if (m && !k)
      return g || (g = new e()), f || o(S) ? t(S, C, A, y, M, g) : r(S, C, O, A, y, M, g);
    if (!(A & u)) {
      var c = k && _.call(S, "__wrapped__"), v = F && _.call(C, "__wrapped__");
      if (c || v) {
        var p = c ? S.value() : S, w = v ? C.value() : C;
        return g || (g = new e()), M(p, w, A, y, g);
      }
    }
    return m ? (g || (g = new e()), i(S, C, A, y, M, g)) : !1;
  }
  return ir = T, ir;
}
var nr, ci;
function Zn() {
  if (ci) return nr;
  ci = 1;
  var e = Xn(), t = ye();
  function r(i, a, n, s, o) {
    return i === a ? !0 : i == null || a == null || !t(i) && !t(a) ? i !== i && a !== a : e(i, a, n, s, r, o);
  }
  return nr = r, nr;
}
var sr, ui;
function es() {
  if (ui) return sr;
  ui = 1;
  var e = Zn();
  function t(r, i) {
    return e(r, i);
  }
  return sr = t, sr;
}
var ts = es();
const li = /* @__PURE__ */ gr(ts), rs = new fr(), as = new hr(), is = new lr(), ns = new dr();
let ss = (() => {
  var e, t, r, i, a, n, s, o, u, l, d, h, b, _, T;
  let S = [], C, A = [], y = [], M, g, f, q, O, P, k, F;
  return e = class {
    get initData() {
      return L(this, t, "f");
    }
    set initData(c) {
      K(this, t, c, "f");
    }
    // @define_prop
    get committedData() {
      return L(this, r, "f");
    }
    set committedData(c) {
      K(this, r, c, "f");
    }
    // @define_prop
    get modified_() {
      return L(this, i, "f");
    }
    set modified_(c) {
      K(this, i, c, "f");
    }
    // @define_prop
    get legacyInitDone() {
      return L(this, a, "f");
    }
    set legacyInitDone(c) {
      K(this, a, c, "f");
    }
    // @define_prop
    get options() {
      return L(this, n, "f");
    }
    set options(c) {
      K(this, n, c, "f");
    }
    get [(t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = (C = [ue], $))]() {
      return L(this, s, "f");
    }
    set [d](c) {
      K(this, s, c, "f");
    }
    get [h = ae]() {
      return L(this, o, "f");
    }
    set [h](c) {
      K(this, o, c, "f");
    }
    get [b = ie]() {
      return L(this, u, "f");
    }
    set [b](c) {
      K(this, u, c, "f");
    }
    get [_ = re]() {
      return L(this, l, "f");
    }
    set [_](c) {
      K(this, l, c, "f");
    }
    /**
     * Создает модель и инициализирует данные.
     */
    constructor(c = {}, v) {
      t.set(this, (U(this, S), U(this, A, null))), r.set(this, (U(this, y), {})), i.set(this, {}), a.set(this, !1), n.set(this, {}), s.set(this, void 0), o.set(this, void 0), u.set(this, void 0), l.set(this, void 0), this.options = v, this.init(c), this.initLegacyFields();
    }
    getFieldMetaCache() {
      const c = Reflect.getOwnMetadata($, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata($, v) : null, w = this[$];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const E = as.fields(this), R = /* @__PURE__ */ new Map();
      for (const j of E)
        R.set(String(j.name), j);
      return this[$] = { ownRef: c, protoRef: p, list: E, map: R }, this[$];
    }
    getFieldMeta(c) {
      return this.getFieldMetaCache().map.get(String(c));
    }
    getSubmitMetaCache() {
      const c = Reflect.getOwnMetadata(ae, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(ae, v) : null, w = this[ae];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const E = rs.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of E)
        R.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: E, map: R };
      return this[ae] = j, j;
    }
    getExcludeMetaCache() {
      const c = Reflect.getOwnMetadata(ie, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(ie, v) : null, w = this[ie];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const E = ns.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of E)
        R.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: E, map: R };
      return this[ie] = j, j;
    }
    getValidationMetaCache() {
      const c = Reflect.getOwnMetadata(re, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(re, v) : null, w = this[re];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const E = is.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of E)
        R.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: E, map: R };
      return this[re] = j, j;
    }
    /**
     * Инициализировать валидацию для поля или всех полей.
     */
    initValidation(c) {
      const v = this.validation;
      if (c)
        x(v, c);
      else
        for (let p in v)
          v[p];
    }
    /**
     * Полная инициализация модели и полей.
     */
    init(c = {}) {
      this.cloneForInit(c), this.defineData(this.initData);
    }
    /**
     * Инициализировать отдельное поле модели.
     */
    initField(c, v) {
      const p = this.getFieldMeta(c);
      if (p) {
        const w = String(p.name);
        kr(this.initData, w) || V(this.initData, w, x(this, w));
        let R = p?.factory ? p.factory(this.initData, this) : x(this.initData, w);
        if (R === void 0 && !p?.factory) {
          const j = x(this, w);
          j !== void 0 && (R = j, V(this.initData, w, j));
        }
        this.defineFieldValue(c, R, p), v?.skipValidation || this.initValidation(c);
      }
    }
    initLegacyFields() {
      if (this.legacyInitDone)
        return;
      const c = this.getFieldMetaCache().list;
      if (c.some((v) => Object.prototype.hasOwnProperty.call(this, v.name))) {
        this.legacyInitDone = !0;
        for (let v of c) {
          const p = String(v.name);
          this.initData && p in this.initData || this.initField(p, { skipValidation: !0 });
        }
      }
    }
    // @define_prop
    // private readonly serviceToJSON = () => this.dumpData;
    /**
     * сделать значение наблюдаемым, повесить observable в глубину
     * @param value
     * @param field
     * @param originField
     * @param changePath
     * @returns
     */
    /**
     * Сделать значение наблюдаемым с отслеживанием вложенных изменений.
     */
    createObservable(c, v, p, w = p) {
      return c = qr(c) ? c : ue.box(c), new Proxy(c, {
        get: (E, R, j) => {
          const I = Reflect.get(E, R, j);
          return I && typeof I == "object" && !(I instanceof e) && !qr(c) ? this.createObservable(I, String(R), v, `${w}.${String(R)}`) : I;
        },
        set: (E, R, j, I) => (c = j, this.checkChange(p, Reflect.get(this, p)), Reflect.set(E, R, j, I))
      });
    }
    /**
     * Определить getter/setter для поля модели.
     */
    defineFieldValue(c, v, p) {
      const w = p ?? this.getFieldMeta(c);
      return w.noObserve ? Reflect.defineProperty(this, w.name, { value: v }) : (v = ue.box(v), Reflect.defineProperty(this, w.name, {
        get: () => v.get(),
        set: (E) => {
          W(() => v.set(E)), this.checkChange(w.name, v.get());
        },
        enumerable: !0,
        configurable: !0
      })), v;
    }
    /**
     * Сохранить исходные данные с глубоким клонированием.
     */
    cloneForInit(c = {}) {
      this.initData = c;
    }
    /**
     * Проверить изменение поля и обновить modified_.
     */
    checkChange(c, v) {
      const p = kr(this.committedData, c) ? x(this.committedData, c) : x(this.initData, c), w = c && c in this.initData && !li(p, v);
      return W(() => {
        if (w) {
          V(this.modified_, c, p);
          return;
        }
        c in this.modified_ && li(p, v) && delete this.modified_[c];
      }), w;
    }
    /**
     * Применить данные к полям модели.
     */
    defineData(c) {
      const v = this.getFieldMetaCache().map;
      for (let p in this)
        Object.prototype.hasOwnProperty.call(this, p) && v.has(p) && (V(this, p, x(c, p)), this.initField(p));
    }
    /**
     * Признак наличия изменений.
     */
    get dirty() {
      return !cn(this.modified_);
    }
    /**
     * Зафиксировать все изменения.
     */
    commit() {
      for (let c of this.getFieldMetaCache().list)
        this.commitField(c.name);
      this.modified_ = {};
    }
    /**
     * Зафиксировать изменения конкретного поля.
     */
    commitField(c) {
      c in this.modified_ && V(this.committedData, c, x(this, c)), delete this.modified_[c], this.modified_ = Object.assign({}, this.modified_);
    }
    /**
     * Откатить изменения к последнему коммиту.
     */
    reject() {
      for (let c in this)
        c in this.modified_ && (V(this, c, x(this.modified_, c)), this.commitField(c), this.defineFieldValue(c, x(this, c)));
      this.commit();
    }
    /**
     * Вернуть модель к исходным данным.
     */
    toInit() {
      return this.init(this.initData), this;
    }
    /**
     * Перезагрузить данные модели.
     */
    loadData(c) {
      return this.init(c), this;
    }
    /**
     * Получить сериализованный дамп данных.
     */
    get dumpData() {
      this.initLegacyFields();
      const c = /* @__PURE__ */ Object.create({}), v = this.getSubmitMetaCache().map, p = this.getExcludeMetaCache().map, w = (R) => {
        const j = x(this, R), I = v.get(R), Oe = I?.callback;
        return typeof Oe == "function" ? Oe(j, this) : j;
      }, E = (R) => {
        const j = p.get(R);
        if (j)
          switch (typeof j.callback) {
            case "boolean":
              return !!j.callback;
            case "function":
              return j.callback(x(this, R), this);
          }
        return !1;
      };
      return this.getFieldMetaCache().list.forEach((R) => {
        var j;
        if (R.name in this) {
          if (!((j = this.options) === null || j === void 0) && j.byFields && !this.options.byFields.includes(R.name) || E(R.name))
            return;
          V(c, R.name, w(R.name));
        }
      }), c;
    }
    /**
     * Получить объект результатов валидации.
     */
    get validation() {
      this.initLegacyFields();
      const c = {};
      for (const v of this.getValidationMetaCache().list) {
        const p = String(v.name);
        V(c, p, v.callback(x(this, p), this) || "");
      }
      return c;
    }
    /**
     * Признак валидности и наличия изменений.
     */
    get validAndDirty() {
      return this.dirty && Object.values(this.validation).filter(Boolean).length === 0;
    }
    /**
     * Публичный API модели для вью.
     */
    get serviceApi() {
      return {
        loadData: (c) => this.loadData(c),
        reject: () => this.reject(),
        commit: () => this.commit(),
        commitField: (c) => this.commitField(c),
        toInit: () => this.toInit()
      };
    }
    get service() {
      return Object.assign({
        dirty: this.dirty,
        dumpData: this.dumpData,
        // toJSON        : this.serviceToJSON,
        validation: this.validation
      }, this.serviceApi);
    }
  }, (() => {
    const m = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    M = [X], g = [G], f = [G], q = [G], O = [G], P = [X], k = [X], F = [(T = X).struct.bind(T)], D(e, null, C, { kind: "accessor", name: "initData", static: !1, private: !1, access: { has: (c) => "initData" in c, get: (c) => c.initData, set: (c, v) => {
      c.initData = v;
    } }, metadata: m }, A, y), D(e, null, M, { kind: "getter", name: "dirty", static: !1, private: !1, access: { has: (c) => "dirty" in c, get: (c) => c.dirty }, metadata: m }, null, S), D(e, null, g, { kind: "method", name: "commit", static: !1, private: !1, access: { has: (c) => "commit" in c, get: (c) => c.commit }, metadata: m }, null, S), D(e, null, f, { kind: "method", name: "commitField", static: !1, private: !1, access: { has: (c) => "commitField" in c, get: (c) => c.commitField }, metadata: m }, null, S), D(e, null, q, { kind: "method", name: "reject", static: !1, private: !1, access: { has: (c) => "reject" in c, get: (c) => c.reject }, metadata: m }, null, S), D(e, null, O, { kind: "method", name: "toInit", static: !1, private: !1, access: { has: (c) => "toInit" in c, get: (c) => c.toInit }, metadata: m }, null, S), D(e, null, P, { kind: "getter", name: "validation", static: !1, private: !1, access: { has: (c) => "validation" in c, get: (c) => c.validation }, metadata: m }, null, S), D(e, null, k, { kind: "getter", name: "validAndDirty", static: !1, private: !1, access: { has: (c) => "validAndDirty" in c, get: (c) => c.validAndDirty }, metadata: m }, null, S), D(e, null, F, { kind: "getter", name: "service", static: !1, private: !1, access: { has: (c) => "service" in c, get: (c) => c.service }, metadata: m }, null, S), m && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), e;
})();
const _r = function(t, r) {
  const i = Q(t, r) ? void 0 : t, a = (o, u) => {
    const l = new hr(Object.assign(Object.assign({}, i), { name: String(u), ctx: null }));
    z(l.metadataKey, [...H(l.metadataKey, o, new Array()), l], o), Object.getOwnPropertyDescriptor(o, u) || Object.defineProperty(o, u, {
      configurable: !0,
      enumerable: !0,
      get() {
        if (Object.prototype.hasOwnProperty.call(this, u))
          return Reflect.get(this, u);
        if (this.initData && u in this.initData && typeof this.initField == "function")
          return this.initField.call(this, String(u), { skipValidation: !0 }), Reflect.get(this, u);
      },
      set(h) {
        if (this.initData && !(u in this.initData) && Reflect.set(this.initData, u, h), typeof this.initField == "function") {
          this.initField.call(this, String(u), { skipValidation: !0 });
          return;
        }
        Object.defineProperty(this, u, {
          value: h,
          writable: !0,
          configurable: !0,
          enumerable: !0
        });
      }
    });
  }, n = (o) => {
    o.addInitializer(function() {
      if (this instanceof ss && typeof this.initField == "function") {
        const u = new hr(Object.assign(Object.assign({}, i), { name: String(o.name), ctx: o }));
        ge(Object.getPrototypeOf(this), u), this.initField.call(this, String(o.name));
      }
    });
  };
  function s(o, u) {
    return pe(o, u, {
      defineLegacy: a,
      defineStage3: n,
      initializer: (l) => l
    });
  }
  return Q(t, r) ? s(t, r) : i && !B(r) ? (o, u) => s(o, u) : B(r) ? s(void 0, r) : (o, u) => s(o, u);
}, os = (e) => !e || typeof e != "object" ? { noObserve: !0 } : Object.assign(Object.assign({}, e), { noObserve: !0 }), cs = function(t, r) {
  return Q(t, r) || B(r) ? _r({ noObserve: !0 })(t, r) : _r(os(t));
};
_r.noObserve = cs;
function Ds(e) {
  const t = (a, n) => {
    const s = new fr({ callback: e, name: String(n) }), o = H(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const n = new fr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      ge(Object.getPrototypeOf(this), n);
    });
  };
  function i(a, n) {
    return pe(a, n, {
      defineLegacy: t,
      defineStage3: r,
      initializer: (s) => s
    });
  }
  return e ? ((a, n) => i(a, n)) : ((a) => a);
}
function Ps(e) {
  const t = (a, n) => {
    const s = new lr({ callback: e, name: String(n) }), o = H(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const n = new lr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      ge(Object.getPrototypeOf(this), n);
    });
  };
  function i(a, n) {
    return pe(a, n, {
      defineLegacy: t,
      defineStage3: r,
      initializer: (s) => s
    });
  }
  return e ? ((a, n) => i(a, n)) : ((a) => a);
}
const us = (e) => ({
  items: e.items.map((t) => {
    var r, i;
    return {
      name: (i = (r = t.constructor) === null || r === void 0 ? void 0 : r.name) !== null && i !== void 0 ? i : "Model",
      data: t.service.dumpData
    };
  })
});
let ve = (() => {
  var e, t, r;
  let i = [], a, n = [], s = [], o, u = [], l = [], d, h, b, _, T, S, C, A, y, M;
  return e = class {
    get items() {
      return L(this, t, "f");
    }
    set items(f) {
      K(this, t, f, "f");
    }
    get _cash() {
      return L(this, r, "f");
    }
    set _cash(f) {
      K(this, r, f, "f");
    }
    constructor() {
      t.set(this, (U(this, i), U(this, n, []))), r.set(this, (U(this, s), U(this, u, []))), this._model = U(this, l), cr(this);
    }
    add(f) {
      this.items.push(f);
    }
    addMany(f) {
      f?.length && (this.items = this.items.concat(f));
    }
    remove(f) {
      this.items = this.items.filter((q) => q !== f);
    }
    /**
     * Найти элемент по предикату.
     */
    find(f) {
      return this.items.find(f);
    }
    /**
     * Отфильтровать элементы по предикату.
     */
    filter(f) {
      return this.items.filter(f);
    }
    /**
     * Найти элемент по id (или любому полю-ключу).
     */
    findBy(f, q) {
      return this.items.find((O) => O?.[f] === q);
    }
    clear() {
      this.items = [];
    }
    get size() {
      return this.items.length;
    }
    get snapshot() {
      return us(this);
    }
    /**
     * Оригинальные данные (до маппинга в модели).
     */
    get cash() {
      return this._cash;
    }
    reset() {
      this.clear();
    }
    /**
     * Применить загруженные данные к items.
     */
    applyLoaded(f, q = {}) {
      const { model: O, mode: P = "replace", cash: k = !0 } = q, F = O === void 0 ? this._model : O;
      k && this.setCash(f);
      const m = F ? f.map((c) => new F(c)) : f;
      if (P === "append") {
        this.addMany(m);
        return;
      }
      this.items = m;
    }
    /**
     * Сохранить оригинальные данные стора.
     */
    setCash(f) {
      this._cash = f ?? [];
    }
  }, t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), (() => {
    const g = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    a = [ue], o = [ue], d = [G], h = [G], b = [G], _ = [G], T = [X], S = [X], C = [X], A = [G], y = [G], M = [G], D(e, null, a, { kind: "accessor", name: "items", static: !1, private: !1, access: { has: (f) => "items" in f, get: (f) => f.items, set: (f, q) => {
      f.items = q;
    } }, metadata: g }, n, s), D(e, null, o, { kind: "accessor", name: "_cash", static: !1, private: !1, access: { has: (f) => "_cash" in f, get: (f) => f._cash, set: (f, q) => {
      f._cash = q;
    } }, metadata: g }, u, l), D(e, null, d, { kind: "method", name: "add", static: !1, private: !1, access: { has: (f) => "add" in f, get: (f) => f.add }, metadata: g }, null, i), D(e, null, h, { kind: "method", name: "addMany", static: !1, private: !1, access: { has: (f) => "addMany" in f, get: (f) => f.addMany }, metadata: g }, null, i), D(e, null, b, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (f) => "remove" in f, get: (f) => f.remove }, metadata: g }, null, i), D(e, null, _, { kind: "method", name: "clear", static: !1, private: !1, access: { has: (f) => "clear" in f, get: (f) => f.clear }, metadata: g }, null, i), D(e, null, T, { kind: "getter", name: "size", static: !1, private: !1, access: { has: (f) => "size" in f, get: (f) => f.size }, metadata: g }, null, i), D(e, null, S, { kind: "getter", name: "snapshot", static: !1, private: !1, access: { has: (f) => "snapshot" in f, get: (f) => f.snapshot }, metadata: g }, null, i), D(e, null, C, { kind: "getter", name: "cash", static: !1, private: !1, access: { has: (f) => "cash" in f, get: (f) => f.cash }, metadata: g }, null, i), D(e, null, A, { kind: "method", name: "reset", static: !1, private: !1, access: { has: (f) => "reset" in f, get: (f) => f.reset }, metadata: g }, null, i), D(e, null, y, { kind: "method", name: "applyLoaded", static: !1, private: !1, access: { has: (f) => "applyLoaded" in f, get: (f) => f.applyLoaded }, metadata: g }, null, i), D(e, null, M, { kind: "method", name: "setCash", static: !1, private: !1, access: { has: (f) => "setCash" in f, get: (f) => f.setCash }, metadata: g }, null, i), g && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: g });
  })(), e;
})();
const Ai = function(t) {
  return new.target ? Reflect.construct(ve, [], new.target) : class extends ve {
    constructor() {
      super(), this._model = t;
    }
  };
};
Ai.prototype = ve.prototype;
Object.setPrototypeOf(Ai, ve);
function Fs(e) {
  return Z(e, "instance");
}
function xs(e) {
  return ((t, r) => Vi(e)(t, r));
}
function Ls(e, t) {
  const r = (i, a) => {
    var n;
    const s = typeof e == "string" ? { id: e } : typeof e == "object" ? e : { id: (n = a?.name) !== null && n !== void 0 ? n : i?.name };
    vi(s)(i, a);
  };
  return typeof e == "function" ? r(e, t) : (i, a) => r(i, a);
}
class Ks {
}
const or = new vr(), ls = (e) => typeof Node < "u" && e instanceof Node, fs = (e) => {
  if (e == null)
    return !0;
  const t = typeof e;
  return t === "function" ? !1 : t !== "object" ? !0 : ki(e) ? !1 : !ls(e);
}, ds = (e, t) => {
  if (!fs(t))
    throw new TypeError(`PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${e}".`);
};
function Gs(e, t) {
  return Di((r = {}) => {
    const { viewModel: i } = r, a = ji(r, ["viewModel"]), { instance: n } = Pi(() => {
      const u = Z(e) || (typeof e != "string" ? { instance: new e() } : void 0);
      return { instance: u?.instance };
    }, [e]), s = i ?? n;
    if (Ii(() => {
      if (s)
        return typeof s.onInit == "function" && s.onInit(), () => {
          typeof s.onDispose == "function" && s.onDispose();
        };
    }, [s]), s) {
      const o = or.fields(s), u = o.length > 0 ? o : or.fields(Object.getPrototypeOf(s));
      for (const l in a)
        if (u instanceof Array) {
          const d = u.find((h) => h.name === l);
          if (d) {
            const h = x(a, l);
            ds(l, h), V(s, d.originName, h);
          }
        }
      return z(or.metadataKey, u, s), t(Object.assign(Object.assign({}, a), { viewModel: s }));
    }
    return t(Object.assign({}, a));
  });
}
const ee = {
  load: "loading",
  save: "saving",
  remove: "removing",
  delete: "deleting",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, hs = ["load", "save", "remove", "delete"], fi = /* @__PURE__ */ Symbol("SERVICE_STATE"), ce = /* @__PURE__ */ Symbol("LAST_CMD"), de = /* @__PURE__ */ Symbol("LAST_LOAD_LABEL");
function vs(e) {
  const t = (...r) => e.execute(...r);
  return Object.defineProperties(t, {
    state: { get: () => e.state },
    states: { get: () => e.states },
    isExecuting: { get: () => e.isExecuting },
    activeCount: { get: () => e.activeCount },
    isCanceled: { get: () => e.isCanceled },
    isDisposed: { get: () => e.isDisposed },
    error: { get: () => e.error },
    result: { get: () => e.result },
    resetError: { get: () => e.resetError },
    cancel: { get: () => e.cancel },
    dispose: { get: () => e.dispose },
    clearQueue: { get: () => e.clearQueue }
  }), t;
}
function Ci(e) {
  e[fi] || (Object.defineProperty(e, fi, { value: !0 }), Object.assign(e, {
    state: ee.ready,
    states: Object.assign({}, ee),
    isExecuting: !1,
    activeCount: 0,
    isCanceled: !1,
    isDisposed: !1,
    error: null,
    result: void 0,
    resetError: () => {
      var t;
      e.error = null;
      const r = e[ce];
      (t = r?.resetError) === null || t === void 0 || t.call(r), Y(e, r, e[de]);
    },
    cancel: () => {
      var t;
      const r = e[ce];
      (t = r?.cancel) === null || t === void 0 || t.call(r), Y(e, r, e[de]);
    },
    dispose: () => {
      var t;
      const r = e[ce];
      (t = r?.dispose) === null || t === void 0 || t.call(r), Y(e, r, e[de]);
    },
    clearQueue: () => {
      var t;
      const r = e[ce];
      (t = r?.clearQueue) === null || t === void 0 || t.call(r);
    }
  }));
}
function Y(e, t, r) {
  t && (t.state === pr.load && r ? e.state = r : e.state = t.state, e.isExecuting = t.isExecuting, e.activeCount = t.activeCount, e.isCanceled = t.isCanceled, e.isDisposed = t.isDisposed, e.error = t.error, e.result = t.result);
}
function _s(e, t, r, i) {
  return Ci(e), Object.assign(Object.assign({}, i), { onStart: (...a) => {
    var n, s;
    const o = r?.();
    e[ce] = o, e[de] = t, e.state = t, e.isExecuting = !0, e.isCanceled = !1, (!((n = void 0) !== null && n !== void 0) || n) && (e.error = null), Y(e, o, t), (s = void 0) === null || s === void 0 || s.call(i, ...a);
  }, onSuccess: (a, ...n) => {
    var s;
    Y(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(i, a, ...n);
  }, onError: (a) => {
    var n;
    Y(e, r?.(), t), (n = void 0) === null || n === void 0 || n.call(i, a);
  }, onCancel: () => {
    var a;
    Y(e, r?.(), t), (a = void 0) === null || a === void 0 || a.call(i);
  }, onFinally: (a, ...n) => {
    var s;
    Y(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(i, a, ...n);
  } });
}
function ps(e, t) {
  Ci(e);
  const r = t ? Object.assign({}, t) : {};
  if (!t) {
    for (const i of hs)
      if (typeof e[i] == "function") {
        const n = ee[i];
        n && (r[i] = n);
      }
  }
  for (const [i, a] of Object.entries(r)) {
    if (!a)
      continue;
    const n = e[i];
    if (typeof n != "function" || "execute" in n && typeof n.execute == "function")
      continue;
    const s = typeof a == "string" ? a : Reflect.get(ee, i);
    let o;
    const u = _s(e, s ?? ee.load, () => o);
    o = Ri((...d) => he(this, void 0, void 0, function* () {
      return n.apply(e, d);
    }), u);
    const l = vs(o);
    s && (e.states[s] = s), Object.defineProperty(e, i, { value: l, configurable: !0, writable: !0 });
  }
}
class zs {
  constructor() {
    this.state = ee.ready, this.states = Object.assign({}, ee), this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, ps(this);
  }
}
const pr = {
  load: "load",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, fe = () => {
}, gs = {
  fn: !1,
  opt: !1,
  states: !1,
  resolveState: !1,
  getScope: !1,
  queue: !1,
  runningPromise: !1,
  queueTail: !1,
  cancelToken: !1
};
class ys {
  /**
   * @param fn Асинхронная функция, которую выполняет команда.
   * @param opt Опции команды.
   */
  constructor(t, r) {
    var i, a, n, s;
    this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, this.states = pr, this.queue = [], this.runningPromise = null, this.queueTail = Promise.resolve(), this.cancelToken = 0, this.fn = t, this.opt = Object.assign({ concurrency: (i = r?.concurrency) !== null && i !== void 0 ? i : "ignore", trackError: (a = r?.trackError) !== null && a !== void 0 ? a : !0, resetErrorOnExecute: (n = r?.resetErrorOnExecute) !== null && n !== void 0 ? n : !0, swallowError: (s = r?.swallowError) !== null && s !== void 0 ? s : !0 }, r), Ei(this, gs, { autoBind: !0 });
  }
  /**
   * Можно ли выполнить команду прямо сейчас.
   * Учитывает:
   * - dispose
   * - `opt.canExecute(scope)`
   * - политику конкурентности: для `"ignore"` запрещает запуск при `isExecuting=true`
   */
  get canExecute() {
    return this.isDisposed || !(this.opt.canExecute ? this.opt.canExecute(this.getScope()) : !0) ? !1 : this.opt.concurrency === "ignore" ? !this.isExecuting : !0;
  }
  /**
   * Разрешает лейбл состояния по “роли” (load/ready/failure/...).
   */
  resolveState(t) {
    return pr[t];
  }
  /**
   * Возвращает текущий scope (снимок) для передачи в `canExecute`.
   */
  getScope() {
    return {
      state: this.state,
      states: this.states,
      isExecuting: this.isExecuting,
      activeCount: this.activeCount,
      isCanceled: this.isCanceled,
      isDisposed: this.isDisposed,
      error: this.error,
      result: this.result
    };
  }
  /**
   * Computed “машина состояний”.
   *
   * Приоритет:
   * 1) disposed
   * 2) load (если выполняется)
   * 3) failure (если есть error)
   * 4) canceled (если isCanceled)
   * 5) ready
   */
  get state() {
    return this.isDisposed ? this.resolveState("disposed") : this.isExecuting ? this.resolveState("load") : this.error ? this.resolveState("failure") : this.isCanceled ? this.resolveState("canceled") : this.resolveState("ready");
  }
  /**
   * Сбрасывает `error`.
   */
  resetError() {
    this.error = null;
  }
  /**
   * Отменяет текущие активные выполнения:
   * - увеличивает cancelToken (помечает текущий запуск “устаревшим”)
   * - ставит isCanceled=true
   * - вызывает onCancel
   * - при cancelQueued=true — очищает очередь
   */
  cancel() {
    var t, r;
    this.cancelToken += 1, this.isCanceled = !0, this.result = void 0, (r = (t = this.opt).onCancel) === null || r === void 0 || r.call(t), this.opt.cancelQueued && this.clearQueue();
  }
  /**
   * Помечает команду как уничтоженную, очищает очередь и отменяет активные выполнения.
   * После dispose новые execute() не выполняются.
   */
  dispose() {
    this.isDisposed || (this.isDisposed = !0, this.result = void 0, this.clearQueue(), this.cancel());
  }
  /**
   * Очищает очередь (concurrency="queue").
   * Все ожидающие элементы резолвятся в `undefined`.
   */
  clearQueue() {
    if (this.queue.length === 0)
      return;
    const t = this.queue.splice(0, this.queue.length);
    for (const r of t)
      r.canceled = !0, r.settled || (r.settled = !0, r.resolve(void 0));
  }
  /**
   * Выполняет команду с учётом выбранной конкурентности.
   *
   * @remarks
   * Возвращаемое значение часто типизируется как `TResult | undefined`, потому что:
   * - при отмене результат принудительно становится `undefined`
   * - при swallowError=true ошибка не пробрасывается, а возвращается `undefined`
   */
  execute(...t) {
    var r;
    if (this.isDisposed)
      return Promise.resolve(void 0);
    if (!this.canExecute)
      return (r = this.runningPromise) !== null && r !== void 0 ? r : Promise.resolve(void 0);
    const i = (n) => {
      this.runningPromise = n;
      const s = () => {
        this.runningPromise === n && (this.runningPromise = null);
      };
      return n.then(s, s), n;
    }, a = () => he(this, void 0, void 0, function* () {
      var n, s, o, u, l, d, h, b;
      if (this.isDisposed)
        return;
      W(() => {
        this.activeCount += 1, this.isExecuting = this.activeCount > 0, this.isCanceled = !1, this.result = void 0, this.opt.trackError && this.opt.resetErrorOnExecute && (this.error = null);
      });
      const _ = this.cancelToken;
      let T = !1, S = !1, C = null, A = null;
      try {
        (s = (n = this.opt).onStart) === null || s === void 0 || s.call(n, ...t), A = this.fn(...t);
        const y = yield A;
        if (S = this.cancelToken !== _, S) {
          W(() => {
            this.isCanceled = !0, this.result = void 0;
          });
          return;
        }
        return W(() => {
          this.result = y;
        }), (u = (o = this.opt).onSuccess) === null || u === void 0 || u.call(o, y, ...t), T = !0, y;
      } catch (y) {
        if (C = y, S = this.cancelToken !== _, W(() => {
          this.result = void 0, this.opt.trackError && (this.error = y);
        }), (d = (l = this.opt).onError) === null || d === void 0 || d.call(l, y), !this.opt.swallowError)
          throw y;
        return;
      } finally {
        W(() => {
          this.activeCount = Math.max(0, this.activeCount - 1), this.isExecuting = this.activeCount > 0;
        }), !S && this.cancelToken !== _ && (S = !0), (b = (h = this.opt).onFinally) === null || b === void 0 || b.call(h, { ok: T, canceled: S, error: C }, ...t);
      }
    });
    switch (this.opt.concurrency) {
      case "parallel":
        return i(a());
      case "restart":
        return this.cancel(), i(a());
      case "queue": {
        const n = this.opt.queueLimit;
        if (typeof n == "number" && n > 0 && this.queue.length >= n)
          return Promise.resolve(void 0);
        const s = {
          promise: Promise.resolve(void 0),
          resolve: fe,
          reject: fe,
          canceled: !1,
          settled: !1
        }, o = this.activeCount === 0 && this.queue.length === 0;
        s.promise = new Promise((d, h) => {
          s.resolve = d, s.reject = h;
        }), this.queue.push(s);
        const u = () => he(this, void 0, void 0, function* () {
          if (s.settled)
            return;
          if (s.canceled || this.isDisposed) {
            s.settled = !0, s.resolve(void 0);
            return;
          }
          const d = this.queue.indexOf(s);
          d >= 0 && this.queue.splice(d, 1);
          try {
            const h = yield a();
            s.settled || (s.settled = !0, s.resolve(h));
          } catch (h) {
            s.settled || (s.settled = !0, s.reject(h));
          }
        }), l = o ? u() : this.queueTail.then(u, u);
        return this.queueTail = l.then(fe, fe), i(s.promise);
      }
      default:
        return this.isExecuting && this.runningPromise ? this.runningPromise : i(a());
    }
  }
}
function Ri(e, t) {
  return new ys(e, t);
}
function Vs(e, t) {
  const r = Ti(e), i = /* @__PURE__ */ new Set(), a = t?.onCancel;
  return Ri((...s) => {
    const o = r(...s);
    i.add(o);
    const u = () => {
      i.delete(o);
    };
    return o.then(u, u), new Promise((l, d) => {
      o.then(l, (h) => {
        const b = h;
        if (Mi(b)) {
          l(void 0);
          return;
        }
        d(b);
      });
    });
  }, Object.assign(Object.assign({}, t), { onCancel: () => {
    var s;
    for (const o of i)
      (s = o.cancel) === null || s === void 0 || s.call(o);
    a?.();
  } }));
}
function Hs(e) {
  return function(...t) {
    return W(() => e.apply(this, t));
  };
}
export {
  zs as CommandService,
  pr as DEFAULT_STATES,
  Z as GetService,
  Fs as GetStore,
  Vi as Inject,
  xs as InjectStore,
  js as MakeObservable,
  ss as Model,
  Ts as PropFromView,
  vi as Service,
  Cs as SetService,
  Ls as Store,
  Ai as StoreBase,
  As as TODO,
  Ks as ViewModel,
  ps as applyCommandMethods,
  Ri as asyncCommand,
  Hs as commandAction,
  z as defineMetadata,
  Rs as define_prop,
  Ms as exclude,
  _r as field,
  Vs as flowCommand,
  Gi as getExecutingFunctionNameByStack,
  H as getOwnMetadata,
  Os as isSerializable,
  Ds as submit,
  Ps as validation,
  Gs as view
};
