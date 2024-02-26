<script>
	export let date;

	date = Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(new Date(date));
</script>

<strong class="d-flex mb-2">Published on {date}</strong>
