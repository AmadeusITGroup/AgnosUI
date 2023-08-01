import Select from './select/Select.svelte';
import Rating from './rating/Rating.svelte';
import Pagination from './pagination/Pagination.svelte';
import PaginationDefaultPages from './pagination/PaginationDefaultPages.svelte';
import Slot from './slot/Slot.svelte';
import Modal from './modal/Modal.svelte';
import ModalDefaultHeader from './modal/ModalDefaultHeader.svelte';
import ModalDefaultStructure from './modal/ModalDefaultStructure.svelte';
import Alert from './alert/Alert.svelte';
import Accordion from './accordion/Accordion.svelte';
import AccordionItem from './accordion/Item.svelte';

export {createWidgetsDefaultConfig} from './utils';
export type {WidgetPropsSlots} from './utils';
export * from './select/select';
export * from './rating/rating';
export * from './pagination/pagination';
export * from './slot/slot';
export * from './modal/modal';
export * from './modal/modalService';
export * from './alert/alert';
export * from './accordion/accordion';

export {Select, Rating, Pagination, PaginationDefaultPages, Slot, Modal, ModalDefaultHeader, ModalDefaultStructure, Alert, Accordion, AccordionItem};
