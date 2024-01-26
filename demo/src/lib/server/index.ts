import {readFile, readdir} from 'node:fs/promises';

const validMdRegex = /^\d{2}-[a-zA-Z-]*\.md$/g;

const componentsSubMenu = [
	{title: 'Accordion', slug: 'components/accordion/', subpath: 'examples'},
	{title: 'Alert', slug: `components/alert/`, subpath: 'examples'},
	{title: 'Modal', slug: `components/modal/`, subpath: 'examples'},
	{title: 'Pagination', slug: `components/pagination/`, subpath: 'examples'},
	{title: 'Progressbar', slug: `components/progressbar/`, subpath: 'examples'},
	{title: 'Rating', slug: `components/rating/`, subpath: 'examples'},
	{title: 'Select', slug: `components/select/`, subpath: 'examples'},
	{title: 'Slider', slug: `components/slider/`, subpath: 'examples'},
];

export async function listPages() {
	const docFolders = (await readdir(`../docs`)).filter((folder) => folder !== 'code');
	const categories: {name: string; files: {slug: string; mdpath?: string; title: string; subpath: string}[]}[] = [];

	for (const docFolder of docFolders) {
		const name = docFolder.substring(3);
		categories.push({
			name,
			files:
				name === 'Components'
					? componentsSubMenu
					: (await readdir(`../docs/${docFolder}`))
							.filter((file) => file.match(validMdRegex))
							.map((file) => {
								const normalizedFileName = file.slice(3, -3);
								return {
									slug: `${name.toLowerCase()}/${normalizedFileName.toLowerCase()}`,
									mdpath: `../docs/${docFolder}/${file}`,
									title: normalizedFileName.replace('-', ' '),
									name: normalizedFileName,
									subpath: '',
								};
							}),
		});
	}
	return categories;
}

const regexFrameworkSpecific = /<!--\s+<framework-specific\s+src="([^"]*)">\s+-->[\s\S]*?<!--\s+<\/framework-specific>\s+-->/;

async function preparseMarkdown(path: string, framework: string): Promise<string> {
	let markdown = await readFile(path, 'utf-8');
	let match;
	do {
		match = markdown.match(regexFrameworkSpecific);
		if (match) {
			markdown =
				markdown.slice(0, match.index) + (await readFile(`../${framework}/docs/${match[1]}`)) + markdown.substring(match.index! + match[0].length);
		}
	} while (match);
	return markdown;
}

export async function retrieveMarkdown(slug: string, framework: string) {
	const categories = await listPages();
	let prev;
	let next;
	let file;
	for (let i = 0; i < categories.length; i++) {
		const category = categories[i];
		for (let j = 0; j < category.files.length; j++) {
			if (category.files[j].slug === slug) {
				file = category.files[j];
				if (j > 0) {
					prev = category.files[j - 1];
				} else if (i > 0) {
					prev = categories[i - 1].files[categories[i - 1].files.length - 1];
					prev = {...prev, title: `${categories[i - 1].name.replace('-', ' ')}: ${prev.title}`};
				}
				if (j < category.files.length - 1) {
					next = category.files[j + 1];
				} else if (i < categories.length - 1) {
					next = categories[i + 1].files[0];
					next = {...next, title: `${categories[i + 1].name.replace('-', ' ')}: ${next.title}`};
				}
			}
		}
	}
	return file ? {prev, next, content: await preparseMarkdown(file.mdpath!, framework)} : undefined;
}
