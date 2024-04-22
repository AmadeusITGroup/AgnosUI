const e=`"use strict";
const directive = require("@agnos-ui/core/utils/directive");
const esmEnv = require("esm-env");
const react = require("react");
const attributesMap = /* @__PURE__ */ new Map([
  ["tabindex", "tabIndex"],
  ["for", "htmlFor"]
]);
const booleanAttributes = /* @__PURE__ */ new Set([
  "inert",
  "allowFullScreen",
  "async",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "itemScope"
]);
function directiveAttributes(...directives) {
  const reactAttributes = {};
  const { attributes, style, classNames } = directive.attributesData(...directives);
  for (const [name, value] of Object.entries(attributes)) {
    reactAttributes[attributesMap.get(name) ?? name] = booleanAttributes.has(name) ? true : value;
  }
  if (classNames == null ? void 0 : classNames.length) {
    reactAttributes.className = classNames.join(" ");
  }
  if (Object.keys(style).length) {
    reactAttributes.style = style;
  }
  return reactAttributes;
}
const ssrAttributes = esmEnv.BROWSER ? () => ({}) : directiveAttributes;
const useDirective = esmEnv.BROWSER ? (directive2, args) => {
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
  return { ref };
} : (directive2, args) => ssrAttributes([directive2, args]);
const useDirectives = esmEnv.BROWSER ? (...directives) => useDirective(directive.multiDirective, directives) : directiveAttributes;
exports.directiveAttributes = directiveAttributes;
exports.ssrAttributes = ssrAttributes;
exports.useDirective = useDirective;
exports.useDirectives = useDirectives;
`;export{e as default};
