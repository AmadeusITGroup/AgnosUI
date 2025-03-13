import {Injectable} from '@angular/core';
import type {ToastProps} from '../components/toast/toast.gen';
import {ToasterService as headlessToaster} from '@agnos-ui/angular-headless';
@Injectable({
	providedIn: 'root',
})
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
