<script lang="ts">
	import {Select} from '@agnos-ui/svelte-bootstrap/components/select';

	const wordsA = ['apple', 'apricot', 'asparagus', 'astronaut', 'athletic', 'autumn', 'avocado'];
	const wordsB = ['banana', 'baseball', 'basketball', 'beautiful', 'bedroom', 'bee', 'bicycle'];
	const wordsC = ['cat', 'caterpillar', 'cave', 'chair', 'cheese', 'cherry', 'chicken'];
	const mainList = [...wordsA, ...wordsB, ...wordsC];

	let filterText = $state('');
	let items = $derived(filterText ? mainList.filter((item) => item.toLowerCase().startsWith(filterText)) : mainList.slice(0, 10));
</script>

<div style="height: 400px">
	<div class="mb-3">
		<Select {items} bind:filterText badgeClassName="badge text-bg-light" />
	</div>
</div>
