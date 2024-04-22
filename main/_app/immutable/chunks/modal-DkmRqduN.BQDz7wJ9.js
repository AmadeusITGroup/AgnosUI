const n=`import { computed, readable } from "@amadeus-it-group/tansu";
import { c as typeBoolean, e as typeString, f as typeFunction, g as typeHTMLElementOrNull } from "./writables-DoU_XYTX.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { createTransition } from "./services/transitions/baseTransitions.js";
import { d as promiseFromStore } from "./promise-CY2U8bTP.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { r as registrationArray, a as bindDirective, k as mergeDirectives, c as bindDirectiveNoArg, d as directiveSubscribe, n as createAttributesDirective } from "./directive-ClyvktyQ.js";
import { portal } from "./services/portal.js";
import { sliblingsInert } from "./services/siblingsInert.js";
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
let internalRevert = noop;
const removeScrollbars = () => {
  internalRevert();
  internalRevert = internalRemoveScrollbars();
};
const revertScrollbars = () => {
  internalRevert();
  internalRevert = noop;
};
const modalOutsideClick = Symbol();
const modalCloseButtonClick = Symbol();
const defaultConfig = {
  animated: true,
  ariaCloseButtonLabel: "Close",
  backdrop: true,
  backdropClass: "",
  backdropTransition: async () => {
  },
  closeButton: true,
  closeOnOutsideClick: true,
  container: typeof window !== "undefined" ? document.body : null,
  className: "",
  modalTransition: async () => {
  },
  onBeforeClose: noop,
  onVisibleChange: noop,
  onHidden: noop,
  onShown: noop,
  slotDefault: void 0,
  slotFooter: void 0,
  slotHeader: void 0,
  slotStructure: void 0,
  slotTitle: void 0,
  visible: false,
  contentData: void 0
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
        insertBefore: (element == null ? void 0 : element.parentElement) === container ? element : void 0
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
      type: "button",
      "aria-label": ariaCloseButtonLabel$
    },
    events: {
      click: res.actions.closeButtonClick
    }
  }));
  const backdropAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: backdropClass$
    }
  }));
  const modalAttributeDirective = createAttributesDirective(() => ({
    attributes: {
      class: className$
    },
    events: {
      click: res.actions.modalClick
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
      backdropDirective: mergeDirectives(bindDirectiveNoArg(backdropTransition.directives.directive), backdropAttributeDirective),
      modalDirective: mergeDirectives(
        bindDirectiveNoArg(modalTransition.directives.directive),
        sliblingsInert,
        directiveSubscribe(action$),
        modalAttributeDirective
      ),
      closeButtonDirective
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
    },
    actions: {
      modalClick(event) {
        if (event.currentTarget === event.target && closeOnOutsideClick$()) {
          close(modalOutsideClick);
        }
      },
      closeButtonClick(event) {
        close(modalCloseButtonClick);
      }
    }
  };
  return res;
}
export {
  modalCloseButtonClick as a,
  createModal as c,
  getModalDefaultConfig as g,
  modalOutsideClick as m
};
`;export{n as default};
