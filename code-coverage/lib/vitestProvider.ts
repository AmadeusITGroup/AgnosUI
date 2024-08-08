import type {CoverageProvider, CoverageProviderModule, Vitest} from 'vitest/node';
import type {AfterSuiteRunMeta} from 'vitest';

const customCoverageProviderModule: CoverageProviderModule = {
	getProvider(): CoverageProvider {
		let ctx: Vitest | undefined;
		let finalizeReport: undefined | (() => Promise<void>);
		return {
			name: '@agnos-ui/code-coverage',
			initialize(newCtx: Vitest) {
				ctx = newCtx;
			},
			resolveOptions() {
				return ctx!.config.coverage;
			},
			async clean() {
				const {default: setup} = await import('./setup');
				finalizeReport = await setup(ctx!.config.root);
			},
			async onAfterSuiteRun({coverage}: AfterSuiteRunMeta) {
				if (coverage) {
					const {default: reportCoverage} = await import('./reportCoverage');
					await reportCoverage(ctx!.config.root, JSON.stringify(coverage));
				}
			},
			async generateCoverage() {},
			async reportCoverage() {
				await finalizeReport?.();
				finalizeReport = undefined;
			},
		};
	},
	takeCoverage() {
		const coverage = (globalThis as any).__coverage__;
		(globalThis as any).__coverage__ = {};
		return coverage;
	},
};

export default customCoverageProviderModule;
