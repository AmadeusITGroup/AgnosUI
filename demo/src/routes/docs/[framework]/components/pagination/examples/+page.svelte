<script lang="ts">
	import sampleCustom from '@agnos-ui/samples/pagination/custom';
	import sampleDefault from '@agnos-ui/samples/pagination/default';
	import sampleHref from '@agnos-ui/samples/pagination/hash';
	import Sample from '$lib/layout/Sample.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<Section label="Basic paginations" level={2}>
	<Sample title="Pagination example" sample={sampleDefault} height={419} />
</Section>

<Section label="Customization" level={2}>
	<p>The pagination widget is fully customizable, from the page numbers to the arrows.</p>
	<Sample title="Custom Pagination example" sample={sampleCustom} height={256} />
</Section>

<Section label="Pagination with hrefs" level={2}>
	<p>
		The example shows the pagination widget with hrefs provided for each page element.<br />
		The <i>hrefs</i> customization is based on <b>pageLink</b> input. This receives a custom function which computes the href using the received page
		number and the location hash. On the <b>pageChange</b> output event, the location hash is updated with the <i>href</i> of the current page element.
		This strategy permits navigations in current browser tab, and opening a page in new tabs using the customized href.
	</p>
	<Sample title="Pagination example with hrefs" sample={sampleHref} height={256} />
</Section>

<Section label="Accessibility" level={2}>
	Pagination is a navigation element. The navigation (nav) elements need to have the <strong>aria-label</strong> attribute to differentiate them.
	Check the API section to learn about the default one set for our pagination. You need to customize the <strong>aria-label</strong> attribute if you
	have more than one pagination on your page. The <strong>aria-current="page"</strong> attribute is set to the current element as needed. Each
	pagination link item has its own <strong>aria-label</strong> that you can customize (for ScreenReader). Check the API section to know the default value
	set for each item.
</Section>
