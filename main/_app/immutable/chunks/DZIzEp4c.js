const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("@agnos-ui/core/components/accordion");
const alert = require("@agnos-ui/core/components/alert");
const carousel = require("@agnos-ui/core/components/carousel");
const collapse = require("@agnos-ui/core/components/collapse");
const drawer = require("@agnos-ui/core/components/drawer");
const modal = require("@agnos-ui/core/components/modal");
const pagination = require("@agnos-ui/core/components/pagination");
const progressbar = require("@agnos-ui/core/components/progressbar");
const rating = require("@agnos-ui/core/components/rating");
const select = require("@agnos-ui/core/components/select");
const slider = require("@agnos-ui/core/components/slider");
const toast = require("@agnos-ui/core/components/toast");
const tree = require("@agnos-ui/core/components/tree");
const config = require("@agnos-ui/core/config");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const floatingUI = require("@agnos-ui/core/services/floatingUI");
const focusElement = require("@agnos-ui/core/services/focusElement");
const focustrack = require("@agnos-ui/core/services/focustrack");
const hash = require("@agnos-ui/core/services/hash");
const intersection = require("@agnos-ui/core/services/intersection");
const matchMedia = require("@agnos-ui/core/services/matchMedia");
const navManager = require("@agnos-ui/core/services/navManager");
const pointerdownPosition = require("@agnos-ui/core/services/pointerdownPosition");
const portal = require("@agnos-ui/core/services/portal");
const resizeObserver = require("@agnos-ui/core/services/resizeObserver");
const siblingsInert = require("@agnos-ui/core/services/siblingsInert");
const baseTransitions = require("@agnos-ui/core/services/transitions/baseTransitions");
const collapse$1 = require("@agnos-ui/core/services/transitions/collapse");
const cssTransitions = require("@agnos-ui/core/services/transitions/cssTransitions");
const simpleClassTransition = require("@agnos-ui/core/services/transitions/simpleClassTransition");
const types = require("@agnos-ui/core/types");
const directive = require("@agnos-ui/core/utils/directive");
const func = require("@agnos-ui/core/utils/func");
const stores = require("@agnos-ui/core/utils/stores");
const widget = require("@agnos-ui/core/utils/widget");
const writables = require("@agnos-ui/core/utils/writables");
const portal$1 = require("./portal-B0Q5KLrA.cjs");
const slot = require("./slot.cjs");
const toasterProvider = require("./toasterProvider-CYgzar_d.cjs");
const config$1 = require("./config.cjs");
const directive$1 = require("./directive-C1WhTndu.cjs");
const stores$1 = require("./stores-DPOTvwx1.cjs");
const widget$1 = require("./widget-ClcZWw9S.cjs");
exports.Portal = portal$1.Portal;
exports.Slot = slot.Slot;
exports.ToasterProvider = toasterProvider.ToasterProvider;
exports.useCreateToaster = toasterProvider.useCreateToaster;
exports.useToaster = toasterProvider.useToaster;
exports.WidgetsConfigContext = config$1.WidgetsConfigContext;
exports.WidgetsDefaultConfig = config$1.WidgetsDefaultConfig;
exports.useWidget = config$1.useWidget;
exports.useWidgetContext = config$1.useWidgetContext;
exports.widgetsConfigFactory = config$1.widgetsConfigFactory;
exports.directiveAttributes = directive$1.directiveAttributes;
exports.ssrAttributes = directive$1.ssrAttributes;
exports.useDirective = directive$1.useDirective;
exports.useDirectives = directive$1.useDirectives;
exports.useObservable = stores$1.useObservable;
exports.useObservablesProxy = stores$1.useObservablesProxy;
exports.usePropsAsStore = stores$1.usePropsAsStore;
exports.useWidgetWithConfig = widget$1.useWidgetWithConfig;
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => accordion[k]
  });
});
Object.keys(alert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => alert[k]
  });
});
Object.keys(carousel).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => carousel[k]
  });
});
Object.keys(collapse).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse[k]
  });
});
Object.keys(drawer).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => drawer[k]
  });
});
Object.keys(modal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => modal[k]
  });
});
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pagination[k]
  });
});
Object.keys(progressbar).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => progressbar[k]
  });
});
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => rating[k]
  });
});
Object.keys(select).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => select[k]
  });
});
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => slider[k]
  });
});
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => toast[k]
  });
});
Object.keys(tree).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => tree[k]
  });
});
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => config[k]
  });
});
Object.keys(extendWidget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => extendWidget[k]
  });
});
Object.keys(floatingUI).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => floatingUI[k]
  });
});
Object.keys(focusElement).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focusElement[k]
  });
});
Object.keys(focustrack).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => focustrack[k]
  });
});
Object.keys(hash).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => hash[k]
  });
});
Object.keys(intersection).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => intersection[k]
  });
});
Object.keys(matchMedia).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => matchMedia[k]
  });
});
Object.keys(navManager).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => navManager[k]
  });
});
Object.keys(pointerdownPosition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => pointerdownPosition[k]
  });
});
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => portal[k]
  });
});
Object.keys(resizeObserver).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => resizeObserver[k]
  });
});
Object.keys(siblingsInert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => siblingsInert[k]
  });
});
Object.keys(baseTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => baseTransitions[k]
  });
});
Object.keys(collapse$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => collapse$1[k]
  });
});
Object.keys(cssTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => cssTransitions[k]
  });
});
Object.keys(simpleClassTransition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => simpleClassTransition[k]
  });
});
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => types[k]
  });
});
Object.keys(directive).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => directive[k]
  });
});
Object.keys(func).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => func[k]
  });
});
Object.keys(stores).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => stores[k]
  });
});
Object.keys(widget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => widget[k]
  });
});
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: () => writables[k]
  });
});
`;export{e as default};
