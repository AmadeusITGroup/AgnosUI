const e=`import type {Source} from './photo';
import {Component, input, signal, ChangeDetectionStrategy} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'div[appGalleryImage]',
	template: \`
		@if (loadRequested()) {
			@if (!imageLoaded()) {
				<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>
			}
			<picture class="flex justify-center">
				@for (source of sources(); track source) {
					<source [media]="source.media" [srcset]="source.srcset" />
				}
				<img class="select-none object-contain" [alt]="alt()" [src]="src()" [style.aspect-ratio]="aspectRatio()" (load)="imageLoaded.set(true)" />
			</picture>
		} @else {
			<div class="skeleton w-full h-full"></div>
		}
	\`,
	host: {
		class: 'relative basis-full min-w-0 shrink-0 grow-0 flex justify-center',
	},
})
export class GalleryImageComponent {
	readonly src = input.required<string>();
	readonly alt = input.required<string>();
	readonly sources = input.required<Source[]>();
	readonly loadRequested = input.required<boolean>();
	readonly aspectRatio = input.required<number>();
	readonly imageLoaded = signal(false);
}
`;export{e as default};
