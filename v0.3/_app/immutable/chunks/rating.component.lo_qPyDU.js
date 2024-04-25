const t=`<div class="rating" [class]="state().className">
	@for (item of state().stars; track trackByIndex(index); let index = $index) {
		<input
			(blur)="onTouched()"
			(mouseleave)="_widget.actions.leave()"
			(mouseenter)="_widget.actions.hover(index + 1)"
			(click)="_widget.actions.click(index + 1)"
			[style.cursor]="state().interactive ? 'pointer' : 'default'"
			type="radio"
			name="rating-1"
			class="mask mask-star"
			[attr.aria-label]="getAriaLabel(index)"
			[checked]="index + 1 === state().visibleRating ? true : null"
		/>
	}
</div>
`;export{t as default};
