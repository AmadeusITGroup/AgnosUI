const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';\r
import type { StoreInput } from '@amadeus-it-group/tansu';\r
import type { StoreOptions } from '@amadeus-it-group/tansu';\r
import type { StoresInputValues } from '@amadeus-it-group/tansu';\r
import type { SubscribableStore } from '@amadeus-it-group/tansu';\r
import type { WritableSignal } from '@amadeus-it-group/tansu';\r
\r
export declare const activeElement$: ReadableSignal<Element | null>;\r
\r
export declare interface AlertApi {\r
    /**\r
     * Triggers alert closing programmatically (same as clicking on the close button (×)).\r
     */\r
    close(): void;\r
    /**\r
     * Triggers the alert to be displayed for the user.\r
     */\r
    open(): void;\r
}\r
\r
export declare interface AlertCommonPropsAndState {\r
    /**\r
     * If \`true\`, alert can be dismissed by the user.\r
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.\r
     */\r
    dismissible: boolean;\r
    /**\r
     * Type of the alert.\r
     * The are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.\r
     */\r
    type: string;\r
    /**\r
     * Template for the alert content\r
     */\r
    slotDefault: SlotContent<AlertContext>;\r
    /**\r
     * Global template for the alert component\r
     */\r
    slotStructure: SlotContent<AlertContext>;\r
    /**\r
     * If \`true\` the alert is visible to the user\r
     */\r
    visible: boolean;\r
    /**\r
     * Accessibility close button label\r
     */\r
    ariaCloseButtonLabel: string;\r
}\r
\r
export declare type AlertContext = WidgetSlotContext<AlertWidget>;\r
\r
export declare interface AlertDirectives {\r
    transitionDirective: Directive;\r
}\r
\r
export declare interface AlertProps extends AlertCommonPropsAndState {\r
    /**\r
     * Callback called when the alert visibility changed.\r
     */\r
    onVisibleChange: (visible: boolean) => void;\r
    /**\r
     * Callback called when the alert is hidden.\r
     */\r
    onHidden: () => void;\r
    /**\r
     * Callback called when the alert is shown.\r
     */\r
    onShown: () => void;\r
    /**\r
     * The transition function will be executed when the alert is displayed or hidden.\r
     *\r
     * Depending on the value of {@link AlertProps.animationOnInit}, the animation can be optionally skipped during the showing process.\r
     */\r
    transition: TransitionFn;\r
    /**\r
     * If \`true\`, alert opening will be animated.\r
     *\r
     * Animation is triggered  when the \`.open()\` function is called\r
     * or the visible prop is changed\r
     */\r
    animationOnInit: boolean;\r
    /**\r
     * If \`true\`, alert closing will be animated.\r
     *\r
     * Animation is triggered  when clicked on the close button (×),\r
     * via the \`.close()\` function or the visible prop is changed\r
     */\r
    animation: boolean;\r
}\r
\r
export declare interface AlertState extends AlertCommonPropsAndState {\r
    hidden: boolean;\r
}\r
\r
export declare type AlertWidget = Widget<AlertProps, AlertState, AlertApi, object, AlertDirectives>;\r
\r
export declare const bindableDerived: <T, U extends [WritableSignal<T, T>, ...StoreInput<any>[]]>(onChange$: ReadableSignal<(value: T) => void>, stores: U, adjustValue: (arg: StoresInputValues<U>) => T) => ReadableSignal<T>;\r
\r
/**\r
 * Binds the given directive to a store that provides its argument.\r
 *\r
 * @remarks\r
 *\r
 * The returned directive can be used without argument, it will ignore any argument passed to it\r
 * and will call the provided directive with the content of the provided store as its argument,\r
 * calling its update method when the content of the store changes.\r
 *\r
 * @param directive - directive to bind\r
 * @param directiveArg$ - store containing the argument of the directive\r
 * @returns The bound directive that can be used with no argument.\r
 */\r
export declare const bindDirective: <T>(directive: Directive<T>, directiveArg$: ReadableSignal<T>) => Directive;\r
\r
/**\r
 * Returns a directive that ignores any argument passed to it and calls the provided directive without any\r
 * argument.\r
 *\r
 * @param directive - directive to wrap\r
 * @returns The resulting directive.\r
 */\r
export declare const bindDirectiveNoArg: <T>(directive: Directive<void | T>) => Directive;\r
\r
declare namespace bootstrap {\r
    export {\r
        collapseVerticalTransition,\r
        collapseHorizontalTransition,\r
        fadeTransition\r
    }\r
}\r
export { bootstrap }\r
\r
declare const collapseHorizontalTransition: TransitionFn;\r
\r
declare const collapseVerticalTransition: TransitionFn;\r
\r
export declare type ConfigValidator<T extends object, U extends object = T> = {\r
    [K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]>;\r
};\r
\r
export declare function createAlert(config?: PropsConfig<AlertProps>): AlertWidget;\r
\r
export declare const createCSSTransition: (start: CSSTransitionFn) => TransitionFn;\r
\r
export declare function createHasFocus(): HasFocus;\r
\r
/**\r
 * Creates a new modal widget instance.\r
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.\r
 * @returns a new modal widget instance\r
 */\r
export declare const createModal: (config$?: PropsConfig<ModalProps>) => ModalWidget;\r
\r
export declare function createPagination(config$?: PropsConfig<PaginationProps>): PaginationWidget;\r
\r
/**\r
 *\r
 * Utility function designed to create a \`patch\` function related to the provided stores.\r
 * Any key given to the patch function which is not in the original object will be ignored.\r
 *\r
 * @param stores - object of stores\r
 *\r
 * @example\r
 *\r
 * \`\`\`typescript\r
 * const storeA$ = writable(1);\r
 * const storeB$ = writable(1);\r
 * const patch = createPatch({a: storeA$, b: storeB$});\r
 *\r
 * patch({a: 2}) // will perform storeA$.set(2)\r
 * patch({a: 2, b: 2}) // will perform storeA$.set(2) and storeB$.set(2) in the same batch.\r
 * patch({a: 2, c: 2}) // will perform storeA$.set(2), c is ignored.\r
 *\r
 * \`\`\`\r
 * @returns\r
 */\r
export declare function createPatch<T extends object, V extends object = T>(stores: ToWritableSignal<T, V>): <U extends Partial<T>>(storesValues?: void | U | undefined) => void;\r
\r
export declare function createRating(config?: PropsConfig<RatingProps>): RatingWidget;\r
\r
export declare function createSelect<Item>(config?: PropsConfig<SelectProps<Item>>): SelectWidget<Item>;\r
\r
export declare const createSimpleClassTransition: ({ animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses, }: SimpleClassTransitionConfig) => TransitionFn;\r
\r
/**\r
 * Returns a directive and a store. The store contains at any time the array of all the DOM elements on which the directive is\r
 * currently used.\r
 *\r
 * @remarks\r
 * If the directive is intended to be used on a single element element, it may be more appropriate to use\r
 * {@link createStoreDirective} instead.\r
 *\r
 * @returns An object with two properties: the \`directive\` property that is the directive to use on some DOM elements,\r
 * and the \`elements$\` property that is the store containing an array of all the elements on which the directive is currently\r
 * used.\r
 */\r
export declare const createStoreArrayDirective: () => {\r
    directive: Directive;\r
    elements$: ReadableSignal<HTMLElement[]>;\r
};\r
\r
/**\r
 * Returns a directive and a store. When the directive is used on a DOM element, the store contains that DOM element.\r
 * When the directive is not used, the store contains null.\r
 *\r
 * @remarks\r
 * If the directive is used on more than one element, an error is displayed in the console and the element is ignored.\r
 * If the directive is intended to be used on more than one element, please use {@link createStoreArrayDirective} instead.\r
 *\r
 * @returns An object with two properties: the \`directive\` property that is the directive to use on one DOM element,\r
 * and the \`element$\` property that is the store containing the element on which the directive is currently used (or null\r
 * if the store is not currently used).\r
 */\r
