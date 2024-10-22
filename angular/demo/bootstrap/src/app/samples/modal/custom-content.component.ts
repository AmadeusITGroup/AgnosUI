import type {ModalWidget} from '@agnos-ui/angular-bootstrap';
import {SlotComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

export type ModalData = {name: string};

@Component({
	standalone: true,
	template: `
		<p>Hello, {{ state.contentData().name }}!</p>
		<button type="button" class="btn btn-outline-primary" (click)="api.close(true)">Close</button>
	`,
})
export default class CustomContentComponent extends SlotComponent<ModalWidget<ModalData>> {}
