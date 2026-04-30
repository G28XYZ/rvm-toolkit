import "reflect-metadata";
import { d as he, _ as K, a as G, b as W, c as E, e as Ri } from "./tslib.es6-DQYNRcek.js";
import { makeObservable as or, observable as ce, isObservable as qr, runInAction as Y, computed as X, action as H, flow as ji, isFlowCancellationError as Ti, makeAutoObservable as Mi } from "mobx";
import { observer as Di } from "mobx-react";
import { useMemo as Ei, useEffect as Pi, isValidElement as Ii } from "react";
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se, Or;
function fi() {
  if (Or) return Se;
  Or = 1;
  var e = typeof le == "object" && le && le.Object === Object && le;
  return Se = e, Se;
}
var Ae, Sr;
function U() {
  if (Sr) return Ae;
  Sr = 1;
  var e = fi(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Ae = r, Ae;
}
var Ce, Ar;
function gr() {
  if (Ar) return Ce;
  Ar = 1;
  var e = U(), t = e.Symbol;
  return Ce = t, Ce;
}
var Re, Cr;
function ki() {
  if (Cr) return Re;
  Cr = 1;
  var e = gr(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var o = r.call(s, a), c = s[a];
    try {
      s[a] = void 0;
      var l = !0;
    } catch {
    }
    var d = n.call(s);
    return l && (o ? s[a] = c : delete s[a]), d;
  }
  return Re = i, Re;
}
var je, Rr;
function xi() {
  if (Rr) return je;
  Rr = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return je = r, je;
}
var Te, jr;
function _e() {
  if (jr) return Te;
  jr = 1;
  var e = gr(), t = ki(), r = xi(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : n : i && i in Object(o) ? t(o) : r(o);
  }
  return Te = s, Te;
}
var Me, Tr;
function di() {
  if (Tr) return Me;
  Tr = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Me = e, Me;
}
var De, Mr;
function yr() {
  if (Mr) return De;
  Mr = 1;
  var e = _e(), t = di(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!t(o))
      return !1;
    var c = e(o);
    return c == n || c == a || c == r || c == i;
  }
  return De = s, De;
}
var Fi = yr();
const Li = /* @__PURE__ */ pr(Fi), N = (e, t, r) => Reflect.getOwnMetadata(e, t) || r || {}, V = (e, t, r) => Reflect.defineMetadata(e, t, r);
function Os(...e) {
  try {
    return JSON.stringify(e), !0;
  } catch {
    return !1;
  }
}
function Ki(e) {
  if (e && typeof e == "string") {
    let [t] = e.split(`
`)[2].replace(/at (get)?/, "").match(/.*/g) || [];
    return t && (t = t.trim()), t;
  }
}
const Dr = {}, Ee = [];
let Er = !1;
const Ss = (e, ...t) => {
  const r = new Error().stack;
  if (!Er)
    console.log("%c TODO", "background: #222; color: #bada55", Dr), Er = !0;
  else {
    const a = Ki(r);
    Ee.includes(a) === !1 && (Ee.push(a), Reflect.set(Dr, `${Ee.length}) ${e}`, { msg: t, get path() {
      return console.info(t, a), a;
    } }));
  }
  function n(...a) {
  }
  return n;
}, Pr = /* @__PURE__ */ new WeakMap(), z = (e, t) => !!e && (typeof t == "string" || typeof t == "symbol"), L = (e) => !!e && typeof e == "object" && "kind" in e, Gi = (e) => ({
  kind: "class",
  name: e,
  addInitializer: () => {
  },
  metadata: {}
}), pe = (e, t) => {
  if (!e)
    return;
  let r = Pr.get(e);
  r || (r = /* @__PURE__ */ new Map(), Pr.set(e, r));
  let n = r.get(t.metadataKey);
  n || (n = /* @__PURE__ */ new Set(), r.set(t.metadataKey, n));
  const a = String(t.name);
  if (n.has(a))
    return;
  const i = N(t.metadataKey, e, new Array());
  i.some((s) => String(s.name) === a) || V(t.metadataKey, [...i, t], e), n.add(a);
}, J = /* @__PURE__ */ Symbol("service-key"), ur = new Proxy({}, Reflect);
function Hi(e) {
  const t = (n, a) => {
    Object.defineProperty(n, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        if (Object.prototype.hasOwnProperty.call(this, a))
          return Reflect.get(this, a);
        const i = Z(e, "instance");
        if (i)
          return Object.defineProperty(this, a, { value: i, writable: !0, configurable: !0, enumerable: !0 }), i;
      },
      set(i) {
        const s = Z(e, "instance");
        Object.defineProperty(this, a, { value: s ?? i, writable: !0, configurable: !0, enumerable: !0 });
      }
    });
  };
  function r(n, a) {
    if (z(n, a)) {
      t(n, a);
      return;
    }
    return a.addInitializer(function() {
      return he(this, void 0, void 0, function* () {
        const i = Z(e, "instance");
        i && Object.hasOwn(this, a.name) && Reflect.set(this, a.name, i);
      });
    }), (i) => i;
  }
  return r;
}
function Z(e, t) {
  var r;
  const n = N(J, ur);
  if (typeof e != "string") {
    const a = N(J, e);
    if (a)
      return t && t in a ? a[t] : a;
    for (const i in n) {
      const s = n[i];
      if (s.target === e) {
        e = s.context.name;
        break;
      }
    }
  }
  if (typeof e == "string")
    return t ? (r = n[e]) === null || r === void 0 ? void 0 : r[t] : n[e];
}
function hi(e, t) {
  const r = (a, i) => {
    const s = String(typeof e == "string" && e || typeof e == "object" && e?.id || i?.name || a?.name), o = N(J, ur), c = new Proxy({
      target: a,
      instance: typeof e == "object" && Reflect.get(e, "transient") || typeof e == "object" && Reflect.get(e, "lazy") ? a : new a(),
      context: i,
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
    o[s] = c, V(J, o, ur), V(J, o[s], a);
  };
  function n(a, i) {
    var s, o;
    const c = a.__legacy_source__, l = L(i) ? i : Gi((o = (s = c?.name) !== null && s !== void 0 ? s : a?.name) !== null && o !== void 0 ? o : "");
    r(a, l), c && c !== a && V(J, N(J, a), c);
  }
  return Li(e) ? n(e, t) : e ? (a, i) => n(a, i) : n;
}
const As = (e, t) => {
  const { kind: r = "class", name: n = "", addInitializer: a = () => {
  }, metadata: i } = t?.ctx || {};
  return hi(t)(e, {
    kind: r,
    name: n,
    addInitializer: a,
    metadata: i
  }), Z(e).instance;
};
function Pe(e) {
  var t, r, n;
  const a = Object.assign({ enumerable: !1, writable: !0 }, e), i = Object.assign({ configurable: !0, enumerable: !1, writable: !0 }, e), s = {
    configurable: (t = i.configurable) !== null && t !== void 0 ? t : !0,
    enumerable: (r = i.enumerable) !== null && r !== void 0 ? r : !1,
    writable: (n = i.writable) !== null && n !== void 0 ? n : !0,
    value: void 0
  };
  return function(o, c) {
    if (z(o, c)) {
      Object.defineProperty(o, c, {
        configurable: !0,
        enumerable: a.enumerable,
        get() {
        },
        set(l) {
          s.value = l, Object.defineProperty(this, c, s), s.value = void 0;
        }
      });
      return;
    }
    if (L(c)) {
      const l = c;
      return l.kind === "field" ? function(d) {
        return s.value = d, Object.defineProperty(this, l.name, s), s.value = void 0, d;
      } : (l.addInitializer(function() {
        const d = Object.getOwnPropertyDescriptor(this, l.name);
        d && Object.defineProperty(this, l.name, Object.assign(Object.assign({}, d), { enumerable: a.enumerable }));
      }), o);
    }
  };
}
function Cs(e, t) {
  return z(e, t) || L(t) ? Pe()(e, t) : Pe(e);
}
function Rs(e, t) {
  const r = (i) => class extends i {
    constructor(...s) {
      super(...s), or(this);
    }
  }, n = (i, s) => {
    if (typeof Reflect?.getOwnMetadataKeys == "function")
      for (const o of Reflect.getOwnMetadataKeys(i)) {
        const c = Reflect.getOwnMetadata(o, i);
        Reflect.defineMetadata(o, c, s);
      }
  };
  function a(i, s) {
    if (!L(s)) {
      const o = i, c = r(o);
      return Object.defineProperty(c, "__legacy_source__", { value: o, configurable: !0 }), n(o, c), c;
    }
    s.addInitializer(function() {
      or(this);
    });
  }
  return e && !L(t) || e ? a(e, t) : a;
}
const $ = /* @__PURE__ */ Symbol("field-key"), re = /* @__PURE__ */ Symbol("validation-key"), ae = /* @__PURE__ */ Symbol("submit-key"), ie = /* @__PURE__ */ Symbol("exclude-key"), Vi = /* @__PURE__ */ Symbol("prop-from-view-key"), Ir = (e, t) => !!e && Object.prototype.hasOwnProperty.call(e, t), F = (e, t) => e[t], B = (e, t, r) => {
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
    const r = [], n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    let i = t;
    for (; i; ) {
      const o = Reflect.getOwnMetadata(this.metadataKey, i);
      if (Array.isArray(o))
        for (const c of o) {
          const l = c?.name, d = String(l);
          a.has(d) || (a.add(d), r.push(c), n.set(d, c));
        }
      i = Object.getPrototypeOf(i);
    }
    return { ownRef: Reflect.getOwnMetadata(this.metadataKey, t), list: r, map: n };
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
    const n = r && typeof r == "object" ? Reflect.getOwnMetadata(this.metadataKey, r) : void 0;
    if (Array.isArray(n))
      return n.find((o) => o.name === t);
    const a = this.getCacheTarget(r);
    if (!a)
      return;
    const i = Reflect.getOwnMetadata(this.metadataKey, a), s = this.cache.get(a);
    if (!s || s.ownRef !== i) {
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
      const o = [], c = /* @__PURE__ */ new Set();
      let l = t;
      for (; l; ) {
        const d = Reflect.getOwnMetadata(this.metadataKey, l);
        if (Array.isArray(d))
          for (const h of d) {
            const b = h?.name, _ = String(b);
            c.has(_) || (c.add(_), o.push(h));
          }
        l = Object.getPrototypeOf(l);
      }
      return o;
    }
    const n = this.getCacheTarget(t);
    if (!n)
      return [];
    const a = Reflect.getOwnMetadata(this.metadataKey, n), i = this.cache.get(n);
    if (i && i.ownRef === a)
      return i.list;
    const s = this.computeFromPrototype(n);
    return this.cache.set(n, s), s.list;
  }
}
class cr extends te {
  constructor() {
    super(...arguments), this.metadataKey = re;
  }
}
class lr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ae;
  }
}
class fr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ie;
  }
}
class dr extends te {
  /**
   * Создать метаданные поля модели.
   */
  constructor(t = {}) {
    super(t), this.factory = null, this.mapping = null, this.noObserve = null, this.collectChanges = !1, this.name = null, this.ctx = null, this.metadataKey = $, this.isInit = !1, this.factory = t.factory, this.mapping = t.mapping, this.noObserve = t.noObserve, this.name = t.name, this.ctx = t.ctx, this.collectChanges = !!t.collectChanges;
  }
}
class hr extends te {
  /**
   * Создать метаданные для PropFromView.
   */
  constructor(t = {}) {
    super(t), this.metadataKey = Vi;
    for (const r in this)
      t && r in t && B(this, r, F(t, r));
  }
}
function js(e) {
  const t = (a, i) => {
    const s = new hr({ name: e, originName: String(i) });
    s.name = e, s.originName = String(i);
    const o = N(s.metadataKey, a, new Array());
    V(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new hr(), s = i.fields(this);
      for (const o in this)
        s instanceof Array && a.name === o && (i.name = e, i.originName = o, i.value = this[o], s.push(i));
      V(i.metadataKey, s, this);
    });
  };
  function n(a, i) {
    if (z(a, i)) {
      t(a, i);
      return;
    }
    if (L(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
function Ts(e) {
  const t = (a, i) => {
    const s = new fr({ callback: e, name: String(i) }), o = N(s.metadataKey, a, new Array());
    V(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new fr({ callback: e, name: String(a.name) });
      pe(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (z(a, i)) {
      t(a, i);
      return;
    }
    if (L(i))
      return r(i), i.kind === "field" ? void 0 : i;
  }
  if (e)
    return ((a, i) => n(a, i));
}
var Ie, kr;
function vi() {
  if (kr) return Ie;
  kr = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Ie = t, Ie;
}
var ke, xr;
function zi() {
  if (xr) return ke;
  xr = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return ke = e, ke;
}
var xe, Fr;
function Bi() {
  if (Fr) return xe;
  Fr = 1;
  var e = zi(), t = e(Object.keys, Object);
  return xe = t, xe;
}
var Fe, Lr;
function _i() {
  if (Lr) return Fe;
  Lr = 1;
  var e = vi(), t = Bi(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var s = [];
    for (var o in Object(i))
      n.call(i, o) && o != "constructor" && s.push(o);
    return s;
  }
  return Fe = a, Fe;
}
var Le, Kr;
function Ni() {
  if (Kr) return Le;
  Kr = 1;
  var e = U(), t = e["__core-js_shared__"];
  return Le = t, Le;
}
var Ke, Gr;
function Ui() {
  if (Gr) return Ke;
  Gr = 1;
  var e = Ni(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Ke = r, Ke;
}
var Ge, Hr;
function pi() {
  if (Hr) return Ge;
  Hr = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Ge = r, Ge;
}
var He, Vr;
function Wi() {
  if (Vr) return He;
  Vr = 1;
  var e = yr(), t = Ui(), r = di(), n = pi(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, c = s.toString, l = o.hasOwnProperty, d = RegExp(
    "^" + c.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(b) {
    if (!r(b) || t(b))
      return !1;
    var _ = e(b) ? d : i;
    return _.test(n(b));
  }
  return He = h, He;
}
var Ve, zr;
function Yi() {
  if (zr) return Ve;
  zr = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ve = e, Ve;
}
var ze, Br;
function ne() {
  if (Br) return ze;
  Br = 1;
  var e = Wi(), t = Yi();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return ze = r, ze;
}
var Be, Nr;
function Qi() {
  if (Nr) return Be;
  Nr = 1;
  var e = ne(), t = U(), r = e(t, "DataView");
  return Be = r, Be;
}
var Ne, Ur;
function mr() {
  if (Ur) return Ne;
  Ur = 1;
  var e = ne(), t = U(), r = e(t, "Map");
  return Ne = r, Ne;
}
var Ue, Wr;
function $i() {
  if (Wr) return Ue;
  Wr = 1;
  var e = ne(), t = U(), r = e(t, "Promise");
  return Ue = r, Ue;
}
var We, Yr;
function Ji() {
  if (Yr) return We;
  Yr = 1;
  var e = ne(), t = U(), r = e(t, "Set");
  return We = r, We;
}
var Ye, Qr;
function Xi() {
  if (Qr) return Ye;
  Qr = 1;
  var e = ne(), t = U(), r = e(t, "WeakMap");
  return Ye = r, Ye;
}
var Qe, $r;
function gi() {
  if ($r) return Qe;
  $r = 1;
  var e = Qi(), t = mr(), r = $i(), n = Ji(), a = Xi(), i = _e(), s = pi(), o = "[object Map]", c = "[object Object]", l = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", b = "[object DataView]", _ = s(e), T = s(t), q = s(r), C = s(n), A = s(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != b || t && y(new t()) != o || r && y(r.resolve()) != l || n && y(new n()) != d || a && y(new a()) != h) && (y = function(M) {
    var g = i(M), f = g == c ? M.constructor : void 0, O = f ? s(f) : "";
    if (O)
      switch (O) {
        case _:
          return b;
        case T:
          return o;
        case q:
          return l;
        case C:
          return d;
        case A:
          return h;
      }
    return g;
  }), Qe = y, Qe;
}
var $e, Jr;
function ge() {
  if (Jr) return $e;
  Jr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return $e = e, $e;
}
var Je, Xr;
function Zi() {
  if (Xr) return Je;
  Xr = 1;
  var e = _e(), t = ge(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Je = n, Je;
}
var Xe, Zr;
function yi() {
  if (Zr) return Xe;
  Zr = 1;
  var e = Zi(), t = ge(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return Xe = i, Xe;
}
var Ze, ea;
function ye() {
  if (ea) return Ze;
  ea = 1;
  var e = Array.isArray;
  return Ze = e, Ze;
}
var et, ta;
function mi() {
  if (ta) return et;
  ta = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return et = t, et;
}
var tt, ra;
function bi() {
  if (ra) return tt;
  ra = 1;
  var e = yr(), t = mi();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return tt = r, tt;
}
var se = { exports: {} }, rt, aa;
function en() {
  if (aa) return rt;
  aa = 1;
  function e() {
    return !1;
  }
  return rt = e, rt;
}
se.exports;
var ia;
function br() {
  return ia || (ia = 1, (function(e, t) {
    var r = U(), n = en(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, l = c || n;
    e.exports = l;
  })(se, se.exports)), se.exports;
}
var at, na;
function tn() {
  if (na) return at;
  na = 1;
  var e = _e(), t = mi(), r = ge(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", c = "[object Function]", l = "[object Map]", d = "[object Number]", h = "[object Object]", b = "[object RegExp]", _ = "[object Set]", T = "[object String]", q = "[object WeakMap]", C = "[object ArrayBuffer]", A = "[object DataView]", y = "[object Float32Array]", M = "[object Float64Array]", g = "[object Int8Array]", f = "[object Int16Array]", O = "[object Int32Array]", S = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", x = "[object Uint32Array]", m = {};
  m[y] = m[M] = m[g] = m[f] = m[O] = m[S] = m[P] = m[k] = m[x] = !0, m[n] = m[a] = m[C] = m[i] = m[A] = m[s] = m[o] = m[c] = m[l] = m[d] = m[h] = m[b] = m[_] = m[T] = m[q] = !1;
  function u(v) {
    return r(v) && t(v.length) && !!m[e(v)];
  }
  return at = u, at;
}
var it, sa;
function rn() {
  if (sa) return it;
  sa = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return it = e, it;
}
var oe = { exports: {} };
oe.exports;
var oa;
function an() {
  return oa || (oa = 1, (function(e, t) {
    var r = fi(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && r.process, o = (function() {
      try {
        var c = a && a.require && a.require("util").types;
        return c || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(oe, oe.exports)), oe.exports;
}
var nt, ua;
function wr() {
  if (ua) return nt;
  ua = 1;
  var e = tn(), t = rn(), r = an(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return nt = a, nt;
}
var st, ca;
function nn() {
  if (ca) return st;
  ca = 1;
  var e = _i(), t = gi(), r = yi(), n = ye(), a = bi(), i = br(), s = vi(), o = wr(), c = "[object Map]", l = "[object Set]", d = Object.prototype, h = d.hasOwnProperty;
  function b(_) {
    if (_ == null)
      return !0;
    if (a(_) && (n(_) || typeof _ == "string" || typeof _.splice == "function" || i(_) || o(_) || r(_)))
      return !_.length;
    var T = t(_);
    if (T == c || T == l)
      return !_.size;
    if (s(_))
      return !e(_).length;
    for (var q in _)
      if (h.call(_, q))
        return !1;
    return !0;
  }
  return st = b, st;
}
var sn = nn();
const on = /* @__PURE__ */ pr(sn);
var ot, la;
function un() {
  if (la) return ot;
  la = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ot = e, ot;
}
var ut, fa;
function wi() {
  if (fa) return ut;
  fa = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ut = e, ut;
}
var ct, da;
function me() {
  if (da) return ct;
  da = 1;
  var e = wi();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return ct = t, ct;
}
var lt, ha;
function cn() {
  if (ha) return lt;
  ha = 1;
  var e = me(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : r.call(i, s, 1), --this.size, !0;
  }
  return lt = n, lt;
}
var ft, va;
function ln() {
  if (va) return ft;
  va = 1;
  var e = me();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return ft = t, ft;
}
var dt, _a;
function fn() {
  if (_a) return dt;
  _a = 1;
  var e = me();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return dt = t, dt;
}
var ht, pa;
function dn() {
  if (pa) return ht;
  pa = 1;
  var e = me();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return ht = t, ht;
}
var vt, ga;
function be() {
  if (ga) return vt;
  ga = 1;
  var e = un(), t = cn(), r = ln(), n = fn(), a = dn();
  function i(s) {
    var o = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++o < c; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, vt = i, vt;
}
var _t, ya;
function hn() {
  if (ya) return _t;
  ya = 1;
  var e = be();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return _t = t, _t;
}
var pt, ma;
function vn() {
  if (ma) return pt;
  ma = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return pt = e, pt;
}
var gt, ba;
function _n() {
  if (ba) return gt;
  ba = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return gt = e, gt;
}
var yt, wa;
function pn() {
  if (wa) return yt;
  wa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return yt = e, yt;
}
var mt, qa;
function we() {
  if (qa) return mt;
  qa = 1;
  var e = ne(), t = e(Object, "create");
  return mt = t, mt;
}
var bt, Oa;
function gn() {
  if (Oa) return bt;
  Oa = 1;
  var e = we();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return bt = t, bt;
}
var wt, Sa;
function yn() {
  if (Sa) return wt;
  Sa = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return wt = e, wt;
}
var qt, Aa;
function mn() {
  if (Aa) return qt;
  Aa = 1;
  var e = we(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === t ? void 0 : o;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return qt = a, qt;
}
var Ot, Ca;
function bn() {
  if (Ca) return Ot;
  Ca = 1;
  var e = we(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Ot = n, Ot;
}
var St, Ra;
function wn() {
  if (Ra) return St;
  Ra = 1;
  var e = we(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return St = r, St;
}
var At, ja;
function qn() {
  if (ja) return At;
  ja = 1;
  var e = gn(), t = yn(), r = mn(), n = bn(), a = wn();
  function i(s) {
    var o = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++o < c; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, At = i, At;
}
var Ct, Ta;
function On() {
  if (Ta) return Ct;
  Ta = 1;
  var e = qn(), t = be(), r = mr();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ct = n, Ct;
}
var Rt, Ma;
function Sn() {
  if (Ma) return Rt;
  Ma = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Rt = e, Rt;
}
var jt, Da;
function qe() {
  if (Da) return jt;
  Da = 1;
  var e = Sn();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return jt = t, jt;
}
var Tt, Ea;
function An() {
  if (Ea) return Tt;
  Ea = 1;
  var e = qe();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Tt = t, Tt;
}
var Mt, Pa;
function Cn() {
  if (Pa) return Mt;
  Pa = 1;
  var e = qe();
  function t(r) {
    return e(this, r).get(r);
  }
  return Mt = t, Mt;
}
var Dt, Ia;
function Rn() {
  if (Ia) return Dt;
  Ia = 1;
  var e = qe();
  function t(r) {
    return e(this, r).has(r);
  }
  return Dt = t, Dt;
}
var Et, ka;
function jn() {
  if (ka) return Et;
  ka = 1;
  var e = qe();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Et = t, Et;
}
var Pt, xa;
function qi() {
  if (xa) return Pt;
  xa = 1;
  var e = On(), t = An(), r = Cn(), n = Rn(), a = jn();
  function i(s) {
    var o = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++o < c; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Pt = i, Pt;
}
var It, Fa;
function Tn() {
  if (Fa) return It;
  Fa = 1;
  var e = be(), t = mr(), r = qi(), n = 200;
  function a(i, s) {
    var o = this.__data__;
    if (o instanceof e) {
      var c = o.__data__;
      if (!t || c.length < n - 1)
        return c.push([i, s]), this.size = ++o.size, this;
      o = this.__data__ = new r(c);
    }
    return o.set(i, s), this.size = o.size, this;
  }
  return It = a, It;
}
var kt, La;
function Mn() {
  if (La) return kt;
  La = 1;
  var e = be(), t = hn(), r = vn(), n = _n(), a = pn(), i = Tn();
  function s(o) {
    var c = this.__data__ = new e(o);
    this.size = c.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, kt = s, kt;
}
var xt, Ka;
function Dn() {
  if (Ka) return xt;
  Ka = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return xt = t, xt;
}
var Ft, Ga;
function En() {
  if (Ga) return Ft;
  Ga = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Ft = e, Ft;
}
var Lt, Ha;
function Pn() {
  if (Ha) return Lt;
  Ha = 1;
  var e = qi(), t = Dn(), r = En();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Lt = n, Lt;
}
var Kt, Va;
function In() {
  if (Va) return Kt;
  Va = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Kt = e, Kt;
}
var Gt, za;
function kn() {
  if (za) return Gt;
  za = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Gt = e, Gt;
}
var Ht, Ba;
function Oi() {
  if (Ba) return Ht;
  Ba = 1;
  var e = Pn(), t = In(), r = kn(), n = 1, a = 2;
  function i(s, o, c, l, d, h) {
    var b = c & n, _ = s.length, T = o.length;
    if (_ != T && !(b && T > _))
      return !1;
    var q = h.get(s), C = h.get(o);
    if (q && C)
      return q == o && C == s;
    var A = -1, y = !0, M = c & a ? new e() : void 0;
    for (h.set(s, o), h.set(o, s); ++A < _; ) {
      var g = s[A], f = o[A];
      if (l)
        var O = b ? l(f, g, A, o, s, h) : l(g, f, A, s, o, h);
      if (O !== void 0) {
        if (O)
          continue;
        y = !1;
        break;
      }
      if (M) {
        if (!t(o, function(S, P) {
          if (!r(M, P) && (g === S || d(g, S, c, l, h)))
            return M.push(P);
        })) {
          y = !1;
          break;
        }
      } else if (!(g === f || d(g, f, c, l, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(s), h.delete(o), y;
  }
  return Ht = i, Ht;
}
var Vt, Na;
function xn() {
  if (Na) return Vt;
  Na = 1;
  var e = U(), t = e.Uint8Array;
  return Vt = t, Vt;
}
var zt, Ua;
function Fn() {
  if (Ua) return zt;
  Ua = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return zt = e, zt;
}
var Bt, Wa;
function Ln() {
  if (Wa) return Bt;
  Wa = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Bt = e, Bt;
}
var Nt, Ya;
function Kn() {
  if (Ya) return Nt;
  Ya = 1;
  var e = gr(), t = xn(), r = wi(), n = Oi(), a = Fn(), i = Ln(), s = 1, o = 2, c = "[object Boolean]", l = "[object Date]", d = "[object Error]", h = "[object Map]", b = "[object Number]", _ = "[object RegExp]", T = "[object Set]", q = "[object String]", C = "[object Symbol]", A = "[object ArrayBuffer]", y = "[object DataView]", M = e ? e.prototype : void 0, g = M ? M.valueOf : void 0;
  function f(O, S, P, k, x, m, u) {
    switch (P) {
      case y:
        if (O.byteLength != S.byteLength || O.byteOffset != S.byteOffset)
          return !1;
        O = O.buffer, S = S.buffer;
      case A:
        return !(O.byteLength != S.byteLength || !m(new t(O), new t(S)));
      case c:
      case l:
      case b:
        return r(+O, +S);
      case d:
        return O.name == S.name && O.message == S.message;
      case _:
      case q:
        return O == S + "";
      case h:
        var v = a;
      case T:
        var p = k & s;
        if (v || (v = i), O.size != S.size && !p)
          return !1;
        var w = u.get(O);
        if (w)
          return w == S;
        k |= o, u.set(O, S);
        var D = n(v(O), v(S), k, x, m, u);
        return u.delete(O), D;
      case C:
        if (g)
          return g.call(O) == g.call(S);
    }
    return !1;
  }
  return Nt = f, Nt;
}
var Ut, Qa;
function Gn() {
  if (Qa) return Ut;
  Qa = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return Ut = e, Ut;
}
var Wt, $a;
function Hn() {
  if ($a) return Wt;
  $a = 1;
  var e = Gn(), t = ye();
  function r(n, a, i) {
    var s = a(n);
    return t(n) ? s : e(s, i(n));
  }
  return Wt = r, Wt;
}
var Yt, Ja;
function Vn() {
  if (Ja) return Yt;
  Ja = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, s = []; ++n < a; ) {
      var o = t[n];
      r(o, n, t) && (s[i++] = o);
    }
    return s;
  }
  return Yt = e, Yt;
}
var Qt, Xa;
function zn() {
  if (Xa) return Qt;
  Xa = 1;
  function e() {
    return [];
  }
  return Qt = e, Qt;
}
var $t, Za;
function Bn() {
  if (Za) return $t;
  Za = 1;
  var e = Vn(), t = zn(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return n.call(s, o);
    }));
  } : t;
  return $t = i, $t;
}
var Jt, ei;
function Nn() {
  if (ei) return Jt;
  ei = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Jt = e, Jt;
}
var Xt, ti;
function Un() {
  if (ti) return Xt;
  ti = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Xt = r, Xt;
}
var Zt, ri;
function Wn() {
  if (ri) return Zt;
  ri = 1;
  var e = Nn(), t = yi(), r = ye(), n = br(), a = Un(), i = wr(), s = Object.prototype, o = s.hasOwnProperty;
  function c(l, d) {
    var h = r(l), b = !h && t(l), _ = !h && !b && n(l), T = !h && !b && !_ && i(l), q = h || b || _ || T, C = q ? e(l.length, String) : [], A = C.length;
    for (var y in l)
      (d || o.call(l, y)) && !(q && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, A))) && C.push(y);
    return C;
  }
  return Zt = c, Zt;
}
var er, ai;
function Yn() {
  if (ai) return er;
  ai = 1;
  var e = Wn(), t = _i(), r = bi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return er = n, er;
}
var tr, ii;
function Qn() {
  if (ii) return tr;
  ii = 1;
  var e = Hn(), t = Bn(), r = Yn();
  function n(a) {
    return e(a, r, t);
  }
  return tr = n, tr;
}
var rr, ni;
function $n() {
  if (ni) return rr;
  ni = 1;
  var e = Qn(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, s, o, c, l, d) {
    var h = o & t, b = e(i), _ = b.length, T = e(s), q = T.length;
    if (_ != q && !h)
      return !1;
    for (var C = _; C--; ) {
      var A = b[C];
      if (!(h ? A in s : n.call(s, A)))
        return !1;
    }
    var y = d.get(i), M = d.get(s);
    if (y && M)
      return y == s && M == i;
    var g = !0;
    d.set(i, s), d.set(s, i);
    for (var f = h; ++C < _; ) {
      A = b[C];
      var O = i[A], S = s[A];
      if (c)
        var P = h ? c(S, O, A, s, i, d) : c(O, S, A, i, s, d);
      if (!(P === void 0 ? O === S || l(O, S, o, c, d) : P)) {
        g = !1;
        break;
      }
      f || (f = A == "constructor");
    }
    if (g && !f) {
      var k = i.constructor, x = s.constructor;
      k != x && "constructor" in i && "constructor" in s && !(typeof k == "function" && k instanceof k && typeof x == "function" && x instanceof x) && (g = !1);
    }
    return d.delete(i), d.delete(s), g;
  }
  return rr = a, rr;
}
var ar, si;
function Jn() {
  if (si) return ar;
  si = 1;
  var e = Mn(), t = Oi(), r = Kn(), n = $n(), a = gi(), i = ye(), s = br(), o = wr(), c = 1, l = "[object Arguments]", d = "[object Array]", h = "[object Object]", b = Object.prototype, _ = b.hasOwnProperty;
  function T(q, C, A, y, M, g) {
    var f = i(q), O = i(C), S = f ? d : a(q), P = O ? d : a(C);
    S = S == l ? h : S, P = P == l ? h : P;
    var k = S == h, x = P == h, m = S == P;
    if (m && s(q)) {
      if (!s(C))
        return !1;
      f = !0, k = !1;
    }
    if (m && !k)
      return g || (g = new e()), f || o(q) ? t(q, C, A, y, M, g) : r(q, C, S, A, y, M, g);
    if (!(A & c)) {
      var u = k && _.call(q, "__wrapped__"), v = x && _.call(C, "__wrapped__");
      if (u || v) {
        var p = u ? q.value() : q, w = v ? C.value() : C;
        return g || (g = new e()), M(p, w, A, y, g);
      }
    }
    return m ? (g || (g = new e()), n(q, C, A, y, M, g)) : !1;
  }
  return ar = T, ar;
}
var ir, oi;
function Xn() {
  if (oi) return ir;
  oi = 1;
  var e = Jn(), t = ge();
  function r(n, a, i, s, o) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, s, r, o);
  }
  return ir = r, ir;
}
var nr, ui;
function Zn() {
  if (ui) return nr;
  ui = 1;
  var e = Xn();
  function t(r, n) {
    return e(r, n);
  }
  return nr = t, nr;
}
var es = Zn();
const ci = /* @__PURE__ */ pr(es), ts = new lr(), rs = new dr(), as = new cr(), is = new fr();
let ns = (() => {
  var e, t, r, n, a, i, s, o, c, l, d, h, b, _, T;
  let q = [], C, A = [], y = [], M, g, f, O, S, P, k, x;
  return e = class {
    get initData() {
      return K(this, t, "f");
    }
    set initData(u) {
      G(this, t, u, "f");
    }
    // @define_prop
    get committedData() {
      return K(this, r, "f");
    }
    set committedData(u) {
      G(this, r, u, "f");
    }
    // @define_prop
    get modified_() {
      return K(this, n, "f");
    }
    set modified_(u) {
      G(this, n, u, "f");
    }
    // @define_prop
    get legacyInitDone() {
      return K(this, a, "f");
    }
    set legacyInitDone(u) {
      G(this, a, u, "f");
    }
    // @define_prop
    get options() {
      return K(this, i, "f");
    }
    set options(u) {
      G(this, i, u, "f");
    }
    get [(t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = (C = [ce], $))]() {
      return K(this, s, "f");
    }
    set [d](u) {
      G(this, s, u, "f");
    }
    get [h = ae]() {
      return K(this, o, "f");
    }
    set [h](u) {
      G(this, o, u, "f");
    }
    get [b = ie]() {
      return K(this, c, "f");
    }
    set [b](u) {
      G(this, c, u, "f");
    }
    get [_ = re]() {
      return K(this, l, "f");
    }
    set [_](u) {
      G(this, l, u, "f");
    }
    /**
     * Создает модель и инициализирует данные.
     */
    constructor(u = {}, v) {
      t.set(this, (W(this, q), W(this, A, null))), r.set(this, (W(this, y), {})), n.set(this, {}), a.set(this, !1), i.set(this, {}), s.set(this, void 0), o.set(this, void 0), c.set(this, void 0), l.set(this, void 0), this.options = v, this.init(u), this.initLegacyFields();
    }
    getFieldMetaCache() {
      const u = Reflect.getOwnMetadata($, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata($, v) : null, w = this[$];
      if (w && w !== !0 && w.ownRef === u && w.protoRef === p)
        return w;
      const D = rs.fields(this), R = /* @__PURE__ */ new Map();
      for (const j of D)
        R.set(String(j.name), j);
      return this[$] = { ownRef: u, protoRef: p, list: D, map: R }, this[$];
    }
    getFieldMeta(u) {
      return this.getFieldMetaCache().map.get(String(u));
    }
    getSubmitMetaCache() {
      const u = Reflect.getOwnMetadata(ae, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(ae, v) : null, w = this[ae];
      if (w && w !== !0 && w.ownRef === u && w.protoRef === p)
        return w;
      const D = ts.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of D)
        R.set(String(I.name), I);
      const j = { ownRef: u, protoRef: p, list: D, map: R };
      return this[ae] = j, j;
    }
    getExcludeMetaCache() {
      const u = Reflect.getOwnMetadata(ie, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(ie, v) : null, w = this[ie];
      if (w && w !== !0 && w.ownRef === u && w.protoRef === p)
        return w;
      const D = is.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of D)
        R.set(String(I.name), I);
      const j = { ownRef: u, protoRef: p, list: D, map: R };
      return this[ie] = j, j;
    }
    getValidationMetaCache() {
      const u = Reflect.getOwnMetadata(re, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(re, v) : null, w = this[re];
      if (w && w !== !0 && w.ownRef === u && w.protoRef === p)
        return w;
      const D = as.fields(this), R = /* @__PURE__ */ new Map();
      for (const I of D)
        R.set(String(I.name), I);
      const j = { ownRef: u, protoRef: p, list: D, map: R };
      return this[re] = j, j;
    }
    /**
     * Инициализировать валидацию для поля или всех полей.
     */
    initValidation(u) {
      const v = this.validation;
      if (u)
        F(v, u);
      else
        for (let p in v)
          v[p];
    }
    /**
     * Полная инициализация модели и полей.
     */
    init(u = {}) {
      this.cloneForInit(u), this.defineData(this.initData);
    }
    /**
     * Инициализировать отдельное поле модели.
     */
    initField(u, v) {
      const p = this.getFieldMeta(u);
      if (p) {
        const w = String(p.name);
        Ir(this.initData, w) || B(this.initData, w, F(this, w));
        let R = p?.factory ? p.factory(this.initData, this) : F(this.initData, w);
        if (R === void 0 && !p?.factory) {
          const j = F(this, w);
          j !== void 0 && (R = j, B(this.initData, w, j));
        }
        this.defineFieldValue(u, R, p), v?.skipValidation || this.initValidation(u);
      }
    }
    initLegacyFields() {
      if (this.legacyInitDone)
        return;
      const u = this.getFieldMetaCache().list;
      if (u.some((v) => Object.prototype.hasOwnProperty.call(this, v.name))) {
        this.legacyInitDone = !0;
        for (let v of u) {
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
    createObservable(u, v, p, w = p) {
      return u = qr(u) ? u : ce.box(u), new Proxy(u, {
        get: (D, R, j) => {
          const I = Reflect.get(D, R, j);
          return I && typeof I == "object" && !(I instanceof e) && !qr(u) ? this.createObservable(I, String(R), v, `${w}.${String(R)}`) : I;
        },
        set: (D, R, j, I) => (u = j, this.checkChange(p, Reflect.get(this, p)), Reflect.set(D, R, j, I))
      });
    }
    /**
     * Определить getter/setter для поля модели.
     */
    defineFieldValue(u, v, p) {
      const w = p ?? this.getFieldMeta(u);
      return w.noObserve ? Reflect.defineProperty(this, w.name, { value: v }) : (v = ce.box(v), Reflect.defineProperty(this, w.name, {
        get: () => v.get(),
        set: (D) => {
          Y(() => v.set(D)), this.checkChange(w.name, v.get());
        },
        enumerable: !0,
        configurable: !0
      })), v;
    }
    /**
     * Сохранить исходные данные с глубоким клонированием.
     */
    cloneForInit(u = {}) {
      this.initData = u;
    }
    /**
     * Проверить изменение поля и обновить modified_.
     */
    checkChange(u, v) {
      const p = Ir(this.committedData, u) ? F(this.committedData, u) : F(this.initData, u), w = u && u in this.initData && !ci(p, v);
      return Y(() => {
        if (w) {
          B(this.modified_, u, p);
          return;
        }
        u in this.modified_ && ci(p, v) && delete this.modified_[u];
      }), w;
    }
    /**
     * Применить данные к полям модели.
     */
    defineData(u) {
      const v = this.getFieldMetaCache().map;
      for (let p in this)
        Object.prototype.hasOwnProperty.call(this, p) && v.has(p) && (B(this, p, F(u, p)), this.initField(p));
    }
    /**
     * Признак наличия изменений.
     */
    get dirty() {
      return !on(this.modified_);
    }
    /**
     * Зафиксировать все изменения.
     */
    commit() {
      for (let u of this.getFieldMetaCache().list)
        this.commitField(u.name);
      this.modified_ = {};
    }
    /**
     * Зафиксировать изменения конкретного поля.
     */
    commitField(u) {
      u in this.modified_ && B(this.committedData, u, F(this, u)), delete this.modified_[u], this.modified_ = Object.assign({}, this.modified_);
    }
    /**
     * Откатить изменения к последнему коммиту.
     */
    reject() {
      for (let u in this)
        u in this.modified_ && (B(this, u, F(this.modified_, u)), this.commitField(u), this.defineFieldValue(u, F(this, u)));
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
    loadData(u) {
      return this.init(u), this;
    }
    /**
     * Получить сериализованный дамп данных.
     */
    get dumpData() {
      this.initLegacyFields();
      const u = /* @__PURE__ */ Object.create({}), v = this.getSubmitMetaCache().map, p = this.getExcludeMetaCache().map, w = (R) => {
        const j = F(this, R), I = v.get(R), Oe = I?.callback;
        return typeof Oe == "function" ? Oe(j, this) : j;
      }, D = (R) => {
        const j = p.get(R);
        if (j)
          switch (typeof j.callback) {
            case "boolean":
              return !!j.callback;
            case "function":
              return j.callback(F(this, R), this);
          }
        return !1;
      };
      return this.getFieldMetaCache().list.forEach((R) => {
        var j;
        if (R.name in this) {
          if (!((j = this.options) === null || j === void 0) && j.byFields && !this.options.byFields.includes(R.name) || D(R.name))
            return;
          B(u, R.name, w(R.name));
        }
      }), u;
    }
    /**
     * Получить объект результатов валидации.
     */
    get validation() {
      this.initLegacyFields();
      const u = {};
      for (const v of this.getValidationMetaCache().list) {
        const p = String(v.name);
        B(u, p, v.callback(F(this, p), this) || "");
      }
      return u;
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
        loadData: (u) => this.loadData(u),
        reject: () => this.reject(),
        commit: () => this.commit(),
        commitField: (u) => this.commitField(u),
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
    M = [X], g = [H], f = [H], O = [H], S = [H], P = [X], k = [X], x = [(T = X).struct.bind(T)], E(e, null, C, { kind: "accessor", name: "initData", static: !1, private: !1, access: { has: (u) => "initData" in u, get: (u) => u.initData, set: (u, v) => {
      u.initData = v;
    } }, metadata: m }, A, y), E(e, null, M, { kind: "getter", name: "dirty", static: !1, private: !1, access: { has: (u) => "dirty" in u, get: (u) => u.dirty }, metadata: m }, null, q), E(e, null, g, { kind: "method", name: "commit", static: !1, private: !1, access: { has: (u) => "commit" in u, get: (u) => u.commit }, metadata: m }, null, q), E(e, null, f, { kind: "method", name: "commitField", static: !1, private: !1, access: { has: (u) => "commitField" in u, get: (u) => u.commitField }, metadata: m }, null, q), E(e, null, O, { kind: "method", name: "reject", static: !1, private: !1, access: { has: (u) => "reject" in u, get: (u) => u.reject }, metadata: m }, null, q), E(e, null, S, { kind: "method", name: "toInit", static: !1, private: !1, access: { has: (u) => "toInit" in u, get: (u) => u.toInit }, metadata: m }, null, q), E(e, null, P, { kind: "getter", name: "validation", static: !1, private: !1, access: { has: (u) => "validation" in u, get: (u) => u.validation }, metadata: m }, null, q), E(e, null, k, { kind: "getter", name: "validAndDirty", static: !1, private: !1, access: { has: (u) => "validAndDirty" in u, get: (u) => u.validAndDirty }, metadata: m }, null, q), E(e, null, x, { kind: "getter", name: "service", static: !1, private: !1, access: { has: (u) => "service" in u, get: (u) => u.service }, metadata: m }, null, q), m && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), e;
})();
const vr = function(t, r) {
  const n = z(t, r) ? void 0 : t, a = (o, c) => {
    const l = new dr(Object.assign(Object.assign({}, n), { name: String(c), ctx: null }));
    V(l.metadataKey, [...N(l.metadataKey, o, new Array()), l], o), Object.getOwnPropertyDescriptor(o, c) || Object.defineProperty(o, c, {
      configurable: !0,
      enumerable: !0,
      get() {
        if (Object.prototype.hasOwnProperty.call(this, c))
          return Reflect.get(this, c);
        if (this.initData && c in this.initData && typeof this.initField == "function")
          return this.initField.call(this, String(c), { skipValidation: !0 }), Reflect.get(this, c);
      },
      set(h) {
        if (this.initData && !(c in this.initData) && Reflect.set(this.initData, c, h), typeof this.initField == "function") {
          this.initField.call(this, String(c), { skipValidation: !0 });
          return;
        }
        Object.defineProperty(this, c, {
          value: h,
          writable: !0,
          configurable: !0,
          enumerable: !0
        });
      }
    });
  }, i = (o) => {
    o.addInitializer(function() {
      if (this instanceof ns && typeof this.initField == "function") {
        const c = new dr(Object.assign(Object.assign({}, n), { name: String(o.name), ctx: o }));
        pe(Object.getPrototypeOf(this), c), this.initField.call(this, String(o.name));
      }
    });
  };
  function s(o, c) {
    if (z(o, c)) {
      a(o, c);
      return;
    }
    if (L(c))
      return i(c), c.kind === "field" ? (l) => l : c;
  }
  return z(t, r) ? s(t, r) : n && !L(r) ? (o, c) => s(o, c) : L(r) ? s(void 0, r) : (o, c) => s(o, c);
}, ss = (e) => !e || typeof e != "object" ? { noObserve: !0 } : Object.assign(Object.assign({}, e), { noObserve: !0 }), os = function(t, r) {
  return z(t, r) || L(r) ? vr({ noObserve: !0 })(t, r) : vr(ss(t));
};
vr.noObserve = os;
function Ds(e) {
  const t = (a, i) => {
    const s = new lr({ callback: e, name: String(i) }), o = N(s.metadataKey, a, new Array());
    V(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new lr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      pe(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (z(a, i)) {
      t(a, i);
      return;
    }
    if (L(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
function Es(e) {
  const t = (a, i) => {
    const s = new cr({ callback: e, name: String(i) }), o = N(s.metadataKey, a, new Array());
    V(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new cr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      pe(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (z(a, i)) {
      t(a, i);
      return;
    }
    if (L(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
const us = (e) => ({
  items: e.items.map((t) => {
    var r, n;
    return {
      name: (n = (r = t.constructor) === null || r === void 0 ? void 0 : r.name) !== null && n !== void 0 ? n : "Model",
      data: t.service.dumpData
    };
  })
});
let ve = (() => {
  var e, t, r;
  let n = [], a, i = [], s = [], o, c = [], l = [], d, h, b, _, T, q, C, A, y, M;
  return e = class {
    get items() {
      return K(this, t, "f");
    }
    set items(f) {
      G(this, t, f, "f");
    }
    get _cash() {
      return K(this, r, "f");
    }
    set _cash(f) {
      G(this, r, f, "f");
    }
    constructor() {
      t.set(this, (W(this, n), W(this, i, []))), r.set(this, (W(this, s), W(this, c, []))), this._model = W(this, l), or(this);
    }
    add(f) {
      this.items.push(f);
    }
    addMany(f) {
      f?.length && (this.items = this.items.concat(f));
    }
    remove(f) {
      this.items = this.items.filter((O) => O !== f);
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
    findBy(f, O) {
      return this.items.find((S) => S?.[f] === O);
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
    applyLoaded(f, O = {}) {
      const { model: S, mode: P = "replace", cash: k = !0 } = O, x = S === void 0 ? this._model : S;
      k && this.setCash(f);
      const m = x ? f.map((u) => new x(u)) : f;
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
    a = [ce], o = [ce], d = [H], h = [H], b = [H], _ = [H], T = [X], q = [X], C = [X], A = [H], y = [H], M = [H], E(e, null, a, { kind: "accessor", name: "items", static: !1, private: !1, access: { has: (f) => "items" in f, get: (f) => f.items, set: (f, O) => {
      f.items = O;
    } }, metadata: g }, i, s), E(e, null, o, { kind: "accessor", name: "_cash", static: !1, private: !1, access: { has: (f) => "_cash" in f, get: (f) => f._cash, set: (f, O) => {
      f._cash = O;
    } }, metadata: g }, c, l), E(e, null, d, { kind: "method", name: "add", static: !1, private: !1, access: { has: (f) => "add" in f, get: (f) => f.add }, metadata: g }, null, n), E(e, null, h, { kind: "method", name: "addMany", static: !1, private: !1, access: { has: (f) => "addMany" in f, get: (f) => f.addMany }, metadata: g }, null, n), E(e, null, b, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (f) => "remove" in f, get: (f) => f.remove }, metadata: g }, null, n), E(e, null, _, { kind: "method", name: "clear", static: !1, private: !1, access: { has: (f) => "clear" in f, get: (f) => f.clear }, metadata: g }, null, n), E(e, null, T, { kind: "getter", name: "size", static: !1, private: !1, access: { has: (f) => "size" in f, get: (f) => f.size }, metadata: g }, null, n), E(e, null, q, { kind: "getter", name: "snapshot", static: !1, private: !1, access: { has: (f) => "snapshot" in f, get: (f) => f.snapshot }, metadata: g }, null, n), E(e, null, C, { kind: "getter", name: "cash", static: !1, private: !1, access: { has: (f) => "cash" in f, get: (f) => f.cash }, metadata: g }, null, n), E(e, null, A, { kind: "method", name: "reset", static: !1, private: !1, access: { has: (f) => "reset" in f, get: (f) => f.reset }, metadata: g }, null, n), E(e, null, y, { kind: "method", name: "applyLoaded", static: !1, private: !1, access: { has: (f) => "applyLoaded" in f, get: (f) => f.applyLoaded }, metadata: g }, null, n), E(e, null, M, { kind: "method", name: "setCash", static: !1, private: !1, access: { has: (f) => "setCash" in f, get: (f) => f.setCash }, metadata: g }, null, n), g && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: g });
  })(), e;
})();
const Si = function(t) {
  return new.target ? Reflect.construct(ve, [], new.target) : class extends ve {
    constructor() {
      super(), this._model = t;
    }
  };
};
Si.prototype = ve.prototype;
Object.setPrototypeOf(Si, ve);
function ks(e) {
  return Z(e, "instance");
}
function xs(e) {
  return ((t, r) => Hi(e)(t, r));
}
function Fs(e, t) {
  const r = (n, a) => {
    var i;
    const s = typeof e == "string" ? { id: e } : typeof e == "object" ? e : { id: (i = a?.name) !== null && i !== void 0 ? i : n?.name };
    hi(s)(n, a);
  };
  return typeof e == "function" ? r(e, t) : (n, a) => r(n, a);
}
class Ls {
}
const sr = new hr(), cs = (e) => typeof Node < "u" && e instanceof Node, ls = (e) => {
  if (e == null)
    return !0;
  const t = typeof e;
  return t === "function" ? !1 : t !== "object" ? !0 : Ii(e) ? !1 : !cs(e);
}, fs = (e, t) => {
  if (!ls(t))
    throw new TypeError(`PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${e}".`);
};
function Ks(e, t) {
  return Di((r = {}) => {
    const { viewModel: n } = r, a = Ri(r, ["viewModel"]), { instance: i } = Ei(() => {
      const c = Z(e) || (typeof e != "string" ? { instance: new e() } : void 0);
      return { instance: c?.instance };
    }, [e]), s = n ?? i;
    if (Pi(() => {
      if (s)
        return typeof s.onInit == "function" && s.onInit(), () => {
          typeof s.onDispose == "function" && s.onDispose();
        };
    }, [s]), s) {
      const o = sr.fields(s), c = o.length > 0 ? o : sr.fields(Object.getPrototypeOf(s));
      for (const l in a)
        if (c instanceof Array) {
          const d = c.find((h) => h.name === l);
          if (d) {
            const h = F(a, l);
            fs(l, h), B(s, d.originName, h);
          }
        }
      return V(sr.metadataKey, c, s), t(Object.assign(Object.assign({}, a), { viewModel: s }));
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
}, ds = ["load", "save", "remove", "delete"], li = /* @__PURE__ */ Symbol("SERVICE_STATE"), ue = /* @__PURE__ */ Symbol("LAST_CMD"), de = /* @__PURE__ */ Symbol("LAST_LOAD_LABEL");
function hs(e) {
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
function Ai(e) {
  e[li] || (Object.defineProperty(e, li, { value: !0 }), Object.assign(e, {
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
      const r = e[ue];
      (t = r?.resetError) === null || t === void 0 || t.call(r), Q(e, r, e[de]);
    },
    cancel: () => {
      var t;
      const r = e[ue];
      (t = r?.cancel) === null || t === void 0 || t.call(r), Q(e, r, e[de]);
    },
    dispose: () => {
      var t;
      const r = e[ue];
      (t = r?.dispose) === null || t === void 0 || t.call(r), Q(e, r, e[de]);
    },
    clearQueue: () => {
      var t;
      const r = e[ue];
      (t = r?.clearQueue) === null || t === void 0 || t.call(r);
    }
  }));
}
function Q(e, t, r) {
  t && (t.state === _r.load && r ? e.state = r : e.state = t.state, e.isExecuting = t.isExecuting, e.activeCount = t.activeCount, e.isCanceled = t.isCanceled, e.isDisposed = t.isDisposed, e.error = t.error, e.result = t.result);
}
function vs(e, t, r, n) {
  return Ai(e), Object.assign(Object.assign({}, n), { onStart: (...a) => {
    var i, s;
    const o = r?.();
    e[ue] = o, e[de] = t, e.state = t, e.isExecuting = !0, e.isCanceled = !1, (!((i = void 0) !== null && i !== void 0) || i) && (e.error = null), Q(e, o, t), (s = void 0) === null || s === void 0 || s.call(n, ...a);
  }, onSuccess: (a, ...i) => {
    var s;
    Q(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(n, a, ...i);
  }, onError: (a) => {
    var i;
    Q(e, r?.(), t), (i = void 0) === null || i === void 0 || i.call(n, a);
  }, onCancel: () => {
    var a;
    Q(e, r?.(), t), (a = void 0) === null || a === void 0 || a.call(n);
  }, onFinally: (a, ...i) => {
    var s;
    Q(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(n, a, ...i);
  } });
}
function _s(e, t) {
  Ai(e);
  const r = t ? Object.assign({}, t) : {};
  if (!t) {
    for (const n of ds)
      if (typeof e[n] == "function") {
        const i = ee[n];
        i && (r[n] = i);
      }
  }
  for (const [n, a] of Object.entries(r)) {
    if (!a)
      continue;
    const i = e[n];
    if (typeof i != "function" || "execute" in i && typeof i.execute == "function")
      continue;
    const s = typeof a == "string" ? a : Reflect.get(ee, n);
    let o;
    const c = vs(e, s ?? ee.load, () => o);
    o = Ci((...d) => he(this, void 0, void 0, function* () {
      return i.apply(e, d);
    }), c);
    const l = hs(o);
    s && (e.states[s] = s), Object.defineProperty(e, n, { value: l, configurable: !0, writable: !0 });
  }
}
class Gs {
  constructor() {
    this.state = ee.ready, this.states = Object.assign({}, ee), this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, _s(this);
  }
}
const _r = {
  load: "load",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, fe = () => {
}, ps = {
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
class gs {
  /**
   * @param fn Асинхронная функция, которую выполняет команда.
   * @param opt Опции команды.
   */
  constructor(t, r) {
    var n, a, i, s;
    this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, this.states = _r, this.queue = [], this.runningPromise = null, this.queueTail = Promise.resolve(), this.cancelToken = 0, this.fn = t, this.opt = Object.assign({ concurrency: (n = r?.concurrency) !== null && n !== void 0 ? n : "ignore", trackError: (a = r?.trackError) !== null && a !== void 0 ? a : !0, resetErrorOnExecute: (i = r?.resetErrorOnExecute) !== null && i !== void 0 ? i : !0, swallowError: (s = r?.swallowError) !== null && s !== void 0 ? s : !0 }, r), Mi(this, ps, { autoBind: !0 });
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
    return _r[t];
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
    const n = (i) => {
      this.runningPromise = i;
      const s = () => {
        this.runningPromise === i && (this.runningPromise = null);
      };
      return i.then(s, s), i;
    }, a = () => he(this, void 0, void 0, function* () {
      var i, s, o, c, l, d, h, b;
      if (this.isDisposed)
        return;
      Y(() => {
        this.activeCount += 1, this.isExecuting = this.activeCount > 0, this.isCanceled = !1, this.result = void 0, this.opt.trackError && this.opt.resetErrorOnExecute && (this.error = null);
      });
      const _ = this.cancelToken;
      let T = !1, q = !1, C = null, A = null;
      try {
        (s = (i = this.opt).onStart) === null || s === void 0 || s.call(i, ...t), A = this.fn(...t);
        const y = yield A;
        if (q = this.cancelToken !== _, q) {
          Y(() => {
            this.isCanceled = !0, this.result = void 0;
          });
          return;
        }
        return Y(() => {
          this.result = y;
        }), (c = (o = this.opt).onSuccess) === null || c === void 0 || c.call(o, y, ...t), T = !0, y;
      } catch (y) {
        if (C = y, q = this.cancelToken !== _, Y(() => {
          this.result = void 0, this.opt.trackError && (this.error = y);
        }), (d = (l = this.opt).onError) === null || d === void 0 || d.call(l, y), !this.opt.swallowError)
          throw y;
        return;
      } finally {
        Y(() => {
          this.activeCount = Math.max(0, this.activeCount - 1), this.isExecuting = this.activeCount > 0;
        }), !q && this.cancelToken !== _ && (q = !0), (b = (h = this.opt).onFinally) === null || b === void 0 || b.call(h, { ok: T, canceled: q, error: C }, ...t);
      }
    });
    switch (this.opt.concurrency) {
      case "parallel":
        return n(a());
      case "restart":
        return this.cancel(), n(a());
      case "queue": {
        const i = this.opt.queueLimit;
        if (typeof i == "number" && i > 0 && this.queue.length >= i)
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
        const c = () => he(this, void 0, void 0, function* () {
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
        }), l = o ? c() : this.queueTail.then(c, c);
        return this.queueTail = l.then(fe, fe), n(s.promise);
      }
      default:
        return this.isExecuting && this.runningPromise ? this.runningPromise : n(a());
    }
  }
}
function Ci(e, t) {
  return new gs(e, t);
}
function Hs(e, t) {
  const r = ji(e), n = /* @__PURE__ */ new Set(), a = t?.onCancel;
  return Ci((...s) => {
    const o = r(...s);
    n.add(o);
    const c = () => {
      n.delete(o);
    };
    return o.then(c, c), new Promise((l, d) => {
      o.then(l, (h) => {
        const b = h;
        if (Ti(b)) {
          l(void 0);
          return;
        }
        d(b);
      });
    });
  }, Object.assign(Object.assign({}, t), { onCancel: () => {
    var s;
    for (const o of n)
      (s = o.cancel) === null || s === void 0 || s.call(o);
    a?.();
  } }));
}
function Vs(e) {
  return function(...t) {
    return Y(() => e.apply(this, t));
  };
}
export {
  Gs as CommandService,
  _r as DEFAULT_STATES,
  Z as GetService,
  ks as GetStore,
  Hi as Inject,
  xs as InjectStore,
  Rs as MakeObservable,
  ns as Model,
  js as PropFromView,
  hi as Service,
  As as SetService,
  Fs as Store,
  Si as StoreBase,
  Ss as TODO,
  Ls as ViewModel,
  _s as applyCommandMethods,
  Ci as asyncCommand,
  Vs as commandAction,
  V as defineMetadata,
  Cs as define_prop,
  Ts as exclude,
  vr as field,
  Hs as flowCommand,
  Ki as getExecutingFunctionNameByStack,
  N as getOwnMetadata,
  Os as isSerializable,
  Ds as submit,
  Es as validation,
  Ks as view
};
