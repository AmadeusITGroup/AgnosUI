export const prerender = true;

const frameworks = ['angular', 'react', 'svelte'];

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
		return frameworks.map((fwk) => route.replace('[framework]', fwk));
	});

const BASE = 'https://amadeusitgroup.github.io/AgnosUI/latest/';

export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${allRoutes.map((route) => `<url><loc>${BASE}${route}</loc></url>`).join('\n')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}
