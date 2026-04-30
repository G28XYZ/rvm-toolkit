import "reflect-metadata";
import { d as fe, _ as L, a as K, b as N, c as E, e as Si } from "./tslib.es6-DQYNRcek.js";
import { makeObservable as nr, observable as oe, isObservable as br, runInAction as U, computed as $, action as G, flow as Ri, isFlowCancellationError as Ai, makeAutoObservable as Ci } from "mobx";
import { observer as ji } from "mobx-react";
import { useMemo as Ti, useEffect as Mi, isValidElement as Di } from "react";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qe, wr;
function ci() {
  if (wr) return qe;
  wr = 1;
  var e = typeof ce == "object" && ce && ce.Object === Object && ce;
  return qe = e, qe;
}
var Oe, qr;
function B() {
  if (qr) return Oe;
  qr = 1;
  var e = ci(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Oe = r, Oe;
}
var Se, Or;
function _r() {
  if (Or) return Se;
  Or = 1;
  var e = B(), t = e.Symbol;
  return Se = t, Se;
}
var Re, Sr;
function Ei() {
  if (Sr) return Re;
  Sr = 1;
  var e = _r(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
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
  return Re = i, Re;
}
var Ae, Rr;
function Pi() {
  if (Rr) return Ae;
  Rr = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Ae = r, Ae;
}
var Ce, Ar;
function he() {
  if (Ar) return Ce;
  Ar = 1;
  var e = _r(), t = Ei(), r = Pi(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : n : i && i in Object(o) ? t(o) : r(o);
  }
  return Ce = s, Ce;
}
var je, Cr;
function ui() {
  if (Cr) return je;
  Cr = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return je = e, je;
}
var Te, jr;
function pr() {
  if (jr) return Te;
  jr = 1;
  var e = he(), t = ui(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!t(o))
      return !1;
    var u = e(o);
    return u == n || u == a || u == r || u == i;
  }
  return Te = s, Te;
}
var Ii = pr();
const ki = /* @__PURE__ */ vr(Ii), z = (e, t, r) => Reflect.getOwnMetadata(e, t) || r || {}, H = (e, t, r) => Reflect.defineMetadata(e, t, r);
function bs(...e) {
  try {
    return JSON.stringify(e), !0;
  } catch {
    return !1;
  }
}
function xi(e) {
  if (e && typeof e == "string") {
    let [t] = e.split(`
`)[2].replace(/at (get)?/, "").match(/.*/g) || [];
    return t && (t = t.trim()), t;
  }
}
const Tr = {}, Me = [];
let Mr = !1;
const ws = (e, ...t) => {
  const r = new Error().stack;
  if (!Mr)
    console.log("%c TODO", "background: #222; color: #bada55", Tr), Mr = !0;
  else {
    const a = xi(r);
    Me.includes(a) === !1 && (Me.push(a), Reflect.set(Tr, `${Me.length}) ${e}`, { msg: t, get path() {
      return console.info(t, a), a;
    } }));
  }
  function n(...a) {
  }
  return n;
}, Dr = /* @__PURE__ */ new WeakMap(), V = (e, t) => !!e && (typeof t == "string" || typeof t == "symbol"), F = (e) => !!e && typeof e == "object" && "kind" in e, Fi = (e) => ({
  kind: "class",
  name: e,
  addInitializer: () => {
  },
  metadata: {}
}), ve = (e, t) => {
  if (!e)
    return;
  let r = Dr.get(e);
  r || (r = /* @__PURE__ */ new Map(), Dr.set(e, r));
  let n = r.get(t.metadataKey);
  n || (n = /* @__PURE__ */ new Set(), r.set(t.metadataKey, n));
  const a = String(t.name);
  if (n.has(a))
    return;
  const i = z(t.metadataKey, e, new Array());
  i.some((s) => String(s.name) === a) || H(t.metadataKey, [...i, t], e), n.add(a);
}, Q = /* @__PURE__ */ Symbol("service-key"), sr = new Proxy({}, Reflect);
function Li(e) {
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
    if (V(n, a)) {
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
  const n = z(Q, sr);
  if (typeof e != "string") {
    const a = z(Q, e);
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
function li(e, t) {
  const r = (a, i) => {
    const s = String(typeof e == "string" && e || typeof e == "object" && e?.id || i?.name || a?.name), o = z(Q, sr), u = new Proxy({
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
    o[s] = u, H(Q, o, sr), H(Q, o[s], a);
  };
  function n(a, i) {
    var s, o;
    const u = a.__legacy_source__, l = F(i) ? i : Fi((o = (s = u?.name) !== null && s !== void 0 ? s : a?.name) !== null && o !== void 0 ? o : "");
    r(a, l), u && u !== a && H(Q, z(Q, a), u);
  }
  return ki(e) ? n(e, t) : e ? (a, i) => n(a, i) : n;
}
const qs = (e, t) => {
  const { kind: r = "class", name: n = "", addInitializer: a = () => {
  }, metadata: i } = t?.ctx || {};
  return li(t)(e, {
    kind: r,
    name: n,
    addInitializer: a,
    metadata: i
  }), J(e).instance;
};
function De(e) {
  var t, r, n;
  const a = Object.assign({ enumerable: !1, writable: !0 }, e), i = Object.assign({ configurable: !0, enumerable: !1, writable: !0 }, e), s = {
    configurable: (t = i.configurable) !== null && t !== void 0 ? t : !0,
    enumerable: (r = i.enumerable) !== null && r !== void 0 ? r : !1,
    writable: (n = i.writable) !== null && n !== void 0 ? n : !0,
    value: void 0
  };
  return function(o, u) {
    if (V(o, u)) {
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
    if (F(u)) {
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
function Os(e, t) {
  return V(e, t) || F(t) ? De()(e, t) : De(e);
}
function Ss(e, t) {
  const r = (i) => class extends i {
    constructor(...s) {
      super(...s), nr(this);
    }
  }, n = (i, s) => {
    if (typeof Reflect?.getOwnMetadataKeys == "function")
      for (const o of Reflect.getOwnMetadataKeys(i)) {
        const u = Reflect.getOwnMetadata(o, i);
        Reflect.defineMetadata(o, u, s);
      }
  };
  function a(i, s) {
    if (!F(s)) {
      const o = i, u = r(o);
      return Object.defineProperty(u, "__legacy_source__", { value: o, configurable: !0 }), n(o, u), u;
    }
    s.addInitializer(function() {
      nr(this);
    });
  }
  return e && !F(t) || e ? a(e, t) : a;
}
const Y = /* @__PURE__ */ Symbol("field-key"), ee = /* @__PURE__ */ Symbol("validation-key"), te = /* @__PURE__ */ Symbol("submit-key"), re = /* @__PURE__ */ Symbol("exclude-key"), Ki = /* @__PURE__ */ Symbol("prop-from-view-key");
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
class or extends Z {
  constructor() {
    super(...arguments), this.metadataKey = ee;
  }
}
class cr extends Z {
  constructor() {
    super(...arguments), this.metadataKey = te;
  }
}
class ur extends Z {
  constructor() {
    super(...arguments), this.metadataKey = re;
  }
}
class lr extends Z {
  /**
   * Создать метаданные поля модели.
   */
  constructor(t = {}) {
    super(t), this.factory = null, this.mapping = null, this.noObserve = null, this.collectChanges = !1, this.name = null, this.ctx = null, this.metadataKey = Y, this.isInit = !1, this.factory = t.factory, this.mapping = t.mapping, this.noObserve = t.noObserve, this.name = t.name, this.ctx = t.ctx, this.collectChanges = !!t.collectChanges;
  }
}
class fr extends Z {
  /**
   * Создать метаданные для PropFromView.
   */
  constructor(t = {}) {
    super(t), this.metadataKey = Ki;
    for (const r in this)
      t && r in t && (this[r] = Reflect.get(t, r));
  }
}
function Rs(e) {
  const t = (a, i) => {
    const s = new fr({ name: e, originName: String(i) });
    s.name = e, s.originName = String(i);
    const o = z(s.metadataKey, a, new Array());
    H(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new fr(), s = i.fields(this);
      for (const o in this)
        s instanceof Array && a.name === o && (i.name = e, i.originName = o, i.value = this[o], s.push(i));
      H(i.metadataKey, s, this);
    });
  };
  function n(a, i) {
    if (V(a, i)) {
      t(a, i);
      return;
    }
    if (F(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
function As(e) {
  const t = (a, i) => {
    const s = new ur({ callback: e, name: String(i) }), o = z(s.metadataKey, a, new Array());
    H(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    a.addInitializer(function() {
      const i = new ur({ callback: e, name: String(a.name) });
      ve(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (V(a, i)) {
      t(a, i);
      return;
    }
    if (F(i))
      return r(i), i.kind === "field" ? void 0 : i;
  }
  if (e)
    return ((a, i) => n(a, i));
}
var Ee, Er;
function fi() {
  if (Er) return Ee;
  Er = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Ee = t, Ee;
}
var Pe, Pr;
function Gi() {
  if (Pr) return Pe;
  Pr = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Pe = e, Pe;
}
var Ie, Ir;
function Hi() {
  if (Ir) return Ie;
  Ir = 1;
  var e = Gi(), t = e(Object.keys, Object);
  return Ie = t, Ie;
}
var ke, kr;
function di() {
  if (kr) return ke;
  kr = 1;
  var e = fi(), t = Hi(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var s = [];
    for (var o in Object(i))
      n.call(i, o) && o != "constructor" && s.push(o);
    return s;
  }
  return ke = a, ke;
}
var xe, xr;
function Vi() {
  if (xr) return xe;
  xr = 1;
  var e = B(), t = e["__core-js_shared__"];
  return xe = t, xe;
}
var Fe, Fr;
function zi() {
  if (Fr) return Fe;
  Fr = 1;
  var e = Vi(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Fe = r, Fe;
}
var Le, Lr;
function hi() {
  if (Lr) return Le;
  Lr = 1;
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
  return Le = r, Le;
}
var Ke, Kr;
function Bi() {
  if (Kr) return Ke;
  Kr = 1;
  var e = pr(), t = zi(), r = ui(), n = hi(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, d = RegExp(
    "^" + u.call(l).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(b) {
    if (!r(b) || t(b))
      return !1;
    var _ = e(b) ? d : i;
    return _.test(n(b));
  }
  return Ke = h, Ke;
}
var Ge, Gr;
function Ni() {
  if (Gr) return Ge;
  Gr = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ge = e, Ge;
}
var He, Hr;
function ae() {
  if (Hr) return He;
  Hr = 1;
  var e = Bi(), t = Ni();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return He = r, He;
}
var Ve, Vr;
function Ui() {
  if (Vr) return Ve;
  Vr = 1;
  var e = ae(), t = B(), r = e(t, "DataView");
  return Ve = r, Ve;
}
var ze, zr;
function gr() {
  if (zr) return ze;
  zr = 1;
  var e = ae(), t = B(), r = e(t, "Map");
  return ze = r, ze;
}
var Be, Br;
function Wi() {
  if (Br) return Be;
  Br = 1;
  var e = ae(), t = B(), r = e(t, "Promise");
  return Be = r, Be;
}
var Ne, Nr;
function Yi() {
  if (Nr) return Ne;
  Nr = 1;
  var e = ae(), t = B(), r = e(t, "Set");
  return Ne = r, Ne;
}
var Ue, Ur;
function Qi() {
  if (Ur) return Ue;
  Ur = 1;
  var e = ae(), t = B(), r = e(t, "WeakMap");
  return Ue = r, Ue;
}
var We, Wr;
function vi() {
  if (Wr) return We;
  Wr = 1;
  var e = Ui(), t = gr(), r = Wi(), n = Yi(), a = Qi(), i = he(), s = hi(), o = "[object Map]", u = "[object Object]", l = "[object Promise]", d = "[object Set]", h = "[object WeakMap]", b = "[object DataView]", _ = s(e), T = s(t), q = s(r), A = s(n), R = s(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != b || t && y(new t()) != o || r && y(r.resolve()) != l || n && y(new n()) != d || a && y(new a()) != h) && (y = function(M) {
    var g = i(M), f = g == u ? M.constructor : void 0, O = f ? s(f) : "";
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
    return g;
  }), We = y, We;
}
var Ye, Yr;
function _e() {
  if (Yr) return Ye;
  Yr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ye = e, Ye;
}
var Qe, Qr;
function $i() {
  if (Qr) return Qe;
  Qr = 1;
  var e = he(), t = _e(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Qe = n, Qe;
}
var $e, $r;
function _i() {
  if ($r) return $e;
  $r = 1;
  var e = $i(), t = _e(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return $e = i, $e;
}
var Je, Jr;
function pe() {
  if (Jr) return Je;
  Jr = 1;
  var e = Array.isArray;
  return Je = e, Je;
}
var Xe, Xr;
function pi() {
  if (Xr) return Xe;
  Xr = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Xe = t, Xe;
}
var Ze, Zr;
function gi() {
  if (Zr) return Ze;
  Zr = 1;
  var e = pr(), t = pi();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Ze = r, Ze;
}
var ie = { exports: {} }, et, ea;
function Ji() {
  if (ea) return et;
  ea = 1;
  function e() {
    return !1;
  }
  return et = e, et;
}
ie.exports;
var ta;
function yr() {
  return ta || (ta = 1, (function(e, t) {
    var r = B(), n = Ji(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, l = u || n;
    e.exports = l;
  })(ie, ie.exports)), ie.exports;
}
var tt, ra;
function Xi() {
  if (ra) return tt;
  ra = 1;
  var e = he(), t = pi(), r = _e(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", l = "[object Map]", d = "[object Number]", h = "[object Object]", b = "[object RegExp]", _ = "[object Set]", T = "[object String]", q = "[object WeakMap]", A = "[object ArrayBuffer]", R = "[object DataView]", y = "[object Float32Array]", M = "[object Float64Array]", g = "[object Int8Array]", f = "[object Int16Array]", O = "[object Int32Array]", S = "[object Uint8Array]", P = "[object Uint8ClampedArray]", k = "[object Uint16Array]", x = "[object Uint32Array]", m = {};
  m[y] = m[M] = m[g] = m[f] = m[O] = m[S] = m[P] = m[k] = m[x] = !0, m[n] = m[a] = m[A] = m[i] = m[R] = m[s] = m[o] = m[u] = m[l] = m[d] = m[h] = m[b] = m[_] = m[T] = m[q] = !1;
  function c(v) {
    return r(v) && t(v.length) && !!m[e(v)];
  }
  return tt = c, tt;
}
var rt, aa;
function Zi() {
  if (aa) return rt;
  aa = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return rt = e, rt;
}
var ne = { exports: {} };
ne.exports;
var ia;
function en() {
  return ia || (ia = 1, (function(e, t) {
    var r = ci(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && r.process, o = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(ne, ne.exports)), ne.exports;
}
var at, na;
function mr() {
  if (na) return at;
  na = 1;
  var e = Xi(), t = Zi(), r = en(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return at = a, at;
}
var it, sa;
function tn() {
  if (sa) return it;
  sa = 1;
  var e = di(), t = vi(), r = _i(), n = pe(), a = gi(), i = yr(), s = fi(), o = mr(), u = "[object Map]", l = "[object Set]", d = Object.prototype, h = d.hasOwnProperty;
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
  return it = b, it;
}
var rn = tn();
const an = /* @__PURE__ */ vr(rn);
var nt, oa;
function nn() {
  if (oa) return nt;
  oa = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return nt = e, nt;
}
var st, ca;
function yi() {
  if (ca) return st;
  ca = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return st = e, st;
}
var ot, ua;
function ge() {
  if (ua) return ot;
  ua = 1;
  var e = yi();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return ot = t, ot;
}
var ct, la;
function sn() {
  if (la) return ct;
  la = 1;
  var e = ge(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : r.call(i, s, 1), --this.size, !0;
  }
  return ct = n, ct;
}
var ut, fa;
function on() {
  if (fa) return ut;
  fa = 1;
  var e = ge();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return ut = t, ut;
}
var lt, da;
function cn() {
  if (da) return lt;
  da = 1;
  var e = ge();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return lt = t, lt;
}
var ft, ha;
function un() {
  if (ha) return ft;
  ha = 1;
  var e = ge();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return ft = t, ft;
}
var dt, va;
function ye() {
  if (va) return dt;
  va = 1;
  var e = nn(), t = sn(), r = on(), n = cn(), a = un();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, dt = i, dt;
}
var ht, _a;
function ln() {
  if (_a) return ht;
  _a = 1;
  var e = ye();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return ht = t, ht;
}
var vt, pa;
function fn() {
  if (pa) return vt;
  pa = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return vt = e, vt;
}
var _t, ga;
function dn() {
  if (ga) return _t;
  ga = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return _t = e, _t;
}
var pt, ya;
function hn() {
  if (ya) return pt;
  ya = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return pt = e, pt;
}
var gt, ma;
function me() {
  if (ma) return gt;
  ma = 1;
  var e = ae(), t = e(Object, "create");
  return gt = t, gt;
}
var yt, ba;
function vn() {
  if (ba) return yt;
  ba = 1;
  var e = me();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return yt = t, yt;
}
var mt, wa;
function _n() {
  if (wa) return mt;
  wa = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return mt = e, mt;
}
var bt, qa;
function pn() {
  if (qa) return bt;
  qa = 1;
  var e = me(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === t ? void 0 : o;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return bt = a, bt;
}
var wt, Oa;
function gn() {
  if (Oa) return wt;
  Oa = 1;
  var e = me(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return wt = n, wt;
}
var qt, Sa;
function yn() {
  if (Sa) return qt;
  Sa = 1;
  var e = me(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return qt = r, qt;
}
var Ot, Ra;
function mn() {
  if (Ra) return Ot;
  Ra = 1;
  var e = vn(), t = _n(), r = pn(), n = gn(), a = yn();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Ot = i, Ot;
}
var St, Aa;
function bn() {
  if (Aa) return St;
  Aa = 1;
  var e = mn(), t = ye(), r = gr();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return St = n, St;
}
var Rt, Ca;
function wn() {
  if (Ca) return Rt;
  Ca = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Rt = e, Rt;
}
var At, ja;
function be() {
  if (ja) return At;
  ja = 1;
  var e = wn();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return At = t, At;
}
var Ct, Ta;
function qn() {
  if (Ta) return Ct;
  Ta = 1;
  var e = be();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Ct = t, Ct;
}
var jt, Ma;
function On() {
  if (Ma) return jt;
  Ma = 1;
  var e = be();
  function t(r) {
    return e(this, r).get(r);
  }
  return jt = t, jt;
}
var Tt, Da;
function Sn() {
  if (Da) return Tt;
  Da = 1;
  var e = be();
  function t(r) {
    return e(this, r).has(r);
  }
  return Tt = t, Tt;
}
var Mt, Ea;
function Rn() {
  if (Ea) return Mt;
  Ea = 1;
  var e = be();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Mt = t, Mt;
}
var Dt, Pa;
function mi() {
  if (Pa) return Dt;
  Pa = 1;
  var e = bn(), t = qn(), r = On(), n = Sn(), a = Rn();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Dt = i, Dt;
}
var Et, Ia;
function An() {
  if (Ia) return Et;
  Ia = 1;
  var e = ye(), t = gr(), r = mi(), n = 200;
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
var Pt, ka;
function Cn() {
  if (ka) return Pt;
  ka = 1;
  var e = ye(), t = ln(), r = fn(), n = dn(), a = hn(), i = An();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Pt = s, Pt;
}
var It, xa;
function jn() {
  if (xa) return It;
  xa = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return It = t, It;
}
var kt, Fa;
function Tn() {
  if (Fa) return kt;
  Fa = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return kt = e, kt;
}
var xt, La;
function Mn() {
  if (La) return xt;
  La = 1;
  var e = mi(), t = jn(), r = Tn();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, xt = n, xt;
}
var Ft, Ka;
function Dn() {
  if (Ka) return Ft;
  Ka = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ft = e, Ft;
}
var Lt, Ga;
function En() {
  if (Ga) return Lt;
  Ga = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Lt = e, Lt;
}
var Kt, Ha;
function bi() {
  if (Ha) return Kt;
  Ha = 1;
  var e = Mn(), t = Dn(), r = En(), n = 1, a = 2;
  function i(s, o, u, l, d, h) {
    var b = u & n, _ = s.length, T = o.length;
    if (_ != T && !(b && T > _))
      return !1;
    var q = h.get(s), A = h.get(o);
    if (q && A)
      return q == o && A == s;
    var R = -1, y = !0, M = u & a ? new e() : void 0;
    for (h.set(s, o), h.set(o, s); ++R < _; ) {
      var g = s[R], f = o[R];
      if (l)
        var O = b ? l(f, g, R, o, s, h) : l(g, f, R, s, o, h);
      if (O !== void 0) {
        if (O)
          continue;
        y = !1;
        break;
      }
      if (M) {
        if (!t(o, function(S, P) {
          if (!r(M, P) && (g === S || d(g, S, u, l, h)))
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
  return Kt = i, Kt;
}
var Gt, Va;
function Pn() {
  if (Va) return Gt;
  Va = 1;
  var e = B(), t = e.Uint8Array;
  return Gt = t, Gt;
}
var Ht, za;
function In() {
  if (za) return Ht;
  za = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return Ht = e, Ht;
}
var Vt, Ba;
function kn() {
  if (Ba) return Vt;
  Ba = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Vt = e, Vt;
}
var zt, Na;
function xn() {
  if (Na) return zt;
  Na = 1;
  var e = _r(), t = Pn(), r = yi(), n = bi(), a = In(), i = kn(), s = 1, o = 2, u = "[object Boolean]", l = "[object Date]", d = "[object Error]", h = "[object Map]", b = "[object Number]", _ = "[object RegExp]", T = "[object Set]", q = "[object String]", A = "[object Symbol]", R = "[object ArrayBuffer]", y = "[object DataView]", M = e ? e.prototype : void 0, g = M ? M.valueOf : void 0;
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
        var p = k & s;
        if (v || (v = i), O.size != S.size && !p)
          return !1;
        var w = c.get(O);
        if (w)
          return w == S;
        k |= o, c.set(O, S);
        var D = n(v(O), v(S), k, x, m, c);
        return c.delete(O), D;
      case A:
        if (g)
          return g.call(O) == g.call(S);
    }
    return !1;
  }
  return zt = f, zt;
}
var Bt, Ua;
function Fn() {
  if (Ua) return Bt;
  Ua = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return Bt = e, Bt;
}
var Nt, Wa;
function Ln() {
  if (Wa) return Nt;
  Wa = 1;
  var e = Fn(), t = pe();
  function r(n, a, i) {
    var s = a(n);
    return t(n) ? s : e(s, i(n));
  }
  return Nt = r, Nt;
}
var Ut, Ya;
function Kn() {
  if (Ya) return Ut;
  Ya = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, s = []; ++n < a; ) {
      var o = t[n];
      r(o, n, t) && (s[i++] = o);
    }
    return s;
  }
  return Ut = e, Ut;
}
var Wt, Qa;
function Gn() {
  if (Qa) return Wt;
  Qa = 1;
  function e() {
    return [];
  }
  return Wt = e, Wt;
}
var Yt, $a;
function Hn() {
  if ($a) return Yt;
  $a = 1;
  var e = Kn(), t = Gn(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return n.call(s, o);
    }));
  } : t;
  return Yt = i, Yt;
}
var Qt, Ja;
function Vn() {
  if (Ja) return Qt;
  Ja = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Qt = e, Qt;
}
var $t, Xa;
function zn() {
  if (Xa) return $t;
  Xa = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return $t = r, $t;
}
var Jt, Za;
function Bn() {
  if (Za) return Jt;
  Za = 1;
  var e = Vn(), t = _i(), r = pe(), n = yr(), a = zn(), i = mr(), s = Object.prototype, o = s.hasOwnProperty;
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
  return Jt = u, Jt;
}
var Xt, ei;
function Nn() {
  if (ei) return Xt;
  ei = 1;
  var e = Bn(), t = di(), r = gi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Xt = n, Xt;
}
var Zt, ti;
function Un() {
  if (ti) return Zt;
  ti = 1;
  var e = Ln(), t = Hn(), r = Nn();
  function n(a) {
    return e(a, r, t);
  }
  return Zt = n, Zt;
}
var er, ri;
function Wn() {
  if (ri) return er;
  ri = 1;
  var e = Un(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
    var g = !0;
    d.set(i, s), d.set(s, i);
    for (var f = h; ++A < _; ) {
      R = b[A];
      var O = i[R], S = s[R];
      if (u)
        var P = h ? u(S, O, R, s, i, d) : u(O, S, R, i, s, d);
      if (!(P === void 0 ? O === S || l(O, S, o, u, d) : P)) {
        g = !1;
        break;
      }
      f || (f = R == "constructor");
    }
    if (g && !f) {
      var k = i.constructor, x = s.constructor;
      k != x && "constructor" in i && "constructor" in s && !(typeof k == "function" && k instanceof k && typeof x == "function" && x instanceof x) && (g = !1);
    }
    return d.delete(i), d.delete(s), g;
  }
  return er = a, er;
}
var tr, ai;
function Yn() {
  if (ai) return tr;
  ai = 1;
  var e = Cn(), t = bi(), r = xn(), n = Wn(), a = vi(), i = pe(), s = yr(), o = mr(), u = 1, l = "[object Arguments]", d = "[object Array]", h = "[object Object]", b = Object.prototype, _ = b.hasOwnProperty;
  function T(q, A, R, y, M, g) {
    var f = i(q), O = i(A), S = f ? d : a(q), P = O ? d : a(A);
    S = S == l ? h : S, P = P == l ? h : P;
    var k = S == h, x = P == h, m = S == P;
    if (m && s(q)) {
      if (!s(A))
        return !1;
      f = !0, k = !1;
    }
    if (m && !k)
      return g || (g = new e()), f || o(q) ? t(q, A, R, y, M, g) : r(q, A, S, R, y, M, g);
    if (!(R & u)) {
      var c = k && _.call(q, "__wrapped__"), v = x && _.call(A, "__wrapped__");
      if (c || v) {
        var p = c ? q.value() : q, w = v ? A.value() : A;
        return g || (g = new e()), M(p, w, R, y, g);
      }
    }
    return m ? (g || (g = new e()), n(q, A, R, y, M, g)) : !1;
  }
  return tr = T, tr;
}
var rr, ii;
function Qn() {
  if (ii) return rr;
  ii = 1;
  var e = Yn(), t = _e();
  function r(n, a, i, s, o) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, s, r, o);
  }
  return rr = r, rr;
}
var ar, ni;
function $n() {
  if (ni) return ar;
  ni = 1;
  var e = Qn();
  function t(r, n) {
    return e(r, n);
  }
  return ar = t, ar;
}
var Jn = $n();
const si = /* @__PURE__ */ vr(Jn), Xn = new cr(), Zn = new lr(), es = new or(), ts = new ur();
let rs = (() => {
  var e, t, r, n, a, i, s, o, u, l, d, h, b, _, T;
  let q = [], A, R = [], y = [], M, g, f, O, S, P, k, x;
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
      return L(this, n, "f");
    }
    set modified_(c) {
      K(this, n, c, "f");
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
      return L(this, i, "f");
    }
    set options(c) {
      K(this, i, c, "f");
    }
    get [(t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = (A = [oe], Y))]() {
      return L(this, s, "f");
    }
    set [d](c) {
      K(this, s, c, "f");
    }
    get [h = te]() {
      return L(this, o, "f");
    }
    set [h](c) {
      K(this, o, c, "f");
    }
    get [b = re]() {
      return L(this, u, "f");
    }
    set [b](c) {
      K(this, u, c, "f");
    }
    get [_ = ee]() {
      return L(this, l, "f");
    }
    set [_](c) {
      K(this, l, c, "f");
    }
    /**
     * Создает модель и инициализирует данные.
     */
    constructor(c = {}, v) {
      t.set(this, (N(this, q), N(this, R, null))), r.set(this, (N(this, y), {})), n.set(this, {}), a.set(this, !1), i.set(this, {}), s.set(this, void 0), o.set(this, void 0), u.set(this, void 0), l.set(this, void 0), this.options = v, this.init(c), this.initLegacyFields();
    }
    getFieldMetaCache() {
      const c = Reflect.getOwnMetadata(Y, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(Y, v) : null, w = this[Y];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const D = Zn.fields(this), C = /* @__PURE__ */ new Map();
      for (const j of D)
        C.set(String(j.name), j);
      return this[Y] = { ownRef: c, protoRef: p, list: D, map: C }, this[Y];
    }
    getFieldMeta(c) {
      return this.getFieldMetaCache().map.get(String(c));
    }
    getSubmitMetaCache() {
      const c = Reflect.getOwnMetadata(te, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(te, v) : null, w = this[te];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const D = Xn.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of D)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: D, map: C };
      return this[te] = j, j;
    }
    getExcludeMetaCache() {
      const c = Reflect.getOwnMetadata(re, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(re, v) : null, w = this[re];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const D = ts.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of D)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: D, map: C };
      return this[re] = j, j;
    }
    getValidationMetaCache() {
      const c = Reflect.getOwnMetadata(ee, this), v = Object.getPrototypeOf(this), p = v ? Reflect.getOwnMetadata(ee, v) : null, w = this[ee];
      if (w && w !== !0 && w.ownRef === c && w.protoRef === p)
        return w;
      const D = es.fields(this), C = /* @__PURE__ */ new Map();
      for (const I of D)
        C.set(String(I.name), I);
      const j = { ownRef: c, protoRef: p, list: D, map: C };
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
        Object.prototype.hasOwnProperty.call(this.initData, w) || Reflect.set(this.initData, w, Reflect.get(this, w));
        let C = p?.factory ? p.factory(this.initData, this) : Reflect.get(this.initData, w);
        if (C === void 0 && !p?.factory) {
          const j = Reflect.get(this, w);
          j !== void 0 && (C = j, Reflect.set(this.initData, w, j));
        }
        this.defineFieldValue(c, C, p), v?.skipValidation || this.initValidation(c);
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
      return c = br(c) ? c : oe.box(c), new Proxy(c, {
        get: (D, C, j) => {
          const I = Reflect.get(D, C, j);
          return I && typeof I == "object" && !(I instanceof e) && !br(c) ? this.createObservable(I, String(C), v, `${w}.${String(C)}`) : I;
        },
        set: (D, C, j, I) => (c = j, this.checkChange(p, Reflect.get(this, p)), Reflect.set(D, C, j, I))
      });
    }
    /**
     * Определить getter/setter для поля модели.
     */
    defineFieldValue(c, v, p) {
      const w = p ?? this.getFieldMeta(c);
      return w.noObserve ? Reflect.defineProperty(this, w.name, { value: v }) : (v = oe.box(v), Reflect.defineProperty(this, w.name, {
        get: () => v.get(),
        set: (D) => {
          U(() => v.set(D)), this.checkChange(w.name, v.get());
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
      const p = Object.prototype.hasOwnProperty.call(this.committedData, c) ? Reflect.get(this.committedData, c) : Reflect.get(this.initData, c), w = c && c in this.initData && !si(p, v);
      return U(() => {
        if (w) {
          Reflect.set(this.modified_, c, p);
          return;
        }
        c in this.modified_ && si(p, v) && delete this.modified_[c];
      }), w;
    }
    /**
     * Применить данные к полям модели.
     */
    defineData(c) {
      const v = this.getFieldMetaCache().map;
      for (let p in this)
        Object.prototype.hasOwnProperty.call(this, p) && v.has(p) && (Reflect.set(this, p, Reflect.get(c, p)), this.initField(p));
    }
    /**
     * Признак наличия изменений.
     */
    get dirty() {
      return !an(this.modified_);
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
      const c = /* @__PURE__ */ Object.create({}), v = this.getSubmitMetaCache().map, p = this.getExcludeMetaCache().map, w = (C) => {
        const j = Reflect.get(this, C), I = v.get(C), we = I?.callback;
        return typeof we == "function" ? we(j, this) : j;
      }, D = (C) => {
        const j = p.get(C);
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
          return !((j = this.options) === null || j === void 0) && j.byFields && !this.options.byFields.includes(C.name) || D(C.name) ? void 0 : Reflect.set(c, C.name, w(C.name));
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
        Reflect.set(c, p, v.callback(Reflect.get(this, p), this) || "");
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
    M = [$], g = [G], f = [G], O = [G], S = [G], P = [$], k = [$], x = [(T = $).struct.bind(T)], E(e, null, A, { kind: "accessor", name: "initData", static: !1, private: !1, access: { has: (c) => "initData" in c, get: (c) => c.initData, set: (c, v) => {
      c.initData = v;
    } }, metadata: m }, R, y), E(e, null, M, { kind: "getter", name: "dirty", static: !1, private: !1, access: { has: (c) => "dirty" in c, get: (c) => c.dirty }, metadata: m }, null, q), E(e, null, g, { kind: "method", name: "commit", static: !1, private: !1, access: { has: (c) => "commit" in c, get: (c) => c.commit }, metadata: m }, null, q), E(e, null, f, { kind: "method", name: "commitField", static: !1, private: !1, access: { has: (c) => "commitField" in c, get: (c) => c.commitField }, metadata: m }, null, q), E(e, null, O, { kind: "method", name: "reject", static: !1, private: !1, access: { has: (c) => "reject" in c, get: (c) => c.reject }, metadata: m }, null, q), E(e, null, S, { kind: "method", name: "toInit", static: !1, private: !1, access: { has: (c) => "toInit" in c, get: (c) => c.toInit }, metadata: m }, null, q), E(e, null, P, { kind: "getter", name: "validation", static: !1, private: !1, access: { has: (c) => "validation" in c, get: (c) => c.validation }, metadata: m }, null, q), E(e, null, k, { kind: "getter", name: "validAndDirty", static: !1, private: !1, access: { has: (c) => "validAndDirty" in c, get: (c) => c.validAndDirty }, metadata: m }, null, q), E(e, null, x, { kind: "getter", name: "service", static: !1, private: !1, access: { has: (c) => "service" in c, get: (c) => c.service }, metadata: m }, null, q), m && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: m });
  })(), e;
})();
const dr = function(t, r) {
  const n = V(t, r) ? void 0 : t, a = (o, u) => {
    const l = new lr(Object.assign(Object.assign({}, n), { name: String(u), ctx: null }));
    H(l.metadataKey, [...z(l.metadataKey, o, new Array()), l], o), Object.getOwnPropertyDescriptor(o, u) || Object.defineProperty(o, u, {
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
      if (this instanceof rs && typeof this.initField == "function") {
        const u = new lr(Object.assign(Object.assign({}, n), { name: String(o.name), ctx: o }));
        ve(Object.getPrototypeOf(this), u), this.initField.call(this, String(o.name));
      }
    });
  };
  function s(o, u) {
    if (V(o, u)) {
      a(o, u);
      return;
    }
    if (F(u))
      return i(u), u.kind === "field" ? (l) => l : u;
  }
  return V(t, r) ? s(t, r) : n && !F(r) ? (o, u) => s(o, u) : F(r) ? s(void 0, r) : (o, u) => s(o, u);
}, as = (e) => !e || typeof e != "object" ? { noObserve: !0 } : Object.assign(Object.assign({}, e), { noObserve: !0 }), is = function(t, r) {
  return V(t, r) || F(r) ? dr({ noObserve: !0 })(t, r) : dr(as(t));
};
dr.noObserve = is;
function js(e) {
  const t = (a, i) => {
    const s = new cr({ callback: e, name: String(i) }), o = z(s.metadataKey, a, new Array());
    H(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new cr({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      ve(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (V(a, i)) {
      t(a, i);
      return;
    }
    if (F(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
function Ts(e) {
  const t = (a, i) => {
    const s = new or({ callback: e, name: String(i) }), o = z(s.metadataKey, a, new Array());
    H(s.metadataKey, [...o, s], a);
  }, r = (a) => {
    const i = new or({ callback: e, name: String(a.name) });
    a.addInitializer(function() {
      ve(Object.getPrototypeOf(this), i);
    });
  };
  function n(a, i) {
    if (V(a, i)) {
      t(a, i);
      return;
    }
    if (F(i))
      return r(i), i.kind === "field" ? (s) => s : i;
  }
  return e ? ((a, i) => n(a, i)) : ((a) => a);
}
const ns = (e) => ({
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
      t.set(this, (N(this, n), N(this, i, []))), r.set(this, (N(this, s), N(this, u, []))), this._model = N(this, l), nr(this);
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
      return ns(this);
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
    const g = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    a = [oe], o = [oe], d = [G], h = [G], b = [G], _ = [G], T = [$], q = [$], A = [$], R = [G], y = [G], M = [G], E(e, null, a, { kind: "accessor", name: "items", static: !1, private: !1, access: { has: (f) => "items" in f, get: (f) => f.items, set: (f, O) => {
      f.items = O;
    } }, metadata: g }, i, s), E(e, null, o, { kind: "accessor", name: "_cash", static: !1, private: !1, access: { has: (f) => "_cash" in f, get: (f) => f._cash, set: (f, O) => {
      f._cash = O;
    } }, metadata: g }, u, l), E(e, null, d, { kind: "method", name: "add", static: !1, private: !1, access: { has: (f) => "add" in f, get: (f) => f.add }, metadata: g }, null, n), E(e, null, h, { kind: "method", name: "addMany", static: !1, private: !1, access: { has: (f) => "addMany" in f, get: (f) => f.addMany }, metadata: g }, null, n), E(e, null, b, { kind: "method", name: "remove", static: !1, private: !1, access: { has: (f) => "remove" in f, get: (f) => f.remove }, metadata: g }, null, n), E(e, null, _, { kind: "method", name: "clear", static: !1, private: !1, access: { has: (f) => "clear" in f, get: (f) => f.clear }, metadata: g }, null, n), E(e, null, T, { kind: "getter", name: "size", static: !1, private: !1, access: { has: (f) => "size" in f, get: (f) => f.size }, metadata: g }, null, n), E(e, null, q, { kind: "getter", name: "snapshot", static: !1, private: !1, access: { has: (f) => "snapshot" in f, get: (f) => f.snapshot }, metadata: g }, null, n), E(e, null, A, { kind: "getter", name: "cash", static: !1, private: !1, access: { has: (f) => "cash" in f, get: (f) => f.cash }, metadata: g }, null, n), E(e, null, R, { kind: "method", name: "reset", static: !1, private: !1, access: { has: (f) => "reset" in f, get: (f) => f.reset }, metadata: g }, null, n), E(e, null, y, { kind: "method", name: "applyLoaded", static: !1, private: !1, access: { has: (f) => "applyLoaded" in f, get: (f) => f.applyLoaded }, metadata: g }, null, n), E(e, null, M, { kind: "method", name: "setCash", static: !1, private: !1, access: { has: (f) => "setCash" in f, get: (f) => f.setCash }, metadata: g }, null, n), g && Object.defineProperty(e, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: g });
  })(), e;
})();
const wi = function(t) {
  return new.target ? Reflect.construct(de, [], new.target) : class extends de {
    constructor() {
      super(), this._model = t;
    }
  };
};
wi.prototype = de.prototype;
Object.setPrototypeOf(wi, de);
function Es(e) {
  return J(e, "instance");
}
function Ps(e) {
  return ((t, r) => Li(e)(t, r));
}
function Is(e, t) {
  const r = (n, a) => {
    var i;
    const s = typeof e == "string" ? { id: e } : typeof e == "object" ? e : { id: (i = a?.name) !== null && i !== void 0 ? i : n?.name };
    li(s)(n, a);
  };
  return typeof e == "function" ? r(e, t) : (n, a) => r(n, a);
}
class ks {
}
const ir = new fr(), ss = (e) => typeof Node < "u" && e instanceof Node, os = (e) => {
  if (e == null)
    return !0;
  const t = typeof e;
  return t === "function" ? !1 : t !== "object" ? !0 : Di(e) ? !1 : !ss(e);
}, cs = (e, t) => {
  if (!os(t))
    throw new TypeError(`PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${e}".`);
};
function xs(e, t) {
  return ji((r = {}) => {
    const { viewModel: n } = r, a = Si(r, ["viewModel"]), { instance: i } = Ti(() => {
      const u = J(e) || (typeof e != "string" ? { instance: new e() } : void 0);
      return { instance: u?.instance };
    }, [e]), s = n ?? i;
    if (Mi(() => {
      if (s)
        return typeof s.onInit == "function" && s.onInit(), () => {
          typeof s.onDispose == "function" && s.onDispose();
        };
    }, [s]), s) {
      const o = ir.fields(s), u = o.length > 0 ? o : ir.fields(Object.getPrototypeOf(s));
      for (const l in a)
        if (u instanceof Array) {
          const d = u.find((h) => h.name === l);
          if (d) {
            const h = Reflect.get(a, l);
            cs(l, h), Reflect.set(s, d.originName, h);
          }
        }
      return H(ir.metadataKey, u, s), t(Object.assign(Object.assign({}, a), { viewModel: s }));
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
}, us = ["load", "save", "remove", "delete"], oi = /* @__PURE__ */ Symbol("SERVICE_STATE"), se = /* @__PURE__ */ Symbol("LAST_CMD"), le = /* @__PURE__ */ Symbol("LAST_LOAD_LABEL");
function ls(e) {
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
function qi(e) {
  e[oi] || (Object.defineProperty(e, oi, { value: !0 }), Object.assign(e, {
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
  t && (t.state === hr.load && r ? e.state = r : e.state = t.state, e.isExecuting = t.isExecuting, e.activeCount = t.activeCount, e.isCanceled = t.isCanceled, e.isDisposed = t.isDisposed, e.error = t.error, e.result = t.result);
}
function fs(e, t, r, n) {
  return qi(e), Object.assign(Object.assign({}, n), { onStart: (...a) => {
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
function ds(e, t) {
  qi(e);
  const r = t ? Object.assign({}, t) : {};
  if (!t) {
    for (const n of us)
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
    const u = fs(e, s ?? X.load, () => o);
    o = Oi((...d) => fe(this, void 0, void 0, function* () {
      return i.apply(e, d);
    }), u);
    const l = ls(o);
    s && (e.states[s] = s), Object.defineProperty(e, n, { value: l, configurable: !0, writable: !0 });
  }
}
class Fs {
  constructor() {
    this.state = X.ready, this.states = Object.assign({}, X), this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, ds(this);
  }
}
const hr = {
  load: "load",
  failure: "failure",
  ready: "ready",
  canceled: "canceled",
  disposed: "disposed"
}, ue = () => {
}, hs = {
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
class vs {
  /**
   * @param fn Асинхронная функция, которую выполняет команда.
   * @param opt Опции команды.
   */
  constructor(t, r) {
    var n, a, i, s;
    this.isExecuting = !1, this.activeCount = 0, this.isCanceled = !1, this.isDisposed = !1, this.error = null, this.result = void 0, this.states = hr, this.queue = [], this.runningPromise = null, this.queueTail = Promise.resolve(), this.cancelToken = 0, this.fn = t, this.opt = Object.assign({ concurrency: (n = r?.concurrency) !== null && n !== void 0 ? n : "ignore", trackError: (a = r?.trackError) !== null && a !== void 0 ? a : !0, resetErrorOnExecute: (i = r?.resetErrorOnExecute) !== null && i !== void 0 ? i : !0, swallowError: (s = r?.swallowError) !== null && s !== void 0 ? s : !0 }, r), Ci(this, hs, { autoBind: !0 });
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
    return hr[t];
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
function Oi(e, t) {
  return new vs(e, t);
}
function Ls(e, t) {
  const r = Ri(e), n = /* @__PURE__ */ new Set(), a = t?.onCancel;
  return Oi((...s) => {
    const o = r(...s);
    n.add(o);
    const u = () => {
      n.delete(o);
    };
    return o.then(u, u), new Promise((l, d) => {
      o.then(l, (h) => {
        const b = h;
        if (Ai(b)) {
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
function Ks(e) {
  return function(...t) {
    return U(() => e.apply(this, t));
  };
}
export {
  Fs as CommandService,
  hr as DEFAULT_STATES,
  J as GetService,
  Es as GetStore,
  Li as Inject,
  Ps as InjectStore,
  Ss as MakeObservable,
  rs as Model,
  Rs as PropFromView,
  li as Service,
  qs as SetService,
  Is as Store,
  wi as StoreBase,
  ws as TODO,
  ks as ViewModel,
  ds as applyCommandMethods,
  Oi as asyncCommand,
  Ks as commandAction,
  H as defineMetadata,
  Os as define_prop,
  As as exclude,
  dr as field,
  Ls as flowCommand,
  xi as getExecutingFunctionNameByStack,
  z as getOwnMetadata,
  bs as isSerializable,
  js as submit,
  Ts as validation,
  xs as view
};
