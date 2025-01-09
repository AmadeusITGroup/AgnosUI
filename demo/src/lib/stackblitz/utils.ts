import type {SampleInfo} from '$lib/layout/sample';
import type {Frameworks} from '$lib/routing.svelte';
import type {Project} from '@stackblitz/sdk';
import type {AsyncFilesSet} from '../layout/sample';

export type StackblitzProcessor = (project: Project, sample: SampleInfo, framework: Frameworks) => Promise<void> | void;

export const isBootstrapCondition = (sample: SampleInfo) => sample.style === 'bootstrap';
export const isDaisyuiCondition = (sample: SampleInfo) => sample.style === 'daisyui';

export const addAsyncFiles =
	(files: AsyncFilesSet, prefix = '', removePrefix?: string, condition: (sample: SampleInfo) => boolean = () => true): StackblitzProcessor =>
	async (project, sample) => {
		if (condition(sample)) {
			await Promise.all(
				Object.keys(files).map(async (fileName) => {
					const finalName = prefix + (removePrefix && fileName.startsWith(removePrefix) ? fileName.substring(removePrefix.length) : fileName);
					project.files[finalName] = await files[fileName]();
				}),
			);
		}
	};
