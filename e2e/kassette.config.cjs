/**
 * @return { import("@amadeus-it-group/kassette").ConfigurationSpec }
 */
exports.getConfiguration = () => {
	return {
		port: 4001,
		mocksFolder: './e2e/mocks-folder',
		mode: 'local_or_download',
		delay: 0,
	};
};
