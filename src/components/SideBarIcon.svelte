<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
	export let tooltip: string;
	export let ref: string;
</script>

<a class="sidebar-icon group block" href={ref}>
	<Icon {icon} />

	<span class="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
</a>

<style lang="scss">
	.sidebar-icon {
		@apply relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-slate-800 text-red-500
               hover:bg-red-600 hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-100 ease-linear
               cursor-pointer;
	}

	.sidebar-tooltip {
		@apply absolute w-auto p-2 m-2 min-w-max left-14
               rounded-md shadow-md
               text-white bg-slate-900 
               text-xs font-bold
               transition-all duration-100 scale-0 origin-left;
	}
</style>
