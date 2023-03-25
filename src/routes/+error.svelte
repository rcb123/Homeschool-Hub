<script>
	import { page } from '$app/stores';
</script>

<main class="flex flex-col h-screen w-[calc(100vw-4rem)]">
	<div
		class="m-auto px-8 pt-4 pb-8 max-w-[20vw] min-w-[30rem] shadow-accent-focus shadow-lg rounded-2xl bg-neutral overflow-auto text-neutral-content text-center"
	>
		<h1 class="text-lg py-2">Something went wrong! 🤕</h1>
		<p class="py-2">
			Sorry about that, please try again later or feel free to reach out to us if the problem
			persists.
		</p>
		<div class="flex flex-row justify-evenly py-4">
			<a href="/">
				<button class="btn btn-primary text-white normal-case">Head Back</button>
			</a>
			<a href="/report">
				<button class="btn btn-primary text-white normal-case">Submit a Support Request</button>
			</a>
		</div>
		<p>Error: &#91;{$page.status}&#93; An error has occurred: {$page.error.message}</p>
	</div>
</main>
