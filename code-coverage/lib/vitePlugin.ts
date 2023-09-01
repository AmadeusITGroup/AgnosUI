import type {Plugin} from 'vite';
import {canInstrument, instrumentFile} from './instrument';
import {filter} from './filter';

export default (): Plugin => {
	return {
		name: '@agnos-ui/code-coverage',
		enforce: 'pre',
		transform(code, id, options) {
			if (!filter(id) || !canInstrument(id)) return;
			return instrumentFile(code, id);
		},
	};
};
