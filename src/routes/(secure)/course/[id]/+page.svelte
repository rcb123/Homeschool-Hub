<script>
	import { get } from 'svelte/store';
	import { courses } from '$lib/stores.js';
	import { page } from '$app/stores.js';

	export let id;

	const course = get(courses).find((c) => c.id === id);

	$: page.set({ title: `Course - ${course.name}` });
</script>

<main>
	<h1>{course.name}</h1>

	<p>{course.description}</p>

	<ul>
		{#each course.lessons as lesson}
			<li><a href={`lesson/${lesson.id}`}>{lesson.name}</a></li>
		{/each}
	</ul>
</main>
