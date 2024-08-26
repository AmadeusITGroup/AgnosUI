<script lang="ts">
	export let url: string = window.location.href;

	async function shareOnSocialMedia(platform: string) {
		const encodedUrl = encodeURIComponent(url);
		if (platform === 'copy') {
			try {
				await navigator.clipboard.writeText(url);
				alert('Link copied to clipboard!');
			} catch (err) {
				console.error('Failed to copy link: ', err);
			}
		} else {
			let shareUrl = '';
			if (platform === 'twitter') {
				shareUrl = `https://twitter.com/share?url=${encodedUrl}`;
			} else if (platform === 'facebook') {
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
			} else if (platform === 'linkedin') {
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
			}
			window.open(shareUrl, '_blank');
		}
	}
</script>

<div class="btn-group" role="group" aria-label="Social media share buttons">
	<button type="button" class="btn btn-primary" on:click={() => shareOnSocialMedia('twitter')}> Share on Twitter </button>
	<button type="button" class="btn btn-primary" on:click={() => shareOnSocialMedia('facebook')}> Share on Facebook </button>
	<button type="button" class="btn btn-primary" on:click={() => shareOnSocialMedia('linkedin')}> Share on LinkedIn </button>
	<button type="button" class="btn btn-secondary" on:click={() => shareOnSocialMedia('copy')}> Copy Link </button>
</div>

<style>
	/* Style the button as needed */
	.btn-group {
		margin-top: 10px;
	}
	.btn {
		margin-right: 5px;
	}
</style>
