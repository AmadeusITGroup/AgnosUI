const t=`import type { RefAttributes } from 'react';
import type { ModalApi, ModalContext, ModalProps } from './modal.gen';
/**
 * A default header component for the modal that displays a title and an optional close button.
 *
 * @template Data - The type of data used in the modal context.
 * @param {ModalContext<Data>} slotContext - The context object containing the state and directives for the modal.
 * @returns {JSX.Element} The JSX element representing the modal header.
 */
export declare const ModalDefaultSlotHeader: <Data>(slotContext: ModalContext<Data>) => import("react/jsx-runtime").JSX.Element;
/**
 * Renders the default slot structure for a modal component.
 *
 * @template Data - The type of the data used in the modal context.
 * @param {ModalContext<Data>} slotContext - The context containing the state and props for the modal slots.
 * @returns {JSX.Element} The JSX structure for the modal's default slots.
 */
export declare const ModalDefaultSlotStructure: <Data>(slotContext: ModalContext<Data>) => import("react/jsx-runtime").JSX.Element;
/**
 * A Modal component that uses a forwardRef to expose its API.
 *
 * @template Data - The type of data that the modal will handle.
 *
 * @param {Partial<ModalProps<Data>>} props - The properties for the Modal component.
 * @param {Ref<ModalApi<Data>>} ref - A ref to access the Modal API.
 *
 * @returns {JSX.Element} The rendered Modal component.
 */
export declare const Modal: <Data>(props: Partial<ModalProps<Data>> & RefAttributes<ModalApi<Data>>) => JSX.Element;
/**
 * Opens a modal dialog with the specified options.
 *
 * @template Data - The type of data that the modal will handle.
 * @param {Partial<ModalProps<Data>>} options - The options to configure the modal.
 * @returns {Promise<any>} A promise that resolves when the modal is closed.
 */
export declare function openModal<Data>(options: Partial<ModalProps<Data>>): Promise<any>;
`;export{t as default};
