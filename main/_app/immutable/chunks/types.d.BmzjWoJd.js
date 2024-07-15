const o=`export * from '@agnos-ui/core/types';
import type { SlotContent as CoreSlotContent } from '@agnos-ui/core/types';
export type SlotContent<Props extends object = object> = CoreSlotContent<Props> | ((props: Props) => React.ReactNode) | React.ComponentType<Props> | React.ReactNode;
`;export{o as default};
