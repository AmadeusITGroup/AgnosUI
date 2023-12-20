import {DOCUMENT} from '@angular/common';
import type {ComponentRef, EmbeddedViewRef, OnChanges, OnDestroy, SimpleChanges, Type} from '@angular/core';
import {Directive, EnvironmentInjector, Input, TemplateRef, ViewContainerRef, createComponent, inject, reflectComponentType} from '@angular/core';
import type {SlotContent} from './types';
import {ComponentTemplate} from './types';

abstract class SlotHandler<Props extends Record<string, any>, Slot extends SlotContent<Props> = SlotContent<Props>> {
	constructor(
		public viewContainerRef: ViewContainerRef,
		public document: Document,
	) {}
	slotChange(slot: Slot, props: Props) {}
	propsChange(slot: Slot, props: Props) {}
	destroy() {}
}

class StringSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, string> {
	#nodeRef: Text | undefined;
	#previousText = '';

	override slotChange(slot: string): void {
		if (slot === this.#previousText) {
			return;
		}
		this.#previousText = slot;
		if (this.#nodeRef) {
			this.#nodeRef.textContent = slot;
		} else {
			const viewContainerElement: Comment | undefined = this.viewContainerRef.element.nativeElement;
			if (this.document && viewContainerElement?.parentNode) {
				this.#nodeRef = viewContainerElement.parentNode.insertBefore(this.document.createTextNode(slot), viewContainerElement);
			}
		}
	}

	override destroy(): void {
		this.#nodeRef?.parentNode?.removeChild(this.#nodeRef);
		this.#nodeRef = undefined;
	}
}

class FunctionSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, (props: Props) => string> {
	#stringSlotHandler = new StringSlotHandler(this.viewContainerRef, this.document);

	override slotChange(slot: (props: Props) => string, props: Props): void {
		this.#stringSlotHandler.slotChange(slot(props));
	}

	override propsChange(slot: (props: Props) => string, props: Props): void {
		this.#stringSlotHandler.slotChange(slot(props));
	}

	override destroy(): void {
		this.#stringSlotHandler.destroy();
	}
}

class ComponentSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, Type<unknown>> {
	#componentRef: ComponentRef<any> | undefined;
	#properties: string[];

	override slotChange(slot: Type<unknown>, props: Props): void {
		if (this.#componentRef) {
			this.destroy();
		}
		this.#componentRef = this.viewContainerRef.createComponent(slot);
		this.#applyProperties(props);
	}

	#applyProperties(props: Props, oldProperties?: Set<string>) {
		const properties = Object.keys(props);
		this.#properties = properties;
		const componentRef = this.#componentRef!;
		for (const property of properties) {
			componentRef.setInput(property, props[property]);
			oldProperties?.delete(property);
		}
	}

	override propsChange(slot: Type<unknown>, props: Props): void {
		const oldProperties = new Set(this.#properties);
		this.#applyProperties(props, oldProperties);
		const componentRef = this.#componentRef!;
		for (const property of oldProperties) {
			componentRef.setInput(property, undefined);
		}
	}

	override destroy(): void {
		this.viewContainerRef.clear();
		this.#componentRef = undefined;
	}
}

class TemplateRefSlotHandler<Props extends Record<string, any>> extends SlotHandler<Props, TemplateRef<Props>> {
	#viewRef: EmbeddedViewRef<Props> | undefined;
	#props: Props;

	override slotChange(slot: TemplateRef<Props>, props: Props): void {
		if (this.#viewRef) {
			this.destroy();
		}
		props = {...props};
		this.#props = props;
		this.#viewRef = this.viewContainerRef.createEmbeddedView(slot, props);
	}

	override propsChange(slot: TemplateRef<Props>, props: Props): void {
		if (this.#viewRef) {
			const templateProps = this.#props;
			const oldProperties = new Set<keyof Props>(Object.keys(templateProps));
			for (const property of Object.keys(props) as (keyof Props)[]) {
				templateProps[property] = props[property];
				oldProperties.delete(property);
			}
			for (const oldProperty of oldProperties) {
				delete templateProps[oldProperty];
			}
			this.#viewRef.markForCheck();
		}
	}

	override destroy(): void {
		this.viewContainerRef.clear();
	}
}

class ComponentTemplateSlotHandler<
	Props extends Record<string, any>,
	K extends string,
	T extends {[key in K]: TemplateRef<Props>},
> extends SlotHandler<Props, ComponentTemplate<Props, K, T>> {
	#componentRef: ComponentRef<T> | undefined;
	#templateSlotHandler = new TemplateRefSlotHandler(this.viewContainerRef, this.document);
	#templateRef: TemplateRef<Props> | undefined;

	override slotChange(slot: ComponentTemplate<Props, K, T>, props: Props): void {
		if (this.#componentRef) {
			this.destroy();
		}
		this.#componentRef = createComponent(slot.component, {
			elementInjector: this.viewContainerRef.injector,
			environmentInjector: this.viewContainerRef.injector.get(EnvironmentInjector),
		});
		this.#templateRef = this.#componentRef.instance[slot.templateProp];
		this.#templateSlotHandler.slotChange(this.#templateRef, props);
	}

	override propsChange(slot: ComponentTemplate<Props, K, T>, props: Props): void {
		this.#templateSlotHandler.propsChange(this.#templateRef!, props);
	}

	override destroy(): void {
		this.#templateSlotHandler.destroy();
		this.#componentRef?.destroy();
		this.#componentRef = undefined;
	}
}

const getSlotType = (value: any): undefined | {new (viewContainerRef: ViewContainerRef, document: Document): SlotHandler<any>} => {
	if (!value) return undefined;
	const type = typeof value;
	switch (type) {
		case 'string':
			return StringSlotHandler;
		case 'function':
			if (reflectComponentType(value)) {
				return ComponentSlotHandler;
			}
			return FunctionSlotHandler;
		case 'object':
			if (value instanceof TemplateRef) {
				return TemplateRefSlotHandler;
			}
			if (value instanceof ComponentTemplate) {
				return ComponentTemplateSlotHandler;
			}
			break;
	}
	return undefined;
};

@Directive({
	selector: '[auSlot]',
	standalone: true,
})
export class SlotDirective<Props extends Record<string, any>> implements OnChanges, OnDestroy {
	@Input('auSlot') slot: SlotContent<Props>;
	@Input('auSlotProps') props: Props;

	private _viewContainerRef = inject(ViewContainerRef);
	private _document = inject(DOCUMENT);
	private _slotType: ReturnType<typeof getSlotType>;
	private _slotHandler: SlotHandler<Props> | undefined;

	ngOnChanges(changes: SimpleChanges): void {
		const slotChange = changes['slot'];
		const propsChange = changes['props'];
		const slot = this.slot;
		if (slotChange) {
			const newSlotType = getSlotType(slot);
			if (newSlotType !== this._slotType) {
				this._slotHandler?.destroy();
				this._slotHandler = newSlotType ? new newSlotType(this._viewContainerRef, this._document) : undefined;
				this._slotType = newSlotType;
			}
			this._slotHandler?.slotChange(slot, this.props);
		} else if (propsChange) {
			this._slotHandler?.propsChange(slot, this.props);
		}
	}

	ngOnDestroy(): void {
		this._slotHandler?.destroy();
		this._slotHandler = undefined;
	}
}
