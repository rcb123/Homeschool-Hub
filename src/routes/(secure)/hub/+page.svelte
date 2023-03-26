<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { userRole } from '$lib/stores';
	import TeacherHub from '$components/hubs/TeacherHub.svelte';
	import StudentHub from '$components/hubs/StudentHub.svelte';

	export let data: PageData;

	let role: 'student' | 'teacher' | null = data.res.role;

	onMount(() => {
		role = $userRole;
		console.log($userRole);
	});
</script>

{#if role === 'teacher'}
	<TeacherHub />
{:else if role === 'student'}
	<StudentHub />
{:else}
	<main>
		<h1>Something went wrong, role = {role}</h1>
	</main>
{/if}
