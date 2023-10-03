const e=`import type { Directive, Widget, WidgetProps, WidgetState } from '@agnos-ui/core';
import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { RefCallback } from 'react';
export declare function useWidget<Factory extends (...arg: any[]) => Widget>(createWidget: Factory, props?: Partial<WidgetProps<ReturnType<Factory>>>, ...initProps: Parameters<Factory>): [WidgetState<ReturnType<Factory>>, ReturnType<Factory>];
export declare function useObservable<T>(store$: ReadableSignal<T>): T;
export declare function useDirective(directive: Directive<void>): RefCallback<HTMLElement>;
export declare function useDirective<T>(directive: Directive<T>, args: T): RefCallback<HTMLElement>;
export declare const usePropsAsStore: <T extends object>(props?: Partial<T> | undefined) => ReadableSignal<Partial<T>>;
`;export{e as default};
