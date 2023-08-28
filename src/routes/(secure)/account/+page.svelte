<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	let loading = false;
	export let data: PageData;

	async function signOut() {
		loading = true;
		let { error } = await data.supabase.auth.signOut();
		if (error) {
			alert(error.message);
		}
		loading = false;
		goto('/');
	}
</script>

<main>
	<div class="flex flex-row justify-evenly">
		<div class="flex flex-col">
			<p>Test</p>
			<p>Test</p>
		</div>
		<div class="flex flex-col">
			<p>Test</p>
			<p>Test</p>
		</div>
	</div>
	<button class="btn ml-auto" on:click={signOut} disabled={loading}>Sign Out</button>
</main>
