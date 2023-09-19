const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
export declare const promiseFromStore: <T>(store: ReadableSignal<T>, condition?: (value: T) => boolean) => {
    promise: Promise<T>;
    unsubscribe(): void;
};
export declare const promiseFromEvent: (element: EventTarget, event: string) => {
    promise: Promise<Event>;
    unsubscribe(): void;
};
export declare const promiseFromTimeout: (delay: number) => {
    promise: Promise<void>;
    unsubscribe(): void;
};
/**
 * Launch a reflow using a call to the provided html element getBoudingClientRect
 * @param element the html element
 */
export declare function reflow(element?: HTMLElement): void;
export declare const addClasses: (element: HTMLElement, classes?: string[]) => void;
export declare const removeClasses: (element: HTMLElement, classes?: string[]) => void;
`;export{e as default};
