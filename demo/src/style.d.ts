declare module '@agnos-ui/styles/*' {
	const style: import('./lib/layout/styles').StyleInfo;
	export default style;
}
declare module '@agnos-ui/styles' {
	const style: Record<string, import('./lib/layout/style').StyleInfo>;
	export default style;
}
