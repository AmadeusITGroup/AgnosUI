import type {WritableSignal} from '@amadeus-it-group/tansu';
import type {OnInit} from '@angular/core';
import {Directive, Input, TemplateRef, inject} from '@angular/core';
import type {SlotContent} from './types';

/**
 * Directive that allows to pass the templateRef associated to a ng-content to a store.
 * The input of the directive is a {@link WritableSignal}<{children: {@link SlotContent}<T>}>.
 */
@Directive({selector: '[auContentAsSlot]', standalone: true})
export class ContentAsSlotDirective<T extends object> implements OnInit {
	@Input({alias: 'auContentAsSlot', required: true}) auContentAsSlot!: WritableSignal<{children?: SlotContent<T>}>;

	templateRef = inject(TemplateRef<T>);

	/** @inheritdoc */
	ngOnInit(): void {
		this.auContentAsSlot.update((value) => ({...value, children: this.templateRef}));
	}
}
