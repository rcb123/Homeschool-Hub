<script lang="ts">
	export let icon: string;
	export let tooltip: string;
	export let ref: string;
</script>

<a class="sidebar-icon group block" href={ref}>
	{icon}
	<span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</a>

<style lang="scss">
	.sidebar-icon {
		@apply relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-accent text-accent-content text-xl
               hover:bg-accent-focus hover:text-accent-content
               rounded-3xl hover:rounded-xl
               transition-all duration-100 ease-linear
               cursor-pointer;
	}

	.sidebar-tooltip {
		@apply absolute w-auto p-2 m-2 min-w-max left-14
               rounded-md shadow-md
               text-white bg-accent-focus
               text-xs font-medium
               transition-all duration-100 scale-0 origin-left;
	}
</style>
