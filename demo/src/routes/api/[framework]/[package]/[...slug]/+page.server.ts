import {readFile} from 'fs/promises';
import {join} from 'path';

export const load = async ({params}) => {
	// TODO convert all href after reading the file... (should be done in the typedoc plugin maybe ? hopefully)
	const slugRegex = /([^/]*)\/([^/]*)/;
	const prefix = `_agnos_ui_${params.package === 'core' ? 'core' : params.framework + (params.package === 'headless' ? '_headless' : '')}`;
	const filePath = params.slug ? `${params.slug.match(slugRegex)![1]}/${prefix}.${params.slug.match(slugRegex)![2]}.html` : `modules/${prefix}.html`;
	console.log(`Trying to read ${filePath}`);
	return {
		html: await readFile(join('generated/typedoc', filePath), 'utf-8'),
	};
};
