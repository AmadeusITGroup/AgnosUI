import type {AlertContext, AlertProps} from '@agnos-ui/react-headless/components/alert';
import {createAlert} from '@agnos-ui/react-headless/components/alert';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren} from 'react';
import {forwardRef, useImperativeHandle} from 'react';

export * from '@agnos-ui/react-headless/components/alert';

const DefaultSlotStructure = (slotContext: AlertContext) => (
	<>
		<div className="alert-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext}></Slot>
		</div>
		{slotContext.state.dismissible ? (
			<button type="button" className="btn-close" onClick={slotContext.widget.api.close} aria-label={slotContext.state.ariaCloseButtonLabel}></button>
		) : null}
	</>
);

const defaultConfig: Partial<AlertProps> = {
	slotStructure: DefaultSlotStructure,
};

export const Alert = forwardRef(function Alert(props: PropsWithChildren<Partial<AlertProps>>, ref) {
	const [state, widget] = useWidgetWithConfig(createAlert, props, 'alert', {...defaultConfig, slotDefault: props.children});
	const refTransition = useDirective(widget.directives.transitionDirective);
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext = {
		state,
		widget,
	};

	return (
		<>
			{state.hidden ? null : (
				<div
					className={`au-alert alert alert-${state.type} ${state.className} ${state.dismissible ? 'alert-dismissible' : ''}`}
					role="alert"
					ref={refTransition}
				>
					<Slot slotContent={state.slotStructure} props={slotContext}></Slot>
				</div>
			)}
		</>
	);
});
