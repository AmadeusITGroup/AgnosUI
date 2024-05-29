import {copyFile, mkdir} from 'fs/promises';
import {glob} from 'glob';
import {resolve} from 'path';

const scssDir = resolve(import.meta.dirname, '../src/scss');
const distDir = resolve(import.meta.dirname, '../dist/scss');
const files = await glob('**/*.scss', {cwd: scssDir});
await mkdir(distDir);
for (const file of files) {
	await copyFile(resolve(scssDir, file), resolve(distDir, file));
}
