const a=`import type { RefAttributes } from 'react';
import type { ModalApi, ModalProps } from './modal.gen';
export * from './modal.gen';
export declare const Modal: <Data>(props: Partial<ModalProps<Data>> & RefAttributes<ModalApi<Data>>) => JSX.Element;
export declare function openModal<Data>(options: Partial<ModalProps<Data>>): Promise<any>;
`;export{a as default};
