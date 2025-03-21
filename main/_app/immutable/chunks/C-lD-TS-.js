const e=`"use strict";
var __defProp = Object.defineProperty;
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
const tansu = require("@amadeus-it-group/tansu");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_directive = require("./dom-CuBx1JPZ.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-Bn3uhKEG.cjs");
const common = require("./common-BToNPUDq.cjs");
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
function createToast(config) {
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
}
const defaultToasterProps = {
  duration: 5e3,
  position: "bottomRight",
  dismissible: false
};
class Toaster {
  constructor(props) {
    __privateAdd(this, _idCount, 0);
    __privateAdd(this, _toasts, tansu.writable([]));
    /**
     * Get the toasts value from the store
     * @returns The array of toasts.
     */
    __publicField(this, "toasts", tansu.computed(
      () => __privateGet(this, _toasts).call(this).sort((a, b) => b.id - a.id).slice(0, this.options().limit)
    ));
    __publicField(this, "options", tansu.writable(defaultToasterProps));
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
    __publicField(this, "eventsDirective", utils_directive.createAttributesDirective((id) => ({
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
exports.Toaster = Toaster;
exports.createToast = createToast;
exports.defaultToasterProps = defaultToasterProps;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{e as default};
