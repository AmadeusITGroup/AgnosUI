const t=`<nav [attr.aria-label]="state.ariaLabel()">
	<div class="join" [class]="state.className()">
		@if (state.boundaryLinks()) {
			<button
				class="join-item btn btn-outline"
				[attr.aria-label]="state.ariaFirstLabel()"
				(click)="api.first()"
				[disabled]="state.previousDisabled()"
				[attr.aria-disabled]="state.previousDisabled() ? 'true' : null"
				[attr.tabindex]="state.previousDisabled() ? -1 : undefined"
			>
				<span aria-hidden="true"> « </span>
			</button>
		}
		@if (state.directionLinks()) {
			<button
				class="join-item btn btn-outline"
				[attr.aria-label]="state.ariaPreviousLabel()"
				(click)="api.previous()"
				[disabled]="state.previousDisabled()"
				[attr.aria-disabled]="state.previousDisabled() ? 'true' : null"
				[attr.tabindex]="state.previousDisabled() ? -1 : undefined"
			>
				<span aria-hidden="true"> ‹ </span>
			</button>
		}
		@for (page of state.pages(); track page; let i = $index) {
			<button
				class="join-item btn btn-outline"
				[class.btn-active]="page === state.page()"
				[attr.aria-current]="page === state.page() ? 'page' : null"
				[attr.tabindex]="state.disabled() ? -1 : undefined"
				[class.disabled]="state.disabled()"
				(click)="api.select(page)"
			>
				{{ page }}
				@if (state.page() === page) {
					<span class="sr-only">{{ state.activeLabel() }}</span>
				}
			</button>
		}
		@if (state.directionLinks()) {
			<button
				class="join-item btn btn-outline"
				[attr.aria-label]="state.ariaNextLabel()"
				(click)="api.next()"
				[disabled]="state.nextDisabled()"
				[attr.aria-disabled]="state.nextDisabled() ? 'true' : null"
				[attr.tabindex]="state.nextDisabled() ? -1 : undefined"
			>
				<span aria-hidden="true"> › </span>
			</button>
		}
		@if (state.boundaryLinks()) {
			<button
				class="join-item btn btn-outline"
				[attr.aria-label]="state.ariaLastLabel()"
				(click)="api.last()"
				[disabled]="state.nextDisabled()"
				[attr.aria-disabled]="state.nextDisabled() ? 'true' : null"
				[attr.tabindex]="state.nextDisabled() ? -1 : undefined"
			>
				<span aria-hidden="true"> » </span>
			</button>
		}
	</div>
	<div aria-live="polite" class="sr-only">{{ state.ariaLiveLabelText() }}</div>
</nav>
`;export{t as default};
