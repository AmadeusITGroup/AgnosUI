import type {AlertProps} from '@agnos-ui/core';
import type {AdaptPropsSlots} from '@agnos-ui/react';
import {Alert, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useState} from 'react';

import {Slot} from '@agnos-ui/react';
import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
import biDashCircleFill from 'bootstrap-icons/icons/dash-circle-fill.svg?raw';
import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg?raw';
import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg?raw';
import biLightbulb from 'bootstrap-icons/icons/lightbulb.svg?raw';
import type {AlertContext} from 'react/lib/Alert';

const AlertIcon = ({widget, state}: AlertContext) => {
	const typeIcon: Record<string, string> = {
		success: biCheckCircleFill,
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
		danger: biDashCircleFill,
		light: biLightbulb,
	};

	return (
		<>
			<span className="d-flex align-items-center svg icon-20 me-1" dangerouslySetInnerHTML={{__html: typeIcon[state.type]}}></span>
			<div className="alert-body d-flex w-100">
				<Slot slotContent={state.slotDefault} props={{widget, state}}></Slot>
			</div>
			{state.dismissible ? (
				<button type="button" className="btn-close ms-auto" onClick={widget.api.close} aria-label={state.ariaCloseButtonLabel}></button>
			) : null}
		</>
	);
};

const IconDemo = () => {
	const [alertConfig] = useState<Partial<AdaptPropsSlots<AlertProps>>>({dismissible: false, slotStructure: AlertIcon});

	return (
		<WidgetsDefaultConfig alert={alertConfig}>
			<Alert type="success">Alert success with a customisable icon</Alert>
			<Alert type="warning">Alert warning with a customisable icon</Alert>
			<Alert type="danger">Alert danger with a customisable icon</Alert>
			<Alert type="info">Alert info with a customisable icon</Alert>
			<Alert type="light">Alert light with a customisable icon</Alert>
		</WidgetsDefaultConfig>
	);
};

export default IconDemo;
