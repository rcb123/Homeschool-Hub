<script lang="ts">
	import { page } from '$app/stores';

	let paths: string[] = [];
	$: {
		paths = $page.url.pathname.split('/');
		paths.shift();
		paths = capitalizePaths(paths);
	}

	function capitalizePaths(paths: string[]) {
		return paths.map((path) => {
			const capitalizedFirst = path.charAt(0).toUpperCase();
			const rest = path.slice(1).toLowerCase();
			return capitalizedFirst + rest;
		});
	}
</script>

<div class="navbar bg-base-100 border-b-4 border-accent-focus shadow h-[4.5rem]">
	<div class="navbar-start ml-4">
		<div class="text-sm breadcrumbs">
			<ul>
				{#each paths as path}
					<li><a href={$page.url.pathname}>{path}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost normal-case text-xl" href="/hub">Homeschool Hub</a>
	</div>
	<div class="navbar-end">
		<a href="/account">
			<button class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.33 0-7 1.17-7 3v2h14v-2c0-1.83-4.67-3-7-3z"
					/>
				</svg>
			</button>
		</a>
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/></svg
				>
				<span class="badge badge-xs badge-primary indicator-item" />
			</div>
		</button>
	</div>
</div>
