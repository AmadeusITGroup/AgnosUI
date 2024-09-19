import App from './App.svelte';
import {mount} from 'svelte';

export const main = mount(App, {
	target: document.getElementById('root')!,
});
