export * from '@agnos-ui/core/types';

import type {SlotContent as CoreSlotContent, WidgetSlotContext as CoreWidgetSlotContext, Widget} from '@agnos-ui/core/types';

export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| ((props: Props) => React.ReactNode)
	| React.ComponentType<Props>
	| React.ReactNode;

export type WidgetSlotContext<W extends Widget> = CoreWidgetSlotContext<W> & Pick<W, 'stores'>;
