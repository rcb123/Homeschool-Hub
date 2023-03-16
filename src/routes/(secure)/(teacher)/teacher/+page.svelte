<script>
	import { onMount } from 'svelte';
	import { getTeacherCourses } from '../api/teacher';
	import { getUpcomingAssignments } from '../api/assignments';
	import { getMessages } from '../api/messages';

	let courses = [];
	let assignments = [];
	let messages = [];

	onMount(async () => {
		courses = await getTeacherCourses();
		assignments = await getUpcomingAssignments();
		messages = await getMessages();
	});
</script>

<div class="container mx-auto py-8">
	<h1 class="text-4xl font-bold mb-4">Teacher Hub</h1>

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
			<h2 class="text-2xl font-bold mb-2">Messages</h2>
			<ul class="list-disc list-inside">
				{#each messages as message}
					<li>{message.text} - {message.timestamp}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
