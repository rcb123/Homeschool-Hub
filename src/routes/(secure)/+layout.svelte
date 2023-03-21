<script lang="ts">
	import { page } from '$app/stores';
	import LoginForm from '$components/LoginForm.svelte';
	import Header from '$components/Header.svelte';
</script>

{#if !$page.data.session}
	<main>
		<div class="lg:container mx-auto h-full w-full p-6">
			<LoginForm />
		</div>
	</main>
{:else}
	<Header />
	<slot />
{/if}
