const n=`declare module '!raw-loader!*' {
	const contents: string;
	export = contents;
}
`;export{n as default};
