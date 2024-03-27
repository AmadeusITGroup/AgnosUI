import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
	.then(() => {
		console.log('AGNOSUI-SSR-HYDRATION-COMPLETE');
	})
	.catch((err) => console.error(err));
