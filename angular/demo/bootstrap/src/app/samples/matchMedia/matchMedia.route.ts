import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AlertComponent, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {MatchMediaService} from './matchMedia.service';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AlertComponent],
	template: `
		<div class="mb-2">Resize the window to see the message below updated.</div>
		<au-component auAlert auDismissible="false" auType="info">
			Window width is above 768 px ? <strong>{{ aboveMd() ? 'YES' : 'NO' }}</strong>
		</au-component>
	`,
})
export default class MatchMediaComponent {
	readonly aboveMd = toAngularSignal(inject(MatchMediaService).aboveMd$);
}
