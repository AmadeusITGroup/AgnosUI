<script context="module" lang="ts">
	import {Accordion, AccordionItem} from '@agnos-ui/svelte';
</script>

<Accordion>
	<AccordionItem itemCollapsed={false} itemId="item-1">
		<slot slot="itemHeader">Simple</slot>
		<slot slot="itemBody"
			>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
			skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
			coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
			excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
			accusamus labore sustainable VHS.
		</slot>
	</AccordionItem>
	<AccordionItem itemId="item-2">
		<slot slot="itemHeader"><span>&#9733; <b>Fancy</b> title &#9733;</span></slot>
		<slot slot="itemBody"
			>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
			skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
			coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
			excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
			accusamus labore sustainable VHS.
		</slot>
	</AccordionItem>
	<AccordionItem itemDisabled={true} itemId="item-3">
		<slot slot="itemHeader">Disabled</slot>
		<slot slot="itemBody"
			>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
			skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
			coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
			excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
			accusamus labore sustainable VHS.
		</slot>
	</AccordionItem>
</Accordion>
