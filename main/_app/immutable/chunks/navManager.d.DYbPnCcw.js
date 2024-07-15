const e=`export type NavManager = ReturnType<typeof createNavManager>;
/**
 * Returns the key name given the keyboard event. The key name is built using event.key (such as ArrowLeft, PageDown...),
 * prefixed with the modifiers. If present, modifiers are always in the same order: Meta+Ctrl+Alt+Shift+...
 * @param event - keyboard event
 * @returns the name of the key, including modifiers
 */
export declare const getKeyName: (event: KeyboardEvent) => string;
/**
 * Returns true if the keyboard event is an ArrowLeft, ArrowRight, Home or End key press that should make the cursor move inside
 * the input and false otherwise (i.e. the key is not ArrowLeft, ArrowRight, Home or End key, or that would not make the cursor move
 * because it is already at one end of the input)
 * @param event - keyboard event
 * @returns true if the keyboard event is an ArrowLeft, ArrowRight, Home or End key press that should make the cursor move inside
 * the input and false otherwise.
 */
export declare const isInternalInputNavigation: (event: KeyboardEvent) => boolean;
/**
 * Type of a key handler of the navigation manager.
 * A key handler receives an object as its parameter, with the following properties:
 * - event: key event
 * - directiveElement: DOM element which has the navigation manager directive
 * - navManager: navigation manager instance
 */
export type NavManagerKeyHandler<T = any> = (info: {
    directiveElement: HTMLElement;
    event: Event;
    navManager: NavManager;
    context?: T;
}) => void;
/**
 * Type of the parameter of the navigation manager directive.
 */
export interface NavManagerItemConfig<T = any> {
    /**
     * Map of key handlers.
     * The key in the map should match the result of calling {@link getKeyName} on the key event (for example "ArrowLeft" or "Ctrl+PageDown").
     * The value in the map is the corresponding key handler.
     */
    keys?: Record<string, NavManagerKeyHandler<T>>;
    /**
     * Function returning DOM elements to include in the navigation manager.
     * It receives as a parameter the DOM element on which the navigation manager directive is used.
     * If not specified, the default selector function only returns the element on which the navigation manager directive is used.
     */
    selector?: (directiveElement: HTMLElement) => Iterable<HTMLElement>;
    /**
     *
     */
    context?: T;
}
/**
 * Returns a new instance of the navigation manager.
 *
 * The navigation manager simplifies keyboard navigation for a set of DOM elements.
 * It provides a directive to use on some DOM elements, both to add the keydown event handler and to specify which elements should be managed
 * (either by directly putting the directive on those elements, or by putting the directive on a parent element and
 * specifying which child elements should be included through a selector function).
 *
 * It provides some utilities to move the focus between those elements (focusFirst/focusLast, focusLeft/focusRight, focusPrevious/focusNext).
 *
 * @returns a new instance of the navigation manager
 */
export declare const createNavManager: () => {
    elementsInDomOrder$: import("@amadeus-it-group/tansu").ReadableSignal<HTMLElement[]>;
    directive: <T = any>(node: import("..").SSRHTMLElement, args: NavManagerItemConfig<T>) => void | {
        update?: (args: NavManagerItemConfig<T>) => void;
        destroy?: () => void;
    };
    focusIndex: (index: number, moveDirection?: -1 | 0 | 1) => HTMLElement | null;
    focusPrevious: ({ event, referenceElement, }?: {
        event?: Event;
        referenceElement?: HTMLElement | null;
    }) => HTMLElement | null;
    focusNext: ({ event, referenceElement, }?: {
        event?: Event;
        referenceElement?: HTMLElement | null;
    }) => HTMLElement | null;
    focusFirst: ({ event }?: {
        event?: Event;
    }) => HTMLElement | null;
    focusFirstLeft: (args_0?: {
        event?: Event;
    } | undefined) => HTMLElement | null;
    focusFirstRight: (args_0?: {
        event?: Event;
    } | undefined) => HTMLElement | null;
    focusLast: ({ event }?: {
        event?: Event;
    }) => HTMLElement | null;
    focusLeft: (args_0?: {
        event?: Event;
        referenceElement?: HTMLElement | null;
    } | undefined) => HTMLElement | null;
    focusRight: (args_0?: {
        event?: Event;
        referenceElement?: HTMLElement | null;
    } | undefined) => HTMLElement | null;
    refreshElements: (now?: boolean) => void;
};
`;export{e as default};
