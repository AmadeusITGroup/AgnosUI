import App from './App.svelte';
import '@agnos-ui/core-bootstrap/scss/agnosui.scss';
import {mount} from 'svelte';

export const main = mount(App, {
	target: document.getElementById('root')!,
});
