const e=`<input
	[auUseMulti]="[
		[widget.directives.sliderDirective, undefined],
		[widget.directives.clickableAreaDirective, undefined],
		[widget.directives.handleEventsDirective, {item: {id: 0}}],
	]"
	type="range"
	[min]="state().min"
	[max]="state().max"
	[value]="state().sortedHandles[0].value"
	[step]="state().stepSize"
	class="range"
	[attr.aria-label]="state().sortedHandles[0].ariaLabel"
/>
`;export{e as default};
