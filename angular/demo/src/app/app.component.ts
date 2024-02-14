import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterModule],
	template: `
		<div class="container p-3">
			<router-outlet></router-outlet>
		</div>
	`,
})
export class AppComponent implements OnInit {
	ngOnInit() {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-bs-theme', event.newValue);
				}
			}
		});
	}
}
