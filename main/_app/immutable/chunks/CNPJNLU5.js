const t=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_directive = require("./dom-Bf99dk3L.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-DcGT98a7.cjs");
const common = require("./common-D3QcdJ6S.cjs");
const utils_widget = require("./utils/widget.cjs");
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3
};
const toastConfigValidator = {
  autoHide: utils_writables.typeBoolean,
  delay: utils_writables.typeNumberInRangeFactory(0, Infinity, { strict: true })
};
function getToastDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
const createToast = utils_widget.createWidgetFactory("toast", (config) => {
  let _timeout;
  const extendedAlert = services_extendWidget.extendWidgetProps(
    common.createCommonAlert,
    toastDefaultConfig,
    toastConfigValidator
  )(config);
  const time$ = tansu.computed(() => {
    clearTimeout(_timeout);
    if (extendedAlert.stores.autoHide$()) {
      _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
    }
  });
  const bodyDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      role: tansu.readable("alert"),
      "aria-atomic": tansu.readable("true"),
      class: tansu.computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": utils_stores.true$,
      toast: utils_stores.true$
    }
  }));
  const closeButtonDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      type: tansu.readable("button"),
      "aria-label": tansu.computed(() => extendedAlert.stores.ariaCloseButtonLabel$())
    },
    events: {
      click: extendedAlert.api.close
    }
  }));
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: utils_directive.directiveSubscribe(time$),
      bodyDirective,
      closeButtonDirective
    }
  };
});
const defaultToasterProps = {
  duration: 5e3,
  position: "bottomRight",
  dismissible: false
};
class Toaster {
  #idCount = 0;
  #toasts = tansu.writable([]);
  /**
   * Get the toasts value from the store
   * @returns The array of toasts.
   */
  toasts = tansu.computed(
    () => this.#toasts().sort((a, b) => b.id - a.id).slice(0, this.options().limit)
  );
  options = tansu.writable(defaultToasterProps);
  #timers = /* @__PURE__ */ new Map();
  /**
   * Get the timers value from the store
   * @returns The map of timers.
   */
  get timers() {
    return new Map(this.#timers);
  }
  constructor(props) {
    this.options.set({
      ...defaultToasterProps,
      ...props
    });
    this.options.subscribe(() => {
      this.updateToasts();
    });
  }
  /**
   * Add timer for a toast
   * @param id Id of the toast
   * @param duration Duration of the timer, by default taken from options
   */
  addTimer = (id, duration = this.options().duration) => {
    if (duration > 0) {
      this.#timers.set(id, {
        timeout: setTimeout(() => this.removeToast(id), duration),
        started: performance.now(),
        duration
      });
    }
  };
  /**
   * Pause a timer for a toast
   * @param id Id of the toast
   */
  pauseTimer = (id) => {
    if (this.#timers.has(id)) {
      const timer = this.#timers.get(id);
      if (timer && timer.timeout) {
        clearTimeout(timer.timeout);
        timer.timeout = null;
        timer.paused = performance.now();
      }
    }
  };
  /**
   * Resume a timer for a toast
   * @param id Id of the toast
   */
  resumeTimer = (id) => {
    if (this.#timers.has(id)) {
      const timer = this.#timers.get(id);
      if (timer) {
        const paused = timer.paused ?? timer.started;
        const elapsed = paused - timer.started;
        const remaining = (timer.duration ?? 0) - elapsed;
        this.addTimer(id, remaining);
        timer.duration = remaining;
        timer.paused = void 0;
      }
    }
  };
  /**
   * Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
   * used to pause / resume the timer in case of duration and pauseOnHover are specified.
   */
  eventsDirective = utils_directive.createAttributesDirective((id) => ({
    events: {
      pointerenter: () => this.options().pauseOnHover && this.pauseTimer(id()),
      pointerleave: () => this.options().pauseOnHover && this.resumeTimer(id())
    }
  }));
  /**
   * Helper to add a toast to the viewport.
   * @param props Options for the toast.
   * @returns The ID of the added toast.
   */
  addToast = (props) => {
    const autoHide = props.autoHide ?? this.options().duration > 0;
    this.#toasts.update((toasts) => [...toasts, { id: this.#idCount++, props }]);
    if (autoHide) {
      this.addTimer(this.#idCount - 1, props.delay);
    }
    return this.#idCount - 1;
  };
  /**
   * Helper to remove a toast to the viewport.
   * @param id Id of the toast to remove.
   */
  removeToast = (id) => {
    this.#timers.delete(id);
    this.#toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  };
  /** Helper to update toasts when options change */
  updateToasts = () => {
    if (this.options().duration === 0) {
      this.options().dismissible = true;
    }
  };
  /** Helper to close all toasts at once */
  closeAll = () => {
    this.#toasts.set([]);
    this.#timers.clear();
  };
}
exports.Toaster = Toaster;
exports.createToast = createToast;
exports.defaultToasterProps = defaultToasterProps;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{t as default};
