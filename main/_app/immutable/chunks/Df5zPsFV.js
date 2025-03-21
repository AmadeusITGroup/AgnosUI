const t=`"use strict";
const jsxRuntime = require("react/jsx-runtime");
const toast = require("@agnos-ui/core/components/toast");
const react = require("react");
const stores = require("./stores-DD819q-h.cjs");
const useCreateToaster = (options) => {
  const toaster = react.useMemo(() => new toast.Toaster(options), [options]);
  const toasts = stores.useObservable(toaster.toasts);
  const toasterOptions = stores.useObservable(toaster.options);
  const addToast = react.useCallback((props) => toaster.addToast(props), [toaster]);
  const removeToast = toaster.removeToast;
  const eventsDirective = toaster.eventsDirective;
  const closeAll = toaster.closeAll;
  return {
    toasts,
    options: toasterOptions,
    addToast,
    removeToast,
    eventsDirective,
    closeAll
  };
};
const ToasterContext = react.createContext(void 0);
const ToasterProvider = ({ options, children }) => {
  const toaster = useCreateToaster(options);
  return /* @__PURE__ */ jsxRuntime.jsx(ToasterContext.Provider, { value: toaster, children });
};
const useToaster = () => {
  const context = react.useContext(ToasterContext);
  if (!context) {
    throw new Error("useToaster must be used within a ToasterProvider");
  }
  return context;
};
exports.ToasterProvider = ToasterProvider;
exports.useCreateToaster = useCreateToaster;
exports.useToaster = useToaster;
`;export{t as default};
