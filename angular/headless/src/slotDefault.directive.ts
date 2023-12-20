import type {WritableSignal} from '@amadeus-it-group/tansu';
import type {OnInit} from '@angular/core';
import {Directive, Input, TemplateRef, inject} from '@angular/core';
import type {SlotContent} from './types';

@Directive({selector: '[auSlotDefault]', standalone: true})
export class SlotDefaultDirective<T extends object> implements OnInit {
	@Input('auSlotDefault') auSlotDefault: WritableSignal<{slotDefault?: SlotContent<T>}>;

	templateRef = inject(TemplateRef<T>);

	ngOnInit(): void {
		this.auSlotDefault.update((value) => ({...value, slotDefault: this.templateRef}));
	}
}
