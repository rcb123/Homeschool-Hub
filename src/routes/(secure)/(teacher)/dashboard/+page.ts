import type { PageLoad } from './$types';
import type { Course } from '$db/datamodels';
import { courses, lessons, assignments } from '$lib/stores';
import { redirect, fail } from '@sveltejs/kit';


export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const { data: courseData, error: courseError } = await supabase
		.from('courses')
		.select('*')
		.eq('teacher_id', session.user.id);

	if (courseError) {
		throw fail(500, courseError)
	}

	courses.set(courseData as Course[]);

	const { data, error } = await supabase.from('users').select().eq('auth_id', session.user.id);
	if (error) {
		throw fail(500, error);
	}
	const name = data[0].name;

	return { supabase, courses, lessons, assignments, name };
};
