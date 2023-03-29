import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import db from '$lib/stores.js';

export const load: PageLoad = async ({ params, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		redirect(303, '/');
	}

	await db.courses.getAll(supabase, session);

	const course = await db.courses.getOne(params.courseID);
	if (!course) {
		throw error(404, 'Course not found');
	}
	return { course };
};
