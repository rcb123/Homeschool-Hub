<script lang="ts">
	import type { PageData } from './$types';
	import { courses } from '$lib/stores';

	let newCourseName = '';
	let newCourseDescription = '';
	let newCourseStartDate = '';
	let newCourseEndDate = '';

	let newAssignmentName = '';
	let newAssignmentDescription = '';
	let newAssignmentDueDate = '';
	let newAssignmentCourse = '';

	export let data: PageData;

	async function createCourse() {
		const { data: courseData, error } = await data.supabase.from('courses').insert({
			name: newCourseName,
			description: newCourseDescription,
			start_date: newCourseStartDate,
			end_date: newCourseEndDate,
			teacher_id: data.session.user.id
		});

		if (error) {
			console.log(error);
			return;
		}

		if (courseData) {
			courses.update((courses) => [...courses, courseData[0]]);
		}

		// clear the form fields
		newCourseName = '';
		newCourseDescription = '';
		newCourseStartDate = '';
		newCourseEndDate = '';
	}

	async function createAssignment() {
		const { error } = await data.supabase.from('assignments').insert({
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
	<h1>Teacher Dashboard</h1>
	<h2>Welcome back {data.name}</h2>

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
				{:else if $courses == undefined}
					<tr><th>Loading . . .</th></tr>
				{:else}
					<tr><th>You have not created any courses yet</th></tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>
