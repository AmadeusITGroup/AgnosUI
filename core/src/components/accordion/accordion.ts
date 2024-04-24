import type {ReadableSignals} from '../../utils/stores';
import {stateStores, writablesForProps, normalizeConfigStores, mergeConfigStores} from '../../utils/stores';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import type {ConfigValidator, Directive, PropsConfig, Widget, WidgetFactory} from '../../types';
import {asWritable, computed, readable, writable} from '@amadeus-it-group/tansu';
import {noop} from '../../utils/internal/func';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {typeBoolean, typeFunction, typeString} from '../../utils/writables';
import {bindDirectiveNoArg, createAttributesDirective, directiveSubscribe, mergeDirectives, registrationArray} from '../../utils/directive';
import {generateId} from '../../utils/internal/dom';

function adjustItemsCloseOthers(items: AccordionItemWidget[], openItems: string[], oldOpen?: string): AccordionItemWidget[] {
	let keepOpen: undefined | string;
	if (openItems.length == 2) {
		oldOpen = oldOpen ?? openItems[0];
		keepOpen = openItems.find((id) => id !== oldOpen)!;
	} else if (openItems.length > 2) {
		//this case can happen when you have multiple items open and you toggle the close others
		keepOpen = openItems[0];
	}
	if (keepOpen) {
		items.forEach((item) => {
			if (item.state$().itemId !== keepOpen && item.state$().itemVisible) {
				item.patch({itemVisible: false});
			}
		});
	}
	return items;
}

function getItem(items: AccordionItemWidget[], itemId: string): AccordionItemWidget | undefined {
	return items.find((item) => item.state$().itemId === itemId);
}

export interface AccordionProps extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, only one accordion-item at the time can stay open.
	 */
	closeOthers: boolean;
	/**
	 * An event fired when an item is shown.
	 *
	 * Event payload is the id of the item.
	 */
	onShown: (itemId: string) => void;
	/**
	 * An event fired when an item is hidden.
	 *
	 * Event payload is the id of the item.
	 */
	onHidden: (itemId: string) => void;
	//item configuration
	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemId: string;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemDestroyOnHide: boolean;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemDisabled: boolean;
	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 *
	 * It is a prop of the accordion-item.
	 */
	itemVisible: boolean;
	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemAnimated: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemTransition: TransitionFn;
	/**
	 * An event fired when an item is shown.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemShown: () => void;
	/**
	 * An event fired when an item is hidden.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemHidden: () => void;
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemVisibleChange: (visible: boolean) => void;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemClass: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemHeaderClass: string;
	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemButtonClass: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemBodyContainerClass: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemBodyClass: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemHeadingTag: string;
}

export interface AccordionState extends WidgetsCommonPropsAndState {
	/**
	 * Array containing all the accordion-items contained in the accordion.
	 */
	itemsWidget: AccordionItemWidget[];
}

export interface AccordionApi {
	/**
	 * Given the itemId, will expand the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	expand(itemId: string): void;
	/**
	 * Given the itemId, will collapse the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	collapse(itemId: string): void;
	/**
	 * Given the itemId, will toggle the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	toggle(itemId: string): void;
	/**
	 * It will expand all the items in the accordion.
	 *
	 * If `closeOthers` is `true` it will expand only the last accordion-item.
	 */
	expandAll(): void;
	/**
	 * It will collapse all the accordion-items in the accordion.
	 */
	collapseAll(): void;
	/**
	 * Creates a new accordionItem.
	 */
	registerItem(itemConfig?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
}

export interface AccordionDirectives {
	/**
	 * Directive to put on the accordion DOM element
	 */
	accordionDirective: Directive;
}

export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;

export interface AccordionItemActions {
	/**
	 * Action to be called when the user clicks on the accordion-item button. If the accordion-item is disabled nothing will happen.
	 */
	click(): void;
}

export interface AccordionItemApi {
	/**
	 * It will collapse the accordion-item.
	 */
	collapse(): void;

