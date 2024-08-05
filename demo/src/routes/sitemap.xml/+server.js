import {listTypedocPages} from '$lib/api';
import {componentsMetadata, daisyUIMetadata} from '$lib/components-metadata';

export const prerender = true;

const frameworks = ['angular', 'react', 'svelte'];
const apiFrameworks = ['typescript', ...frameworks];
const packageTypes = ['headless', 'bootstrap'];
const componentNames = Object.keys(componentsMetadata).map((component) => component.toLowerCase());
// should not be different, but just in case
const daisyComponentNames = Object.keys(daisyUIMetadata).map((component) => component.toLowerCase());

const docRoutes = Object.keys(import.meta.glob('../../../../docs/**/*.md', {query: '?url', eager: true, import: 'default'}))
	.filter((route) => !route.endsWith('/doc.md'))
	.map((route) =>
		route
			.substring(17)
			.replace(/^\d{2}-([^/]*)\/\d{2}-([^/]*)\.md$/, 'docs/[framework]/$1/$2')
			.toLowerCase(),
	);
const allRoutes = Object.keys(import.meta.glob('../**/+page.svelte', {query: '?url', eager: true, import: 'default'}))
	.map((route) => route.substring(3).replace(/\/?\+page\.svelte$/g, ''))
	.flatMap((route) => {
		if (!route.includes('[framework]')) {
			return route;
		}
		if (route === 'docs/[framework]/[...slug]') {
			return frameworks.flatMap((fwk) => docRoutes.map((docRoute) => docRoute.replace('[framework]', fwk)));
		}
		if (route === 'docs/[framework]/components/[component]/api') {
			return frameworks.flatMap((fwk) => {
				const apiRoute = route.replace('[framework]', fwk);
				return componentNames.map((component) => apiRoute.replace('[component]', component));
			});
		}
		if (route === 'docs/[framework]/daisyUI/[component]/api') {
			return frameworks.flatMap((fwk) => {
				const apiRoute = route.replace('[framework]', fwk);
				return daisyComponentNames.map((component) => apiRoute.replace('[component]', component));
			});
		}
		if (route === 'api/[framework]/[type]/[...slug]') {
			return [];
		}
		return frameworks.map((fwk) => route.replace('[framework]', fwk));
	});

const BASE = 'https://amadeusitgroup.github.io/AgnosUI/latest/';
async function getAllApi() {
	const allApiDocs = [];
	for (const fwk of apiFrameworks) {
		for (const pkgType of packageTypes) {
			const docs = (await listTypedocPages(fwk, pkgType)).categories;
			for (const doc of docs) {
				if (doc.path) {
					allApiDocs.push(`api/${fwk}/${pkgType}/${doc.path}`);
				} else if (doc.files) {
					for (const subDoc of doc.files) {
						allApiDocs.push(`${subDoc.path}`);
					}
				}
			}
		}
	}
	return allApiDocs;
}

export async function GET() {
	const allApias = await getAllApi();
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${allRoutes
				.concat(allApias)
				.map((route) => `<url><loc>${BASE}${route}</loc></url>`)
				.join('\n')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}
