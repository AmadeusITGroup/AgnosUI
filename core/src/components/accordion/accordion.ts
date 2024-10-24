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

/**
 * Adjusts the visibility of accordion items based on the provided open items.
 * If there are exactly two open items, it keeps the one that is not the old open item visible.
 * If there are more than two open items, it keeps the first one visible.
 * All other items are set to not visible.
 *
 * @param items - The array of AccordionItemWidget objects to adjust.
 * @param openItems - An array of strings representing the IDs of the open items.
 * @param oldOpen - (Optional) The ID of the previously open item.
 * @returns The adjusted array of AccordionItemWidget objects.
 */
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
			if (item.stores.id$() !== keepOpen && item.stores.visible$()) {
				item.patch({visible: false});
			}
		});
	}
	return items;
}

/**
 * Retrieves an accordion item by its ID.
 *
 * @param items - An array of `AccordionItemWidget` objects.
 * @param id - The ID of the accordion item to retrieve.
 * @returns The `AccordionItemWidget` with the matching ID, or `undefined` if no match is found.
 */
function getItem(items: AccordionItemWidget[], id: string): AccordionItemWidget | undefined {
	return items.find((item) => item.stores.id$() === id);
}

/**
 * Properties for the Accordion component.
 */
export interface AccordionProps extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, only one accordion-item at the time can stay open.
	 *
	 * @defaultValue `false`
	 */
	closeOthers: boolean;
	/**
	 * An event fired when an item is shown.
	 *
	 * Event payload is the id of the item.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onItemShown: (itemId: string) => void;
	/**
	 * An event fired when an item is hidden.
	 *
	 * Event payload is the id of the item.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onItemHidden: (itemId: string) => void;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * @defaultValue `true`
	 */
	itemDestroyOnHide: boolean;
	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * @defaultValue `true`
	 */
	itemAnimated: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * @defaultValue
	 * ```ts
	 * async () => {}
	 * ```
	 */
	itemTransition: TransitionFn;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * @defaultValue `''`
	 */
	itemClassName: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * @defaultValue `''`
	 */
	itemHeaderClassName: string;
	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * @defaultValue `''`
	 */
	itemButtonClassName: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * @defaultValue `''`
	 */
	itemBodyContainerClassName: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * @defaultValue `''`
	 */
	itemBodyClassName: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * @defaultValue `''`
	 */
	itemHeadingTag: string;
}

/**
 * Represents the state of an Accordion component.
 */
export interface AccordionState extends WidgetsCommonPropsAndState {
	/**
	 * Array containing all the accordion-items contained in the accordion.
	 */
	itemWidgets: AccordionItemWidget[];
}

/**
 * Interface representing the API for an accordion component.
 */
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

/**
 * Interface representing the directives used in the Accordion component.
 */
export interface AccordionDirectives {
	/**
	 * Directive to put on the accordion DOM element
	 */
	accordionDirective: Directive;
}

/**
 * Represents an Accordion widget with specific properties, state, API, and directives.
 */
export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, AccordionDirectives>;

/**
 * Interface representing the API for an accordion item.
 */
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

/**
 * Interface representing the directives used in an accordion item.
 */
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
	 * Directive to apply the itemTransition
	 */
	transitionDirective: Directive;
	/**
	 * Directive to apply aria attributes to the expanded body panel
	 */
	bodyContainerAttrsDirective: Directive;
	/**
	 * Directive to be put on the accordion-item body container. It will handle the animation.
	 */
	bodyContainerDirective: Directive;
	/**
	 * Directive to be put on the accordion-item. It will handle adding the accordion-item to the accordion.
	 */
	itemDirective: Directive;
}

/**
 * Interface representing the common properties and state for an accordion item.
 */
interface AccordionItemCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	visible: boolean;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	disabled: boolean;
	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	id: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	headerClassName: string;
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	buttonClassName: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	bodyContainerClassName: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	bodyClassName: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	headingTag: string;
}

/**
 * Properties for an AccordionItem component.
 */
export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
	/**
	 * If `true`, accordion-item will be animated.
	 */
	animated: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	transition: TransitionFn;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	destroyOnHide: boolean;
	/**
	 * An event fired when an item is shown.
	 */
	onShown: () => void;
	/**
	 * An event fired when an item is hidden.
	 */
	onHidden: () => void;
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	onVisibleChange: (visible: boolean) => void;
}

/**
 * Represents the state of an accordion item.
 */
export interface AccordionItemState extends AccordionItemCommonPropsAndState {
	/**
	 * If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
	 * value of the `visible` and `destroyOnHide`.
	 */
	shouldBeInDOM: boolean;
}

/**
 * Represents a widget for an accordion item.
 */
