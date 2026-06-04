const e=`import { attributesData, multiDirective } from "@agnos-ui/core/utils/directive";
import { BROWSER, DEV } from "esm-env";
import { useRef, useEffect, useCallback } from "react";
const attributesMap = /* @__PURE__ */ new Map([
  ["tabindex", "tabIndex"],
  ["for", "htmlFor"],
  ["autocomplete", "autoComplete"],
  ["autocapitalize", "autoCapitalize"],
  ["autocorrect", "autoCorrect"]
]);
function directiveAttributes(...directives) {
  const reactAttributes = {};
  const { attributes, style, classNames } = attributesData(...directives);
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
const ssrAttributes = BROWSER ? () => ({}) : directiveAttributes;
const useDirective = BROWSER ? DEV ? (directive, args) => {
  const instance = useRef(void 0);
  const propsRef = useRef(void 0);
  const refCalledOnce = useRef(false);
  useEffect(() => {
    queueMicrotask(() => {
      refCalledOnce.current = false;
    });
  }, [directive]);
  const ref = useCallback(
    (element) => {
      if (!refCalledOnce.current) {
        instance.current = directive(element, propsRef.current);
        refCalledOnce.current = true;
      }
      return () => {
        if (!refCalledOnce.current) {
          instance.current?.destroy?.();
          instance.current = void 0;
        }
      };
    },
    [directive]
  );
  propsRef.current = args;
  instance.current?.update?.(args);
  return { ref };
} : (directive, args) => {
  const instance = useRef(void 0);
  const propsRef = useRef(void 0);
  const ref = useCallback(
    (element) => {
      instance.current = directive(element, propsRef.current);
      return () => {
        instance.current?.destroy?.();
        instance.current = void 0;
      };
    },
    [directive]
  );
  propsRef.current = args;
  instance.current?.update?.(args);
  return { ref };
} : (directive, args) => ssrAttributes([directive, args]);
const useDirectives = BROWSER ? (...directives) => useDirective(multiDirective, directives) : directiveAttributes;
export {
  useDirectives as a,
  directiveAttributes as d,
  ssrAttributes as s,
  useDirective as u
};
`;export{e as default};
