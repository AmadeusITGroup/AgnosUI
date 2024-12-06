const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const siblingsInert = require("@agnos-ui/core/services/siblingsInert");
const resizeObserver = require("@agnos-ui/core/services/resizeObserver");
const portal = require("@agnos-ui/core/services/portal");
const navManager = require("@agnos-ui/core/services/navManager");
const matchMedia = require("@agnos-ui/core/services/matchMedia");
const intersection = require("@agnos-ui/core/services/intersection");
const hash = require("@agnos-ui/core/services/hash");
const focustrack = require("@agnos-ui/core/services/focustrack");
const floatingUI = require("@agnos-ui/core/services/floatingUI");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const simpleClassTransition = require("@agnos-ui/core/services/transitions/simpleClassTransition");
const cssTransitions = require("@agnos-ui/core/services/transitions/cssTransitions");
const collapse = require("@agnos-ui/core/services/transitions/collapse");
const baseTransitions = require("@agnos-ui/core/services/transitions/baseTransitions");
const writables = require("@agnos-ui/core/utils/writables");
const stores$1 = require("@agnos-ui/core/utils/stores");
const stores = require("./stores-skeXwTXt.cjs");
const directive$1 = require("@agnos-ui/core/utils/directive");
const directive = require("./directive-BePQvMpx.cjs");
const types = require("@agnos-ui/core/types");
const config$1 = require("@agnos-ui/core/config");
const config = require("./config.cjs");
const widget = require("./widget-e5vBb0i4.cjs");
const portal$1 = require("./portal-B0Q5KLrA.cjs");
const slot = require("./slot.cjs");
const tree = require("@agnos-ui/core/components/tree");
const toast = require("@agnos-ui/core/components/toast");
const slider = require("@agnos-ui/core/components/slider");
const select = require("@agnos-ui/core/components/select");
const rating = require("@agnos-ui/core/components/rating");
const progressbar = require("@agnos-ui/core/components/progressbar");
const pagination = require("@agnos-ui/core/components/pagination");
const modal = require("@agnos-ui/core/components/modal");
const alert = require("@agnos-ui/core/components/alert");
const accordion = require("@agnos-ui/core/components/accordion");
exports.useObservable = stores.useObservable;
exports.useObservablesProxy = stores.useObservablesProxy;
exports.usePropsAsStore = stores.usePropsAsStore;
exports.directiveAttributes = directive.directiveAttributes;
exports.ssrAttributes = directive.ssrAttributes;
exports.useDirective = directive.useDirective;
exports.useDirectives = directive.useDirectives;
exports.WidgetsDefaultConfig = config.WidgetsDefaultConfig;
exports.useWidgetContext = config.useWidgetContext;
exports.useWidgetWithConfig = config.useWidgetWithConfig;
exports.widgetsConfigContext = config.widgetsConfigContext;
exports.widgetsConfigFactory = config.widgetsConfigFactory;
exports.useWidget = widget.useWidget;
exports.Portal = portal$1.Portal;
exports.Slot = slot.Slot;
Object.keys(siblingsInert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => siblingsInert[k]
  });
});
Object.keys(resizeObserver).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => resizeObserver[k]
  });
});
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => portal[k]
  });
});
Object.keys(navManager).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => navManager[k]
  });
});
Object.keys(matchMedia).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => matchMedia[k]
  });
});
Object.keys(intersection).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => intersection[k]
  });
});
Object.keys(hash).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => hash[k]
  });
});
Object.keys(focustrack).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focustrack[k]
  });
});
Object.keys(floatingUI).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => floatingUI[k]
  });
});
Object.keys(extendWidget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => extendWidget[k]
  });
});
Object.keys(simpleClassTransition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => simpleClassTransition[k]
  });
});
Object.keys(cssTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => cssTransitions[k]
  });
});
Object.keys(collapse).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse[k]
  });
});
Object.keys(baseTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => baseTransitions[k]
  });
});
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => writables[k]
  });
});
Object.keys(stores$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => stores$1[k]
  });
});
Object.keys(directive$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => directive$1[k]
  });
});
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types[k]
  });
});
Object.keys(config$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => config$1[k]
  });
});
Object.keys(tree).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => tree[k]
  });
});
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => toast[k]
  });
});
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => slider[k]
  });
});
Object.keys(select).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => select[k]
  });
});
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => rating[k]
  });
});
Object.keys(progressbar).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => progressbar[k]
  });
});
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pagination[k]
  });
});
Object.keys(modal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => modal[k]
  });
});
Object.keys(alert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => alert[k]
  });
});
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => accordion[k]
  });
});
`;export{e as default};
