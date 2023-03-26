import type { PageLoad } from './$types';
import { error as err } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const load = (async () => {
	const { data: courses, error} = await supabase.from('courses').select('*');
	if (error) {
		throw err(500, error);
	}
	return { courses };
}) satisfies PageLoad;
