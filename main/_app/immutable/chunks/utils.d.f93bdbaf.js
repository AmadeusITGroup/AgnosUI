const e=`import type { SubscribableStore } from '@amadeus-it-group/tansu';
import type { SimpleChanges } from '@angular/core';
export declare function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges): void;
export type ExtractStoreType<T> = T extends SubscribableStore<infer U> ? U : never;
`;export{e as default};
