const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const accordion$1 = require("./accordion-BMOaHzWf.cjs");
const alert$1 = require("./alert-C-GktcuR.cjs");
const modal$1 = require("./modal-DFEAGpCe.cjs");
const pageFactory = require("./pageFactory-vEBrUBB-.cjs");
const progressbar$1 = require("./progressbar-FwnctYWo.cjs");
const rating$1 = require("./rating-C5NZjIRx.cjs");
const select$1 = require("./select-AtIM2x7x.cjs");
const slider$1 = require("./slider-CosrWCnn.cjs");
const toast$1 = require("./toast-C4gj0rX-.cjs");
const collapse$2 = require("./collapse-Cs0e7FlH.cjs");
const tree$1 = require("./tree-DuY7bsYo.cjs");
const carousel$1 = require("./carousel-C-vSnTTq.cjs");
const drawer$1 = require("./drawer-BRQiSxJu.cjs");
const collapse$1 = require("./collapse-sUYbZqEx.cjs");
const fade = require("./fade-CJ0jXGio.cjs");
const types = require("./types.cjs");
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
exports.createAccordion = accordion$1.createAccordion;
exports.createAccordionItem = accordion$1.createAccordionItem;
exports.getAccordionDefaultConfig = accordion$1.getAccordionDefaultConfig;
exports.createAlert = alert$1.createAlert;
exports.getAlertDefaultConfig = alert$1.getAlertDefaultConfig;
exports.createModal = modal$1.createModal;
exports.getModalDefaultConfig = modal$1.getModalDefaultConfig;
exports.createPagination = pageFactory.createPagination;
exports.getPaginationDefaultConfig = pageFactory.getPaginationDefaultConfig;
exports.ngBootstrapPagination = pageFactory.ngBootstrapPagination;
exports.createProgressbar = progressbar$1.createProgressbar;
exports.getProgressbarDefaultConfig = progressbar$1.getProgressbarDefaultConfig;
exports.createRating = rating$1.createRating;
exports.getRatingDefaultConfig = rating$1.getRatingDefaultConfig;
exports.createSelect = select$1.createSelect;
exports.getSelectDefaultConfig = select$1.getSelectDefaultConfig;
exports.createSlider = slider$1.createSlider;
exports.getSliderDefaultConfig = slider$1.getSliderDefaultConfig;
exports.createToast = toast$1.createToast;
exports.getToastDefaultConfig = toast$1.getToastDefaultConfig;
exports.toastPositions = toast$1.toastPositions;
exports.createCollapse = collapse$2.createCollapse;
exports.getCollapseDefaultConfig = collapse$2.getCollapseDefaultConfig;
exports.createTree = tree$1.createTree;
exports.getTreeDefaultConfig = tree$1.getTreeDefaultConfig;
exports.createCarousel = carousel$1.createCarousel;
exports.getCarouselDefaultConfig = carousel$1.getCarouselDefaultConfig;
exports.createDrawer = drawer$1.createDrawer;
exports.getDrawerDefaultConfig = drawer$1.getDrawerDefaultConfig;
exports.collapseHorizontalTransition = collapse$1.collapseHorizontalTransition;
exports.collapseVerticalTransition = collapse$1.collapseVerticalTransition;
exports.fadeTransition = fade.fadeTransition;
exports.BS_CONTEXTUAL_CLASSES = types.BS_CONTEXTUAL_CLASSES;
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
`;export{e as default};
