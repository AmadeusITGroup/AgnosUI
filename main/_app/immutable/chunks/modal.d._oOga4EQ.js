const o=`import type { ModalApi, ModalProps } from '@agnos-ui/react-headless/components/modal';
import type { PropsWithChildren, RefAttributes } from 'react';
export * from '@agnos-ui/react-headless/components/modal';
export declare const Modal: <Data>(props: Partial<ModalProps<Data>> & {
    children?: import("react").ReactNode;
} & RefAttributes<ModalApi<Data>>) => JSX.Element;
export declare function openModal<Data>(options: Partial<ModalProps<Data>>): Promise<any>;
`;export{o as default};
