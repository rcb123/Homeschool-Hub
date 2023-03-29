import type { PageLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import db from '$lib/stores.js';

export const load: PageLoad = async ({ params, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		redirect(303, '/');
	}

	await db.courses.getAll(supabase, session);
	await db.lessons.getAll(supabase);

	const lesson = await db.lessons.getOne(params.lessonID);
	if (!lesson) {
		throw error(404, 'Lesson not found');
	}
	return { lesson };
};
