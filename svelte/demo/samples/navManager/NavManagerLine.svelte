<script lang="ts">
	import type {NavManagerItemConfig} from '@agnos-ui/core';
	import {createNavManager} from '@agnos-ui/core';

	const {directive, focusLeft, focusRight, focusFirst, focusLast} = createNavManager();

	const navManagerConfig: NavManagerItemConfig = {
		keys: {
			ArrowLeft: focusLeft,
			ArrowRight: focusRight,
			Home: focusFirst,
			End: focusLast,
		},
	};

	export let text = '';
</script>

<div class="d-flex demo-navmanager-line">
	<input use:directive={navManagerConfig} type="text" value={text} class="form-control me-1" />
	<span use:directive={navManagerConfig} tabindex="-1" class="form-control w-auto me-1">{text}</span>
	<input use:directive={navManagerConfig} tabindex="-1" type="checkbox" class="form-check-input align-self-center me-1" />
	<input use:directive={navManagerConfig} tabindex="-1" type="text" value={text} disabled class="form-control me-1" />
	<input use:directive={navManagerConfig} tabindex="-1" type="text" value={text} class="form-control me-1" />
</div>
