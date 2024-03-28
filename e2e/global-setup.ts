import setupCoverage from '@agnos-ui/code-coverage/setup';

async function globalSetup() {
	return await setupCoverage(import.meta.dirname);
}

export default globalSetup;
