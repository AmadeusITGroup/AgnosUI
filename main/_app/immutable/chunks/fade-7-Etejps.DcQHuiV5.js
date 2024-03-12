const s=`import { createSimpleClassTransition } from "./services/transitions/simpleClassTransition.js";
const fadeTransition = createSimpleClassTransition({
  animationPendingClasses: ["fade"],
  animationPendingShowClasses: ["show"],
  showClasses: ["show", "fade"],
  hideClasses: ["d-none", "fade"]
});
export {
  fadeTransition as f
};
`;export{s as default};
