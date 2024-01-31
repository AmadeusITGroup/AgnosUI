import type {Frameworks} from '$lib/stores';

export type AsyncFilesSet = Record<string, () => Promise<string>>;

export interface SampleInfo {
	componentName: string;
	sampleName: string;
	files: Record<Frameworks, {entryPoint: string; files: AsyncFilesSet; complementaryUrl: '/app' | '/app-tailwind' | ''}>;
	style: 'tailwind' | 'bootstrap';
}
