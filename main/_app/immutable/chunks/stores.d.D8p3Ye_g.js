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
 * Hook to create a proxy object that subscribes to observable stores and triggers re-renders on updates.
 *
 * @template State - The shape of the state object.
 * @param stores - An object where keys are suffixed with \`$\` and values are readable signals.
 * @returns - A proxy object that reflects the current state of the observables.
 *
 */
export declare function useObservablesProxy<State>(stores: {
    [K in keyof State & string as \`\${K}$\`]: ReadableSignal<State[K]>;
}): State;
/**
 * Turn react props into readable stores.
 *
 * @param props - the props
 * @returns the readable stores
 */
export declare const usePropsAsStore: <T extends object>(props?: Partial<T>) => ReadableSignal<Partial<T>>;
`;export{e as default};
