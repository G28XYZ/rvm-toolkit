import { d as h } from "../tslib.es6-DQYNRcek.js";
import E from "node:fs/promises";
import m from "node:path";
import d from "typescript";
function O(e, n, t) {
  const i = k(m.dirname(n), t.filePath), a = `import type { ${t.className} } from "${i}";`;
  let l = e;
  new RegExp(`^import type \\{ ${t.className} \\} from \\"${T(i)}\\";`, "m").test(e) || (l = Z(l, a));
  const f = J(l, t.interfaceName);
  if (!f) {
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
  const g = /^\s*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[^:]+)\s*:\s*typeof\s+([A-Za-z0-9_$]+)\s*;.*$/, I = f.body.split(`
`), v = [];
  let w = !1, C = !1;
  for (const x of I) {
    const S = x.match(g);
    if (!S) {
      v.push(x);
      continue;
    }
    const j = S[1].trim(), D = S[2].trim();
    if (j === t.entryKey) {
      if (D === t.className)
        w = !0, v.push(x);
      else {
        const $ = `${f.indent}${t.entryKey}: typeof ${t.className};`;
        v.push($), w = !0, C = !0;
      }
      continue;
    }
    if (D === t.className) {
      C = !0;
      continue;
    }
    v.push(x);
  }
  if (!w) {
    const x = `${f.indent}${t.entryKey}: typeof ${t.className};`, S = v.length > 0 && v[v.length - 1] === "" ? v.length - 1 : v.length;
    v.splice(S, 0, x), C = !0;
  }
  if (C) {
    const x = v.join(`
`);
    l = l.slice(0, f.startIndex) + x + l.slice(f.endIndex);
  }
  return l;
}
function L(e, n) {
  return `${A(e, n)}Services`;
}
function M(e, n) {
  return `${A(e, n)}Stores`;
}
function V(e) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e) ? e : JSON.stringify(e);
}
function k(e, n) {
  const i = m.relative(e, n).replace(/\\/g, "/").replace(/\.(tsx|ts|d\.ts)$/, "");
  return i.startsWith(".") ? i : `./${i}`;
}
function T(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function A(e, n) {
  const i = m.relative(n, e).replace(/\\/g, "/").split("/");
  let a = i[0];
  return i[0] === "modules" && i[1] && (a = i[1]), U(a.replace(/\.d\.ts$/, ""));
}
function U(e) {
  return e.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("");
}
function Z(e, n) {
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
function J(e, n) {
  const t = e.match(new RegExp(`export interface ${T(n)}\\s*\\{`));
  if (!t || t.index === void 0)
    return null;
  const i = t.index + t[0].length, a = e.indexOf("}", i);
  if (a === -1)
    return null;
  const l = e.slice(i, a), f = l.match(/\n(\s*)\w/), g = f ? f[1] : "  ";
  return { body: l, endIndex: a, indent: g, startIndex: i };
}
const K = "rvm-toolkit", X = "Service", H = "Store";
function q(e) {
  return h(this, void 0, void 0, function* () {
    var n, t, i;
    const a = yield E.readFile(e, "utf8"), l = B(e), f = d.createSourceFile(e, a, d.ScriptTarget.Latest, !0, l), I = yield Q(f, e, { cache: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Set() }), v = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
    for (const x of f.statements) {
      if (!d.isImportDeclaration(x) || x.moduleSpecifier.getText(f).replace(/['"]/g, "") !== K)
        continue;
      const j = x.importClause;
      if (!(!j?.namedBindings || !d.isNamedImports(j.namedBindings)))
        for (const D of j.namedBindings.elements) {
          const $ = (t = (n = D.propertyName) === null || n === void 0 ? void 0 : n.text) !== null && t !== void 0 ? t : D.name.text, N = D.name.text;
          $ === X && v.add(N), $ === H && w.add(N);
        }
    }
    if (v.size === 0 && w.size === 0)
      return [];
    const C = [];
    for (const x of f.statements) {
      if (!d.isClassDeclaration(x) || !x.name)
        continue;
      const S = x.name.text, j = (i = d.getDecorators(x)) !== null && i !== void 0 ? i : [];
      for (const D of j) {
        const $ = D.expression;
        if (d.isIdentifier($)) {
          const N = v.has($.text), s = w.has($.text);
          N ? C.push({ className: S, entryKey: S, filePath: e, kind: "service" }) : s && C.push({ className: S, entryKey: S, filePath: e, kind: "store" });
        } else if (d.isCallExpression($) && d.isIdentifier($.expression)) {
          const N = $.expression.text, s = v.has(N), r = w.has(N);
          if (!s && !r)
            continue;
          const [o] = $.arguments;
          let u = S;
          const c = yield G(o, I);
          c && (u = c), C.push({ className: S, entryKey: u, filePath: e, kind: r ? "store" : "service" });
        }
      }
    }
    return C;
  });
}
function G(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!e)
      return null;
    if (d.isObjectLiteralExpression(e)) {
      const t = e.properties.find((i) => d.isPropertyAssignment(i) && d.isIdentifier(i.name) && i.name.text === "id");
      return t ? F(t.initializer, n) : null;
    }
    return F(e, n);
  });
}
function Q(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = W(e), a = yield z(e, n);
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
function z(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    const a = /* @__PURE__ */ new Map();
    for (const l of e.statements) {
      if (!d.isImportDeclaration(l) || !l.importClause || !d.isStringLiteralLike(l.moduleSpecifier))
        continue;
      const f = l.moduleSpecifier.text, g = l.importClause.namedBindings;
      if (!g || !d.isNamedImports(g))
        continue;
      const I = yield Y(n, f);
      if (I)
        for (const v of g.elements) {
          const w = (i = (t = v.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : v.name.text, C = v.name.text;
          a.set(C, { importName: w, sourcePath: I });
        }
    }
    return a;
  });
}
function Y(e, n) {
  return h(this, void 0, void 0, function* () {
    if (!n.startsWith("."))
      return null;
    const t = m.resolve(m.dirname(e), n), i = m.extname(n), a = i ? ee(t, i) : [
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
    for (const l of a)
      if (yield re(l))
        return l;
    return null;
  });
}
function ee(e, n) {
  const t = [e];
  if (n !== ".js" && n !== ".jsx")
    return t;
  const i = e.slice(0, -n.length);
  return n === ".js" ? t.push(`${i}.ts`, `${i}.tsx`, `${i}.d.ts`) : t.push(`${i}.tsx`, `${i}.ts`), t;
}
function F(e, n) {
  return h(this, void 0, void 0, function* () {
    if (d.isStringLiteralLike(e) || d.isNoSubstitutionTemplateLiteral(e))
      return e.text;
    if (d.isTemplateExpression(e)) {
      let t = e.head.text;
      for (const i of e.templateSpans) {
        const a = yield F(i.expression, n);
        if (a === null)
          return null;
        t += a + i.literal.text;
      }
      return t;
    }
    if (d.isBinaryExpression(e) && e.operatorToken.kind === d.SyntaxKind.PlusToken) {
      const t = yield F(e.left, n);
      if (t === null)
        return null;
      const i = yield F(e.right, n);
      return i === null ? null : t + i;
    }
    return d.isIdentifier(e) ? te(e.text, n) : d.isAsExpression(e) || d.isTypeAssertionExpression(e) || d.isParenthesizedExpression(e) ? F(e.expression, n) : null;
  });
}
function te(e, n) {
  return h(this, void 0, void 0, function* () {
    var t, i;
    if (n.localResolved.has(e))
      return (t = n.localResolved.get(e)) !== null && t !== void 0 ? t : null;
    const a = n.localConsts.get(e);
    if (a) {
      const f = yield F(a, n);
      return n.localResolved.set(e, f), f;
    }
    const l = n.importedConsts.get(e);
    if (l) {
      if (n.importedResolved.has(e))
        return (i = n.importedResolved.get(e)) !== null && i !== void 0 ? i : null;
      const f = yield ne(l, n.resolveState);
      return n.importedResolved.set(e, f), f;
    }
    return null;
  });
}
function ne(e, n) {
  return h(this, void 0, void 0, function* () {
    var t;
    const i = `${e.sourcePath}::${e.importName}`;
    if (n.cache.has(i))
      return (t = n.cache.get(i)) !== null && t !== void 0 ? t : null;
    if (n.resolving.has(i))
      return null;
    n.resolving.add(i);
    const a = yield ie(e.sourcePath, e.importName, n);
    return n.resolving.delete(i), n.cache.set(i, a), a;
  });
}
function ie(e, n, t) {
  return h(this, void 0, void 0, function* () {
    const i = yield oe(e), l = se(i).get(n);
    if (!l)
      return null;
    const f = W(i), g = f.get(l);
    if (!g)
      return null;
    const I = yield z(i, e);
    return F(g, {
      localConsts: f,
      importedConsts: I,
      localResolved: /* @__PURE__ */ new Map(),
      importedResolved: /* @__PURE__ */ new Map(),
      resolveState: t
    });
  });
}
function se(e) {
  var n, t, i;
  const a = /* @__PURE__ */ new Map();
  for (const l of e.statements)
    if (d.isVariableStatement(l) && (!((n = l.modifiers) === null || n === void 0) && n.some((f) => f.kind === d.SyntaxKind.ExportKeyword)))
      for (const f of l.declarationList.declarations)
        d.isIdentifier(f.name) && a.set(f.name.text, f.name.text);
    else if (d.isExportDeclaration(l) && l.exportClause && d.isNamedExports(l.exportClause)) {
      if (l.moduleSpecifier)
        continue;
      for (const f of l.exportClause.elements) {
        const g = f.name.text, I = (i = (t = f.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : f.name.text;
        a.set(g, I);
      }
    }
  return a;
}
function oe(e) {
  return h(this, void 0, void 0, function* () {
    const n = yield E.readFile(e, "utf8"), t = B(e);
    return d.createSourceFile(e, n, d.ScriptTarget.Latest, !0, t);
  });
}
function B(e) {
  return e.endsWith(".tsx") ? d.ScriptKind.TSX : e.endsWith(".ts") || e.endsWith(".d.ts") ? d.ScriptKind.TS : e.endsWith(".jsx") ? d.ScriptKind.JSX : e.endsWith(".js") ? d.ScriptKind.JS : d.ScriptKind.TS;
}
function re(e) {
  return h(this, void 0, void 0, function* () {
    try {
      return yield E.access(e), !0;
    } catch {
      return !1;
    }
  });
}
function ue() {
  let e, n = "", t = "";
  function i() {
    return h(this, void 0, void 0, function* () {
      const s = yield j(n);
      for (const r of s)
        yield l(r);
    });
  }
  function a() {
    return h(this, void 0, void 0, function* () {
      if (!t || (yield $(t)))
        return;
      const r = yield D(n);
      if (r.length === 0) {
        const y = [
          `declare module "${K}" {`,
          "  interface DiServices {}",
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(t, y, "utf8");
        return;
      }
      const o = [], u = [], c = [];
      for (const y of r) {
        const R = yield E.readFile(y, "utf8"), b = L(y, n), _ = M(y, n), P = k(m.dirname(t), y);
        R.includes(`export interface ${b}`) && (o.push(`import type { ${b} } from "${P}";`), u.push(b)), R.includes(`export interface ${_}`) && (o.push(`import type { ${_} } from "${P}";`), c.push(_));
      }
      const p = [
        ...o,
        "",
        `declare module "${K}" {`,
        u.length ? `  interface DiServices extends ${u.join(", ")} {}` : "  interface DiServices {}",
        c.length ? `  interface DiStores extends ${c.join(", ")} {}` : "  interface DiStores {}",
        "}",
        ""
      ].join(`
`);
      yield E.writeFile(t, p, "utf8");
    });
  }
  function l(s) {
    return h(this, void 0, void 0, function* () {
      const r = yield q(s);
      for (const o of r)
        yield f(o);
    });
  }
  function f(s) {
    return h(this, void 0, void 0, function* () {
      const r = yield g(s.filePath), o = r.existed, u = V(s.entryKey), c = s.kind === "store" ? M(r.containerPath, n) : L(r.containerPath, n), p = s.kind === "store" ? "DiStores" : "DiServices";
      if (!o) {
        const b = k(m.dirname(r.containerPath), s.filePath), _ = [
          `import type { ${s.className} } from "${b}";`,
          "",
          `export interface ${c} {`,
          `  ${u}: typeof ${s.className};`,
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(r.containerPath, _, "utf8"), yield I(r.containerPath, c, p);
        return;
      }
      const y = yield E.readFile(r.containerPath, "utf8"), R = O(y, r.containerPath, Object.assign(Object.assign({}, s), {
        entryKey: u,
        interfaceName: c
      }));
      R !== y && (yield E.writeFile(r.containerPath, R, "utf8")), yield I(r.containerPath, c, p);
    });
  }
  function g(s) {
    return h(this, void 0, void 0, function* () {
      const r = m.resolve(s);
      let o = m.dirname(r);
      for (; N(n, o); ) {
        const y = m.join(o, "container.d.ts");
        if (yield $(y))
          return { containerPath: y, existed: !0 };
        if (o === n)
          break;
        o = m.dirname(o);
      }
      const c = m.relative(n, r).split(m.sep);
      let p = n;
      return c[0] === "modules" && c.length > 1 ? p = m.join(n, "modules", c[1]) : c.length > 0 && c[0] && (p = m.join(n, c[0])), { containerPath: m.join(p, "container.d.ts"), existed: !1 };
    });
  }
  function I(s, r, o) {
    return h(this, void 0, void 0, function* () {
      if (!t)
        return;
      if (!(yield $(t))) {
        const b = k(m.dirname(t), s), P = [
          `import type { ${r} } from "${b}";`,
          "",
          `declare module "${K}" {`,
          `  interface ${o} extends ${r} {}`,
          "}",
          ""
        ].join(`
`);
        yield E.writeFile(t, P, "utf8");
        return;
      }
      const c = yield E.readFile(t, "utf8");
      let p = c;
      const y = k(m.dirname(t), s), R = `import type { ${r} } from "${y}";`;
      new RegExp(`^import type \\{ ${r} \\} from \\"${T(y)}\\";`, "m").test(p) || (p = v(p, R)), p = w(p, "DiServices"), p = w(p, "DiStores"), p = C(p, o), p = S(p, o, r), p !== c && (yield E.writeFile(t, p, "utf8"));
    });
  }
  function v(s, r) {
    const o = s.split(`
`);
    let u = 0;
    for (let c = 0; c < o.length; c += 1)
      if (o[c].startsWith("import "))
        u = c + 1;
      else if (o[c].trim() !== "")
        break;
    return o.splice(u, 0, r), o.join(`
`);
  }
  function w(s, r) {
    const o = new RegExp(`interface ${r},\\s*([^\\{]+)\\{`, "g");
    return s.replace(o, `interface ${r} extends $1{`);
  }
  function C(s, r) {
    if (new RegExp(`interface\\s+${r}\\b`).test(s))
      return s;
    const o = s.match(new RegExp(`declare module ["']${T(K)}["']\\s*\\{`));
    if (!o || o.index === void 0)
      return s;
    const u = o.index + o[0].length, c = x(s, u);
    if (c === -1)
      return s;
    const p = `
  interface ${r} {}`;
    return s.slice(0, c) + p + s.slice(c);
  }
  function x(s, r) {
    let o = 1;
    for (let u = r; u < s.length; u += 1) {
      const c = s[u];
      if (c === "{" && (o += 1), c === "}" && (o -= 1), o === 0)
        return u;
    }
    return -1;
  }
  function S(s, r, o) {
    var u;
    const c = s.match(new RegExp(`interface ${r}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
    if (!c || c.index === void 0)
      return s;
    const p = (u = c[2]) === null || u === void 0 ? void 0 : u.trim();
    if (p && new RegExp(`\\b${T(o)}\\b`).test(p))
      return s;
    const y = p ? ` extends ${p}, ${o} {` : ` extends ${o} {`, R = c.index, b = R + c[0].length;
    return s.slice(0, R) + `interface ${r}${y}` + s.slice(b);
  }
  function j(s) {
    return h(this, void 0, void 0, function* () {
      const r = yield E.readdir(s, { withFileTypes: !0 }), o = [];
      for (const u of r) {
        if (u.name.startsWith("."))
          continue;
        const c = m.join(s, u.name);
        if (u.isDirectory())
          o.push(...yield j(c));
        else if (u.isFile()) {
          if (!/\.tsx?$/.test(u.name) || u.name.endsWith(".d.ts"))
            continue;
          o.push(c);
        }
      }
      return o;
    });
  }
  function D(s) {
    return h(this, void 0, void 0, function* () {
      const r = yield E.readdir(s, { withFileTypes: !0 }), o = [];
      for (const u of r) {
        if (u.name.startsWith("."))
          continue;
        const c = m.join(s, u.name);
        u.isDirectory() ? o.push(...yield D(c)) : u.isFile() && u.name === "container.d.ts" && o.push(c);
      }
      return o;
    });
  }
  function $(s) {
    return h(this, void 0, void 0, function* () {
      try {
        return yield E.access(s), !0;
      } catch {
        return !1;
      }
    });
  }
  function N(s, r) {
    const o = m.relative(s, r);
    return o === "" || !o.startsWith("..") && !m.isAbsolute(o);
  }
  return {
    name: "mvvm-service-di",
    enforce: "pre",
    configResolved(s) {
      var r, o;
      e = s, n = m.resolve((r = e.root) !== null && r !== void 0 ? r : process.cwd(), "src"), t = m.resolve((o = e.root) !== null && o !== void 0 ? o : process.cwd(), "di.d.ts");
    },
    buildStart() {
      return h(this, void 0, void 0, function* () {
        yield a(), yield i();
      });
    },
    handleHotUpdate(s) {
      return h(this, void 0, void 0, function* () {
        N(n, s.file) && (!/\.tsx?$/.test(s.file) || s.file.endsWith(".d.ts") || (yield l(s.file)));
      });
    }
  };
}
export {
  ue as mvvmServiceDiPlugin
};
