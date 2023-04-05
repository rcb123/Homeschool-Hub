import type { LayoutLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}
	const { data, error } = await supabase.from('users').select().eq('auth_id', session.user.id);
	if (error) {
		throw fail(500, error);
	}
	if (data[0].role === 'student') {
		return { supabase, session };
	} else {
		throw redirect(303, '/');
	}
};
