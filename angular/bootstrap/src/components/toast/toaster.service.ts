import {Injectable} from '@angular/core';
import type {ToastProps} from './toast.gen';
import {ToasterService as headlessToaster} from '@agnos-ui/angular-headless';

@Injectable({
	providedIn: 'root',
})
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
