import App from './app/App.svelte';
import '@agnos-ui/style-bootstrap/scss/agnosui.scss';

export const main = new App({
	target: document.getElementById('root')!,
});
