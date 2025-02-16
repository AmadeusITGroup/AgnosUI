const n=`import type { ReadableSignal } from '@amadeus-it-group/tansu';
import type { Signal } from '@angular/core';
export * from '@agnos-ui/core/utils/stores';
/**
 * Converts a Tansu \`ReadableSignal\` to an Angular \`Signal\`.
 *
 * This function wraps the provided Tansu signal in an Angular signal, ensuring that updates
 * are properly handled within Angular's zone. It subscribes to the Tansu signal and updates
 * the Angular signal with the received values. The equality function for the Angular signal
 * is set to always return false, ensuring that every new value from the Tansu signal triggers
 * an update.
 *
 * @template T - The type of the value emitted by the signals.
 * @param tansuSignal - The Tansu signal to convert.
 * @returns - The resulting Angular signal.
 */
export declare const toAngularSignal: <T>(tansuSignal: ReadableSignal<T>) => Signal<T>;
`;export{n as default};
