import { d as h } from "../tslib.es6-DQYNRcek.js";
import I from "node:fs/promises";
import m from "node:path";
import d from "typescript";
function A(e, n, t) {
  const i = R(m.dirname(n), t.filePath), o = `import type { ${t.className} } from "${i}";`;
  let s = e;
  new RegExp(`^import type \\{ ${t.className} \\} from \\"${b(i)}\\";`, "m").test(e) || (s = z(s, o));
  const r = O(s, t.interfaceName);
  if (!r) {
    const v = [
      "",
      `export interface ${t.interfaceName} {`,
      `  ${t.entryKey}: typeof ${t.className};`,
      "}",
      ""
    ].join(`
`);
    return `${s.trimEnd()}
${v}`;
  }
  const x = /^\s*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[^:]+)\s*:\s*typeof\s+([A-Za-z0-9_$]+)\s*;.*$/, $ = r.body.split(`
`), p = [];
  let N = !1, g = !1;
  for (const v of $) {
    const c = v.match(x);
    if (!c) {
      p.push(v);
      continue;
    }
    const a = c[1].trim(), l = c[2].trim();
    if (a === t.entryKey) {
      if (l === t.className)
        N = !0, p.push(v);
      else {
        const u = `${r.indent}${t.entryKey}: typeof ${t.className};`;
        p.push(u), N = !0, g = !0;
      }
      continue;
    }
    if (l === t.className) {
      g = !0;
      continue;
    }
    p.push(v);
  }
  if (!N) {
    const v = `${r.indent}${t.entryKey}: typeof ${t.className};`, c = p.length > 0 && p[p.length - 1] === "" ? p.length - 1 : p.length;
    p.splice(c, 0, v), g = !0;
  }
  if (g) {
    const v = p.join(`
`);
    s = s.slice(0, r.startIndex) + v + s.slice(r.endIndex);
  }
  return s;
}
function k(e, n) {
  return `${K(e, n)}Services`;
}
function _(e, n) {
  return `${K(e, n)}Stores`;
}
function W(e) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e) ? e : JSON.stringify(e);
}
function R(e, n) {
  const i = m.relative(e, n).replace(/\\/g, "/").replace(/\.(tsx|ts|d\.ts)$/, "");
  return i.startsWith(".") ? i : `./${i}`;
}
function b(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function K(e, n) {
  const i = m.relative(n, e).replace(/\\/g, "/").split("/");
  let o = i[0];
  return i[0] === "modules" && i[1] && (o = i[1]), B(o.replace(/\.d\.ts$/, ""));
}
function B(e) {
  return e.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("");
}
function z(e, n) {
  const t = e.split(`
`);
  let i = 0;
  for (let o = 0; o < t.length; o += 1)
    if (t[o].startsWith("import "))
      i = o + 1;
    else if (t[o].trim() !== "")
      break;
  return t.splice(i, 0, n), t.join(`
`);
}
function O(e, n) {
  const t = e.match(new RegExp(`export interface ${b(n)}\\s*\\{`));
  if (!t || t.index === void 0)
    return null;
  const i = t.index + t[0].length, o = e.indexOf("}", i);
  if (o === -1)
    return null;
  const s = e.slice(i, o), r = s.match(/\n(\s*)\w/), x = r ? r[1] : "  ";
  return { body: s, endIndex: o, indent: x, startIndex: i };
}
const D = "rvm-toolkit";
function V(e) {
  const n = R(m.dirname(e.diPath), e.containerPath);
  return [
    `import type { ${e.interfaceName} } from "${n}";`,
    "",
    `declare module "${D}" {`,
    `  interface ${e.diInterfaceName} extends ${e.interfaceName} {}`,
    "}",
    ""
  ].join(`
`);
}
function U(e, n) {
  const t = R(m.dirname(n.diPath), n.containerPath), i = `import type { ${n.interfaceName} } from "${t}";`;
  let o = e;
  new RegExp(`^import type \\{ ${n.interfaceName} \\} from \\"${b(t)}\\";`, "m").test(o) || (o = Z(o, i));
  const s = J(o);
  if (!s)
    return [
      o.trimEnd(),
      "",
      `declare module "${D}" {`,
      `  interface ${n.diInterfaceName} extends ${n.interfaceName} {}`,
      "}",
      ""
    ].join(`
`);
  let r = P(s.body, "DiServices");
  return r = P(r, "DiStores"), r = X(r, n.diInterfaceName, s.indent), r = H(r, n.diInterfaceName, n.interfaceName), r === s.body ? o : o.slice(0, s.startIndex) + r + o.slice(s.endIndex);
}
function Z(e, n) {
  const t = e.split(`
`);
  let i = 0;
  for (let o = 0; o < t.length; o += 1)
    if (t[o].startsWith("import "))
      i = o + 1;
    else if (t[o].trim() !== "")
      break;
  return t.splice(i, 0, n), t.join(`
`);
}
function J(e) {
  const n = e.match(new RegExp(`declare module ["']${b(D)}["']\\s*\\{`));
  if (!n || n.index === void 0)
    return null;
  const t = n.index + n[0].length, i = q(e, t);
  if (i === -1)
    return null;
  const o = e.slice(t, i), s = o.match(/\n(\s*)interface/), r = s ? s[1] : "  ";
  return { body: o, endIndex: i, indent: r, startIndex: t };
}
function P(e, n) {
  const t = new RegExp(`interface ${n},\\s*([^\\{]+)\\{`, "g");
  return e.replace(t, `interface ${n} extends $1{`);
}
function X(e, n, t) {
  if (new RegExp(`interface\\s+${n}\\b`).test(e))
    return e;
  const i = e.endsWith(`
`) ? "" : `
`;
  return `${e}${i}${t}interface ${n} {}`;
}
function H(e, n, t) {
  var i;
  const o = e.match(new RegExp(`interface ${n}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
  if (!o || o.index === void 0)
    return e;
  const s = (i = o[2]) === null || i === void 0 ? void 0 : i.trim();
  if (s && new RegExp(`\\b${b(t)}\\b`).test(s))
    return e;
  const r = s ? ` extends ${s}, ${t} {` : ` extends ${t} {`, x = o.index, $ = x + o[0].length;
  return e.slice(0, x) + `interface ${n}${r}` + e.slice($);
}
function q(e, n) {
  let t = 1;
  for (let i = n; i < e.length; i += 1) {
    const o = e[i];
    if (o === "{" && (t += 1), o === "}" && (t -= 1), t === 0)
      return i;
  }
  return -1;
}
const G = "Service", Q = "Store";
function Y(e) {
  return h(this, void 0, void 0, function* () {
    var n, t, i;
    const o = yield I.readFile(e, "utf8"), s = L(e), r = d.createSourceFile(e, o, d.ScriptTarget.Latest, !0, s), $ = yield te(r, e, { cache: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Set() }), p = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
    for (const v of r.statements) {
      if (!d.isImportDeclaration(v) || v.moduleSpecifier.getText(r).replace(/['"]/g, "") !== D)
        continue;
      const a = v.importClause;
      if (!(!a?.namedBindings || !d.isNamedImports(a.namedBindings)))
        for (const l of a.namedBindings.elements) {
          const u = (t = (n = l.propertyName) === null || n === void 0 ? void 0 : n.text) !== null && t !== void 0 ? t : l.name.text, f = l.name.text;
          u === G && p.add(f), u === Q && N.add(f);
        }
    }
    if (p.size === 0 && N.size === 0)
      return [];
    const g = [];
    for (const v of r.statements) {
      if (!d.isClassDeclaration(v) || !v.name)
        continue;
      const c = v.name.text, a = (i = d.getDecorators(v)) !== null && i !== void 0 ? i : [];
      for (const l of a) {
        const u = l.expression;
        if (d.isIdentifier(u)) {
          const f = p.has(u.text), y = N.has(u.text);
          f ? g.push({ className: c, entryKey: c, filePath: e, kind: "service" }) : y && g.push({ className: c, entryKey: c, filePath: e, kind: "store" });
        } else if (d.isCallExpression(u) && d.isIdentifier(u.expression)) {
          const f = u.expression.text, y = p.has(f), S = N.has(f);
          if (!y && !S)
            continue;
          const [j] = u.arguments;
          let C = c;
          const w = yield ee(j, $);
          w && (C = w), g.push({ className: c, entryKey: C, filePath: e, kind: S ? "store" : "service" });
        }
      }
    }
    return g;
  });
}
function ee(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!e)
      return null;
    if (d.isObjectLiteralExpression(e)) {
      const t = e.properties.find((i) => d.isPropertyAssignment(i) && d.isIdentifier(i.name) && i.name.text === "id");
      return t ? E(t.initializer, n) : null;
    }
    return E(e, n);
  });
}
function te(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = M(e), o = yield T(e, n);
    return {
      filePath: n,
      localConsts: i,
      importedConsts: o,
      localResolved: /* @__PURE__ */ new Map(),
      importedResolved: /* @__PURE__ */ new Map(),
      resolveState: t
    };
  });
}
function M(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e.statements)
    if (d.isVariableStatement(t) && t.declarationList.flags & d.NodeFlags.Const)
      for (const i of t.declarationList.declarations)
        !d.isIdentifier(i.name) || !i.initializer || n.set(i.name.text, i.initializer);
  return n;
}
function T(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    const o = /* @__PURE__ */ new Map();
    for (const s of e.statements) {
      if (!d.isImportDeclaration(s) || !s.importClause || !d.isStringLiteralLike(s.moduleSpecifier))
        continue;
      const r = s.moduleSpecifier.text, x = s.importClause.namedBindings;
      if (!x || !d.isNamedImports(x))
        continue;
      const $ = yield ne(n, r);
      if ($)
        for (const p of x.elements) {
          const N = (i = (t = p.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : p.name.text, g = p.name.text;
          o.set(g, { importName: N, sourcePath: $ });
        }
    }
    return o;
  });
}
function ne(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!n.startsWith("."))
      return null;
    const t = m.resolve(m.dirname(e), n), i = m.extname(n), o = i ? ie(t, i) : [
      `${t}.ts`,
      `${t}.tsx`,
      `${t}.js`,
      `${t}.jsx`,
      `${t}.d.ts`,
      m.join(t, "index.ts"),
      m.join(t, "index.tsx"),
      m.join(t, "index.js"),
      m.join(t, "index.jsx"),
      m.join(t, "index.d.ts")
    ];
    for (const s of o)
      if (yield le(s))
        return s;
    return null;
  });
}
function ie(e, n) {
  const t = [e];
  if (n !== ".js" && n !== ".jsx")
    return t;
  const i = e.slice(0, -n.length);
  return n === ".js" ? t.push(`${i}.ts`, `${i}.tsx`, `${i}.d.ts`) : t.push(`${i}.tsx`, `${i}.ts`), t;
}
function E(e, n) {
  return h(this, void 0, void 0, function* () {
    if (d.isStringLiteralLike(e) || d.isNoSubstitutionTemplateLiteral(e))
      return e.text;
    if (d.isTemplateExpression(e)) {
      let t = e.head.text;
      for (const i of e.templateSpans) {
        const o = yield E(i.expression, n);
        if (o === null)
          return null;
        t += o + i.literal.text;
      }
      return t;
    }
    if (d.isBinaryExpression(e) && e.operatorToken.kind === d.SyntaxKind.PlusToken) {
      const t = yield E(e.left, n);
      if (t === null)
        return null;
      const i = yield E(e.right, n);
      return i === null ? null : t + i;
    }
    return d.isIdentifier(e) ? oe(e.text, n) : d.isAsExpression(e) || d.isTypeAssertionExpression(e) || d.isParenthesizedExpression(e) ? E(e.expression, n) : null;
  });
}
function oe(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    if (n.localResolved.has(e))
      return (t = n.localResolved.get(e)) !== null && t !== void 0 ? t : null;
    const o = n.localConsts.get(e);
    if (o) {
      const r = yield E(o, n);
      return n.localResolved.set(e, r), r;
    }
    const s = n.importedConsts.get(e);
    if (s) {
      if (n.importedResolved.has(e))
        return (i = n.importedResolved.get(e)) !== null && i !== void 0 ? i : null;
      const r = yield se(s, n.resolveState);
      return n.importedResolved.set(e, r), r;
    }
    return null;
  });
}
function se(e, n) {
  return h(this, void 0, void 0, function* () {
    var t;
    const i = `${e.sourcePath}::${e.importName}`;
    if (n.cache.has(i))
      return (t = n.cache.get(i)) !== null && t !== void 0 ? t : null;
    if (n.resolving.has(i))
      return null;
    n.resolving.add(i);
    const o = yield re(e.sourcePath, e.importName, n);
    return n.resolving.delete(i), n.cache.set(i, o), o;
  });
}
function re(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = yield ae(e), s = ce(i).get(n);
    if (!s)
      return null;
    const r = M(i), x = r.get(s);
    if (!x)
      return null;
    const $ = yield T(i, e);
    return E(x, {
      localConsts: r,
      importedConsts: $,
      localResolved: /* @__PURE__ */ new Map(),
      importedResolved: /* @__PURE__ */ new Map(),
      resolveState: t
    });
  });
}
function ce(e) {
  var n, t, i;
  const o = /* @__PURE__ */ new Map();
  for (const s of e.statements)
    if (d.isVariableStatement(s) && (!((n = s.modifiers) === null || n === void 0) && n.some((r) => r.kind === d.SyntaxKind.ExportKeyword)))
      for (const r of s.declarationList.declarations)
        d.isIdentifier(r.name) && o.set(r.name.text, r.name.text);
    else if (d.isExportDeclaration(s) && s.exportClause && d.isNamedExports(s.exportClause)) {
      if (s.moduleSpecifier)
        continue;
      for (const r of s.exportClause.elements) {
        const x = r.name.text, $ = (i = (t = r.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : r.name.text;
        o.set(x, $);
      }
    }
  return o;
}
function ae(e) {
  return h(this, void 0, void 0, function* () {
    const n = yield I.readFile(e, "utf8"), t = L(e);
    return d.createSourceFile(e, n, d.ScriptTarget.Latest, !0, t);
  });
}
function L(e) {
  return e.endsWith(".tsx") ? d.ScriptKind.TSX : e.endsWith(".ts") || e.endsWith(".d.ts") ? d.ScriptKind.TS : e.endsWith(".jsx") ? d.ScriptKind.JSX : e.endsWith(".js") ? d.ScriptKind.JS : d.ScriptKind.TS;
}
function le(e) {
  return h(this, void 0, void 0, function* () {
    try {
      return yield I.access(e), !0;
    } catch {
      return !1;
    }
  });
}
function pe() {
  let e, n = "", t = "";
  function i() {
    return h(this, void 0, void 0, function* () {
      const c = yield p(n);
      for (const a of c)
        yield s(a);
    });
  }
  function o() {
    return h(this, void 0, void 0, function* () {
      if (!t || (yield g(t)))
        return;
      const a = yield N(n);
      if (a.length === 0) {
        const S = [
          `declare module "${D}" {`,
          "  interface DiServices {}",
          "}",
          ""
        ].join(`
`);
        yield I.writeFile(t, S, "utf8");
        return;
      }
      const l = [], u = [], f = [];
      for (const S of a) {
        const j = yield I.readFile(S, "utf8"), C = k(S, n), w = _(S, n), F = R(m.dirname(t), S);
        j.includes(`export interface ${C}`) && (l.push(`import type { ${C} } from "${F}";`), u.push(C)), j.includes(`export interface ${w}`) && (l.push(`import type { ${w} } from "${F}";`), f.push(w));
      }
      const y = [
        ...l,
        "",
        `declare module "${D}" {`,
        u.length ? `  interface DiServices extends ${u.join(", ")} {}` : "  interface DiServices {}",
        f.length ? `  interface DiStores extends ${f.join(", ")} {}` : "  interface DiStores {}",
        "}",
        ""
      ].join(`
`);
      yield I.writeFile(t, y, "utf8");
    });
  }
  function s(c) {
    return h(this, void 0, void 0, function* () {
      const a = yield Y(c);
      for (const l of a)
        yield r(l);
    });
  }
  function r(c) {
    return h(this, void 0, void 0, function* () {
      const a = yield x(c.filePath), l = a.existed, u = W(c.entryKey), f = c.kind === "store" ? _(a.containerPath, n) : k(a.containerPath, n), y = c.kind === "store" ? "DiStores" : "DiServices";
      if (!l) {
        const C = R(m.dirname(a.containerPath), c.filePath), w = [
          `import type { ${c.className} } from "${C}";`,
          "",
          `export interface ${f} {`,
          `  ${u}: typeof ${c.className};`,
          "}",
          ""
        ].join(`
`);
        yield I.writeFile(a.containerPath, w, "utf8"), yield $(a.containerPath, f, y);
        return;
      }
      const S = yield I.readFile(a.containerPath, "utf8"), j = A(S, a.containerPath, Object.assign(Object.assign({}, c), {
        entryKey: u,
        interfaceName: f
      }));
      j !== S && (yield I.writeFile(a.containerPath, j, "utf8")), yield $(a.containerPath, f, y);
    });
  }
  function x(c) {
    return h(this, void 0, void 0, function* () {
      const a = m.resolve(c);
      let l = m.dirname(a);
      for (; v(n, l); ) {
        const S = m.join(l, "container.d.ts");
        if (yield g(S))
          return { containerPath: S, existed: !0 };
        if (l === n)
          break;
        l = m.dirname(l);
      }
      const f = m.relative(n, a).split(m.sep);
      let y = n;
      return f[0] === "modules" && f.length > 1 ? y = m.join(n, "modules", f[1]) : f.length > 0 && f[0] && (y = m.join(n, f[0])), { containerPath: m.join(y, "container.d.ts"), existed: !1 };
    });
  }
  function $(c, a, l) {
    return h(this, void 0, void 0, function* () {
      if (!t)
        return;
      if (!(yield g(t))) {
        yield I.writeFile(t, V({ containerPath: c, diPath: t, diInterfaceName: l, interfaceName: a }), "utf8");
        return;
      }
      const f = yield I.readFile(t, "utf8"), y = U(f, { containerPath: c, diPath: t, diInterfaceName: l, interfaceName: a });
      y !== f && (yield I.writeFile(t, y, "utf8"));
    });
  }
  function p(c) {
    return h(this, void 0, void 0, function* () {
      const a = yield I.readdir(c, { withFileTypes: !0 }), l = [];
      for (const u of a) {
        if (u.name.startsWith("."))
          continue;
        const f = m.join(c, u.name);
        if (u.isDirectory())
          l.push(...yield p(f));
        else if (u.isFile()) {
          if (!/\.tsx?$/.test(u.name) || u.name.endsWith(".d.ts"))
            continue;
          l.push(f);
        }
      }
      return l;
    });
  }
  function N(c) {
    return h(this, void 0, void 0, function* () {
      const a = yield I.readdir(c, { withFileTypes: !0 }), l = [];
      for (const u of a) {
        if (u.name.startsWith("."))
          continue;
        const f = m.join(c, u.name);
        u.isDirectory() ? l.push(...yield N(f)) : u.isFile() && u.name === "container.d.ts" && l.push(f);
      }
      return l;
    });
  }
  function g(c) {
    return h(this, void 0, void 0, function* () {
      try {
        return yield I.access(c), !0;
      } catch {
        return !1;
      }
    });
  }
  function v(c, a) {
    const l = m.relative(c, a);
    return l === "" || !l.startsWith("..") && !m.isAbsolute(l);
  }
  return {
    name: "mvvm-service-di",
    enforce: "pre",
    configResolved(c) {
      var a, l;
      e = c, n = m.resolve((a = e.root) !== null && a !== void 0 ? a : process.cwd(), "src"), t = m.resolve((l = e.root) !== null && l !== void 0 ? l : process.cwd(), "di.d.ts");
    },
    buildStart() {
      return h(this, void 0, void 0, function* () {
        yield o(), yield i();
      });
    },
    handleHotUpdate(c) {
      return h(this, void 0, void 0, function* () {
        v(n, c.file) && (!/\.tsx?$/.test(c.file) || c.file.endsWith(".d.ts") || (yield s(c.file)));
      });
    }
  };
}
export {
  pe as mvvmServiceDiPlugin
};
