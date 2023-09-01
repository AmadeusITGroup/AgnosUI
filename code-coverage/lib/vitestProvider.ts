import type {AfterSuiteRunMeta, CoverageProvider, CoverageProviderModule, ReportContext, Vitest} from 'vitest';
import setup from './setup';
import reportCoverage from './reportCoverage';

const customCoverageProviderModule: CoverageProviderModule = {
	async getProvider(): Promise<CoverageProvider> {
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
			async clean(clean?: boolean) {
				finalizeReport = await setup(ctx!.config.root);
			},
			async onAfterSuiteRun({coverage}: AfterSuiteRunMeta) {
				if (coverage) {
					reportCoverage(ctx!.config.root, JSON.stringify(coverage));
				}
			},
			async reportCoverage(reportContext?: ReportContext) {
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
