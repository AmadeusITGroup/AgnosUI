const t=`<script lang="ts">
	import {type ModalContext, openModal} from '@agnos-ui/svelte-bootstrap/components/modal';
	let {state, widget}: ModalContext<void> = $props();
<\/script>

This is a modal<br /><br />
<button
	class="btn btn-outline-primary m-1"
	onclick={() => openModal({title: 'Other modal', children: state.children, container: state.modalElement})}
>
	Launch other modal</button
><br />
<button class="btn btn-outline-secondary m-1" onclick={() => widget.api.patch({backdrop: true})}>Enable backdrop</button><button
	class="btn btn-outline-secondary m-1"
	onclick={() => widget.api.patch({backdrop: false})}>Disable backdrop</button
><br />
<button class="btn btn-outline-secondary m-1" onclick={() => widget.api.close()}>Close</button>
`;export{t as default};
