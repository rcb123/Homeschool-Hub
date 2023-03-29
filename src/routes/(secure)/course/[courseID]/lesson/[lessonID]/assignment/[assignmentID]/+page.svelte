<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<title>Assignment - {data.assignment.name}</title>
<main>
	<h1>{data.assignment.name}</h1>

	<p>{data.assignment.description}</p>

	<p>{data.assignment.deadline}</p>

	<p>{data.assignment.status}</p>
</main>
