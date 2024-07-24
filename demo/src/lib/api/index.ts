import {read} from '$app/server';

type Doc = {
	name: string;
	kind: number;
	sources: {
		fileName: string;
	}[];
};

type TypedocJson = {
	children: Doc[];
};

const typedocFiles = import.meta.glob<string>(
	['../../../../(angular|react|svelte)/(headless|bootstrap)/generated/*.json', '../../../../(core|core-bootstrap)/generated/*.json'],
	{query: '?url', eager: true, import: 'default'},
);
const allMds = import.meta.glob<string>(
	['../../../../(angular|react|svelte)/(headless|bootstrap)/generated/md/**/*.md', '../../../../(core|core-bootstrap)/generated/md/**/*.md'],
	{query: '?url', eager: true, import: 'default'},
);
const allGlobals = import.meta.glob<string>(
	['../../../../(angular|react|svelte)/(headless|bootstrap)/generated/md/globals.md', '../../../../(core|core-bootstrap)/generated/md/globals.md'],
	{query: '?url', eager: true, import: 'default'},
);

function pkgFolder(framework: string, type: string) {
	return `${framework === 'typescript' ? (type === 'headless' ? 'core' : 'core-bootstrap') : `${framework}/${type}`}`;
}

async function getProject(framework: string, type: string): Promise<TypedocJson> {
	const pathFile = `../../../../${pkgFolder(framework, type)}/generated/${framework}-${type}.json`;
	return (await read(typedocFiles[pathFile]).json()) as TypedocJson;
}
async function getGlobals(framework: string, type: string) {
	const pathFile = `../../../../${pkgFolder(framework, type)}/generated/md/globals.md`;
	return await read(allGlobals[pathFile]).text();
}

async function getMapMdLocationBySymbol(framework: string, type: string) {
	const globals = await getGlobals(framework, type);
	const map = new Map<string, string>();
	const regexGlobal = /-\s\[([^\]]*)\]\(([^)]*)\)/;
	for (const line of globals.split('\n')) {
		const match = line.match(regexGlobal);
		if (match) {
			map.set(match[1].replace(/\\/g, ''), match[2]);
		}
	}
	return map;
}

const regexComponent = /\/src\/(generated\/)?components\/([^/]+)/;
const regexTransitions = /\/src\/(generated\/)?services\/transitions($|\/)/;
const regexService = /\/src\/(generated\/)?services($|\/)/;
const regexUtil = /\/src\/(generated\/)?utils($|\/)/;

const cacheListTypedoc = new Map<string, Map<string, ReturnType<typeof buildListTypedocPages>>>();

async function buildListTypedocPages(framework: string, type: string) {
	const project = await getProject(framework, type);
	const allDocs = project.children;

	const components = new Map<string, Doc[]>();
	const services = new Map<string, Doc[]>();
	const transitions = new Map<string, Doc[]>();
	const utils = new Map<string, Doc[]>();
	const config: Doc[] = [];
	const types: Doc[] = [];
	const slot: Doc[] = [];
	const symbolLocation = new Map<string, string>();

	for (const doc of allDocs) {
		const source = doc.sources[0].fileName;
		const fileName = source.substring(source.lastIndexOf('/') + 1, source.indexOf('.'));
		const matchComp = source.match(regexComponent);
		if (matchComp) {
			const componentName = matchComp[2];
			if (!components.has(componentName)) {
				components.set(componentName, []);
			}
			components.get(componentName)!.push(doc);
			symbolLocation.set(doc.name, `components/${componentName}`);
		}
		const matchTransition = source.match(regexTransitions);
		const matchService = source.match(regexService);
		if (matchTransition) {
			if (!transitions.has(fileName)) {
				transitions.set(fileName, []);
			}
			transitions.get(fileName)!.push(doc);
			symbolLocation.set(doc.name, `services/transitions/${fileName}`);
		} else if (matchService) {
			if (!services.has(fileName)) {
				services.set(fileName, []);
			}
			services.get(fileName)!.push(doc);
			symbolLocation.set(doc.name, `services/${fileName}`);
		}
		const matchUtils = source.match(regexUtil);
		if (matchUtils) {
			if (!utils.has(fileName)) {
				utils.set(fileName, []);
			}
			utils.get(fileName)!.push(doc);
			symbolLocation.set(doc.name, `utils/${fileName}`);
		}
		if (fileName === 'config') {
			config.push(doc);
			symbolLocation.set(doc.name, `config`);
		} else if (fileName === 'types') {
			types.push(doc);
			symbolLocation.set(doc.name, `types`);
		} else if (fileName === 'slot') {
			slot.push(doc);
			symbolLocation.set(doc.name, `slot`);
		} else if (!matchComp && !matchService && !matchUtils) {
			// only AgnosUIAngularModule is ignored
		}
	}
	return {
		categories: [
			{
				name: 'Types',
				path: 'types',
				docs: types,
			},
			{
				name: 'Config',
				path: 'config',
				docs: config,
			},
			...(framework !== 'typescript' && framework !== 'svelte'
				? [
						{
							name: 'Slot',
							path: 'slot',
							docs: slot,
						},
					]
				: []),
			{
				name: 'Components',
				files: [...components.keys()].sort().map((component) => ({
					label: component.slice(0, 1).toUpperCase() + component.slice(1),
					path: `api/${framework}/${type}/components/${component}`,
					slug: `components/${component}`,
					docs: components.get(component),
				})),
			},
			...(framework !== 'typescript' || type !== 'bootstrap'
				? [
						{
							name: 'Services',
							files: [...services.keys()].sort().map((service) => ({
								label: service,
								path: `api/${framework}/${type}/services/${service}`,
								slug: `services/${service}`,
								docs: services.get(service),
							})),
						},
					]
				: []),
			{
				name: 'Transitions',
				files: [...transitions.keys()].sort().map((transition) => ({
					label: transition,
					path: `api/${framework}/${type}/services/transitions/${transition}`,
					slug: `services/transitions/${transition}`,
					docs: transitions.get(transition),
				})),
			},
			...(framework !== 'typescript' || type !== 'bootstrap'
				? [
						{
							name: 'Utils',
							files: [...utils.keys()].sort().map((util) => ({
								label: util,
								path: `api/${framework}/${type}/utils/${util}`,
								slug: `utils/${util}`,
								docs: utils.get(util),
							})),
						},
					]
				: []),
		],
		symbolLocation,
	};
}

