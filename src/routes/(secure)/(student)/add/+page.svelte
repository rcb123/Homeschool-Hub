<script lang="ts">
	import type { PageData } from './$types';
	import { enroll } from '$root/services/courses';

	export let data: PageData;
</script>

<main class="m-8">
	<div class="flex flex-col justify-center max-w-4xl mx-auto">
		<h1 class="text-3xl font-bold text-center">Enroll in a Course</h1>
		<h3 class="text-xl font-medium mb-2">Find a course:</h3>

		<div class="overflow-x-auto">
			<table class="table w-full z-0">
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
										on:click={() => enroll(course.id, data.session.user.id)}>Enroll</button
									>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</main>
