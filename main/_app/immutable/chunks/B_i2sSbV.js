const e=`import MagicString from "magic-string";
import { parse } from "svelte/compiler";
const isElement = (node) => "attributes" in node;
const isEachBlock = (node) => node.type === "EachBlock";
const isIfBlock = (node) => node.type === "IfBlock";
const isAwaitBlock = (node) => node.type === "AwaitBlock";
const isKeyBlock = (node) => node.type === "KeyBlock";
const isSnippetBlock = (node) => node.type === "SnippetBlock";
const directivesPreprocess = () => {
  return {
    name: "AgnosUI",
    markup: ({ content, filename }) => {
      const varPrefix = "__AgnosUISveltePreprocess__";
      if (content.includes(varPrefix)) {
        return;
      }
      const str = new MagicString(content, { filename });
      const parsedCode = parse(content, { filename, modern: true });
      const requiredImports = /* @__PURE__ */ new Set();
      const extractValue = (attribute) => {
        const res = [];
        if (attribute.value === true) {
          return "true";
        }
        const value = Array.isArray(attribute.value) ? attribute.value : [attribute.value];
        for (const part of value) {
          if (part.type === "Text") {
            res.push(JSON.stringify(part.data));
          } else if (part.type === "ExpressionTag") {
            const expression = part.expression;
            res.push(\`(\${content.substring(expression.start, expression.end)})\`);
          } else {
            throw new Error(\`Assert failed, unexpected part\`);
          }
        }
        return res.join("+");
      };
      const processFragment = (items) => items?.nodes.forEach(processItem);
      const processItem = (item) => {
        const actionAttributes = [];
        const classAttributes = [];
        if (isElement(item)) {
          for (const attribute of item.attributes) {
            if (attribute.type === "UseDirective") {
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
              const expression = attribute.expression;
              if (expression) {
                str.appendRight(end, \`[\${attribute.name}, \${content.substring(expression.start, expression.end)}]\`);
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
          processFragment(item.fragment);
        } else if (isEachBlock(item)) {
          processFragment(item.body);
          processFragment(item.fallback);
        } else if (isIfBlock(item)) {
          processFragment(item.consequent);
          processFragment(item.alternate);
        } else if (isAwaitBlock(item)) {
          processFragment(item.pending);
          processFragment(item.then);
          processFragment(item.catch);
        } else if (isKeyBlock(item)) {
          processFragment(item.fragment);
        } else if (isSnippetBlock(item)) {
          processFragment(item.body);
        }
      };
      processFragment(parsedCode.fragment);
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
`;export{e as default};
