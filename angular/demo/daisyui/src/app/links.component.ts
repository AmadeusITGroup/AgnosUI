import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {links} from './links';

@Component({
	standalone: true,
	imports: [CommonModule],
	template: `
		<h3>Samples:</h3>
		<div class="sample-links">
			@for (url of links; track url) {
				<div>
					<a href="#/{{ url }}">{{ url }}</a>
				</div>
			}
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/links.scss';",
})
export default class LinksComponent {
	links = inject(links);
}