export function listTypedocPages(framework: string, type: string) {
	if (cacheListTypedoc.has(framework) && cacheListTypedoc.get(framework)!.has(type)) {
		return cacheListTypedoc.get(framework)!.get(type)!;
	}
	const categoriesAndSymbol = buildListTypedocPages(framework, type);
	if (!cacheListTypedoc.has(framework)) {
		cacheListTypedoc.set(framework, new Map());
	}
	cacheListTypedoc.get(framework)!.set(type, categoriesAndSymbol);
	return categoriesAndSymbol;
}

function kindToMeta(kind: number): {folder: string; type: string} {
	if (kind === 256) {
		return {folder: 'interfaces', type: 'interface'};
	}
	if (kind === 225 || kind === 2097152) {
		return {folder: 'type-aliases', type: 'type alias'};
	}
	if (kind === 64) {
		return {folder: 'functions', type: 'function'};
	}
	if (kind === 32) {
		return {folder: 'variables', type: 'constant'};
	}
	if (kind === 128) {
		return {folder: 'classes', type: 'class'};
	}
	return {folder: '', type: ''};
}

type SymbolDoc = {
	source: string;
	name: string;
};

async function docsToReadme(
	framework: string,
	type: string,
	slug: string,
	docs: Doc[],
	symbolLocation: Map<string, string>,
	inApi: boolean,
): Promise<SymbolDoc[]> {
	const content: SymbolDoc[] = [];
	const mapMd = await getMapMdLocationBySymbol(framework, type);
	for (const doc of docs.sort((a, b) => a.name.localeCompare(b.name))) {
		const meta = kindToMeta(doc.kind);
		if (!meta.folder) {
			continue;
		}
		if (!mapMd.has(doc.name)) {
			throw new Error(`Globals did not contain symbol ${doc.name} from ${framework} ${type}`);
		}
		const mdPath = `../../../../${pkgFolder(framework, type)}/generated/md/${mapMd.get(doc.name)}`;
		if (!allMds[mdPath]) {
			throw new Error(`Could not retrieve md ${mdPath} from ${framework} ${type}`);
		}
		const file = await read(allMds[mdPath]).text();
		let toInclude = true;
		const fileContent: string[] = [];
		for (const line of file.split('\n')) {
			if (line.startsWith('##') || line.startsWith('***')) {
				toInclude = true;
			}
			if (line.match(/^##(#)*\s(Extends|Inherited from|Defined in|Overrides)/)) {
				toInclude = false;
			}
			if (toInclude) {
				fileContent.push(
					line
						.replace(/^(#(#+).*)\(\)$/, '$1')
						.replace(/^(##+.*)\\([z_])/g, '$1$2')
						.replace(
							/\]\((\.\.\/(type-aliases|functions|interfaces|variables|enums|classes)\/)?([^.]*)\.md(#[^)]*)?\)/g,
							(_m, _a, _b, name, method) => {
								const suffix = name.toLowerCase() + (method ? '-' + method.slice(1) : '');
								if (symbolLocation.get(name) === slug) {
									return `](#${suffix})`;
								} else {
									return `](${inApi ? '' : `../../../../api/${framework}/${type}/${slug}/../`}${slug.includes('/') ? '../'.repeat(slug.replace(/[^/]/g, '').length) : './'}${symbolLocation.get(name)}#${suffix})`;
								}
							},
						)
						.replace(/^#(#+)/, '##$1'),
				);
			}
		}
		content.push({source: `## ${meta.type}_${doc.name}\n` + fileContent.join('\n'), name: doc.name});
	}
	return content;
}

export async function retrieveMarkdown(framework: string, type: string, slug: string, inApi = true) {
	const {categories, symbolLocation} = await listTypedocPages(framework, type);
	let docs: Doc[] = [];
	if (['config', 'types', 'slot'].includes(slug)) {
		docs = categories.find((category) => category.path === slug)!.docs!;
	} else {
		const [categoryName] = slug.startsWith('services/transitions') ? ['transitions'] : slug.split('/');
		const category = categories.find((cat) => cat.name.toLowerCase() === categoryName);
		if (category) {
			docs = category.files?.find((file) => file.slug === slug)?.docs ?? [];
		}
	}
	if (!docs.length) {
		return undefined;
	}
	const content = await docsToReadme(framework, type, slug, docs, symbolLocation, inApi);
	return {
		content,
		title: `API ${slug.includes('/') ? slug.slice(slug.lastIndexOf('/') + 1) : slug}`,
		import:
			framework === 'angular'
				? `@agnos-ui/angular-${type}`
				: framework === 'typescript'
					? `@agnos-ui/core${type === 'bootstrap' ? '-bootstrap' : ''}/${slug}`
					: `@agnos-ui/${framework}-${type}/${slug}`,
	};
}
