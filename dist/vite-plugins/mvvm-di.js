import { d as h } from "../tslib.es6-DQYNRcek.js";
import E from "node:fs/promises";
import p from "node:path";
import d from "typescript";
function B(e, n, t) {
  const i = _(p.dirname(n), t.filePath), a = `import type { ${t.className} } from "${i}";`;
  let l = e;
  new RegExp(`^import type \\{ ${t.className} \\} from \\"${K(i)}\\";`, "m").test(e) || (l = U(l, a));
  const u = Z(l, t.interfaceName);
  if (!u) {
    const x = [
      "",
      `export interface ${t.interfaceName} {`,
      `  ${t.entryKey}: typeof ${t.className};`,
      "}",
      ""
    ].join(`
`);
    return `${l.trimEnd()}
${x}`;
  }
  const $ = /^\s*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[^:]+)\s*:\s*typeof\s+([A-Za-z0-9_$]+)\s*;.*$/, I = u.body.split(`
`), v = [];
  let w = !1, C = !1;
  for (const x of I) {
    const S = x.match($);
    if (!S) {
      v.push(x);
      continue;
    }
    const N = S[1].trim(), j = S[2].trim();
    if (N === t.entryKey) {
      if (j === t.className)
        w = !0, v.push(x);
      else {
        const g = `${u.indent}${t.entryKey}: typeof ${t.className};`;
        v.push(g), w = !0, C = !0;
      }
      continue;
    }
    if (j === t.className) {
      C = !0;
      continue;
    }
    v.push(x);
  }
  if (!w) {
    const x = `${u.indent}${t.entryKey}: typeof ${t.className};`, S = v.length > 0 && v[v.length - 1] === "" ? v.length - 1 : v.length;
    v.splice(S, 0, x), C = !0;
  }
  if (C) {
    const x = v.join(`
`);
    l = l.slice(0, u.startIndex) + x + l.slice(u.endIndex);
  }
  return l;
}
function T(e, n) {
  return `${M(e, n)}Services`;
}
function L(e, n) {
  return `${M(e, n)}Stores`;
}
function O(e) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e) ? e : JSON.stringify(e);
}
function _(e, n) {
  const i = p.relative(e, n).replace(/\\/g, "/").replace(/\.(tsx|ts|d\.ts)$/, "");
  return i.startsWith(".") ? i : `./${i}`;
}
function K(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function M(e, n) {
  const i = p.relative(n, e).replace(/\\/g, "/").split("/");
  let a = i[0];
  return i[0] === "modules" && i[1] && (a = i[1]), V(a.replace(/\.d\.ts$/, ""));
}
function V(e) {
  return e.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("");
}
function U(e, n) {
  const t = e.split(`
`);
  let i = 0;
  for (let a = 0; a < t.length; a += 1)
    if (t[a].startsWith("import "))
      i = a + 1;
    else if (t[a].trim() !== "")
      break;
  return t.splice(i, 0, n), t.join(`
`);
}
function Z(e, n) {
  const t = e.match(new RegExp(`export interface ${K(n)}\\s*\\{`));
  if (!t || t.index === void 0)
    return null;
  const i = t.index + t[0].length, a = e.indexOf("}", i);
  if (a === -1)
    return null;
  const l = e.slice(i, a), u = l.match(/\n(\s*)\w/), $ = u ? u[1] : "  ";
  return { body: l, endIndex: a, indent: $, startIndex: i };
}
const k = "rvm-toolkit", J = "Service", X = "Store";
function H(e) {
  return h(this, void 0, void 0, function* () {
    var n, t, i;
    const a = yield E.readFile(e, "utf8"), l = z(e), u = d.createSourceFile(e, a, d.ScriptTarget.Latest, !0, l), I = yield G(u, e, { cache: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Set() }), v = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
    for (const x of u.statements) {
      if (!d.isImportDeclaration(x) || x.moduleSpecifier.getText(u).replace(/['"]/g, "") !== k)
        continue;
      const N = x.importClause;
      if (!(!N?.namedBindings || !d.isNamedImports(N.namedBindings)))
        for (const j of N.namedBindings.elements) {
          const g = (t = (n = j.propertyName) === null || n === void 0 ? void 0 : n.text) !== null && t !== void 0 ? t : j.name.text, o = j.name.text;
          g === J && v.add(o), g === X && w.add(o);
        }
    }
    if (v.size === 0 && w.size === 0)
      return [];
    const C = [];
    for (const x of u.statements) {
      if (!d.isClassDeclaration(x) || !x.name)
        continue;
      const S = x.name.text, N = (i = d.getDecorators(x)) !== null && i !== void 0 ? i : [];
      for (const j of N) {
        const g = j.expression;
        if (d.isIdentifier(g)) {
          const o = v.has(g.text), r = w.has(g.text);
          o ? C.push({ className: S, entryKey: S, filePath: e, kind: "service" }) : r && C.push({ className: S, entryKey: S, filePath: e, kind: "store" });
        } else if (d.isCallExpression(g) && d.isIdentifier(g.expression)) {
          const o = g.expression.text, r = v.has(o), s = w.has(o);
          if (!r && !s)
            continue;
          const [f] = g.arguments;
          let c = S;
          const m = yield q(f, I);
          m && (c = m), C.push({ className: S, entryKey: c, filePath: e, kind: s ? "store" : "service" });
        }
      }
    }
    return C;
  });
}
function q(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!e)
      return null;
    if (d.isObjectLiteralExpression(e)) {
      const t = e.properties.find((i) => d.isPropertyAssignment(i) && d.isIdentifier(i.name) && i.name.text === "id");
      return t ? b(t.initializer, n) : null;
    }
    return b(e, n);
  });
}
function G(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = W(e), a = yield A(e, n);
    return {
      filePath: n,
      localConsts: i,
      importedConsts: a,
      localResolved: /* @__PURE__ */ new Map(),
      importedResolved: /* @__PURE__ */ new Map(),
      resolveState: t
    };
  });
}
function W(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e.statements)
    if (d.isVariableStatement(t) && t.declarationList.flags & d.NodeFlags.Const)
      for (const i of t.declarationList.declarations)
        !d.isIdentifier(i.name) || !i.initializer || n.set(i.name.text, i.initializer);
  return n;
}
function A(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    const a = /* @__PURE__ */ new Map();
    for (const l of e.statements) {
      if (!d.isImportDeclaration(l) || !l.importClause || !d.isStringLiteralLike(l.moduleSpecifier))
        continue;
      const u = l.moduleSpecifier.text, $ = l.importClause.namedBindings;
      if (!$ || !d.isNamedImports($))
        continue;
      const I = yield Q(n, u);
      if (I)
        for (const v of $.elements) {
          const w = (i = (t = v.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : v.name.text, C = v.name.text;
          a.set(C, { importName: w, sourcePath: I });
        }
    }
    return a;
  });
}
function Q(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!n.startsWith("."))
      return null;
    const t = p.resolve(p.dirname(e), n), a = p.extname(n) ? [t] : [
      `${t}.ts`,
      `${t}.tsx`,
      `${t}.js`,
      `${t}.jsx`,
      `${t}.d.ts`,
      p.join(t, "index.ts"),
      p.join(t, "index.tsx"),
      p.join(t, "index.js"),
      p.join(t, "index.jsx"),
      p.join(t, "index.d.ts")
    ];
    for (const l of a)
      if (yield oe(l))
        return l;
    return null;
  });
}
function b(e, n) {
  return h(this, void 0, void 0, function* () {
    if (d.isStringLiteralLike(e) || d.isNoSubstitutionTemplateLiteral(e))
      return e.text;
    if (d.isTemplateExpression(e)) {
      let t = e.head.text;
      for (const i of e.templateSpans) {
        const a = yield b(i.expression, n);
        if (a === null)
          return null;
        t += a + i.literal.text;
      }
      return t;
    }
    if (d.isBinaryExpression(e) && e.operatorToken.kind === d.SyntaxKind.PlusToken) {
      const t = yield b(e.left, n);
      if (t === null)
        return null;
      const i = yield b(e.right, n);
      return i === null ? null : t + i;
    }
    return d.isIdentifier(e) ? Y(e.text, n) : d.isAsExpression(e) || d.isTypeAssertionExpression(e) || d.isParenthesizedExpression(e) ? b(e.expression, n) : null;
  });
}
function Y(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    if (n.localResolved.has(e))
      return (t = n.localResolved.get(e)) !== null && t !== void 0 ? t : null;
    const a = n.localConsts.get(e);
    if (a) {
      const u = yield b(a, n);
      return n.localResolved.set(e, u), u;
    }
    const l = n.importedConsts.get(e);
    if (l) {
      if (n.importedResolved.has(e))
        return (i = n.importedResolved.get(e)) !== null && i !== void 0 ? i : null;
      const u = yield ee(l, n.resolveState);
      return n.importedResolved.set(e, u), u;
    }
    return null;
  });
}
function ee(e, n) {
  return h(this, void 0, void 0, function* () {
    var t;
    const i = `${e.sourcePath}::${e.importName}`;
    if (n.cache.has(i))
      return (t = n.cache.get(i)) !== null && t !== void 0 ? t : null;
    if (n.resolving.has(i))
      return null;
    n.resolving.add(i);
    const a = yield te(e.sourcePath, e.importName, n);
    return n.resolving.delete(i), n.cache.set(i, a), a;
  });
}
function te(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = yield ie(e), l = ne(i).get(n);
    if (!l)
      return null;
    const u = W(i), $ = u.get(l);
    if (!$)
      return null;
    const I = yield A(i, e);
    return b($, {
      localConsts: u,
      importedConsts: I,
      localResolved: /* @__PURE__ */ new Map(),
      importedResolved: /* @__PURE__ */ new Map(),
      resolveState: t
    });
  });
}
function ne(e) {
  var n, t, i;
  const a = /* @__PURE__ */ new Map();
  for (const l of e.statements)
    if (d.isVariableStatement(l) && (!((n = l.modifiers) === null || n === void 0) && n.some((u) => u.kind === d.SyntaxKind.ExportKeyword)))
      for (const u of l.declarationList.declarations)
        d.isIdentifier(u.name) && a.set(u.name.text, u.name.text);
    else if (d.isExportDeclaration(l) && l.exportClause && d.isNamedExports(l.exportClause)) {
      if (l.moduleSpecifier)
        continue;
      for (const u of l.exportClause.elements) {
        const $ = u.name.text, I = (i = (t = u.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : u.name.text;
        a.set($, I);
      }
    }
  return a;
}
function ie(e) {
  return h(this, void 0, void 0, function* () {
    const n = yield E.readFile(e, "utf8"), t = z(e);
    return d.createSourceFile(e, n, d.ScriptTarget.Latest, !0, t);
  });
}
function z(e) {
  return e.endsWith(".tsx") ? d.ScriptKind.TSX : e.endsWith(".ts") || e.endsWith(".d.ts") ? d.ScriptKind.TS : e.endsWith(".jsx") ? d.ScriptKind.JSX : e.endsWith(".js") ? d.ScriptKind.JS : d.ScriptKind.TS;
}
function oe(e) {
  return h(this, void 0, void 0, function* () {
    try {
      return yield E.access(e), !0;
    } catch {
      return !1;
    }
  });
}
function ae() {
  let e, n = "", t = "";
  function i() {
    return h(this, void 0, void 0, function* () {
      const o = yield N(n);
      for (const r of o)
        yield l(r);
    });
  }
  function a() {
    return h(this, void 0, void 0, function* () {
      if (!t || (yield g(t)))
        return;
      const r = yield j(n);
      if (r.length === 0) {
        const y = [
          `declare module "${k}" {`,
          "  interface DiServices {}",
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(t, y, "utf8");
        return;
      }
      const s = [], f = [], c = [];
      for (const y of r) {
        const D = yield E.readFile(y, "utf8"), R = T(y, n), F = L(y, n), P = _(p.dirname(t), y);
        D.includes(`export interface ${R}`) && (s.push(`import type { ${R} } from "${P}";`), f.push(R)), D.includes(`export interface ${F}`) && (s.push(`import type { ${F} } from "${P}";`), c.push(F));
      }
      const m = [
        ...s,
        "",
        `declare module "${k}" {`,
        f.length ? `  interface DiServices extends ${f.join(", ")} {}` : "  interface DiServices {}",
        c.length ? `  interface DiStores extends ${c.join(", ")} {}` : "  interface DiStores {}",
        "}",
        ""
      ].join(`
`);
      yield E.writeFile(t, m, "utf8");
    });
  }
  function l(o) {
    return h(this, void 0, void 0, function* () {
      const r = yield H(o);
      for (const s of r)
        yield u(s);
    });
  }
  function u(o) {
    return h(this, void 0, void 0, function* () {
      const r = yield $(o.filePath), s = r.existed, f = O(o.entryKey), c = o.kind === "store" ? L(r.containerPath, n) : T(r.containerPath, n), m = o.kind === "store" ? "DiStores" : "DiServices";
      if (!s) {
        const R = _(p.dirname(r.containerPath), o.filePath), F = [
          `import type { ${o.className} } from "${R}";`,
          "",
          `export interface ${c} {`,
          `  ${f}: typeof ${o.className};`,
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(r.containerPath, F, "utf8"), yield I(r.containerPath, c, m);
        return;
      }
      const y = yield E.readFile(r.containerPath, "utf8"), D = B(y, r.containerPath, Object.assign(Object.assign({}, o), {
        entryKey: f,
        interfaceName: c
      }));
      D !== y && (yield E.writeFile(r.containerPath, D, "utf8")), yield I(r.containerPath, c, m);
    });
  }
  function $(o) {
    return h(this, void 0, void 0, function* () {
      const r = p.resolve(o);
      let s = p.dirname(r);
      for (; s.startsWith(n); ) {
        const y = p.join(s, "container.d.ts");
        if (yield g(y))
          return { containerPath: y, existed: !0 };
        if (s === n)
          break;
        s = p.dirname(s);
      }
      const c = p.relative(n, r).split(p.sep);
      let m = n;
      return c[0] === "modules" && c.length > 1 ? m = p.join(n, "modules", c[1]) : c.length > 0 && c[0] && (m = p.join(n, c[0])), { containerPath: p.join(m, "container.d.ts"), existed: !1 };
    });
  }
  function I(o, r, s) {
    return h(this, void 0, void 0, function* () {
      if (!t)
        return;
      if (!(yield g(t))) {
        const R = _(p.dirname(t), o), P = [
          `import type { ${r} } from "${R}";`,
          "",
          `declare module "${k}" {`,
          `  interface ${s} extends ${r} {}`,
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(t, P, "utf8");
        return;
      }
      const c = yield E.readFile(t, "utf8");
      let m = c;
      const y = _(p.dirname(t), o), D = `import type { ${r} } from "${y}";`;
      new RegExp(`^import type \\{ ${r} \\} from \\"${K(y)}\\";`, "m").test(m) || (m = v(m, D)), m = w(m, "DiServices"), m = w(m, "DiStores"), m = C(m, s), m = S(m, s, r), m !== c && (yield E.writeFile(t, m, "utf8"));
    });
  }
  function v(o, r) {
    const s = o.split(`
`);
    let f = 0;
    for (let c = 0; c < s.length; c += 1)
      if (s[c].startsWith("import "))
        f = c + 1;
      else if (s[c].trim() !== "")
        break;
    return s.splice(f, 0, r), s.join(`
`);
  }
  function w(o, r) {
    const s = new RegExp(`interface ${r},\\s*([^\\{]+)\\{`, "g");
    return o.replace(s, `interface ${r} extends $1{`);
  }
  function C(o, r) {
    if (new RegExp(`interface\\s+${r}\\b`).test(o))
      return o;
    const s = o.match(new RegExp(`declare module ["']${K(k)}["']\\s*\\{`));
    if (!s || s.index === void 0)
      return o;
    const f = s.index + s[0].length, c = x(o, f);
    if (c === -1)
      return o;
    const m = `
  interface ${r} {}`;
    return o.slice(0, c) + m + o.slice(c);
  }
  function x(o, r) {
    let s = 1;
    for (let f = r; f < o.length; f += 1) {
      const c = o[f];
      if (c === "{" && (s += 1), c === "}" && (s -= 1), s === 0)
        return f;
    }
    return -1;
  }
  function S(o, r, s) {
    var f;
    const c = o.match(new RegExp(`interface ${r}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
    if (!c || c.index === void 0)
      return o;
    const m = (f = c[2]) === null || f === void 0 ? void 0 : f.trim();
    if (m && new RegExp(`\\b${K(s)}\\b`).test(m))
      return o;
    const y = m ? ` extends ${m}, ${s} {` : ` extends ${s} {`, D = c.index, R = D + c[0].length;
    return o.slice(0, D) + `interface ${r}${y}` + o.slice(R);
  }
  function N(o) {
    return h(this, void 0, void 0, function* () {
      const r = yield E.readdir(o, { withFileTypes: !0 }), s = [];
      for (const f of r) {
        if (f.name.startsWith("."))
          continue;
        const c = p.join(o, f.name);
        if (f.isDirectory())
          s.push(...yield N(c));
        else if (f.isFile()) {
          if (!/\.tsx?$/.test(f.name) || f.name.endsWith(".d.ts"))
            continue;
          s.push(c);
        }
      }
      return s;
    });
  }
  function j(o) {
    return h(this, void 0, void 0, function* () {
      const r = yield E.readdir(o, { withFileTypes: !0 }), s = [];
      for (const f of r) {
        if (f.name.startsWith("."))
          continue;
        const c = p.join(o, f.name);
        f.isDirectory() ? s.push(...yield j(c)) : f.isFile() && f.name === "container.d.ts" && s.push(c);
      }
      return s;
    });
  }
  function g(o) {
    return h(this, void 0, void 0, function* () {
      try {
        return yield E.access(o), !0;
      } catch {
        return !1;
      }
    });
  }
  return {
    name: "mvvm-service-di",
    enforce: "pre",
    configResolved(o) {
      var r, s;
      e = o, n = p.resolve((r = e.root) !== null && r !== void 0 ? r : process.cwd(), "src"), t = p.resolve((s = e.root) !== null && s !== void 0 ? s : process.cwd(), "di.d.ts");
    },
    buildStart() {
      return h(this, void 0, void 0, function* () {
        yield a(), yield i();
      });
    },
    handleHotUpdate(o) {
      return h(this, void 0, void 0, function* () {
        o.file.startsWith(n) && (!/\.tsx?$/.test(o.file) || o.file.endsWith(".d.ts") || (yield l(o.file)));
      });
    }
  };
}
export {
  ae as mvvmServiceDiPlugin
};
