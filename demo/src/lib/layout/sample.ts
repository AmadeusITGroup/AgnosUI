import type {Frameworks} from '$lib/routing.svelte';

export type AsyncFilesSet = Record<string, () => Promise<string>>;

export interface SampleInfo {
	componentName: string;
	sampleName: string;
	files: Record<Frameworks, {entryPoint: string; files: AsyncFilesSet; complementaryUrl: '/bootstrap' | '/daisyui' | ''}>;
	style: 'daisyui' | 'bootstrap';
}
