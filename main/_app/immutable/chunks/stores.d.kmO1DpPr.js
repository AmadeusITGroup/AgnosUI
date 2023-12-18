const e=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
export * from '@agnos-ui/core/utils/stores';
export declare function useObservable<T>(store$: ReadableSignal<T>): T;
export declare const usePropsAsStore: <T extends object>(props?: Partial<T> | undefined) => ReadableSignal<Partial<T>>;
`;export{e as default};
