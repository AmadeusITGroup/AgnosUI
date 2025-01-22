import {writable} from '@amadeus-it-group/tansu';
import type {TemplateRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, Injectable, inject, input, viewChild} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from 'vitest';
import {injectWidgetsConfig, provideWidgetsConfig} from './config';
import {SlotDirective} from './slot.directive';
import type {SlotContent} from './types';
import {ComponentTemplate} from './types';
import {toAngularSignal} from './utils/stores';

describe('slot directive', () => {
	@Component({
		selector: '[auTestSlotDirective]',

		changeDetection: ChangeDetectionStrategy.OnPush,
		imports: [SlotDirective],
		template: '<ng-template [auSlot]="mySlot()" [auSlotProps]="mySlotProps()"></ng-template>',
	})
	class TestComponent {
		readonly mySlot = input<SlotContent<{myProp: string}>>();
		readonly mySlotProps = input({myProp: 'world'});
	}

	it('undefined', () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('null', () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.componentRef.setInput('mySlot', null);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('string', () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.componentRef.setInput('mySlot', 'hello');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('hello');
		fixture.componentRef.setInput('mySlotProps', {myProp: 'to you'});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('hello');
		fixture.componentRef.setInput('mySlot', 'goodbye!');
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('goodbye!');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('function', () => {
		const fixture = TestBed.createComponent(TestComponent);
		fixture.componentRef.setInput('mySlot', (props: {myProp: string}) => `hello ${props.myProp}!`);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('hello world!');
		fixture.componentRef.setInput('mySlotProps', {myProp: 'to you'});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('hello to you!');
		fixture.componentRef.setInput('mySlot', (props: {myProp: string}) => `goodbye ${props.myProp}!`);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('goodbye to you!');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('component', () => {
		@Component({
			selector: '[auTestSlotDirectiveComponentHello]',

			changeDetection: ChangeDetectionStrategy.OnPush,
			template: 'Hello {{myProp()}}!',
		})
		class HelloComponent {
			readonly myProp = input('');
		}

		@Component({
			selector: '[auTestSlotDirectiveComponentGoodbye]',

			changeDetection: ChangeDetectionStrategy.OnPush,
			template: 'Goodbye {{myProp()}}!',
		})
		class GoodbyeComponent {
			readonly myProp = input('');
		}

		const fixture = TestBed.createComponent(TestComponent);
		fixture.componentRef.setInput('mySlot', HelloComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello world!');
		fixture.componentRef.setInput('mySlotProps', {myProp: 'to you'});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello to you!');
		fixture.componentRef.setInput('mySlot', GoodbyeComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Goodbye to you!');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('template', () => {
		@Component({
			selector: '[auTestSlotDirectiveTemplate]',

			imports: [SlotDirective],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `
				<ng-template #hello let-myProp="myProp">Hello {{ myProp }}!</ng-template>
				<ng-template #goodbye let-myProp="myProp">Goodbye {{ myProp }}!</ng-template>
				<ng-template [auSlot]="mySlot()" [auSlotProps]="mySlotProps()"></ng-template>
			`,
		})
		class TemplateTestComponent {
			readonly hello = viewChild.required<TemplateRef<{myProp: string}>>('hello');
			readonly goodbye = viewChild.required<TemplateRef<{myProp: string}>>('goodbye');
			readonly mySlot = input<SlotContent<{myProp: string}>>();
			readonly mySlotProps = input({myProp: 'world'});
		}

		const fixture = TestBed.createComponent(TemplateTestComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('');
		fixture.componentRef.setInput('mySlot', fixture.componentInstance.hello());
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello world!');
		fixture.componentRef.setInput('mySlotProps', {myProp: 'to you'});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello to you!');
		fixture.componentRef.setInput('mySlot', fixture.componentInstance.goodbye());
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Goodbye to you!');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});

	it('component template', () => {
		@Component({
			selector: '[auTestSlotDirectiveComponentTemplate]',

			changeDetection: ChangeDetectionStrategy.OnPush,
			template: `
				<ng-template #hello let-myProp="myProp">Hello {{ myProp }}!</ng-template>
				<ng-template #goodbye let-myProp="myProp">Goodbye {{ myProp }}!</ng-template>
			`,
		})
		class HelloAndGoodbyeComponent {
			readonly hello = viewChild.required<TemplateRef<{myProp: string}>>('hello');
			readonly goodbye = viewChild.required<TemplateRef<{myProp: string}>>('goodbye');
		}

		const fixture = TestBed.createComponent(TestComponent);
		fixture.componentRef.setInput('mySlot', new ComponentTemplate(HelloAndGoodbyeComponent, 'hello'));
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello world!');
		fixture.componentRef.setInput('mySlotProps', {myProp: 'to you'});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Hello to you!');
		fixture.componentRef.setInput('mySlot', new ComponentTemplate(HelloAndGoodbyeComponent, 'goodbye'));
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Goodbye to you!');
		fixture.destroy();
		expect(fixture.nativeElement.textContent).toBe('');
	});
});

describe('widgets config', () => {
	it('should work to use inject in adaptParentConfig', () => {
		@Injectable({
			providedIn: 'root',
		})
		class MySettingsClass {
			maxRating$ = writable(5);
		}

		@Component({
			selector: '[auTestWidgetConfig]',
			template: `maxRating = {{ myConfig().rating.maxRating }}`,
			providers: [
				provideWidgetsConfig((parentConfig) => {
					if (!parentConfig.rating) {
						parentConfig.rating = {};
					}
					parentConfig.rating.maxRating = inject(MySettingsClass).maxRating$();
					return parentConfig;
				}),
			],
		})
		class MyTestComponent {
			myConfig = toAngularSignal(injectWidgetsConfig());
		}

		const component = TestBed.createComponent(MyTestComponent);
		component.detectChanges();
		expect(component.nativeElement.textContent).toEqual('maxRating = 5');
		const settings = TestBed.inject(MySettingsClass);
		settings.maxRating$.set(10);
		component.detectChanges();
		expect(component.nativeElement.textContent).toEqual('maxRating = 10');
		component.destroy();
	});
});
