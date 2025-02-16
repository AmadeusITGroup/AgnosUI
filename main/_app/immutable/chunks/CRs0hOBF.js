const o=`"use strict";
const collapse = require("@agnos-ui/core/services/transitions/collapse");
const verticalConfig = {
  dimension: "height",
  hideClasses: ["collapse"],
  showClasses: ["collapse", "show"],
  animationPendingClasses: ["collapsing"]
};
const horizontalConfig = {
  dimension: "width",
  hideClasses: ["collapse", "collapse-horizontal"],
  showClasses: ["collapse", "collapse-horizontal", "show"],
  animationPendingClasses: ["collapsing", "collapse-horizontal"]
};
const collapseVerticalTransition = collapse.createCollapseTransition(verticalConfig);
const collapseHorizontalTransition = collapse.createCollapseTransition(horizontalConfig);
exports.collapseHorizontalTransition = collapseHorizontalTransition;
exports.collapseVerticalTransition = collapseVerticalTransition;
`;export{o as default};
