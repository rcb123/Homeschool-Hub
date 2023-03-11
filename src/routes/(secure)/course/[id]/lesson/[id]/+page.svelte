<script>
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { courses } from '$lib/stores';

	export let id;

	const course = get(courses).find((c) => c.lessons.find((l) => l.id === id));
	const lesson = course.lessons.find((l) => l.id === id);

	$: page.set({ title: `Lesson - ${lesson.name}` });
</script>

<main>
	<h1>{lesson.name}</h1>

	<p>{lesson.description}</p>

	<ul>
		{#each lesson.resources as resource}
			<li><a href={resource.url} target="_blank">{resource.name}</a></li>
		{/each}
	</ul>

	<p>Assignment:</p>

	<ul>
		{#each lesson.assignments as assignment}
			<li><a href={`assignment/${assignment.id}`}>{assignment.name}</a></li>
		{/each}
	</ul>
</main>
