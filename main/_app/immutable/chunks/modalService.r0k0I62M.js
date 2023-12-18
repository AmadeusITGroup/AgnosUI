const n=`import Modal from './Modal.svelte';
export async function openModal(options, { context } = {}) {
    const target = document.createElement('div');
    const component = new Modal({
        target,
        props: options,
        context,
    });
    try {
        return await component.api.open();
    }
    finally {
        component.$destroy();
    }
}
`;export{n as default};
