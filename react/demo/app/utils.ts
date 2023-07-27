import {useObservable} from '@agnos-ui/react';
import {hashObject$} from '../../../common/utils';

export function useHashChange() {
	return useObservable(hashObject$);
}
