const t=`<script lang="ts">
	import {Drawer} from '@agnos-ui/svelte-bootstrap/components/drawer';

	// svelte-ignore non_reactive_update
	let drawer: Drawer;
<\/script>

<button class="btn btn-primary mb-3" onclick={() => drawer.api.open()}>Open Drawer</button>

<Drawer bind:this={drawer} header="Hi, I am drawer!" className="inline-start" resizable>
	<ul>
		<li>First item</li>
		<li>Second item</li>
		<li>Third item</li>
	</ul>
</Drawer>
`;export{t as default};
