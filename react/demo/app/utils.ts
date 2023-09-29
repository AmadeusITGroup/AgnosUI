import {useObservable} from '@agnos-ui/react';
import {hashObject$} from '../../../common/utils';
import {getPropValues} from '@agnos-ui/common/propsValues';

export function useHashChange() {
	return {config: getPropValues(useObservable(hashObject$).config), props: getPropValues(useObservable(hashObject$).props)};
}
