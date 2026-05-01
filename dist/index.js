import "reflect-metadata";
import { d as ne, _ as L, a as K, b as U, c as D, e as Ti } from "./tslib.es6-DQYNRcek.js";
import { lazy as ji, useMemo as Mi, useEffect as Ei, isValidElement as Di } from "react";
import { makeObservable as ur, observable as le, runInAction as W, isObservable as Or, computed as X, action as G, flow as Pi, isFlowCancellationError as Ii, makeAutoObservable as ki } from "mobx";
import { observer as Fi } from "mobx-react";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ce, Ar;
function di() {
  if (Ar) return Ce;
  Ar = 1;
  var e = typeof fe == "object" && fe && fe.Object === Object && fe;
  return Ce = e, Ce;
}
var Re, Cr;
function N() {
  if (Cr) return Re;
  Cr = 1;
  var e = di(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Re = r, Re;
}
var Te, Rr;
function mr() {
  if (Rr) return Te;
  Rr = 1;
  var e = N(), t = e.Symbol;
  return Te = t, Te;
}
var je, Tr;
function xi() {
  if (Tr) return je;
  Tr = 1;
  var e = mr(), t = Object.prototype, r = t.hasOwnProperty, i = t.toString, a = e ? e.toStringTag : void 0;
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
var Me, jr;
function Li() {
  if (jr) return Me;
  jr = 1;
  var e = Object.prototype, t = e.toString;
  function r(i) {
    return t.call(i);
  }
  return Me = r, Me;
}
var Ee, Mr;
function _e() {
  if (Mr) return Ee;
  Mr = 1;
  var e = mr(), t = xi(), r = Li(), i = "[object Null]", a = "[object Undefined]", n = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : i : n && n in Object(o) ? t(o) : r(o);
  }
  return Ee = s, Ee;
}
var De, Er;
function hi() {
  if (Er) return De;
  Er = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return De = e, De;
}
var Pe, Dr;
function br() {
  if (Dr) return Pe;
  Dr = 1;
  var e = _e(), t = hi(), r = "[object AsyncFunction]", i = "[object Function]", a = "[object GeneratorFunction]", n = "[object Proxy]";
  function s(o) {
    if (!t(o))
      return !1;
    var u = e(o);
    return u == i || u == a || u == r || u == n;
  }
  return Pe = s, Pe;
}
var Ki = br();
const Gi = /* @__PURE__ */ yr(Ki), zi = ["default", "Microfront", "App", "Component"], Vi = (e) => e ? typeof e == "string" ? [e] : e : zi, Bi = (e) => typeof e == "function" || !!(e && typeof e == "object" && "$$typeof" in e), Hi = (e, t) => {
  if (e)
    for (const r of Vi(t)) {
      const i = e[r];
      if (Bi(i))
        return i;
    }
}, Ni = (e) => ne(void 0, void 0, void 0, function* () {
  var t, r;
  try {
    const i = yield e.importer();
    return (t = Hi(i, e.exportName)) !== null && t !== void 0 ? t : e.fallback;
  } catch (i) {
    return (r = e.onError) === null || r === void 0 || r.call(e, i), e.fallback;
  }
}), Is = (e) => ji(() => ne(void 0, void 0, void 0, function* () {
  return {
    default: yield Ni(e)
  };
})), B = (e, t, r) => Reflect.getOwnMetadata(e, t) || r || {}, z = (e, t, r) => Reflect.defineMetadata(e, t, r);
function ks(...e) {
  try {
    return JSON.stringify(e), !0;
  } catch {
    return !1;
  }
}
function Ui(e) {
  if (e && typeof e == "string") {
    let [t] = e.split(`
`)[2].replace(/at (get)?/, "").match(/.*/g) || [];
    return t && (t = t.trim()), t;
  }
}
const Pr = {}, Ie = [];
let Ir = !1;
const Fs = (e, ...t) => {
  const r = new Error().stack;
  if (!Ir)
    console.log("%c TODO", "background: #222; color: #bada55", Pr), Ir = !0;
  else {
    const a = Ui(r);
    Ie.includes(a) === !1 && (Ie.push(a), Reflect.set(Pr, `${Ie.length}) ${e}`, { msg: t, get path() {
      return console.info(t, a), a;
    } }));
  }
  function i(...a) {
  }
  return i;
}, kr = /* @__PURE__ */ new WeakMap(), $ = (e, t) => !!e && (typeof t == "string" || typeof t == "symbol"), H = (e) => !!e && typeof e == "object" && "kind" in e, Wi = (e) => ({
  kind: "class",
  name: e,
  addInitializer: () => {
  },
  metadata: {}
}), pe = (e, t, r) => {
  if ($(e, t)) {
    r.defineLegacy(e, t);
    return;
  }
  if (H(t))
    return r.defineStage3(t), t.kind === "field" ? r.initializer : t;
}, ge = (e, t) => {
  if (!e)
    return;
  let r = kr.get(e);
  r || (r = /* @__PURE__ */ new Map(), kr.set(e, r));
  let i = r.get(t.metadataKey);
  i || (i = /* @__PURE__ */ new Set(), r.set(t.metadataKey, i));
  const a = String(t.name);
  if (i.has(a))
    return;
  const n = B(t.metadataKey, e, new Array());
  n.some((s) => String(s.name) === a) || z(t.metadataKey, [...n, t], e), i.add(a);
}, J = /* @__PURE__ */ Symbol("service-key"), lr = new Proxy({}, Reflect);
function Yi(e) {
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
    if ($(i, a)) {
      t(i, a);
      return;
    }
    return a.addInitializer(function() {
      return ne(this, void 0, void 0, function* () {
        const n = Z(e, "instance");
        n && Object.hasOwn(this, a.name) && Reflect.set(this, a.name, n);
      });
    }), (n) => n;
  }
  return r;
}
function Z(e, t) {
  var r;
  const i = B(J, lr);
  if (typeof e != "string") {
    const a = B(J, e);
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
    const s = String(typeof e == "string" && e || typeof e == "object" && e?.id || n?.name || a?.name), o = B(J, lr), u = new Proxy({
      target: a,
      instance: typeof e == "object" && Reflect.get(e, "transient") || typeof e == "object" && Reflect.get(e, "lazy") ? a : new a(),
      context: n,
      options: e
    }, {
      get(l, d, h) {
        var m, v;
        if (d === "instance" && (!((m = l?.options) === null || m === void 0) && m.transient))
          return new a();
        if (d === "instance" && (!((v = l?.options) === null || v === void 0) && v.lazy) && l.instance === a) {
          const R = new a();
          return Reflect.set(l, d, R, h), R;
        }
        return Reflect.get(l, d, h);
      },
      set(l, d, h, m) {
        return Reflect.set(l, d, h, m);
      }
    });
    o[s] = u, z(J, o, lr), z(J, o[s], a);
  };
  function i(a, n) {
    var s, o;
    const u = a.__legacy_source__, l = H(n) ? n : Wi((o = (s = u?.name) !== null && s !== void 0 ? s : a?.name) !== null && o !== void 0 ? o : "");
    r(a, l), u && u !== a && z(J, B(J, a), u);
  }
  return Gi(e) ? i(e, t) : e ? (a, n) => i(a, n) : i;
}
const xs = (e, t) => {
  const { kind: r = "class", name: i = "", addInitializer: a = () => {
  }, metadata: n } = t?.ctx || {};
  return vi(t)(e, {
    kind: r,
    name: i,
    addInitializer: a,
    metadata: n
  }), Z(e).instance;
};
function ke(e) {
  var t, r, i;
  const a = Object.assign({ enumerable: !1, writable: !0 }, e), n = Object.assign({ configurable: !0, enumerable: !1, writable: !0 }, e), s = {
    configurable: (t = n.configurable) !== null && t !== void 0 ? t : !0,
    enumerable: (r = n.enumerable) !== null && r !== void 0 ? r : !1,
    writable: (i = n.writable) !== null && i !== void 0 ? i : !0,
    value: void 0
  };
  return function(o, u) {
    if ($(o, u)) {
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
    if (H(u)) {
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
function Ls(e, t) {
  return $(e, t) || H(t) ? ke()(e, t) : ke(e);
}
function Ks(e, t) {
  const r = (n) => class extends n {
    constructor(...s) {
      super(...s), ur(this);
    }
  }, i = (n, s) => {
    if (typeof Reflect?.getOwnMetadataKeys == "function")
      for (const o of Reflect.getOwnMetadataKeys(n)) {
        const u = Reflect.getOwnMetadata(o, n);
        Reflect.defineMetadata(o, u, s);
      }
  };
  function a(n, s) {
    if (!H(s)) {
      const o = n, u = r(o);
      return Object.defineProperty(u, "__legacy_source__", { value: o, configurable: !0 }), i(o, u), u;
    }
    s.addInitializer(function() {
      ur(this);
    });
  }
  return e && !H(t) || e ? a(e, t) : a;
}
const Q = /* @__PURE__ */ Symbol("field-key"), re = /* @__PURE__ */ Symbol("validation-key"), ae = /* @__PURE__ */ Symbol("submit-key"), ie = /* @__PURE__ */ Symbol("exclude-key"), $i = /* @__PURE__ */ Symbol("prop-from-view-key"), ye = (e, t) => !!e && Object.prototype.hasOwnProperty.call(e, t), x = (e, t) => e[t], V = (e, t, r) => {
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
            const m = h?.name, v = String(m);
            u.has(v) || (u.add(v), o.push(h));
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
class fr extends te {
  constructor() {
    super(...arguments), this.metadataKey = re;
  }
}
class dr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ae;
  }
}
class hr extends te {
  constructor() {
    super(...arguments), this.metadataKey = ie;
  }
}
class vr extends te {
  /**
   * Создать метаданные поля модели.
   */
  constructor(t = {}) {
    super(t), this.factory = null, this.mapping = null, this.noObserve = null, this.collectChanges = !1, this.name = null, this.ctx = null, this.metadataKey = Q, this.isInit = !1, this.factory = t.factory, this.mapping = t.mapping, this.noObserve = t.noObserve, this.name = t.name, this.ctx = t.ctx, this.collectChanges = !!t.collectChanges;
  }
}
class _r extends te {
  /**
   * Создать метаданные для PropFromView.
   */
  constructor(t = {}) {
    super(t), this.metadataKey = $i;
    for (const r in this)
      t && r in t && V(this, r, x(t, r));
  }
}
function Gs(e) {
  const t = (a, n) => {
    const s = new _r({ name: e, originName: String(n) });
    s.name = e, s.originName = String(n);
    const o = B(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const n = new _r(), s = n.fields(this);
      for (const o in this)
        s instanceof Array && a.name === o && (n.name = e, n.originName = o, n.value = this[o], s.push(n));
      z(n.metadataKey, s, this);
    });
  };
  function i(a, n) {
    if ($(a, n)) {
      t(a, n);
      return;
    }
    if (H(n))
      return r(n), n.kind === "field" ? (s) => s : n;
  }
  return e ? ((a, n) => i(a, n)) : ((a) => a);
}
function zs(e) {
  const t = (a, n) => {
    const s = new hr({ callback: e, name: String(n) }), o = B(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const n = new hr({ callback: e, name: String(a.name) });
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
var Fe, Fr;
function _i() {
  if (Fr) return Fe;
  Fr = 1;
  var e = Object.prototype;
  function t(r) {
    var i = r && r.constructor, a = typeof i == "function" && i.prototype || e;
    return r === a;
  }
  return Fe = t, Fe;
}
var xe, xr;
function Qi() {
  if (xr) return xe;
  xr = 1;
  function e(t, r) {
    return function(i) {
      return t(r(i));
    };
  }
  return xe = e, xe;
}
var Le, Lr;
function Ji() {
  if (Lr) return Le;
  Lr = 1;
  var e = Qi(), t = e(Object.keys, Object);
  return Le = t, Le;
}
var Ke, Kr;
function pi() {
  if (Kr) return Ke;
  Kr = 1;
  var e = _i(), t = Ji(), r = Object.prototype, i = r.hasOwnProperty;
  function a(n) {
    if (!e(n))
      return t(n);
    var s = [];
    for (var o in Object(n))
      i.call(n, o) && o != "constructor" && s.push(o);
    return s;
  }
  return Ke = a, Ke;
}
var Ge, Gr;
function Xi() {
  if (Gr) return Ge;
  Gr = 1;
  var e = N(), t = e["__core-js_shared__"];
  return Ge = t, Ge;
}
var ze, zr;
function Zi() {
  if (zr) return ze;
  zr = 1;
  var e = Xi(), t = (function() {
    var i = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  })();
  function r(i) {
    return !!t && t in i;
  }
  return ze = r, ze;
}
var Ve, Vr;
function gi() {
  if (Vr) return Ve;
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
  return Ve = r, Ve;
}
var Be, Br;
function en() {
  if (Br) return Be;
  Br = 1;
  var e = br(), t = Zi(), r = hi(), i = gi(), a = /[\\^$.*+?()[\]{}|]/g, n = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, d = RegExp(
    "^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(m) {
    if (!r(m) || t(m))
      return !1;
    var v = e(m) ? d : n;
    return v.test(i(m));
  }
  return Be = h, Be;
}
var He, Hr;
function tn() {
  if (Hr) return He;
  Hr = 1;
  function e(t, r) {
    return t?.[r];
  }
  return He = e, He;
}
var Ne, Nr;
function se() {
  if (Nr) return Ne;
  Nr = 1;
  var e = en(), t = tn();
  function r(i, a) {
    var n = t(i, a);
    return e(n) ? n : void 0;
  }
  return Ne = r, Ne;
}
var Ue, Ur;
function rn() {
  if (Ur) return Ue;
  Ur = 1;
  var e = se(), t = N(), r = e(t, "DataView");
  return Ue = r, Ue;
}
var We, Wr;
function wr() {
  if (Wr) return We;
  Wr = 1;
  var e = se(), t = N(), r = e(t, "Map");
  return We = r, We;
}
var Ye, Yr;
function an() {
  if (Yr) return Ye;
  Yr = 1;
  var e = se(), t = N(), r = e(t, "Promise");
  return Ye = r, Ye;
}
var $e, $r;
function nn() {
  if ($r) return $e;
  $r = 1;
  var e = se(), t = N(), r = e(t, "Set");
  return $e = r, $e;
}
var Qe, Qr;
function sn() {
  if (Qr) return Qe;
  Qr = 1;
  var e = se(), t = N(), r = e(t, "WeakMap");
  return Qe = r, Qe;
}
var Je, Jr;
function yi() {
  if (Jr) return Je;
  Jr = 1;
  var e = rn(), t = wr(), r = an(), i = nn(), a = sn(), n = _e(), s = gi(), o = "[object Map]", u = "[object Object]", l = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", m = "[object DataView]", v = s(e), R = s(t), b = s(r), C = s(i), A = s(a), p = n;
  return (e && p(new e(new ArrayBuffer(1))) != m || t && p(new t()) != o || r && p(r.resolve()) != l || i && p(new i()) != d || a && p(new a()) != h) && (p = function(M) {
    var _ = n(M), f = _ == u ? M.constructor : void 0, w = f ? s(f) : "";
    if (w)
      switch (w) {
        case v:
          return m;
        case R:
          return o;
        case b:
          return l;
        case C:
          return d;
        case A:
          return h;
      }
    return _;
  }), Je = p, Je;
}
var Xe, Xr;
function me() {
  if (Xr) return Xe;
  Xr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Xe = e, Xe;
}
var Ze, Zr;
function on() {
  if (Zr) return Ze;
  Zr = 1;
  var e = _e(), t = me(), r = "[object Arguments]";
  function i(a) {
    return t(a) && e(a) == r;
  }
  return Ze = i, Ze;
}
var et, ea;
function mi() {
  if (ea) return et;
  ea = 1;
  var e = on(), t = me(), r = Object.prototype, i = r.hasOwnProperty, a = r.propertyIsEnumerable, n = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && i.call(s, "callee") && !a.call(s, "callee");
  };
  return et = n, et;
}
var tt, ta;
function be() {
  if (ta) return tt;
  ta = 1;
  var e = Array.isArray;
  return tt = e, tt;
}
var rt, ra;
function bi() {
  if (ra) return rt;
  ra = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return rt = t, rt;
}
var at, aa;
function wi() {
  if (aa) return at;
  aa = 1;
  var e = br(), t = bi();
  function r(i) {
    return i != null && t(i.length) && !e(i);
  }
  return at = r, at;
}
var oe = { exports: {} }, it, ia;
function cn() {
  if (ia) return it;
  ia = 1;
  function e() {
    return !1;
  }
  return it = e, it;
}
oe.exports;
var na;
function Sr() {
  return na || (na = 1, (function(e, t) {
    var r = N(), i = cn(), a = t && !t.nodeType && t, n = a && !0 && e && !e.nodeType && e, s = n && n.exports === a, o = s ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, l = u || i;
    e.exports = l;
  })(oe, oe.exports)), oe.exports;
}
var nt, sa;
function un() {
  if (sa) return nt;
  sa = 1;
  var e = _e(), t = bi(), r = me(), i = "[object Arguments]", a = "[object Array]", n = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", l = "[object Map]", d = "[object Number]", h = "[object Object]", m = "[object RegExp]", v = "[object Set]", R = "[object String]", b = "[object WeakMap]", C = "[object ArrayBuffer]", A = "[object DataView]", p = "[object Float32Array]", M = "[object Float64Array]", _ = "[object Int8Array]", f = "[object Int16Array]", w = "[object Int32Array]", S = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", F = "[object Uint32Array]", y = {};
  y[p] = y[M] = y[_] = y[f] = y[w] = y[S] = y[P] = y[k] = y[F] = !0, y[i] = y[a] = y[C] = y[n] = y[A] = y[s] = y[o] = y[u] = y[l] = y[d] = y[h] = y[m] = y[v] = y[R] = y[b] = !1;
  function c(g) {
    return r(g) && t(g.length) && !!y[e(g)];
  }
  return nt = c, nt;
}
var st, oa;
function ln() {
  if (oa) return st;
  oa = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return st = e, st;
}
var ce = { exports: {} };
ce.exports;
var ca;
function fn() {
  return ca || (ca = 1, (function(e, t) {
    var r = di(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, n = a && a.exports === i, s = n && r.process, o = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(ce, ce.exports)), ce.exports;
}
var ot, ua;
function qr() {
  if (ua) return ot;
  ua = 1;
  var e = un(), t = ln(), r = fn(), i = r && r.isTypedArray, a = i ? t(i) : e;
  return ot = a, ot;
}
var ct, la;
function dn() {
  if (la) return ct;
  la = 1;
  var e = pi(), t = yi(), r = mi(), i = be(), a = wi(), n = Sr(), s = _i(), o = qr(), u = "[object Map]", l = "[object Set]", d = Object.prototype, h = d.hasOwnProperty;
  function m(v) {
    if (v == null)
      return !0;
    if (a(v) && (i(v) || typeof v == "string" || typeof v.splice == "function" || n(v) || o(v) || r(v)))
      return !v.length;
    var R = t(v);
    if (R == u || R == l)
      return !v.size;
    if (s(v))
      return !e(v).length;
    for (var b in v)
      if (h.call(v, b))
        return !1;
    return !0;
  }
  return ct = m, ct;
}
var hn = dn();
const vn = /* @__PURE__ */ yr(hn);
var ut, fa;
function _n() {
  if (fa) return ut;
  fa = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ut = e, ut;
}
var lt, da;
function Si() {
  if (da) return lt;
  da = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return lt = e, lt;
}
var ft, ha;
function we() {
  if (ha) return ft;
  ha = 1;
  var e = Si();
  function t(r, i) {
    for (var a = r.length; a--; )
      if (e(r[a][0], i))
        return a;
    return -1;
  }
  return ft = t, ft;
}
var dt, va;
function pn() {
  if (va) return dt;
  va = 1;
  var e = we(), t = Array.prototype, r = t.splice;
  function i(a) {
    var n = this.__data__, s = e(n, a);
    if (s < 0)
      return !1;
    var o = n.length - 1;
    return s == o ? n.pop() : r.call(n, s, 1), --this.size, !0;
  }
  return dt = i, dt;
}
var ht, _a;
function gn() {
  if (_a) return ht;
  _a = 1;
  var e = we();
  function t(r) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? void 0 : i[a][1];
  }
  return ht = t, ht;
}
var vt, pa;
function yn() {
  if (pa) return vt;
  pa = 1;
  var e = we();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return vt = t, vt;
}
var _t, ga;
function mn() {
  if (ga) return _t;
  ga = 1;
  var e = we();
  function t(r, i) {
    var a = this.__data__, n = e(a, r);
    return n < 0 ? (++this.size, a.push([r, i])) : a[n][1] = i, this;
  }
  return _t = t, _t;
}
var pt, ya;
function Se() {
  if (ya) return pt;
  ya = 1;
  var e = _n(), t = pn(), r = gn(), i = yn(), a = mn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, pt = n, pt;
}
var gt, ma;
function bn() {
  if (ma) return gt;
  ma = 1;
  var e = Se();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return gt = t, gt;
}
var yt, ba;
function wn() {
  if (ba) return yt;
  ba = 1;
  function e(t) {
    var r = this.__data__, i = r.delete(t);
    return this.size = r.size, i;
  }
  return yt = e, yt;
}
var mt, wa;
function Sn() {
  if (wa) return mt;
  wa = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return mt = e, mt;
}
var bt, Sa;
function qn() {
  if (Sa) return bt;
  Sa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return bt = e, bt;
}
var wt, qa;
function qe() {
  if (qa) return wt;
  qa = 1;
  var e = se(), t = e(Object, "create");
  return wt = t, wt;
}
var St, Oa;
function On() {
  if (Oa) return St;
  Oa = 1;
  var e = qe();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return St = t, St;
}
var qt, Aa;
function An() {
  if (Aa) return qt;
  Aa = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return qt = e, qt;
}
var Ot, Ca;
function Cn() {
  if (Ca) return Ot;
  Ca = 1;
  var e = qe(), t = "__lodash_hash_undefined__", r = Object.prototype, i = r.hasOwnProperty;
  function a(n) {
    var s = this.__data__;
    if (e) {
      var o = s[n];
      return o === t ? void 0 : o;
    }
    return i.call(s, n) ? s[n] : void 0;
  }
  return Ot = a, Ot;
}
var At, Ra;
function Rn() {
  if (Ra) return At;
  Ra = 1;
  var e = qe(), t = Object.prototype, r = t.hasOwnProperty;
  function i(a) {
    var n = this.__data__;
    return e ? n[a] !== void 0 : r.call(n, a);
  }
  return At = i, At;
}
var Ct, Ta;
function Tn() {
  if (Ta) return Ct;
  Ta = 1;
  var e = qe(), t = "__lodash_hash_undefined__";
  function r(i, a) {
    var n = this.__data__;
    return this.size += this.has(i) ? 0 : 1, n[i] = e && a === void 0 ? t : a, this;
  }
  return Ct = r, Ct;
}
var Rt, ja;
function jn() {
  if (ja) return Rt;
  ja = 1;
  var e = On(), t = An(), r = Cn(), i = Rn(), a = Tn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, Rt = n, Rt;
}
var Tt, Ma;
function Mn() {
  if (Ma) return Tt;
  Ma = 1;
  var e = jn(), t = Se(), r = wr();
  function i() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Tt = i, Tt;
}
var jt, Ea;
function En() {
  if (Ea) return jt;
  Ea = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return jt = e, jt;
}
var Mt, Da;
function Oe() {
  if (Da) return Mt;
  Da = 1;
  var e = En();
  function t(r, i) {
    var a = r.__data__;
    return e(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
  }
  return Mt = t, Mt;
}
var Et, Pa;
function Dn() {
  if (Pa) return Et;
  Pa = 1;
  var e = Oe();
  function t(r) {
    var i = e(this, r).delete(r);
    return this.size -= i ? 1 : 0, i;
  }
  return Et = t, Et;
}
var Dt, Ia;
function Pn() {
  if (Ia) return Dt;
  Ia = 1;
  var e = Oe();
  function t(r) {
    return e(this, r).get(r);
  }
  return Dt = t, Dt;
}
var Pt, ka;
function In() {
  if (ka) return Pt;
  ka = 1;
  var e = Oe();
  function t(r) {
    return e(this, r).has(r);
  }
  return Pt = t, Pt;
}
var It, Fa;
function kn() {
  if (Fa) return It;
  Fa = 1;
  var e = Oe();
  function t(r, i) {
    var a = e(this, r), n = a.size;
    return a.set(r, i), this.size += a.size == n ? 0 : 1, this;
  }
  return It = t, It;
}
var kt, xa;
function qi() {
  if (xa) return kt;
  xa = 1;
  var e = Mn(), t = Dn(), r = Pn(), i = In(), a = kn();
  function n(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return n.prototype.clear = e, n.prototype.delete = t, n.prototype.get = r, n.prototype.has = i, n.prototype.set = a, kt = n, kt;
}
var Ft, La;
function Fn() {
  if (La) return Ft;
  La = 1;
  var e = Se(), t = wr(), r = qi(), i = 200;
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
  return Ft = a, Ft;
}
var xt, Ka;
function xn() {
  if (Ka) return xt;
  Ka = 1;
  var e = Se(), t = bn(), r = wn(), i = Sn(), a = qn(), n = Fn();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = n, xt = s, xt;
}
var Lt, Ga;
function Ln() {
  if (Ga) return Lt;
  Ga = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Lt = t, Lt;
}
var Kt, za;
function Kn() {
  if (za) return Kt;
  za = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Kt = e, Kt;
}
var Gt, Va;
function Gn() {
  if (Va) return Gt;
  Va = 1;
  var e = qi(), t = Ln(), r = Kn();
  function i(a) {
    var n = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++n < s; )
      this.add(a[n]);
  }
  return i.prototype.add = i.prototype.push = t, i.prototype.has = r, Gt = i, Gt;
}
var zt, Ba;
function zn() {
  if (Ba) return zt;
  Ba = 1;
  function e(t, r) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (r(t[i], i, t))
        return !0;
    return !1;
  }
  return zt = e, zt;
}
var Vt, Ha;
function Vn() {
  if (Ha) return Vt;
  Ha = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Vt = e, Vt;
}
var Bt, Na;
function Oi() {
  if (Na) return Bt;
  Na = 1;
  var e = Gn(), t = zn(), r = Vn(), i = 1, a = 2;
  function n(s, o, u, l, d, h) {
    var m = u & i, v = s.length, R = o.length;
    if (v != R && !(m && R > v))
      return !1;
    var b = h.get(s), C = h.get(o);
    if (b && C)
      return b == o && C == s;
    var A = -1, p = !0, M = u & a ? new e() : void 0;
    for (h.set(s, o), h.set(o, s); ++A < v; ) {
      var _ = s[A], f = o[A];
      if (l)
        var w = m ? l(f, _, A, o, s, h) : l(_, f, A, s, o, h);
      if (w !== void 0) {
        if (w)
          continue;
        p = !1;
        break;
      }
      if (M) {
        if (!t(o, function(S, P) {
          if (!r(M, P) && (_ === S || d(_, S, u, l, h)))
            return M.push(P);
        })) {
          p = !1;
          break;
        }
      } else if (!(_ === f || d(_, f, u, l, h))) {
        p = !1;
        break;
      }
    }
    return h.delete(s), h.delete(o), p;
  }
  return Bt = n, Bt;
}
var Ht, Ua;
function Bn() {
  if (Ua) return Ht;
  Ua = 1;
  var e = N(), t = e.Uint8Array;
  return Ht = t, Ht;
}
var Nt, Wa;
function Hn() {
  if (Wa) return Nt;
  Wa = 1;
  function e(t) {
    var r = -1, i = Array(t.size);
    return t.forEach(function(a, n) {
      i[++r] = [n, a];
    }), i;
  }
  return Nt = e, Nt;
}
var Ut, Ya;
function Nn() {
  if (Ya) return Ut;
  Ya = 1;
  function e(t) {
    var r = -1, i = Array(t.size);
    return t.forEach(function(a) {
      i[++r] = a;
    }), i;
  }
  return Ut = e, Ut;
}
var Wt, $a;
function Un() {
  if ($a) return Wt;
  $a = 1;
  var e = mr(), t = Bn(), r = Si(), i = Oi(), a = Hn(), n = Nn(), s = 1, o = 2, u = "[object Boolean]", l = "[object Date]", d = "[object Error]", h = "[object Map]", m = "[object Number]", v = "[object RegExp]", R = "[object Set]", b = "[object String]", C = "[object Symbol]", A = "[object ArrayBuffer]", p = "[object DataView]", M = e ? e.prototype : void 0, _ = M ? M.valueOf : void 0;
  function f(w, S, P, k, F, y, c) {
    switch (P) {
      case p:
        if (w.byteLength != S.byteLength || w.byteOffset != S.byteOffset)
          return !1;
        w = w.buffer, S = S.buffer;
      case A:
        return !(w.byteLength != S.byteLength || !y(new t(w), new t(S)));
      case u:
      case l:
      case m:
        return r(+w, +S);
      case d:
        return w.name == S.name && w.message == S.message;
      case v:
      case b:
        return w == S + "";
      case h:
        var g = a;
      case R:
        var O = k & s;
        if (g || (g = n), w.size != S.size && !O)
          return !1;
        var q = c.get(w);
        if (q)
          return q == S;
        k |= o, c.set(w, S);
        var E = i(g(w), g(S), k, F, y, c);
        return c.delete(w), E;
      case C:
        if (_)
          return _.call(w) == _.call(S);
    }
    return !1;
  }
  return Wt = f, Wt;
}
var Yt, Qa;
function Wn() {
  if (Qa) return Yt;
  Qa = 1;
  function e(t, r) {
    for (var i = -1, a = r.length, n = t.length; ++i < a; )
      t[n + i] = r[i];
    return t;
  }
  return Yt = e, Yt;
}
var $t, Ja;
function Yn() {
  if (Ja) return $t;
  Ja = 1;
  var e = Wn(), t = be();
  function r(i, a, n) {
    var s = a(i);
    return t(i) ? s : e(s, n(i));
  }
  return $t = r, $t;
}
var Qt, Xa;
function $n() {
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
var Jt, Za;
function Qn() {
  if (Za) return Jt;
  Za = 1;
  function e() {
    return [];
  }
  return Jt = e, Jt;
}
var Xt, ei;
function Jn() {
  if (ei) return Xt;
  ei = 1;
  var e = $n(), t = Qn(), r = Object.prototype, i = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, n = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return i.call(s, o);
    }));
  } : t;
  return Xt = n, Xt;
}
var Zt, ti;
function Xn() {
  if (ti) return Zt;
  ti = 1;
  function e(t, r) {
    for (var i = -1, a = Array(t); ++i < t; )
      a[i] = r(i);
    return a;
  }
  return Zt = e, Zt;
}
var er, ri;
function Zn() {
  if (ri) return er;
  ri = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(i, a) {
    var n = typeof i;
    return a = a ?? e, !!a && (n == "number" || n != "symbol" && t.test(i)) && i > -1 && i % 1 == 0 && i < a;
  }
  return er = r, er;
}
var tr, ai;
function es() {
  if (ai) return tr;
  ai = 1;
  var e = Xn(), t = mi(), r = be(), i = Sr(), a = Zn(), n = qr(), s = Object.prototype, o = s.hasOwnProperty;
  function u(l, d) {
    var h = r(l), m = !h && t(l), v = !h && !m && i(l), R = !h && !m && !v && n(l), b = h || m || v || R, C = b ? e(l.length, String) : [], A = C.length;
    for (var p in l)
      (d || o.call(l, p)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
      (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      v && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      R && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
      a(p, A))) && C.push(p);
    return C;
  }
  return tr = u, tr;
}
var rr, ii;
function ts() {
  if (ii) return rr;
  ii = 1;
  var e = es(), t = pi(), r = wi();
  function i(a) {
    return r(a) ? e(a) : t(a);
  }
  return rr = i, rr;
}
var ar, ni;
function rs() {
  if (ni) return ar;
  ni = 1;
  var e = Yn(), t = Jn(), r = ts();
  function i(a) {
    return e(a, r, t);
  }
  return ar = i, ar;
}
var ir, si;
function as() {
  if (si) return ir;
  si = 1;
  var e = rs(), t = 1, r = Object.prototype, i = r.hasOwnProperty;
  function a(n, s, o, u, l, d) {
    var h = o & t, m = e(n), v = m.length, R = e(s), b = R.length;
    if (v != b && !h)
      return !1;
    for (var C = v; C--; ) {
      var A = m[C];
      if (!(h ? A in s : i.call(s, A)))
        return !1;
    }
    var p = d.get(n), M = d.get(s);
    if (p && M)
      return p == s && M == n;
    var _ = !0;
    d.set(n, s), d.set(s, n);
    for (var f = h; ++C < v; ) {
      A = m[C];
      var w = n[A], S = s[A];
      if (u)
        var P = h ? u(S, w, A, s, n, d) : u(w, S, A, n, s, d);
      if (!(P === void 0 ? w === S || l(w, S, o, u, d) : P)) {
        _ = !1;
        break;
      }
      f || (f = A == "constructor");
    }
    if (_ && !f) {
      var k = n.constructor, F = s.constructor;
      k != F && "constructor" in n && "constructor" in s && !(typeof k == "function" && k instanceof k && typeof F == "function" && F instanceof F) && (_ = !1);
    }
    return d.delete(n), d.delete(s), _;
  }
  return ir = a, ir;
}
var nr, oi;
function is() {
  if (oi) return nr;
  oi = 1;
  var e = xn(), t = Oi(), r = Un(), i = as(), a = yi(), n = be(), s = Sr(), o = qr(), u = 1, l = "[object Arguments]", d = "[object Array]", h = "[object Object]", m = Object.prototype, v = m.hasOwnProperty;
  function R(b, C, A, p, M, _) {
    var f = n(b), w = n(C), S = f ? d : a(b), P = w ? d : a(C);
    S = S == l ? h : S, P = P == l ? h : P;
    var k = S == h, F = P == h, y = S == P;
    if (y && s(b)) {
      if (!s(C))
        return !1;
      f = !0, k = !1;
    }
    if (y && !k)
      return _ || (_ = new e()), f || o(b) ? t(b, C, A, p, M, _) : r(b, C, S, A, p, M, _);
    if (!(A & u)) {
      var c = k && v.call(b, "__wrapped__"), g = F && v.call(C, "__wrapped__");
      if (c || g) {
        var O = c ? b.value() : b, q = g ? C.value() : C;
        return _ || (_ = new e()), M(O, q, A, p, _);
      }
    }
    return y ? (_ || (_ = new e()), i(b, C, A, p, M, _)) : !1;
  }
  return nr = R, nr;
}
var sr, ci;
function ns() {
  if (ci) return sr;
  ci = 1;
  var e = is(), t = me();
  function r(i, a, n, s, o) {
    return i === a ? !0 : i == null || a == null || !t(i) && !t(a) ? i !== i && a !== a : e(i, a, n, s, r, o);
  }
  return sr = r, sr;
}
var or, ui;
function ss() {
  if (ui) return or;
  ui = 1;
  var e = ns();
  function t(r, i) {
    return e(r, i);
  }
  return or = t, or;
}
var os = ss();
const li = /* @__PURE__ */ yr(os);
function cs({ defineFieldValue: e, field: t, getFieldMeta: r, initData: i, initValidation: a, options: n, target: s }) {
  const o = r(t);
  if (!o)
    return;
  const u = String(o.name);
  ye(i, u) || V(i, u, x(s, u));
  let d = o.factory ? o.factory(i, s) : x(i, u);
  if (d === void 0 && !o.factory) {
    const h = x(s, u);
    h !== void 0 && (d = h, V(i, u, h));
  }
  e(t, d, o), n?.skipValidation || a(t);
}
function us({ fields: e, initData: t, initField: r, legacyInitDone: i, target: a }) {
  if (i)
    return !0;
  if (!e.some((n) => ye(a, n.name)))
    return !1;
  for (let n of e) {
    const s = String(n.name);
    t && s in t || r(s, { skipValidation: !0 });
  }
  return !0;
}
function ls({ data: e, fieldMap: t, initField: r, target: i }) {
  for (let a in i)
    ye(i, a) && t.has(a) && (V(i, a, x(e, a)), r(a));
}
function fs({ checkChange: e, field: t, fieldInstance: r, getFieldMeta: i, target: a, value: n }) {
  const s = r ?? i(t);
  if (s.noObserve)
    Reflect.defineProperty(a, s.name, { value: n });
  else {
    const o = le.box(n);
    return Reflect.defineProperty(a, s.name, {
      get: () => o.get(),
      set: (u) => {
        W(() => o.set(u)), e(s.name, o.get());
      },
      enumerable: !0,
      configurable: !0
    }), o;
  }
  return n;
}
const ds = new dr(), hs = new vr(), vs = new fr(), _s = new hr();
let ps = (() => {
  var e, t, r, i, a, n, s, o, u, l, d, h, m, v, R;
  let b = [], C, A = [], p = [], M, _, f, w, S, P, k, F;
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
    get [(t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = (C = [le], Q))]() {
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
    get [m = ie]() {
      return L(this, u, "f");
    }
    set [m](c) {
      K(this, u, c, "f");
    }
    get [v = re]() {
      return L(this, l, "f");
    }
    set [v](c) {
      K(this, l, c, "f");
    }
    /**
     * Создает модель и инициализирует данные.
     */
    constructor(c = {}, g) {
      t.set(this, (U(this, b), U(this, A, null))), r.set(this, (U(this, p), {})), i.set(this, {}), a.set(this, !1), n.set(this, {}), s.set(this, void 0), o.set(this, void 0), u.set(this, void 0), l.set(this, void 0), this.options = g, this.init(c), this.initLegacyFields();
    }
    getFieldMetaCache() {
      const c = Reflect.getOwnMetadata(Q, this), g = Object.getPrototypeOf(this), O = g ? Reflect.getOwnMetadata(Q, g) : null, q = this[Q];
      if (q && q !== !0 && q.ownRef === c && q.protoRef === O)
        return q;
      const E = hs.fields(this), T = /* @__PURE__ */ new Map();
      for (const j of E)
        T.set(String(j.name), j);
      return this[Q] = { ownRef: c, protoRef: O, list: E, map: T }, this[Q];
    }
    getFieldMeta(c) {
      return this.getFieldMetaCache().map.get(String(c));
    }
    getSubmitMetaCache() {
      const c = Reflect.getOwnMetadata(ae, this), g = Object.getPrototypeOf(this), O = g ? Reflect.getOwnMetadata(ae, g) : null, q = this[ae];
      if (q && q !== !0 && q.ownRef === c && q.protoRef === O)
        return q;
      const E = ds.fields(this), T = /* @__PURE__ */ new Map();
      for (const I of E)
        T.set(String(I.name), I);
      const j = { ownRef: c, protoRef: O, list: E, map: T };
      return this[ae] = j, j;
    }
    getExcludeMetaCache() {
      const c = Reflect.getOwnMetadata(ie, this), g = Object.getPrototypeOf(this), O = g ? Reflect.getOwnMetadata(ie, g) : null, q = this[ie];
      if (q && q !== !0 && q.ownRef === c && q.protoRef === O)
        return q;
      const E = _s.fields(this), T = /* @__PURE__ */ new Map();
      for (const I of E)
        T.set(String(I.name), I);
      const j = { ownRef: c, protoRef: O, list: E, map: T };
      return this[ie] = j, j;
    }
    getValidationMetaCache() {
      const c = Reflect.getOwnMetadata(re, this), g = Object.getPrototypeOf(this), O = g ? Reflect.getOwnMetadata(re, g) : null, q = this[re];
      if (q && q !== !0 && q.ownRef === c && q.protoRef === O)
        return q;
      const E = vs.fields(this), T = /* @__PURE__ */ new Map();
      for (const I of E)
        T.set(String(I.name), I);
      const j = { ownRef: c, protoRef: O, list: E, map: T };
      return this[re] = j, j;
    }
    /**
     * Инициализировать валидацию для поля или всех полей.
     */
    initValidation(c) {
      const g = this.validation;
      if (c)
        x(g, c);
      else
        for (let O in g)
          g[O];
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
    initField(c, g) {
      cs({
        target: this,
        initData: this.initData,
        field: c,
        options: g,
        getFieldMeta: (O) => this.getFieldMeta(O),
        defineFieldValue: (O, q, E) => this.defineFieldValue(O, q, E),
        initValidation: (O) => this.initValidation(O)
      });
    }
    initLegacyFields() {
      this.legacyInitDone = us({
        target: this,
        initData: this.initData,
        fields: this.getFieldMetaCache().list,
        legacyInitDone: this.legacyInitDone,
        initField: (c, g) => this.initField(c, g)
      });
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
    createObservable(c, g, O, q = O) {
      return c = Or(c) ? c : le.box(c), new Proxy(c, {
        get: (E, T, j) => {
          const I = Reflect.get(E, T, j);
          return I && typeof I == "object" && !(I instanceof e) && !Or(c) ? this.createObservable(I, String(T), g, `${q}.${String(T)}`) : I;
        },
        set: (E, T, j, I) => (c = j, this.checkChange(O, Reflect.get(this, O)), Reflect.set(E, T, j, I))
      });
    }
    /**
     * Определить getter/setter для поля модели.
     */
    defineFieldValue(c, g, O) {
      return fs({
        target: this,
        field: c,
        value: g,
        fieldInstance: O,
        getFieldMeta: (q) => this.getFieldMeta(q),
        checkChange: (q, E) => this.checkChange(q, E)
      });
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
    checkChange(c, g) {
      const O = ye(this.committedData, c) ? x(this.committedData, c) : x(this.initData, c), q = c && c in this.initData && !li(O, g);
      return W(() => {
        if (q) {
          V(this.modified_, c, O);
          return;
        }
        c in this.modified_ && li(O, g) && delete this.modified_[c];
      }), q;
    }
    /**
     * Применить данные к полям модели.
     */
    defineData(c) {
      ls({
        target: this,
        data: c,
        fieldMap: this.getFieldMetaCache().map,
        initField: (g) => this.initField(g)
      });
    }
    /**
     * Признак наличия изменений.
     */
    get dirty() {
      return !vn(this.modified_);
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
      const c = /* @__PURE__ */ Object.create({}), g = this.getSubmitMetaCache().map, O = this.getExcludeMetaCache().map, q = (T) => {
        const j = x(this, T), I = g.get(T), Ae = I?.callback;
        return typeof Ae == "function" ? Ae(j, this) : j;
      }, E = (T) => {
        const j = O.get(T);
        if (j)
          switch (typeof j.callback) {
            case "boolean":
              return !!j.callback;
            case "function":
              return j.callback(x(this, T), this);
          }
        return !1;
      };
      return this.getFieldMetaCache().list.forEach((T) => {
        var j;
        if (T.name in this) {
          if (!((j = this.options) === null || j === void 0) && j.byFields && !this.options.byFields.includes(T.name) || E(T.name))
            return;
          V(c, T.name, q(T.name));
        }
      }), c;
    }
    /**
     * Получить объект результатов валидации.
     */
    get validation() {
      this.initLegacyFields();
      const c = {};
      for (const g of this.getValidationMetaCache().list) {
        const O = String(g.name);
        V(c, O, g.callback(x(this, O), this) || "");
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
    const y = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    M = [X], _ = [G], f = [G], w = [G], S = [G], P = [X], k = [X], F = [(R = X).struct.bind(R)], D(e, null, C, { kind: "accessor", name: "initData", static: !1, private: !1, access: { has: (c) => "initData" in c, get: (c) => c.initData, set: (c, g) => {
      c.initData = g;
    } }, metadata: y }, A, p), D(e, null, M, { kind: "getter", name: "dirty", static: !1, private: !1, access: { has: (c) => "dirty" in c, get: (c) => c.dirty }, metadata: y }, null, b), D(e, null, _, { kind: "method", name: "commit", static: !1, private: !1, access: { has: (c) => "commit" in c, get: (c) => c.commit }, metadata: y }, null, b), D(e, null, f, { kind: "method", name: "commitField", static: !1, private: !1, access: { has: (c) => "commitField" in c, get: (c) => c.commitField }, metadata: y }, null, b), D(e, null, w, { kind: "method", name: "reject", static: !1, private: !1, access: { has: (c) => "reject" in c, get: (c) => c.reject }, metadata: y }, null, b), D(e, null, S, { kind: "method", name: "toInit", static: !1, private: !1, access: { has: (c) => "toInit" in c, get: (c) => c.toInit }, metadata: y }, null, b), D(e, null, P, { kind: "getter", name: "validation", static: !1, private: !1, access: { has: (c) => "validation" in c, get: (c) => c.validation }, metadata: y }, null, b), D(e, null, k, { kind: "getter", name: "validAndDirty", static: !1, private: !1, access: { has: (c) => "validAndDirty" in c, get: (c) => c.validAndDirty }, metadata: y }, null, b), D(e, null, F, { kind: "getter", name: "service", static: !1, private: !1, access: { has: (c) => "service" in c, get: (c) => c.service }, metadata: y }, null, b), y && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: y });
  })(), e;
})();
const pr = function(t, r) {
  const i = $(t, r) ? void 0 : t, a = (o, u) => {
    const l = new vr(Object.assign(Object.assign({}, i), { name: String(u), ctx: null }));
    z(l.metadataKey, [...B(l.metadataKey, o, new Array()), l], o), Object.getOwnPropertyDescriptor(o, u) || Object.defineProperty(o, u, {
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
      if (this instanceof ps && typeof this.initField == "function") {
        const u = new vr(Object.assign(Object.assign({}, i), { name: String(o.name), ctx: o }));
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
  return $(t, r) ? s(t, r) : i && !H(r) ? (o, u) => s(o, u) : H(r) ? s(void 0, r) : (o, u) => s(o, u);
}, gs = (e) => !e || typeof e != "object" ? { noObserve: !0 } : Object.assign(Object.assign({}, e), { noObserve: !0 }), ys = function(t, r) {
  return $(t, r) || H(r) ? pr({ noObserve: !0 })(t, r) : pr(gs(t));
};
pr.noObserve = ys;
function Bs(e) {
  const t = (a, n) => {
    const s = new dr({ callback: e, name: String(n) }), o = B(s.metadataKey, a, new Array());
    z(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const n = new dr({ callback: e, name: String(a.name) });
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
function Hs(e) {
  const t = (a, n) => {
    const s = new fr({ callback: e, name: String(n) }), o = B(s.metadataKey, a, new Array());
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
const ms = (e) => ({
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
  let i = [], a, n = [], s = [], o, u = [], l = [], d, h, m, v, R, b, C, A, p, M;
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
      t.set(this, (U(this, i), U(this, n, []))), r.set(this, (U(this, s), U(this, u, []))), this._model = U(this, l), ur(this);
    }
    add(f) {
      this.items.push(f);
    }
    addMany(f) {
      f?.length && (this.items = this.items.concat(f));
    }
    remove(f) {
      this.items = this.items.filter((w) => w !== f);
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
    findBy(f, w) {
      return this.items.find((S) => S?.[f] === w);
    }
    clear() {
      this.items = [];
    }
    get size() {
      return this.items.length;
    }
    get snapshot() {
      return ms(this);
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
    applyLoaded(f, w = {}) {
      const { model: S, mode: P = "replace", cash: k = !0 } = w, F = S === void 0 ? this._model : S;
      k && this.setCash(f);
      const y = F ? f.map((c) => new F(c)) : f;
      if (P === "append") {
        this.addMany(y);
        return;
      }
      this.items = y;
    }
    /**
     * Сохранить оригинальные данные стора.
     */
    setCash(f) {
      this._cash = f ?? [];
    }
  }, t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), (() => {
    const _ = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    a = [le], o = [le], d = [G], h = [G], m = [G], v = [G], R = [X], b = [X], C = [X], A = [G], p = [G], M = [G], D(e, null, a, { kind: "accessor", name: "items", static: !1, private: !1, access: { has: (f) => "items" in f, get: (f) => f.items, set: (f, w) => {
      f.items = w;
    } }, metadata: _ }, n, s), D(e, null, o, { kind: "accessor", name: "_cash", static: !1, private: !1, access: { has: (f) => "_cash" in f, get: (f) => f._cash, set: (f, w) => {
      f._cash = w;
    } }, metadata: _ }, u, l), D(e, null, d, { kind: "method", name: "add", static: !1, private: !1, access: { has: (f) => "add" in f, get: (f) => f.add }, metadata: _ }, null, i), D(e, null, h, { kind: "method", name: "addMany", static: !1, private: !1, access: { has: (f) => "addMany" in f, get: (f) => f.addMany }, metadata: _ }, null, i), D(e, null, m, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (f) => "remove" in f, get: (f) => f.remove }, metadata: _ }, null, i), D(e, null, v, { kind: "method", name: "clear", static: !1, private: !1, access: { has: (f) => "clear" in f, get: (f) => f.clear }, metadata: _ }, null, i), D(e, null, R, { kind: "getter", name: "size", static: !1, private: !1, access: { has: (f) => "size" in f, get: (f) => f.size }, metadata: _ }, null, i), D(e, null, b, { kind: "getter", name: "snapshot", static: !1, private: !1, access: { has: (f) => "snapshot" in f, get: (f) => f.snapshot }, metadata: _ }, null, i), D(e, null, C, { kind: "getter", name: "cash", static: !1, private: !1, access: { has: (f) => "cash" in f, get: (f) => f.cash }, metadata: _ }, null, i), D(e, null, A, { kind: "method", name: "reset", static: !1, private: !1, access: { has: (f) => "reset" in f, get: (f) => f.reset }, metadata: _ }, null, i), D(e, null, p, { kind: "method", name: "applyLoaded", static: !1, private: !1, access: { has: (f) => "applyLoaded" in f, get: (f) => f.applyLoaded }, metadata: _ }, null, i), D(e, null, M, { kind: "method", name: "setCash", static: !1, private: !1, access: { has: (f) => "setCash" in f, get: (f) => f.setCash }, metadata: _ }, null, i), _ && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: _ });
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
function Ws(e) {
  return Z(e, "instance");
}
function Ys(e) {
  return ((t, r) => Yi(e)(t, r));
}
function $s(e, t) {
  const r = (i, a) => {
    var n;
    const s = typeof e == "string" ? { id: e } : typeof e == "object" ? e : { id: (n = a?.name) !== null && n !== void 0 ? n : i?.name };
    vi(s)(i, a);
  };
  return typeof e == "function" ? r(e, t) : (i, a) => r(i, a);
}
class Qs {
}
const cr = new _r(), bs = (e) => typeof Node < "u" && e instanceof Node, ws = (e) => {
  if (e == null)
    return !0;
  const t = typeof e;
  return t === "function" ? !1 : t !== "object" ? !0 : Di(e) ? !1 : !bs(e);
}, Ss = (e, t) => {
  if (!ws(t))
    throw new TypeError(`PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${e}".`);
};
function Js(e, t) {
  return Fi((r = {}) => {
    const { viewModel: i } = r, a = Ti(r, ["viewModel"]), { instance: n } = Mi(() => {
      const u = Z(e) || (typeof e != "string" ? { instance: new e() } : void 0);
      return { instance: u?.instance };
    }, [e]), s = i ?? n;
    if (Ei(() => {
      if (s)
        return typeof s.onInit == "function" && s.onInit(), () => {
          typeof s.onDispose == "function" && s.onDispose();
        };
    }, [s]), s) {
      const o = cr.fields(s), u = o.length > 0 ? o : cr.fields(Object.getPrototypeOf(s));
      for (const l in a)
        if (u instanceof Array) {
          const d = u.find((h) => h.name === l);
          if (d) {
            const h = x(a, l);
            Ss(l, h), V(s, d.originName, h);
          }
        }
      return z(cr.metadataKey, u, s), t(Object.assign(Object.assign({}, a), { viewModel: s }));
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
}, qs = ["load", "save", "remove", "delete"], fi = /* @__PURE__ */ Symbol("SERVICE_STATE"), ue = /* @__PURE__ */ Symbol("LAST_CMD"), he = /* @__PURE__ */ Symbol("LAST_LOAD_LABEL");
function Os(e) {
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
      const r = e[ue];
      (t = r?.resetError) === null || t === void 0 || t.call(r), Y(e, r, e[he]);
    },
    cancel: () => {
      var t;
      const r = e[ue];
      (t = r?.cancel) === null || t === void 0 || t.call(r), Y(e, r, e[he]);
    },
    dispose: () => {
      var t;
      const r = e[ue];
      (t = r?.dispose) === null || t === void 0 || t.call(r), Y(e, r, e[he]);
    },
    clearQueue: () => {
      var t;
      const r = e[ue];
      (t = r?.clearQueue) === null || t === void 0 || t.call(r);
    }
  }));
}
function Y(e, t, r) {
  t && (t.state === gr.load && r ? e.state = r : e.state = t.state, e.isExecuting = t.isExecuting, e.activeCount = t.activeCount, e.isCanceled = t.isCanceled, e.isDisposed = t.isDisposed, e.error = t.error, e.result = t.result);
}
function As(e, t, r, i) {
  return Ci(e), Object.assign(Object.assign({}, i), { onStart: (...a) => {
    var n, s;
    const o = r?.();
    e[ue] = o, e[he] = t, e.state = t, e.isExecuting = !0, e.isCanceled = !1, (!((n = void 0) !== null && n !== void 0) || n) && (e.error = null), Y(e, o, t), (s = void 0) === null || s === void 0 || s.call(i, ...a);
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
function Cs(e, t) {
  Ci(e);
  const r = t ? Object.assign({}, t) : {};
  if (!t) {
    for (const i of qs)
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
    const u = As(e, s ?? ee.load, () => o);
    o = Ri((...d) => ne(this, void 0, void 0, function* () {
      return n.apply(e, d);
    }), u);
    const l = Os(o);
    s && (e.states[s] = s), Object.defineProperty(e, i, { value: l, configurable: !0, writable: !0 });
  }
}
class Xs {
  constructor() {
    this.state = ee.ready, this.states = Object.assign({}, ee), this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, Cs(this);
  }
}
const gr = {
  load: "load",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, de = () => {
}, Rs = {
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
class Ts {
  /**
   * @param fn Асинхронная функция, которую выполняет команда.
   * @param opt Опции команды.
   */
  constructor(t, r) {
    var i, a, n, s;
    this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, this.states = gr, this.queue = [], this.runningPromise = null, this.queueTail = Promise.resolve(), this.cancelToken = 0, this.fn = t, this.opt = Object.assign({ concurrency: (i = r?.concurrency) !== null && i !== void 0 ? i : "ignore", trackError: (a = r?.trackError) !== null && a !== void 0 ? a : !0, resetErrorOnExecute: (n = r?.resetErrorOnExecute) !== null && n !== void 0 ? n : !0, swallowError: (s = r?.swallowError) !== null && s !== void 0 ? s : !0 }, r), ki(this, Rs, { autoBind: !0 });
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
    return gr[t];
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
    }, a = () => ne(this, void 0, void 0, function* () {
      var n, s, o, u, l, d, h, m;
      if (this.isDisposed)
        return;
      W(() => {
        this.activeCount += 1, this.isExecuting = this.activeCount > 0, this.isCanceled = !1, this.result = void 0, this.opt.trackError && this.opt.resetErrorOnExecute && (this.error = null);
      });
      const v = this.cancelToken;
      let R = !1, b = !1, C = null, A = null;
      try {
        (s = (n = this.opt).onStart) === null || s === void 0 || s.call(n, ...t), A = this.fn(...t);
        const p = yield A;
        if (b = this.cancelToken !== v, b) {
          W(() => {
            this.isCanceled = !0, this.result = void 0;
          });
          return;
        }
        return W(() => {
          this.result = p;
        }), (u = (o = this.opt).onSuccess) === null || u === void 0 || u.call(o, p, ...t), R = !0, p;
      } catch (p) {
        if (C = p, b = this.cancelToken !== v, W(() => {
          this.result = void 0, this.opt.trackError && (this.error = p);
        }), (d = (l = this.opt).onError) === null || d === void 0 || d.call(l, p), !this.opt.swallowError)
          throw p;
        return;
      } finally {
        W(() => {
          this.activeCount = Math.max(0, this.activeCount - 1), this.isExecuting = this.activeCount > 0;
        }), !b && this.cancelToken !== v && (b = !0), (m = (h = this.opt).onFinally) === null || m === void 0 || m.call(h, { ok: R, canceled: b, error: C }, ...t);
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
          resolve: de,
          reject: de,
          canceled: !1,
          settled: !1
        }, o = this.activeCount === 0 && this.queue.length === 0;
        s.promise = new Promise((d, h) => {
          s.resolve = d, s.reject = h;
        }), this.queue.push(s);
        const u = () => ne(this, void 0, void 0, function* () {
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
        return this.queueTail = l.then(de, de), i(s.promise);
      }
      default:
        return this.isExecuting && this.runningPromise ? this.runningPromise : i(a());
    }
  }
}
function Ri(e, t) {
  return new Ts(e, t);
}
function Zs(e, t) {
  const r = Pi(e), i = /* @__PURE__ */ new Set(), a = t?.onCancel;
  return Ri((...s) => {
    const o = r(...s);
    i.add(o);
    const u = () => {
      i.delete(o);
    };
    return o.then(u, u), new Promise((l, d) => {
      o.then(l, (h) => {
        const m = h;
        if (Ii(m)) {
          l(void 0);
          return;
        }
        d(m);
      });
    });
  }, Object.assign(Object.assign({}, t), { onCancel: () => {
    var s;
    for (const o of i)
      (s = o.cancel) === null || s === void 0 || s.call(o);
    a?.();
  } }));
}
function eo(e) {
  return function(...t) {
    return W(() => e.apply(this, t));
  };
}
export {
  Xs as CommandService,
  gr as DEFAULT_STATES,
  Z as GetService,
  Ws as GetStore,
  Yi as Inject,
  Ys as InjectStore,
  Ks as MakeObservable,
  ps as Model,
  Gs as PropFromView,
  vi as Service,
  xs as SetService,
  $s as Store,
  Ai as StoreBase,
  Fs as TODO,
  Qs as ViewModel,
  Cs as applyCommandMethods,
  Ri as asyncCommand,
  eo as commandAction,
  z as defineMetadata,
  Ls as define_prop,
  zs as exclude,
  pr as field,
  Zs as flowCommand,
  Ui as getExecutingFunctionNameByStack,
  Ni as getMicrofrontComponent,
  B as getOwnMetadata,
  ks as isSerializable,
  Is as lazyMicrofrontComponent,
  Hi as resolveMicrofrontComponent,
  Bs as submit,
  Hs as validation,
  Js as view
};
