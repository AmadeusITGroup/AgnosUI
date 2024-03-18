import {enableProdMode} from '@angular/core';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app/app.component';
import {ROUTES} from './app/app.routes';
import {environment} from './environments/environment';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES), {provide: LocationStrategy, useClass: HashLocationStrategy}],
}).catch((err) => console.error(err));
