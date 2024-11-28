import '@angular/compiler';
import '@analogjs/vitest-angular/setup-zone';
import {beforeEach} from 'vitest';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {TestBed} from '@angular/core/testing';

beforeEach(() => {
	TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
	return () => TestBed.resetTestEnvironment();
});
