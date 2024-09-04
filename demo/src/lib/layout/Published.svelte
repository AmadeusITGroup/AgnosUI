<script lang="ts">
	import {page} from '$app/stores';
	import Svg from '$lib/layout/Svg.svelte';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import facebook from 'bootstrap-icons/icons/facebook.svg?raw';
	import linkedin from 'bootstrap-icons/icons/linkedin.svg?raw';
	import share from 'bootstrap-icons/icons/share.svg?raw';

	import fbasso from '$resources/images/fbasso.webp';
	import {onMount} from 'svelte';

	type AuthorInfo = {
		icon: string;
		title: string;
	};

	const authorLogo = {
		fbasso: {
			icon: fbasso,
			title: 'Fabrice Basso, Software engineer at Amadeus',
		},
	} satisfies Record<string, AuthorInfo>;

	export let date: string;
	export let author: keyof typeof authorLogo;
	export let title: string;

	let canWebShare = false;
	let mounted = false;

	$: encodedUrl = encodeURIComponent($page.url.href);
	$: encodedTitle = encodeURIComponent(title);
	$: formattedDate = Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(new Date(date));
	$: webShareData = {
		url: $page.url.href,
		title,
	};

	onMount(() => {
		canWebShare = !!navigator.canShare?.(webShareData);
		mounted = true;
	});

	const webShare = () => {
		if (canWebShare) {
			void navigator.share(webShareData);
		}
	};
</script>

<div class="d-flex flex-wrap">
	<div class="d-flex gap-3">
		<img src={authorLogo[author].icon} alt="Publisher avatar" class="avatar" width="50" height="50" />
		<div>
			<strong>{authorLogo[author].title}</strong>
			<div>Published on {formattedDate}</div>
		</div>
	</div>
	<div class="d-flex flex-grow-1 justify-content-end gap-3 ms-5 align-self-end">
		{#if mounted}
			{#if canWebShare}
				<button class="nav-link" aria-label="Share blog post" on:click={webShare}>
					<Svg className="icon-20 align-middle" svg={share} />
				</button>
			{:else}
				<a target="_blank" class="nav-link" href="https://twitter.com/share?url={encodedUrl}&text={encodedTitle}" aria-label="Share on Twitter">
					<Svg className="icon-20 align-middle" svg={twitter} />
				</a>
				<a
					target="_blank"
					class="nav-link"
					href="https://www.facebook.com/sharer/sharer.php?u={encodedUrl}&p[title]={encodedTitle}"
					aria-label="Share on Facebook"
				>
					<Svg className="icon-20 align-middle" svg={facebook} />
				</a>
				<a
					target="_blank"
					class="nav-link"
					href="https://www.linkedin.com/shareArticle?mini=true&url={encodedUrl}&title={encodedTitle}"
					aria-label="Share on LinkedIn"
				>
					<Svg className="icon-20 align-middle" svg={linkedin} />
				</a>
			{/if}
		{/if}
	</div>
</div>
<hr />

<style>
	.avatar {
		vertical-align: middle;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
</style>
