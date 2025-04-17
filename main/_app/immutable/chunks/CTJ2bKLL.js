const e=`var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _idCount, _toasts, _timers;
import { computed, readable, writable } from "@amadeus-it-group/tansu";
import { extendWidgetProps } from "./services/extendWidget.js";
import { n as createAttributesDirective, d as directiveSubscribe } from "./dom-gfxqXJpK.js";
import { true$ } from "./utils/stores.js";
import { b as typeNumberInRangeFactory, c as typeBoolean } from "./writables-CgpOQ4hA.js";
import { g as getCommonAlertDefaultConfig, c as createCommonAlert } from "./common-BqUjUBPy.js";
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
  constructor(props) {
    __privateAdd(this, _idCount, 0);
    __privateAdd(this, _toasts, writable([]));
    /**
     * Get the toasts value from the store
     * @returns The array of toasts.
     */
    __publicField(this, "toasts", computed(
      () => __privateGet(this, _toasts).call(this).sort((a, b) => b.id - a.id).slice(0, this.options().limit)
    ));
    __publicField(this, "options", writable(defaultToasterProps));
    __privateAdd(this, _timers, /* @__PURE__ */ new Map());
    /**
     * Add timer for a toast
     * @param id Id of the toast
     * @param duration Duration of the timer, by default taken from options
     */
    __publicField(this, "addTimer", (id, duration = this.options().duration) => {
      if (duration > 0) {
        __privateGet(this, _timers).set(id, {
          timeout: setTimeout(() => this.removeToast(id), duration),
          started: performance.now(),
          duration
        });
      }
    });
    /**
     * Pause a timer for a toast
     * @param id Id of the toast
     */
    __publicField(this, "pauseTimer", (id) => {
      if (__privateGet(this, _timers).has(id)) {
        const timer = __privateGet(this, _timers).get(id);
        if (timer && timer.timeout) {
          clearTimeout(timer.timeout);
          timer.timeout = null;
          timer.paused = performance.now();
        }
      }
    });
    /**
     * Resume a timer for a toast
     * @param id Id of the toast
     */
    __publicField(this, "resumeTimer", (id) => {
      if (__privateGet(this, _timers).has(id)) {
        const timer = __privateGet(this, _timers).get(id);
        if (timer) {
          const paused = timer.paused ?? timer.started;
          const elapsed = paused - timer.started;
          const remaining = (timer.duration ?? 0) - elapsed;
          this.addTimer(id, remaining);
          timer.duration = remaining;
          timer.paused = void 0;
        }
      }
    });
    /**
     * Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
     * used to pause / resume the timer in case of duration and pauseOnHover are specified.
     */
    __publicField(this, "eventsDirective", createAttributesDirective((id) => ({
      events: {
        pointerenter: () => this.options().pauseOnHover && this.pauseTimer(id()),
        pointerleave: () => this.options().pauseOnHover && this.resumeTimer(id())
      }
    })));
    /**
     * Helper to add a toast to the viewport.
     * @param props Options for the toast.
     * @returns The ID of the added toast.
     */
    __publicField(this, "addToast", (props) => {
      const autoHide = props.autoHide ?? this.options().duration > 0;
      __privateGet(this, _toasts).update((toasts) => [...toasts, { id: __privateWrapper(this, _idCount)._++, props }]);
      if (autoHide) {
        this.addTimer(__privateGet(this, _idCount) - 1, props.delay);
      }
      return __privateGet(this, _idCount) - 1;
    });
    /**
     * Helper to remove a toast to the viewport.
     * @param id Id of the toast to remove.
     */
    __publicField(this, "removeToast", (id) => {
      __privateGet(this, _timers).delete(id);
      __privateGet(this, _toasts).update((toasts) => toasts.filter((toast) => toast.id !== id));
    });
    /** Helper to update toasts when options change */
    __publicField(this, "updateToasts", () => {
      if (this.options().duration === 0) {
        this.options().dismissible = true;
      }
    });
    /** Helper to close all toasts at once */
    __publicField(this, "closeAll", () => {
      __privateGet(this, _toasts).set([]);
      __privateGet(this, _timers).clear();
    });
    this.options.set({
      ...defaultToasterProps,
      ...props
    });
    this.options.subscribe(() => {
      this.updateToasts();
    });
  }
  /**
   * Get the timers value from the store
   * @returns The map of timers.
   */
  get timers() {
    return new Map(__privateGet(this, _timers));
  }
}
_idCount = new WeakMap();
_toasts = new WeakMap();
_timers = new WeakMap();
export {
  Toaster as T,
  createToast as c,
  defaultToasterProps as d,
  getToastDefaultConfig as g
};
`;export{e as default};
