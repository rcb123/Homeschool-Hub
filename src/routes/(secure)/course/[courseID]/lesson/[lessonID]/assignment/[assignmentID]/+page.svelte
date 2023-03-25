<script lang="ts">
	import type { PageData } from './$types';

  	export let data: PageData;
</script>

<title>Assignment - {data.name}</title>
<main>
	<h1>{data.name}</h1>

	<p>{data.description}</p>

    <p>{data.deadline}</p>

    <p>{data.status}</p>
</main>