<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import SideBar from '$components/SideBar.svelte';

	import '$root/app.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="flex flex-row bg-primary text-primary-content h-screen w-screen overscroll-none">
	<SideBar />
	<div class="ml-16">
		<slot />
	</div>
</div>
