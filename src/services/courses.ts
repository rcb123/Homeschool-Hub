import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function createCourse(name: string, teacher_id: string, description = '') {
	const response = await supabase
		.from('courses')
		.insert([{ name: name, description: description, teacher_id: teacher_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateCourse(course_id: string, name: string, description: string) {
	const response = await supabase
		.from('courses')
		.update({ name: name, description: description })
		.eq('id', course_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteCourse(course_id: string) {
	const response = await supabase.from('courses').delete().eq('id', course_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function enroll(course_id: string, user_id: string) {
	const response = await supabase
		.from('enrollments')
		.insert({ student_id: user_id, course_id: course_id });

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}
