<script lang="ts">
	import SideBar from '$components/SideBar.svelte';
	import Header from '$components/Header.svelte';
</script>
<SideBar />
<main class="flex flex-col h-screen w-[calc(100vw-4rem)] ml-16 items-center">
	<Header />
	<div class="text-center mx-auto mt-[30vh] max-w-[30vw] min-w-[30rem]">
		<h1 class="text-3xl font-medium">Submit a Problem Report 📝</h1>
		<br />
		<p class="mt-6 text-lg">
			At this time there is no form system for submitting error reports. Instead please email me at
			<a class="btn-link" href="mailto:rbanankhah@gmail.com">rbanankhah@gmail.com</a> with your issue.
            Please include details about what page you were on, what you were doing, and the error that appeared. Thank you!
		</p>
	</div>
</main>
