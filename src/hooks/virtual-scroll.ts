import { action, makeObservable, observable, reaction } from "mobx";
import { RefObject, useEffect, useMemo, useState } from "react";

export type VirtualSlice<T> = {
  /** Общее количество элементов в исходном списке. */
  total: number;
  /** Полная расчетная высота списка: total * rowHeight. */
  totalHeight: number;
  /** Индекс первого элемента, который нужно отрисовать. */
  startIndex: number;
  /** Индекс после последнего элемента, который нужно отрисовать. */
  endIndex: number;
  /** Подмассив элементов для текущего viewport с учетом overscan. */
  visibleItems: T[];
};

/**
 * Runtime для виртуализации списка с фиксированной высотой строки.
 *
 * VirtualScroll хранит scroll metrics и возвращает slice элементов, который
 * нужно отрисовать в текущем viewport. Состояние сделано observable, чтобы
 * `observer` view и `useVirtualScroller` могли перерисовываться при scroll,
 * resize или изменении rowHeight/overscan.
 */
export class VirtualScroll {
  /** Текущий scrollTop контейнера, нормализованный к значению >= 0. */
  @observable accessor scrollTop = 0;
  /** Текущая видимая высота scroll-контейнера, нормализованная к значению >= 0. */
  @observable accessor viewportHeight = 0;
  /** Фиксированная высота одной строки; значения <= 0 заменяются на 1. */
  @observable accessor rowHeight = 1;
  /** Количество дополнительных строк до и после viewport для предзагрузки. */
  @observable accessor overscan = 0;

  /**
   * Создать runtime виртуального списка.
   *
   * @param options.rowHeight Фиксированная высота строки в пикселях.
   * @param options.overscan Количество дополнительных строк до/после viewport.
   */
  constructor({ rowHeight, overscan = 0 }: { rowHeight: number; overscan?: number }) {
    this.rowHeight = rowHeight > 0 ? rowHeight : 1;
    this.overscan = Math.max(0, overscan);

    makeObservable(this);
  }

  /**
   * Обновить текущую позицию scroll.
   *
   * @param value Новый scrollTop контейнера.
   */
  @action.bound setScrollTop(value: number) {
    this.scrollTop = Math.max(0, value);
  }

  /**
   * Обновить высоту viewport.
   *
   * @param value Новая clientHeight scroll-контейнера.
   */
  @action.bound setViewportHeight(value: number) {
    this.viewportHeight = Math.max(0, value);
  }

  /**
   * Обновить scrollTop и viewportHeight одной MobX action.
   *
   * @param scrollTop Новый scrollTop контейнера.
   * @param viewportHeight Новая clientHeight scroll-контейнера.
   */
  @action.bound updateMetrics(scrollTop: number, viewportHeight: number) {
    this.scrollTop = Math.max(0, scrollTop);
    this.viewportHeight = Math.max(0, viewportHeight);
  }

  /**
   * Обновить фиксированную высоту строки.
   *
   * @param rowHeight Новая высота строки в пикселях; значения <= 0 заменяются на 1.
   */
  @action.bound setRowHeight(rowHeight: number) {
    this.rowHeight = rowHeight > 0 ? rowHeight : 1;
  }

  /**
   * Обновить overscan.
   *
   * @param overscan Количество дополнительных строк до/после viewport.
   */
  @action.bound setOverscan(overscan: number) {
    this.overscan = Math.max(0, overscan);
  }

  /**
   * Рассчитать видимый slice для списка.
   *
   * @param items Полный список элементов.
   * @returns Данные для отрисовки виртуального списка.
   */
  getSlice<T>(items: T[]): VirtualSlice<T> {
    const total = items.length;
    const rowHeight = this.rowHeight > 0 ? this.rowHeight : 1;
    const scrollTop = Math.max(0, this.scrollTop);
    const viewportHeight = Math.max(0, this.viewportHeight);
    const overscan = Math.max(0, this.overscan);
    const totalHeight = total * rowHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
    const endIndex = Math.min(total, Math.ceil((scrollTop + viewportHeight) / rowHeight) + overscan);
    const visibleItems = items.slice(startIndex, endIndex);

    return { total, totalHeight, startIndex, endIndex, visibleItems };
  }
}

type VirtualScrollOptions = {
  /** Ref на scroll-контейнер, из которого читаются scrollTop и clientHeight. */
  targetRef: RefObject<HTMLElement>;
  /** Фиксированная высота строки в пикселях. */
  rowHeight: number;
  /** Количество дополнительных строк до/после viewport. */
  overscan?: number;
};

/**
 * React hook для подключения VirtualScroll к DOM scroll-контейнеру.
 *
 * Hook создает один VirtualScroll runtime, подписывает его на scroll/resize
 * события контейнера и перерисовывает React component при изменении расчетных
 * metrics. Возвращенный runtime можно использовать для `getSlice(items)` и
 * позиционирования строк через `startIndex` и `rowHeight`.
 *
 * @param options Настройки виртуального списка.
 * @returns Observable runtime виртуального списка.
 */
export const useVirtualScroller = ({ overscan = 0, rowHeight, targetRef }: VirtualScrollOptions) => {
  const scroller = useMemo(() => new VirtualScroll({ rowHeight, overscan }), []);
  const [, rerender] = useState(0);

  useEffect(() => {
    return reaction(
      () => [scroller.scrollTop, scroller.viewportHeight, scroller.rowHeight, scroller.overscan],
      () => rerender((version) => version + 1)
    );
  }, [scroller]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cleanup: (() => void) | null = null;
    let frameId: number | null = null;
    let active = true;

    const attach = (container: HTMLElement) => {
      const handleScroll = () => scroller.setScrollTop(container.scrollTop);
      const handleResize = () => scroller.setViewportHeight(container.clientHeight);

      scroller.updateMetrics(container.scrollTop, container.clientHeight);
      container.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    };

    const tryAttach = () => {
      if (!active) return;
      const container = targetRef.current;
      if (container) {
        attach(container);
        return;
      }
      frameId = window.requestAnimationFrame(tryAttach);
    };

    tryAttach();

    return () => {
      active = false;
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, [scroller, targetRef]);

  useEffect(() => {
    scroller.setRowHeight(rowHeight);
  }, [scroller, rowHeight]);

  useEffect(() => {
    scroller.setOverscan(overscan);
  }, [scroller, overscan]);

  return scroller;
};
