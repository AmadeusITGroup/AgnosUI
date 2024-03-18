import {componentsMetadata, daisyUIMetadata} from '../components-metadata';
import frontMatter from 'front-matter';

const validMdRegex = /^\d{2}-[a-zA-Z-]*\.md$/g;

const componentsSubMenu = [
	{...componentsMetadata.Accordion, slug: 'components/accordion/', subpath: 'examples', attributes: {}},
	{...componentsMetadata.Alert, slug: `components/alert/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Modal, slug: `components/modal/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Pagination, slug: `components/pagination/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Progressbar, slug: `components/progressbar/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Rating, slug: `components/rating/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Select, slug: `components/select/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Slider, slug: `components/slider/`, subpath: 'examples', attributes: {}},
	{...componentsMetadata.Toast, slug: `components/toast/`, subpath: 'examples', attributes: {}},
];

const daisyUISubMenu = [
	{...daisyUIMetadata.Pagination, slug: `daisyUI/pagination/`, subpath: 'headless', attributes: {}},
	{...daisyUIMetadata.Progressbar, slug: `daisyUI/progressbar/`, subpath: 'headless', attributes: {}},
	{...daisyUIMetadata.Rating, slug: `daisyUI/rating/`, subpath: 'headless', attributes: {}},
];

interface Doc {
	name: string;
	files: {
		slug: string;
		content?: string;
		title: string;
		subpath: string;
		status: string;
		attributes: Record<string, string>;
	}[];
}

const docFiles = import.meta.glob<string>('../../../../docs/*/*.md', {query: '?raw', eager: true, import: 'default'});
const docs: Doc[] = [];
for (const [key, value] of Object.entries(docFiles)) {
	const name = key.substring(20, key.indexOf('/', 20));
	if (name === 'Components') {
		if (!docs.some((doc) => doc.name === name)) {
			docs.push({name, files: componentsSubMenu});
		} else {
			continue;
		}
	}
	if (name === 'DaisyUI') {
		if (!docs.some((doc) => doc.name === name)) {
			docs.push({name, files: daisyUISubMenu});
		} else {
			continue;
		}
	}
	if (!key.substring(key.indexOf('/', 20) + 1).match(validMdRegex)) continue;
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
		subpath: '',
		status: '',
		attributes: fmData.attributes,
	});
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
	return file ? {prev, next, content: preparseMarkdown(file.content!, framework), ...file.attributes} : undefined;
}
