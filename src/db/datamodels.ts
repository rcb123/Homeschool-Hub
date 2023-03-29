import type { Role, UserStatus } from '$lib/types';

export interface BaseModel {
	id?: string | number | null;
	created_at: string;
	updated_at: string;
}

export interface AppUser extends BaseModel {
	email: string;
	name: string;
	avatar?: string;
	role: Role;
	status: UserStatus;
	auth_id: string | null;
}

export interface Enrollment {
	id?: string | null;
	student_id: string | null;
	course_id: string | null;
	enrolled_at: string;
}

export interface Course extends BaseModel {
	name: string;
	teacher_id: string;
	description: string;
}

export interface Lesson extends BaseModel {
	name: string;
	description: string;
	course_id: string;
	date: string;
	time: string;
	duration: string;
	status: string;
}

export interface Assignment extends BaseModel {
	name: string;
	lesson_id: string;
	description: string;
	deadline: string;
	status: string;
}

export interface Resource extends BaseModel {
	name: string;
	course_id: string;
	type: string;
	url: string;
}

export interface Category extends BaseModel {
	name: string;
	server_id: string;
}

export interface Channel extends BaseModel {
	name: string;
	category_id: string;
}

export interface Message extends BaseModel {
	channel_id: string;
	text: string;
	sent_by: string;
}
