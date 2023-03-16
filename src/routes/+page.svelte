<script>
	let aims = [
		'Centralized communication system',
		'Intuitive lesson planning tools',
		'Extensive resource library',
		'Community forums for parents and students'
	];
</script>

<main>
	<h1 class="text-4xl font-bold mb-4">Welcome to Homeschool Hub!</h1>
	<p class="text-lg text-gray-700 mb-8">
		Homeschool Hub is an online platform that connects homeschooling parents and students through a
		centralized communication system. Our platform offers a range of features including
		communication channels, lesson planning tools, a resource library, and community forums.
	</p>
	<h2 class="text-2xl font-bold mb-4">Our Aims</h2>
	<ul class="list-disc pl-6 mb-8">
		{#each aims as aim}
			<li>{aim}</li>
		{/each}
	</ul>
	<a href="/register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		>Register Now</a
	>
</main>
