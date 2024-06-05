export * from '@agnos-ui/core-bootstrap/components/modal';

import type {
	AdaptSlotContentProps,
	AdaptWidgetSlots,
	WidgetPropsSlots,
	PropsConfig,
	WidgetState,
	PropType,
	AdaptPropsSlots,
} from '@agnos-ui/svelte-headless/types';
import {createModal as coreCreateModal} from '@agnos-ui/core-bootstrap/components/modal';
import type {ModalWidget as CoreWidget, ModalContext as CoreContext, ModalProps as CoreProps} from '@agnos-ui/core-bootstrap/components/modal';

// widget
export interface ModalWidget<Data> extends AdaptWidgetSlots<CoreWidget<Data>> {}
export interface ModalProps<Data> extends AdaptPropsSlots<CoreProps<Data>> {}
export interface ModalState<Data> extends WidgetState<ModalWidget<Data>> {}
export interface ModalApi<Data> extends PropType<ModalWidget<Data>, 'api'> {}
// slots
export type ModalSlots<Data> = WidgetPropsSlots<AdaptPropsSlots<ModalProps<Data>>>;
export interface ModalContext<Data> extends AdaptSlotContentProps<CoreContext<Data>> {}
// factory
export const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;
