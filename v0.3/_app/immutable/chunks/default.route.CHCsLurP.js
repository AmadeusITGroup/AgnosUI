const e=`import {ProgressbarComponent, provideWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: [
		provideWidgetsConfig((config) => {
			config.progressbar = {...config.progressbar, slotDefault: (widget) => \`\${widget.state.percentage}%\`};
			return config;
		}),
	],
	template: \`
		<div class="d-flex flex-column gap-2">
			<div auProgressbar auValue="20"></div>
			<div auProgressbar auValue="40" auType="success"></div>
			<div auProgressbar auValue="60" auType="info"></div>
			<div auProgressbar auValue="80" auType="warning"></div>
			<div auProgressbar auValue="100" auType="danger"></div>
		</div>
	\`,
})
export default class DefaultProgressBarComponent {}
`;export{e as default};