export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemDirectives>;

const defaultAccordionConfig: AccordionProps = {
	closeOthers: false,
	onItemShown: noop,
	onItemHidden: noop,
	className: '',
	itemDestroyOnHide: true,
	itemAnimated: true,
	itemTransition: async () => {},
	itemHeadingTag: '',
	itemClassName: '',
	itemHeaderClassName: '',
	itemButtonClassName: '',
	itemBodyContainerClassName: '',
	itemBodyClassName: '',
};

const defaultItemConfig: AccordionItemProps = {
	id: '',
	destroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
	disabled: false,
	visible: false,
	animated: defaultAccordionConfig.itemAnimated,
	transition: defaultAccordionConfig.itemTransition,
	onShown: noop,
	onHidden: noop,
	onVisibleChange: noop,
	className: defaultAccordionConfig.itemClassName,
	headerClassName: defaultAccordionConfig.itemHeaderClassName,
	buttonClassName: defaultAccordionConfig.itemButtonClassName,
	bodyContainerClassName: defaultAccordionConfig.itemBodyContainerClassName,
	bodyClassName: defaultAccordionConfig.itemBodyClassName,
	headingTag: defaultAccordionConfig.itemHeadingTag,
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
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	className: typeString,
	itemDestroyOnHide: typeBoolean,
	itemAnimated: typeBoolean,
	itemTransition: typeFunction,
	itemClassName: typeString,
	itemHeaderClassName: typeString,
	itemButtonClassName: typeString,
	itemBodyContainerClassName: typeString,
	itemBodyClassName: typeString,
	itemHeadingTag: typeString,
};

const configItemValidator: ConfigValidator<AccordionItemProps> = {
	id: typeString,
	destroyOnHide: typeBoolean,
	disabled: typeBoolean,
	visible: typeBoolean,
	animated: typeBoolean,
	transition: typeFunction,
	onShown: typeFunction,
	onHidden: typeFunction,
	onVisibleChange: typeFunction,
	className: typeString,
	headerClassName: typeString,
	buttonClassName: typeString,
	bodyContainerClassName: typeString,
	bodyClassName: typeString,
	headingTag: typeString,
};

/**
 * Creates a new AccordionItem widget instance.
 * @param config - config of the accordion item, either as a store or as an object containing values or stores.
 * @returns a new accordion item widget instance
 */
