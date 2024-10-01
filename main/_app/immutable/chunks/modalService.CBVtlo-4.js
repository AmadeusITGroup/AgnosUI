const n=`import { mount, unmount } from 'svelte';
import Modal from './Modal.svelte';
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
    finally {
        unmount(component);
    }
}
`;export{n as default};
