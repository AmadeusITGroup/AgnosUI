import {createMatchMedia} from '@agnos-ui/svelte-bootstrap/services/matchMedia';
import {fromStore} from 'svelte/store';

export const aboveMd = fromStore(createMatchMedia('(min-width: 768px)'));
