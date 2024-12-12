const t=`import type { Ref } from 'react';
import type { ModalApi, ModalContext, ModalProps } from './modal.gen';
/**
 * A default header component for the modal that displays a title and an optional close button.
 *
 * @template Data - The type of data used in the modal context.
 * @param slotContext - The context object containing the state and directives for the modal.
 * @returns The JSX element representing the modal header.
 */
export declare const ModalDefaultSlotHeader: <Data>(slotContext: ModalContext<Data>) => import("react/jsx-runtime").JSX.Element;
/**
 * Renders the default slot structure for a modal component.
 *
 * @template Data - The type of the data used in the modal context.
 * @param slotContext - The context containing the state and props for the modal slots.
 * @returns The JSX structure for the modal's default slots.
 */
export declare const ModalDefaultSlotStructure: <Data>(slotContext: ModalContext<Data>) => import("react/jsx-runtime").JSX.Element;
/**
 * A Modal component
 *
 * @template Data - The type of data that the modal will handle.
 *
 * @param props - The properties for the Modal component.
 * @param props.ref - A ref to access the Modal API.
 *
 * @returns The rendered Modal component.
 */
export declare function Modal<Data>(props: Partial<ModalProps<Data>> & {
    ref?: Ref<ModalApi<Data>>;
}): import("react/jsx-runtime").JSX.Element;
/**
 * Opens a modal dialog with the specified options.
 *
 * @template Data - The type of data that the modal will handle.
 * @param options - The options to configure the modal.
 * @returns A promise that resolves when the modal is closed.
 */
export declare function openModal<Data>(options: Partial<ModalProps<Data>>): Promise<any>;
`;export{t as default};
