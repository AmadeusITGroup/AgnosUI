const n=`import Modal from './Modal.svelte';
export const openModal = async (options, { context } = {}) => {
    const target = document.createElement('div');
    const component = new Modal({
        target,
        props: options,
        context,
        // TODO: exclude events? it seems to work like this, but it is probably not the correct way
    });
    try {
        return await component.api.open();
    }
    finally {
        component.$destroy();
    }
};
`;export{n as default};
