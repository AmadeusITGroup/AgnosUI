import {useObservable} from '@agnos-ui/react/utils/stores';
import {urlJsonObjectConfigProps$} from '@agnos-ui/common/utils';
import {getPropValues} from '@agnos-ui/common/propsValues';

export function useHashChange() {
	return {
		config: getPropValues(useObservable(urlJsonObjectConfigProps$).config),
		props: getPropValues(useObservable(urlJsonObjectConfigProps$).props),
	};
}
