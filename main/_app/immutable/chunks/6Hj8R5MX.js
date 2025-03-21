const t=`import type { ToasterProps, ToastProps } from './toast.gen';
import type { PropsWithChildren } from 'react';
/**
 * Toaster component that displays a list of toast notifications.
 *
 * This component uses the \`useToaster\` hook to manage the state of the toasts.
 * It renders a container with a list of toasts and an optional "Close all" button
 * if the \`closeAll\` option is enabled and there is more than one toast.
 *
 * @returns The rendered Toaster component.
 */
export declare function ToasterContainer(): import("react/jsx-runtime").JSX.Element;
/**
 * ToasterProvider component to provide toaster context to its children.
 * @param props - The properties object.
 * @param [props.options] - Optional toaster properties.
 * @param props.children - The children components.
 * @returns The ToasterProvider component.
 */
export declare const ToasterProvider: ({ options, children }: PropsWithChildren<{
    options?: ToasterProps;
}>) => import("react/jsx-runtime").JSX.Element;
/**
 * Custom hook to use the toaster context.
 * @returns The toaster context.
 */
export declare const useToaster: () => {
    toasts: import("core/dist/components/toast").ToasterToast<Partial<ToastProps>>[];
    options: import("core/dist/components/toast").ToasterProps;
    addToast: (props: Partial<ToastProps>) => number;
    removeToast: (id: number) => void;
    eventsDirective: import("core/dist/types").Directive<number>;
    closeAll: () => void;
};
`;export{t as default};
