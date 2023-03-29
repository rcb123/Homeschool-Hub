import type { PageLoad } from './$types';
import db, { courses, lessons, assignments } from '$lib/stores';
import { redirect, fail } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}
	await db.courses.getAll(supabase, session);
	await db.lessons.getAll(supabase);
	await db.assignments.getAll(supabase);
	const { data, error } = await supabase.from('users').select().eq('auth_id', session.user.id);
	if (error) {
		throw fail(500, error);
	}
  const name = data[0].name;

	return { courses, lessons, assignments, name };
};
