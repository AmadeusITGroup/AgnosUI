import type {Application} from 'typedoc';
import {SvelteKitTheme} from './sveltekitTheme';

export function load(app: Application): void {
	app.renderer.defineTheme('sveltekit', SvelteKitTheme);
}
