import type {WidgetPropsSlots} from '@agnos-ui/svelte-headless/types';
import type {ModalProps} from './modal.gen';

export * from './modal.gen';

export interface ModalSlots extends WidgetPropsSlots<ModalProps<any>> {}
