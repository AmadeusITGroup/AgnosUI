export const load = () => {
	return {
		menu: [
			{
				title: 'News 2024',
				submenu: [
					{label: 'Roadmap to 1.0', path: 'blog/2024-12-06'},
					{label: 'State management with Tansu', path: 'blog/2024-02-01', slug: 'blog/2024-02-01'},
				],
			},
		],
		since: 'v0.1.1',
	};
};
