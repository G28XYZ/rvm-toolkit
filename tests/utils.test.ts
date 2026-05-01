import { describe, expect, it } from "vitest";
import {
  defineMetadata,
  getExecutingFunctionNameByStack,
  getMicrofrontComponent,
  getOwnMetadata,
  isSerializable,
  resolveMicrofrontComponent,
} from "../src/utils";

describe("utils", () => {
  it("сохраняет и читает metadata", () => {
    const key = Symbol("meta");
    const target = {};

    expect(getOwnMetadata(key, target, [])).toEqual([]);

    defineMetadata(key, { id: 1 }, target);
    expect(getOwnMetadata(key, target)).toEqual({ id: 1 });
  });

  it("проверяет сериализуемость", () => {
    expect(isSerializable({ value: 1 })).toBe(true);

    const circular: Record<string, unknown> = {};
    circular.self = circular;
    expect(isSerializable(circular)).toBe(false);
  });

  it("извлекает имя функции из stack", () => {
    const stack = "Error\n at ignore (file:1:1)\n at targetFunction (file:2:3)\n at next (file:3:4)";
    expect(getExecutingFunctionNameByStack(stack)).toBe("targetFunction (file:2:3)");
  });

  it("получает компонент микрофронта из default export", async () => {
    const Remote = () => null;
    const Fallback = () => null;

    await expect(getMicrofrontComponent({ importer: async () => ({ default: Remote }), fallback: Fallback })).resolves.toBe(Remote);
  });

  it("получает компонент микрофронта по имени экспорта", async () => {
    const Remote = () => null;
    const Fallback = () => null;

    await expect(
      getMicrofrontComponent({
        importer: async () => ({ Widget: Remote }),
        fallback: Fallback,
        exportName: "Widget",
      })
    ).resolves.toBe(Remote);
  });

  it("возвращает fallback, если модуль микрофронта пустой", async () => {
    const Fallback = () => null;

    await expect(getMicrofrontComponent({ importer: async () => ({}), fallback: Fallback })).resolves.toBe(Fallback);
  });

  it("возвращает fallback и сообщает об ошибке загрузки микрофронта", async () => {
    const Fallback = () => null;
    const error = new Error("remote is unavailable");
    const errors: unknown[] = [];

    await expect(
      getMicrofrontComponent({
        importer: async () => {
          throw error;
        },
        fallback: Fallback,
        onError: (e) => errors.push(e),
      })
    ).resolves.toBe(Fallback);
    expect(errors).toEqual([error]);
  });

  it("resolveMicrofrontComponent проверяет стандартные имена экспортов по порядку", () => {
    const App = () => null;
    const Component = () => null;

    expect(resolveMicrofrontComponent({ App, Component })).toBe(App);
  });

  it("resolveMicrofrontComponent пропускает plain-object exports", () => {
    const App = () => null;

    expect(resolveMicrofrontComponent({ default: { title: "metadata" }, App })).toBe(App);
  });
});
