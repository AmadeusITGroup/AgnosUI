import type {ModalProps as CoreProps, ModalState as CoreState, ModalApi as CoreApi, ModalDirectives} from '@agnos-ui/core/components/modal';
import {createModal as createCoreModal, getModalDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/modal';
import type {ConfigValidator, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '@agnos-ui/core/types';
import {fadeTransition} from '../../services/transitions';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {typeBoolean} from '@agnos-ui/core/utils/writables';
import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';

export * from '@agnos-ui/core/components/modal';

/**
 * Represents the context for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;

interface ModalExtraProps<Data> {
	/**
	 * Data to use in content slots
	 */
	contentData: Data;
	/**
	 * Body of the modal.
	 */
	children: SlotContent<ModalContext<Data>>;

	/**
	 * Footer of the modal.
	 */
	footer: SlotContent<ModalContext<Data>>;

	/**
	 * Header of the modal. The default header includes {@link ModalProps.title|title}.
	 */
	header: SlotContent<ModalContext<Data>>;

	/**
	 * Structure of the modal.
	 * The default structure uses {@link ModalProps.header|header}, {@link ModalProps.children|children} and {@link ModalProps.footer|footer}.
	 */
	structure: SlotContent<ModalContext<Data>>;

	/**
	 * Title of the modal.
	 */
	title: SlotContent<ModalContext<Data>>;
	/**
	 * Option to create a fullscreen modal, according to the bootstrap documentation.
	 *
	 * @defaultValue `false`
	 */
	fullscreen: boolean;
}

/**
 * Represents the state of a modal component.
 *
 * @template Data - The type of the data associated with the modal.
 */
export interface ModalState<Data> extends CoreState, ModalExtraProps<Data> {}
/**
 * Interface representing the properties for a modal component.
 *
 * @template Data - The type of data that the modal will handle.
 */
export interface ModalProps<Data> extends CoreProps, ModalExtraProps<Data> {
	/**
	 * The transition to use for the backdrop behind the modal (if present).
	 *
	 * @defaultValue `fadeTransition`
	 */
	backdropTransition: TransitionFn;

	/**
	 * The transition to use for the modal.
	 *
	 * @defaultValue `fadeTransition`
	 */
	modalTransition: TransitionFn;
}

/**
 * Interface representing the API for a modal component.
 *
 * @template Data - The type of data associated with the modal.
 */
export interface ModalApi<Data> extends Omit<CoreApi, 'patch'> {
	/**
	 * Method to change some modal properties.
	 */
	patch: ModalWidget<Data>['patch'];
}

/**
 * Represents a modal widget with specific data type.
 *
 * @template Data - The type of data that the modal widget will handle.
 */
export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalDirectives>;

const defaultConfigExtraProps: ModalExtraProps<any> = {
	contentData: undefined,
	children: undefined,
	footer: undefined,
	header: undefined,
	structure: undefined,
	title: undefined,
	fullscreen: false,
};
const coreOverride: Partial<CoreProps> = {
	backdropTransition: fadeTransition,
	modalTransition: fadeTransition,
};

const configValidator: ConfigValidator<ModalExtraProps<any>> = {
	fullscreen: typeBoolean,
};
/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
export function getModalDefaultConfig(): ModalProps<any> {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride} as any;
}

/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export const createModal: <Data>(config?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = extendWidgetProps(
	createCoreModal,
	defaultConfigExtraProps,
	configValidator,
	coreOverride,
) as any;
