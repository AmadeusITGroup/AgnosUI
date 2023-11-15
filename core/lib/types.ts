import type {ReadableSignal, SubscribableStore} from '@amadeus-it-group/tansu';
import type {PropsConfig} from './services';

export interface Widget<
	Props extends object = object,
	State extends object = object,
	Api extends object = object,
	Actions extends object = object,
	Directives extends object = object,
> {
	/**
	 * the reactive state of the widget, combining all the values served by the stores
	 */
	state$: ReadableSignal<State>;
	/**
	 * the different stores of the widget, all reactive
	 */
	stores: {[K in keyof State as `${K & string}$`]: ReadableSignal<State[K]>};

	/**
	 * Modify the parameter values, and recalculate the stores accordingly
	 */
	patch(parameters: Partial<Props>): void;
	/**
	 * directives to be used on html elements in the template of the widget or in the slots
	 */
	directives: Directives;
	/**
	 * all the handlers that should be connected to user interactions i.e. click, keyboard and touch interactions.
	 * typically, the handlers are event listeners that call api functions to affect the widget state
	 */
	actions: Actions;
	/**
	 * all the api functions to interact with the widget
	 */
	api: Api;
}

export type ContextWidget<W extends Widget> = Pick<W, 'actions' | 'api' | 'directives' | 'state$' | 'stores'>;

export interface WidgetSlotContext<W extends Widget> {
	/**
	 * the state of the widget
	 */
	state: WidgetState<W>;
	/**
	 * the widget
	 */
	widget: ContextWidget<W>;
}

export const toSlotContextWidget = <W extends Widget>(w: W): ContextWidget<W> => ({
	actions: w.actions,
	api: w.api,
	directives: w.directives,
	state$: w.state$,
	stores: w.stores,
});

export type WidgetState<T extends {state$: SubscribableStore<any>}> = T extends {state$: SubscribableStore<infer U extends object>} ? U : never;
export type WidgetProps<T extends {patch: (arg: any) => void}> = T extends {patch: (arg: Partial<infer U extends object>) => void} ? U : never;
export type WidgetFactory<W extends Widget> = (props?: PropsConfig<WidgetProps<W>>) => W;

export type Directive<T = void> = (node: HTMLElement, args: T) => void | {update?: (args: T) => void; destroy?: () => void};

export type SlotContent<Props extends object = object> = undefined | null | string | ((props: Props) => string);
