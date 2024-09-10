const t=`import MagicString from "magic-string";
import { parse } from "svelte/compiler";
const directivesPreprocess = () => {
  return {
    name: "AgnosUI",
    markup: ({ content, filename }) => {
      const varPrefix = "__AgnosUISveltePreprocess__";
      if (content.includes(varPrefix)) {
        return;
      }
      const str = new MagicString(content, { filename });
      const parsedCode = parse(content, { filename });
      const requiredImports = /* @__PURE__ */ new Set();
      const extractValue = (attribute) => {
        const res = [];
        const value = attribute.value;
        for (const part of value) {
          if (part.type === "Text") {
            res.push(JSON.stringify(part.data));
          } else if (part.type === "MustacheTag") {
            res.push(\`(\${content.substring(part.expression.start, part.expression.end)})\`);
          } else {
            throw new Error(\`Unexpected part type: \${part.type}\`);
          }
        }
        return res.join("+");
      };
      const processItem = (item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const actionAttributes = [];
        const classAttributes = [];
        if (item.attributes) {
          for (const attribute of item.attributes) {
            if (attribute.type === "Action") {
              actionAttributes.push(attribute);
            } else if (attribute.type === "Attribute" && attribute.name === "class") {
              classAttributes.push(attribute);
            }
          }
          if (actionAttributes.length > 0) {
            const end = item.attributes[item.attributes.length - 1].end;
            let first = true;
            str.appendRight(end, \` {...\${varPrefix}BROWSER ? {} : \${varPrefix}ssrAttributes(\`);
            requiredImports.add("ssrAttributes");
            for (const attribute of actionAttributes) {
              if (first) {
                first = false;
              } else {
                str.appendRight(end, \`, \`);
              }
              if (attribute.expression) {
                str.appendRight(end, \`[\${attribute.name}, \${content.substring(attribute.expression.start, attribute.expression.end)}]\`);
              } else {
                str.appendRight(end, attribute.name);
              }
            }
            for (const attribute of classAttributes) {
              const value = extractValue(attribute);
              str.overwrite(attribute.start, attribute.end, \`use:\${varPrefix}classDirective={\${value}}\`);
              str.appendRight(end, \`, [\${varPrefix}classDirective, \${value}]\`);
              requiredImports.add("classDirective");
            }
            str.appendRight(end, \`)}\`);
          }
        }
        (_a = item.children) == null ? void 0 : _a.forEach(processItem);
        (_c = (_b = item.else) == null ? void 0 : _b.children) == null ? void 0 : _c.forEach(processItem);
        (_e = (_d = item.pending) == null ? void 0 : _d.children) == null ? void 0 : _e.forEach(processItem);
        (_g = (_f = item.then) == null ? void 0 : _f.children) == null ? void 0 : _g.forEach(processItem);
        (_i = (_h = item.catch) == null ? void 0 : _h.children) == null ? void 0 : _i.forEach(processItem);
      };
      processItem(parsedCode.html);
      if (requiredImports.size > 0) {
        const importStatement = \`
import {\${[...requiredImports].map((importName) => \`\${importName} as \${varPrefix}\${importName}\`).join(", ")}} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as \${varPrefix}BROWSER} from 'esm-env';
\`;
        const moduleOrInstance = parsedCode.module ?? parsedCode.instance;
        if (moduleOrInstance) {
          const start = content.indexOf(">", moduleOrInstance.start) + 1;
          str.prependLeft(start, importStatement);
        } else {
          str.prepend(\`<script>\${importStatement}<\\/script>
\`);
        }
      }
      return {
        code: str.toString(),
        map: str.generateMap()
      };
    }
  };
};
export {
  directivesPreprocess
};
`;export{t as default};
