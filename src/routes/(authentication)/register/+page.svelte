<script lang="ts">
	import type { PageData } from './$types';
	import RegisterForm from '$components/RegisterForm.svelte';

	export let data: PageData;

	const { supabase } = data;
</script>

<main
	class="bg-gradient-to-br from-lavender via-transparent to-primary h-screen w-screen flex items-center"
>
	<div class="bg-stone-50 min-w-[26rem] md:min-w-[32rem] mx-auto p-10 card">
		<RegisterForm {supabase} />
	</div>
</main>
