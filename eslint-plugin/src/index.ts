import {angularCheckPropsRule} from './angular-check-props';
import {checkDefaultPropsRule} from './check-default-props';
import {checkReplaceImportsRule} from './check-replace-imports';
import {svelteCheckPropsRule} from './svelte-check-props';

export default {
	rules: {
		'angular-check-props': angularCheckPropsRule,
		'check-default-props': checkDefaultPropsRule,
		'check-replace-imports': checkReplaceImportsRule,
		'svelte-check-props': svelteCheckPropsRule,
	},
};
