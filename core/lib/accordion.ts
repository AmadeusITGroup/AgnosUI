import type {ConfigValidator, PropsConfig} from './services';
import {
	bindDirectiveNoArg,
	directiveSubscribe,
	registrationArray,
	stateStores,
	typeBoolean,
	typeFunction,
	typeString,
	writablesForProps,
} from './services';
import type {TransitionFn} from './transitions';
import {createTransition} from './transitions';
import {collapseVerticalTransition} from './transitions/bootstrap';
import type {Directive, SlotContent, Widget, WidgetSlotContext} from './types';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {noop} from './utils';

let itemId = 0;

function getItemId() {
	return `accordion-item-${itemId++}`;
}

function adjustItemsCloseOthers(items: AccordionItemWidget[], openItems: string[], oldOpen?: string): AccordionItemWidget[] {
	if (openItems.length == 2) {
		oldOpen = oldOpen ?? openItems[0];
		const keepOpen = openItems.find((id) => id !== oldOpen)!;
		items.forEach((item) => {
			if (item.state$().itemId !== keepOpen && !item.state$().itemCollapsed) {
				item.patch({itemCollapsed: true});
			}
		});
	} else if (openItems.length > 2) {
		//this case can happen when you have multiple items open and you toggle the close others
		const keepOpen = openItems[0];
		items.forEach((item) => {
			if (item.state$().itemId !== keepOpen && !item.state$().itemCollapsed) {
				item.patch({itemCollapsed: true});
			}
		});
	}
	return items;
}

function getItem(items: AccordionItemWidget[], itemId: string): AccordionItemWidget | undefined {
	return items.find((item) => item.state$().itemId === itemId);
}

export interface AccordionCommonPropsAndState {
	accordionClass: string;
}

export interface AccordionProps extends AccordionCommonPropsAndState {
	closeOthers: boolean;
	onShown: (itemId: string) => void;
	onHidden: (itemId: string) => void;
	//item configuration
	itemId: string;
	itemDestroyOnHide: boolean;
	itemDisabled: boolean;
	itemCollapsed: boolean;
	itemAnimation: boolean;
	itemTransition: TransitionFn;
	onItemShown: () => void;
	onItemHidden: () => void;
	onItemCollapsedChange: (collapsed: boolean) => void;
	slotItemStructure: SlotContent<AccordionItemContext>;
	slotItemBody: SlotContent<AccordionItemContext>;
	slotItemHeader: SlotContent<AccordionItemContext>;
	itemClass: string;
	itemHeaderClass: string;
	itemButtonClass: string;
	itemCollapseClass: string;
	itemBodyClass: string;
}

export interface AccordionState extends AccordionCommonPropsAndState {
	itemsWidget: AccordionItemWidget[];
}

export interface AccordionApi {
	isExpanded(itemId: string): boolean;

	expand(itemId: string): void;

	collapse(itemId: string): void;

	toggle(itemId: string): void;

	expandAll(): void;

	collapseAll(): void;

	registerItem(itemConfig?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
}

export interface AccordionDirectives {
	accordionDirective: Directive;
}

export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;

export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;

export interface AccordionItemActions {
	click(): void;
}

export interface AccordionItemApi {
	collapse(): void;

	expand(): void;

	toggle(): void;

	initDone(): void;
}

export interface AccordionItemDirectives {
	collapseDirective: Directive;
	accordionItemDirective: Directive;
}

export interface AccordionItemCommonPropsAndState {
	itemCollapsed: boolean;
	itemDisabled: boolean;

	itemId: string;
	slotItemHeader: SlotContent<AccordionItemContext>;
	slotItemBody: SlotContent<AccordionItemContext>;
	slotItemStructure: SlotContent<AccordionItemContext>;

	itemClass: string;
	itemHeaderClass: string;
	itemButtonClass: string;
	itemCollapseClass: string;
	itemBodyClass: string;
}

export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
	itemAnimation: boolean;
	itemTransition: TransitionFn;
	itemDestroyOnHide: boolean;

	onItemShown: () => void;
	onItemHidden: () => void;
	onItemCollapsedChange: (collapsed: boolean) => void;
}

