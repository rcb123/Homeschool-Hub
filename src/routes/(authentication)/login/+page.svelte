<script lang="ts">
	import type { PageData } from './$types';
	import LoginForm from '$components/LoginForm.svelte';

	export let data: PageData;

	const { supabase } = data;
</script>

<main
	class="bg-gradient-to-br from-lavender via-transparent to-primary h-screen w-screen flex items-center"
>
	<div class="bg-stone-50 min-w-[26rem] md:min-w-[32rem] mx-auto p-10 card">
		<LoginForm {supabase} redirect='/account' />
	</div>
</main>
