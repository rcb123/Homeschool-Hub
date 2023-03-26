<script lang="ts">
	import { page } from '$app/stores';
	import { createLesson } from '$root/services/lessons';

	let lessonName: string = '';
	let lessonCourse: string = $page.params.courseID;
	let lessonDescription: string = '';
	let lessonDate: Date;
	let lessonTime: Date;
	let lessonDuration: number;
	let lessonStatus: string;

	let errorMessage: string = '';
	let loading: boolean = false;
	let success: boolean = false;

	const lessonCreation = async () => {
		loading = true;
		success = false;

		let response = await createLesson(
			lessonName,
			lessonDescription,
			lessonCourse,
			lessonDate,
			lessonTime,
			lessonDuration,
			lessonStatus
		);
		console.log(response);
		loading = false;
		success = true;
	};
</script>

<main>
	<h1 class="text-xl text-center">Lesson Creation Dashboard</h1>

	<!-- Form to Create a Lesson -->

	<div class="lg:container m-auto p-8">
		<form
			class="flex flex-col items-center w-full justify-center"
			on:submit|preventDefault|trusted={lessonCreation}
		>
			<h1 class="text-3xl font-medium text-center my-2">Create A Lesson!</h1>
			<!-- Name Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-name" class="label">
					<span class="label-text">Name:</span>
				</label>
				<input
					name="course-name"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonName}
				/>
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
					bind:value={lessonDescription}
				/>
				<div id="counter" class="text-right text-accent">
					{lessonDescription.length} / 500
				</div>
				<label for="course-description" class="label" />
			</div>
			<!-- Course ID Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-name" class="label">
					<span class="label-text">Name:</span>
				</label>
				<input
					name="course-name"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonName}
				/>
				<label for="course-name" class="label" />
			</div>
			<!-- Date Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-date" class="label">
					<span class="label-text">Date:</span>
				</label>
				<input
					name="course-date"
					type="date"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonDate}
				/>
				<label for="course-date" class="label" />
			</div>
			<!-- Time Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-time" class="label">
					<span class="label-text">Time:</span>
				</label>
				<input
					name="course-time"
					type="time"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonTime}
				/>
				<label for="course-time" class="label" />
			</div>
			<!-- Duration Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-duration" class="label">
					<span class="label-text">Duration:</span>
				</label>
				<input
					name="course-duration"
					type="number"
					min="1"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonDuration}
				/>
				<label for="course-duration" class="label" />
			</div>
			<!-- Status Input -->
			<div class="form-control w-full max-w-xs">
				<label for="course-status" class="label">
					<span class="label-text">Status:</span>
				</label>
				<select
					name="course-status"
					class="border-accent input w-full max-w-xs"
					bind:value={lessonStatus}
				>
					<option value="planned">Planned</option>
					<option value="in_progress">In Progress</option>
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
				<p class="text-lg text-center font-medium text-success">Lesson successfully created!</p>
			</div>
		{/if}
	</div>
</main>
