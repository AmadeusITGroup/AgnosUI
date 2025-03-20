import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {ToasterProps} from '@agnos-ui/react-headless/components/toast';
import {ToasterProvider as ToasterProviderHeadless, useToaster as useToasterHeadless} from '@agnos-ui/react-headless/components/toast';
import type {ToasterToast, ToastProps} from './toast.gen';
import {Toast} from './toast';

interface ToastToasterProps extends Partial<ToastProps> {
	id: number;
	toaster: ReturnType<typeof useToaster>;
}

function ToastToaster({
	id,
	className,
	visible,
	structure,
	children,
	header,
	dismissible,
	ariaCloseButtonLabel,
	animated,
	animatedOnInit,
	onShown,
	onHidden,
	onVisibleChange,
	transition,
	toaster,
}: ToastToasterProps) {
	return (
		<div {...useDirective(toaster.eventsDirective, id)}>
			<Toast
				animated={animated}
				animatedOnInit={animatedOnInit}
				autoHide={false}
				className={className}
				dismissible={dismissible ?? toaster.options.dismissible}
				ariaCloseButtonLabel={ariaCloseButtonLabel}
				structure={structure}
				header={header}
				onShown={onShown}
				onHidden={() => {
					toaster.removeToast(id);
					if (onHidden) onHidden();
				}}
				onVisibleChange={onVisibleChange}
				visible={visible}
				transition={transition}
			>
				{children}
			</Toast>
		</div>
	);
}
/**
 * Toaster component that displays a list of toast notifications.
 *
 * This component uses the `useToaster` hook to manage the state of the toasts.
 * It renders a container with a list of toasts and an optional "Close all" button
 * if the `closeAll` option is enabled and there is more than one toast.
 *
 * @returns The rendered Toaster component.
 */
export function ToasterContainer() {
	const toaster = useToaster();
	return (
		<div className="au-toaster" aria-live="polite" aria-atomic="true">
			<div className={`au-toaster-container toast-container ${toaster.options.position}`}>
				{toaster.options.closeAll && toaster.toasts.length > 1 && (
					<div className="d-flex position-relative align-items-end pb-2">
						<button className="btn btn-secondary me-0 ms-auto pe-auto" onClick={() => toaster.closeAll()}>
							{toaster.options.closeAllLabel || 'Close all'}
						</button>
					</div>
				)}
				{toaster.toasts.map(({id, props}: ToasterToast<Partial<ToastProps>>) => {
					return <ToastToaster key={id} id={id} {...props} toaster={toaster} />;
				})}
			</div>
		</div>
	);
}

/**
 * ToasterProvider component to provide toaster context to its children.
 * @param props - The properties object.
 * @param [props.options] - Optional toaster properties.
 * @param props.children - The children components.
 * @returns The ToasterProvider component.
 */
export const ToasterProvider = ({options, children}: {options: ToasterProps; children: React.ReactNode}) => {
	return (
		<ToasterProviderHeadless<Partial<ToastProps>> options={options}>
			{children}
			<ToasterContainer />
		</ToasterProviderHeadless>
	);
};

/**
 * Custom hook to use the toaster context.
 * @returns The toaster context.
 */
export const useToaster = () => {
	return useToasterHeadless<Partial<ToastProps>>();
};
