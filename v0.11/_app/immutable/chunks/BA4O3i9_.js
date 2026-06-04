const t=`<div #mainContainer class="grid grid-flow-row max-h-dvh">
	<div class="overflow-hidden relative cursor-grab active:cursor-grabbing" [auUse]="mainCarouselDirectives.root">
		<div class="flex max-h-full">
			@for (photoWithLoadState of photosWithLoadState(); track photoWithLoadState; let index = $index) {
				<div
					appGalleryImage
					[src]="photoWithLoadState.src"
					[alt]="photoWithLoadState.alt"
					[aspectRatio]="aspectRatio()"
					[loadRequested]="photoWithLoadState.loadRequested()"
					[sources]="photoWithLoadState.sources"
					[auUse]="[mainCarouselDirectives.slide, {index, id: 'gallery-photo-' + index}]"
				></div>
			}
		</div>
		@if (withNavArrows()) {
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<button
					class="btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					(pointerdown)="$event.preventDefault()"
					[auUse]="mainCarouselDirectives.scrollPrev"
					[innerHTML]="previousSvg"
				></button>
				<button
					class="btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
					(pointerdown)="$event.preventDefault()"
					[auUse]="mainCarouselDirectives.scrollNext"
					[innerHTML]="nextSvg"
				></button>
			</div>
		}
		@if (canFullScreen()) {
			<div class="absolute right-5 bottom-5 flex">
				<button
					class="btn btn-primary btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"
					(click)="toggleFullScreen()"
					[attr.aria-label]="isFullScreen() ? 'leave fullscreen' : 'open photo in fullscreen'"
					[innerHTML]="isFullScreen() ? compressSvg : expandSvg"
				></button>
			</div>
		}
	</div>
	<div class="overflow-hidden mt-1 mb-2" [auUse]="thumbCarouselDirectives.root">
		<div class="grid grid-flow-col auto-cols-max gap-2 mx-1 my-1 items-center" [auUse]="mainCarouselDirectives.tabList">
			@for (photo of photos(); track photo; let index = $index) {
				@let id = 'gallery-photo-' + index;
				<button
					class="ring-primary cursor-pointer"
					[class.ring-3]="mainCarouselState.selectedScrollSnap() === index"
					[auUse]="[mainCarouselDirectives.tabIndicator, {index, id}]"
				>
					<img class="select-none" alt="random picsum" [src]="photo.thumbnail" loading="lazy" [style.aspect-ratio]="aspectRatio()" />
				</button>
			}
		</div>
	</div>
</div>
`;export{t as default};
