const a=`import {ToastComponent, provideWidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [ToastComponent],
	providers: [
		provideWidgetsConfig((config) => {
			config.toast = {...config.toast, autoHide: false, dismissible: false};
			return config;
		}),
	],
	template: \`
		<p class="mb-2">
			Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes
			<code>.text-bg-*</code>, e.g. <code>.text.bg-primary</code>
		</p>
		<au-component #toast auToast auClassName="text-bg-primary" auHeader="I am header" auDismissible>Simple primary toast</au-component>

		<button class="btn btn-primary my-2" (click)="toast.api.open()">Reset</button>

		<h3>Variations</h3>
		<div class="row gy-2 gx-3">
			<div class="col-auto">
				<au-component auToast auClassName="text-bg-success">This is a success toast</au-component>
			</div>
			<div class="col-auto">
				<au-component auToast auClassName="text-bg-danger">This is an error toast</au-component>
			</div>
			<div class="col-auto">
				<au-component auToast auClassName="text-bg-info">This is an info toast</au-component>
			</div>
			<div class="col-auto">
				<au-component auToast auClassName="text-bg-warning">This is a warning toast</au-component>
			</div>
		</div>
	\`,
})
export default class DefaultToastComponent {}
`;export{a as default};
