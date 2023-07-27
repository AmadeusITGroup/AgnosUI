import type {ModalContext as ModalCoreContext, WidgetProps, WidgetState, createModal} from '@agnos-ui/core';
import type {AdaptSlotContentProps, AdaptWidgetSlots} from '../slot/slot';
import type {WidgetPropsSlots} from '../utils';

export type ModalWidget = AdaptWidgetSlots<ReturnType<typeof createModal>>;
export type ModalProps = WidgetProps<ModalWidget>;
export type ModalState = WidgetState<ModalWidget>;
export type ModalContext = AdaptSlotContentProps<ModalCoreContext>;
export type ModalSlots = WidgetPropsSlots<ModalProps>;
