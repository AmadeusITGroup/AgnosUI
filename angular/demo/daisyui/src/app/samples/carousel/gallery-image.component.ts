import type {Source} from '@agnos-ui/common/samples/carousel/photo';
import {Component, input, signal, ChangeDetectionStrategy} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-gallery-image',
	standalone: true,
	template: `
		@if (loadRequested()) {
			@if (!imageLoaded()) {
				<span class="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary"></span>
			}
			<picture class="flex justify-center">
				@for (source of sources(); track source) {
					<source [media]="source.media" [srcset]="source.srcset" />
				}
				<img
					class="select-none object-contain transition-opacity ease-in-out duration-300 opacity-0"
					[class.opacity-100]="toShow()"
					[alt]="alt()"
					[src]="src()"
					[style.aspect-ratio]="aspectRatio()"
					(load)="imageLoaded.set(true)"
				/>
			</picture>
		} @else {
			<div class="skeleton w-full h-full"></div>
		}
	`,
	host: {
		style: 'display: contents;',
	},
})
export class GalleryImageComponent {
	readonly src = input.required<string>();
	readonly alt = input.required<string>();
	readonly sources = input.required<Source[]>();
	readonly loadRequested = input.required<boolean>();
	readonly aspectRatio = input.required<number>();
	readonly toShow = input.required<boolean>();
	readonly imageLoaded = signal(false);
}
