const e=`import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { AlertApi, AlertContext, AlertProps } from './alert.gen';
/**
 * Renders the default slot structure for an alert component.
 *
 * @param slotContext - The context object containing state and API for the alert.
 * @returns A JSX element representing the alert's body and an optional close button.
 */
export declare const AlertDefaultSlotStructure: (slotContext: AlertContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Alert component that uses a forward ref to expose an API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create an alert widget context
 * and the {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} hook to expose the widget's API via the ref.
 *
 * @param props - Partial properties of the AlertProps interface.
 * @param ref - Forwarded reference to the AlertApi.
 *
 * @returns A JSX element that conditionally renders the AlertElement based on the widget's hidden state.
 */
export declare const Alert: ForwardRefExoticComponent<Partial<AlertProps> & RefAttributes<AlertApi>>;
`;export{e as default};
