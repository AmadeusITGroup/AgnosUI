const s=`"use strict";
const simpleClassTransition = require("@agnos-ui/core/services/transitions/simpleClassTransition");
const fadeTransition = simpleClassTransition.createSimpleClassTransition({
  animationPendingClasses: ["fade"],
  animationPendingShowClasses: ["show"],
  showClasses: ["show", "fade"],
  hideClasses: ["d-none", "fade"]
});
exports.fadeTransition = fadeTransition;
`;export{s as default};
