import {angularCheckPropsRule} from './angular-check-props';
import {svelteCheckPropsRule} from './svelte-check-props';
import {svelteCheckSlotsRule} from './svelte-check-slots';

export default {
	rules: {
		'angular-check-props': angularCheckPropsRule,
		'svelte-check-props': svelteCheckPropsRule,
		'svelte-check-slots': svelteCheckSlotsRule,
	},
};
