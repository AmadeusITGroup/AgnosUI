import {Service} from '@angular/core';
import {createMatchMedia} from '@agnos-ui/angular-bootstrap';

@Service()
export class MatchMediaService {
	readonly aboveMd$ = createMatchMedia('(min-width: 768px)');
}
