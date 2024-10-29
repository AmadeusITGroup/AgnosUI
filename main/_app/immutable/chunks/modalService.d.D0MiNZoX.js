const t=`import type { ModalProps } from './modal.gen';
/**
 * Opens a modal dialog with the specified options.
 *
 * @template Data - The type of data that the modal will handle.
 * @param {Partial<ModalProps<Data>>} options - The options to configure the modal.
 * @param {Object} [context] - Optional context to pass to the modal.
 * @param {Map<any, any>} [context.context] - A map of context values to pass to the modal.
 * @returns {Promise<any>} A promise that resolves when the modal is closed.
 *
 * @example
 * \`\`\`typescript
 * const result = await openModal<MyDataType>({
 *   title: 'My Modal Title',
 *   content: 'This is the content of the modal.'
 * });
 * console.log(result);
 * \`\`\`
 */
export declare function openModal<Data>(options: Partial<ModalProps<Data>>, { context }?: {
    context?: Map<any, any>;
}): Promise<any>;
`;export{t as default};
