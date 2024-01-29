import type {Plugin} from 'vite';
import path from 'path';
import fs from 'fs/promises';
import {glob} from 'glob';

export const copyDoc = (): Plugin => {
	return {
		name: 'copy-doc',
		apply: 'build',
		async buildStart(info) {
			const src = path.join(__dirname, `../generated/typedoc`);
			const files = await glob('**/*', {
				cwd: src,
				nodir: true,
			});
			for (const file of files) {
				const name = path.posix.join('typedoc', file);
				this.info(`copy ${name}`);
				this.emitFile({
					type: 'asset',
					name,
					fileName: name,
					source: await fs.readFile(path.join(src, file)),
				});
			}
		},
	};
};