export function createAccordionItem(config?: PropsConfig<AccordionItemProps>): AccordionItemWidget {
	const [
		{
			bodyClassName$,
			buttonClassName$,
			bodyContainerClassName$,
			headerClassName$,
			animated$,
			transition$,
			destroyOnHide$,
			onShown$,
			onHidden$,
			onVisibleChange$,
			visible$,
			id$: _dirtyId$,
			disabled$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultItemConfig, config, configItemValidator);

	const initDone$ = writable(false);
	const _autoId$ = computed(() => generateId());
	const id$ = computed(() => _dirtyId$() || _autoId$());
	const transition = createTransition({
		props: {
			transition: transition$,
			visible: visible$,
			onVisibleChange: onVisibleChange$,
			animated: animated$,
			animatedOnInit: false,
			initDone: initDone$,
			onHidden: () => {
				onHidden$()();
			},
			onShown: () => {
				onShown$()();
			},
		},
	});
	const shouldBeInDOM$ = computed(() => destroyOnHide$() === false || !transition.stores.hidden$());
	const toggleDirective = createAttributesDirective(() => ({
		attributes: {
			id: computed(() => `${id$()}-toggle`),
			'aria-expanded': computed(() => `${visible$()}`),
			'aria-disabled': computed(() => `${disabled$()}`),
			'aria-controls': computed(() => `${id$()}-body-container`),
			disabled: disabled$,
		},
		classNames: {collapsed: computed(() => !visible$())},
		events: {
			click: () => {
				if (!disabled$()) {
					visible$.update((c: boolean) => !c);
				}
			},
		},
	}));
	const transitionDirective = bindDirectiveNoArg(transition.directives.directive);
	const bodyContainerAttrsDirective = createAttributesDirective(() => ({
		attributes: {
			id: computed(() => `${id$()}-body-container`),
			class: bodyContainerClassName$(),
			'aria-labelledby': computed(() => `${id$()}-toggle`),
		},
	}));

	return {
		...stateStores({
			visible$,
			id$,
			shouldBeInDOM$,
			disabled$,
			bodyClassName$,
			buttonClassName$,
			bodyContainerClassName$,
			headerClassName$,
			...stateProps,
		}),
		patch,
		api: {
			initDone: () => {
				initDone$.set(true);
			},
			collapse: () => {
				visible$.set(false);
			},
			expand: () => {
				visible$.set(true);
			},
			toggle: () => {
				visible$.update((c: boolean) => !c);
			},
		},
		directives: {
			toggleDirective,
			buttonDirective: mergeDirectives(
				toggleDirective,
				createAttributesDirective(() => ({
					attributes: {
						type: 'button',
						class: buttonClassName$(),
					},
				})),
			),
			headerDirective: createAttributesDirective(() => ({attributes: {class: headerClassName$()}})),
			bodyDirective: createAttributesDirective(() => ({attributes: {class: bodyClassName$()}})),
			transitionDirective,
			bodyContainerAttrsDirective,
			bodyContainerDirective: mergeDirectives(transitionDirective, bodyContainerAttrsDirective),
			itemDirective: noop,
		},
	};
}

/**
 * Create an accordion WidgetFactory based on a item factory and the list of item props that should inherit from the parent accordion
 *
 * @param itemFactory - the item factory
 * @param accordionItemProps - the list of item props
 * @param accordionConfig - the default accordion config
 * @param accordionValidator - the validator of props
 * @returns the accordion widget factory
 */
export function factoryCreateAccordion(
	itemFactory: WidgetFactory<AccordionItemWidget> = createAccordionItem,
	accordionItemProps: string[] = coreAccordionItemProps,
	accordionConfig: AccordionProps = defaultAccordionConfig,
	accordionValidator: ConfigValidator<AccordionProps> = configAccordionValidator,
): WidgetFactory<AccordionWidget> {
	return (config?: PropsConfig<AccordionProps>) => {
		const [writables, patch] = writablesForProps(accordionConfig, config, accordionValidator);
		const {closeOthers$, onItemShown$, onItemHidden$, className$} = writables;
		const accordionItemConfig = Object.fromEntries(
			Object.entries(writables)
				.filter((entry) => entry[0].startsWith('item'))
				.map((entry) => [entry[0].charAt(4).toLowerCase() + entry[0].slice(5, -1), entry[1]]),
		);
		const itemWidgets$ = registrationArray<AccordionItemWidget>();
		const openItems$ = computed(() => {
			const openItems: string[] = [];
			itemWidgets$().forEach((item) => {
				if (item.stores.visible$()) {
					openItems.push(item.stores.id$());
				}
			});
			return openItems;
		});

		const oldOpenItem$ = writable(openItems$()[0]);
		const checkCloseOthersAction$ = computed(() => {
			if (closeOthers$()) {
				adjustItemsCloseOthers(itemWidgets$(), openItems$(), oldOpenItem$());
				oldOpenItem$.set(openItems$()[0]);
			}
		});

		const action$ = computed(() => {
			checkCloseOthersAction$();
		});
		return {
			...stateStores({itemWidgets$, className$}),
			patch,
			api: {
				expand: (id: string) => {
					getItem(itemWidgets$(), id)?.api.expand();
				},
				collapse: (id: string) => {
					getItem(itemWidgets$(), id)?.api.collapse();
				},
				toggle: (id: string) => {
					getItem(itemWidgets$(), id)?.api.toggle();
				},
				expandAll: () => {
					itemWidgets$().forEach((i) => i.api.expand());
				},
				collapseAll: () => {
					itemWidgets$().forEach((i) => i.api.collapse());
				},
				registerItem: (propsConfig?: PropsConfig<AccordionItemProps>) => {
					const itemProps = accordionItemProps as (keyof AccordionItemProps)[];
					const config = mergeConfigStores(itemProps, normalizeConfigStores(itemProps, propsConfig?.config), accordionItemConfig);
					const [{onHidden$, onShown$}] = writablesForProps(
						{
							onHidden: defaultItemConfig.onHidden,
							onShown: defaultItemConfig.onShown,
						},
						{config, props: propsConfig?.props} as PropsConfig<Pick<AccordionItemProps, 'onHidden' | 'onShown'>>,
					);
					const item = itemFactory({
						config,
						props: {
							...propsConfig?.props,
							onHidden: asWritable(
								readable(() => {
									onItemHidden$()(item.stores.id$());
									onHidden$()?.();
								}),
								(val) => {
									onItemHidden$.set(val);
								},
							),
							onShown: asWritable(
								readable(() => {
									onItemShown$()(item.stores.id$());
									onShown$()?.();
								}),
								(val) => {
									onItemShown$.set(val);
								},
							),
						},
					});

					item.directives.itemDirective = mergeDirectives(
						() => ({
							destroy: itemWidgets$.register(item),
						}),
						createAttributesDirective(() => ({
							attributes: {class: item.stores.className$, id: item.stores.id$},
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
export const createAccordion: WidgetFactory<AccordionWidget> = factoryCreateAccordion();
