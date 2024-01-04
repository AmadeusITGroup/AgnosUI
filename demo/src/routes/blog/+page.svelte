<script lang="ts">
	import BlogPreview from './blog-preview.svelte';
	import type {BlogPost} from './blog.model';
	import Latest from './latest.svelte';

	const blogs: BlogPost[] = [
		{
			header: 'Blog post header 1',
			shortDescription: 'Short blog post description with catchy phrases 1',
			author: 'Author',
			publishDate: '09-11-2023',
			href: '/blog/blog-pages/yyyy-mm-dd-template',
		},
	];
</script>

<Latest blogPost={blogs[blogs.length - 1]} />
<h1 class="mb-3">Recent articles</h1>
<div class="row">
	{#each blogs as blog}
		<div class="col-4 mb-5">
			<BlogPreview blogPost={blog} />
		</div>
	{/each}
</div>
