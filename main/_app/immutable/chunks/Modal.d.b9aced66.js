const t=`import type { ModalApi, ModalProps } from '@agnos-ui/react-headless';
import type { PropsWithChildren, RefAttributes } from 'react';
export declare const Modal: <Data>(props: Partial<ModalProps<Data>> & {
    children?: import("react").ReactNode;
} & RefAttributes<ModalApi<Data>>) => JSX.Element;
`;export{t as default};
