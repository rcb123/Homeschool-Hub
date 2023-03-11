import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function createCourse(name: string, teacher_id: number, description = '') {
	const response = await supabase
		.from('courses')
		.insert([{ name: name, description: description, teacher_id: teacher_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateCourse(course_id: number, name: string, description: string) {
	const response = await supabase
		.from('courses')
		.update({ name: name, description: description })
		.eq('id', course_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteCourse(course_id: number) {
	const response = await supabase.from('courses').delete().eq('id', course_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

// Remove created_by element from database, serves no purpose
export async function createCategory(name: string, server_id: number) {
	const response = await supabase.from('categories').insert([{ name: name, server_id: server_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateCategory(category_id: number, name: string) {
	const response = await supabase.from('categories').update({ name: name }).eq('id', category_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteCategory(category_id: number) {
	const response = await supabase.from('categories').delete().eq('id', category_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function createChannel(name: string, category_id: number) {
	const response = await supabase
		.from('channels')
		.insert([{ name: name, category_id: category_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateChannel(channel_id: number, name: string) {
	const response = await supabase.from('channels').update({ name: name }).eq('id', channel_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteChannel(channel_id: number) {
	const response = await supabase.from('channels').delete().eq('id', channel_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function createMessage(channel_id: number, content: string, sent_by: number) {
	const response = await supabase
		.from('messages')
		.insert([{ channel_id: channel_id, text: content, sent_by: sent_by }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateMessage(message_id: number, content: string) {
	const response = await supabase.from('messages').update({ text: content }).eq('id', message_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteMessage(message_id: number) {
	const response = await supabase.from('messages').delete().eq('id', message_id);

	if (error) {
		throw error(500, response.error);
	}

	return response;
}
