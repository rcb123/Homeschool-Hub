<script>
	import { courses } from '$lib/stores';
</script>

<main class="w-[calc(100vw-4rem)] relative">
	<h1>Welcome to Homeschool Hub!</h1>

	{#if $courses.length === 0}
		<p>Loading courses...</p>
	{:else}
		<ul>
			{#each $courses as course}
				<li><a href={`course/${course.id}`}>{course.name}</a></li>
			{/each}
		</ul>
	{/if}
</main>