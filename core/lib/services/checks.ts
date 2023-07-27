export function isNumber(value: any): value is number {
	return typeof value === 'number' && !isNaN(value) && Number.isFinite(value);
}

export function isBoolean(value: any): value is boolean {
	return value === true || value === false;
}

export function isFunction(value: any): value is (...args: any[]) => any {
	return typeof value === 'function';
}

export function isString(value: any): value is string {
	return typeof value === 'string';
}

// TODO should we check that max > min?
export function getValueInRange(value: number, max: number, min = 0): number {
	return Math.max(Math.min(value, max), min);
}
