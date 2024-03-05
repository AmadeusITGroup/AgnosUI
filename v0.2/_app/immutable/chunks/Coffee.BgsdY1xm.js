const t=`<script lang="ts">
	import {type ProgressbarSlots} from '@agnos-ui/svelte/components/progressbar';
	type $$Props = ProgressbarSlots['structure'];
	type $$Slots = ProgressbarSlots;

	export let state: $$Props['state'];
	import './custom.scss';
<\/script>

<div class="position-relative" style="height: 300px">
	<div class="cup">
		<div class="cup-fill-parent">
			<div class="cup-fill" style={\`height: \${1.7 * state.percentage}px;\`}>
				{#if state.percentage >= 50}
					<div class="bubble bubble-1" />
					<div class="bubble bubble-2" />
					<div class="bubble bubble-3" />
				{/if}
			</div>
		</div>
	</div>
</div>
`;export{t as default};
