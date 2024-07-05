const t=`import {AgnosUIAngularModule, ModalService} from '@agnos-ui/angular-bootstrap';
import {Component, inject} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<button class="btn btn-primary" (click)="modalService.open({title: 'First modal', className: 'modal-sm', children: recursiveModal})">
			Launch demo modal
		</button>
		<ng-template #recursiveModal let-widget="widget" let-state="state">
			This is a modal<br /><br />
			<button
				class="btn btn-outline-primary m-1"
				(click)="modalService.open({title: 'Other modal', children: recursiveModal, container: state.modalElement})"
			>
				Launch other modal</button
			><br />
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.patch({backdrop: true})">Enable backdrop</button>
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.patch({backdrop: false})">Disable backdrop</button><br />
			<button class="btn btn-outline-secondary m-1" (click)="widget.api.close()">Close</button>
		</ng-template>
	\`,
})
export default class ModalDemoComponent {
	modalService = inject(ModalService);
}
`;export{t as default};
