import {Component} from '@angular/core';
import FlipComponent from './flip.component';

@Component({
	imports: [FlipComponent],
	template: `<app-flip hiddenText="What is hiding behing this ?"> Some new content ! </app-flip>`,
})
export default class FlipDemoComponent {}
