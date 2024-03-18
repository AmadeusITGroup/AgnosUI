import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../common/App';

import 'bootstrap/dist/css/bootstrap.css';
import '@agnos-ui/style-bootstrap/scss/agnosui.scss';

const components = import.meta.glob('./samples/*/*.route.tsx', {import: 'default'});

window.addEventListener('storage', (event) => {
	if (event.key === 'theme') {
		if (event.newValue) {
			document.documentElement.setAttribute('data-bs-theme', event.newValue);
		}
	}
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="container p-3">
			<App components={components} />
		</div>
	</React.StrictMode>,
);
