import {spawn} from 'child_process';
import {rm} from 'fs/promises';
import {join} from 'path';
import {runServer} from 'verdaccio';
import {publish, processEndPromise} from '../scripts/npmPublish.js';

const __dirname = import.meta.dirname;

const main = async () => {
	const storageFolder = join(__dirname, 'storage');
	await rm(storageFolder, {recursive: true, force: true});
	const verdaccio = await runServer(join(__dirname, 'config.yaml'));
	try {
		await new Promise((resolve) => verdaccio.listen(4874, resolve));

		process.env.NPM_CONFIG_USERCONFIG = join(storageFolder, '.npmrc');
		process.env.NPM_CONFIG_REGISTRY = 'http://localhost:4874';

		const npmLoginProcess = spawn('npm', ['login', '--auth-type', 'legacy'], {
			shell: process.platform == 'win32',
			stdio: ['pipe', 'pipe', 'inherit'],
		});

		const npmLoginEnd = processEndPromise(npmLoginProcess);

		let buffer = '';
		npmLoginProcess.stdout.on('data', (data) => {
			buffer += data.toString();
			if (buffer.includes('Username:')) {
				buffer = '';
				npmLoginProcess.stdin.write('verdaccio\n');
			} else if (buffer.includes('Password:')) {
				buffer = '';
				npmLoginProcess.stdin.write('verdaccio\n');
			} else if (buffer.includes('Email:')) {
				buffer = '';
				npmLoginProcess.stdin.write('verdaccio@example.com\n');
			}
		});

		await npmLoginEnd;
		console.log('Logged in');
		await publish();
	} finally {
		await new Promise((resolve) => verdaccio.close(resolve));
	}
};

main();
