import type {WritableSignal} from '@amadeus-it-group/tansu';
import type {OnInit} from '@angular/core';
import {Directive, Input, TemplateRef, inject} from '@angular/core';
import type {SlotContent} from './types';

@Directive({selector: '[auSlotChildren]', standalone: true})
export class SlotChildrenDirective<T extends object> implements OnInit {
	@Input({alias: 'auSlotChildren', required: true}) auSlotChildren!: WritableSignal<{children?: SlotContent<T>}>;

	templateRef = inject(TemplateRef<T>);

	/** @inheritdoc */
	ngOnInit(): void {
		this.auSlotChildren.update((value) => ({...value, children: this.templateRef}));
	}
}
