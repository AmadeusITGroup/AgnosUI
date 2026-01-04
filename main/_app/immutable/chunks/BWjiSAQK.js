const t=`import { computed, readable, writable } from "@amadeus-it-group/tansu";
import { extendWidgetProps } from "./services/extendWidget.js";
import { p as createAttributesDirective, d as directiveSubscribe } from "./dom-DD1hAVZy.js";
import { true$ } from "./utils/stores.js";
import { b as typeNumberInRangeFactory, c as typeBoolean } from "./writables-e0tyaQpe.js";
import { g as getCommonAlertDefaultConfig, c as createCommonAlert } from "./common-DK0ADNTX.js";
import { createWidgetFactory } from "./utils/widget.js";
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3
};
const toastConfigValidator = {
  autoHide: typeBoolean,
  delay: typeNumberInRangeFactory(0, Infinity, { strict: true })
};
function getToastDefaultConfig() {
  return { ...getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
const createToast = createWidgetFactory("toast", (config) => {
  let _timeout;
  const extendedAlert = extendWidgetProps(
    createCommonAlert,
    toastDefaultConfig,
    toastConfigValidator
  )(config);
  const time$ = computed(() => {
    clearTimeout(_timeout);
    if (extendedAlert.stores.autoHide$()) {
      _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
    }
  });
  const bodyDirective = createAttributesDirective(() => ({
    attributes: {
      role: readable("alert"),
      "aria-atomic": readable("true"),
      class: computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": true$,
      toast: true$
    }
  }));
  const closeButtonDirective = createAttributesDirective(() => ({
    attributes: {
      type: readable("button"),
      "aria-label": computed(() => extendedAlert.stores.ariaCloseButtonLabel$())
    },
    events: {
      click: extendedAlert.api.close
    }
  }));
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: directiveSubscribe(time$),
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
  #toasts = writable([]);
  /**
   * Get the toasts value from the store
   * @returns The array of toasts.
   */
  toasts = computed(
    () => this.#toasts().sort((a, b) => b.id - a.id).slice(0, this.options().limit)
  );
  options = writable(defaultToasterProps);
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
  eventsDirective = createAttributesDirective((id) => ({
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
export {
  Toaster as T,
  createToast as c,
  defaultToasterProps as d,
  getToastDefaultConfig as g
};
`;export{t as default};
