import "reflect-metadata";
import { d as fe, _ as G, a as V, b as N, c as D, e as Ai } from "./tslib.es6-DQYNRcek.js";
import { makeObservable as ir, observable as oe, isObservable as mr, runInAction as U, computed as $, action as H, flow as Ci, isFlowCancellationError as ji, makeAutoObservable as Ti } from "mobx";
import { observer as Mi } from "mobx-react";
import { useMemo as Ei, useEffect as Di, isValidElement as Pi } from "react";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var we, br;
function li() {
  if (br) return we;
  br = 1;
  var e = typeof ce == "object" && ce && ce.Object === Object && ce;
  return we = e, we;
}
var qe, wr;
function B() {
  if (wr) return qe;
  wr = 1;
  var e = li(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return qe = r, qe;
}
var Oe, qr;
function vr() {
  if (qr) return Oe;
  qr = 1;
  var e = B(), t = e.Symbol;
  return Oe = t, Oe;
}
var Se, Or;
function Ii() {
  if (Or) return Se;
  Or = 1;
  var e = vr(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var o = r.call(s, a), u = s[a];
    try {
      s[a] = void 0;
      var l = !0;
    } catch {
    }
    var d = n.call(s);
    return l && (o ? s[a] = u : delete s[a]), d;
  }
  return Se = i, Se;
}
var Re, Sr;
function ki() {
  if (Sr) return Re;
  Sr = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Re = r, Re;
}
var Ae, Rr;
function he() {
  if (Rr) return Ae;
  Rr = 1;
  var e = vr(), t = Ii(), r = ki(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : n : i && i in Object(o) ? t(o) : r(o);
  }
  return Ae = s, Ae;
}
var Ce, Ar;
function fi() {
  if (Ar) return Ce;
  Ar = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ce = e, Ce;
}
var je, Cr;
function _r() {
  if (Cr) return je;
  Cr = 1;
  var e = he(), t = fi(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!t(o))
      return !1;
    var u = e(o);
    return u == n || u == a || u == r || u == i;
  }
  return je = s, je;
}
var xi = _r();
const Fi = /* @__PURE__ */ hr(xi), K = (e, t, r) => Reflect.getOwnMetadata(e, t) || r || {}, F = (e, t, r) => Reflect.defineMetadata(e, t, r);
function As(...e) {
  try {
    return JSON.stringify(e), !0;
  } catch {
    return !1;
  }
}
function Li(e) {
  if (e && typeof e == "string") {
    let [t] = e.split(`
`)[2].replace(/at (get)?/, "").match(/.*/g) || [];
    return t && (t = t.trim()), t;
  }
}
const jr = {}, Te = [];
let Tr = !1;
const Cs = (e, ...t) => {
  const r = new Error().stack;
  if (!Tr)
    console.log("%c TODO", "background: #222; color: #bada55", jr), Tr = !0;
  else {
    const a = Li(r);
    Te.includes(a) === !1 && (Te.push(a), Reflect.set(jr, `${Te.length}) ${e}`, { msg: t, get path() {
      return console.info(t, a), a;
    } }));
  }
  function n(...a) {
  }
  return n;
}, z = (e, t) => !!e && (typeof t == "string" || typeof t == "symbol"), L = (e) => !!e && typeof e == "object" && "kind" in e, Ki = (e) => ({
  kind: "class",
  name: e,
  addInitializer: () => {
  },
  metadata: {}
}), Q = /* @__PURE__ */ Symbol("service-key"), nr = new Proxy({}, Reflect);
function Gi(e) {
  const t = (n, a) => {
    Object.defineProperty(n, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        if (Object.prototype.hasOwnProperty.call(this, a))
          return Reflect.get(this, a);
        const i = J(e, "instance");
        if (i)
          return Object.defineProperty(this, a, { value: i, writable: !0, configurable: !0, enumerable: !0 }), i;
      },
      set(i) {
        const s = J(e, "instance");
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
      return fe(this, void 0, void 0, function* () {
        const i = J(e, "instance");
        i && Object.hasOwn(this, a.name) && Reflect.set(this, a.name, i);
      });
    }), (i) => i;
  }
  return r;
}
function J(e, t) {
  var r;
  const n = K(Q, nr);
  if (typeof e != "string") {
    const a = K(Q, e);
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
function di(e, t) {
  const r = (a, i) => {
    const s = String(typeof e == "string" && e || typeof e == "object" && e?.id || i?.name || a?.name), o = K(Q, nr), u = new Proxy({
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
    o[s] = u, F(Q, o, nr), F(Q, o[s], a);
  };
  function n(a, i) {
    var s, o;
    const u = a.__legacy_source__, l = L(i) ? i : Ki((o = (s = u?.name) !== null && s !== void 0 ? s : a?.name) !== null && o !== void 0 ? o : "");
    r(a, l), u && u !== a && F(Q, K(Q, a), u);
  }
  return Fi(e) ? n(e, t) : e ? (a, i) => n(a, i) : n;
}
const js = (e, t) => {
  const { kind: r = "class", name: n = "", addInitializer: a = () => {
  }, metadata: i } = t?.ctx || {};
  return di(t)(e, {
    kind: r,
    name: n,
    addInitializer: a,
    metadata: i
  }), J(e).instance;
};
function Me(e) {
  var t, r, n;
  const a = Object.assign({ enumerable: !1, writable: !0 }, e), i = Object.assign({ configurable: !0, enumerable: !1, writable: !0 }, e), s = {
    configurable: (t = i.configurable) !== null && t !== void 0 ? t : !0,
    enumerable: (r = i.enumerable) !== null && r !== void 0 ? r : !1,
    writable: (n = i.writable) !== null && n !== void 0 ? n : !0,
    value: void 0
  };
  return function(o, u) {
    if (z(o, u)) {
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
    if (L(u)) {
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
function Ts(e, t) {
  return z(e, t) || L(t) ? Me()(e, t) : Me(e);
}
function Ms(e, t) {
  const r = (i) => class extends i {
    constructor(...s) {
      super(...s), ir(this);
    }
  }, n = (i, s) => {
    if (typeof Reflect?.getOwnMetadataKeys == "function")
      for (const o of Reflect.getOwnMetadataKeys(i)) {
        const u = Reflect.getOwnMetadata(o, i);
        Reflect.defineMetadata(o, u, s);
      }
  };
  function a(i, s) {
    if (!L(s)) {
      const o = i, u = r(o);
      return Object.defineProperty(u, "__legacy_source__", { value: o, configurable: !0 }), n(o, u), u;
    }
    s.addInitializer(function() {
      ir(this);
    });
  }
  return e && !L(t) || e ? a(e, t) : a;
}
const Y = /* @__PURE__ */ Symbol("field-key"), ee = /* @__PURE__ */ Symbol("validation-key"), te = /* @__PURE__ */ Symbol("submit-key"), re = /* @__PURE__ */ Symbol("exclude-key"), Vi = /* @__PURE__ */ Symbol("prop-from-view-key");
class Z {
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
        for (const u of o) {
          const l = u?.name, d = String(l);
          a.has(d) || (a.add(d), r.push(u), n.set(d, u));
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
    return t instanceof Z || Object.getOwnPropertyNames(this).some((r) => Object.keys(t).includes(r));
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
class sr extends Z {
  constructor() {
    super(...arguments), this.metadataKey = ee;
  }
}
class or extends Z {
  constructor() {
    super(...arguments), this.metadataKey = te;
  }
}
class cr extends Z {
  constructor() {
    super(...arguments), this.metadataKey = re;
  }
}
class ur extends Z {
  /**
   * Создать метаданные поля модели.
   */
  constructor(t = {}) {
    super(t), this.factory = null, this.mapping = null, this.noObserve = null, this.collectChanges = !1, this.name = null, this.ctx = null, this.metadataKey = Y, this.isInit = !1, this.factory = t.factory, this.mapping = t.mapping, this.noObserve = t.noObserve, this.name = t.name, this.ctx = t.ctx, this.collectChanges = !!t.collectChanges;
  }
}
class lr extends Z {
  /**
   * Создать метаданные для PropFromView.
   */
  constructor(t = {}) {
    super(t), this.metadataKey = Vi;
    for (const r in this)
      t && r in t && (this[r] = Reflect.get(t, r));
  }
}
function Es(e) {
  const t = (a, i) => {
    const s = new lr({ name: e, originName: String(i) });
    s.name = e, s.originName = String(i);
    const o = K(s.metadataKey, a, new Array());
    F(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new lr(), s = i.fields(this);
      for (const o in this)
        s instanceof Array && a.name === o && (i.name = e, i.originName = o, i.value = this[o], s.push(i));
      F(i.metadataKey, s, this);
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
const Mr = /* @__PURE__ */ new WeakMap(), Hi = (e, t) => {
  if (!e)
    return;
  let r = Mr.get(e);
  r || (r = /* @__PURE__ */ new Set(), Mr.set(e, r));
  const n = String(t.name);
  if (r.has(n))
    return;
  const a = K(t.metadataKey, e, new Array());
  a.some((i) => i.name === n) || F(t.metadataKey, [...a, t], e), r.add(n);
};
function Ds(e) {
  const t = (a, i) => {
    const s = new cr({ callback: e, name: String(i) }), o = K(s.metadataKey, a, new Array());
    F(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new cr({ callback: e, name: String(a.name) });
      Hi(Object.getPrototypeOf(this), i);
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
var Ee, Er;
function hi() {
  if (Er) return Ee;
  Er = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Ee = t, Ee;
}
var De, Dr;
function zi() {
  if (Dr) return De;
  Dr = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return De = e, De;
}
var Pe, Pr;
function Bi() {
  if (Pr) return Pe;
  Pr = 1;
  var e = zi(), t = e(Object.keys, Object);
  return Pe = t, Pe;
}
var Ie, Ir;
function vi() {
  if (Ir) return Ie;
  Ir = 1;
  var e = hi(), t = Bi(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var s = [];
    for (var o in Object(i))
      n.call(i, o) && o != "constructor" && s.push(o);
    return s;
  }
  return Ie = a, Ie;
}
var ke, kr;
function Ni() {
  if (kr) return ke;
  kr = 1;
  var e = B(), t = e["__core-js_shared__"];
  return ke = t, ke;
}
var xe, xr;
function Ui() {
  if (xr) return xe;
  xr = 1;
  var e = Ni(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return xe = r, xe;
}
var Fe, Fr;
function _i() {
  if (Fr) return Fe;
  Fr = 1;
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
  return Fe = r, Fe;
}
var Le, Lr;
function Wi() {
  if (Lr) return Le;
  Lr = 1;
  var e = _r(), t = Ui(), r = fi(), n = _i(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, d = RegExp(
    "^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(b) {
    if (!r(b) || t(b))
      return !1;
    var _ = e(b) ? d : i;
    return _.test(n(b));
  }
  return Le = h, Le;
}
var Ke, Kr;
function Yi() {
  if (Kr) return Ke;
  Kr = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ke = e, Ke;
}
var Ge, Gr;
function ae() {
  if (Gr) return Ge;
  Gr = 1;
  var e = Wi(), t = Yi();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Ge = r, Ge;
}
var Ve, Vr;
function Qi() {
  if (Vr) return Ve;
  Vr = 1;
  var e = ae(), t = B(), r = e(t, "DataView");
  return Ve = r, Ve;
}
var He, Hr;
function gr() {
  if (Hr) return He;
  Hr = 1;
  var e = ae(), t = B(), r = e(t, "Map");
  return He = r, He;
}
var ze, zr;
function $i() {
  if (zr) return ze;
  zr = 1;
  var e = ae(), t = B(), r = e(t, "Promise");
  return ze = r, ze;
}
var Be, Br;
function Ji() {
  if (Br) return Be;
  Br = 1;
  var e = ae(), t = B(), r = e(t, "Set");
  return Be = r, Be;
}
var Ne, Nr;
function Xi() {
  if (Nr) return Ne;
  Nr = 1;
  var e = ae(), t = B(), r = e(t, "WeakMap");
  return Ne = r, Ne;
}
var Ue, Ur;
function gi() {
  if (Ur) return Ue;
  Ur = 1;
  var e = Qi(), t = gr(), r = $i(), n = Ji(), a = Xi(), i = he(), s = _i(), o = "[object Map]", u = "[object Object]", l = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", b = "[object DataView]", _ = s(e), T = s(t), q = s(r), A = s(n), R = s(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != b || t && y(new t()) != o || r && y(r.resolve()) != l || n && y(new n()) != d || a && y(new a()) != h) && (y = function(M) {
    var p = i(M), f = p == u ? M.constructor : void 0, O = f ? s(f) : "";
    if (O)
      switch (O) {
        case _:
          return b;
        case T:
          return o;
        case q:
          return l;
        case A:
          return d;
        case R:
          return h;
      }
    return p;
  }), Ue = y, Ue;
}
var We, Wr;
function ve() {
  if (Wr) return We;
  Wr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return We = e, We;
}
var Ye, Yr;
function Zi() {
  if (Yr) return Ye;
  Yr = 1;
  var e = he(), t = ve(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Ye = n, Ye;
}
var Qe, Qr;
function pi() {
  if (Qr) return Qe;
  Qr = 1;
  var e = Zi(), t = ve(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return Qe = i, Qe;
}
var $e, $r;
function _e() {
  if ($r) return $e;
  $r = 1;
  var e = Array.isArray;
  return $e = e, $e;
}
var Je, Jr;
function yi() {
  if (Jr) return Je;
  Jr = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Je = t, Je;
}
var Xe, Xr;
function mi() {
  if (Xr) return Xe;
  Xr = 1;
  var e = _r(), t = yi();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Xe = r, Xe;
}
var ie = { exports: {} }, Ze, Zr;
function en() {
  if (Zr) return Ze;
  Zr = 1;
  function e() {
    return !1;
  }
  return Ze = e, Ze;
}
ie.exports;
var ea;
function pr() {
  return ea || (ea = 1, (function(e, t) {
    var r = B(), n = en(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, l = u || n;
    e.exports = l;
  })(ie, ie.exports)), ie.exports;
}
var et, ta;
function tn() {
  if (ta) return et;
  ta = 1;
  var e = he(), t = yi(), r = ve(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", l = "[object Map]", d = "[object Number]", h = "[object Object]", b = "[object RegExp]", _ = "[object Set]", T = "[object String]", q = "[object WeakMap]", A = "[object ArrayBuffer]", R = "[object DataView]", y = "[object Float32Array]", M = "[object Float64Array]", p = "[object Int8Array]", f = "[object Int16Array]", O = "[object Int32Array]", S = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", x = "[object Uint32Array]", m = {};
  m[y] = m[M] = m[p] = m[f] = m[O] = m[S] = m[P] = m[k] = m[x] = !0, m[n] = m[a] = m[A] = m[i] = m[R] = m[s] = m[o] = m[u] = m[l] = m[d] = m[h] = m[b] = m[_] = m[T] = m[q] = !1;
  function c(v) {
    return r(v) && t(v.length) && !!m[e(v)];
  }
  return et = c, et;
}
var tt, ra;
function rn() {
  if (ra) return tt;
  ra = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return tt = e, tt;
}
var ne = { exports: {} };
ne.exports;
var aa;
function an() {
  return aa || (aa = 1, (function(e, t) {
    var r = li(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && r.process, o = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(ne, ne.exports)), ne.exports;
}
var rt, ia;
function yr() {
  if (ia) return rt;
  ia = 1;
  var e = tn(), t = rn(), r = an(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return rt = a, rt;
}
var at, na;
function nn() {
  if (na) return at;
  na = 1;
  var e = vi(), t = gi(), r = pi(), n = _e(), a = mi(), i = pr(), s = hi(), o = yr(), u = "[object Map]", l = "[object Set]", d = Object.prototype, h = d.hasOwnProperty;
  function b(_) {
    if (_ == null)
      return !0;
    if (a(_) && (n(_) || typeof _ == "string" || typeof _.splice == "function" || i(_) || o(_) || r(_)))
      return !_.length;
    var T = t(_);
    if (T == u || T == l)
      return !_.size;
    if (s(_))
      return !e(_).length;
    for (var q in _)
      if (h.call(_, q))
        return !1;
    return !0;
  }
  return at = b, at;
}
var sn = nn();
const on = /* @__PURE__ */ hr(sn);
var it, sa;
function cn() {
  if (sa) return it;
  sa = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return it = e, it;
}
var nt, oa;
function bi() {
  if (oa) return nt;
  oa = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return nt = e, nt;
}
var st, ca;
function ge() {
  if (ca) return st;
  ca = 1;
  var e = bi();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return st = t, st;
}
var ot, ua;
function un() {
  if (ua) return ot;
  ua = 1;
  var e = ge(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : r.call(i, s, 1), --this.size, !0;
  }
  return ot = n, ot;
}
var ct, la;
function ln() {
  if (la) return ct;
  la = 1;
  var e = ge();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return ct = t, ct;
}
var ut, fa;
function fn() {
  if (fa) return ut;
  fa = 1;
  var e = ge();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return ut = t, ut;
}
var lt, da;
function dn() {
  if (da) return lt;
  da = 1;
  var e = ge();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return lt = t, lt;
}
var ft, ha;
function pe() {
  if (ha) return ft;
  ha = 1;
  var e = cn(), t = un(), r = ln(), n = fn(), a = dn();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ft = i, ft;
}
var dt, va;
function hn() {
  if (va) return dt;
  va = 1;
  var e = pe();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return dt = t, dt;
}
var ht, _a;
function vn() {
  if (_a) return ht;
  _a = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return ht = e, ht;
}
var vt, ga;
function _n() {
  if (ga) return vt;
  ga = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return vt = e, vt;
}
var _t, pa;
function gn() {
  if (pa) return _t;
  pa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return _t = e, _t;
}
var gt, ya;
function ye() {
  if (ya) return gt;
  ya = 1;
  var e = ae(), t = e(Object, "create");
  return gt = t, gt;
}
var pt, ma;
function pn() {
  if (ma) return pt;
  ma = 1;
  var e = ye();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return pt = t, pt;
}
var yt, ba;
function yn() {
  if (ba) return yt;
  ba = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return yt = e, yt;
}
var mt, wa;
function mn() {
  if (wa) return mt;
  wa = 1;
  var e = ye(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === t ? void 0 : o;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return mt = a, mt;
}
var bt, qa;
function bn() {
  if (qa) return bt;
  qa = 1;
  var e = ye(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return bt = n, bt;
}
var wt, Oa;
function wn() {
  if (Oa) return wt;
  Oa = 1;
  var e = ye(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return wt = r, wt;
}
var qt, Sa;
function qn() {
  if (Sa) return qt;
  Sa = 1;
  var e = pn(), t = yn(), r = mn(), n = bn(), a = wn();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, qt = i, qt;
}
var Ot, Ra;
function On() {
  if (Ra) return Ot;
  Ra = 1;
  var e = qn(), t = pe(), r = gr();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Ot = n, Ot;
}
var St, Aa;
function Sn() {
  if (Aa) return St;
  Aa = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return St = e, St;
}
var Rt, Ca;
function me() {
  if (Ca) return Rt;
  Ca = 1;
  var e = Sn();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Rt = t, Rt;
}
var At, ja;
function Rn() {
  if (ja) return At;
  ja = 1;
  var e = me();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return At = t, At;
}
var Ct, Ta;
function An() {
  if (Ta) return Ct;
  Ta = 1;
  var e = me();
  function t(r) {
    return e(this, r).get(r);
  }
  return Ct = t, Ct;
}
var jt, Ma;
function Cn() {
  if (Ma) return jt;
  Ma = 1;
  var e = me();
  function t(r) {
    return e(this, r).has(r);
  }
  return jt = t, jt;
}
var Tt, Ea;
function jn() {
  if (Ea) return Tt;
  Ea = 1;
  var e = me();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Tt = t, Tt;
}
var Mt, Da;
function wi() {
  if (Da) return Mt;
  Da = 1;
  var e = On(), t = Rn(), r = An(), n = Cn(), a = jn();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Mt = i, Mt;
}
var Et, Pa;
function Tn() {
  if (Pa) return Et;
  Pa = 1;
  var e = pe(), t = gr(), r = wi(), n = 200;
  function a(i, s) {
    var o = this.__data__;
    if (o instanceof e) {
      var u = o.__data__;
      if (!t || u.length < n - 1)
        return u.push([i, s]), this.size = ++o.size, this;
      o = this.__data__ = new r(u);
    }
    return o.set(i, s), this.size = o.size, this;
  }
  return Et = a, Et;
}
var Dt, Ia;
function Mn() {
  if (Ia) return Dt;
  Ia = 1;
  var e = pe(), t = hn(), r = vn(), n = _n(), a = gn(), i = Tn();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Dt = s, Dt;
}
var Pt, ka;
function En() {
  if (ka) return Pt;
  ka = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Pt = t, Pt;
}
var It, xa;
function Dn() {
  if (xa) return It;
  xa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return It = e, It;
}
var kt, Fa;
function Pn() {
  if (Fa) return kt;
  Fa = 1;
  var e = wi(), t = En(), r = Dn();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, kt = n, kt;
}
var xt, La;
function In() {
  if (La) return xt;
  La = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return xt = e, xt;
}
var Ft, Ka;
function kn() {
  if (Ka) return Ft;
  Ka = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Ft = e, Ft;
}
var Lt, Ga;
function qi() {
  if (Ga) return Lt;
  Ga = 1;
  var e = Pn(), t = In(), r = kn(), n = 1, a = 2;
  function i(s, o, u, l, d, h) {
    var b = u & n, _ = s.length, T = o.length;
    if (_ != T && !(b && T > _))
      return !1;
    var q = h.get(s), A = h.get(o);
    if (q && A)
      return q == o && A == s;
    var R = -1, y = !0, M = u & a ? new e() : void 0;
    for (h.set(s, o), h.set(o, s); ++R < _; ) {
      var p = s[R], f = o[R];
      if (l)
        var O = b ? l(f, p, R, o, s, h) : l(p, f, R, s, o, h);
      if (O !== void 0) {
        if (O)
          continue;
        y = !1;
        break;
      }
      if (M) {
        if (!t(o, function(S, P) {
          if (!r(M, P) && (p === S || d(p, S, u, l, h)))
            return M.push(P);
        })) {
          y = !1;
          break;
        }
      } else if (!(p === f || d(p, f, u, l, h))) {
        y = !1;
        break;
      }
    }
    return h.delete(s), h.delete(o), y;
  }
  return Lt = i, Lt;
}
var Kt, Va;
function xn() {
  if (Va) return Kt;
  Va = 1;
  var e = B(), t = e.Uint8Array;
  return Kt = t, Kt;
}
var Gt, Ha;
function Fn() {
  if (Ha) return Gt;
  Ha = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return Gt = e, Gt;
}
var Vt, za;
function Ln() {
  if (za) return Vt;
  za = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Vt = e, Vt;
}
var Ht, Ba;
function Kn() {
  if (Ba) return Ht;
  Ba = 1;
  var e = vr(), t = xn(), r = bi(), n = qi(), a = Fn(), i = Ln(), s = 1, o = 2, u = "[object Boolean]", l = "[object Date]", d = "[object Error]", h = "[object Map]", b = "[object Number]", _ = "[object RegExp]", T = "[object Set]", q = "[object String]", A = "[object Symbol]", R = "[object ArrayBuffer]", y = "[object DataView]", M = e ? e.prototype : void 0, p = M ? M.valueOf : void 0;
  function f(O, S, P, k, x, m, c) {
    switch (P) {
      case y:
        if (O.byteLength != S.byteLength || O.byteOffset != S.byteOffset)
          return !1;
        O = O.buffer, S = S.buffer;
      case R:
        return !(O.byteLength != S.byteLength || !m(new t(O), new t(S)));
      case u:
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
        var g = k & s;
        if (v || (v = i), O.size != S.size && !g)
          return !1;
        var w = c.get(O);
        if (w)
          return w == S;
        k |= o, c.set(O, S);
        var E = n(v(O), v(S), k, x, m, c);
        return c.delete(O), E;
      case A:
        if (p)
          return p.call(O) == p.call(S);
    }
    return !1;
  }
  return Ht = f, Ht;
}
var zt, Na;
function Gn() {
  if (Na) return zt;
  Na = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return zt = e, zt;
}
var Bt, Ua;
function Vn() {
  if (Ua) return Bt;
  Ua = 1;
  var e = Gn(), t = _e();
  function r(n, a, i) {
    var s = a(n);
    return t(n) ? s : e(s, i(n));
  }
  return Bt = r, Bt;
}
var Nt, Wa;
function Hn() {
  if (Wa) return Nt;
  Wa = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, s = []; ++n < a; ) {
      var o = t[n];
      r(o, n, t) && (s[i++] = o);
    }
    return s;
  }
  return Nt = e, Nt;
}
var Ut, Ya;
function zn() {
  if (Ya) return Ut;
  Ya = 1;
  function e() {
    return [];
  }
  return Ut = e, Ut;
}
var Wt, Qa;
function Bn() {
  if (Qa) return Wt;
  Qa = 1;
  var e = Hn(), t = zn(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return n.call(s, o);
    }));
  } : t;
  return Wt = i, Wt;
}
var Yt, $a;
function Nn() {
  if ($a) return Yt;
  $a = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Yt = e, Yt;
}
var Qt, Ja;
function Un() {
  if (Ja) return Qt;
  Ja = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Qt = r, Qt;
}
var $t, Xa;
function Wn() {
  if (Xa) return $t;
  Xa = 1;
  var e = Nn(), t = pi(), r = _e(), n = pr(), a = Un(), i = yr(), s = Object.prototype, o = s.hasOwnProperty;
  function u(l, d) {
    var h = r(l), b = !h && t(l), _ = !h && !b && n(l), T = !h && !b && !_ && i(l), q = h || b || _ || T, A = q ? e(l.length, String) : [], R = A.length;
    for (var y in l)
      (d || o.call(l, y)) && !(q && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, R))) && A.push(y);
    return A;
  }
  return $t = u, $t;
}
var Jt, Za;
function Yn() {
  if (Za) return Jt;
  Za = 1;
  var e = Wn(), t = vi(), r = mi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Jt = n, Jt;
}
var Xt, ei;
function Qn() {
  if (ei) return Xt;
  ei = 1;
  var e = Vn(), t = Bn(), r = Yn();
  function n(a) {
    return e(a, r, t);
  }
  return Xt = n, Xt;
}
var Zt, ti;
function $n() {
  if (ti) return Zt;
  ti = 1;
  var e = Qn(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, s, o, u, l, d) {
    var h = o & t, b = e(i), _ = b.length, T = e(s), q = T.length;
    if (_ != q && !h)
      return !1;
    for (var A = _; A--; ) {
      var R = b[A];
      if (!(h ? R in s : n.call(s, R)))
        return !1;
    }
    var y = d.get(i), M = d.get(s);
    if (y && M)
      return y == s && M == i;
    var p = !0;
    d.set(i, s), d.set(s, i);
    for (var f = h; ++A < _; ) {
      R = b[A];
      var O = i[R], S = s[R];
      if (u)
        var P = h ? u(S, O, R, s, i, d) : u(O, S, R, i, s, d);
      if (!(P === void 0 ? O === S || l(O, S, o, u, d) : P)) {
        p = !1;
        break;
      }
      f || (f = R == "constructor");
    }
    if (p && !f) {
      var k = i.constructor, x = s.constructor;
      k != x && "constructor" in i && "constructor" in s && !(typeof k == "function" && k instanceof k && typeof x == "function" && x instanceof x) && (p = !1);
    }
    return d.delete(i), d.delete(s), p;
  }
  return Zt = a, Zt;
}
var er, ri;
function Jn() {
  if (ri) return er;
  ri = 1;
  var e = Mn(), t = qi(), r = Kn(), n = $n(), a = gi(), i = _e(), s = pr(), o = yr(), u = 1, l = "[object Arguments]", d = "[object Array]", h = "[object Object]", b = Object.prototype, _ = b.hasOwnProperty;
  function T(q, A, R, y, M, p) {
    var f = i(q), O = i(A), S = f ? d : a(q), P = O ? d : a(A);
    S = S == l ? h : S, P = P == l ? h : P;
    var k = S == h, x = P == h, m = S == P;
    if (m && s(q)) {
      if (!s(A))
        return !1;
      f = !0, k = !1;
    }
    if (m && !k)
      return p || (p = new e()), f || o(q) ? t(q, A, R, y, M, p) : r(q, A, S, R, y, M, p);
    if (!(R & u)) {
      var c = k && _.call(q, "__wrapped__"), v = x && _.call(A, "__wrapped__");
      if (c || v) {
        var g = c ? q.value() : q, w = v ? A.value() : A;
        return p || (p = new e()), M(g, w, R, y, p);
      }
    }
    return m ? (p || (p = new e()), n(q, A, R, y, M, p)) : !1;
  }
  return er = T, er;
}
var tr, ai;
function Xn() {
  if (ai) return tr;
  ai = 1;
  var e = Jn(), t = ve();
  function r(n, a, i, s, o) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, s, r, o);
  }
  return tr = r, tr;
}
var rr, ii;
function Zn() {
  if (ii) return rr;
  ii = 1;
  var e = Xn();
  function t(r, n) {
    return e(r, n);
  }
  return rr = t, rr;
}
var es = Zn();
const ni = /* @__PURE__ */ hr(es), ts = new or(), rs = new ur(), as = new sr(), is = new cr();
let ns = (() => {
  var e, t, r, n, a, i, s, o, u, l, d, h, b, _, T;
  let q = [], A, R = [], y = [], M, p, f, O, S, P, k, x;
  return e = class {
    get initData() {
      return G(this, t, "f");
    }
    set initData(c) {
      V(this, t, c, "f");
    }
    // @define_prop
    get committedData() {
      return G(this, r, "f");
    }
    set committedData(c) {
      V(this, r, c, "f");
    }
    // @define_prop
    get modified_() {
      return G(this, n, "f");
    }
    set modified_(c) {
      V(this, n, c, "f");
    }
    // @define_prop
    get legacyInitDone() {
      return G(this, a, "f");
    }
    set legacyInitDone(c) {
      V(this, a, c, "f");
    }
    // @define_prop
    get options() {
      return G(this, i, "f");
    }
    set options(c) {
      V(this, i, c, "f");
    }
    get [(t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = (A = [oe], Y))]() {
      return G(this, s, "f");
    }
    set [d](c) {
      V(this, s, c, "f");
    }
    get [h = te]() {
      return G(this, o, "f");
    }
    set [h](c) {
      V(this, o, c, "f");
    }
    get [b = re]() {
      return G(this, u, "f");
    }
    set [b](c) {
      V(this, u, c, "f");
    }
    get [_ = ee]() {
      return G(this, l, "f");
    }
    set [_](c) {
      V(this, l, c, "f");
    }
    /**
     * Создает модель и инициализирует данные.
     */
    constructor(c = {}, v) {
      t.set(this, (N(this, q), N(this, R, null))), r.set(this, (N(this, y), {})), n.set(this, {}), a.set(this, !1), i.set(this, {}), s.set(this, void 0), o.set(this, void 0), u.set(this, void 0), l.set(this, void 0), this.options = v, this.init(c), this.initLegacyFields();
    }
    getFieldMetaCache() {
      const c = Reflect.getOwnMetadata(Y, this), v = Object.getPrototypeOf(this), g = v ? Reflect.getOwnMetadata(Y, v) : null, w = this[Y];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === g)
        return w;
      const E = rs.fields(this), C = /* @__PURE__ */ new Map();
      for (const j of E)
        C.set(String(j.name), j);
      return this[Y] = { ownRef: c, protoRef: g, list: E, map: C }, this[Y];
    }
    getFieldMeta(c) {
      return this.getFieldMetaCache().map.get(String(c));
    }
    getSubmitMetaCache() {
      const c = Reflect.getOwnMetadata(te, this), v = Object.getPrototypeOf(this), g = v ? Reflect.getOwnMetadata(te, v) : null, w = this[te];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === g)
        return w;
      const E = ts.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of E)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: g, list: E, map: C };
      return this[te] = j, j;
    }
    getExcludeMetaCache() {
      const c = Reflect.getOwnMetadata(re, this), v = Object.getPrototypeOf(this), g = v ? Reflect.getOwnMetadata(re, v) : null, w = this[re];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === g)
        return w;
      const E = is.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of E)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: g, list: E, map: C };
      return this[re] = j, j;
    }
    getValidationMetaCache() {
      const c = Reflect.getOwnMetadata(ee, this), v = Object.getPrototypeOf(this), g = v ? Reflect.getOwnMetadata(ee, v) : null, w = this[ee];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === g)
        return w;
      const E = as.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of E)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: g, list: E, map: C };
      return this[ee] = j, j;
    }
    /**
     * Инициализировать валидацию для поля или всех полей.
     */
    initValidation(c) {
      const v = this.validation;
      if (c)
        Reflect.get(v, c);
      else
        for (let g in v)
          v[g];
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
      const g = this.getFieldMeta(c);
      if (g) {
        const w = String(g.name);
        Object.prototype.hasOwnProperty.call(this.initData, w) || Reflect.set(this.initData, w, Reflect.get(this, w));
        let C = g?.factory ? g.factory(this.initData, this) : Reflect.get(this.initData, w);
        if (C === void 0 && !g?.factory) {
          const j = Reflect.get(this, w);
          j !== void 0 && (C = j, Reflect.set(this.initData, w, j));
        }
        this.defineFieldValue(c, C, g), v?.skipValidation || this.initValidation(c);
      }
    }
    initLegacyFields() {
      if (this.legacyInitDone)
        return;
      const c = this.getFieldMetaCache().list;
      if (c.some((v) => Object.prototype.hasOwnProperty.call(this, v.name))) {
        this.legacyInitDone = !0;
        for (let v of c) {
          const g = String(v.name);
          this.initData && g in this.initData || this.initField(g, { skipValidation: !0 });
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
    createObservable(c, v, g, w = g) {
      return c = mr(c) ? c : oe.box(c), new Proxy(c, {
        get: (E, C, j) => {
          const I = Reflect.get(E, C, j);
          return I && typeof I == "object" && !(I instanceof e) && !mr(c) ? this.createObservable(I, String(C), v, `${w}.${String(C)}`) : I;
        },
        set: (E, C, j, I) => (c = j, this.checkChange(g, Reflect.get(this, g)), Reflect.set(E, C, j, I))
      });
    }
    /**
     * Определить getter/setter для поля модели.
     */
    defineFieldValue(c, v, g) {
      const w = g ?? this.getFieldMeta(c);
      return w.noObserve ? Reflect.defineProperty(this, w.name, { value: v }) : (v = oe.box(v), Reflect.defineProperty(this, w.name, {
        get: () => v.get(),
        set: (E) => {
          U(() => v.set(E)), this.checkChange(w.name, v.get());
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
      const g = Object.prototype.hasOwnProperty.call(this.committedData, c) ? Reflect.get(this.committedData, c) : Reflect.get(this.initData, c), w = c && c in this.initData && !ni(g, v);
      return U(() => {
        if (w) {
          Reflect.set(this.modified_, c, g);
          return;
        }
        c in this.modified_ && ni(g, v) && delete this.modified_[c];
      }), w;
    }
    /**
     * Применить данные к полям модели.
     */
    defineData(c) {
      const v = this.getFieldMetaCache().map;
      for (let g in this)
        Object.prototype.hasOwnProperty.call(this, g) && v.has(g) && (Reflect.set(this, g, Reflect.get(c, g)), this.initField(g));
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
      for (let c of this.getFieldMetaCache().list)
        this.commitField(c.name);
      this.modified_ = {};
    }
    /**
     * Зафиксировать изменения конкретного поля.
     */
    commitField(c) {
      c in this.modified_ && Reflect.set(this.committedData, c, Reflect.get(this, c)), delete this.modified_[c], this.modified_ = Object.assign({}, this.modified_);
    }
    /**
     * Откатить изменения к последнему коммиту.
     */
    reject() {
      for (let c in this)
        c in this.modified_ && (this[c] = Reflect.get(this.modified_, c), this.commitField(c), this.defineFieldValue(c, this[c]));
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
      const c = /* @__PURE__ */ Object.create({}), v = this.getSubmitMetaCache().map, g = this.getExcludeMetaCache().map, w = (C) => {
        const j = Reflect.get(this, C), I = v.get(C), be = I?.callback;
        return typeof be == "function" ? be(j, this) : j;
      }, E = (C) => {
        const j = g.get(C);
        if (j)
          switch (typeof j.callback) {
            case "boolean":
              return !!j.callback;
            case "function":
              return j.callback(Reflect.get(this, C), this);
          }
        return !1;
      };
      return this.getFieldMetaCache().list.forEach((C) => {
        var j;
        if (C.name in this)
          return !((j = this.options) === null || j === void 0) && j.byFields && !this.options.byFields.includes(C.name) || E(C.name) ? void 0 : Reflect.set(c, C.name, w(C.name));
      }), c;
    }
    /**
     * Получить объект результатов валидации.
     */
    get validation() {
      this.initLegacyFields();
      const c = {};
      for (const v of this.getValidationMetaCache().list) {
        const g = String(v.name);
        Reflect.set(c, g, v.callback(Reflect.get(this, g), this) || "");
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
    M = [$], p = [H], f = [H], O = [H], S = [H], P = [$], k = [$], x = [(T = $).struct.bind(T)], D(e, null, A, { kind: "accessor", name: "initData", static: !1, private: !1, access: { has: (c) => "initData" in c, get: (c) => c.initData, set: (c, v) => {
      c.initData = v;
    } }, metadata: m }, R, y), D(e, null, M, { kind: "getter", name: "dirty", static: !1, private: !1, access: { has: (c) => "dirty" in c, get: (c) => c.dirty }, metadata: m }, null, q), D(e, null, p, { kind: "method", name: "commit", static: !1, private: !1, access: { has: (c) => "commit" in c, get: (c) => c.commit }, metadata: m }, null, q), D(e, null, f, { kind: "method", name: "commitField", static: !1, private: !1, access: { has: (c) => "commitField" in c, get: (c) => c.commitField }, metadata: m }, null, q), D(e, null, O, { kind: "method", name: "reject", static: !1, private: !1, access: { has: (c) => "reject" in c, get: (c) => c.reject }, metadata: m }, null, q), D(e, null, S, { kind: "method", name: "toInit", static: !1, private: !1, access: { has: (c) => "toInit" in c, get: (c) => c.toInit }, metadata: m }, null, q), D(e, null, P, { kind: "getter", name: "validation", static: !1, private: !1, access: { has: (c) => "validation" in c, get: (c) => c.validation }, metadata: m }, null, q), D(e, null, k, { kind: "getter", name: "validAndDirty", static: !1, private: !1, access: { has: (c) => "validAndDirty" in c, get: (c) => c.validAndDirty }, metadata: m }, null, q), D(e, null, x, { kind: "getter", name: "service", static: !1, private: !1, access: { has: (c) => "service" in c, get: (c) => c.service }, metadata: m }, null, q), m && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), e;
})();
const si = /* @__PURE__ */ new WeakMap(), ss = (e, t) => {
  if (!e)
    return;
  let r = si.get(e);
  r || (r = /* @__PURE__ */ new Set(), si.set(e, r));
  const n = String(t.name);
  if (r.has(n))
    return;
  const a = K(t.metadataKey, e, new Array());
  a.some((i) => i.name === n) || F(t.metadataKey, [...a, t], e), r.add(n);
}, fr = function(t, r) {
  const n = z(t, r) ? void 0 : t, a = (o, u) => {
    const l = new ur(Object.assign(Object.assign({}, n), { name: String(u), ctx: null }));
    F(l.metadataKey, [...K(l.metadataKey, o, new Array()), l], o), Object.getOwnPropertyDescriptor(o, u) || Object.defineProperty(o, u, {
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
  }, i = (o) => {
    o.addInitializer(function() {
      if (this instanceof ns && typeof this.initField == "function") {
        const u = new ur(Object.assign(Object.assign({}, n), { name: String(o.name), ctx: o }));
        ss(Object.getPrototypeOf(this), u), this.initField.call(this, String(o.name));
      }
    });
  };
  function s(o, u) {
    if (z(o, u)) {
      a(o, u);
      return;
    }
    if (L(u))
      return i(u), u.kind === "field" ? (l) => l : u;
  }
  return z(t, r) ? s(t, r) : n && !L(r) ? (o, u) => s(o, u) : L(r) ? s(void 0, r) : (o, u) => s(o, u);
}, os = (e) => !e || typeof e != "object" ? { noObserve: !0 } : Object.assign(Object.assign({}, e), { noObserve: !0 }), cs = function(t, r) {
  return z(t, r) || L(r) ? fr({ noObserve: !0 })(t, r) : fr(os(t));
};
fr.noObserve = cs;
const oi = /* @__PURE__ */ new WeakMap(), us = (e, t) => {
  if (!e)
    return;
  let r = oi.get(e);
  r || (r = /* @__PURE__ */ new Set(), oi.set(e, r));
  const n = String(t.name);
  if (r.has(n))
    return;
  const a = K(t.metadataKey, e, new Array());
  a.some((i) => i.name === n) || F(t.metadataKey, [...a, t], e), r.add(n);
};
function Is(e) {
  const t = (a, i) => {
    const s = new or({ callback: e, name: String(i) }), o = K(s.metadataKey, a, new Array());
    F(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new or({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      us(Object.getPrototypeOf(this), i);
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
const ci = /* @__PURE__ */ new WeakMap(), ls = (e, t) => {
  if (!e)
    return;
  let r = ci.get(e);
  r || (r = /* @__PURE__ */ new Set(), ci.set(e, r));
  const n = String(t.name);
  if (r.has(n))
    return;
  const a = K(t.metadataKey, e, new Array());
  a.some((i) => i.name === n) || F(t.metadataKey, [...a, t], e), r.add(n);
};
function ks(e) {
  const t = (a, i) => {
    const s = new sr({ callback: e, name: String(i) }), o = K(s.metadataKey, a, new Array());
    F(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new sr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      ls(Object.getPrototypeOf(this), i);
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
const fs = (e) => ({
  items: e.items.map((t) => {
    var r, n;
    return {
      name: (n = (r = t.constructor) === null || r === void 0 ? void 0 : r.name) !== null && n !== void 0 ? n : "Model",
      data: t.service.dumpData
    };
  })
});
let de = (() => {
  var e, t, r;
  let n = [], a, i = [], s = [], o, u = [], l = [], d, h, b, _, T, q, A, R, y, M;
  return e = class {
    get items() {
      return G(this, t, "f");
    }
    set items(f) {
      V(this, t, f, "f");
    }
    get _cash() {
      return G(this, r, "f");
    }
    set _cash(f) {
      V(this, r, f, "f");
    }
    constructor() {
      t.set(this, (N(this, n), N(this, i, []))), r.set(this, (N(this, s), N(this, u, []))), this._model = N(this, l), ir(this);
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
      return fs(this);
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
      const m = x ? f.map((c) => new x(c)) : f;
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
    const p = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    a = [oe], o = [oe], d = [H], h = [H], b = [H], _ = [H], T = [$], q = [$], A = [$], R = [H], y = [H], M = [H], D(e, null, a, { kind: "accessor", name: "items", static: !1, private: !1, access: { has: (f) => "items" in f, get: (f) => f.items, set: (f, O) => {
      f.items = O;
    } }, metadata: p }, i, s), D(e, null, o, { kind: "accessor", name: "_cash", static: !1, private: !1, access: { has: (f) => "_cash" in f, get: (f) => f._cash, set: (f, O) => {
      f._cash = O;
    } }, metadata: p }, u, l), D(e, null, d, { kind: "method", name: "add", static: !1, private: !1, access: { has: (f) => "add" in f, get: (f) => f.add }, metadata: p }, null, n), D(e, null, h, { kind: "method", name: "addMany", static: !1, private: !1, access: { has: (f) => "addMany" in f, get: (f) => f.addMany }, metadata: p }, null, n), D(e, null, b, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (f) => "remove" in f, get: (f) => f.remove }, metadata: p }, null, n), D(e, null, _, { kind: "method", name: "clear", static: !1, private: !1, access: { has: (f) => "clear" in f, get: (f) => f.clear }, metadata: p }, null, n), D(e, null, T, { kind: "getter", name: "size", static: !1, private: !1, access: { has: (f) => "size" in f, get: (f) => f.size }, metadata: p }, null, n), D(e, null, q, { kind: "getter", name: "snapshot", static: !1, private: !1, access: { has: (f) => "snapshot" in f, get: (f) => f.snapshot }, metadata: p }, null, n), D(e, null, A, { kind: "getter", name: "cash", static: !1, private: !1, access: { has: (f) => "cash" in f, get: (f) => f.cash }, metadata: p }, null, n), D(e, null, R, { kind: "method", name: "reset", static: !1, private: !1, access: { has: (f) => "reset" in f, get: (f) => f.reset }, metadata: p }, null, n), D(e, null, y, { kind: "method", name: "applyLoaded", static: !1, private: !1, access: { has: (f) => "applyLoaded" in f, get: (f) => f.applyLoaded }, metadata: p }, null, n), D(e, null, M, { kind: "method", name: "setCash", static: !1, private: !1, access: { has: (f) => "setCash" in f, get: (f) => f.setCash }, metadata: p }, null, n), p && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: p });
  })(), e;
})();
const Oi = function(t) {
  return new.target ? Reflect.construct(de, [], new.target) : class extends de {
    constructor() {
      super(), this._model = t;
    }
  };
};
Oi.prototype = de.prototype;
Object.setPrototypeOf(Oi, de);
function Ls(e) {
  return J(e, "instance");
}
function Ks(e) {
  return ((t, r) => Gi(e)(t, r));
}
function Gs(e, t) {
  const r = (n, a) => {
    var i;
    const s = typeof e == "string" ? { id: e } : typeof e == "object" ? e : { id: (i = a?.name) !== null && i !== void 0 ? i : n?.name };
    di(s)(n, a);
  };
  return typeof e == "function" ? r(e, t) : (n, a) => r(n, a);
}
class Vs {
}
const ar = new lr(), ds = (e) => typeof Node < "u" && e instanceof Node, hs = (e) => {
  if (e == null)
    return !0;
  const t = typeof e;
  return t === "function" ? !1 : t !== "object" ? !0 : Pi(e) ? !1 : !ds(e);
}, vs = (e, t) => {
  if (!hs(t))
    throw new TypeError(`PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${e}".`);
};
function Hs(e, t) {
  return Mi((r = {}) => {
    const { viewModel: n } = r, a = Ai(r, ["viewModel"]), { instance: i } = Ei(() => {
      const u = J(e) || (typeof e != "string" ? { instance: new e() } : void 0);
      return { instance: u?.instance };
    }, [e]), s = n ?? i;
    if (Di(() => {
      if (s)
        return typeof s.onInit == "function" && s.onInit(), () => {
          typeof s.onDispose == "function" && s.onDispose();
        };
    }, [s]), s) {
      const o = ar.fields(s), u = o.length > 0 ? o : ar.fields(Object.getPrototypeOf(s));
      for (const l in a)
        if (u instanceof Array) {
          const d = u.find((h) => h.name === l);
          if (d) {
            const h = Reflect.get(a, l);
            vs(l, h), Reflect.set(s, d.originName, h);
          }
        }
      return F(ar.metadataKey, u, s), t(Object.assign(Object.assign({}, a), { viewModel: s }));
    }
    return t(Object.assign({}, a));
  });
}
const X = {
  load: "loading",
  save: "saving",
  remove: "removing",
  delete: "deleting",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, _s = ["load", "save", "remove", "delete"], ui = /* @__PURE__ */ Symbol("SERVICE_STATE"), se = /* @__PURE__ */ Symbol("LAST_CMD"), le = /* @__PURE__ */ Symbol("LAST_LOAD_LABEL");
function gs(e) {
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
function Si(e) {
  e[ui] || (Object.defineProperty(e, ui, { value: !0 }), Object.assign(e, {
    state: X.ready,
    states: Object.assign({}, X),
    isExecuting: !1,
    activeCount: 0,
    isCanceled: !1,
    isDisposed: !1,
    error: null,
    result: void 0,
    resetError: () => {
      var t;
      e.error = null;
      const r = e[se];
      (t = r?.resetError) === null || t === void 0 || t.call(r), W(e, r, e[le]);
    },
    cancel: () => {
      var t;
      const r = e[se];
      (t = r?.cancel) === null || t === void 0 || t.call(r), W(e, r, e[le]);
    },
    dispose: () => {
      var t;
      const r = e[se];
      (t = r?.dispose) === null || t === void 0 || t.call(r), W(e, r, e[le]);
    },
    clearQueue: () => {
      var t;
      const r = e[se];
      (t = r?.clearQueue) === null || t === void 0 || t.call(r);
    }
  }));
}
function W(e, t, r) {
  t && (t.state === dr.load && r ? e.state = r : e.state = t.state, e.isExecuting = t.isExecuting, e.activeCount = t.activeCount, e.isCanceled = t.isCanceled, e.isDisposed = t.isDisposed, e.error = t.error, e.result = t.result);
}
function ps(e, t, r, n) {
  return Si(e), Object.assign(Object.assign({}, n), { onStart: (...a) => {
    var i, s;
    const o = r?.();
    e[se] = o, e[le] = t, e.state = t, e.isExecuting = !0, e.isCanceled = !1, (!((i = void 0) !== null && i !== void 0) || i) && (e.error = null), W(e, o, t), (s = void 0) === null || s === void 0 || s.call(n, ...a);
  }, onSuccess: (a, ...i) => {
    var s;
    W(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(n, a, ...i);
  }, onError: (a) => {
    var i;
    W(e, r?.(), t), (i = void 0) === null || i === void 0 || i.call(n, a);
  }, onCancel: () => {
    var a;
    W(e, r?.(), t), (a = void 0) === null || a === void 0 || a.call(n);
  }, onFinally: (a, ...i) => {
    var s;
    W(e, r?.(), t), (s = void 0) === null || s === void 0 || s.call(n, a, ...i);
  } });
}
function ys(e, t) {
  Si(e);
  const r = t ? Object.assign({}, t) : {};
  if (!t) {
    for (const n of _s)
      if (typeof e[n] == "function") {
        const i = X[n];
        i && (r[n] = i);
      }
  }
  for (const [n, a] of Object.entries(r)) {
    if (!a)
      continue;
    const i = e[n];
    if (typeof i != "function" || "execute" in i && typeof i.execute == "function")
      continue;
    const s = typeof a == "string" ? a : Reflect.get(X, n);
    let o;
    const u = ps(e, s ?? X.load, () => o);
    o = Ri((...d) => fe(this, void 0, void 0, function* () {
      return i.apply(e, d);
    }), u);
    const l = gs(o);
    s && (e.states[s] = s), Object.defineProperty(e, n, { value: l, configurable: !0, writable: !0 });
  }
}
class zs {
  constructor() {
    this.state = X.ready, this.states = Object.assign({}, X), this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, ys(this);
  }
}
const dr = {
  load: "load",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, ue = () => {
}, ms = {
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
class bs {
  /**
   * @param fn Асинхронная функция, которую выполняет команда.
   * @param opt Опции команды.
   */
  constructor(t, r) {
    var n, a, i, s;
    this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, this.states = dr, this.queue = [], this.runningPromise = null, this.queueTail = Promise.resolve(), this.cancelToken = 0, this.fn = t, this.opt = Object.assign({ concurrency: (n = r?.concurrency) !== null && n !== void 0 ? n : "ignore", trackError: (a = r?.trackError) !== null && a !== void 0 ? a : !0, resetErrorOnExecute: (i = r?.resetErrorOnExecute) !== null && i !== void 0 ? i : !0, swallowError: (s = r?.swallowError) !== null && s !== void 0 ? s : !0 }, r), Ti(this, ms, { autoBind: !0 });
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
    return dr[t];
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
    }, a = () => fe(this, void 0, void 0, function* () {
      var i, s, o, u, l, d, h, b;
      if (this.isDisposed)
        return;
      U(() => {
        this.activeCount += 1, this.isExecuting = this.activeCount > 0, this.isCanceled = !1, this.result = void 0, this.opt.trackError && this.opt.resetErrorOnExecute && (this.error = null);
      });
      const _ = this.cancelToken;
      let T = !1, q = !1, A = null, R = null;
      try {
        (s = (i = this.opt).onStart) === null || s === void 0 || s.call(i, ...t), R = this.fn(...t);
        const y = yield R;
        if (q = this.cancelToken !== _, q) {
          U(() => {
            this.isCanceled = !0, this.result = void 0;
          });
          return;
        }
        return U(() => {
          this.result = y;
        }), (u = (o = this.opt).onSuccess) === null || u === void 0 || u.call(o, y, ...t), T = !0, y;
      } catch (y) {
        if (A = y, q = this.cancelToken !== _, U(() => {
          this.result = void 0, this.opt.trackError && (this.error = y);
        }), (d = (l = this.opt).onError) === null || d === void 0 || d.call(l, y), !this.opt.swallowError)
          throw y;
        return;
      } finally {
        U(() => {
          this.activeCount = Math.max(0, this.activeCount - 1), this.isExecuting = this.activeCount > 0;
        }), !q && this.cancelToken !== _ && (q = !0), (b = (h = this.opt).onFinally) === null || b === void 0 || b.call(h, { ok: T, canceled: q, error: A }, ...t);
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
          resolve: ue,
          reject: ue,
          canceled: !1,
          settled: !1
        }, o = this.activeCount === 0 && this.queue.length === 0;
        s.promise = new Promise((d, h) => {
          s.resolve = d, s.reject = h;
        }), this.queue.push(s);
        const u = () => fe(this, void 0, void 0, function* () {
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
        return this.queueTail = l.then(ue, ue), n(s.promise);
      }
      default:
        return this.isExecuting && this.runningPromise ? this.runningPromise : n(a());
    }
  }
}
function Ri(e, t) {
  return new bs(e, t);
}
function Bs(e, t) {
  const r = Ci(e), n = /* @__PURE__ */ new Set(), a = t?.onCancel;
  return Ri((...s) => {
    const o = r(...s);
    n.add(o);
    const u = () => {
      n.delete(o);
    };
    return o.then(u, u), new Promise((l, d) => {
      o.then(l, (h) => {
        const b = h;
        if (ji(b)) {
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
function Ns(e) {
  return function(...t) {
    return U(() => e.apply(this, t));
  };
}
export {
  zs as CommandService,
  dr as DEFAULT_STATES,
  J as GetService,
  Ls as GetStore,
  Gi as Inject,
  Ks as InjectStore,
  Ms as MakeObservable,
  ns as Model,
  Es as PropFromView,
  di as Service,
  js as SetService,
  Gs as Store,
  Oi as StoreBase,
  Cs as TODO,
  Vs as ViewModel,
  ys as applyCommandMethods,
  Ri as asyncCommand,
  Ns as commandAction,
  F as defineMetadata,
  Ts as define_prop,
  Ds as exclude,
  fr as field,
  Bs as flowCommand,
  Li as getExecutingFunctionNameByStack,
  K as getOwnMetadata,
  As as isSerializable,
  Is as submit,
  ks as validation,
  Hs as view
};
