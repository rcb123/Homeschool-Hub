import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import db from '$lib/stores.js';

export const load: PageLoad = (async ({ params, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		redirect(303, '/');
	}
	await db.courses.getAll(supabase, session);
	await db.lessons.getAll(supabase);
	await db.assignments.getAll(supabase);

	const assignment = await db.assignments.getOne(params.assignmentID);
	if (assignment && session) {
		return {
			user: session.user,
			assignment
		};
	}
	throw error(404, 'Assignment not found');
});
