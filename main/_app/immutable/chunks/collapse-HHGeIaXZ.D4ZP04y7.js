const s=`"use strict";
const services_transitions_collapse = require("./services/transitions/collapse.cjs");
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
const collapseVerticalTransition = services_transitions_collapse.createCollapseTransition(verticalConfig);
const collapseHorizontalTransition = services_transitions_collapse.createCollapseTransition(horizontalConfig);
exports.collapseHorizontalTransition = collapseHorizontalTransition;
exports.collapseVerticalTransition = collapseVerticalTransition;
`;export{s as default};
