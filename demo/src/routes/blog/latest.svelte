<script lang="ts">
	import './blog-styling.scss';
	import type {BlogPost} from './blog.model';

	export let blogPost: BlogPost;
</script>

<div class="d-flex row my-5">
	<div class="col-6">
		<a class="blog-link" href={blogPost.href} aria-label="link to blog post" title="BlogPost">
			<img class="blog-preview" src="blog_placeholder.png" alt="Blog placeholder" />
		</a>
	</div>
	<div class="col-6 d-flex flex-column justify-content-between">
		<div>
			<a class="blog-link" href={blogPost.href} aria-label="link to blog post" title="BlogPost">
				<h1>{blogPost.header}</h1>
				{blogPost.shortDescription}
			</a>
		</div>
		<div>
			<h3 class="written-by"><em>Written by {blogPost.author}, {blogPost.publishDate}</em></h3>
		</div>
	</div>
</div>
