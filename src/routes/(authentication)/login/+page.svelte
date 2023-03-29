<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from '$components/LoginForm.svelte';

	export let data: PageData;

	const { supabase } = data;
</script>

<main>
	<div class="lg:container mx-auto h-full w-full p-6">
		<LoginForm {supabase} />
	</div>
</main>
