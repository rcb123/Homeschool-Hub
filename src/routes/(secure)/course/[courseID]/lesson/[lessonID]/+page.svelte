<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>Lesson - {data.name}</title>
<main>
	<h1>{data.name}</h1>

	<p>{data.description}</p>

	<!-- <ul>
		{#each lesson.resources as resource}
			<li><a href={resource.url} target="_blank">{resource.name}</a></li>
		{/each}
	</ul>

	<p>Assignment:</p>

	<ul>
		{#each lesson.assignments as assignment}
			<li><a href={`assignment/${assignment.id}`}>{assignment.name}</a></li>
		{/each}
	</ul> -->
</main>
