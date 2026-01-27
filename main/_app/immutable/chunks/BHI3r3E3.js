const n=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_focusElement = require("./services/focusElement.cjs");
const services_pointerdownPosition = require("./services/pointerdownPosition.cjs");
const services_portal = require("./services/portal.cjs");
const services_siblingsInert = require("./services/siblingsInert.cjs");
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const utils_directive = require("./dom-R8VxJgdK.cjs");
const utils_func = require("./utils/func.cjs");
const scrollbars = require("./scrollbars-CT87iv_6.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_widget = require("./utils/widget.cjs");
const utils_writables = require("./writables-Dt68gADJ.cjs");
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
  backdropTransition: utils_func.noop,
  className: "w-full",
  visible: false,
  container: typeof window !== "undefined" ? document.body : null,
  transition: utils_func.noop,
  verticalTransition: utils_func.noop,
  onHidden: utils_func.noop,
  onShown: utils_func.noop,
  onSizeChange: utils_func.noop,
  onVisibleChange: utils_func.noop,
  onMinimizedChange: utils_func.noop,
  onMaximizedChange: utils_func.noop,
  onResizingChange: utils_func.noop,
  resizable: false,
  backdrop: true,
  bodyScroll: false,
  size: null,
  focusOnInit: true
};
const configValidator = {
  animated: utils_writables.typeBoolean,
  ariaDescribedBy: utils_writables.typeString,
  ariaLabelledBy: utils_writables.typeString,
  backdropClass: utils_writables.typeString,
  backdropTransition: utils_writables.typeFunction,
  className: utils_writables.typeString,
  visible: utils_writables.typeBoolean,
  transition: utils_writables.typeFunction,
  verticalTransition: utils_writables.typeFunction,
  container: utils_writables.typeHTMLElementOrNull,
  onHidden: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  onSizeChange: utils_writables.typeFunction,
  onVisibleChange: utils_writables.typeFunction,
  onMinimizedChange: utils_writables.typeFunction,
  onMaximizedChange: utils_writables.typeFunction,
  onResizingChange: utils_writables.typeFunction,
  resizable: utils_writables.typeBoolean,
  backdrop: utils_writables.typeBoolean,
  bodyScroll: utils_writables.typeBoolean,
  size: utils_writables.typeNumberOrNull,
  focusOnInit: utils_writables.typeBoolean
};
const createDrawer = utils_widget.createWidgetFactory("drawer", (config) => {
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
  ] = utils_stores.writablesForProps(defaultDrawerConfig, config, configValidator);
  const size$ = utils_stores.bindableProp(_dirtySize$, onSizeChange$, (value) => value ? Math.round(value) : value);
  const isVertical$ = tansu.computed(() => {
    const isVertical = ["block-start", "block-end"].some((placement) => className$().includes(placement));
    return isVertical;
  });
  const transition = services_transitions_baseTransitions.createTransition({
    props: {
      animated: animated$,
      animatedOnInit: animated$,
      transition: tansu.asWritable(tansu.computed(() => isVertical$() ? verticalTransition$() : transition$())),
      visible: requestedVisible$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const drawerPortalDirective = utils_directive.bindDirective(
    services_portal.portal,
    tansu.computed(() => ({ container: container$() }))
  );
  const { directive: drawerElementDirective, element$: drawerElement$ } = utils_directive.createBrowserStoreDirective();
  const drawerAttributeDirective = utils_directive.mergeDirectives(
    drawerElementDirective,
    utils_directive.createAttributesDirective(() => ({
      attributes: {
        class: className$,
        role: tansu.readable("dialog"),
        "aria-describedby": ariaDescribedBy$,
        "aria-labelledby": ariaLabelledBy$,
        "aria-modal": tansu.readable("true"),
        tabIndex: tansu.readable("-1")
      },
      styles: {
        position: tansu.computed(() => {
          const container = container$();
          return container && utils_directive.isBrowserHTMLElement(container) && container !== document.body ? "relative" : "fixed";
        }),
        outline: tansu.readable("none")
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
  const backdropTransition = services_transitions_baseTransitions.createTransition({
    props: {
      animated: animated$,
      transition: backdropTransition$
    }
  });
  const backdropPortalDirective = utils_directive.bindDirective(
    services_portal.portal,
    tansu.computed(() => {
      const container = container$();
      const element = container ? transition.stores.element$() : void 0;
      return {
        container,
        insertBefore: element?.parentElement === container ? element : void 0
      };
    })
  );
  const backdropHidden$ = tansu.computed(() => {
    if (!bodyScroll$()) {
      if (hidden$()) {
        scrollbars.revertScrollbars();
      } else {
        scrollbars.removeScrollbars();
      }
    }
    return !backdrop$() || hidden$();
  });
  const backdropAttributeDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      class: backdropClass$,
      "data-agnos-ignore-inert": utils_stores.true$
    },
    events: {
      click: async () => await transition.api.hide()
    }
  }));
  const direction$ = tansu.computed(() => ["inline-start", "block-start"].some((placement) => className$().includes(placement)) ? 1 : -1);
  const isMinimized$ = tansu.writable(void 0);
  const isMaximized$ = tansu.writable(void 0);
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
  const splitterDirective = utils_directive.mergeDirectives(
    services_pointerdownPosition.createPointerdownPositionDirective((event) => {
      const drawerElement = drawerElement$();
      const isVertical = isVertical$();
      const startSize = drawerElement[isVertical ? "offsetHeight" : "offsetWidth"];
      const clientXorY = isVertical ? "clientY" : "clientX";
      const startPos = event[clientXorY];
      const direction = direction$();
      let isResizing = false;
      return {
        onMove(event2) {
          setSize(startSize + direction * (event2[clientXorY] - startPos));
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
    utils_directive.createAttributesDirective(() => ({
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
  const transitioning$ = tansu.computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
  const hidden$ = tansu.computed(() => !transitioning$() && !visible$());
  const minSizeAction$ = tansu.computed(() => {
    const isMinimized = isMinimized$();
    if (isMinimized != null) {
      tansu.untrack(() => onMinimizedChange$()(isMinimized));
    }
  });
  const maxSizeAction$ = tansu.computed(() => {
    const isMaximized = isMaximized$();
    if (isMaximized != null) {
      tansu.untrack(() => onMaximizedChange$()(isMaximized));
    }
  });
  const action$ = tansu.computed(() => {
    minSizeAction$();
    maxSizeAction$();
  });
  const widget = {
    ...utils_stores.stateStores({
      ...stateProps,
      backdropClass$,
      className$,
      container$,
      size$,
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
      drawerPortalDirective,
      drawerDirective: utils_directive.mergeDirectives(
        utils_directive.directiveSubscribe(action$),
        drawerAttributeDirective,
        utils_directive.bindDirective(
          services_siblingsInert.siblingsInert,
          tansu.computed(() => !bodyScroll$())
        ),
        // This directive must come after the attribute directive, to ensure that all the classes and attributes are applied for the transition
        transition.directives.directive,
        utils_directive.conditionalDirective(services_focusElement.focusElement, focusOnInit$)
      ),
      backdropPortalDirective,
      backdropDirective: utils_directive.mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
      splitterDirective
    }
  };
  return widget;
});
exports.createDrawer = createDrawer;
exports.getDrawerDefaultConfig = getDrawerDefaultConfig;
`;export{n as default};
