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
		await db.lessons.getAll();

		const lesson = await db.lessons.getOne(params.lessonID);
		if (lesson) {
			return lesson;
		}

		throw error(404, 'Lesson not found');
	} else {
		throw error(500, 'User not signed in');
	}
}) satisfies PageLoad;
