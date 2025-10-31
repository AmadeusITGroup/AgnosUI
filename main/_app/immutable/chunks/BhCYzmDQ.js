const e=`import { getModalDefaultConfig, createModal, modalOutsideClick, modalCloseButtonClick, modalCloseEscape } from '@agnos-ui/core-bootstrap/components/modal';
/**
 * Retrieve a shallow copy of the default modal config
 * @returns the default modal config
 */
const export_getModalDefaultConfig = getModalDefaultConfig;
export { export_getModalDefaultConfig as getModalDefaultConfig };
/**
 * Creates a new modal widget instance.
 * @param config - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
const export_createModal = createModal;
export { export_createModal as createModal };
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
const export_modalOutsideClick = modalOutsideClick;
export { export_modalOutsideClick as modalOutsideClick };
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
const export_modalCloseButtonClick = modalCloseButtonClick;
export { export_modalCloseButtonClick as modalCloseButtonClick };
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by pressing the Escape key.
 */
const export_modalCloseEscape = modalCloseEscape;
export { export_modalCloseEscape as modalCloseEscape };
`;export{e as default};
