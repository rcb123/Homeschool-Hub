<script lang="ts">
	import { createCourse } from '$root/services/courses';
	import type { PageData } from './$types';

	export let data: PageData;

	let courseName: string = '';
	let courseDescription: string = '';
	let courseTeacher: string = data.session.user.id;

	let errorMessage: string = '';
	let loading: boolean = false;
	let success: boolean = false;

	const courseCreation = async () => {
		loading = true;
		success = false;
		await createCourse(courseName, courseTeacher, courseDescription);
		loading = false;
		success = true;
	};
</script>

<main>
	<h1 class="text-xl text-center">Course Creation Dashboard</h1>

	<!-- Form to Create a Course -->
	<div class="lg:container m-auto p-8">
		<form
			class="flex flex-col items-center w-full justify-center"
			on:submit|preventDefault|trusted={courseCreation}
		>
			<h1 class="text-3xl font-medium text-center my-2">Create A Course!</h1>
			<div class="form-control w-full max-w-xs">
				<label for="course-name" class="label">
					<span class="label-text">Name:</span>
				</label>
				<input
					name="course-name"
					class="border-accent input w-full max-w-xs"
					bind:value={courseName}
				/>
				<label for="course-name" class="label" />
			</div>
			<div class="form-control w-full max-w-xs">
				<label for="course-description" class="label">
					<span class="label-text">Description:</span>
				</label>
				<textarea
					name="course-description"
					class="border-accent w-full max-w-xs rounded-lg input input-lg h-24"
					rows="4"
					bind:value={courseDescription}
				/>
				<div id="counter" class="text-right text-accent">
					{courseDescription.length} / 500
				</div>
				<label for="course-description" class="label" />
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
				<p class="text-lg text-center font-medium text-success">Course successfully created!</p>
			</div>
		{/if}
	</div>
</main>
