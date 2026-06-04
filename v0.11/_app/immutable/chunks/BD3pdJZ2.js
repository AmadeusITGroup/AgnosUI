const t=`import { mount, unmount } from 'svelte';
import Modal from './Modal.svelte';
/**
 * Opens a modal dialog with the specified options.
 *
 * @template Data - The type of data that the modal will handle.
 * @param options - The options to configure the modal.
 * @param context - Optional context to pass to the modal.
 * @param context.context - A map of context values to pass to the modal.
 * @returns A promise that resolves when the modal is closed.
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
export async function openModal(options, { context } = {}) {
    const target = document.createElement('div');
    const component = mount(Modal, {
        target,
        props: options,
        context,
    });
    try {
        return await component.api.open();
    }
    catch (_error) {
        await unmount(component);
    }
}
`;export{t as default};
