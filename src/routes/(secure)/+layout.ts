import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		redirect(303, '/');
	}
	return { supabase, session };
};
