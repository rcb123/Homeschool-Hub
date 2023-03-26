import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function createLesson(
	name: string,
	description: string,
	course_id: string,
	date: Date,
	time: Date,
	duration: number,
	status: string
) {
	const response = await supabase.from('lessons').insert([
		{
			name: name,
			description: description,
			course_id: course_id,
			date: date,
			time: time,
			duration: duration,
			status: status
		}
	]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateLesson(
	lesson_id: string,
	name: string,
	date: Date,
	time: Date,
	duration: number,
	status: string
) {
	const response = await supabase
		.from('lessons')
		.update({ name: name, date: date, time: time, duration: duration, status: status })
		.eq('id', lesson_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteLesson(lesson_id: string) {
	const response = await supabase.from('lessons').delete().eq('id', lesson_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function createAssignment(
	name: string,
	description = '',
	lesson_id: string,
	deadline: Date,
	status: string
) {
	const response = await supabase.from('assignments').insert([
		{
			name: name,
			description: description,
			lesson_id: lesson_id,
			deadline: deadline,
			status: status
		}
	]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateAssignment(
	assignment_id: string,
	name: string,
	deadline: Date,
	status: string,
	description: string
) {
	const response = await supabase
		.from('assignment')
		.update({ name: name, description: description, deadline: deadline, status: status })
		.eq('id', assignment_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteAssignment(assignment_id: string) {
	const response = await supabase.from('assignments').delete().eq('id', assignment_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}
