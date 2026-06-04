import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
// @ts-expect-error - no types available for bootstrap/dist/css/bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-expect-error - no types available for @agnos-ui/core-bootstrap/scss/agnosui.scss
import '@agnos-ui/core-bootstrap/scss/agnosui.scss';

ReactDOM.hydrateRoot(
	document.getElementById('root')!,
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
setTimeout(() => {
	console.log('AGNOSUI-SSR-HYDRATION-COMPLETE');
});
