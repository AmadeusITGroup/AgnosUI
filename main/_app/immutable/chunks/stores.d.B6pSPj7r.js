const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
export * from '@agnos-ui/core/utils/stores';
/**
 * Observe a readable store inside of a react component.
 *
 * @param store$ - the readable store
 * @returns the observed value of the store
 */
export declare function useObservable<T>(store$: ReadableSignal<T>): T;
/**
 * Turn react props into readable stores.
 *
 * @param props - the props
 * @returns the readable stores
 */
export declare const usePropsAsStore: <T extends object>(props?: Partial<T> | undefined) => ReadableSignal<Partial<T>>;
`;export{e as default};
