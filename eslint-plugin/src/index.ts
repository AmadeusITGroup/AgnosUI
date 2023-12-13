import {angularCheckPropsRule} from './angular-check-props';
import {checkReplaceImportsRule} from './check-replace-imports';
import {svelteCheckPropsRule} from './svelte-check-props';
import {svelteCheckSlotsRule} from './svelte-check-slots';

export default {
	rules: {
		'angular-check-props': angularCheckPropsRule,
		'check-replace-imports': checkReplaceImportsRule,
		'svelte-check-props': svelteCheckPropsRule,
		'svelte-check-slots': svelteCheckSlotsRule,
	},
};
