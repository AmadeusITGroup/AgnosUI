const pathRegExp = /\\/g;
export function normalizePath(str: string) {
	return str.replace(pathRegExp, '/');
}
