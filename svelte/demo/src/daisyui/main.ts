import {mount} from 'svelte';
import App from './App.svelte';

export const main = mount(App, {
	target: document.getElementById('root')!,
});
