const s=`<script>
	import Toast from './Toast.svelte';

	let visible = true;
<\/script>

<div class="h-[215px]">
	<button class="btn btn-primary" on:click={() => (visible = true)}>Reset Toast</button>
	<div class="toast">
		<Toast className="alert-success" bind:visible>This is a success toast</Toast>
		<Toast className="alert-error" dismissible={false}>This is an error toast</Toast>
	</div>
</div>
`;export{s as default};
