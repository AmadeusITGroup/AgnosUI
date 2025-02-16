const n=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const utils_writables = require("./writables-BPAJvaL_.cjs");
const utils_directive = require("./stores-CuM3O4Ml.cjs");
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const promise = require("./promise-CxCD3NYv.cjs");
const utils_func = require("./utils/func.cjs");
const services_portal = require("./services/portal.cjs");
const services_siblingsInert = require("./services/siblingsInert.cjs");
const internalRemoveScrollbars = () => {
  const scrollbarWidth = Math.abs(window.innerWidth - document.documentElement.clientWidth);
  const body = document.body;
  const bodyStyle = body.style;
  const { overflow, paddingRight } = bodyStyle;
  if (scrollbarWidth > 0) {
    const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
    bodyStyle.paddingRight = \`\${actualPadding + scrollbarWidth}px\`;
  }
  bodyStyle.overflow = "hidden";
  return () => {
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = paddingRight;
    }
    bodyStyle.overflow = overflow;
  };
};
let internalRevert = utils_func.noop;
const removeScrollbars = () => {
  internalRevert();
  internalRevert = internalRemoveScrollbars();
};
const revertScrollbars = () => {
  internalRevert();
  internalRevert = utils_func.noop;
};
const modalOutsideClick = Symbol();
const modalCloseButtonClick = Symbol();
const defaultConfig = {
  animated: true,
  ariaCloseButtonLabel: "Close",
  backdrop: true,
  backdropClass: "",
  backdropTransition: utils_func.noop,
  closeButton: true,
  closeOnOutsideClick: true,
  container: typeof window !== "undefined" ? document.body : null,
  className: "",
  modalTransition: utils_func.noop,
  onBeforeClose: utils_func.noop,
  onVisibleChange: utils_func.noop,
  onHidden: utils_func.noop,
  onShown: utils_func.noop,
  visible: false
};
const configValidator = {
  animated: utils_writables.typeBoolean,
  ariaCloseButtonLabel: utils_writables.typeString,
  backdrop: utils_writables.typeBoolean,
  backdropClass: utils_writables.typeString,
  backdropTransition: utils_writables.typeFunction,
  closeButton: utils_writables.typeBoolean,
  closeOnOutsideClick: utils_writables.typeBoolean,
  container: utils_writables.typeHTMLElementOrNull,
  className: utils_writables.typeString,
  modalTransition: utils_writables.typeFunction,
  onBeforeClose: utils_writables.typeFunction,
  onVisibleChange: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  visible: utils_writables.typeBoolean
};
function getModalDefaultConfig() {
  return { ...defaultConfig };
}
const modals$ = utils_directive.registrationArray();
const hasModals$ = tansu.computed(() => modals$().length > 0);
const scrollbarsAction$ = tansu.computed(() => {
  if (hasModals$()) {
    removeScrollbars();
  } else {
    revertScrollbars();
  }
});
const modalsAction$ = tansu.computed(() => {
  scrollbarsAction$();
});
function createModal(config$) {
  const [
    {
      animated$,
      backdrop$,
      backdropTransition$,
      closeOnOutsideClick$,
      container$,
      modalTransition$,
      onBeforeClose$,
      onVisibleChange$,
      onHidden$,
      onShown$,
      ariaCloseButtonLabel$,
      className$,
      backdropClass$,
      visible$: requestedVisible$,
      ...stateProps
    },
    patch
  ] = utils_directive.writablesForProps(defaultConfig, config$, configValidator);
  const modalTransition = services_transitions_baseTransitions.createTransition({
    props: {
      transition: modalTransition$,
      visible: requestedVisible$,
      animated: animated$,
      animatedOnInit: animated$,
      onVisibleChange: onVisibleChange$,
      // TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
      // (especially in case one of the two transitions takes more time than the other)
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const visible$ = modalTransition.stores.visible$;
  const backdropTransition = services_transitions_baseTransitions.createTransition({
    props: {
      transition: backdropTransition$,
      visible: requestedVisible$,
      animated: animated$,
      animatedOnInit: animated$
    }
  });
  const transitioning$ = tansu.computed(() => modalTransition.stores.transitioning$() || backdrop$() && backdropTransition.stores.transitioning$());
  const hidden$ = tansu.computed(() => !transitioning$() && !visible$());
  const backdropHidden$ = tansu.computed(() => !backdrop$() || hidden$());
  let hideResult;
  const close = (result) => {
    hideResult = result;
    const beforeCloseEvent = {
      get result() {
        return hideResult;
      },
      set result(value) {
        hideResult = value;
      },
      cancel: false
    };
    onBeforeClose$()(beforeCloseEvent);
    if (beforeCloseEvent.cancel) {
      return;
    }
    patch({ visible: false });
  };
  const modalPortalDirective = utils_directive.bindDirective(
    services_portal.portal,
    tansu.computed(() => ({ container: container$() }))
  );
  const backdropPortalDirective = utils_directive.bindDirective(
    services_portal.portal,
    tansu.computed(() => {
      const container = container$();
      const element = container ? modalTransition.stores.element$() : void 0;
      return {
        container,
        insertBefore: (element == null ? void 0 : element.parentElement) === container ? element : void 0
      };
    })
  );
  const registerModalAction$ = tansu.readable(void 0, () => modals$.register(res));
  const action$ = tansu.computed(() => {
    if (modalTransition.stores.elementPresent$() && !hidden$()) {
      registerModalAction$();
    }
    modalsAction$();
  });
  const closeButtonDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      type: "button",
      "aria-label": ariaCloseButtonLabel$
    },
    events: {
      click: () => close(modalCloseButtonClick)
    }
  }));
  const backdropAttributeDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      class: backdropClass$
    }
  }));
  const modalAttributeDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      class: className$
    },
    events: {
      click: (event) => {
        if (event.currentTarget === event.target && closeOnOutsideClick$()) {
          close(modalOutsideClick);
        }
      }
    }
  }));
  const res = {
    ...utils_directive.stateStores({
      backdropHidden$,
      container$,
      hidden$,
      transitioning$,
      visible$,
      modalElement$: modalTransition.stores.element$,
      ariaCloseButtonLabel$,
      className$,
      backdropClass$,
      ...stateProps
    }),
    directives: {
      modalPortalDirective,
      backdropPortalDirective,
      backdropDirective: utils_directive.mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
      modalDirective: utils_directive.mergeDirectives(modalTransition.directives.directive, services_siblingsInert.siblingsInert, utils_directive.directiveSubscribe(action$), modalAttributeDirective),
      closeButtonDirective,
      dialogDirective: utils_directive.bindDirective(
        utils_directive.browserDirective((dialog, visible) => {
          const update = (visible2) => {
            if (visible2) {
              dialog.showModal();
            } else {
              dialog.close();
            }
          };
          update(visible);
          return {
            update
          };
        }),
        visible$
      )
    },
    patch,
    api: {
      close,
      async open() {
        patch({ visible: true });
        await promise.promiseFromStore(hidden$).promise;
        return hideResult;
      },
      patch
    }
  };
  return res;
}
exports.createModal = createModal;
exports.getModalDefaultConfig = getModalDefaultConfig;
exports.modalCloseButtonClick = modalCloseButtonClick;
exports.modalOutsideClick = modalOutsideClick;
`;export{n as default};