	/**
	 * It will expand the accordion-item.
	 */
	expand(): void;
	/**
	 * It will toggle the accordion-item.
	 */
	toggle(): void;
	/**
	 * Method to be called after the initialization to allow animations.
	 */
	initDone(): void;
}

export interface AccordionItemDirectives {
	/**
	 * Directive to use in special cases, if the accordion header does not use a button element to control the collapsing.
	 */
	toggleDirective: Directive;

	/**
	 * Directive to put on the button element that will control the collapsing of the accordion-item.
	 */
	buttonDirective: Directive;

	/**
	 * Directive to put on the accordion-item header that will contain the button element.
	 */
	headerDirective: Directive;

	/**
	 * Directive to put on the accordion-item body.
	 */
	bodyDirective: Directive;
	/**
	 * Directive to be put on the accordion-item body container. It will handle the animation.
	 */
	bodyContainerDirective: Directive;
	/**
	 * Directive to be put on the accordion-item. It will handle adding the accordion-item to the accordion.
	 */
	accordionItemDirective: Directive;
}

export interface AccordionItemCommonPropsAndState {
	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	itemVisible: boolean;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	itemDisabled: boolean;
	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	itemId: string;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 */
	itemClass: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	itemHeaderClass: string;
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	itemButtonClass: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	itemBodyContainerClass: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	itemBodyClass: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	itemHeadingTag: string;
}

export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
	/**
	 * If `true`, accordion-item will be animated.
	 */
	itemAnimated: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	itemTransition: TransitionFn;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	itemDestroyOnHide: boolean;
	/**
	 * An event fired when an item is shown.
	 */
	onItemShown: () => void;
	/**
	 * An event fired when an item is hidden.
	 */
	onItemHidden: () => void;
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	onItemVisibleChange: (visible: boolean) => void;
}

export interface AccordionItemState extends AccordionItemCommonPropsAndState {
	/**
	 * If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
	 * value of the `itemVisible` and `itemDestroyOnHide`.
	 */
	shouldBeInDOM: boolean;
}

export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;

const defaultAccordionConfig: AccordionProps = {
	closeOthers: false,
	onShown: noop,
	onHidden: noop,
	className: '',
	itemId: '',
	itemDestroyOnHide: true,
	itemDisabled: false,
	itemVisible: false,
	itemAnimated: true,
	itemTransition: async () => {},
	itemHeadingTag: '',
	onItemShown: noop,
	onItemHidden: noop,
	onItemVisibleChange: noop,
	itemClass: '',
	itemHeaderClass: '',
	itemButtonClass: '',
	itemBodyContainerClass: '',
	itemBodyClass: '',
};

const defaultItemConfig: AccordionItemProps = {
	itemId: defaultAccordionConfig.itemId,
	itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
	itemDisabled: defaultAccordionConfig.itemDisabled,
	itemVisible: defaultAccordionConfig.itemVisible,
	itemAnimated: defaultAccordionConfig.itemAnimated,
	itemTransition: defaultAccordionConfig.itemTransition,
	onItemShown: defaultAccordionConfig.onItemShown,
	onItemHidden: defaultAccordionConfig.onItemHidden,
	onItemVisibleChange: defaultAccordionConfig.onItemVisibleChange,
	itemClass: defaultAccordionConfig.itemClass,
	itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
	itemButtonClass: defaultAccordionConfig.itemButtonClass,
	itemBodyContainerClass: defaultAccordionConfig.itemBodyContainerClass,
	itemBodyClass: defaultAccordionConfig.itemBodyClass,
	itemHeadingTag: defaultAccordionConfig.itemHeadingTag,
};
const coreAccordionItemProps = Object.keys(defaultItemConfig);

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
	itemVisible: typeBoolean,
	itemAnimated: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemVisibleChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemBodyContainerClass: typeString,
	itemBodyClass: typeString,
	itemHeadingTag: typeString,
};

