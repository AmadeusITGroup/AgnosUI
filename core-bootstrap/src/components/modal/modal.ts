import type {ModalProps, ModalWidget} from '@agnos-ui/core/components/modal';
import {createModal as createCoreModal, getModalDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/modal';
import type {PropsConfig} from '@agnos-ui/core/types';
import {fadeTransition} from '../../services/transitions';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';

export * from '@agnos-ui/core/components/modal';

const coreOverride: Partial<ModalProps<any>> = {
	backdropTransition: fadeTransition,
	modalTransition: fadeTransition,
};

/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
export function getModalDefaultConfig(): ModalProps<any> {
	return {...getCoreDefaultConfig(), ...coreOverride} as any;
}

/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = extendWidgetProps(
	createCoreModal,
	{},
	{},
	coreOverride,
) as any;