export interface AccordionItemState extends AccordionItemCommonPropsAndState {
	shouldBeInDOM: boolean;
}

export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;

const defaultAccordionConfig: AccordionProps = {
	closeOthers: false,
	onShown: noop,
	onHidden: noop,
	accordionClass: '',
	itemId: '',
	itemDestroyOnHide: false,
	itemDisabled: false,
	itemCollapsed: true,
	itemAnimation: true,
	itemTransition: collapseVerticalTransition,
	onItemShown: noop,
	onItemHidden: noop,
	onItemCollapsedChange: noop,
	slotItemStructure: undefined,
	slotItemBody: undefined,
	slotItemHeader: undefined,
	itemClass: '',
	itemHeaderClass: '',
	itemButtonClass: '',
	itemCollapseClass: '',
	itemBodyClass: '',
};

const defaultItemConfig: AccordionItemProps = {
	itemId: defaultAccordionConfig.itemId,
	itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
	itemDisabled: defaultAccordionConfig.itemDisabled,
	itemCollapsed: defaultAccordionConfig.itemCollapsed,
	itemAnimation: defaultAccordionConfig.itemAnimation,
	itemTransition: defaultAccordionConfig.itemTransition,
	onItemShown: defaultAccordionConfig.onItemShown,
	onItemHidden: defaultAccordionConfig.onItemHidden,
	onItemCollapsedChange: defaultAccordionConfig.onItemCollapsedChange,
	slotItemStructure: defaultAccordionConfig.slotItemStructure,
	slotItemBody: defaultAccordionConfig.slotItemBody,
	slotItemHeader: defaultAccordionConfig.slotItemHeader,
	itemClass: defaultAccordionConfig.itemClass,
	itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
	itemButtonClass: defaultAccordionConfig.itemButtonClass,
	itemCollapseClass: defaultAccordionConfig.itemCollapseClass,
	itemBodyClass: defaultAccordionConfig.itemBodyClass,
};

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export function getAccordionDefaultConfig(): AccordionProps {
	return {...defaultAccordionConfig};
}

const configAccordionValidator: ConfigValidator<AccordionProps> = {
	closeOthers: typeBoolean,
	onShown: typeFunction,
	onHidden: typeFunction,
	itemId: typeString,
	itemDestroyOnHide: typeBoolean,
	itemDisabled: typeBoolean,
	itemCollapsed: typeBoolean,
	itemAnimation: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemCollapsedChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemCollapseClass: typeString,
	itemBodyClass: typeString,
};

const configItemValidator: ConfigValidator<AccordionItemProps> = {
	itemId: typeString,
	itemDestroyOnHide: typeBoolean,
	itemDisabled: typeBoolean,
	itemCollapsed: typeBoolean,
	itemAnimation: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemCollapsedChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemCollapseClass: typeString,
	itemBodyClass: typeString,
};