const configItemValidator: ConfigValidator<AccordionItemProps> = {
	itemId: typeString,
	itemDestroyOnHide: typeBoolean,
	itemDisabled: typeBoolean,
	itemVisible: typeBoolean,
	itemAnimated: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemVisibleChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemBodyContainerClass: typeString,
	itemBodyClass: typeString,
	itemHeadingTag: typeString,
};

/**
 * Creates a new AccordionItem widget instance.
 * @param config - config of the accordion item, either as a store or as an object containing values or stores.
 * @returns a new accordion item widget instance
 */
export function createAccordionItem(config?: PropsConfig<AccordionItemProps>): AccordionItemWidget {
	const [
		{
			itemBodyClass$,
			itemButtonClass$,
			itemBodyContainerClass$,
			itemHeaderClass$,
			itemAnimated$,
			itemTransition$,
			itemDestroyOnHide$,
			onItemShown$,
			onItemHidden$,
			onItemVisibleChange$,
			itemVisible$,
			itemId$: _dirtyItemId$,
			itemDisabled$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultItemConfig, config, configItemValidator);

	const initDone$ = writable(false);
	const _autoItemId$ = computed(() => generateId());
	const itemId$ = computed(() => _dirtyItemId$() || _autoItemId$());
	const shouldBeInDOM$ = computed(() => itemDestroyOnHide$() === false || !itemTransition.state$().hidden);
	const itemTransition = createTransition({
		props: {
			transition: itemTransition$,
			visible: itemVisible$,
			onVisibleChange: onItemVisibleChange$,
			animated: itemAnimated$,
			animatedOnInit: false,
			initDone: initDone$,
			onHidden: () => {
				onItemHidden$()();
			},
			onShown: () => {
				onItemShown$()();
			},
		},
	});
	const clickAction = () => {
		if (!itemDisabled$()) {
			itemVisible$.update((c: boolean) => !c);
		}
	};
	const toggleDirective = createAttributesDirective(() => ({
		attributes: {
			id: computed(() => `${itemId$()}-toggle`),
			'aria-expanded': computed(() => `${itemVisible$()}`),
			'aria-disabled': computed(() => `${itemDisabled$()}`),
			'aria-controls': computed(() => `${itemId$()}-body-container`),
			disabled: itemDisabled$,
		},
		classNames: {collapsed: computed(() => !itemVisible$())},
		events: {click: clickAction},
	}));

	return {
		...stateStores({
			itemVisible$,
			itemId$,
			shouldBeInDOM$,
			itemDisabled$,
			itemBodyClass$,
			itemButtonClass$,
			itemBodyContainerClass$,
			itemHeaderClass$,
			...stateProps,
		}),
		patch,
		actions: {
			click: clickAction,
		},
		api: {
			initDone: () => {
				initDone$.set(true);
			},
			collapse: () => {
				itemVisible$.set(false);
			},
			expand: () => {
				itemVisible$.set(true);
			},
			toggle: () => {
				itemVisible$.update((c: boolean) => !c);
			},
		},
		directives: {
			toggleDirective: toggleDirective,
			buttonDirective: mergeDirectives(
				toggleDirective,
				createAttributesDirective(() => ({
					attributes: {
						type: 'button',
						class: itemButtonClass$(),
					},
				})),
			),
			headerDirective: createAttributesDirective(() => ({attributes: {class: itemHeaderClass$()}})),
			bodyDirective: createAttributesDirective(() => ({attributes: {class: itemBodyClass$()}})),
			bodyContainerDirective: mergeDirectives(
				bindDirectiveNoArg(itemTransition.directives.directive),
				createAttributesDirective(() => ({
					attributes: {
						id: computed(() => `${itemId$()}-body-container`),
						class: itemBodyContainerClass$(),
						'aria-labelledby': computed(() => `${itemId$()}-toggle`),
					},
				})),
			),
			accordionItemDirective: noop,
		},
	};
}

/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @returns the accordion widget factory
 */
export function factoryCreateAccordion(
	itemFactory: WidgetFactory<AccordionItemWidget> = createAccordionItem,
	accordionItemProps: string[] = coreAccordionItemProps,
): WidgetFactory<AccordionWidget> {
	return (config?: PropsConfig<AccordionProps>) => {
		const [
			{
				closeOthers$,
				onShown$,
				onHidden$,
				className$,
				itemId$,
				itemAnimated$,
				itemClass$,
				itemDisabled$,
				itemVisible$,
				itemTransition$,
				itemDestroyOnHide$,
				itemBodyClass$,
				itemButtonClass$,
				itemBodyContainerClass$,
				itemHeaderClass$,
				itemHeadingTag$,
				onItemVisibleChange$,
				onItemHidden$,
				onItemShown$,
				...stateProps
			},
			patch,
		] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
		const accordionItemConfig: ReadableSignals<AccordionItemProps> = {
			itemId: itemId$,
			itemClass: itemClass$,
			itemAnimated: itemAnimated$,
			itemDisabled: itemDisabled$,
			itemVisible: itemVisible$,
			itemTransition: itemTransition$,
			itemDestroyOnHide: itemDestroyOnHide$,
			itemBodyClass: itemBodyClass$,
			itemButtonClass: itemButtonClass$,
			itemBodyContainerClass: itemBodyContainerClass$,
			itemHeaderClass: itemHeaderClass$,
			itemHeadingTag: itemHeadingTag$,
			onItemVisibleChange: onItemVisibleChange$,
			onItemHidden: onItemHidden$,
			onItemShown: onItemShown$,
		};
		const itemsWidget$ = registrationArray<AccordionItemWidget>();
		const openItems$ = computed(() => {
			const openItems: string[] = [];
			itemsWidget$().forEach((item) => {
				if (item.state$().itemVisible) {
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
			}
		});

		const action$ = computed(() => {
			checkCloseOthersAction$();
		});
		return {
			...stateStores({itemsWidget$, className$, ...stateProps}),
			patch,
			actions: {},
			api: {
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
				registerItem: (propsConfig?: PropsConfig<AccordionItemProps>) => {
					const itemProps = accordionItemProps as (keyof AccordionItemProps)[];
					const config = mergeConfigStores(itemProps, normalizeConfigStores(itemProps, propsConfig?.config), accordionItemConfig);
					const [{onItemHidden$, onItemShown$}] = writablesForProps(
						{
							onItemHidden: defaultItemConfig.onItemHidden,
							onItemShown: defaultItemConfig.onItemShown,
						},
						{config, props: propsConfig?.props} as PropsConfig<Pick<AccordionItemProps, 'onItemHidden' | 'onItemShown'>>,
					);
					const item = itemFactory({
						config,
						props: {
							...propsConfig?.props,
							onItemHidden: asWritable(
								readable(() => {
									onHidden$()(item.stores.itemId$());
									onItemHidden$()?.();
								}),
								(val) => {
									onItemHidden$.set(val);
								},
							),
							onItemShown: asWritable(
								readable(() => {
									onShown$()(item.stores.itemId$());
									onItemShown$()?.();
								}),
								(val) => {
									onItemShown$.set(val);
								},
							),
						},
					});

					item.directives.accordionItemDirective = mergeDirectives(
						() => ({
							destroy: itemsWidget$.register(item),
						}),
						createAttributesDirective(() => ({
							attributes: {class: item.stores.itemClass$, id: item.stores.itemId$},
						})),
					);
					return item;
				},
			},
			directives: {
				accordionDirective: mergeDirectives(
					directiveSubscribe(action$),
					createAttributesDirective(() => ({attributes: {class: className$()}, classNames: {'au-accordion': true}})),
				),
			},
		};
	};
}

/**
 * Creates a new Accordion widget instance.
 * @param config - config of the accordion, either as a store or as an object containing values or stores.
 * @returns a new accordion widget instance
 */
export const createAccordion = factoryCreateAccordion();
