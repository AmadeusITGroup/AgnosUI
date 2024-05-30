import type {AlertContext} from '@agnos-ui/react-bootstrap/components/alert';
import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {Slot} from '@agnos-ui/react-bootstrap/slot';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import CheckCircle from 'bootstrap-icons/icons/check-circle-fill.svg?react';
import DashCircle from 'bootstrap-icons/icons/dash-circle-fill.svg?react';
import ExclamationTriangle from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?react';
import InfoCircle from 'bootstrap-icons/icons/info-circle-fill.svg?react';
import LightBulb from 'bootstrap-icons/icons/lightbulb.svg?react';
import type {FunctionComponent, SVGProps} from 'react';

const AlertIcon = ({widget, state}: AlertContext) => {
	const typeIcon: Record<string, FunctionComponent<SVGProps<SVGSVGElement> & {title?: string | undefined}>> = {
		success: CheckCircle,
		info: InfoCircle,
		warning: ExclamationTriangle,
		danger: DashCircle,
		light: LightBulb,
	};

	return (
		<>
			<span className="d-flex me-2">{typeIcon[state.type]({})}</span>
			<div className="alert-body">
				<Slot slotContent={state.children} props={{widget, state}} />
			</div>
			{state.dismissible ? (
				<button type="button" className="btn-close ms-auto" onClick={widget.api.close} aria-label={state.ariaCloseButtonLabel}></button>
			) : null}
		</>
	);
};

const IconDemo = () => (
	<WidgetsDefaultConfig
		alert={{
			dismissible: false,
			className: 'd-flex align-items-center',
			slotStructure: AlertIcon,
		}}
	>
		<Alert type="success">Alert success with a customisable icon</Alert>
		<Alert type="warning">Alert warning with a customisable icon</Alert>
		<Alert type="danger">Alert danger with a customisable icon</Alert>
		<Alert type="info">Alert info with a customisable icon</Alert>
		<Alert type="light">Alert light with a customisable icon</Alert>
	</WidgetsDefaultConfig>
);

export default IconDemo;
