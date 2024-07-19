import type {WidgetPropsSlots} from '@agnos-ui/svelte-headless/types';
import type {SelectProps} from './select.gen';

export * from './select.gen';

export interface SelectSlots<Item> extends WidgetPropsSlots<SelectProps<Item>> {}