export declare const createStoreDirective: () => {\r
    directive: Directive;\r
    element$: ReadableSignal<HTMLElement | null>;\r
};\r
\r
export declare const createTransition: (config?: PropsConfig<TransitionProps>) => TransitionWidget;\r
\r
/**\r
 * Creates a new widgets default configuration store, optionally inheriting from a parent store, and containing\r
 * its own set of widgets configuration properties that override the same properties form the parent configuration.\r
 *\r
 * @remarks\r
 * The resulting store has a value computed from the parent store in two steps:\r
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).\r
 * If adaptParentConfig is not specified, this step is skipped.\r
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains\r
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.\r
 *\r
 * @param parent$ - optional parent widgets default configuration store.\r
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration\r
 * from parent$ (or an empty object if parent$ is not specified) and returns the widgets default configuration to be used.\r
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.\r
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.\r
 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:\r
 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).\r
 * The resulting store is writable, its set function is actually the set function of the own$ store.\r
 */\r
export declare const createWidgetsConfig: <T>(parent$?: WidgetsConfigStore<T> | undefined, adaptParentConfig?: (config: Partial<{ [Level1 in keyof T]: Partial<T[Level1]>; }>) => Partial<{ [Level1 in keyof T]: Partial<T[Level1]>; }>) => WidgetsConfigStore<T>;\r
\r
export declare type CSSTransitionFn = (element: HTMLElement, direction: 'show' | 'hide', animation: boolean, context: object) => void | (() => void);\r
\r
export declare type Directive<T = void> = (node: HTMLElement, args: T) => void | {\r
    update?: (args: T) => void;\r
    destroy?: () => void;\r
};\r
\r
/**\r
 * Returns a directive that subscribes to the given store while it is used on a DOM element,\r
 * and that unsubscribes from it when it is no longer used.\r
 *\r
 * @param store - store on which there will be an active subscription while the returned directive is used.\r
 * @param asyncUnsubscribe - true if unsubscribing from the store should be done asynchronously (which is the default), and\r
 * false if it should be done synchronously when the directive is destroyed\r
 * @returns The resulting directive.\r
 */\r
export declare const directiveSubscribe: (store: ReadableSignal<any>, asyncUnsubscribe?: boolean) => Directive;\r
\r
/**\r
 * Returns a directive that calls the provided function with the arguments passed to the directive\r
 * on initialization and each time they are updated.\r
 *\r
 * @param update - Function called with the directive argument when the directive is initialized and when its argument is updated.\r
 * @returns The resulting directive.\r
 */\r
export declare const directiveUpdate: <T>(update: (arg: T) => void) => Directive<T>;\r
\r
declare const fadeTransition: TransitionFn;\r
\r
/**\r
 * This utility function is designed to compare the first level of two objects.\r
 *\r
 * It returns a new object which has all the keys for which the values in \`obj1\`\r
 * and \`obj2\` are different, with the values from \`obj2\`, or null if objects\r
 * are identical.\r
 *\r
 * @param obj1 - First object\r
 * @param obj2 - Second object\r
 */\r
export declare function findChangedProperties<T extends Record<string, any>>(obj1: Partial<T>, obj2: Partial<T>): Partial<T> | null;\r
\r
export declare function getAlertDefaultConfig(): {\r
    /**\r
     * Callback called when the alert visibility changed.\r
     */\r
    onVisibleChange: (visible: boolean) => void;\r
    /**\r
     * Callback called when the alert is hidden.\r
     */\r
    onHidden: () => void;\r
    /**\r
     * Callback called when the alert is shown.\r
     */\r
    onShown: () => void;\r
    /**\r
     * The transition function will be executed when the alert is displayed or hidden.\r
     *\r
     * Depending on the value of {@link AlertProps.animationOnInit}, the animation can be optionally skipped during the showing process.\r
     */\r
    transition: TransitionFn;\r
    /**\r
     * If \`true\`, alert opening will be animated.\r
     *\r
     * Animation is triggered  when the \`.open()\` function is called\r
     * or the visible prop is changed\r
     */\r
    animationOnInit: boolean;\r
    /**\r
     * If \`true\`, alert closing will be animated.\r
     *\r
     * Animation is triggered  when clicked on the close button (×),\r
     * via the \`.close()\` function or the visible prop is changed\r
     */\r
    animation: boolean;\r
    /**\r
     * If \`true\`, alert can be dismissed by the user.\r
     * The close button (×) will be displayed and you can be notified of the event with the (close) output.\r
     */\r
    dismissible: boolean;\r
    /**\r
     * Type of the alert.\r
     * The are the following types: 'success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light' and 'dark'.\r
     */\r
    type: string;\r
    /**\r
     * Template for the alert content\r
     */\r
    slotDefault: SlotContent<AlertContext>;\r
    /**\r
     * Global template for the alert component\r
     */\r
    slotStructure: SlotContent<AlertContext>;\r
    /**\r
     * If \`true\` the alert is visible to the user\r
     */\r
    visible: boolean;\r
    /**\r
     * Accessibility close button label\r
     */\r
    ariaCloseButtonLabel: string;\r
};\r
\r
/**\r
 * Returns a copy of the default modal config.\r
 */\r
