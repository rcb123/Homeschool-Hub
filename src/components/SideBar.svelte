<script lang="ts">
	import SideBarIcon from './SideBarIcon.svelte';
	import SideBarLogoIcon from './SideBarLogoIcon.svelte';

	let courses: { name: string; id: string; logo: string }[] = [];
</script>

<div
	class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-neutral text-neutral-content shadow-lg z-10"
>
	<SideBarLogoIcon tooltip="Homepage" ref="/" />
	<hr class="border-solid border-2 my-1 border-accent-focus" />

	{#each courses as course}
		<SideBarIcon icon={course.logo} tooltip={course.name} ref="/course/{course.id}" />
	{/each}

	<SideBarIcon icon="➕" tooltip="Add a Course" ref="/add" />
	<SideBarIcon icon="⚡️" tooltip="Resource Hub" ref="/resources" />

	<!-- Sidebar footer -->
	<div class="flex flex-col absolute w-full bottom-0 pb-2">
		<SideBarIcon icon="⚙️" tooltip="Settings" ref="/settings" />
		<SideBarIcon icon="📝" tooltip="Report a Problem" ref="/report" />
		<SideBarIcon icon="💻" tooltip="Source Code" ref="https://github.com/rcb123/homeschool-hub" />
	</div>
</div>
