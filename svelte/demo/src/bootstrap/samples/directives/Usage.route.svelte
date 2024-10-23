<script lang="ts">
	//Agnostic directive created in the previous section
	import {createSampleDirective} from '@agnos-ui/common/samples/directives/sample-directive';

	let text = $state('focus element clicked');
</script>

<div use:createSampleDirective={text}>
	<button class="btn btn-primary" id="test">button 1</button>
	<button class="btn btn-primary" id="test2">button 2</button>
</div>
<hr />
<input class="form-control" id="clickText" type="text" bind:value={text} aria-label="text input to configure the directive" />
<hr />
<span>(Open the console to see the outputs)</span>
