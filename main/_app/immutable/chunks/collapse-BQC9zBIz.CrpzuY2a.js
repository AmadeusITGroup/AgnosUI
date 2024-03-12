const n=`import { createCollapseTransition } from "./services/transitions/collapse.js";
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
const collapseVerticalTransition = createCollapseTransition(verticalConfig);
const collapseHorizontalTransition = createCollapseTransition(horizontalConfig);
export {
  collapseHorizontalTransition as a,
  collapseVerticalTransition as c
};
`;export{n as default};
