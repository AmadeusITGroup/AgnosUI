const o=`import { type ToastProps } from '@agnos-ui/core/components/toast';
import type { ToasterProps } from '@agnos-ui/core/components/toast';
import type { PropsWithChildren } from 'react';
/**
 * Custom hook to create a toaster.
 * @param options - Optional toaster properties.
 * @returns An object containing toaster methods and properties.
 */
export declare const useCreateToaster: <Props extends Partial<ToastProps>>(options?: ToasterProps) => {
    toasts: import("@agnos-ui/core/components/toast").ToasterToast<Props>[];
    options: ToasterProps;
    addToast: (props: Props) => number;
    removeToast: (id: number) => void;
    eventsDirective: import("core/dist/types").Directive<number>;
    closeAll: () => void;
};
/**
 * ToasterProvider component to provide toaster context to its children.
 * @param props - The properties object.
 * @param [props.options] - Optional toaster properties.
 * @param props.children - The children components.
 * @returns The ToasterProvider component.
 */
export declare const ToasterProvider: <Props extends Partial<ToastProps>>({ options, children }: PropsWithChildren<{
    options?: ToasterProps;
}>) => import("react/jsx-runtime").JSX.Element;
/**
 * Custom hook to use the toaster context.
 * @returns The toaster context.
 */
export declare const useToaster: <Props extends Partial<ToastProps>>() => ReturnType<typeof useCreateToaster<Props>>;
`;export{o as default};
