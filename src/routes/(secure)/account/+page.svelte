<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
			window.location.href = '/';
		}
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
