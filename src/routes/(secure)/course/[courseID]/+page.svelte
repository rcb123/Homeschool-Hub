<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>Course - {data.name}</title>
<main>
	<h1>{data.name}</h1>

	<p>{data.description}</p>

	<!-- <ul>
		{#each data.lessons as lesson}
			<li><a href={`lesson/${lesson.id}`}>{lesson.name}</a></li>
		{/each}
	</ul> -->
</main>