function createAccordionItem(
	accordionOnShown: ReadableSignal<(itemId: string) => void>,
	accordionOnHidden: ReadableSignal<(itemId: string) => void>,
	config?: PropsConfig<AccordionItemProps>
): AccordionItemWidget {
	const [
		{
			itemAnimation$,
			itemTransition$,
			itemDestroyOnHide$,
			onItemShown$,
			onItemHidden$,
			onItemCollapsedChange$,
			itemCollapsed$,
			itemId$,
			itemDisabled$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultItemConfig, config, configItemValidator);
	if (!itemId$() || itemId$() === '') {
		itemId$.set(getItemId());
	}
	const initDone$ = writable(false);
	const shouldBeInDOM$ = computed(() => {
		return itemDestroyOnHide$() === false || !itemTransition.state$().hidden;
	});
	const itemTransition = createTransition({
		transition: itemTransition$,
		visible: computed(() => {
			const collapsed = itemCollapsed$();
			onItemCollapsedChange$()(collapsed);
			return !collapsed;
		}),
		animation: itemAnimation$,
		animationOnInit: false,
		initDone: initDone$,
		onHidden: () => {
			accordionOnHidden()(itemId$());
			onItemHidden$()();
		},
		onShown: () => {
			accordionOnShown()(itemId$());
			onItemShown$()();
		},
	});

	return {
		...stateStores({
			itemCollapsed$,
			itemId$,
			shouldBeInDOM$,
			itemDisabled$,
			...stateProps,
		}),
		patch,
		actions: {
			click: () => {
				if (!itemDisabled$()) {
					itemCollapsed$.update((c: boolean) => !c);
				}
			},
		},
		api: {
			initDone: () => {
				initDone$.set(true);
			},
			collapse: () => {
				itemCollapsed$.set(true);
			},
			expand: () => {
				itemCollapsed$.set(false);
			},
			toggle: () => {
				itemCollapsed$.update((c: boolean) => !c);
			},
		},
		directives: {collapseDirective: bindDirectiveNoArg(itemTransition.directives.directive), accordionItemDirective: noop},
	};
}

export function createAccordion(config?: PropsConfig<AccordionProps>): AccordionWidget {
	const [
		{
			closeOthers$,
			onShown$,
			onHidden$,
			itemId$,
			itemAnimation$,
			itemClass$,
			itemDisabled$,
			itemCollapsed$,
			itemTransition$,
			itemDestroyOnHide$,
			itemBodyClass$,
			itemButtonClass$,
			itemCollapseClass$,
			itemHeaderClass$,
			onItemCollapsedChange$,
			onItemHidden$,
			onItemShown$,
			slotItemStructure$,
			slotItemBody$,
			slotItemHeader$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
	const itemsWidget$ = registrationArray<AccordionItemWidget>();
	const openItems$ = computed(() => {
		const openItems: string[] = [];
		itemsWidget$().forEach((item) => {
			if (!item.state$().itemCollapsed) {
				openItems.push(item.state$().itemId);
			}
		});
		return openItems;
	});

	const oldOpenItem$ = writable(openItems$()[0]);
	const checkCloseOthersAction$ = computed(() => {
		if (closeOthers$()) {
			adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
			oldOpenItem$.set(openItems$()[0]);
		} else {
			itemsWidget$();
		}
	});

	const action$ = computed(() => {
		checkCloseOthersAction$();
	});
	return {
		...stateStores({itemsWidget$, ...stateProps}),
		patch,
		actions: {},
		api: {
			isExpanded: (id: string) => {
				const item = getItem(itemsWidget$(), id);
				if (item) {
					return !item.state$().itemCollapsed;
				} else {
					return false;
				}
			},
			expand: (id: string) => {
				getItem(itemsWidget$(), id)?.api.expand();
			},
			collapse: (id: string) => {
				getItem(itemsWidget$(), id)?.api.collapse();
			},
			toggle: (id: string) => {
				getItem(itemsWidget$(), id)?.api.toggle();
			},
			expandAll: () => {
				itemsWidget$().forEach((i) => i.api.expand());
			},
			collapseAll: () => {
				itemsWidget$().forEach((i) => i.api.collapse());
			},
			registerItem: (itemConfig?: ReadableSignal<Partial<AccordionItemProps>>) => {
				const item = createAccordionItem(
					onShown$,
					onHidden$,
					computed(() => ({
						itemId: itemId$(),
						itemClass: itemClass$(),
						itemAnimation: itemAnimation$(),
						itemDisabled: itemDisabled$(),
						itemCollapsed: itemCollapsed$(),
						itemTransition: itemTransition$(),
						itemDestroyOnHide: itemDestroyOnHide$(),
						itemBodyClass: itemBodyClass$(),
						itemButtonClass: itemButtonClass$(),
						itemCollapseClass: itemCollapseClass$(),
						itemHeaderClass: itemHeaderClass$(),
						onItemCollapsedChange: onItemCollapsedChange$(),
						onItemHidden: onItemHidden$(),
						onItemShown: onItemShown$(),
						slotItemStructure: slotItemStructure$(),
						slotItemBody: slotItemBody$(),
						slotItemHeader: slotItemHeader$(),
						...itemConfig?.(),
					}))
				);
				item.directives.accordionItemDirective = () => ({destroy: itemsWidget$.register(item)});
				return item;
			},
		},
		directives: {accordionDirective: directiveSubscribe(action$)},
	};
}
