import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { mvvmServiceDiPlugin } from "../src/vite-plugins";

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
});
