<script lang="ts">
	import type { AuthSession } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import db, { courses, lessons, assignments } from '$lib/stores';

	const session: AuthSession = $page.data.session;
	const { user } = session;

	let loading: boolean = true;

	onMount(async () => {
		await db.courses.getAll(session);
		await db.lessons.getAll();
		await db.assignments.getAll();

		loading = false;
	});
</script>

<main class="m-8">
	<div class="container mx-auto py-8">
		<h1 class="text-4xl font-semibold mb-4">Student Hub</h1>
		<h2 class="text-2xl font-medium">Welcome back, {user.email}</h2>

		<div class="grid grid-cols-3 gap-4">
			<div class="col-span-2">
				<h2 class="text-2xl font-medium my-2">Your Courses</h2>
				<ul class="list-disc list-inside">
					{#if loading}
						<p>Loading...</p>
					{:else if $courses.length > 0}
						{#each $courses as course}
							<li>{course.name}</li>
						{/each}
					{:else}
						<p>You are not enrolled in any courses yet.</p>
					{/if}
				</ul>

				<h2 class="text-2xl font-medium my-2">Upcoming Assignments</h2>
				<ul class="list-disc list-inside">
					{#if loading}
						<p>Loading...</p>
					{:else if $assignments.length > 0}
						{#each $assignments as assignment}
							<li>{assignment.name} - Due {assignment.deadline}</li>
						{/each}
					{:else}
						<p>You have no upcoming assignments.</p>
					{/if}
				</ul>
			</div>

			<!-- <div>
				<h2 class="text-2xl font-bold mb-2">Resources</h2>
				<ul class="list-disc list-inside">
					{#each resources as resource}
						<li><a href={resource.url}>{resource.title}</a></li>
					{/each}
				</ul>

				<h2 class="text-2xl font-bold mb-2">Course Forums</h2>
				<ul class="list-disc list-inside">
					{#each forums as forum}
						<li><a href={forum.url}>{forum.title}</a></li>
					{/each}
				</ul>
			</div> -->
		</div>
		<div>
			<h2 class="text-2xl font-medium my-2">Lessons</h2>
			{#if loading}
				<p>Loading...</p>
			{:else if $lessons.length > 0}
				<ul>
					{#each $lessons as lesson}
						<li>{lesson.name} ({lesson.date})</li>
					{/each}
				</ul>
			{:else}
				<p>You have no lessons.</p>
			{/if}
		</div>
	</div>
</main>
