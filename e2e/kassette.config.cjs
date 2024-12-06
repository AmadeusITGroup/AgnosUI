/**
 * @return { import("@amadeus-it-group/kassette").ConfigurationSpec }
 */
exports.getConfiguration = () => {
	return {
		port: 4001,
		mocksFolder: './e2e/mocks-folder',
		mode: process.env.CI === 'true' ? 'local' : 'local_or_download',
		delay: 0,
	};
};
