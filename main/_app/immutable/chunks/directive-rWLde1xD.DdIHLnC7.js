const e=`"use strict";
const directive = require("@agnos-ui/core/utils/directive");
const react = require("react");
function useDirective(directive2, args) {
  var _a, _b;
  const instance = react.useRef();
  const propsRef = react.useRef();
  const ref = react.useCallback(
    (element) => {
      var _a2, _b2;
      (_b2 = (_a2 = instance.current) == null ? void 0 : _a2.destroy) == null ? void 0 : _b2.call(_a2);
      instance.current = void 0;
      if (element) {
        instance.current = directive2(element, propsRef.current);
      }
    },
    [directive2]
  );
  propsRef.current = args;
  (_b = (_a = instance.current) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, args);
  return ref;
}
function useDirectives(directives, args) {
  const mergedDirectives = react.useMemo(() => directive.mergeDirectives(...directives), directives);
  return useDirective(mergedDirectives, args);
}
exports.useDirective = useDirective;
exports.useDirectives = useDirectives;
`;export{e as default};
