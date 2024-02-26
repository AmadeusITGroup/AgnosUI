const n=`declare module '*.svg' {
	const contents: string;
	export = contents;
}
declare module '*.txt' {
	const contents: string;
	export = contents;
}
`;export{n as default};
