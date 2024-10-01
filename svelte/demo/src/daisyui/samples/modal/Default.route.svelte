<script>
	import {openModal} from './modal';
	const onclick = () => openModal({children: modalContent, closeOnOutsideClick: true});
</script>

{#snippet modalContent()}
	<h3 class="font-bold text-lg">A simple modal</h3>
	<p class="py-4">Press ESC key, click on ✕ button or click outside the modal to close</p>
{/snippet}
<button class="btn" aria-haspopup="dialog" {onclick}> Open modal </button>
