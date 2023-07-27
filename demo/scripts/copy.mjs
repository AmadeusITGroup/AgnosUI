import * as path from 'path';
import * as fs from 'fs/promises';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function copyToDemo(framework) {
	const src = path.join(__dirname, `../../${framework}/dist/demo/`);
	const dst = path.join(__dirname, `../dist/${framework}/samples/`);

	await fs.rm(dst, {recursive: true, force: true});
	await fs.cp(src, dst, {recursive: true});
}

copyToDemo(process.argv[2]);
