const e=`<script lang="ts">
	import './resizeobserver.scss';
	import {createResizeObserver} from '@agnos-ui/svelte/services/resizeObserver';

	const {dimensions$, directive: resizeDirective} = createResizeObserver();
	$: observedHeight$ = $dimensions$?.contentRect?.height;

	let heightValue = 180;

	function increaseHeight() {
		heightValue = (observedHeight$ || 0) + 50;
	}

	function decreaseHeight() {
		heightValue = observedHeight$ ? observedHeight$ - 50 : 0;
	}
<\/script>

<div class="demo-resize-observer">
	<label for="resizable">Resizable textarea:</label>
	<textarea
		use:resizeDirective
		name="resizable"
		id="resizable"
		rows="6"
		cols="50"
		class="form-control"
		class:fontsize={observedHeight$ && observedHeight$ > 200}
		style:height={heightValue + 'px'}
		value="This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing."
	/>
	<div>Textarea content height: <span id="dynamic-height">{observedHeight$}</span>px</div>
	<button type="button" class="btn btn-primary m-2" id="decreaseHeight" on:click={decreaseHeight}>Height --</button>
	<button type="button" class="btn btn-primary m-2" id="increaseHeight" on:click={increaseHeight}>Height ++</button>
</div>
`;export{e as default};
