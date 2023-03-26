import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import db from '$lib/stores.js';

export const load = (async ({ params }) => {
	const {
		data: { session }
	} = await supabase.auth.getSession();
	if (session) {
		await db.courses.getAll(session);

		const course = await db.courses.getOne(params.courseID);
		if (course) {
			return course;
		}
		throw error(404, 'Course not found');
	} else {
		throw error(500, 'User not signed in');
	}
}) satisfies PageLoad;
