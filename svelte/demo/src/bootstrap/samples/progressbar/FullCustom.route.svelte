<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import Coffee from './Coffee.svelte';
	import {Brewer} from './brewer.svelte';
	import playSvg from 'bootstrap-icons/icons/play-fill.svg?raw';
	import pauseSvg from 'bootstrap-icons/icons/pause-fill.svg?raw';
	import stopSvg from 'bootstrap-icons/icons/stop-fill.svg?raw';

	const brewer = new Brewer();
</script>

<div class="d-flex align-items-center flex-wrap">
	<div style="width: 350px">
		<Progressbar value={brewer.value}>
			{#snippet structure(props)}
				<Coffee {...props} />
			{/snippet}
		</Progressbar>
	</div>
	<div class="d-flex flex-column justify-content-evenly h-100 ms-5">
		<div class="d-flex gap-1">
			<button
				class="btn btn-primary d-flex align-items-center"
				disabled={brewer.finished}
				onclick={brewer.toggleRunning}
				aria-label={brewer.running ? 'pause' : 'play'}
			>
				{@html brewer.running ? pauseSvg : playSvg}
			</button>
			<button class="btn btn-primary d-flex align-items-center" disabled={!brewer.started} onclick={brewer.reset} aria-label="stop">
				{@html stopSvg}
			</button>
		</div>
		<p class="mt-3">
			<span>
				{!brewer.started ? 'Need to wake up.' : brewer.value < 100 ? `Retrieving coffee... ${brewer.value}%` : 'Ready to work !'}
			</span>
		</p>
	</div>
</div>
