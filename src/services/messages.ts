import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function createCategory(name: string, server_id: string) {
	const response = await supabase.from('categories').insert({ name: name, server_id: server_id });

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateCategory(category_id: string, name: string) {
	const response = await supabase.from('categories').update({ name: name }).eq('id', category_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteCategory(category_id: string) {
	const response = await supabase.from('categories').delete().eq('id', category_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function createChannel(name: string, category_id: string) {
	const response = await supabase
		.from('channels')
		.insert([{ name: name, category_id: category_id }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateChannel(channel_id: string, name: string) {
	const response = await supabase.from('channels').update({ name: name }).eq('id', channel_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteChannel(channel_id: string) {
	const response = await supabase.from('channels').delete().eq('id', channel_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function createMessage(channel_id: string, content: string, sent_by: string) {
	const response = await supabase
		.from('messages')
		.insert([{ channel_id: channel_id, text: content, sent_by: sent_by }]);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function updateMessage(message_id: string, content: string) {
	const response = await supabase.from('messages').update({ text: content }).eq('id', message_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}

export async function deleteMessage(message_id: string) {
	const response = await supabase.from('messages').delete().eq('id', message_id);

	if (response.error) {
		throw error(500, response.error);
	}

	return response;
}