const t=`import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { ToastApi, ToastContext, ToastProps } from './toast.gen';
/**
 * Renders the default slot structure for a Toast component.
 *
 * @param {ToastContext} slotContext - The context containing the state and properties for the Toast component.
 * @returns {JSX.Element} The JSX element representing the default slot structure of the Toast.
 */
export declare const ToastDefaultSlotStructure: (slotContext: ToastContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Toast component that uses a forward ref to expose the Toast API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create a toast widget
 * with the provided properties and configuration. It also uses {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle}
 * to expose the widget's API through the forwarded ref.
 *
 * @param props - Partial properties of \`ToastProps\` to configure the toast widget.
 * @param ref - Ref to expose the Toast API.
 *
 * @returns A JSX element that conditionally renders the \`ToastElement\` based on the widget's state.
 */
export declare const Toast: ForwardRefExoticComponent<Partial<ToastProps> & RefAttributes<ToastApi>>;
`;export{t as default};
