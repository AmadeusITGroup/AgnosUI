<script lang="ts">
	import './blog-styling.scss';
	import type {BlogPost} from './blog.model';

	export let blogPost: BlogPost;
</script>

<div class="d-flex flex-column">
	<div>
		<a class="blog-link" href={blogPost.href} aria-label="link to blog post" title="BlogPost">
			<img class="blog-preview" src="blog_placeholder.png" alt="Blog placeholder" />
			<div>
				<h1>{blogPost.header}</h1>
				{blogPost.shortDescription}
			</div>
		</a>
	</div>
	<div>
		<h6 class="written-by"><em>Written by {blogPost.author}, {blogPost.publishDate}</em></h6>
	</div>
</div>
