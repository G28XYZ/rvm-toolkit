import { _ as f, a as H, b as o, c as l } from "../tslib.es6-DQYNRcek.js";
import { makeObservable as K, action as m, observable as b, reaction as N } from "mobx";
import { useMemo as Q, useState as U, useEffect as M } from "react";
let X = (() => {
  var s, c, h, t, d, n, p, u, w, _;
  let a = [], g, v = [], S = [], x, k = [], z = [], V, I = [], O = [], y, E = [], R = [], F, L, W, A, P;
  return s = class {
    /** Текущий scrollTop контейнера, нормализованный к значению >= 0. */
    get scrollTop() {
      return f(this, c, "f");
    }
    set scrollTop(e) {
      H(this, c, e, "f");
    }
    /** Текущая видимая высота scroll-контейнера, нормализованная к значению >= 0. */
    get viewportHeight() {
      return f(this, h, "f");
    }
    set viewportHeight(e) {
      H(this, h, e, "f");
    }
    /** Фиксированная высота одной строки; значения <= 0 заменяются на 1. */
    get rowHeight() {
      return f(this, t, "f");
    }
    set rowHeight(e) {
      H(this, t, e, "f");
    }
    /** Количество дополнительных строк до и после viewport для предзагрузки. */
    get overscan() {
      return f(this, d, "f");
    }
    set overscan(e) {
      H(this, d, e, "f");
    }
    /**
     * Создать runtime виртуального списка.
     *
     * @param options.rowHeight Фиксированная высота строки в пикселях.
     * @param options.overscan Количество дополнительных строк до/после viewport.
     */
    constructor({ rowHeight: e, overscan: i = 0 }) {
      c.set(this, (o(this, a), o(this, v, 0))), h.set(this, (o(this, S), o(this, k, 0))), t.set(this, (o(this, z), o(this, I, 1))), d.set(this, (o(this, O), o(this, E, 0))), o(this, R), this.rowHeight = e > 0 ? e : 1, this.overscan = Math.max(0, i), K(this);
    }
    /**
     * Обновить текущую позицию scroll.
     *
     * @param value Новый scrollTop контейнера.
     */
    setScrollTop(e) {
      this.scrollTop = Math.max(0, e);
    }
    /**
     * Обновить высоту viewport.
     *
     * @param value Новая clientHeight scroll-контейнера.
     */
    setViewportHeight(e) {
      this.viewportHeight = Math.max(0, e);
    }
    /**
     * Обновить scrollTop и viewportHeight одной MobX action.
     *
     * @param scrollTop Новый scrollTop контейнера.
     * @param viewportHeight Новая clientHeight scroll-контейнера.
     */
    updateMetrics(e, i) {
      this.scrollTop = Math.max(0, e), this.viewportHeight = Math.max(0, i);
    }
    /**
     * Обновить фиксированную высоту строки.
     *
     * @param rowHeight Новая высота строки в пикселях; значения <= 0 заменяются на 1.
     */
    setRowHeight(e) {
      this.rowHeight = e > 0 ? e : 1;
    }
    /**
     * Обновить overscan.
     *
     * @param overscan Количество дополнительных строк до/после viewport.
     */
    setOverscan(e) {
      this.overscan = Math.max(0, e);
    }
    /**
     * Рассчитать видимый slice для списка.
     *
     * @param items Полный список элементов.
     * @returns Данные для отрисовки виртуального списка.
     */
    getSlice(e) {
      const i = e.length, T = this.rowHeight > 0 ? this.rowHeight : 1, j = Math.max(0, this.scrollTop), B = Math.max(0, this.viewportHeight), q = Math.max(0, this.overscan), C = i * T, D = Math.max(0, Math.floor(j / T) - q), G = Math.min(i, Math.ceil((j + B) / T) + q), J = e.slice(D, G);
      return { total: i, totalHeight: C, startIndex: D, endIndex: G, visibleItems: J };
    }
  }, c = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), (() => {
    const r = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    g = [b], x = [b], V = [b], y = [b], F = [(n = m).bound.bind(n)], L = [(p = m).bound.bind(p)], W = [(u = m).bound.bind(u)], A = [(w = m).bound.bind(w)], P = [(_ = m).bound.bind(_)], l(s, null, g, { kind: "accessor", name: "scrollTop", static: !1, private: !1, access: { has: (e) => "scrollTop" in e, get: (e) => e.scrollTop, set: (e, i) => {
      e.scrollTop = i;
    } }, metadata: r }, v, S), l(s, null, x, { kind: "accessor", name: "viewportHeight", static: !1, private: !1, access: { has: (e) => "viewportHeight" in e, get: (e) => e.viewportHeight, set: (e, i) => {
      e.viewportHeight = i;
    } }, metadata: r }, k, z), l(s, null, V, { kind: "accessor", name: "rowHeight", static: !1, private: !1, access: { has: (e) => "rowHeight" in e, get: (e) => e.rowHeight, set: (e, i) => {
      e.rowHeight = i;
    } }, metadata: r }, I, O), l(s, null, y, { kind: "accessor", name: "overscan", static: !1, private: !1, access: { has: (e) => "overscan" in e, get: (e) => e.overscan, set: (e, i) => {
      e.overscan = i;
    } }, metadata: r }, E, R), l(s, null, F, { kind: "method", name: "setScrollTop", static: !1, private: !1, access: { has: (e) => "setScrollTop" in e, get: (e) => e.setScrollTop }, metadata: r }, null, a), l(s, null, L, { kind: "method", name: "setViewportHeight", static: !1, private: !1, access: { has: (e) => "setViewportHeight" in e, get: (e) => e.setViewportHeight }, metadata: r }, null, a), l(s, null, W, { kind: "method", name: "updateMetrics", static: !1, private: !1, access: { has: (e) => "updateMetrics" in e, get: (e) => e.updateMetrics }, metadata: r }, null, a), l(s, null, A, { kind: "method", name: "setRowHeight", static: !1, private: !1, access: { has: (e) => "setRowHeight" in e, get: (e) => e.setRowHeight }, metadata: r }, null, a), l(s, null, P, { kind: "method", name: "setOverscan", static: !1, private: !1, access: { has: (e) => "setOverscan" in e, get: (e) => e.setOverscan }, metadata: r }, null, a), r && Object.defineProperty(s, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: r });
  })(), s;
})();
const te = ({ overscan: s = 0, rowHeight: c, targetRef: h }) => {
  const t = Q(() => new X({ rowHeight: c, overscan: s }), []), [, d] = U(0);
  return M(() => N(() => [t.scrollTop, t.viewportHeight, t.rowHeight, t.overscan], () => d((n) => n + 1)), [t]), M(() => {
    if (typeof window > "u")
      return;
    let n = null, p = null, u = !0;
    const w = (a) => {
      const g = () => t.setScrollTop(a.scrollTop), v = () => t.setViewportHeight(a.clientHeight);
      t.updateMetrics(a.scrollTop, a.clientHeight), a.addEventListener("scroll", g, { passive: !0 }), window.addEventListener("resize", v), n = () => {
        a.removeEventListener("scroll", g), window.removeEventListener("resize", v);
      };
    }, _ = () => {
      if (!u)
        return;
      const a = h.current;
      if (a) {
        w(a);
        return;
      }
      p = window.requestAnimationFrame(_);
    };
    return _(), () => {
      u = !1, p !== null && window.cancelAnimationFrame(p), n && n();
    };
  }, [t, h]), M(() => {
    t.setRowHeight(c);
  }, [t, c]), M(() => {
    t.setOverscan(s);
  }, [t, s]), t;
};
export {
  X as VirtualScroll,
  te as useVirtualScroller
};
