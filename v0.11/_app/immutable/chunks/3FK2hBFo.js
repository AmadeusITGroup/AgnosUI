const e=`"use strict";
const directive = require("@agnos-ui/core/utils/directive");
const esmEnv = require("esm-env");
const react = require("react");
const attributesMap = /* @__PURE__ */ new Map([
  ["tabindex", "tabIndex"],
  ["for", "htmlFor"],
  ["autocomplete", "autoComplete"],
  ["autocapitalize", "autoCapitalize"],
  ["autocorrect", "autoCorrect"]
]);
function directiveAttributes(...directives) {
  const reactAttributes = {};
  const { attributes, style, classNames } = directive.attributesData(...directives);
  for (const [name, value] of Object.entries(attributes)) {
    reactAttributes[attributesMap.get(name) ?? name] = value;
  }
  if (classNames?.length) {
    reactAttributes.className = classNames.join(" ");
  }
  if (Object.keys(style).length) {
    reactAttributes.style = style;
  }
  return reactAttributes;
}
const ssrAttributes = esmEnv.BROWSER ? () => ({}) : directiveAttributes;
const useDirective = esmEnv.BROWSER ? esmEnv.DEV ? (directive2, args) => {
  const instance = react.useRef(void 0);
  const propsRef = react.useRef(void 0);
  const refCalledOnce = react.useRef(false);
  react.useEffect(() => {
    queueMicrotask(() => {
      refCalledOnce.current = false;
    });
  }, [directive2]);
  const ref = react.useCallback(
    (element) => {
      if (!refCalledOnce.current) {
        instance.current = directive2(element, propsRef.current);
        refCalledOnce.current = true;
      }
      return () => {
        if (!refCalledOnce.current) {
          instance.current?.destroy?.();
          instance.current = void 0;
        }
      };
    },
    [directive2]
  );
  propsRef.current = args;
  instance.current?.update?.(args);
  return { ref };
} : (directive2, args) => {
  const instance = react.useRef(void 0);
  const propsRef = react.useRef(void 0);
  const ref = react.useCallback(
    (element) => {
      instance.current = directive2(element, propsRef.current);
      return () => {
        instance.current?.destroy?.();
        instance.current = void 0;
      };
    },
    [directive2]
  );
  propsRef.current = args;
  instance.current?.update?.(args);
  return { ref };
} : (directive2, args) => ssrAttributes([directive2, args]);
const useDirectives = esmEnv.BROWSER ? (...directives) => useDirective(directive.multiDirective, directives) : directiveAttributes;
exports.directiveAttributes = directiveAttributes;
exports.ssrAttributes = ssrAttributes;
exports.useDirective = useDirective;
exports.useDirectives = useDirectives;
`;export{e as default};
