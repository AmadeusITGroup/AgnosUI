const s=`"use strict";
const services_transitions_simpleClassTransition = require("./services/transitions/simpleClassTransition.cjs");
const fadeTransition = services_transitions_simpleClassTransition.createSimpleClassTransition({
  animationPendingClasses: ["fade"],
  animationPendingShowClasses: ["show"],
  showClasses: ["show", "fade"],
  hideClasses: ["d-none", "fade"]
});
exports.fadeTransition = fadeTransition;
`;export{s as default};
