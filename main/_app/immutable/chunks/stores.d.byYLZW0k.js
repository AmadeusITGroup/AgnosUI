const a=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Signal } from '@angular/core';
export * from '@agnos-ui/core/utils/stores';
/**
 * Convert a tansu readable signal into an Angular signal.
 *
 * @param tansuSignal - a tansu readable signal
 * @returns an angular signal
 *
 * @remarks
 * Note that as it uses Angular's \`inject\`, this can only be called at component construction time.
 */
export declare const toAngularSignal: <T>(tansuSignal: ReadableSignal<T>) => Signal<T>;
`;export{a as default};
