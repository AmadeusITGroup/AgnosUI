import type {SampleInfo} from '../demo/src/lib/layout/sample';
export type {Frameworks} from '../demo/src/lib/stores';
export type SimpleSampleInfo = Pick<SampleInfo, 'style' | 'componentName' | 'sampleName'>;
export type Project = 'singlebrowser' | 'main' | 'demo' | 'ssr';