export declare function getModalDefaultConfig(): {\r
    /**\r
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.\r
     */\r
    animation: boolean;\r
    /**\r
     * Whether a backdrop should be created behind the modal.\r
     */\r
    backdrop: boolean;\r
    /**\r
     * The transition to use for the backdrop behind the modal (if present).\r
     */\r
    backdropTransition: TransitionFn;\r
    /**\r
     * Whether the modal should be closed when clicking on the viewport outside the modal.\r
     */\r
    closeOnOutsideClick: boolean;\r
    /**\r
     * The transition to use for the modal.\r
     */\r
    modalTransition: TransitionFn;\r
    /**\r
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).\r
     *\r
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing\r
     * to cancel the close process.\r
     */\r
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;\r
    /**\r
     * Event to be triggered when the visible property changes.\r
     *\r
     * @param visible - new value of the visible propery\r
     */\r
    onVisibleChange: (visible: boolean) => void;\r
    /**\r
     * Event to be triggered when the transition is completed and the modal is not visible.\r
     */\r
    onHidden: () => void;\r
    /**\r
     * Event to be triggered when the transition is completed and the modal is visible.\r
     */\r
    onShown: () => void;\r
    /**\r
     * Value of the aria-label attribute to put on the close button.\r
     */\r
    ariaCloseButtonLabel: string;\r
    /**\r
     * Classes to add on the backdrop DOM element.\r
     */\r
    backdropClass: string;\r
    /**\r
     * Whether to display the close button.\r
     */\r
    closeButton: boolean;\r
    /**\r
     * Which element should contain the modal and backdrop DOM elements.\r
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.\r
     * Otherwise, they stay where the widget is located.\r
     */\r
    container: HTMLElement | null;\r
    /**\r
     * Classes to add on the modal DOM element.\r
     */\r
    modalClass: string;\r
    /**\r
     * Body of the modal.\r
     */\r
    slotDefault: SlotContent<ModalContext>;\r
    /**\r
     * Footer of the modal.\r
     */\r
    slotFooter: SlotContent<ModalContext>;\r
    /**\r
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.\r
     */\r
    slotHeader: SlotContent<ModalContext>;\r
    /**\r
     * Structure of the modal.\r
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.\r
     */\r
    slotStructure: SlotContent<ModalContext>;\r
    /**\r
     * Title of the modal.\r
     */\r
    slotTitle: SlotContent<ModalContext>;\r
    /**\r
     * Whether the modal should be visible when the transition is completed.\r
     */\r
    visible: boolean;\r
};\r
\r
export declare function getPaginationDefaultConfig(): {\r
    /**\r
     * The number of items in your paginated collection.\r
     *\r
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on\r
     * \`collectionSize\` and \`pageSize\`.\r
     *\r
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.\r
     *\r
     * Whatever the collectionSize the page number is of minimum 1.\r
     * @defaultValue 0\r
     */\r
    collectionSize: number;\r
    /**\r
     * The number of items per page.\r
     * @defaultValue 10\r
     * @remarks min value is 1\r
     */\r
    pageSize: number;\r
    /**\r
     * An event fired when the page is changed.\r
     *\r
     * Event payload is the number of the newly selected page.\r
     *\r
     * Page numbers start with \`1\`.\r
     * @defaultValue\r
     * \`\`\`ts\r
     * () => {}\r
     * \`\`\`\r
     */\r
    onPageChange: (page: number) => void;\r
    /**\r
     * pagesFactory returns a function computing the array of pages to be displayed\r
     * as number (-1 are treated as ellipsis).\r
     * Use Page slot to customize the pages view and not this\r
     * @param page - The current page number\r
     * @param pageCount - The total number of pages\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({page, pageCount}) => {\r
     *  const pages: number[] = [];\r
     *	for (let i = 1; i <= pageCount; i++) {\r
     *		pages.push(i);\r
     * 	}\r
     * 	return pages;\r
     * }\r
     * \`\`\`\r
     */\r
    pagesFactory: (page: number, pageCount: number) => number[];\r
    /**\r
     * Provide the label for each "Page" page button.\r
     * This is used for accessibility purposes.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @param processPage - The current page number\r
     * @param pageCount - The total number of pages\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({processPage, pageCount}) => \`Page \${processPage} of \${pageCount}\`\r
     * \`\`\`\r
     */\r
    ariaPageLabel: (processPage: number, pageCount: number) => string;\r
    /**\r
     * The current page.\r
     *\r
     * Page numbers start with \`1\`.\r
     * @defaultValue 1\r
     */\r
    page: number;\r
    /**\r
     * The pagination display size.\r
     *\r
     * Bootstrap currently supports small and large sizes.\r
     * @defaultValue null\r
     */\r
    size: "sm" | "lg" | null;\r
    /**\r
     * The label for the nav element.\r
     *\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Page navigation'\r
     */\r
    ariaLabel: string;\r
    /**\r
     * The label for the "active" page.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '(current)'\r
     */\r
    activeLabel: string;\r
    /**\r
     * The label for the "First" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for first page'\r
     */\r
    ariaFirstLabel: string;\r
    /**\r
     * The label for the "Previous" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for previous page'\r
     */\r
    ariaPreviousLabel: string;\r
    /**\r
     * The label for the "Next" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for next page'\r
     */\r
    ariaNextLabel: string;\r
    /**\r
     * The label for the "Last" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for last page'\r
     */\r
    ariaLastLabel: string;\r
    /**\r
     * If \`true\`, pagination links will be disabled.\r
     * @defaultValue false\r
     */\r
    disabled: boolean;\r
    /**\r
     * If \`true\`, the "Next" and "Previous" page links are shown.\r
     * @defaultValue true\r
     */\r
    directionLinks: boolean;\r
    /**\r
     * If \`true\`, the "First" and "Last" page links are shown.\r
     * @defaultValue false\r
     */\r
    boundaryLinks: boolean;\r
    /**\r
     * An input to add a custom class to the UL\r
     * @defaultValue ''\r
     */\r
    className: string;\r
    /**\r
     * The template to use for the ellipsis slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '…'\r
     */\r
    slotEllipsis: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the first slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '«'\r
     */\r
    slotFirst: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the previous slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '‹'\r
     */\r
    slotPrevious: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the next slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '›'\r
     */\r
    slotNext: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the last slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '»'\r
     */\r
    slotLast: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the pages slot\r
     * To use to customize the pages view\r
     * override any configuration parameters provided for this\r
     */\r
    slotPages: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the number slot\r
     * override any configuration parameters provided for this\r
     * for I18n, we suggest to use the global configuration\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({displayedPage}) => \`\${displayedPage}\`\r
     * \`\`\`\r
     * @param displayedPage - The current page number\r
     */\r
    slotNumberLabel: SlotContent<PaginationNumberContext>;\r
};\r
\r
export declare function getRatingDefaultConfig(): {\r
    /**\r
     * Return the value for the 'aria-value' attribute.\r
     * @param rating - Current rating value.\r
     * @param maxRating - maxRating value.\r
     */\r
    ariaValueTextFn: (rating: number, maxRating: number) => string;\r
    /**\r
     * An event emitted when the rating is changed.\r
     *\r
     * Event payload is equal to the newly selected rating.\r
     */\r
    onRatingChange: (rating: number) => void;\r
    /**\r
     * An event emitted when the user is hovering over a given rating.\r
     *\r
     * Event payload is equal to the rating being hovered over.\r
     */\r
    onHover: (rating: number) => void;\r
    /**\r
     * An event emitted when the user stops hovering over a given rating.\r
     *\r
     * Event payload is equal to the rating of the last item being hovered over.\r
     */\r
    onLeave: (rating: number) => void;\r
    /**\r
     * The current rating. Could be a decimal value like \`3.75\`.\r
     */\r
    rating: number;\r
    /**\r
     * The maximum rating that can be given.\r
     */\r
    maxRating: number;\r
    /**\r
     * If \`true\`, the rating is disabled.\r
     */\r
    disabled: boolean;\r
    /**\r
     * If \`true\`, the rating can't be changed.\r
     */\r
    readonly: boolean;\r
    /**\r
     * Define if the rating can be reset.\r
     *\r
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.\r
     */\r
    resettable: boolean;\r
    /**\r
     * Allows setting a custom rating tabindex.\r
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.\r
     */\r
    tabindex: number;\r
    /**\r
     * Classname to be applied on the rating container\r
     */\r
    className: string;\r
    /**\r
     * The template to override the way each star is displayed.\r
     */\r
    slotStar: SlotContent<StarContext>;\r
    /**\r
     * The aria label\r
     */\r
    ariaLabel: string;\r
    /**\r
     * The aria labelled by\r
     */\r
    ariaLabelledBy: string;\r
};\r
\r
export declare function getTransitionDurationMs(element: HTMLElement): number;\r
\r
export declare interface HasFocus {\r
    /**\r
     * Directive to put on some elements.\r
     */\r
    directive: Directive;\r
    /**\r
     * Store that contains true if the activeElement is one of the elements which has the directive,\r
     * or any of their descendants.\r
     */\r
    hasFocus$: ReadableSignal<boolean>;\r
}\r
\r
export declare function hasTransition(element: HTMLElement): boolean;\r
\r
export declare const INVALID_VALUE: unique symbol;\r
\r
/**\r
 * Item representation built from the items provided in parameters\r
 */\r
export declare interface ItemCtx<T> {\r
    /**\r
     * Original item given in the parameters\r
     */\r
    item: T;\r
    /**\r
     * Unique id to identify the item\r
     */\r
    id: string;\r
    /**\r
     * Specify if the item is checked\r
     */\r
    selected: boolean;\r
    /**\r
     * Select the item\r
     */\r
    select(): void;\r
    /**\r
     * Unselect the item\r
     */\r
    unselect(): void;\r
    /**\r
     * Toggle the item selection\r
     */\r
    toggle(): void;\r
}\r
\r
/**\r
 * Merges multiple directives into a single directive that executes all of them when called.\r
 *\r
 * @remarks\r
 * All directives receive the same argument upon initialization and update.\r
 * Directives are created and updated in the same order as they appear in the arguments list,\r
 * they are destroyed in the reverse order.\r
 * All calls to the directives (to create, update and destroy them) are wrapped in a call to the\r
 * batch function of tansu\r
 *\r
 * @param args - directives to merge into a single directive.\r
 * @returns The resulting merged directive.\r
 */\r
export declare const mergeDirectives: <T>(...args: (Directive | Directive<T>)[]) => Directive<T>;\r
\r
/**\r
 * Merges source object into destination object, up to the provided number of levels.\r
 * @param destination - destination object\r
 * @param source - source object\r
 * @param levels - number of levels to merge\r
 * @returns the destination object in most cases, or the source in some cases (if the source is not undefined and either levels is smaller than 1\r
 * or the source is not an object)\r
 */\r
export declare const mergeInto: <T>(destination: T, source: T | undefined, levels?: number) => T;\r
\r
/**\r
 * Actions of the modal widget.\r
 */\r
export declare interface ModalActions {\r
    /**\r
     * Action to be called when the user clicks on the close button. It closes the modal with the {@link modalCloseButtonClick} result.\r
     * @param event - mouse event\r
     */\r
    closeButtonClick(event: Pick<MouseEvent, never>): void;\r
    /**\r
     * Action to be called when the user clicks on the modal DOM element (which is supposed to have the size of the full viewport).\r
     * If the click is not done on a descendant of the modal DOM element, it is considered to be done outside the modal\r
     * and, depending on the value of the {@link ModalProps.closeOnOutsideClick|closeOnOutsideClick} prop, the modal is or isn't closed\r
     * (with the {@link modalOutsideClick} result).\r
     * @param event - mouse event\r
     */\r
    modalClick(event: Pick<MouseEvent, 'target' | 'currentTarget'>): void;\r
}\r
\r
/**\r
 * API of the modal widget.\r
 */\r
export declare interface ModalApi {\r
    /**\r
     * Closes the modal with the given result.\r
     *\r
     * @param result - result of the modal, as passed in the {@link ModalBeforeCloseEvent.result|result} property of the event passed to the\r
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler (and possibly changed by it) and resolved by the promise returned by the {@link ModalApi.open|open} method.\r
     */\r
    close(result?: any): void;\r
    /**\r
     * Opens the modal and returns a promise that is resolved when the modal is closed.\r
     * The resolved value is the result passed to the {@link ModalApi.close|close} method and possibly changed by the\r
     * {@link ModalProps.onBeforeClose|onBeforeClose} event handler\r
     */\r
    open(): Promise<any>;\r
    /**\r
     * Method to change some modal properties.\r
     */\r
    patch: ModalWidget['patch'];\r
}\r
\r
/**\r
 * Type of the parameter of {@link ModalProps.onBeforeClose|onBeforeClose}.\r
 */\r
export declare interface ModalBeforeCloseEvent {\r
    /**\r
     * Result of the modal, which is the value passed to the {@link ModalApi.close|close} method\r
     * and later resolved by the promise returned by the {@link ModalApi.open|open} method.\r
     * If needed, it can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.\r
     */\r
    result: any;\r
    /**\r
     * Whether to cancel the close of the modal.\r
     * It can be changed from the {@link ModalProps.onBeforeClose|onBeforeClose} event handler.\r
     */\r
    cancel: boolean;\r
}\r
\r
/**\r
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event\r
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.\r
 */\r
export declare const modalCloseButtonClick: unique symbol;\r
\r
/**\r
 * Properties of the modal widget that are also in the state of the modal.\r
 */\r
export declare interface ModalCommonPropsAndState {\r
    /**\r
     * Value of the aria-label attribute to put on the close button.\r
     */\r
    ariaCloseButtonLabel: string;\r
    /**\r
     * Classes to add on the backdrop DOM element.\r
     */\r
    backdropClass: string;\r
    /**\r
     * Whether to display the close button.\r
     */\r
    closeButton: boolean;\r
    /**\r
     * Which element should contain the modal and backdrop DOM elements.\r
     * If it is not null, the modal and backdrop DOM elements are moved to the specified container.\r
     * Otherwise, they stay where the widget is located.\r
     */\r
    container: HTMLElement | null;\r
    /**\r
     * Classes to add on the modal DOM element.\r
     */\r
    modalClass: string;\r
    /**\r
     * Body of the modal.\r
     */\r
    slotDefault: SlotContent<ModalContext>;\r
    /**\r
     * Footer of the modal.\r
     */\r
    slotFooter: SlotContent<ModalContext>;\r
    /**\r
     * Header of the modal. The default header includes {@link ModalCommonPropsAndState.slotTitle|slotTitle}.\r
     */\r
    slotHeader: SlotContent<ModalContext>;\r
    /**\r
     * Structure of the modal.\r
     * The default structure uses {@link ModalCommonPropsAndState.slotHeader|slotHeader}, {@link ModalCommonPropsAndState.slotDefault|slotDefault} and {@link ModalCommonPropsAndState.slotFooter|slotFooter}.\r
     */\r
    slotStructure: SlotContent<ModalContext>;\r
    /**\r
     * Title of the modal.\r
     */\r
    slotTitle: SlotContent<ModalContext>;\r
    /**\r
     * Whether the modal should be visible when the transition is completed.\r
     */\r
    visible: boolean;\r
}\r
\r
/**\r
 * Context of the modal slots.\r
 */\r
export declare type ModalContext = WidgetSlotContext<ModalWidget>;\r
\r
/**\r
 * Directives of the modal widget.\r
 */\r
export declare interface ModalDirectives {\r
    /**\r
     * Directive to put on the modal DOM element.\r
     */\r
    modalDirective: Directive;\r
    /**\r
     * Directive to put on the backdrop DOM element.\r
     */\r
    backdropDirective: Directive;\r
    /**\r
     * Portal directive to put on the modal DOM element.\r
     */\r
    modalPortalDirective: Directive;\r
    /**\r
     * Portal directive to put on the backdrop DOM element.\r
     */\r
    backdropPortalDirective: Directive;\r
}\r
\r
/**\r
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event\r
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.\r
 */\r
export declare const modalOutsideClick: unique symbol;\r
\r
/**\r
 * Properties of the modal widget.\r
 */\r
export declare interface ModalProps extends ModalCommonPropsAndState {\r
    /**\r
     * Whether the modal and its backdrop (if present) should be animated when shown or hidden.\r
     */\r
    animation: boolean;\r
    /**\r
     * Whether a backdrop should be created behind the modal.\r
     */\r
    backdrop: boolean;\r
    /**\r
     * The transition to use for the backdrop behind the modal (if present).\r
     */\r
    backdropTransition: TransitionFn;\r
    /**\r
     * Whether the modal should be closed when clicking on the viewport outside the modal.\r
     */\r
    closeOnOutsideClick: boolean;\r
    /**\r
     * The transition to use for the modal.\r
     */\r
    modalTransition: TransitionFn;\r
    /**\r
     * Event to be triggered when the modal is about to be closed (i.e. the {@link ModalApi.close|close} method was called).\r
     *\r
     * @param event - event giving access to the argument given to the {@link ModalApi.close|close} method and allowing\r
     * to cancel the close process.\r
     */\r
    onBeforeClose: (event: ModalBeforeCloseEvent) => void;\r
    /**\r
     * Event to be triggered when the visible property changes.\r
     *\r
     * @param visible - new value of the visible propery\r
     */\r
    onVisibleChange: (visible: boolean) => void;\r
    /**\r
     * Event to be triggered when the transition is completed and the modal is not visible.\r
     */\r
    onHidden: () => void;\r
    /**\r
     * Event to be triggered when the transition is completed and the modal is visible.\r
     */\r
    onShown: () => void;\r
}\r
\r
/**\r
 * State of the modal widget.\r
 */\r
export declare interface ModalState extends ModalCommonPropsAndState {\r
    /**\r
     * Whether the backdrop is fully hidden. This can be true either because {@link ModalProps.backdrop|backdrop} is false or\r
     * because {@link ModalCommonPropsAndState.visible|visible} is false and there is no current transition.\r
     */\r
    backdropHidden: boolean;\r
    /**\r
     * Whether the modal is fully hidden.\r
     */\r
    hidden: boolean;\r
    /**\r
     * Whether there is an active transition to either display or hide the modal.\r
     */\r
    transitioning: boolean;\r
    /**\r
     * DOM element of the modal.\r
     */\r
    modalElement: HTMLElement | null;\r
}\r
\r
/**\r
 * Modal widget.\r
 */\r
export declare type ModalWidget = Widget<ModalProps, ModalState, ModalApi, ModalActions, ModalDirectives>;\r
\r
export declare function ngBootstrapPagination(maxSize: number, rotate: boolean, ellipses: boolean): (page: number, pageCount: number) => number[];\r
\r
export declare const noAnimation: TransitionFn;\r
\r
export declare type NormalizeValue<T, U = T> = (value: U) => T | typeof INVALID_VALUE;\r
\r
export declare interface PaginationActions {\r
    /**\r
     * To "go" to a specific page\r
     * @param page - The page number to select\r
     */\r
    select(page: number): void;\r
    /**\r
     * To "go" to the first page\r
     */\r
    first(): void;\r
    /**\r
     * To "go" to the previous page\r
     */\r
    previous(): void;\r
    /**\r
     * To "go" to the next page\r
     */\r
    next(): void;\r
    /**\r
     * To "go" to the last page\r
     */\r
    last(): void;\r
}\r
\r
export declare interface PaginationApi {\r
    /**\r
     * If the page number is -1 return true\r
     * @param page - The page number to check\r
     */\r
    isEllipsis(page: number): boolean;\r
}\r
\r
export declare interface PaginationCommonPropsAndState {\r
    /**\r
     * The current page.\r
     *\r
     * Page numbers start with \`1\`.\r
     * @defaultValue 1\r
     */\r
    page: number;\r
    /**\r
     * The pagination display size.\r
     *\r
     * Bootstrap currently supports small and large sizes.\r
     * @defaultValue null\r
     */\r
    size: 'sm' | 'lg' | null;\r
    /**\r
     * The label for the nav element.\r
     *\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Page navigation'\r
     */\r
    ariaLabel: string;\r
    /**\r
     * The label for the "active" page.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '(current)'\r
     */\r
    activeLabel: string;\r
    /**\r
     * The label for the "First" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for first page'\r
     */\r
    ariaFirstLabel: string;\r
    /**\r
     * The label for the "Previous" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for previous page'\r
     */\r
    ariaPreviousLabel: string;\r
    /**\r
     * The label for the "Next" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for next page'\r
     */\r
    ariaNextLabel: string;\r
    /**\r
     * The label for the "Last" page button.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue 'Action link for last page'\r
     */\r
    ariaLastLabel: string;\r
    /**\r
     * If \`true\`, pagination links will be disabled.\r
     * @defaultValue false\r
     */\r
    disabled: boolean;\r
    /**\r
     * If \`true\`, the "Next" and "Previous" page links are shown.\r
     * @defaultValue true\r
     */\r
    directionLinks: boolean;\r
    /**\r
     * If \`true\`, the "First" and "Last" page links are shown.\r
     * @defaultValue false\r
     */\r
    boundaryLinks: boolean;\r
    /**\r
     * An input to add a custom class to the UL\r
     * @defaultValue ''\r
     */\r
    className: string;\r
    /**\r
     * The template to use for the ellipsis slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '…'\r
     */\r
    slotEllipsis: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the first slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '«'\r
     */\r
    slotFirst: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the previous slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '‹'\r
     */\r
    slotPrevious: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the next slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '›'\r
     */\r
    slotNext: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the last slot\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @defaultValue '»'\r
     */\r
    slotLast: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the pages slot\r
     * To use to customize the pages view\r
     * override any configuration parameters provided for this\r
     */\r
    slotPages: SlotContent<PaginationContext>;\r
    /**\r
     * The template to use for the number slot\r
     * override any configuration parameters provided for this\r
     * for I18n, we suggest to use the global configuration\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({displayedPage}) => \`\${displayedPage}\`\r
     * \`\`\`\r
     * @param displayedPage - The current page number\r
     */\r
    slotNumberLabel: SlotContent<PaginationNumberContext>;\r
}\r
\r
/**\r
 * A type for the slot context of the pagination widget\r
 */\r
export declare type PaginationContext = WidgetSlotContext<PaginationWidget>;\r
\r
/**\r
 * A type for the slot context of the pagination widget when the slot is the number label\r
 */\r
export declare interface PaginationNumberContext extends PaginationContext {\r
    /**\r
     * Displayed page\r
     */\r
    displayedPage: number;\r
}\r
\r
export declare interface PaginationProps extends PaginationCommonPropsAndState {\r
    /**\r
     * The number of items in your paginated collection.\r
     *\r
     * Note, that this is not the number of pages. Page numbers are calculated dynamically based on\r
     * \`collectionSize\` and \`pageSize\`.\r
     *\r
     * Ex. if you have 100 items in your collection and displaying 20 items per page, you'll end up with 5 pages.\r
     *\r
     * Whatever the collectionSize the page number is of minimum 1.\r
     * @defaultValue 0\r
     */\r
    collectionSize: number;\r
    /**\r
     * The number of items per page.\r
     * @defaultValue 10\r
     * @remarks min value is 1\r
     */\r
    pageSize: number;\r
    /**\r
     * An event fired when the page is changed.\r
     *\r
     * Event payload is the number of the newly selected page.\r
     *\r
     * Page numbers start with \`1\`.\r
     * @defaultValue\r
     * \`\`\`ts\r
     * () => {}\r
     * \`\`\`\r
     */\r
    onPageChange: (page: number) => void;\r
    /**\r
     * pagesFactory returns a function computing the array of pages to be displayed\r
     * as number (-1 are treated as ellipsis).\r
     * Use Page slot to customize the pages view and not this\r
     * @param page - The current page number\r
     * @param pageCount - The total number of pages\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({page, pageCount}) => {\r
     *  const pages: number[] = [];\r
     *	for (let i = 1; i <= pageCount; i++) {\r
     *		pages.push(i);\r
     * 	}\r
     * 	return pages;\r
     * }\r
     * \`\`\`\r
     */\r
    pagesFactory: (page: number, pageCount: number) => number[];\r
    /**\r
     * Provide the label for each "Page" page button.\r
     * This is used for accessibility purposes.\r
     * for I18n, we suggest to use the global configuration\r
     * override any configuration parameters provided for this\r
     * @param processPage - The current page number\r
     * @param pageCount - The total number of pages\r
     * @defaultValue\r
     * \`\`\`ts\r
     * ({processPage, pageCount}) => \`Page \${processPage} of \${pageCount}\`\r
     * \`\`\`\r
     */\r
    ariaPageLabel: (processPage: number, pageCount: number) => string;\r
}\r
\r
export declare interface PaginationState extends PaginationCommonPropsAndState {\r
    /**\r
     * The number of pages.\r
     */\r
    pageCount: number;\r
    /**\r
     * The current pages, the number in the Array is the number of the page.\r
     */\r
    pages: number[];\r
    /**\r
     * true if the previous link need to be disabled\r
     */\r
    previousDisabled: boolean;\r
    /**\r
     * true if the next link need to be disabled\r
     */\r
    nextDisabled: boolean;\r
    /**\r
     * The label for each "Page" page link.\r
     */\r
    pagesLabel: string[];\r
}\r
\r
export declare type PaginationWidget = Widget<PaginationProps, PaginationState, PaginationApi, PaginationActions>;\r
\r
export declare type Partial2Levels<T> = Partial<{\r
    [Level1 in keyof T]: Partial<T[Level1]>;\r
}>;\r
\r
export declare const portal: Directive<PortalDirectiveArg>;\r
\r
export declare type PortalDirectiveArg = {\r
    container?: HTMLElement | null | undefined;\r
    insertBefore?: HTMLElement | null | undefined;\r
} | null | undefined;\r
\r
export declare type PropsConfig<T extends object> = ReadableSignal<Partial<T>> | ValuesOrStores<T>;\r
\r
export declare interface RatingActions {\r
    /**\r
     * Method to be used when a star is clicked.\r
     *\r
     * To be used in the onclick event of a star\r
     * @param index - Star index, starting from 1\r
     */\r
    click(index: number): void;\r
    /**\r
     * Method to be used when the mouse enter in a star.\r
     *\r
     * To be used in the onmouseenter of a star\r
     * @param index - Star index, starting from 1\r
     */\r
    hover(index: number): void;\r
    /**\r
     * Method to be used when the mouse leave the widget.\r
     *\r
     * To be used in the onmouseleave of the rating container\r
     */\r
    leave(): void;\r
    /**\r
     * Method to be used to handle the keyboard.\r
     *\r
     * To be used in the onkeydown of the rating container\r
     */\r
    handleKey(event: KeyboardEvent): void;\r
}\r
\r
export declare interface RatingCommonPropsAndState {\r
    /**\r
     * The current rating. Could be a decimal value like \`3.75\`.\r
     */\r
    rating: number;\r
    /**\r
     * The maximum rating that can be given.\r
     */\r
    maxRating: number;\r
    /**\r
     * If \`true\`, the rating is disabled.\r
     */\r
    disabled: boolean;\r
    /**\r
     * If \`true\`, the rating can't be changed.\r
     */\r
    readonly: boolean;\r
    /**\r
     * Define if the rating can be reset.\r
     *\r
     * If set to true, the user can 'unset' the rating value by cliking on the current rating value.\r
     */\r
    resettable: boolean;\r
    /**\r
     * Allows setting a custom rating tabindex.\r
     * If the component is disabled, \`tabindex\` will still be set to \`-1\`.\r
     */\r
    tabindex: number;\r
    /**\r
     * Classname to be applied on the rating container\r
     */\r
    className: string;\r
    /**\r
     * The template to override the way each star is displayed.\r
     */\r
    slotStar: SlotContent<StarContext>;\r
    /**\r
     * The aria label\r
     */\r
    ariaLabel: string;\r
    /**\r
     * The aria labelled by\r
     */\r
    ariaLabelledBy: string;\r
}\r
\r
export declare interface RatingProps extends RatingCommonPropsAndState {\r
    /**\r
     * Return the value for the 'aria-value' attribute.\r
     * @param rating - Current rating value.\r
     * @param maxRating - maxRating value.\r
     */\r
    ariaValueTextFn: (rating: number, maxRating: number) => string;\r
    /**\r
     * An event emitted when the rating is changed.\r
     *\r
     * Event payload is equal to the newly selected rating.\r
     */\r
    onRatingChange: (rating: number) => void;\r
    /**\r
     * An event emitted when the user is hovering over a given rating.\r
     *\r
     * Event payload is equal to the rating being hovered over.\r
     */\r
    onHover: (rating: number) => void;\r
    /**\r
     * An event emitted when the user stops hovering over a given rating.\r
     *\r
     * Event payload is equal to the rating of the last item being hovered over.\r
     */\r
    onLeave: (rating: number) => void;\r
}\r
\r
export declare interface RatingState extends RatingCommonPropsAndState {\r
    ariaValueText: string;\r
    visibleRating: number;\r
    isInteractive: boolean;\r
    stars: StarContext[];\r
}\r
\r
export declare type RatingWidget = Widget<RatingProps, RatingState, object, RatingActions>;\r
\r
/**\r
 * Utility to create a store that contains an array of items.\r
 * @returns a store containing an array of items.\r
 */\r
export declare const registrationArray: <T>() => ReadableSignal<T[]> & {\r
    register: (element: T) => () => void;\r
};\r
\r
export declare interface SelectActions {\r
    /**\r
     * Method to be plugged to on the 'input' event. The input text will be used as the filter text.\r
     */\r
    onInput: (e: {\r
        target: any;\r
    }) => void;\r
    /**\r
     * Method to be plugged to on an keydown event, in order to control the keyboard interactions with the highlighted item.\r
     * It manages arrow keys to move the highlighted item, or enter to toggle the item.\r
     */\r
    onInputKeydown: (e: any) => void;\r
}\r
\r
export declare interface SelectApi<Item> {\r
    /**\r
     * Clear all the selected items\r
     */\r
    clear(): void;\r
    /**\r
     * Clear the filter text\r
     */\r
    clearText(): void;\r
    /**\r
     * Highlight the given item, if there is a corresponding match among the visible list\r
     */\r
    highlight(item: Item): void;\r
    /**\r
     * Highlight the first item among the visible list\r
     */\r
    highlightFirst(): void;\r
    /**\r
     * Highlight the previous item among the visible list\r
     * Loop to the last item if needed\r
     */\r
    highlightPrevious(): void;\r
    /**\r
     * Highlight the next item among the visible list.\r
     * Loop to the first item if needed\r
     */\r
    highlightNext(): void;\r
    /**\r
     * Highlight the last item among the visible list\r
     */\r
    highlightLast(): void;\r
    /**\r
     * Focus the provided item among the selected list.\r
     * The focus feature is designed to know what item must be focused in the UI, i.e. among the badge elements.\r
     */\r
    focus(item: Item): void;\r
    focusFirst(): void;\r
    focusPrevious(): void;\r
    focusNext(): void;\r
    focusLast(): void;\r
    /**\r
     * Select the provided item.\r
     * The selected list is used to\r
     */\r
    select(item: Item): void;\r
    unselect(item: Item): void;\r
    toggleItem(item: Item, selected?: boolean): void;\r
    open(): void;\r
    close(): void;\r
    /**\r
     * Toggle the dropdown menu\r
     * @param isOpen - If specified, set the menu in the defined state.\r
     */\r
    toggle(isOpen?: boolean): void;\r
}\r
\r
export declare interface SelectCommonPropsAndState<Item> {\r
    className: string;\r
    /**\r
     * List of selected items\r
     */\r
    selected: Item[];\r
    /**\r
     * Filtered text to be display in the filter input\r
     */\r
    filterText: string;\r
    /**\r
     * true if the select is disabled\r
     */\r
    disabled: boolean;\r
    /**\r
     * true if the select is open\r
     */\r
    opened: boolean;\r
    /**\r
     * true if a loading process is being done\r
     */\r
    loading: boolean;\r
}\r
\r
export declare interface SelectDirectives {\r
    /**\r
     * Directive to be used in the input group and the menu containers\r
     */\r
    hasFocusDirective: HasFocus['directive'];\r
}\r
\r
export declare interface SelectProps<T> extends SelectCommonPropsAndState<T> {\r
    /**\r
     * List of available items for the dropdown\r
     */\r
    items: T[];\r
    /**\r
     * Custom function to filter an item.\r
     * By default, item is considered as a string, and the function returns true if the text is found\r
     */\r
    matchFn(item: T, text: string): boolean;\r
    /**\r
     * Custom function to get the id of an item\r
     * By default, the item is returned\r
     */\r
    itemId(item: T): string;\r
    /**\r
     * Callback called when the text filter change\r
     * @param text - Filtered text\r
     */\r
    onFilterTextChange?(text: string): void;\r
}\r
\r
export declare interface SelectState<Item> extends SelectCommonPropsAndState<Item> {\r
    /**\r
     * List of visible items displayed in the menu\r
     */\r
    visible: ItemCtx<Item>[];\r
    /**\r
     * Highlighted item context.\r
     * It is designed to define the highlighted item in the dropdown menu\r
     */\r
    highlighted: ItemCtx<Item> | undefined;\r
}\r
\r
export declare type SelectWidget<Item> = Widget<SelectProps<Item>, SelectState<Item>, SelectApi<Item>, SelectActions, SelectDirectives>;\r
\r
export declare interface SimpleClassTransitionConfig {\r
    animationPendingClasses?: string[];\r
    animationPendingShowClasses?: string[];\r
    animationPendingHideClasses?: string[];\r
    showClasses?: string[];\r
    hideClasses?: string[];\r
}\r
\r
export declare interface SimpleClassTransitionContext {\r
    started?: boolean;\r
}\r
\r
/**\r
 * sliblingsInert directive\r
 * When used on an element, all siblings of the element and of its ancestors will be inert with the inert attribute.\r
 * In case it is used on multiple elements, only the last one has an effect (the directive keeps a stack of elements\r
 * on which it is used, so when the last one disappears, the previous one in the list becomes the one in effect).\r
 */\r
export declare const sliblingsInert: Directive<void>;\r
\r
export declare type SlotContent<Props extends object = object> = undefined | null | string | ((props: Props) => string);\r
\r
export declare interface StarContext {\r
    fill: number;\r
    index: number;\r
}\r
\r
export declare const stateStores: <A extends {\r
    [x: \`\${string}$\`]: ReadableSignal<any>;\r
}>(inputStores: A) => {\r
    state$: ReadableSignal<ToState<A>>;\r
    stores: { [key in \`\${string}$\` & keyof A]: ReadableSignal<ValueOfStore<A[key]>>; };\r
};\r
\r
export declare const testToNormalizeValue: <T>(filter: (value: T) => boolean) => (value: T) => typeof INVALID_VALUE | T;\r
\r
export declare const toSlotContextWidget: <W extends Widget<object, object, object, object, object>>(w: W) => Pick<W, "actions" | "api" | "directives" | "state$" | "stores">;\r
\r
export declare type ToState<S extends {\r
    [K in keyof S & \`\${string}$\`]: ReadableSignal<any>;\r
}> = {\r
    [K in keyof S & \`\${string}$\` as WithoutDollar<K>]: ValueOfStore<S[K]>;\r
};\r
\r
export declare type ToWritableSignal<P, V = P> = {\r
    [K in keyof P & keyof V as \`\${K & string}$\`]-?: WritableSignal<P[K], V[K] | undefined>;\r
};\r
\r
export declare interface TransitionApi {\r
    /**\r
     * Runs the transition to show the element. It is equivalent to {@link TransitionApi.toggle | toggle} with true as the first parameter.\r
     *\r
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.\r
     *\r
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was\r
     * already running, the promise never completes.\r
     */\r
    show: (animation?: boolean) => Promise<void>;\r
    /**\r
     * Runs the transition to hide the element. It is equivalent to {@link TransitionApi.toggle | toggle} with false as the first parameter.\r
     *\r
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.\r
     *\r
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was\r
     * already running, the promise never completes.\r
     */\r
    hide: (animation?: boolean) => Promise<void>;\r
    /**\r
     * Runs the transition to show or hide the element depending on the first parameter.\r
     *\r
     * @param visible - whether the element should be made visible or not. If the parameter is not defined, the opposite of the current {@link TransitionProps.visible | visible } property is used.\r
     * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.\r
     *\r
     * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was\r
     * already running, the promise never completes.\r
     */\r
    toggle: (visible?: boolean, animation?: boolean) => Promise<void>;\r
}\r
\r
export declare interface TransitionDirectives {\r
    directive: Directive<void | Partial<TransitionProps>>;\r
}\r
\r
/**\r
 * Function that implements a transition.\r
 */\r
export declare type TransitionFn = (\r
/**\r
 * Element on which the transition should be applied.\r
 */\r
element: HTMLElement, \r
/**\r
 * Whether the element should be shown or hidden.\r
 */\r
direction: 'show' | 'hide', \r
/**\r
 * Whether the transition should be animated.\r
 */\r
animation: boolean, \r
/**\r
 * Signal allowing to stop the transition while running.\r
 */\r
signal: AbortSignal, \r
/**\r
 * Context of the current transition. It is reused between calls if the previous transition was stopped while running on the same element.\r
 */\r
context: object) => Promise<void>;\r
\r
export declare interface TransitionProps {\r
    /**\r
     * Transition to be called.\r
     */\r
    transition: TransitionFn;\r
    /**\r
     * Whether the element should be visible when the transition is completed.\r
     */\r
    visible: boolean;\r
    animation: boolean;\r
    /**\r
     * If the element is initially visible, whether the element should be animated when first displayed.\r
     */\r
    animationOnInit: boolean;\r
    /**\r
     * Whether initialization is finished. It determines which setting between {@link TransitionProps.animation}\r
     * and {@link TransitionProps.animationOnInit} is used to enable or disable animations.\r
     * @remarks\r
     * If it is \`true\`, initialization is considered finished, and {@link TransitionProps.animationOnInit} is no longer used.\r
     * Otherwise, initialization is considered unfinished and {@link TransitionProps.animationOnInit} is used instead of {@link TransitionProps.animation}.\r
     * If it is \`null\`, it will be set to \`true\` automatically when the directive is called with a DOM element.\r
     * If it is \`false\`, it will not be updated automatically.\r
     */\r
    initDone: boolean | null;\r
    /**\r
     * Function to be called when the transition is completed and the element is visible.\r
     */\r
    onShown: () => void;\r
    /**\r
     * Function to be called when the transition is completed and the element is not visible.\r
     */\r
    onHidden: () => void;\r
    /**\r
     * Function to be called when the visible property changes.\r
     *\r
     * @param visible - new value of the visible propery\r
     */\r
    onVisibleChange: (visible: boolean) => void;\r
}\r
\r
/**\r
 * Transition state.\r
 */\r
export declare interface TransitionState {\r
    /**\r
     * Whether the element is visible or will be visible when the transition is completed.\r
     */\r
    visible: boolean;\r
    /**\r
     * Whether the element to be animated is present in the DOM.\r
     */\r
    elementPresent: boolean;\r
    /**\r
     * Reference to the DOM element.\r
     */\r
    element: HTMLElement | null;\r
    /**\r
     * Whether a transition is currently running.\r
     */\r
    transitioning: boolean;\r
    /**\r
     * Equals: {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}\r
     */\r
    shown: boolean;\r
    /**\r
     * Equals: ! {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}\r
     */\r
    hidden: boolean;\r
}\r
\r
export declare type TransitionWidget = Widget<TransitionProps, TransitionState, TransitionApi, object, TransitionDirectives>;\r
\r
export declare const typeBoolean: WritableWithDefaultOptions<boolean>;\r
\r
export declare const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any>;\r
\r
export declare const typeNumber: WritableWithDefaultOptions<number>;\r
\r
export declare const typeString: WritableWithDefaultOptions<string, any>;\r
\r
export declare type ValueOfStore<S extends ReadableSignal<any>> = S extends ReadableSignal<infer U> ? U : never;\r
\r
export declare type ValuesOrStores<T extends object> = {\r
    [K in keyof T]?: ReadableSignal<T[K]> | T[K];\r
};\r
\r
export declare interface Widget<Props extends object = object, State extends object = object, Api extends object = object, Actions extends object = object, Directives extends object = object> {\r
    state$: ReadableSignal<State>;\r
    stores: {\r
        [K in keyof State as \`\${K & string}$\`]: ReadableSignal<State[K]>;\r
    };\r
    /**\r
     * Modify the parameter values, and recalculate the stores accordingly\r
     */\r
    patch(parameters: Partial<Props>): void;\r
    directives: Directives;\r
    actions: Actions;\r
    api: Api;\r
}\r
\r
export declare type WidgetFactory<W extends Widget> = (props?: PropsConfig<WidgetProps<W>>) => W;\r
\r
export declare type WidgetProps<T extends {\r
    patch: (arg: any) => void;\r
}> = T extends {\r
    patch: (arg: Partial<infer U extends object>) => void;\r
} ? U : never;\r
\r
export declare interface WidgetsConfig {\r
    pagination: PaginationProps;\r
    rating: RatingProps;\r
    select: SelectProps<any>;\r
    modal: ModalProps;\r
    alert: AlertProps;\r
}\r
\r
export declare type WidgetsConfigStore<T> = WritableSignal<Partial2Levels<T>> & {\r
    own$: WritableSignal<Partial2Levels<T>>;\r
    parent$: undefined | WritableSignal<Partial2Levels<T>>;\r
    adaptedParent$: undefined | ReadableSignal<Partial2Levels<T>>;\r
};\r
\r
export declare interface WidgetSlotContext<W extends Widget> {\r
    state: WidgetState<W>;\r
    widget: Pick<W, 'actions' | 'api' | 'directives' | 'state$' | 'stores'>;\r
}\r
\r
export declare type WidgetState<T extends {\r
    state$: SubscribableStore<any>;\r
}> = T extends {\r
    state$: SubscribableStore<infer U extends object>;\r
} ? U : never;\r
\r
export declare type WithoutDollar<S extends \`\${string}$\`> = S extends \`\${infer U}$\` ? U : never;\r
\r
/**\r
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.\r
 * @param defConfig - object containing, for each property, a default value to use in case \`config\` does not provide the suitable default\r
 * value for that property\r
 * @param config - either a store of objects containing, for each property of \`defConfig\`, the default value or an object containing\r
 * for each property of \`defConfig\` either a store containing the default value or the default value itself\r
 * @param options - object containing, for each property of \`defConfig\`, an optional object with the following optional functions: normalizeValue and equal\r
 * @returns an array with two items: the first one containing the writables (returned by {@link writablesWithDefault}),\r
 * and the second one containing the patch function (returned by {@link createPatch})\r
 *\r
 * @example With a store\r
 * \`\`\`ts\r
 * const defConfig = {propA: 1};\r
 * const validation = {propA: {normalizeValue: value => +value}};\r
 * const config$ = writable({propA: 5});\r
 * const [{propA$}, patch] = writablesForProps(defConfig, config$, validation);\r
 * \`\`\`\r
 *\r
 * @example With an object containing a value and a store\r
 * \`\`\`ts\r
 * const defConfig = {propA: 1, propB: 2};\r
 * const validation = {propA: {normalizeValue: value => +value}};\r
 * const config = {propA: 5, propB: writable(3)};\r
 * const [{propA$, propB$}, patch] = writablesForProps(defConfig, config, validation);\r
 * \`\`\`\r
 */\r
export declare const writablesForProps: <T extends object, U extends object = T>(defConfig: T, config?: PropsConfig<U> | undefined, options?: { [K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]> | undefined; } | undefined) => [ToWritableSignal<T, U>, <U_1 extends Partial<T>>(storesValues?: void | U_1 | undefined) => void];\r
\r
/**\r
 * Returns an object containing, for each property of \`defConfig\`, a corresponding writable with the normalization and default value logic\r
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in \`defConfig\`,\r
 * with the exta \`$\` suffix (showing that they are stores).\r
 *\r
 * @param defConfig - object containing, for each property, a default value to use in case \`config$\` does not provide the suitable default\r
 * value for that property\r
 * @param config - either a store of objects containing, for each property of \`defConfig\`, the default value or an object containing\r
 * for each property of \`defConfig\` either a store containing the default value or the default value itself\r
 * @param options - object containing, for each property of \`defConfig\`, an optional object with the following optional functions: normalizeValue and equal\r
 * @returns an object containing writables\r
 *\r
 * @example With a store\r
 * \`\`\`ts\r
 * const defConfig = {propA: 1};\r
 * const validation = {propA: {normalizeValue: value => +value}};\r
 * const config$ = writable({propA: 5});\r
 * const {propA$} = writablesWithDefault(defConfig, config$, validation);\r
 * \`\`\`\r
 *\r
 * @example With an object containing a value and a store\r
 * \`\`\`ts\r
 * const defConfig = {propA: 1, propB: 2};\r
 * const validation = {propA: {normalizeValue: value => +value}};\r
 * const config = {propA: 5, propB: writable(3)};\r
 * const {propA$, propB$} = writablesWithDefault(defConfig, config, validation);\r
 * \`\`\`\r
 */\r
export declare const writablesWithDefault: <T extends object, U extends object = T>(defConfig: T, config?: PropsConfig<U> | undefined, options?: ConfigValidator<T, U> | undefined) => ToWritableSignal<T, U>;\r
\r
/**\r
 * Returns a writable store whose value is either its own value (when it is not undefined) or a default value\r
 * that comes either from the \`config$\` store (when it is not undefined) or from \`defValue\`.\r
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming\r
 * either from the \`config$\` store or from the \`set\` or \`update\` functions. If a value is invalid (i.e. normalizeValue\r
 * returns the \`invalidValue\` symbol), an error is logged on the console and it is either not set (if it comes from the\r
 * \`set\` or \`update\` functions), or the \`defValue\` is used instead (if the invalid value comes from the \`config$\` store).\r
 *\r
 * @param defValue - Default value used when both the own value and the config$ value are undefined.\r
 * @param config$ - Default value used when the own value is undefined.\r
 * @param options - Object which can contain the following optional functions: normalizeValue and equal\r
 * @returns a writable store with the extra default value and normalization logic described above\r
 */\r
export declare function writableWithDefault<T, U = T>(defValue: T, config$?: ReadableSignal<U | undefined>, { normalizeValue, equal }?: WritableWithDefaultOptions<T, U>): WritableSignal<T, U | undefined>;\r
\r
export declare interface WritableWithDefaultOptions<T, U = T> {\r
    normalizeValue?: NormalizeValue<T, U>;\r
    equal?: StoreOptions<T>['equal'];\r
}\r
\r
export { }\r
`;export{e as default};
