const o=`import {AlertComponent} from '@agnos-ui/angular';
import {provideWidgetsConfig} from '@agnos-ui/angular';
import {Component} from '@angular/core';
import AlertIconComponent from './alert-icon.component';

@Component({
	standalone: true,
	imports: [AlertComponent],
	providers: [
		provideWidgetsConfig((config) => {
			config.alert = {...config.alert, dismissible: false, slotStructure: AlertIconComponent};
			return config;
		}),
	],
	template: \`
		<au-component auAlert auType="success">Alert success with a customisable icon</au-component>
		<au-component auAlert auType="warning">Alert warning with a customisable icon</au-component>
		<au-component auAlert auType="danger">Alert danger with a customisable icon</au-component>
		<au-component auAlert auType="info">Alert info with a customisable icon</au-component>
		<au-component auAlert auType="light">Alert light with a customisable icon</au-component>
	\`,
})
export default class IconAlertComponent {}
`;export{o as default};
