<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte-bootstrap/components/progressbar';
</script>

<div class="d-flex flex-column gap-2">
	<div>
		A progressbar using custom values for minimum and maximum:
		<Progressbar min={1} max={5} value={4} ariaValueTextFn={(val, _min, max) => `Step ${val} out of ${max}`}>Step 4 out of 5</Progressbar>
	</div>
	<div>
		A striped animated progress bar:
		<Progressbar value={63} type="info" striped animated />
	</div>
	<div>
		Changing the height:
		<Progressbar height="1.5rem" value={47} />
	</div>
</div>
