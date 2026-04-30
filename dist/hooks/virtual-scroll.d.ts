import { RefObject } from "react";
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
export declare class VirtualScroll {
    /** Текущий scrollTop контейнера, нормализованный к значению >= 0. */
    accessor scrollTop: number;
    /** Текущая видимая высота scroll-контейнера, нормализованная к значению >= 0. */
    accessor viewportHeight: number;
    /** Фиксированная высота одной строки; значения <= 0 заменяются на 1. */
    accessor rowHeight: number;
    /** Количество дополнительных строк до и после viewport для предзагрузки. */
    accessor overscan: number;
    /**
     * Создать runtime виртуального списка.
     *
     * @param options.rowHeight Фиксированная высота строки в пикселях.
     * @param options.overscan Количество дополнительных строк до/после viewport.
     */
    constructor({ rowHeight, overscan }: {
        rowHeight: number;
        overscan?: number;
    });
    /**
     * Обновить текущую позицию scroll.
     *
     * @param value Новый scrollTop контейнера.
     */
    setScrollTop(value: number): void;
    /**
     * Обновить высоту viewport.
     *
     * @param value Новая clientHeight scroll-контейнера.
     */
    setViewportHeight(value: number): void;
    /**
     * Обновить scrollTop и viewportHeight одной MobX action.
     *
     * @param scrollTop Новый scrollTop контейнера.
     * @param viewportHeight Новая clientHeight scroll-контейнера.
     */
    updateMetrics(scrollTop: number, viewportHeight: number): void;
    /**
     * Обновить фиксированную высоту строки.
     *
     * @param rowHeight Новая высота строки в пикселях; значения <= 0 заменяются на 1.
     */
    setRowHeight(rowHeight: number): void;
    /**
     * Обновить overscan.
     *
     * @param overscan Количество дополнительных строк до/после viewport.
     */
    setOverscan(overscan: number): void;
    /**
     * Рассчитать видимый slice для списка.
     *
     * @param items Полный список элементов.
     * @returns Данные для отрисовки виртуального списка.
     */
    getSlice<T>(items: T[]): VirtualSlice<T>;
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
export declare const useVirtualScroller: ({ overscan, rowHeight, targetRef }: VirtualScrollOptions) => VirtualScroll;
export {};
