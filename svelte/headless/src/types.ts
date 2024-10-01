export * from '@agnos-ui/core/types';

import type {Snippet} from 'svelte';

export type SlotContent<Props extends object = object> = string | Snippet<[Props]>;
