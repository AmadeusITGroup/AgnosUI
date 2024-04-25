import type {ModalProps as CoreProps, ModalState as CoreState, ModalActions, ModalApi, ModalDirectives} from '@agnos-ui/core/components/modal';
import {createModal as createCoreModal, getModalDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/modal';
import type {ConfigValidator, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '@agnos-ui/core/types';
import {fadeTransition} from '../../services/transitions';
import type {ExtendWidgetAdaptSlotWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import {typeBoolean} from '@agnos-ui/core/utils/writables';

export * from '@agnos-ui/core/components/modal';

export type ModalContext<Data> = WidgetSlotContext<ModalWidget<Data>>;

interface ModalExtraProps<Data> {
	/**
	 * Body of the modal.
	 */
	slotDefault: SlotContent<ModalContext<Data>>;

	/**
	 * Footer of the modal.
	 */
	slotFooter: SlotContent<ModalContext<Data>>;

	/**
	 * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.
	 */
	slotHeader: SlotContent<ModalContext<Data>>;

	/**
	 * Structure of the modal.
	 * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.
	 */
	slotStructure: SlotContent<ModalContext<Data>>;

	/**
	 * Title of the modal.
	 */
	slotTitle: SlotContent<ModalContext<Data>>;
	/**
	 * Option to create a fullscreen modal, according to the bootstrap documentation.
	 */
	fullscreen: boolean;
}

export interface ModalState<Data> extends ExtendWidgetAdaptSlotWidgetProps<CoreState<Data>, ModalExtraProps<Data>, object> {}
export interface ModalProps<Data> extends ExtendWidgetAdaptSlotWidgetProps<CoreProps<Data>, ModalExtraProps<Data>, object> {}

export type ModalWidget<Data> = Widget<ModalProps<Data>, ModalState<Data>, ModalApi<Data>, ModalActions, ModalDirectives>;

const defaultConfigExtraProps: ModalExtraProps<any> = {
	slotDefault: undefined,
	slotFooter: undefined,
	slotHeader: undefined,
	slotStructure: undefined,
	slotTitle: undefined,
	fullscreen: false,
};
const coreOverride: Partial<CoreProps<any>> = {
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
