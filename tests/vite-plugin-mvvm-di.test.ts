import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { mvvmServiceDiPlugin } from "../src/vite-plugins";
import { updateContainerContent } from "../src/vite-plugins/mvvm-di-container";
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
});
