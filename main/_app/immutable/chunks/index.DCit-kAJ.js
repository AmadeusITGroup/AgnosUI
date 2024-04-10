const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion = require("./accordion-sUg_IwFV.cjs");
const alert = require("./alert-B1X6MVLS.cjs");
const modal = require("./modal-B2UvmaGg.cjs");
const pagination = require("./pagination-a4GscjDv.cjs");
const progressbar = require("./progressbar-VHQeHHwm.cjs");
const rating = require("./rating-Cv_sh0OO.cjs");
const select = require("./select-Cn034eOE.cjs");
const slider = require("./slider-CO2IxQkG.cjs");
const toast = require("./toast-BwM3saLs.cjs");
const accordion$1 = require("@agnos-ui/react-headless/components/accordion");
const alert$1 = require("@agnos-ui/react-headless/components/alert");
const modal$1 = require("@agnos-ui/react-headless/components/modal");
const pagination$1 = require("@agnos-ui/react-headless/components/pagination");
const progressbar$1 = require("@agnos-ui/style-bootstrap/components/progressbar");
const rating$1 = require("@agnos-ui/react-headless/components/rating");
const select$1 = require("@agnos-ui/react-headless/components/select");
const slider$1 = require("@agnos-ui/react-headless/components/slider");
const toast$1 = require("@agnos-ui/react-headless/components/toast");
const types = require("@agnos-ui/react-headless/types");
const slot = require("@agnos-ui/react-headless/slot");
const config = require("@agnos-ui/react-headless/config");
const generated_config = require("./generated/config.cjs");
const widget = require("@agnos-ui/react-headless/utils/widget");
const stores = require("@agnos-ui/react-headless/utils/stores");
const portal = require("@agnos-ui/react-headless/utils/portal");
const directive = require("@agnos-ui/react-headless/utils/directive");
const writables = require("@agnos-ui/react-headless/utils/writables");
const siblingsInert = require("@agnos-ui/react-headless/services/siblingsInert");
const resizeObserver = require("@agnos-ui/react-headless/services/resizeObserver");
const portal$1 = require("@agnos-ui/react-headless/services/portal");
const navManager = require("@agnos-ui/react-headless/services/navManager");
const intersection = require("@agnos-ui/react-headless/services/intersection");
const hash = require("@agnos-ui/react-headless/services/hash");
const focustrack = require("@agnos-ui/react-headless/services/focustrack");
const floatingUI = require("@agnos-ui/react-headless/services/floatingUI");
const extendWidget = require("@agnos-ui/react-headless/services/extendWidget");
const simpleClassTransition = require("@agnos-ui/react-headless/services/transitions/simpleClassTransition");
const cssTransitions = require("@agnos-ui/react-headless/services/transitions/cssTransitions");
const collapse = require("@agnos-ui/react-headless/services/transitions/collapse");
const bootstrap = require("@agnos-ui/react-headless/services/transitions/bootstrap");
const baseTransitions = require("@agnos-ui/react-headless/services/transitions/baseTransitions");
exports.Accordion = accordion.Accordion;
exports.AccordionItem = accordion.AccordionItem;
exports.Alert = alert.Alert;
exports.Modal = modal.Modal;
exports.openModal = modal.openModal;
exports.DefaultPages = pagination.DefaultPages;
exports.DefaultStructure = pagination.DefaultStructure;
exports.NavButton = pagination.NavButton;
exports.PageItem = pagination.PageItem;
exports.Pagination = pagination.Pagination;
exports.Progressbar = progressbar.Progressbar;
exports.createProgressbar = progressbar.createProgressbar;
exports.Rating = rating.Rating;
exports.Select = select.Select;
exports.DefaultSlotHandle = slider.DefaultSlotHandle;
exports.DefaultSlotStructure = slider.DefaultSlotStructure;
exports.Slider = slider.Slider;
exports.Toast = toast.Toast;
exports.WidgetsDefaultConfig = generated_config.WidgetsDefaultConfig;
exports.useWidgetContext = generated_config.useWidgetContext;
exports.useWidgetWithConfig = generated_config.useWidgetWithConfig;
exports.widgetsConfigContext = generated_config.widgetsConfigContext;
Object.keys(accordion$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => accordion$1[k]
    });
});
Object.keys(alert$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => alert$1[k]
    });
});
Object.keys(modal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => modal$1[k]
    });
});
Object.keys(pagination$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => pagination$1[k]
    });
});
Object.keys(progressbar$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => progressbar$1[k]
    });
});
Object.keys(rating$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => rating$1[k]
    });
});
Object.keys(select$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => select$1[k]
    });
});
Object.keys(slider$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slider$1[k]
    });
});
Object.keys(toast$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => toast$1[k]
    });
});
Object.keys(types).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => types[k]
    });
});
Object.keys(slot).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => slot[k]
    });
});
Object.keys(config).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => config[k]
    });
});
Object.keys(widget).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => widget[k]
    });
});
Object.keys(stores).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => stores[k]
    });
});
Object.keys(portal).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => portal[k]
    });
});
Object.keys(directive).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => directive[k]
    });
});
Object.keys(writables).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => writables[k]
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
Object.keys(portal$1).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
    Object.defineProperty(exports, k, {
      enumerable: true,
      get: () => portal$1[k]
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
`;export{e as default};
