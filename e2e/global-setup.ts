import setupCoverage from '@agnos-ui/code-coverage/setup';

async function globalSetup() {
	return await setupCoverage(__dirname);
}

export default globalSetup;
