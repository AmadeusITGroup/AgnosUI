const o=`import {Component} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import {photos} from './photo';

@Component({
	template: \`
		<div class="w-full flex justify-center">
			<div class="max-w-[600px] lg:max-w-[1000px]">
				<app-gallery [photos]="photos" withNavArrows withShowFullscreen />
			</div>
		</div>
	\`,
	imports: [GalleryComponent],
})
export default class DemoGalleryComponent {
	readonly photos = photos;
}
`;export{o as default};
