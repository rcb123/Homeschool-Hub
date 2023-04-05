<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { courses, assignments, lessons, name } = data;
</script>

<main class="px-8 py-2">
	<div class="container mx-auto">
		<h1 class="text-center text-4xl font-medium">Student Hub</h1>
		<h2 class="text-2xl font-medium pt-1">Welcome back, {name}</h2>
		<h2 class="text-2xl font-medium py-1">Your Courses</h2>
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<!-- Table Header -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Description</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#if $courses.length > 0}
						{#each $courses as course}
							<tr>
								<th>
									<label>
										<input type="checkbox" class="checkbox" />
									</label>
								</th>
								<td>
									<div>
										<div class="font-bold">{course.name}</div>
										<div class="text-sm opacity-50">Course ID: {course.id}</div>
									</div>
								</td>
								<td>
									<div>{course.description}</div>
									<div class="text-sm opacity-50">Teacher ID: {course.teacher_id}</div>
								</td>
								<th>
									<a href="/course/{course.id}"
										><button class="btn btn-ghost btn-sm">Course Page</button></a
									>
								</th>
							</tr>
						{/each}
					{:else}
						<tr>
							<td />
							<td
								>You are not enrolled in any courses yet. <a
									href="/add"
									class="btn btn-sm btn-ghost">Add a course now!</a
								>
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
		<h2 class="text-2xl font-medium my-2">Upcoming Assignments</h2>
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<!-- Table Header -->
				<thead>
					<tr>
						<th />
						<th>Name</th>
						<th>Description</th>
						<th>Deadline</th>
					</tr>
				</thead>
				<tbody>
					{#if $assignments.length > 0}
						{#each $assignments as assignment}
							<tr>
								<th>
									<label>
										<input type="checkbox" class="checkbox" />
									</label>
								</th>
								<td>
									<div>
										<div class="font-bold">{assignment.name}</div>
										<div class="text-sm opacity-50">Assignment ID: {assignment.id}</div>
									</div>
								</td>
								<td>
									<div>{assignment.description}</div>
									<div class="text-sm opacity-50">Status: {assignment.status}</div>
								</td>
								<td>
									<div>Due: {assignment.deadline}</div>
								</td>
							</tr>
						{/each}
					{:else}
						<tr>
							<td />
							<td>You have no upcoming assignments.</td>
						</tr>
					{/if}
				</tbody>
			</table>
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
		<div>
			<h2 class="text-2xl font-medium my-2">Lessons</h2>
			<div class="overflow-x-auto w-full">
				<table class="table w-full">
					<!-- Table Header -->
					<thead>
						<tr>
							<th />
							<th>Name</th>
							<th>Description</th>
							<th>Deadline</th>
						</tr>
					</thead>
					<tbody>
						{#if $lessons.length > 0}
							<ul>
								{#each $lessons as lesson}
									<tr>
										<th>
											<label>
												<input type="checkbox" class="checkbox" />
											</label>
										</th>
										<td>
											<div>
												<div class="font-bold">{lesson.name}</div>
												<div class="text-sm opacity-50">Lesson ID: {lesson.id}</div>
											</div>
										</td>
										<td>
											<div>{lesson.description}</div>
											<div class="text-sm opacity-50">Status: {lesson.status}</div>
										</td>
										<td>
											<div>Date: {lesson.date} Time: {lesson.time}</div>
											<div class="text-sm opacity-50">Length: {lesson.duration}</div>
										</td>
									</tr>
								{/each}
							</ul>
						{:else}
							<tr>
								<td />
								<td>You currently have no lessons.</td>
							</tr>
						{/if}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</main>
