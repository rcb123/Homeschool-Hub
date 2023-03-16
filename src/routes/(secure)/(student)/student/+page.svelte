<script>
	import { onMount } from 'svelte';
	import { getStudentCourses } from '../api/student';
	import { getUpcomingAssignments } from '../api/assignments';
	import { getResources } from '../api/resources';
	import { getCourseForums } from '../api/forums';

	let courses = [];
	let assignments = [];
	let resources = [];
	let forums = [];

	onMount(async () => {
		courses = await getStudentCourses();
		assignments = await getUpcomingAssignments();
		resources = await getResources();
		forums = await getCourseForums();
	});
</script>

<div class="container mx-auto py-8">
	<h1 class="text-4xl font-bold mb-4">Student Hub</h1>

	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<h2 class="text-2xl font-bold mb-2">My Courses</h2>
			<ul class="list-disc list-inside">
				{#each courses as course}
					<li>{course.name}</li>
				{/each}
			</ul>

			<h2 class="text-2xl font-bold mb-2">Upcoming Assignments</h2>
			<ul class="list-disc list-inside">
				{#each assignments as assignment}
					<li>{assignment.title} - Due {assignment.due_date}</li>
				{/each}
			</ul>
		</div>

		<div>
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
		</div>
	</div>
</div>
