import type {ToastProps} from '../components/toast/toast.gen';
import {Toaster as headlessToaster} from '@agnos-ui/svelte-headless/services/toasterService.svelte';
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
