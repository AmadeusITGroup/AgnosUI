const e=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<div auAccordion>
			<div au-accordion-item [itemCollapsed]="false">
				<ng-template auAccordionItemHeader>Simple</ng-template>
				<ng-template auAccordionItemBody
					>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
					skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
					single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
					haven't heard of them accusamus labore sustainable VHS.
				</ng-template>
			</div>
			<div au-accordion-item>
				<ng-template auAccordionItemHeader
					><span>&#9733; <b>Fancy</b> title &#9733;</span></ng-template
				>
				<ng-template auAccordionItemBody
					>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
					skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
					single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
					haven't heard of them accusamus labore sustainable VHS.
				</ng-template>
			</div>
			<div au-accordion-item [itemDisabled]="true">
				<ng-template auAccordionItemHeader>Disabled</ng-template>
				<ng-template auAccordionItemBody
					>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
					skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
					single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
					proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
					haven't heard of them accusamus labore sustainable VHS.
				</ng-template>
			</div>
		</div>
	\`,
})
export default class AccordionComponent {}
`;export{e as default};
