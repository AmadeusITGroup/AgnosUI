const e=`import { mergeDirectives } from "@agnos-ui/core/utils/directive";
import { useRef, useCallback, useMemo } from "react";
function useDirective(directive, args) {
  var _a, _b;
  const instance = useRef();
  const propsRef = useRef();
  const ref = useCallback(
    (element) => {
      var _a2, _b2;
      (_b2 = (_a2 = instance.current) == null ? void 0 : _a2.destroy) == null ? void 0 : _b2.call(_a2);
      instance.current = void 0;
      if (element) {
        instance.current = directive(element, propsRef.current);
      }
    },
    [directive]
  );
  propsRef.current = args;
  (_b = (_a = instance.current) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, args);
  return ref;
}
function useDirectives(directives, args) {
  const mergedDirectives = useMemo(() => mergeDirectives(...directives), directives);
  return useDirective(mergedDirectives, args);
}
export {
  useDirectives as a,
  useDirective as u
};
`;export{e as default};
