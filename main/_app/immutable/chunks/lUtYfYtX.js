const n=`import { computed, readable } from "@amadeus-it-group/tansu";
import { c as typeBoolean, h as typeFunction, e as typeString, i as typeHTMLElementOrNull } from "./writables-Is1bF1Vt.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { p as promiseFromStore } from "./promise-Y53vc4Ia.js";
import { noop } from "./utils/func.js";
import { r as removeScrollbars, a as revertScrollbars } from "./scrollbars-CcxSrnCx.js";
import { a as bindDirective, r as registrationArray, q as createAttributesDirective, o as mergeDirectives, d as directiveSubscribe, c as bindDirectiveNoArg, b as browserDirective } from "./dom-iY0R3D7u.js";
import { portal } from "./services/portal.js";
import { siblingsInert } from "./services/siblingsInert.js";
import { createWidgetFactory } from "./utils/widget.js";
import { focusElement } from "./services/focusElement.js";
const modalOutsideClick = /* @__PURE__ */ Symbol();
const modalCloseButtonClick = /* @__PURE__ */ Symbol();
const modalCloseEscape = /* @__PURE__ */ Symbol();
const defaultConfig = {
  animated: true,
  ariaCloseButtonLabel: "Close",
  backdrop: true,
  backdropClass: "",
  backdropTransition: noop,
  closeButton: true,
  closeOnOutsideClick: true,
  container: typeof window !== "undefined" ? document.body : null,
  className: "",
  modalTransition: noop,
  onBeforeClose: noop,
  onVisibleChange: noop,
  onHidden: noop,
  onShown: noop,
  visible: false
};
const configValidator = {
  animated: typeBoolean,
  ariaCloseButtonLabel: typeString,
  backdrop: typeBoolean,
  backdropClass: typeString,
  backdropTransition: typeFunction,
  closeButton: typeBoolean,
  closeOnOutsideClick: typeBoolean,
  container: typeHTMLElementOrNull,
  className: typeString,
  modalTransition: typeFunction,
  onBeforeClose: typeFunction,
  onVisibleChange: typeFunction,
  onHidden: typeFunction,
  onShown: typeFunction,
  visible: typeBoolean
};
function getModalDefaultConfig() {
  return { ...defaultConfig };
}
const modals$ = registrationArray();
const hasModals$ = computed(() => modals$().length > 0);
const scrollbarsAction$ = computed(() => {
  if (hasModals$()) {
    removeScrollbars();
  } else {
    revertScrollbars();
  }
});
const modalsAction$ = computed(() => {
  scrollbarsAction$();
});
const createModal = createWidgetFactory("modal", (config$) => {
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
  ] = writablesForProps(defaultConfig, config$, configValidator);
  const modalTransition = createTransition({
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
  const backdropTransition = createTransition({
    props: {
      transition: backdropTransition$,
      visible: requestedVisible$,
      animated: animated$,
      animatedOnInit: animated$
    }
  });
  const transitioning$ = computed(() => modalTransition.stores.transitioning$() || backdrop$() && backdropTransition.stores.transitioning$());
  const hidden$ = computed(() => !transitioning$() && !visible$());
  const backdropHidden$ = computed(() => !backdrop$() || hidden$());
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
  const modalPortalDirective = bindDirective(
    portal,
    computed(() => ({ container: container$() }))
  );
  const backdropPortalDirective = bindDirective(
    portal,
    computed(() => {
      const container = container$();
      const element = container ? modalTransition.stores.element$() : void 0;
      return {
        container,
        insertBefore: element?.parentElement === container ? element : void 0
      };
    })
  );
  const registerModalAction$ = readable(void 0, () => modals$.register(res));
  const action$ = computed(() => {
    if (modalTransition.stores.elementPresent$() && !hidden$()) {
      registerModalAction$();
    }
    modalsAction$();
  });
  const closeButtonDirective = createAttributesDirective(() => ({
    attributes: {
      type: readable("button"),
      "aria-label": ariaCloseButtonLabel$
    },
    events: {
      click: () => close(modalCloseButtonClick)
    }
  }));
  const backdropAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: backdropClass$
    }
  }));
  const modalAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: className$,
      tabIndex: readable("-1")
    },
    events: {
      click: (event) => {
        if (event.currentTarget === event.target && closeOnOutsideClick$()) {
          close(modalOutsideClick);
        }
      },
      keydown: (event) => {
        const { key } = event;
        switch (key) {
          case "Escape":
            close(modalCloseEscape);
            event.stopPropagation();
            break;
        }
      }
    }
  }));
  const res = {
    ...stateStores({
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
      backdropDirective: mergeDirectives(backdropTransition.directives.directive, backdropAttributeDirective),
      modalDirective: mergeDirectives(
        modalTransition.directives.directive,
        bindDirectiveNoArg(siblingsInert),
        directiveSubscribe(action$),
        modalAttributeDirective,
        focusElement
      ),
      closeButtonDirective,
      dialogDirective: bindDirective(
        browserDirective((dialog, visible) => {
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
        await promiseFromStore(hidden$).promise;
        return hideResult;
      },
      patch
    }
  };
  return res;
});
export {
  modalCloseButtonClick as a,
  modalCloseEscape as b,
  createModal as c,
  getModalDefaultConfig as g,
  modalOutsideClick as m
};
`;export{n as default};
