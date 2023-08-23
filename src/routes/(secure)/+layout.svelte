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
				<LoginForm supabase={$page.data.supabase} redirect='/account' />
			</div>
		</main>
	{:else}
		<Header />
		<div class="mt-[4.5rem]">
			<slot />
		</div>
	{/if}
</div>
