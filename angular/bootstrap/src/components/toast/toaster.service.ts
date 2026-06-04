import {Service} from '@angular/core';
import type {ToastProps} from './toast.gen';
import {ToasterService as headlessToaster} from '@agnos-ui/angular-headless';

@Service()
export class ToasterService extends headlessToaster<Partial<ToastProps>> {}
