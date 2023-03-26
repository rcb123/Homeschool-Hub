<script lang="ts">
	import type { Course } from '$root/db/datamodels';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient'; // import the Supabase client
	import { courses } from '$lib/stores'; // import the courses store

	let newCourseName = '';
	let newCourseDescription = '';
	let newCourseStartDate = '';
	let newCourseEndDate = '';

	let newAssignmentName = '';
	let newAssignmentDescription = '';
	let newAssignmentDueDate = '';
	let newAssignmentCourse = '';

	onMount(() => {
		// fetch the courses for the logged-in teacher from the database
		fetchCourses();
	});

	async function fetchCourses() {
		const { data, error } = await supabase
			.from('courses')
			.select('*')
			.eq('teacher_id', $page.data.session.user.id);

		if (error) {
			console.log(error);
			return;
		}

		courses.set(data as Course[]);
	}

	async function createCourse() {
		const { data, error } = await supabase.from('courses').insert({
			name: newCourseName,
			description: newCourseDescription,
			start_date: newCourseStartDate,
			end_date: newCourseEndDate,
			teacher_id: $page.data.session.user.id
		});

		if (error) {
			console.log(error);
			return;
		}

		courses.update((courses) => [...courses, data[0]]);

		// clear the form fields
		newCourseName = '';
		newCourseDescription = '';
		newCourseStartDate = '';
		newCourseEndDate = '';
	}

	async function createAssignment() {
		const { data, error } = await supabase.from('assignments').insert({
			name: newAssignmentName,
			description: newAssignmentDescription,
			due_date: newAssignmentDueDate,
			course_id: newAssignmentCourse
		});

		if (error) {
			console.log(error);
			return;
		}

		// clear the form fields
		newAssignmentName = '';
		newAssignmentDescription = '';
		newAssignmentDueDate = '';
		newAssignmentCourse = '';
	}
</script>

<div class="container">
	<h1>Teacher Page</h1>

	<h2>Create a New Course</h2>
	<form on:submit|preventDefault={createCourse}>
		<label>
			Name:
			<input type="text" bind:value={newCourseName} required />
		</label>
		<label>
			Description:
			<textarea bind:value={newCourseDescription} required />
		</label>
		<label>
			Start Date:
			<input type="date" bind:value={newCourseStartDate} required />
		</label>
		<label>
			End Date:
			<input type="date" bind:value={newCourseEndDate} required />
		</label>
		<button type="submit">Create Course</button>
	</form>
	<h2>Create a New Assignment</h2>
	<form on:submit|preventDefault={createAssignment}>
		<label>
			Name:
			<input type="text" bind:value={newAssignmentName} required />
		</label>
		<label>
			Description:
			<textarea bind:value={newAssignmentDescription} required />
		</label>
		<label>
			Due Date:
			<input type="date" bind:value={newAssignmentDueDate} required />
		</label>
		<label>
			Course:
			<select bind:value={newAssignmentCourse} required>
				{#each $courses as course}
					<option value={course.id}>{course.name}</option>
				{/each}
			</select>
		</label>
		<button type="submit">Create Assignment</button>
	</form>
	<h2>Your Courses</h2>
	<div class="overflow-x-auto">
		<table class="table w-full z-0">
			<!-- Table Header -->
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#if $courses.length > 0}
					{#each $courses as course, index}
						<!-- Add functionality to either select multiple courses with
						check boxes or click on courses to add them -->
						<tr class="hover">
							<th>{index}</th>
							<td>{course.name}</td>
							<td>{course.description}</td>
						</tr>
					{/each}
				{:else}
					<tr><th>You have not created any courses yet</th></tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>
