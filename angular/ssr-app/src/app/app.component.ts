import {Component} from '@angular/core';
import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [AgnosUIAngularModule],
	templateUrl: './app.component.html',
})
export class AppComponent {}
