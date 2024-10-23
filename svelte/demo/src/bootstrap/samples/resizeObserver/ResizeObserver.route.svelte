<script lang="ts">
	import '@agnos-ui/common/samples/resizeobserver/resizeobserver.scss';
	import {createResizeObserver} from '@agnos-ui/svelte-bootstrap/services/resizeObserver';
	import {fromStore} from 'svelte/store';

	const {dimensions$, directive: resizeDirective} = createResizeObserver();
	const dimensions = fromStore(dimensions$);

	let observedHeight = $derived(dimensions.current?.contentRect.height ?? 0);
	let heightValue = $state(180);

	function increaseHeight() {
		heightValue = observedHeight + 50;
	}
	function decreaseHeight() {
		heightValue = observedHeight ? observedHeight - 50 : 0;
	}
</script>

<div class="demo-resize-observer">
	<label for="resizable">Resizable textarea:</label>
	<textarea
		use:resizeDirective
		name="resizable"
		id="resizable"
		rows="6"
		cols="50"
		class="form-control"
		class:fontsize={observedHeight && observedHeight > 200}
		style:height={heightValue + 'px'}
		value="This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing."
	></textarea>
	<div>Textarea content height: <span id="dynamic-height">{observedHeight}</span>px</div>
	<button type="button" class="btn btn-primary m-2" id="decreaseHeight" onclick={decreaseHeight}>Height --</button>
	<button type="button" class="btn btn-primary m-2" id="increaseHeight" onclick={increaseHeight}>Height ++</button>
</div>
