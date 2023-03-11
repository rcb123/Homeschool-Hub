<script>
    import { get } from 'svelte/store';
    import { courses } from '$lib/stores.js';
    import { page } from '$app/stores.js';
  
    export let id;
  
    const course = get(courses).find((c) => c.lessons.find((l) => l.assignments.find((a) => a.id === id)));
    const assignment = course.lessons.reduce((acc, cur) => acc.concat(cur.assignments), []).find((a) => a.id === id);
  
    $: page.set({ title: `Assignment - ${assignment.name}` });
</script>