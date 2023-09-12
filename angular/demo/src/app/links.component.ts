import {CommonModule} from '@angular/common';
import {Component, inject, InjectionToken} from '@angular/core';

export const links = new InjectionToken<string[]>('app-links');

@Component({
	standalone: true,
	imports: [CommonModule],
	template: `
		<h3>Samples:</h3>
		<div class="sample-links">
			<div *ngFor="let url of links">
				<a href="#/{{ url }}">{{ url }}</a>
			</div>
		</div>
	`,
	styles: ["@import '@agnos-ui/common/samples/links.scss';"],
})
export class LinksComponent {
	links = inject(links);
}
