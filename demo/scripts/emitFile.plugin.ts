import type {Plugin} from 'vite';
import type {EmittedFile} from 'rollup';

export const emitFile = (emittedFile: EmittedFile): Plugin => {
	return {
		name: 'emit-file',
		apply: 'build',
		buildStart() {
			this.emitFile(emittedFile);
		},
	};
};
