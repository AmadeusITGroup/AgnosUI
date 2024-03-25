import {Component} from '@angular/core';
import {AgnosUIAngularModule} from '@agnos-ui/angular';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AgnosUIAngularModule],
	templateUrl: './app.component.html',
})
export class AppComponent {}
