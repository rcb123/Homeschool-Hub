<script lang="ts">
	import type { PageData } from './$types';
	import { enroll } from '$root/services/courses';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let fail = false;
	let errorMessage = '';

	const courseEnroll = (courseID: number) => {
		fail = false;
		errorMessage = '';
		enroll(data.supabase, courseID, data.session.user.id).catch((err) => {
			fail = true;
			errorMessage = err.body.message;
		});
	};
</script>

<main class="m-8">
	<div class="flex flex-col justify-center max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold text-center">Enroll in a Course</h1>
		<h3 class="text-xl font-medium mb-2">Find a course:</h3>

		<div class="overflow-x-auto">
			<table class="table w-full max-w-[70vh] overflow-y-scroll z-0">
				<!-- Table Header -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Description</th>
						<th>Course ID</th>
						<th>Teacher ID</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#if data.courses.length == 0}
						<tr><th>Loading...</th></tr>
					{:else}
						{#each data.courses as course, index}
							<!-- Add functionality to either select multiple courses with
							check boxes or click on courses to add them -->
							<tr class="hover">
								<th>{index}</th>
								<td>{course.name}</td>
								<td>{course.description}</td>
								<td>{course.id}</td>
								<td>{course.teacher_id}</td>
								<td>
									<button
										class="btn btn-primary text-white"
										on:click={() => courseEnroll(course.id)}>Enroll</button
									>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
		{#if fail}
				<div class="alert alert-error shadow-lg mt-2 w-fit mx-auto" transition:fade>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="stroke-current flex-shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
						<span>Error! {errorMessage}</span>
					</div>
				</div>
			{/if}
	</div>
</main>
