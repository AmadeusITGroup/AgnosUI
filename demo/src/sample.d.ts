declare module '@agnos-ui/samples/*' {
	const sample: import('./lib/layout/sample').SampleInfo;
	export default sample;
}
declare module '@agnos-ui/samples' {
	const samples: import('./lib/layout/sample').SampleInfo[];
	export default samples;
}
