import {readFile, readdir} from 'node:fs/promises';

const validMdRegex = /^\d{2}-[a-z-]*\.md$/g;

export async function listMarkdown() {
	const categories = (await readdir(`../docs`)).filter((folder) => folder !== 'code');
	const files: {slug: string; path: string}[] = [];
	for (const category of categories) {
		(await readdir(`../docs/${category}`))
			.filter((file) => file.match(validMdRegex))
			.forEach((file) => {
				files.push({slug: `${category}/${file.slice(3, -3)}`, path: `../docs/${category}/${file}`});
			});
	}
	return files;
}

export async function listSections(base: string) {
	return (await readdir(`../docs/${base}`))
		.filter((file) => file.match(validMdRegex))
		.map((file) => {
			const name = file.slice(3, -3);
			return {name, title: name.substring(0, 1).toUpperCase() + name.substring(1).replace('-', ' ')};
		});
}

export async function retrieveMarkdown(slug: string) {
	const files = await listMarkdown();
	const file = files.find((file) => file.slug === slug);
	return file ? await readFile(file.path, 'utf-8') : undefined;
}
