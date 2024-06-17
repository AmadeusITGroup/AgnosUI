const n=`import type { AccordionProps } from './components/accordion';
import type { AlertProps } from './components/alert';
import type { ModalProps } from './components/modal';
import type { PaginationProps } from './components/pagination';
import type { ProgressbarProps } from './components/progressbar';
import type { RatingProps } from './components/rating';
import type { SelectProps } from './components/select';
import type { SliderProps } from './components/slider';
import type { ToastProps } from './components/toast';
export type WidgetsConfig = {
    /**
     * the accordion widget config
     */
    accordion: AccordionProps;
    /**
     * the alert widget config
     */
    alert: AlertProps;
    /**
     * the modal widget config
     */
    modal: ModalProps<any>;
    /**
     * the pagination widget config
     */
    pagination: PaginationProps;
    /**
     * the progressbar widget config
     */
    progressbar: ProgressbarProps;
    /**
     * the rating widget config
     */
    rating: RatingProps;
    /**
     * the select widget config
     */
    select: SelectProps<any>;
    /**
     * the slider widget config
     */
    slider: SliderProps;
    /**
     * the toast widget config
     */
    toast: ToastProps;
};
`;export{n as default};
