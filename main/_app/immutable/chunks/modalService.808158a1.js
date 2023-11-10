const o=`import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { Modal } from './Modal';
export async function openModal(options) {
    const root = ReactDOM.createRoot(document.createElement('div'));
    try {
        const api = await new Promise((resolve) => {
            root.render(_jsx(Modal, { ...options, ref: resolve }));
        });
        return await api.open();
    }
    finally {
        root.unmount();
    }
}
`;export{o as default};
