import {
	ApplicationRef,
	EnvironmentInjector,
	Injectable,
	type Type,
	createComponent,
	inject,
	TemplateRef,
	DOCUMENT,
	inputBinding,
} from '@angular/core';
import {ModalComponent} from './modal.component';
import {type ModalProps} from '@agnos-ui/angular-headless';

@Injectable({providedIn: 'root'})
export class ModalService {
	private readonly _applicationRef = inject(ApplicationRef);
	private readonly _injector = inject(EnvironmentInjector);
	private readonly _document = inject(DOCUMENT);

	async open(
		modalContent: Type<any> | TemplateRef<any>,
		options: Partial<Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton'>>,
	): Promise<void> {
		let nodes: Node[] = [];
		let contentDestroy: () => void;
		if (modalContent instanceof TemplateRef) {
			const viewRef = modalContent.createEmbeddedView({});
			this._applicationRef.attachView(viewRef);
			nodes = viewRef.rootNodes;
			contentDestroy = viewRef.destroy.bind(viewRef);
		} else {
			const modalContentRef = createComponent(modalContent, {
				environmentInjector: this._injector,
			});
			nodes = [modalContentRef.location.nativeElement];
			contentDestroy = modalContentRef.destroy.bind(modalContentRef);
		}
		const div = this._document.createElement('div');
		this._document.body.append(div);
		const component = createComponent(ModalComponent, {
			hostElement: div,
			environmentInjector: this._injector,
			projectableNodes: [nodes],
			bindings: Object.entries(options).map(([key, value]) => inputBinding(key, () => value)),
		});
		try {
			this._applicationRef.attachView(component.hostView);
			await component.instance['_widget'].initialized;
			await component.instance.api.open();
		} finally {
			div.remove();
			contentDestroy();
			component.destroy();
		}
	}
}
