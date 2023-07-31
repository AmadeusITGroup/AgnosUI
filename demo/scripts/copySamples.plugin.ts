import type {Plugin} from 'vite';
import path from 'path';
import fs from 'fs/promises';
import {glob} from 'glob';

export const copySamples = (): Plugin => {
	return {
		name: 'my-copy-samples',
		apply: 'build',
		async buildStart(info) {
			for (const framework of ['angular', 'react', 'svelte']) {
				const src = path.join(__dirname, `../../${framework}/dist/demo/`);
				const dst = `${framework}/samples/`;
				const files = await glob('**/*', {
					cwd: src,
					nodir: true,
				});
				for (const file of files) {
					const name = path.posix.join(dst, file);
					console.log(name);
					this.emitFile({
						type: 'asset',
						name,
						fileName: name,
						source: await fs.readFile(path.join(src, file)),
					});
				}
			}
		},
	};
};
