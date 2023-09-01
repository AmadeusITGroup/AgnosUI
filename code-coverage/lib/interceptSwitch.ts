const key = '__AGNOS_UI_CODE_COVERAGE_SKIP_INTERCEPT__';
const global = globalThis as any;

export const intercept = () => (global[key] ?? 0) === 0;

export const skipIntercept = async <T>(fn: () => T | Promise<T>): Promise<T> => {
	try {
		const value = global[key] ?? 0;
		global[key] = value + 1;
		return await fn();
	} finally {
		global[key]--;
	}
};
