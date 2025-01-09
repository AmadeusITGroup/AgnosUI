import type {Frameworks} from '$lib/routing.svelte';
import stackblitz from '@stackblitz/sdk';
import type {SampleInfo} from '../layout/sample';
import {prepareStackblitzProject} from './prepareProject';
import {createFrameworkProcessors} from './unreleasedProcessors';

const frameworkProcessors = createFrameworkProcessors();

export const openInStackblitz = async (sample: SampleInfo, framework: Frameworks) => {
	const {project, openFile} = await prepareStackblitzProject(sample, framework, frameworkProcessors);
	stackblitz.openProject(project, {newWindow: true, openFile});
};
