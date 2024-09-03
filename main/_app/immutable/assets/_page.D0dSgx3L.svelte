<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import Published from '$lib/layout/Published.svelte';
	import Markdown from '$lib/markdown/Markdown.svelte';
	import source from './tansu-reactivity.md?raw';
	import headerImg from '$resources/images/tansu-blog.webp';

	const title = 'State management with Tansu';
	const description =
		'In AgnosUI, we employ Tansu to handle our widget states. This article explores the effective ways to use Tansu for broader state management, drawing upon our practical experience in developing AgnosUI.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta property="twitter:domain" content="amadeusitgroup.github.io" />
	<meta property="twitter:url" content="https://amadeusitgroup.github.io/AgnosUI/latest/blog/2024-02-01" />
	<meta name="twitter:image" content={headerImg} />
	<meta name="twitter:image:alt" content="Blog header image" />
	<meta name="twitter:description" content={description} />
	<!-- Open Graph general (Facebook, Pinterest & Google+) -->
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:url" content="https://amadeusitgroup.github.io/AgnosUI/latest/blog/2024-02-01" />
	<meta name="og:site_name" content="AgnosUI" />
	<meta name="og:locale" content="en" />
	<meta name="og:type" content="website" />
	<meta property="og:image" content={headerImg} />
</svelte:head>

<Header {title} />
<Published date="02/01/2024" author="fbasso" />
<img src={headerImg} alt="frontend development" class="w-100 mb-3" />
<Markdown {source} />
