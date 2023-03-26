<script lang="ts">
	import { page } from '$app/stores';
	import { createAssignment } from '$root/services/lessons';

	let assignmentName: string;
	let assignmentDescription: string;
	let assignmentLesson: string = $page.params.lessonID;
	let assignmentDeadline: Date;
	let assignmentStatus: string;

	let errorMessage: string = '';
	let loading: boolean = false;
	let success: boolean = false;

	const assignmentCreation = async () => {
		loading = true;
        success = false;
		let response = await createAssignment(assignmentName, assignmentDescription, assignmentLesson, assignmentDeadline, assignmentStatus)
		console.log(response);
		loading = false;
		success = true;
	};
</script>

<main>
	<h1 class="text-xl text-center">
		Assignment Creation Dashboard
	</h1>

	<!-- Form to Create an Assignment-->

	<div class="lg:container m-auto p-8">
		<form
			class="flex flex-col items-center w-full justify-center"
			on:submit|preventDefault|trusted={assignmentCreation}
		>
			<h1 class="text-3xl font-medium text-center my-2">Create an Assignment!</h1>
			<!-- Name Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-name" class="label">
					<span class="label-text">Name:</span>
				</label>
				<input name="course-name" class="border-accent input w-full max-w-xs" bind:value={assignmentName} />
				<label for="course-name" class="label" />
			</div>
			<!-- Description Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-description" class="label">
					<span class="label-text">Description:</span>
				</label>
				<textarea
					name="course-description"
					class="border-accent w-full max-w-xs rounded-lg input input-lg h-24"
					rows="4"
					bind:value={assignmentDescription}
				/>
				<div id="counter" class="text-right text-accent">
					{assignmentDescription.length} / 500
				</div>
				<label for="course-description" class="label" />
			</div>
			<!-- Deadline Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-deadline" class="label">
					<span class="label-text">Deadline:</span>
				</label>
				<input type="datetime-local" name="course-deadline" class="border-accent input w-full max-w-xs" bind:value={assignmentDeadline} />
				<label for="course-deadline" class="label" />
			</div>
			<!-- Status Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-status" class="label">
					<span class="label-text">Status:</span>
				</label>
				<select name="course-status" class="border-accent input w-full max-w-xs" bind:value={assignmentStatus}>
					<option value="in-progress">In Progress</option>
					<option value="completed">Completed</option>
				</select>
				<label for="course-status" class="label" />
			</div>
			<div class="w-full max-w-xs">
				<input
					class="btn w-full bg-accent btn-primary rounded-3xl normal-case font-semibold text-base text-black border-none hover:bg-accent-focus"
					type="submit"
					value={loading ? 'Loading...' : 'Create'}
					disabled={loading}
				/>
			</div>
		</form>
		{#if errorMessage != ''}
			<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-fit mx-auto">
				<p class="text-lg text-center font-medium text-error">{errorMessage}</p>
			</div>
		{/if}
		{#if success}
			<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-fit mx-auto">
				<p class="text-lg text-center font-medium text-success">Successfully created movie card!</p>
			</div>
		{/if}
	</div>
</main>
