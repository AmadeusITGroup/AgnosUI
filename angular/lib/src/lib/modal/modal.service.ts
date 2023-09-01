import {ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector} from '@angular/core';
import type {ModalProps} from './modal.component';
import {ModalComponent} from './modal.component';
import type {Subscription} from 'rxjs';

export interface ModalServiceOpenOptions {
	injector?: Injector;
}

@Injectable({providedIn: 'root'})
export class ModalService {
	private _injector = inject(Injector);
	private _applicationRef = inject(ApplicationRef);

	async open(options: Partial<ModalProps>, {injector = this._injector}: ModalServiceOpenOptions = {}): Promise<any> {
		const component = createComponent(ModalComponent, {
			environmentInjector: injector.get(EnvironmentInjector),
			elementInjector: injector,
		});
		const subscriptions: Subscription[] = [];
		try {
			for (const prop of Object.keys(options) as (string & keyof ModalProps)[]) {
				const value = options[prop];
				if (prop.startsWith('on')) {
					const eventName = `${prop[2].toLowerCase()}${prop.substring(3)}`;
					const eventEmitter = (component.instance as any)[eventName];
					if (eventEmitter instanceof EventEmitter) {
						subscriptions.push(eventEmitter.subscribe(value));
					}
				} else {
					component.setInput(prop, value);
				}
			}
			this._applicationRef.attachView(component.hostView);
			return await component.instance.api.open();
		} finally {
			component.destroy();
			for (const subscription of subscriptions) {
				subscription.unsubscribe();
			}
		}
	}
}
