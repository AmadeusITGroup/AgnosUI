import type {ModalProps} from './modal';
import {ApplicationRef, createComponent, EnvironmentInjector, EventEmitter, inject, Injectable, Injector} from '@angular/core';
import type {Subscription} from 'rxjs';
import {ModalComponent} from './modal.component';

export interface ModalServiceOpenOptions {
	injector?: Injector;
}

@Injectable({providedIn: 'root'})
export class ModalService {
	private readonly _injector = inject(Injector);
	private readonly _applicationRef = inject(ApplicationRef);

	async open<Data>(options: Partial<ModalProps<Data>>, {injector = this._injector}: ModalServiceOpenOptions = {}): Promise<any> {
		const component = createComponent(ModalComponent, {
			environmentInjector: injector.get(EnvironmentInjector),
			elementInjector: injector,
		});
		const subscriptions: Subscription[] = [];
		try {
			for (const prop of Object.keys(options) as (string & keyof ModalProps<Data>)[]) {
				const value = options[prop];
				if (prop.startsWith('on')) {
					const eventName = `${prop[2].toLowerCase()}${prop.substring(3)}`;
					const eventEmitter = (component.instance as any)[eventName];
					if (eventEmitter instanceof EventEmitter) {
						subscriptions.push(eventEmitter.subscribe(value));
					}
				} else {
					component.setInput(`au${prop.substring(0, 1).toUpperCase()}${prop.substring(1)}`, value);
				}
			}
			this._applicationRef.attachView(component.hostView);
			await component.instance._widget.initialized;
			return await component.instance.api.open();
		} finally {
			component.destroy();
			for (const subscription of subscriptions) {
				subscription.unsubscribe();
			}
		}
	}
}
