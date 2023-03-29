import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		redirect(303, '/');
	}
	return { supabase, session };
};
