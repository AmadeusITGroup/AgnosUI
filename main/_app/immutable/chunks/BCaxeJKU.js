const s=`import { createSimpleClassTransition } from "@agnos-ui/core/services/transitions/simpleClassTransition";
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
