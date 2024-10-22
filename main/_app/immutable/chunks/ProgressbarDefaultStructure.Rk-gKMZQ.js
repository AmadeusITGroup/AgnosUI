const t=`<script lang="ts">
	import {Slot} from '@agnos-ui/svelte-headless/slot';
	import type {ProgressbarContext} from './progressbar.gen';

	let {state, api, directives}: ProgressbarContext = $props();
<\/script>

<div class="progress" style:height={state.height}>
	<div
		class={\`progress-bar \${state.type ? \`text-bg-\${state.type}\` : ''}\`}
		class:progress-bar-striped={state.striped}
		class:progress-bar-animated={state.animated}
		style:width={\`\${state.percentage}%\`}
	>
		<Slot content={state.children} props={{state, api, directives}} />
	</div>
</div>
`;export{t as default};
