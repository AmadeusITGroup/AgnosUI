const e=`<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte/components/progressbar';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';

	createWidgetsDefaultConfig().set({progressbar: {slotDefault: (widget) => \`\${widget.state.percentage}%\`}});
<\/script>

<div class="d-flex flex-column gap-2">
	<Progressbar value={20} />
	<Progressbar value={40} type="success" />
	<Progressbar value={60} type="info" />
	<Progressbar value={80} type="warning" />
	<Progressbar value={100} type="danger" />
</div>
`;export{e as default};
