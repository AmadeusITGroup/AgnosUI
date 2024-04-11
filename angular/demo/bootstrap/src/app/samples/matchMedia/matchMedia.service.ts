import {Injectable} from '@angular/core';
import {createMatchMedia} from '@agnos-ui/angular-bootstrap';

@Injectable({providedIn: 'root'})
export class MatchMediaService {
	readonly aboveMd$ = createMatchMedia('(min-width: 768px)');
}
