import { d as u } from "../tslib.es6-DQYNRcek.js";
import v from "node:fs/promises";
import l from "node:path";
import c from "typescript";
const me = "Service", pe = "Store", D = "rvm-toolkit";
function ge() {
  let R, y = "", h = "";
  function V() {
    return u(this, void 0, void 0, function* () {
      const e = yield W(y);
      for (const n of e)
        yield F(n);
    });
  }
  function U() {
    return u(this, void 0, void 0, function* () {
      if (!h || (yield N(h)))
        return;
      const n = yield A(y);
      if (n.length === 0) {
        const r = [
          `declare module "${D}" {`,
          "  interface DiServices {}",
          "}",
          ""
        ].join(`
`);
        yield v.writeFile(h, r, "utf8");
        return;
      }
      const t = [], i = [], o = [];
      for (const r of n) {
        const d = yield v.readFile(r, "utf8"), f = P(r), a = L(r), p = C(l.dirname(h), r);
        d.includes(`export interface ${f}`) && (t.push(`import type { ${f} } from "${p}";`), i.push(f)), d.includes(`export interface ${a}`) && (t.push(`import type { ${a} } from "${p}";`), o.push(a));
      }
      const s = [
        ...t,
        "",
        `declare module "${D}" {`,
        i.length ? `  interface DiServices extends ${i.join(", ")} {}` : "  interface DiServices {}",
        o.length ? `  interface DiStores extends ${o.join(", ")} {}` : "  interface DiStores {}",
        "}",
        ""
      ].join(`
`);
      yield v.writeFile(h, s, "utf8");
    });
  }
  function F(e) {
    return u(this, void 0, void 0, function* () {
      const n = yield Z(e);
      for (const t of n)
        yield ne(t);
    });
  }
  function Z(e) {
    return u(this, void 0, void 0, function* () {
      var n, t, i;
      const o = yield v.readFile(e, "utf8"), s = e.endsWith(".tsx") ? c.ScriptKind.TSX : c.ScriptKind.TS, r = c.createSourceFile(e, o, c.ScriptTarget.Latest, !0, s), f = yield X(r, e, { cache: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Set() }), a = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
      for (const m of r.statements) {
        if (!c.isImportDeclaration(m) || m.moduleSpecifier.getText(r).replace(/['"]/g, "") !== D)
          continue;
        const E = m.importClause;
        if (!(!E?.namedBindings || !c.isNamedImports(E.namedBindings)))
          for (const I of E.namedBindings.elements) {
            const g = (t = (n = I.propertyName) === null || n === void 0 ? void 0 : n.text) !== null && t !== void 0 ? t : I.name.text, w = I.name.text;
            g === me && a.add(w), g === pe && p.add(w);
          }
      }
      if (a.size === 0 && p.size === 0)
        return [];
      const $ = [];
      for (const m of r.statements) {
        if (!c.isClassDeclaration(m) || !m.name)
          continue;
        const x = m.name.text, E = (i = c.getDecorators(m)) !== null && i !== void 0 ? i : [];
        for (const I of E) {
          const g = I.expression;
          if (c.isIdentifier(g)) {
            const w = a.has(g.text), b = p.has(g.text);
            w ? $.push({ className: x, entryKey: x, filePath: e, kind: "service" }) : b && $.push({ className: x, entryKey: x, filePath: e, kind: "store" });
          } else if (c.isCallExpression(g) && c.isIdentifier(g.expression)) {
            const w = g.expression.text, b = a.has(w), z = p.has(w);
            if (!b && !z)
              continue;
            const [fe] = g.arguments;
            let B = x;
            const O = yield J(fe, f);
            O && (B = O), $.push({ className: x, entryKey: B, filePath: e, kind: z ? "store" : "service" });
          }
        }
      }
      return $;
    });
  }
  function J(e, n) {
    return u(this, void 0, void 0, function* () {
      if (!e)
        return null;
      if (c.isObjectLiteralExpression(e)) {
        const t = e.properties.find((i) => c.isPropertyAssignment(i) && c.isIdentifier(i.name) && i.name.text === "id");
        return t ? S(t.initializer, n) : null;
      }
      return S(e, n);
    });
  }
  function X(e, n, t) {
    return u(this, void 0, void 0, function* () {
      const i = K(e), o = yield _(e, n);
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
  function K(e) {
    const n = /* @__PURE__ */ new Map();
    for (const t of e.statements)
      if (c.isVariableStatement(t) && t.declarationList.flags & c.NodeFlags.Const)
        for (const i of t.declarationList.declarations)
          !c.isIdentifier(i.name) || !i.initializer || n.set(i.name.text, i.initializer);
    return n;
  }
  function _(e, n) {
    return u(this, void 0, void 0, function* () {
      var t, i;
      const o = /* @__PURE__ */ new Map();
      for (const s of e.statements) {
        if (!c.isImportDeclaration(s) || !s.importClause || !c.isStringLiteralLike(s.moduleSpecifier))
          continue;
        const r = s.moduleSpecifier.text, d = s.importClause.namedBindings;
        if (!d || !c.isNamedImports(d))
          continue;
        const f = yield H(n, r);
        if (f)
          for (const a of d.elements) {
            const p = (i = (t = a.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : a.name.text, $ = a.name.text;
            o.set($, { importName: p, sourcePath: f });
          }
      }
      return o;
    });
  }
  function H(e, n) {
    return u(this, void 0, void 0, function* () {
      if (!n.startsWith("."))
        return null;
      const t = l.resolve(l.dirname(e), n), o = l.extname(n) ? [t] : [
        `${t}.ts`,
        `${t}.tsx`,
        `${t}.js`,
        `${t}.jsx`,
        `${t}.d.ts`,
        l.join(t, "index.ts"),
        l.join(t, "index.tsx"),
        l.join(t, "index.js"),
        l.join(t, "index.jsx"),
        l.join(t, "index.d.ts")
      ];
      for (const s of o)
        if (yield N(s))
          return s;
      return null;
    });
  }
  function S(e, n) {
    return u(this, void 0, void 0, function* () {
      if (c.isStringLiteralLike(e) || c.isNoSubstitutionTemplateLiteral(e))
        return e.text;
      if (c.isTemplateExpression(e)) {
        let t = e.head.text;
        for (const i of e.templateSpans) {
          const o = yield S(i.expression, n);
          if (o === null)
            return null;
          t += o + i.literal.text;
        }
        return t;
      }
      if (c.isBinaryExpression(e) && e.operatorToken.kind === c.SyntaxKind.PlusToken) {
        const t = yield S(e.left, n);
        if (t === null)
          return null;
        const i = yield S(e.right, n);
        return i === null ? null : t + i;
      }
      return c.isIdentifier(e) ? q(e.text, n) : c.isAsExpression(e) || c.isTypeAssertionExpression(e) || c.isParenthesizedExpression(e) ? S(e.expression, n) : null;
    });
  }
  function q(e, n) {
    return u(this, void 0, void 0, function* () {
      var t, i;
      if (n.localResolved.has(e))
        return (t = n.localResolved.get(e)) !== null && t !== void 0 ? t : null;
      const o = n.localConsts.get(e);
      if (o) {
        const r = yield S(o, n);
        return n.localResolved.set(e, r), r;
      }
      const s = n.importedConsts.get(e);
      if (s) {
        if (n.importedResolved.has(e))
          return (i = n.importedResolved.get(e)) !== null && i !== void 0 ? i : null;
        const r = yield G(s, n.resolveState);
        return n.importedResolved.set(e, r), r;
      }
      return null;
    });
  }
  function G(e, n) {
    return u(this, void 0, void 0, function* () {
      var t;
      const i = `${e.sourcePath}::${e.importName}`;
      if (n.cache.has(i))
        return (t = n.cache.get(i)) !== null && t !== void 0 ? t : null;
      if (n.resolving.has(i))
        return null;
      n.resolving.add(i);
      const o = yield Q(e.sourcePath, e.importName, n);
      return n.resolving.delete(i), n.cache.set(i, o), o;
    });
  }
  function Q(e, n, t) {
    return u(this, void 0, void 0, function* () {
      const i = yield ee(e), s = Y(i).get(n);
      if (!s)
        return null;
      const r = K(i), d = r.get(s);
      if (!d)
        return null;
      const f = yield _(i, e);
      return S(d, {
        localConsts: r,
        importedConsts: f,
        localResolved: /* @__PURE__ */ new Map(),
        importedResolved: /* @__PURE__ */ new Map(),
        resolveState: t
      });
    });
  }
  function Y(e) {
    var n, t, i;
    const o = /* @__PURE__ */ new Map();
    for (const s of e.statements)
      if (c.isVariableStatement(s) && (!((n = s.modifiers) === null || n === void 0) && n.some((r) => r.kind === c.SyntaxKind.ExportKeyword)))
        for (const r of s.declarationList.declarations)
          c.isIdentifier(r.name) && o.set(r.name.text, r.name.text);
      else if (c.isExportDeclaration(s) && s.exportClause && c.isNamedExports(s.exportClause)) {
        if (s.moduleSpecifier)
          continue;
        for (const r of s.exportClause.elements) {
          const d = r.name.text, f = (i = (t = r.propertyName) === null || t === void 0 ? void 0 : t.text) !== null && i !== void 0 ? i : r.name.text;
          o.set(d, f);
        }
      }
    return o;
  }
  function ee(e) {
    return u(this, void 0, void 0, function* () {
      const n = yield v.readFile(e, "utf8"), t = te(e);
      return c.createSourceFile(e, n, c.ScriptTarget.Latest, !0, t);
    });
  }
  function te(e) {
    return e.endsWith(".tsx") ? c.ScriptKind.TSX : e.endsWith(".ts") || e.endsWith(".d.ts") ? c.ScriptKind.TS : e.endsWith(".jsx") ? c.ScriptKind.JSX : e.endsWith(".js") ? c.ScriptKind.JS : c.ScriptKind.TS;
  }
  function ne(e) {
    return u(this, void 0, void 0, function* () {
      const n = yield ie(e.filePath), t = n.existed, i = ue(e.entryKey), o = e.kind === "store" ? L(n.containerPath) : P(n.containerPath), s = e.kind === "store" ? "DiStores" : "DiServices";
      if (!t) {
        const f = C(l.dirname(n.containerPath), e.filePath), a = [
          `import type { ${e.className} } from "${f}";`,
          "",
          `export interface ${o} {`,
          `  ${i}: typeof ${e.className};`,
          "}",
          ""
        ].join(`
`);
        yield v.writeFile(n.containerPath, a, "utf8"), yield k(n.containerPath, o, s);
        return;
      }
      const r = yield v.readFile(n.containerPath, "utf8"), d = oe(r, n.containerPath, Object.assign(Object.assign({}, e), {
        entryKey: i,
        interfaceName: o
      }));
      d !== r && (yield v.writeFile(n.containerPath, d, "utf8")), yield k(n.containerPath, o, s);
    });
  }
  function ie(e) {
    return u(this, void 0, void 0, function* () {
      const n = l.resolve(e);
      let t = l.dirname(n);
      for (; t.startsWith(y); ) {
        const r = l.join(t, "container.d.ts");
        if (yield N(r))
          return { containerPath: r, existed: !0 };
        if (t === y)
          break;
        t = l.dirname(t);
      }
      const o = l.relative(y, n).split(l.sep);
      let s = y;
      return o[0] === "modules" && o.length > 1 ? s = l.join(y, "modules", o[1]) : o.length > 0 && o[0] && (s = l.join(y, o[0])), { containerPath: l.join(s, "container.d.ts"), existed: !1 };
    });
  }
  function oe(e, n, t) {
    const i = C(l.dirname(n), t.filePath), o = `import type { ${t.className} } from "${i}";`;
    let s = e;
    new RegExp(`^import type \\{ ${t.className} \\} from \\"${j(i)}\\";`, "m").test(e) || (s = se(s, o));
    const r = ce(s, t.interfaceName);
    if (!r) {
      const m = [
        "",
        `export interface ${t.interfaceName} {`,
        `  ${t.entryKey}: typeof ${t.className};`,
        "}",
        ""
      ].join(`
`);
      return `${s.trimEnd()}
${m}`;
    }
    const d = /^\s*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[^:]+)\s*:\s*typeof\s+([A-Za-z0-9_$]+)\s*;.*$/, f = r.body.split(`
`), a = [];
    let p = !1, $ = !1;
    for (const m of f) {
      const x = m.match(d);
      if (!x) {
        a.push(m);
        continue;
      }
      const E = x[1].trim(), I = x[2].trim();
      if (E === t.entryKey) {
        if (I === t.className)
          p = !0, a.push(m);
        else {
          const g = `${r.indent}${t.entryKey}: typeof ${t.className};`;
          a.push(g), p = !0, $ = !0;
        }
        continue;
      }
      if (I === t.className) {
        $ = !0;
        continue;
      }
      a.push(m);
    }
    if (!p) {
      const m = `${r.indent}${t.entryKey}: typeof ${t.className};`, x = a.length > 0 && a[a.length - 1] === "" ? a.length - 1 : a.length;
      a.splice(x, 0, m), $ = !0;
    }
    if ($) {
      const m = a.join(`
`);
      s = s.slice(0, r.startIndex) + m + s.slice(r.endIndex);
    }
    return s;
  }
  function k(e, n, t) {
    return u(this, void 0, void 0, function* () {
      if (!h)
        return;
      if (!(yield N(h))) {
        const f = C(l.dirname(h), e), p = [
          `import type { ${n} } from "${f}";`,
          "",
          `declare module "${D}" {`,
          `  interface ${t} extends ${n} {}`,
          "}",
          ""
        ].join(`
`);
        yield v.writeFile(h, p, "utf8");
        return;
      }
      const o = yield v.readFile(h, "utf8");
      let s = o;
      const r = C(l.dirname(h), e), d = `import type { ${n} } from "${r}";`;
      new RegExp(`^import type \\{ ${n} \\} from \\"${j(r)}\\";`, "m").test(s) || (s = re(s, d)), s = T(s, "DiServices"), s = T(s, "DiStores"), s = le(s, t), s = de(s, t, n), s !== o && (yield v.writeFile(h, s, "utf8"));
    });
  }
  function se(e, n) {
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
  function re(e, n) {
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
  function ce(e, n) {
    const t = e.match(new RegExp(`export interface ${j(n)}\\s*\\{`));
    if (!t || t.index === void 0)
      return null;
    const i = t.index + t[0].length, o = e.indexOf("}", i);
    if (o === -1)
      return null;
    const s = e.slice(i, o), r = s.match(/\n(\s*)\w/), d = r ? r[1] : "  ";
    return { body: s, endIndex: o, indent: d, startIndex: i };
  }
  function T(e, n) {
    const t = new RegExp(`interface ${n},\\s*([^\\{]+)\\{`, "g");
    return e.replace(t, `interface ${n} extends $1{`);
  }
  function le(e, n) {
    if (new RegExp(`interface\\s+${n}\\b`).test(e))
      return e;
    const t = e.match(new RegExp(`declare module ["']${j(D)}["']\\s*\\{`));
    if (!t || t.index === void 0)
      return e;
    const i = t.index + t[0].length, o = ae(e, i);
    if (o === -1)
      return e;
    const s = `
  interface ${n} {}`;
    return e.slice(0, o) + s + e.slice(o);
  }
  function ae(e, n) {
    let t = 1;
    for (let i = n; i < e.length; i += 1) {
      const o = e[i];
      if (o === "{" && (t += 1), o === "}" && (t -= 1), t === 0)
        return i;
    }
    return -1;
  }
  function de(e, n, t) {
    var i;
    const o = e.match(new RegExp(`interface ${n}(\\s+extends\\s+([^\\{]+))?\\s*\\{`));
    if (!o || o.index === void 0)
      return e;
    const s = (i = o[2]) === null || i === void 0 ? void 0 : i.trim();
    if (s && new RegExp(`\\b${j(t)}\\b`).test(s))
      return e;
    const r = s ? ` extends ${s}, ${t} {` : ` extends ${t} {`, d = o.index, f = d + o[0].length;
    return e.slice(0, d) + `interface ${n}${r}` + e.slice(f);
  }
  function P(e) {
    const t = l.relative(y, e).replace(/\\/g, "/").split("/");
    let i = t[0];
    return t[0] === "modules" && t[1] && (i = t[1]), `${M(i.replace(/\.d\.ts$/, ""))}Services`;
  }
  function L(e) {
    const t = l.relative(y, e).replace(/\\/g, "/").split("/");
    let i = t[0];
    return t[0] === "modules" && t[1] && (i = t[1]), `${M(i.replace(/\.d\.ts$/, ""))}Stores`;
  }
  function M(e) {
    return e.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("");
  }
  function ue(e) {
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e) ? e : JSON.stringify(e);
  }
  function C(e, n) {
    const i = l.relative(e, n).replace(/\\/g, "/").replace(/\.(tsx|ts|d\.ts)$/, "");
    return i.startsWith(".") ? i : `./${i}`;
  }
  function j(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function W(e) {
    return u(this, void 0, void 0, function* () {
      const n = yield v.readdir(e, { withFileTypes: !0 }), t = [];
      for (const i of n) {
        if (i.name.startsWith("."))
          continue;
        const o = l.join(e, i.name);
        if (i.isDirectory())
          t.push(...yield W(o));
        else if (i.isFile()) {
          if (!/\.tsx?$/.test(i.name) || i.name.endsWith(".d.ts"))
            continue;
          t.push(o);
        }
      }
      return t;
    });
  }
  function A(e) {
    return u(this, void 0, void 0, function* () {
      const n = yield v.readdir(e, { withFileTypes: !0 }), t = [];
      for (const i of n) {
        if (i.name.startsWith("."))
          continue;
        const o = l.join(e, i.name);
        i.isDirectory() ? t.push(...yield A(o)) : i.isFile() && i.name === "container.d.ts" && t.push(o);
      }
      return t;
    });
  }
  function N(e) {
    return u(this, void 0, void 0, function* () {
      try {
        return yield v.access(e), !0;
      } catch {
        return !1;
      }
    });
  }
  return {
    name: "mvvm-service-di",
    enforce: "pre",
    configResolved(e) {
      var n, t;
      R = e, y = l.resolve((n = R.root) !== null && n !== void 0 ? n : process.cwd(), "src"), h = l.resolve((t = R.root) !== null && t !== void 0 ? t : process.cwd(), "di.d.ts");
    },
    buildStart() {
      return u(this, void 0, void 0, function* () {
        yield U(), yield V();
      });
    },
    handleHotUpdate(e) {
      return u(this, void 0, void 0, function* () {
        e.file.startsWith(y) && (!/\.tsx?$/.test(e.file) || e.file.endsWith(".d.ts") || (yield F(e.file)));
      });
    }
  };
}
export {
  ge as mvvmServiceDiPlugin
};
