// This file is required by vitest

import 'zone.js';
import './vitest-patch';
import 'zone.js/testing';
import {beforeEach} from './vitest-wrapper';
import {TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

beforeEach(() => {
	TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
	return () => TestBed.resetTestEnvironment();
});
