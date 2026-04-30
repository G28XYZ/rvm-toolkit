/**
 * Декоратор для поля модели.
 * Обозначает свойство как поле модели и включает обработку для dump/validation.
 * @example
 * class VM extends TModel<{ title: string }> {
 *   @field
 *   title = "";
 * }
 */
import { ModelData } from "../model";
import { IFieldMetadata } from "../model/data";
import { AnyFieldDecorator } from "./types";
type FieldOptions<This> = Pick<IFieldMetadata<ModelData<This>, This>, "factory" | "mapping" | "collectChanges" | "noObserve">;
type FieldDecorator = {
    <This, T>(targetOrValue: object | undefined, contextOrKey: ClassFieldDecoratorContext<This, T> | string | symbol): any;
    <This, T = unknown>(options: FieldOptions<This>): AnyFieldDecorator<This, T>;
    /**
     * Вариант @field для полей без observable wrapper.
     *
     * @field.noObserve сохраняет поле в metadata модели, но значение хранится
     * как обычное свойство: без mobx.box, без setter dirty tracking и без
     * реактивных уведомлений при изменении. Поле все еще участвует в init/dump
     * и может использовать factory/mapping из переданных options.
     */
    noObserve: {
        /** Декоратор без опций: @field.noObserve prop; */
        <This, T>(targetOrValue: object | undefined, contextOrKey: ClassFieldDecoratorContext<This, T> | string | symbol): any;
        /** Фабрика декоратора: @field.noObserve() / @field.noObserve({ ... }) */
        <This, T = unknown>(options?: FieldOptions<This>): AnyFieldDecorator<This, T>;
    };
};
/**
 * Декоратор для поля класса (автоматом вешает observable на поле)
 * обозначает свойство как поле модели, которое обрабатывается/валидируется/исключается при изменении/отправке
 *
 * Для поля без observable wrapper используйте @field.noObserve.
 */
export declare const field: FieldDecorator;
export {};
