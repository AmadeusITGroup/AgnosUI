<script lang="ts">
	import {Progressbar} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import Coffee from './Coffee.svelte';
	import {onDestroy} from 'svelte';

	let value = 0;
	let running = false;
	const interval = setInterval(() => {
		if (running && value < 100) {
			value = value + 10;
		}
	}, 500);
	onDestroy(() => {
		clearInterval(interval);
	});
	const start = () => {
		running = true;
	};
	const toggle = () => {
		running = !running;
	};
	const reset = () => {
		value = 0;
		running = false;
	};
</script>

<div class="d-flex align-items-center flex-wrap">
	<div style="width: 350px">
		<Progressbar {value} slotStructure={Coffee} />
	</div>
	<div class="d-flex flex-column justify-content-evenly h-100 ms-5">
		<div class="btn-group" role="group">
			<button class="btn btn-outline-primary" disabled={value > 0} on:click={start}>Start</button>
			<button class="btn btn-outline-primary" disabled={value === 0 || value >= 100} on:click={toggle}>{running ? 'Pause' : 'Resume'}</button>
			<button class="btn btn-outline-primary" disabled={value === 0} on:click={reset}>Reset</button>
		</div>
		<p class="mt-3">
			<span>
				{value === 0 ? 'Need to wake up.' : value < 100 ? `Retrieving coffee... ${value}%` : 'Ready to work !'}
			</span>
		</p>
	</div>
</div>
