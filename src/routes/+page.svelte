<script>
	let aims = [
		'Centralized communication system',
		'Intuitive lesson planning tools',
		'Extensive resource library',
		'Community forums for parents and students'
	];
</script>

<main>
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Welcome to Homeschool Hub!</h1>
				<p class="py-6">
					Homeschool Hub is an online platform that connects homeschooling parents and students
					through a centralized communication system. Our platform offers a range of features
					including communication channels, lesson planning tools, a resource library, and community
					forums.
				</p>
				<a href="/register" class="btn btn-primary">Register Now</a>
			</div>
		</div>
	</div>
	<h2 class="text-2xl font-bold mb-4">Our Aims</h2>
	<ul class="list-disc pl-6 mb-8">
		{#each aims as aim}
			<li>{aim}</li>
		{/each}
	</ul>
	
</main>
