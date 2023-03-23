<script>
	import { page } from '$app/stores';
	import header_fill from '$lib/assets/header_fill.svg';
	import logo from '$lib/assets/logo.svg';
</script>

<main>
	<img
		src={header_fill}
		alt="header"
		class="absolute top-0 left-0 drop-shadow-lg z-0 max-md:min-w-[50rem] max-md:max-w-[50rem]"
	/>
	<a
		href="/"
		class="absolute max-md:top-[0.5rem] top-[1.4vw] max-md:left-3 left-[1.5vw] max-md:w-[8.5rem] w-[calc(16vw+0.5rem)] h-fit btn btn-ghost btn-circle pl-[1px] pr-2"
	>
		<img src={logo} alt="Homeschool Hub Logo" />
	</a>
	<div class="min-h-screen z-10">
		<div class="pl-[5vw] pt-[30vh]">
			<div class="max-lg:h-[56vh] h-[50vh]">
				<h1 class="max-md:text-5xl text-6xl font-bold min-w-[30rem] text-yellow-600">
					Welcome to<br />Homeschool Hub!
				</h1>
				<p class="py-6 min-w-[25rem] max-w-[40vw] text-secondary text-base">
					Homeschool Hub is an online platform that connects homeschooling parents and students
					through a centralized communication system.<br />Our platform offers a range of features
					including communication channels, lesson planning tools, a resource library, and community
					forums.
				</p>
				<p class="min-w-[22rem] max-w-[40vw] text-secondary text-sm">
					Homeschool Hub offers a flexible and personalized approach to homeschooling. Our platform
					allows parents to tailor their child's education to their specific needs and interests,
					creating a unique learning experience that fosters a love for learning. <span
						class="max-md:hidden"
						>Homeschooling can often feel overwhelming and isolating, but with Homeschool Hub,
						parents can connect with other homeschooling families and share advice, resources, and
						support.
					</span>Whether you're a new homeschooling parent or an experienced veteran, Homeschool Hub
					provides the tools and community you need to make homeschooling a success.
				</p>
			</div>
			<div class="flex items-center">
				<div class="flex justify-around min-w-[18rem] max-w-[35vw]">
					{#if !$page.data.session}
						<a href="/register" class="btn btn-primary text-white w-24">Register</a>
						<a href="/login" class="btn btn-primary text-white w-24">Login</a>
					{:else}
						<a href="/hub" class="btn btn-primary text-white min-w-[14rem] w-[20vw]">Access Learning Hub</a>
					{/if}
				</div>
				<div
					class="flex justify-between w-[calc(100vw-40vw)] text-sm text-lavender ml-[5vw] max-lg:hidden font-semibold"
				>
					<p class="px-2">
						Stay Connected:<br />Our centralized communication system keeps parents and students
						connected in one easy-to-use platform.
					</p>
					<p class="px-2">
						Plan with Ease:<br />Our intuitive lesson planning tools make it simple for parents to
						create and manage their child's educational plan.
					</p>
					<p class="px-2">
						Access Resources:<br />Our extensive resource library provides homeschooling families
						with a wealth of materials to support their child's learning.
					</p>
					<p class="px-2">
						Join the Community:<br />Our community forums provide a space for homeschooling parents
						and students to connect, share ideas, and offer support to one another.
					</p>
				</div>
			</div>
		</div>
	</div>
</main>
