<script lang="ts">
	import { onMount } from 'svelte';
	import { userRole } from '$lib/stores';
	import TeacherHub from '$components/hubs/TeacherHub.svelte';
	import StudentHub from '$components/hubs/StudentHub.svelte';

	let role: 'student' | 'teacher' | null;

	onMount(() => {
		role = $userRole;
	});
</script>

{#if role === 'teacher'}
	<TeacherHub />
{:else}
	<StudentHub />
{/if}
