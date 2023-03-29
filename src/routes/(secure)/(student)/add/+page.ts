import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}
	const { data: courses, error: courseError } = await supabase.from('courses').select('*');
	if (courseError) {
		throw error(500, courseError);
	}
	return { courses };
};
