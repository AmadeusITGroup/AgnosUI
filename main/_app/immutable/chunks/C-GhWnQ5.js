const n=`import { computed, asWritable, readable, writable, untrack } from "@amadeus-it-group/tansu";
import { focusElement } from "./services/focusElement.js";
import { createPointerdownPositionDirective } from "./services/pointerdownPosition.js";
import { portal } from "./services/portal.js";
import { siblingsInert } from "./services/siblingsInert.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { b as bindDirective, i as createBrowserStoreDirective, s as mergeDirectives, g as createAttributesDirective, q as isBrowserHTMLElement, f as conditionalDirective, o as directiveSubscribe } from "./dom-BPD8lUxd.js";
import { noop } from "./utils/func.js";
import { a as revertScrollbars, r as removeScrollbars } from "./scrollbars-CcxSrnCx.js";
import { writablesForProps, bindableProp, stateStores, true$ } from "./utils/stores.js";
import { createWidgetFactory } from "./utils/widget.js";
import { b as typeBoolean, i as typeNumberOrNull, e as typeFunction, f as typeHTMLElementOrNull, j as typeString } from "./writables-DYGjj5T3.js";
import { g as getTextDirection } from "./textDirection-cNgt24LJ.js";
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
  onSizeChange: noop,
  onVisibleChange: noop,
  onMinimizedChange: noop,
  onMaximizedChange: noop,
  onResizingChange: noop,
  resizable: false,
  backdrop: true,
  bodyScroll: false,
  size: null,
  focusOnInit: true
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
  onSizeChange: typeFunction,
  onVisibleChange: typeFunction,
  onMinimizedChange: typeFunction,
  onMaximizedChange: typeFunction,
  onResizingChange: typeFunction,
  resizable: typeBoolean,
  backdrop: typeBoolean,
  bodyScroll: typeBoolean,
  size: typeNumberOrNull,
  focusOnInit: typeBoolean
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
      size$: _dirtySize$,
      animated$,
      ariaDescribedBy$,
      ariaLabelledBy$,
      onHidden$,
      onShown$,
      onSizeChange$,
      onVisibleChange$,
      onMinimizedChange$,
      onMaximizedChange$,
      onResizingChange$,
      focusOnInit$,
      ...stateProps
    },
    patch
  ] = writablesForProps(defaultDrawerConfig, config, configValidator);
  const size$ = bindableProp(_dirtySize$, onSizeChange$, (value) => value ? Math.round(value) : value);
  const isVertical$ = computed(() => {
    const isVertical = ["block-start", "block-end"].some((placement) => className$().includes(placement));
    return isVertical;
  });
  const transition = createTransition({
    props: {
      animated: animated$,
      animatedOnInit: animated$,
      transition: asWritable(computed(() => isVertical$() ? verticalTransition$() : transition$())),
      visible: requestedVisible$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const drawerPortalDirective = bindDirective(
    portal,
    computed(() => ({ container: container$() }))
  );
  const { directive: drawerElementDirective, element$: drawerElement$ } = createBrowserStoreDirective();
  const drawerAttributeDirective = mergeDirectives(
    drawerElementDirective,
    createAttributesDirective(() => ({
      attributes: {
        class: className$,
        role: readable("dialog"),
        "aria-describedby": ariaDescribedBy$,
        "aria-labelledby": ariaLabelledBy$,
        "aria-modal": readable("true"),
        tabIndex: readable("-1")
      },
      styles: {
        position: computed(() => {
          const container = container$();
          return container && isBrowserHTMLElement(container) && container !== document.body ? "relative" : "fixed";
        }),
        outline: readable("none")
      },
      events: {
        keydown: async (e) => {
          if (e.key === "Escape") {
            await transition.api.hide();
          }
        }
      }
    }))
  );
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
      click: async () => await transition.api.hide()
    }
  }));
  const direction$ = computed(() => ["inline-start", "block-start"].some((placement) => className$().includes(placement)) ? 1 : -1);
  const isMinimized$ = writable(void 0);
  const isMaximized$ = writable(void 0);
  function setSize(size) {
    const drawerElement = drawerElement$();
    const isVertical = isVertical$();
    size = Math.round(Math.max(0, size));
    drawerElement.style[isVertical ? "height" : "width"] = \`\${size}px\`;
    const elementSize = Math.round(drawerElement[isVertical ? "offsetHeight" : "offsetWidth"]);
    size$.set(elementSize);
    isMinimized$.set(size != null && (size < elementSize || size === 0));
    isMaximized$.set(!!size && size > elementSize);
    return elementSize;
  }
  const splitterDirective = mergeDirectives(
    createPointerdownPositionDirective((event) => {
      const drawerElement = drawerElement$();
      const isVertical = isVertical$();
      const documentDirection = getTextDirection(drawerElement) === "ltr" ? 1 : -1;
      const directionFactor = isVertical ? 1 : documentDirection;
      const startSize = drawerElement[isVertical ? "offsetHeight" : "offsetWidth"];
      const clientXorY = isVertical ? "clientY" : "clientX";
      const startPos = event[clientXorY];
      const direction = direction$();
      let isResizing = false;
      return {
        onMove(event2) {
          setSize(startSize + directionFactor * direction * (event2[clientXorY] - startPos));
          if (!isResizing) {
            isResizing = true;
            onResizingChange$()(true);
          }
        },
        onEnd() {
          drawerElement.style[isVertical ? "height" : "width"] = "";
          if (isResizing) {
            onResizingChange$()(false);
            isResizing = false;
          }
        }
      };
    }),
    createAttributesDirective(() => ({
      events: {
        keydown: (e) => {
          const { key } = e;
          const size = size$() || drawerElement$()?.[isVertical$() ? "offsetHeight" : "offsetWidth"];
          if (size != null) {
            switch (key) {
              case "ArrowLeft":
              case "ArrowDown":
                onResizingChange$()(true);
                setSize(size - 10);
                onResizingChange$()(false);
                break;
              case "ArrowRight":
              case "ArrowUp":
                onResizingChange$()(true);
                setSize(size + 10);
                onResizingChange$()(false);
                break;
            }
          }
        }
      }
    }))
  );
  const visible$ = transition.stores.visible$;
  const transitioning$ = computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
  const hidden$ = computed(() => !transitioning$() && !visible$());
  const minSizeAction$ = computed(() => {
    const isMinimized = isMinimized$();
    if (isMinimized != null) {
      untrack(() => onMinimizedChange$()(isMinimized));
    }
  });
  const maxSizeAction$ = computed(() => {
    const isMaximized = isMaximized$();
    if (isMaximized != null) {
      untrack(() => onMaximizedChange$()(isMaximized));
    }
  });
  const action$ = computed(() => {
    minSizeAction$();
    maxSizeAction$();
  });
  const widget = {
    ...stateStores({
      ...stateProps,
      backdropClass$,
      className$,
      container$,
      size$,
      visible$,
      backdropHidden$,
      hidden$,
      isVertical$
    }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide
    },
    directives: {
      drawerPortalDirective,
      drawerDirective: mergeDirectives(
        directiveSubscribe(action$),
        drawerAttributeDirective,
        bindDirective(
          siblingsInert,
          computed(() => !bodyScroll$())
        ),
        // This directive must come after the attribute directive, to ensure that all the classes and attributes are applied for the transition
        transition.directives.directive,
        conditionalDirective(focusElement, focusOnInit$)
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
