<script lang="ts">
	import {page} from '$app/stores';
	import Svg from '$lib/layout/Svg.svelte';
	import twitter from 'bootstrap-icons/icons/twitter-x.svg?raw';
	import facebook from 'bootstrap-icons/icons/facebook.svg?raw';
	import linkedin from 'bootstrap-icons/icons/linkedin.svg?raw';

	import fbasso from '$resources/images/fbasso.webp';

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

	export let date;
	export let author: keyof typeof authorLogo;

	$: encodedUrl = encodeURIComponent(`https://amadeusitgroup.github.io/AgnosUI/latest` + $page.url.pathname);
	$: formattedDate = Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(new Date(date));
</script>

<div class="d-flex flex-wrap">
	<div class="d-flex gap-3">
		<img src={authorLogo[author].icon} alt="Publisher avatar" class="avatar" />
		<div>
			<strong>{authorLogo[author].title}</strong>
			<div>Published on {formattedDate}</div>
		</div>
	</div>
	<div class="d-flex flex-grow-1 justify-content-end gap-2 ms-5 align-self-end">
		<a target="_blank" class="nav-link" href="https://twitter.com/share?url={encodedUrl}" aria-label="Share on Twitter">
			<Svg className="icon-20 align-middle" svg={twitter} />
		</a>
		<a target="_blank" class="nav-link" href="https://www.facebook.com/sharer/sharer.php?u={encodedUrl}" aria-label="Share on Facebook">
			<Svg className="icon-20 align-middle" svg={facebook} />
		</a>
		<a target="_blank" class="nav-link" href="https://www.linkedin.com/sharing/share-offsite/?url={encodedUrl}" aria-label="Share on LinkedIn">
			<Svg className="icon-20 align-middle" svg={linkedin} />
		</a>
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
