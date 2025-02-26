import type {ToastProps} from '../components/toast/toast.gen';
import {Toaster as headlessToaster} from '@agnos-ui/svelte-headless/services/toasterService.svelte';
import type {ToasterProps} from '@agnos-ui/svelte-headless/services/toasterService.svelte';

export class ToasterService extends headlessToaster<Partial<Pick<ToastProps, 'children' | 'header' | 'structure'>>> {}
export type {ToasterProps};
