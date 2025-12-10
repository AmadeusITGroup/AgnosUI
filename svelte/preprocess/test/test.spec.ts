import {basename, join} from 'path';
import {preprocess, compile} from 'svelte/compiler';
import {expect, test} from 'vitest';
import {directivesPreprocess} from '../src';

const testSourceFiles = import.meta.glob('./files/source/*.svelte', {
	query: '?raw',
	import: 'default',
});
const transformedFilesFolder = join(import.meta.dirname, 'files', 'transformed');

for (const [filename, readFile] of Object.entries(testSourceFiles)) {
	test(filename, async () => {
		const fileContent: string = (await readFile()) as any;
		const transformedFile = await preprocess(fileContent, [directivesPreprocess()], {filename});
		// check that compiler doesn't throw:
		compile(transformedFile.code, {});

		// normalize EOL to LF and trim trailing spaces to avoid invisible snapshot diffs
		const normalizedCode = transformedFile.code.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '');

		await expect(normalizedCode).toMatchFileSnapshot(join(transformedFilesFolder, basename(filename)));
	});
}
