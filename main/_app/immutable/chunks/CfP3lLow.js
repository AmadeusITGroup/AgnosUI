const t=`import { jsx } from "react/jsx-runtime";
import { Toaster } from "@agnos-ui/core/components/toast";
import { findChangedProperties } from "@agnos-ui/core/utils/stores";
import { useMemo, useRef, useCallback, createContext, useContext } from "react";
import { u as useObservable } from "./stores-BWQ6d_4B.js";
const useCreateToaster = (options) => {
  const toaster = useMemo(() => new Toaster(options), []);
  options = options ?? {};
  const previousOptions = useRef(options);
  useMemo(() => {
    const changedOptions = findChangedProperties(previousOptions.current, options);
    previousOptions.current = options;
    if (changedOptions) {
      toaster.options.update((v) => ({ ...v, ...changedOptions }));
    }
  }, [toaster.options, options]);
  const toasts = useObservable(toaster.toasts);
  const toasterOptions = useObservable(toaster.options);
  const addToast = useCallback((props) => toaster.addToast(props), [toaster]);
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
const ToasterContext = createContext(void 0);
const ToasterProvider = ({ options, children }) => {
  const toaster = useCreateToaster(options);
  return /* @__PURE__ */ jsx(ToasterContext.Provider, { value: toaster, children });
};
const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("useToaster must be used within a ToasterProvider");
  }
  return context;
};
export {
  ToasterProvider as T,
  useToaster as a,
  useCreateToaster as u
};
`;export{t as default};
