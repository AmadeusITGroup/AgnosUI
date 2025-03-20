import {type ToastProps} from '@agnos-ui/core/components/toast';
import type {ToasterProps, ToasterToast} from '@agnos-ui/core/components/toast';
import {defaultToasterProps, Toaster as CoreToaster} from '@agnos-ui/core/components/toast';
import {useObservable} from '../../generated';
import type {ReactNode} from 'react';
import {createContext, useCallback, useContext, useMemo} from 'react';

export {defaultToasterProps, ToasterProps};
export type {ToasterToast};

/**
 * Custom hook to create a toaster.
 * @param options - Optional toaster properties.
 * @returns An object containing toaster methods and properties.
 */
export const useCreateToaster = <Props extends Partial<ToastProps>>(options?: ToasterProps) => {
	const toaster = useMemo(() => new CoreToaster<Props>(options), [options]);
	const toasts = useObservable(toaster.toasts);
	const toasterOptions = useObservable(toaster.options);
	const addToast = useCallback((props: Props) => toaster.addToast(props), [toaster]);
	const removeToast = toaster.removeToast;
	const eventsDirective = toaster.eventsDirective;
	const closeAll = toaster.closeAll;

	return {
		toasts,
		options: toasterOptions,
		addToast,
		removeToast,
		eventsDirective,
		closeAll,
	};
};

const ToasterContext = createContext<ReturnType<typeof useCreateToaster<any>> | undefined>(undefined);
/**
 * ToasterProvider component to provide toaster context to its children.
 * @param props - The properties object.
 * @param [props.options] - Optional toaster properties.
 * @param props.children - The children components.
 * @returns The ToasterProvider component.
 */
export const ToasterProvider = <Props extends Partial<ToastProps>>({options, children}: {options: ToasterProps; children: ReactNode}) => {
	const toaster = useCreateToaster<Props>(options);
	return <ToasterContext.Provider value={toaster}>{children}</ToasterContext.Provider>;
};

/**
 * Custom hook to use the toaster context.
 * @returns The toaster context.
 */
export const useToaster = <Props extends Partial<ToastProps>>(): ReturnType<typeof useCreateToaster<Props>> => {
	const context = useContext(ToasterContext);
	if (!context) {
		throw new Error('useToaster must be used within a ToasterProvider');
	}
	return context;
};
