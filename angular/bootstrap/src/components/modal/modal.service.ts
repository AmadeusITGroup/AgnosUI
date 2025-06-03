import {ApplicationRef, createComponent, EnvironmentInjector, inject, Injectable, Injector, inputBinding, outputBinding} from '@angular/core';
import {ModalComponent} from './modal.component';
import type {ModalProps} from './modal.gen';

/**
 * Service to handle the opening and management of modal components.
 */
@Injectable({providedIn: 'root'})
export class ModalService {
	private readonly _injector = inject(Injector);
	private readonly _applicationRef = inject(ApplicationRef);

	/**
	 * Opens a modal dialog with the specified options.
	 *
	 * @template Data - The type of data that the modal will handle.
	 * @param options - The options to configure the modal.
	 * @param injector - The injector to use when creating the modal component
	 * @returns A promise that resolves when the modal is closed.
	 */
	async open<Data>(options: Partial<ModalProps<Data>>, injector = this._injector): Promise<any> {
		const component = createComponent(ModalComponent, {
			environmentInjector: injector.get(EnvironmentInjector),
			elementInjector: injector,
			bindings: Object.entries(options).map(([key, value]) => {
				if (key.startsWith('on')) {
					return outputBinding(`au${key.substring(2)}`, value as any);
				} else {
					return inputBinding(`au${key[0].toUpperCase()}${key.substring(1)}`, () => value);
				}
			}),
		});
		try {
			this._applicationRef.attachView(component.hostView);
			await component.instance['_widget'].initialized;
			return await component.instance.api.open();
		} finally {
			component.destroy();
		}
	}
}
