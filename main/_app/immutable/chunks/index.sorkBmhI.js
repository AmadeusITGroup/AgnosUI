const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const components_accordion_index = require("./components/accordion/index.cjs");
const components_alert_index = require("./components/alert/index.cjs");
const components_modal_index = require("./components/modal/index.cjs");
const components_pagination_index = require("./components/pagination/index.cjs");
const components_progressbar_index = require("./components/progressbar/index.cjs");
const components_rating_index = require("./components/rating/index.cjs");
const components_select_index = require("./components/select/index.cjs");
const components_slider_index = require("./components/slider/index.cjs");
const components_toast_index = require("./components/toast/index.cjs");
const accordion = require("@agnos-ui/core/components/accordion");
const alert = require("@agnos-ui/core/components/alert");
const modal = require("@agnos-ui/core/components/modal");
const pagination = require("@agnos-ui/core/components/pagination");
const progressbar = require("@agnos-ui/core/components/progressbar");
const rating = require("@agnos-ui/core/components/rating");
const select = require("@agnos-ui/core/components/select");
const slider = require("@agnos-ui/core/components/slider");
const toast = require("@agnos-ui/core/components/toast");
const siblingsInert = require("@agnos-ui/core/services/siblingsInert");
const resizeObserver = require("@agnos-ui/core/services/resizeObserver");
const portal = require("@agnos-ui/core/services/portal");
const navManager = require("@agnos-ui/core/services/navManager");
const intersection = require("@agnos-ui/core/services/intersection");
const hash = require("@agnos-ui/core/services/hash");
const focustrack = require("@agnos-ui/core/services/focustrack");
const floatingUI = require("@agnos-ui/core/services/floatingUI");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const simpleClassTransition = require("@agnos-ui/core/services/transitions/simpleClassTransition");
const cssTransitions = require("@agnos-ui/core/services/transitions/cssTransitions");
const collapse = require("@agnos-ui/core/services/transitions/collapse");
const bootstrap = require("@agnos-ui/core/services/transitions/bootstrap");
const baseTransitions = require("@agnos-ui/core/services/transitions/baseTransitions");
const types = require("@agnos-ui/core/types");
const config$1 = require("@agnos-ui/core/config");
const config = require("./config.cjs");
const writables = require("@agnos-ui/core/utils/writables");
const stores$1 = require("@agnos-ui/core/utils/stores");
const stores = require("./stores-DLkDMqBY.cjs");
const directive$1 = require("@agnos-ui/core/utils/directive");
const directive = require("./directive-rWLde1xD.cjs");
const widget = require("./widget-CqgI0B-w.cjs");
const portal$1 = require("./portal-B0Q5KLrA.cjs");
const slot = require("./slot.cjs");
exports.createAccordion = components_accordion_index.createAccordion;
exports.createAlert = components_alert_index.createAlert;
exports.createModal = components_modal_index.createModal;
exports.createPagination = components_pagination_index.createPagination;
exports.createProgressbar = components_progressbar_index.createProgressbar;
exports.createRating = components_rating_index.createRating;
exports.createSelect = components_select_index.createSelect;
exports.createSlider = components_slider_index.createSlider;
exports.createToast = components_toast_index.createToast;
exports.WidgetsDefaultConfig = config.WidgetsDefaultConfig;
exports.useWidgetContext = config.useWidgetContext;
exports.useWidgetWithConfig = config.useWidgetWithConfig;
exports.widgetsConfigContext = config.widgetsConfigContext;
exports.widgetsConfigFactory = config.widgetsConfigFactory;
exports.useObservable = stores.useObservable;
exports.usePropsAsStore = stores.usePropsAsStore;
exports.useDirective = directive.useDirective;
exports.useDirectives = directive.useDirectives;
exports.useWidget = widget.useWidget;
exports.Portal = portal$1.Portal;
exports.Slot = slot.Slot;
Object.keys(accordion).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion[k]
    });
});
Object.keys(alert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert[k]
    });
});
Object.keys(modal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => modal[k]
    });
});
Object.keys(pagination).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => pagination[k]
    });
});
Object.keys(progressbar).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => progressbar[k]
    });
});
Object.keys(rating).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating[k]
    });
});
Object.keys(select).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => select[k]
    });
});
Object.keys(slider).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider[k]
    });
});
Object.keys(toast).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast[k]
    });
});
Object.keys(siblingsInert).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => siblingsInert[k]
    });
});
Object.keys(resizeObserver).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => resizeObserver[k]
    });
});
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => portal[k]
    });
});
Object.keys(navManager).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => navManager[k]
    });
});
Object.keys(intersection).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => intersection[k]
    });
});
Object.keys(hash).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => hash[k]
    });
});
Object.keys(focustrack).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => focustrack[k]
    });
});
Object.keys(floatingUI).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => floatingUI[k]
    });
});
Object.keys(extendWidget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => extendWidget[k]
    });
});
Object.keys(simpleClassTransition).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => simpleClassTransition[k]
    });
});
Object.keys(cssTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => cssTransitions[k]
    });
});
Object.keys(collapse).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => collapse[k]
    });
});
Object.keys(bootstrap).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => bootstrap[k]
    });
});
Object.keys(baseTransitions).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => baseTransitions[k]
    });
});
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => types[k]
    });
});
Object.keys(config$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => config$1[k]
    });
});
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => writables[k]
    });
});
Object.keys(stores$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => stores$1[k]
    });
});
Object.keys(directive$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => directive$1[k]
    });
});
`;export{e as default};
