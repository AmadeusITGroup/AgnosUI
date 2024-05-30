import type {WritableSignal} from '@amadeus-it-group/tansu';
import type {OnInit} from '@angular/core';
import {Directive, Input, TemplateRef, inject} from '@angular/core';
import type {SlotContent} from './types';

@Directive({selector: '[auChildren]', standalone: true})
export class ChildrenDirective<T extends object> implements OnInit {
	@Input({alias: 'auChildren', required: true}) auChildren!: WritableSignal<{children?: SlotContent<T>}>;

	templateRef = inject(TemplateRef<T>);

	/** @inheritdoc */
	ngOnInit(): void {
		this.auChildren.update((value) => ({...value, children: this.templateRef}));
	}
}
