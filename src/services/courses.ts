import type { Database } from '$lib/database.types';
import type { SupabaseClient } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

export async function createCourse(
	supabase: SupabaseClient<Database, 'public'>,
	name: string,
	teacher_id: string,
	description = ''
) {
	const response = await supabase
		.from('courses')
		.insert([{ name: name, description: description, teacher_id: teacher_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateCourse(
	supabase: SupabaseClient<Database, 'public'>,
	course_id: number,
	name: string,
	description: string
) {
	const response = await supabase
		.from('courses')
		.update({ name: name, description: description })
		.eq('id', course_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteCourse(
	supabase: SupabaseClient<Database, 'public'>,
	course_id: number
) {
	const response = await supabase.from('courses').delete().eq('id', course_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function enroll(
	supabase: SupabaseClient<Database, 'public'>,
	course_id: number,
	user_id: string
) {
	const response = await supabase
		.from('enrollments')
		.insert({ student_id: user_id, course_id: course_id });

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}
