const e=`import {AgnosUIAngularModule, provideWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.alert = {...config.alert, dismissible: false};
			return config;
		}),
	],
	template: \`
		<au-component auAlert auType="primary">Simple primary alert</au-component>
		<au-component auAlert auType="secondary">Simple secondary alert</au-component>
		<au-component auAlert auType="success">Simple success alert</au-component>
		<au-component auAlert auType="danger">Simple danger alert</au-component>
		<au-component auAlert auType="warning">Simple warning alert</au-component>
		<au-component auAlert auType="info">Simple info alert</au-component>
		<au-component auAlert auType="light">Simple light alert</au-component>
		<au-component auAlert auType="dark">Simple dark alert</au-component>
	\`,
})
export default class GenericAlertComponent {}
`;export{e as default};
