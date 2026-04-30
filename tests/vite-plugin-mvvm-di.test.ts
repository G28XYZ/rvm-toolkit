import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { mvvmServiceDiPlugin } from "../src/vite-plugins";
import { updateContainerContent } from "../src/vite-plugins/mvvm-di-container";
import { updateDiContent } from "../src/vite-plugins/mvvm-di-di";
import { extractEntries } from "../src/vite-plugins/mvvm-di-extract";

describe("mvvmServiceDiPlugin", () => {
  const roots: string[] = [];

  afterEach(async () => {
    await Promise.all(roots.splice(0).map((root) => fs.rm(root, { recursive: true, force: true })));
  });

  const createProject = async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "rvm-mvvm-di-"));
    roots.push(root);
    await fs.mkdir(path.join(root, "src", "stores"), { recursive: true });
    return root;
  };

  it("добавляет bare @Store в DiStores", async () => {
    const root = await createProject();
    await fs.writeFile(
      path.join(root, "src", "stores", "users.ts"),
      [
        `import { Store, StoreBase } from "rvm-toolkit";`,
        "",
        "@Store",
        "export class UsersStore extends StoreBase {}",
        "",
      ].join("\n"),
      "utf8"
    );

    const plugin = mvvmServiceDiPlugin();
    plugin.configResolved?.({ root });
    await plugin.buildStart?.();

    const container = await fs.readFile(path.join(root, "src", "stores", "container.d.ts"), "utf8");
    const di = await fs.readFile(path.join(root, "di.d.ts"), "utf8");

    expect(container).toContain(`import type { UsersStore } from "./users";`);
    expect(container).toContain("export interface StoresStores");
    expect(container).toContain("UsersStore: typeof UsersStore;");
    expect(di).toContain("interface DiStores extends StoresStores");
  });

  it("extractEntries находит Service/Store без запуска Vite lifecycle", async () => {
    const root = await createProject();
    await fs.writeFile(
      path.join(root, "src", "stores", "ids.ts"),
      `export const USER_SERVICE_ID = "users.service";\n`,
      "utf8"
    );
    const sourcePath = path.join(root, "src", "stores", "users.ts");
    await fs.writeFile(
      sourcePath,
      [
        `import { Service as S, Store } from "rvm-toolkit";`,
        `import { USER_SERVICE_ID } from "./ids";`,
        "",
        "@S({ id: USER_SERVICE_ID })",
        "export class UsersService {}",
        "",
        `@Store("UsersStore")`,
        "export class UsersStore {}",
        "",
      ].join("\n"),
      "utf8"
    );

    await expect(extractEntries(sourcePath)).resolves.toEqual([
      { className: "UsersService", entryKey: "users.service", filePath: sourcePath, kind: "service" },
      { className: "UsersStore", entryKey: "UsersStore", filePath: sourcePath, kind: "store" },
    ]);
  });

  it("updateContainerContent добавляет import и entry без Vite lifecycle", async () => {
    const root = await createProject();
    const containerPath = path.join(root, "src", "stores", "container.d.ts");
    const servicePath = path.join(root, "src", "stores", "users.ts");
    const content = [
      `import type { ExistingService } from "./existing";`,
      "",
      "export interface StoresServices {",
      "  ExistingService: typeof ExistingService;",
      "}",
      "",
    ].join("\n");

    const updated = updateContainerContent(content, containerPath, {
      className: "UsersService",
      entryKey: `"users.service"`,
      filePath: servicePath,
      interfaceName: "StoresServices",
      kind: "service",
    });

    expect(updated).toContain(`import type { UsersService } from "./users";`);
    expect(updated).toContain(`  "users.service": typeof UsersService;`);
    expect(updated).toContain("  ExistingService: typeof ExistingService;");
  });

  it("updateDiContent обновляет DiServices только внутри declare module rvm-toolkit", async () => {
    const root = await createProject();
    const containerPath = path.join(root, "src", "stores", "container.d.ts");
    const diPath = path.join(root, "di.d.ts");
    const content = [
      "interface DiServices extends ExternalServices {}",
      "",
      `declare module "other-module" {`,
      "  interface DiServices extends OtherServices {}",
      "}",
      "",
      `declare module "rvm-toolkit" {`,
      "  interface DiStores {}",
      "}",
      "",
    ].join("\n");

    const updated = updateDiContent(content, {
      containerPath,
      diPath,
      diInterfaceName: "DiServices",
      interfaceName: "StoresServices",
    });

    expect(updated).toContain(`import type { StoresServices } from "./src/stores/container";`);
    expect(updated).toContain("interface DiServices extends ExternalServices {}");
    expect(updated).toContain("interface DiServices extends OtherServices {}");
    expect(updated).toContain(`declare module "rvm-toolkit" {\n  interface DiStores {}\n  interface DiServices extends StoresServices {}`);
  });

  it("обновляет existing di.d.ts с DiServices и DiStores", async () => {
    const root = await createProject();
    await fs.mkdir(path.join(root, "src", "existing"), { recursive: true });
    await fs.writeFile(
      path.join(root, "src", "existing", "container.d.ts"),
      [
        "export interface ExistingServices {}",
        "export interface ExistingStores {}",
        "",
      ].join("\n"),
      "utf8"
    );
    await fs.writeFile(
      path.join(root, "di.d.ts"),
      [
        `import type { ExistingServices, ExistingStores } from "./src/existing/container";`,
        "",
        `declare module "rvm-toolkit" {`,
        "  interface DiServices extends ExistingServices {}",
        "  interface DiStores extends ExistingStores {}",
        "}",
        "",
      ].join("\n"),
      "utf8"
    );
    await fs.writeFile(
      path.join(root, "src", "stores", "users.ts"),
      [
        `import { Service } from "rvm-toolkit";`,
        "",
        `@Service("users.service")`,
        "export class UsersService {}",
        "",
      ].join("\n"),
      "utf8"
    );
    await fs.writeFile(
      path.join(root, "src", "stores", "users-store.ts"),
      [
        `import { Store } from "rvm-toolkit";`,
        "",
        `@Store("UsersStore")`,
        "export class UsersStore {}",
        "",
      ].join("\n"),
      "utf8"
    );

    const plugin = mvvmServiceDiPlugin();
    plugin.configResolved?.({ root });
    await plugin.buildStart?.();

    const di = await fs.readFile(path.join(root, "di.d.ts"), "utf8");

    expect(di).toContain(`import type { StoresServices } from "./src/stores/container";`);
    expect(di).toContain(`import type { StoresStores } from "./src/stores/container";`);
    expect(di).toContain("interface DiServices extends ExistingServices, StoresServices");
    expect(di).toContain("interface DiStores extends ExistingStores, StoresStores");
  });

  it("игнорирует hot update для файлов за пределами srcRoot с похожим prefix", async () => {
    const root = await createProject();
    const outsideDir = path.join(root, "src-old");
    await fs.mkdir(outsideDir, { recursive: true });
    const outsideFile = path.join(outsideDir, "outside.ts");
    await fs.writeFile(
      outsideFile,
      [
        `import { Service } from "rvm-toolkit";`,
        "",
        "@Service",
        "export class OutsideService {}",
        "",
      ].join("\n"),
      "utf8"
    );

    const plugin = mvvmServiceDiPlugin();
    plugin.configResolved?.({ root });
    await plugin.buildStart?.();
    await plugin.handleHotUpdate?.({ file: outsideFile });

    await expect(fs.access(path.join(root, "container.d.ts"))).rejects.toThrow();
    await expect(fs.access(path.join(outsideDir, "container.d.ts"))).rejects.toThrow();
    await expect(fs.readFile(path.join(root, "di.d.ts"), "utf8")).resolves.not.toContain("OutsideService");
  });

  it("extractEntries резолвит imported const через ./ids.js в ids.ts", async () => {
    const root = await createProject();
    await fs.writeFile(
      path.join(root, "src", "stores", "ids.ts"),
      `export const USER_SERVICE_ID = "users.service";\n`,
      "utf8"
    );
    const sourcePath = path.join(root, "src", "stores", "users.ts");
    await fs.writeFile(
      sourcePath,
      [
        `import { Service } from "rvm-toolkit";`,
        `import { USER_SERVICE_ID } from "./ids.js";`,
        "",
        "@Service(USER_SERVICE_ID)",
        "export class UsersService {}",
        "",
      ].join("\n"),
      "utf8"
    );

    await expect(extractEntries(sourcePath)).resolves.toEqual([
      { className: "UsersService", entryKey: "users.service", filePath: sourcePath, kind: "service" },
    ]);
  });

  it("добавляет store и service в один container при existing di.d.ts", async () => {
    const root = await createProject();
    await fs.writeFile(
      path.join(root, "di.d.ts"),
      [
        `declare module "rvm-toolkit" {`,
        "  interface DiServices {}",
        "  interface DiStores {}",
        "}",
        "",
      ].join("\n"),
      "utf8"
    );
    await fs.writeFile(
      path.join(root, "src", "stores", "users.ts"),
      [
        `import { Service, Store } from "rvm-toolkit";`,
        "",
        `@Service("users.service")`,
        "export class UsersService {}",
        "",
        `@Store("UsersStore")`,
        "export class UsersStore {}",
        "",
      ].join("\n"),
      "utf8"
    );

    const plugin = mvvmServiceDiPlugin();
    plugin.configResolved?.({ root });
    await plugin.buildStart?.();

    const container = await fs.readFile(path.join(root, "src", "stores", "container.d.ts"), "utf8");
    const di = await fs.readFile(path.join(root, "di.d.ts"), "utf8");

    expect(container).toContain("export interface StoresServices");
    expect(container).toContain(`"users.service": typeof UsersService;`);
    expect(container).toContain("export interface StoresStores");
    expect(container).toContain("UsersStore: typeof UsersStore;");
    expect(di).toContain("interface DiServices extends StoresServices");
    expect(di).toContain("interface DiStores extends StoresStores");
  });
});
