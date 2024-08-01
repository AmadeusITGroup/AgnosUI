import {componentsMetadata, daisyUIMetadata} from '../components-metadata';
import frontMatter from 'front-matter';

const validMdRegex = /^\d{2}-[a-zA-Z-]*\.md$/g;

const componentsSubMenu = Object.entries(componentsMetadata).map(([key, val]) => ({
	title: val.title,
	status: val.status,
	slug: `components/${key.toLowerCase()}/`,
	subpath: 'examples',
}));

const daisyUISubMenu = Object.entries(daisyUIMetadata).map(([key, val]) => ({
	title: val.title,
	status: val.status,
	slug: `daisyUI/${key.toLowerCase()}/`,
	subpath: 'headless',
}));

interface Doc {
	name: string;
	files: {
		slug: string;
		content?: string;
		title: string;
		subpath?: string;
		status: string;
		attributes?: Record<string, string>;
	}[];
}

const docFiles = import.meta.glob<string>('../../../../docs/*/*.md', {query: '?raw', eager: true, import: 'default'});
const docs: Doc[] = [];
for (const [key, value] of Object.entries(docFiles)) {
	const name = key.substring(20, key.indexOf('/', 20));
	if (key.substring(key.indexOf('/', 20) + 1).match(validMdRegex)) {
		let docToPush = docs.find((doc) => doc.name === name);
		if (!docToPush) {
			docToPush = {
				name,
				files: [],
			};
			docs.push(docToPush);
		}
		const normalizedFileName = key.substring(key.indexOf('/', 20) + 1).slice(3, -3);

		const fmData = frontMatter<Record<string, string>>(value);
		for (const key of Object.keys(fmData.attributes)) {
			if (typeof fmData.attributes[key] === 'string' && fmData.attributes[key]) {
				fmData.attributes[key] = fmData.attributes[key].trim();
			}
		}
		docToPush.files.push({
			slug: `${name.toLowerCase()}/${normalizedFileName.toLowerCase()}`,
			content: fmData.body,
			title: normalizedFileName.replace('-', ' '),
			status: '',
			attributes: fmData.attributes,
		});
	}
	if (name === 'Headless-Components') {
		const docToPush = docs.find((doc) => doc.name === name);
		if (!docToPush) {
			docs.push({name, files: daisyUISubMenu});
		} else {
			docToPush.files = docToPush.files.concat(daisyUISubMenu);
		}
	}
	if (name === 'Bootstrap-Components') {
		const docToPush = docs.find((doc) => doc.name === name);
		if (!docToPush) {
			docs.push({name, files: componentsSubMenu});
		} else {
			docToPush.files = docToPush.files.concat(componentsSubMenu);
		}
	}
}

const fwkDocFiles = import.meta.glob('../../../../*/docs/*.md', {query: '?raw', eager: true, import: 'default'});
const fwkDocs: Record<string, string> = {};
for (const [key, value] of Object.entries(fwkDocFiles)) {
	fwkDocs[key.substring(12)] = value as string;
}

export function listPages() {
	return structuredClone(docs);
}

const regexFrameworkSpecific = /<!--\s+<framework-specific\s+src="([^"]*)">\s+-->[\s\S]*?<!--\s+<\/framework-specific>\s+-->/;

function preparseMarkdown(content: string, framework: string): string {
	let markdown = content;
	let match;
	do {
		match = markdown.match(regexFrameworkSpecific);
		if (match) {
			markdown = markdown.slice(0, match.index) + fwkDocs[`${framework}/docs/${match[1]}`] + markdown.substring(match.index! + match[0].length);
		}
	} while (match);
	return markdown;
}

export function retrieveMarkdown(slug: string, framework: string) {
	const categories = listPages();
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
	return file ? {prev, next, content: preparseMarkdown(file.content!, framework), ...(file.attributes ?? {})} : undefined;
}
