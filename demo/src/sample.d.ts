declare module '@agnos-ui/samples/*' {
	const sample: import('./lib/layout/sample').SampleInfo;
	export default sample;
}
declare module '@agnos-ui/samples' {
	const samples: Record<string, import('./lib/layout/sample').SampleInfo>;
	export default samples;
}
