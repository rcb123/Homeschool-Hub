<script lang="ts">
	import { page } from '$app/stores';
	import SideBar from '$components/SideBar.svelte';
	import LoginForm from '$components/LoginForm.svelte';
	import Header from '$components/Header.svelte';
</script>

<SideBar />
<div class="ml-16">
	{#if !$page.data.session}
		<main>
			<div class="lg:container mx-auto h-full w-full p-6">
				<LoginForm supabase={$page.data.supabase} />
			</div>
		</main>
	{:else}
		<Header />
		<slot />
	{/if}
</div>
