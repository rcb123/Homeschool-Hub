<script lang="ts">
	import type { PageData } from './$types';
	import RegisterForm from '$components/RegisterForm.svelte';

	export let data: PageData;

	const { supabase } = data;
</script>

<main>
	<div class="lg:container mx-auto h-full w-full p-8">
		<RegisterForm {supabase} />
	</div>
</main>
