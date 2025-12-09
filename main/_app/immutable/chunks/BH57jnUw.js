const n=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_portal = require("./services/portal.cjs");
const services_siblingsInert = require("./services/siblingsInert.cjs");
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const utils_directive = require("./dom-CFojlmcS.cjs");
const utils_func = require("./utils/func.cjs");
const scrollbars = require("./scrollbars-CT87iv_6.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_widget = require("./utils/widget.cjs");
const utils_writables = require("./writables-DcGT98a7.cjs");
const services_focusElement = require("./services/focusElement.cjs");
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
  width: 200,
  height: 200,
  onWidthChange: utils_func.noop,
  onHeightChange: utils_func.noop,
  onVisibleChange: utils_func.noop,
  resizable: false,
  backdrop: true,
  bodyScroll: false
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
  width: utils_writables.typeNumberInRangeFactory(0, Infinity),
  height: utils_writables.typeNumberInRangeFactory(0, Infinity),
  onWidthChange: utils_writables.typeFunction,
  onHeightChange: utils_writables.typeFunction,
  onVisibleChange: utils_writables.typeFunction,
  resizable: utils_writables.typeBoolean,
  backdrop: utils_writables.typeBoolean,
  bodyScroll: utils_writables.typeBoolean
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
  ] = utils_stores.writablesForProps(defaultDrawerConfig, config, configValidator);
  const isVertical = tansu.computed(() => {
    const isVertical2 = ["block-start", "block-end"].some((placement) => className$().includes(placement));
    return isVertical2;
  });
  const transition = services_transitions_baseTransitions.createTransition({
    props: {
      animated: animated$,
      animatedOnInit: animated$,
      transition: tansu.asWritable(tansu.computed(() => isVertical() ? verticalTransition$() : transition$())),
      visible: requestedVisible$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const width$ = utils_stores.bindableProp(_dirtyWidth$, onWidthChange$);
  const height$ = utils_stores.bindableProp(_dirtyHeight$, onHeightChange$);
  const drawerPortalDirective = utils_directive.bindDirective(
    services_portal.portal,
    tansu.computed(() => ({ container: container$() }))
  );
  const drawerAttributeDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      class: className$,
      role: tansu.readable("dialog"),
      "aria-describedby": ariaDescribedBy$,
      "aria-labelledby": ariaLabelledBy$,
      "aria-modal": tansu.readable("true"),
      tabIndex: tansu.readable("-1")
    },
    styles: {
      width: tansu.computed(() => isVertical() ? "100%" : \`\${width$()}px\`),
      height: tansu.computed(() => isVertical() ? \`\${height$()}px\` : "100%"),
      position: tansu.computed(() => container$() !== document.body && container$() !== null ? "relative" : "fixed"),
      outline: tansu.readable("none")
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
  const containerDirective = utils_directive.createAttributesDirective(() => ({
    styles: {
      width: tansu.computed(() => isVertical() ? "100%" : \`\${width$()}px\`),
      height: tansu.computed(() => isVertical() ? \`\${height$()}px\` : "100%")
    }
  }));
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
      click: async () => {
        await transition.api.hide();
      }
    }
  }));
  const direction = tansu.computed(() => ["inline-start", "block-start"].some((placement) => className$().includes(placement)) ? 1 : -1);
  const startDimension = tansu.writable(0);
  const startPos = tansu.writable(0);
  const dimension = tansu.writable(0);
  const splitterDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      draggable: tansu.readable("true")
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
  const transitioning$ = tansu.computed(() => transition.stores.transitioning$() || backdropTransition.stores.transitioning$());
  const hidden$ = tansu.computed(() => !transitioning$() && !visible$());
  const widget = {
    ...utils_stores.stateStores({
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
      drawerDirective: utils_directive.mergeDirectives(
        transition.directives.directive,
        utils_directive.bindDirective(
          services_siblingsInert.siblingsInert,
          tansu.computed(() => !bodyScroll$())
        ),
        drawerAttributeDirective,
        services_focusElement.focusElement
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
