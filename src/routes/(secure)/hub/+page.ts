import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import { userRole } from '$lib/stores.js';

export const load = (async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();
	if (session) {
		const { data } = await supabase.from('users').select('role').eq('auth_id', session.user.id);
		if (data) {
			const role = data[0].role;
            const res = data[0]
			userRole.set(role);
			return { res };
		}
		throw error(404, 'Role not found');
	} else {
		throw error(500, 'User not signed in');
	}
}) satisfies PageLoad;
