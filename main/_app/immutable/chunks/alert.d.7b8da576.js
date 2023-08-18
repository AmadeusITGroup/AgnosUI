const t=`import type { createAlert, WidgetProps } from '@agnos-ui/core';
import type { AdaptWidgetSlots } from '../slot/slot';
import type { WidgetPropsSlots } from '../utils';
export type AlertWidget = AdaptWidgetSlots<ReturnType<typeof createAlert>>;
export type AlertProps = WidgetProps<AlertWidget>;
export type AlertSlots = WidgetPropsSlots<AlertProps>;
`;export{t as default};
