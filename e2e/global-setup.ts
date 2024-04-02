import serverManager from './serverManager';

async function globalSetup() {
	const setupCoverage = process.env.COVERAGE === 'true' ? (await import('@agnos-ui/code-coverage/setup')).default : async () => async () => {};
	const coverageTeardown = await setupCoverage(import.meta.dirname);
	const serverManagerTeardown = await serverManager();
	return async () => {
		await serverManagerTeardown();
		await coverageTeardown();
	};
}

export default globalSetup;
