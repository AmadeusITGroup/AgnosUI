/**
 * @return { import("@amadeus-it-group/kassette").ConfigurationSpec }
 */
exports.getConfiguration = () => {
	return {
		port: 4001,
		mocksFolder: './e2e/mocks-folder',
		delay: 0,
		mode: 'local',
		hook: ({mock}) => {
			if (mock.request.url.href.startsWith('https://www.agnosui.dev/static/')) {
				mock.setMode('remote');
			}
			mock.setLocalPath([mock.request.hostname, mock.request.pathname, mock.request.method]);
		},
	};
};
