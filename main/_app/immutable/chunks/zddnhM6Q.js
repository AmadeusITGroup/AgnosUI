const e=`import type { Directive } from '../../generated';
import type { ToastProps, ToasterToast, ToasterProps } from '@agnos-ui/core/components/toast';
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export declare class Toaster<Props extends Partial<ToastProps>> {
    #private;
    readonly toasts: {
        current: ToasterToast<Props>[];
    };
    readonly options: {
        current: ToasterProps;
    };
    readonly addToast: (props: Props) => number;
    readonly removeToast: (id: number) => void;
    readonly eventsDirective: Directive<number>;
    readonly closeAll: () => void;
    constructor(options?: ToasterProps);
}
`;export{e as default};
