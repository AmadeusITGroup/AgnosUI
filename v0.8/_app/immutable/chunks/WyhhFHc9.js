const t=`<script lang="ts">
	import Gallery from './Gallery.svelte';
	import {photos} from './photo';
<\/script>

<div class="w-full flex justify-center">
	<div class="max-w-[600px] lg:max-w-[1000px]">
		<Gallery {photos} withNavArrows withShowFullscreen />
	</div>
</div>
`;export{t as default};
