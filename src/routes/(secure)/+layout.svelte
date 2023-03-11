<script lang="ts">
	import { page } from '$app/stores';
	import LoginForm from '$components/LoginForm.svelte';
</script>

{#if !$page.data.session}
	<LoginForm />
{:else}
	<slot />
{/if}