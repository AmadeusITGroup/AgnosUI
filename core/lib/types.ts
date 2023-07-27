import type {ReadableSignal, SubscribableStore} from '@amadeus-it-group/tansu';
import type {PropsConfig} from './services';

export interface Widget<
	Props extends object = object,
	State extends object = object,
	Api extends object = object,
	Actions extends object = object,
	Directives extends object = object
> {
	state$: ReadableSignal<State>;
	stores: {[K in keyof State as `${K & string}$`]: ReadableSignal<State[K]>};

	/**
	 * Modify the parameter values, and recalculate the stores accordingly
	 */
	patch(parameters: Partial<Props>): void;
	directives: Directives;
	actions: Actions;
	api: Api;
}

export interface WidgetSlotContext<W extends Widget> {
	state: WidgetState<W>;
	widget: Pick<W, 'actions' | 'api' | 'directives' | 'state$' | 'stores'>;
}

export const toSlotContextWidget = <W extends Widget>(w: W): WidgetSlotContext<W>['widget'] => ({
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
