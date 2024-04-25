const t=`<input
	[auUse]="widget.directives.sliderDirective"
	type="range"
	[min]="state().min"
	[max]="state().max"
	[value]="state().sortedHandles[0].value"
	[step]="state().stepSize"
	[class]="'range'"
	[attr.aria-label]="state().sortedHandles[0].ariaLabel"
	(click)="widget.actions.click($event)"
	(keydown)="onKeyDown($event)"
	(mousedown)="widget.actions.mouseDown($event, 0)"
	(touchstart)="widget.actions.touchStart($event, 0)"
/>
`;export{t as default};
