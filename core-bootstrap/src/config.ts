import type {AccordionProps} from './components/accordion';
import type {AlertProps} from './components/alert';
import type {CollapseProps} from './components/collapse';
import type {ModalProps} from './components/modal';
import type {PaginationProps} from './components/pagination';
import type {ProgressbarProps} from './components/progressbar';
import type {RatingProps} from './components/rating';
import type {SelectProps} from './components/select';
import type {SliderProps} from './components/slider';
import type {ToastProps} from './components/toast';

/**
 * Configuration interface for various Bootstrap widgets.
 */
export interface BootstrapWidgetsConfig {
	/**
	 * the pagination widget config
	 */
	pagination: PaginationProps;
	/**
	 * the rating widget config
	 */
	rating: RatingProps;
	/**
	 * the select widget config
	 */
	select: SelectProps<any>;
	/**
	 * the modal widget config
	 */
	modal: ModalProps<any>;
	/**
	 * the alert widget config
	 */
	alert: AlertProps;
	/**
	 * the accordion widget config
	 */
	accordion: AccordionProps;
	/**
	 * the progress bar widget config
	 */
	progressbar: ProgressbarProps;
	/**
	 * slider widget config
	 */
	slider: SliderProps;
	/**
	 * toast widget config
	 */
	toast: ToastProps;
	/**
	 * collapse widget config
	 */
	collapse: CollapseProps;
}
