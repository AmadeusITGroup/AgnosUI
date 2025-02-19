const e=`import {SliderComponent} from './slider.component';
import {Component, signal} from '@angular/core';

@Component({
	imports: [SliderComponent],
	template: \`
		<app-slider min="0" max="100" stepSize="1" [(values)]="values" className="w-full" />
		Value: {{ values() }}
	\`,
})
export default class DefaultSliderComponent {
	readonly values = signal([20]);
}
`;export{e as default};
