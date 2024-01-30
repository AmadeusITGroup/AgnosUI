const e=`<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte/components/progressbar';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';

	const widgetsConfig$ = createWidgetsDefaultConfig();
	$widgetsConfig$ = {progressbar: {slotDefault: (widget) => \`\${widget.state.percentage}%\`}};
<\/script>

<div class="d-flex flex-column gap-2">
	<Progressbar value={20} />
	<Progressbar value={40} className="text-bg-success" />
	<Progressbar value={60} className="text-bg-info" />
	<Progressbar value={80} className="text-bg-warning" />
	<Progressbar value={100} className="text-bg-danger" />
</div>
`;export{e as default};
