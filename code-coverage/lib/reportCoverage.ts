import {promises as fs} from 'fs';
import path from 'path';
import {v4 as uuidv4} from 'uuid';

export default async (baseDir: string, coverage: string) => {
	await fs.writeFile(path.join(baseDir, '.nyc_output', `${uuidv4()}.json`), coverage);
};
