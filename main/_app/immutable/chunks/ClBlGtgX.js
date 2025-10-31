const n=`import { computed, asWritable, writable, readable } from "@amadeus-it-group/tansu";
import { portal } from "./services/portal.js";
import { siblingsInert } from "./services/siblingsInert.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { a as bindDirective, n as mergeDirectives, p as createAttributesDirective } from "./dom-Bcg9ORcA.js";
import { noop } from "./utils/func.js";
import { r as removeScrollbars, a as revertScrollbars } from "./scrollbars-CcxSrnCx.js";
import { writablesForProps, bindableProp, stateStores, true$ } from "./utils/stores.js";
import { createWidgetFactory } from "./utils/widget.js";
import { c as typeBoolean, g as typeFunction, b as typeNumberInRangeFactory, h as typeHTMLElementOrNull, e as typeString } from "./writables-e0tyaQpe.js";
import { focusElement } from "./services/focusElement.js";
function getDrawerDefaultConfig() {
  return {
    ...defaultDrawerConfig
  };
}
const defaultDrawerConfig = {
  animated: true,
  ariaDescribedBy: "",
  ariaLabelledBy: "",
  backdropClass: "",
  backdropTransition: noop,
  className: "w-full",
  visible: false,
  container: typeof window !== "undefined" ? document.body : null,
  transition: noop,
  verticalTransition: noop,
  onHidden: noop,
  onShown: noop,
  width: 200,
  height: 200,
  onWidthChange: noop,
  onHeightChange: noop,
  onVisibleChange: noop,
  resizable: false,
  backdrop: true,
  bodyScroll: false
};
const configValidator = {
  animated: typeBoolean,
  ariaDescribedBy: typeString,
  ariaLabelledBy: typeString,
  backdropClass: typeString,
  backdropTransition: typeFunction,
  className: typeString,
  visible: typeBoolean,
  transition: typeFunction,
  verticalTransition: typeFunction,
  container: typeHTMLElementOrNull,
  onHidden: typeFunction,
  onShown: typeFunction,
  width: typeNumberInRangeFactory(0, Infinity),
  height: typeNumberInRangeFactory(0, Infinity),
  onWidthChange: typeFunction,
  onHeightChange: typeFunction,
  onVisibleChange: typeFunction,
  resizable: typeBoolean,
  backdrop: typeBoolean,
  bodyScroll: typeBoolean
};
const createDrawer = createWidgetFactory("drawer", (config) => {
  const [
    {
      backdrop$,
      backdropTransition$,
      backdropClass$,
      bodyScroll$,
      transition$,
      verticalTransition$,
      visible$: requestedVisible$,
      container$,
      className$,
      animated$,
      ariaDescribedBy$,
      ariaLabelledBy$,
      onHidden$,
      onShown$,
      width$: _dirtyWidth$,
      height$: _dirtyHeight$,
      onWidthChange$,
      onHeightChange$,
      onVisibleChange$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultDrawerConfig, config, configValidator);
  const isVertical = computed(() => {
    const isVertical2 = ["block-start", "block-end"].some((placement) => className$().includes(placement));
    return isVertical2;
  });
  const transition = createTransition({
    props: {
      animated: animated$,
      animatedOnInit: animated$,
      transition: asWritable(computed(() => isVertical() ? verticalTransition$() : transition$())),
      visible: requestedVisible$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const width$ = bindableProp(_dirtyWidth$, onWidthChange$);
  const height$ = bindableProp(_dirtyHeight$, onHeightChange$);
  const drawerPortalDirective = bindDirective(
    portal,
    computed(() => ({ container: container$() }))
  );
  const drawerAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: className$,
      role: readable("dialog"),
      "aria-describedby": ariaDescribedBy$,
      "aria-labelledby": ariaLabelledBy$,
      "aria-modal": readable("true"),
      tabIndex: readable("-1")
    },
    styles: {
      width: computed(() => isVertical() ? "100%" : \`\${width$()}px\`),
      height: computed(() => isVertical() ? \`\${height$()}px\` : "100%"),
      position: computed(() => container$() !== document.body && container$() !== null ? "relative" : "fixed"),
      outline: readable("none")
    },
    events: {
      keydown: async (e) => {
        const { key } = e;
        if (key === "Escape") {
          await transition.api.hide();
        }
      }
    }
  }));
  const containerDirective = createAttributesDirective(() => ({
    styles: {
      width: computed(() => isVertical() ? "100%" : \`\${width$()}px\`),
      height: computed(() => isVertical() ? \`\${height$()}px\` : "100%")
    }
  }));
  const backdropTransition = createTransition({
    props: {
      animated: animated$,
      transition: backdropTransition$
    }
  });
  const backdropPortalDirective = bindDirective(
    portal,
    computed(() => {
      const container = container$();
      const element = container ? transition.stores.element$() : void 0;
      return {
        container,
        insertBefore: element?.parentElement === container ? element : void 0
      };
    })
  );
  const backdropHidden$ = computed(() => {
    if (!bodyScroll$()) {
      if (hidden$()) {
        revertScrollbars();
      } else {
        removeScrollbars();
      }
    }
    return !backdrop$() || hidden$();
  });
  const backdropAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: backdropClass$,
      "data-agnos-ignore-inert": true$
    },
    events: {
      click: async () => {
        await transition.api.hide();
      }
    }
  }));
  const direction = computed(() => ["inline-start", "block-start"].some((placement) => className$().includes(placement)) ? 1 : -1);
  const startDimension = writable(0);
  const startPos = writable(0);
  const dimension = writable(0);
  const splitterDirective = createAttributesDirective(() => ({
    attributes: {
      draggable: readable("true")
    },
    events: {
      dragstart: (e) => {
        startPos.set(isVertical() ? e.clientY : e.clientX);
        startDimension.set(isVertical() ? height$() : width$());
        e.dataTransfer?.setDragImage(new Image(), 0, 0);
      },
      dragend: (e) => {
        document.body.style.cursor = "";
        updateDimension(e);
      },
      dragover: (event) => {
        event.preventDefault();
      },
      drag: (e) => {
        updateDimension(e);
      }
    }
  }));
  const updateDimension = (e) => {
    if (!isVertical() && e.clientX > 0) {
      dimension.set(startDimension() + direction() * (e.clientX - startPos()));
      width$.set(dimension());
    } else if (isVertical() && e.clientY > 0) {
      dimension.set(startDimension() + direction() * (e.clientY - startPos()));
      height$.set(dimension());
    }
  };
  const visible$ = transition.stores.visible$;
  const transitioning$ = computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
  const hidden$ = computed(() => !transitioning$() && !visible$());
  const widget = {
    ...stateStores({
      ...stateProps,
      backdropClass$,
      className$,
      container$,
      visible$,
      backdropHidden$,
      hidden$
    }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide
    },
    directives: {
      containerDirective,
      drawerPortalDirective,
      drawerDirective: mergeDirectives(
        transition.directives.directive,
        bindDirective(
          siblingsInert,
          computed(() => !bodyScroll$())
        ),
        drawerAttributeDirective,
        focusElement
      ),
      backdropPortalDirective,
      backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
      splitterDirective
    }
  };
  return widget;
});
export {
  createDrawer as c,
  getDrawerDefaultConfig as g
};
`;export{n as default};
