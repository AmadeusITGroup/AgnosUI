const e=`import {Injectable} from '@angular/core';
import {createMatchMedia} from '@agnos-ui/angular';

@Injectable({providedIn: 'root'})
export class MatchMediaService {
	readonly aboveMd$ = createMatchMedia('(min-width: 768px)');
}
`;export{e as default};
