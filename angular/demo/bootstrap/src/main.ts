import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app/app.component';
import {ROUTES} from './app/app.routes';
import {provideExperimentalZonelessChangeDetection} from '@angular/core';

bootstrapApplication(AppComponent, {
	providers: [provideRouter(ROUTES), {provide: LocationStrategy, useClass: HashLocationStrategy}, provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
