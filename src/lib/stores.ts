import { writable, type Writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';
import type {
	AppUser,
	Course,
	Lesson,
	Assignment,
	Resource,
	Category,
	Channel,
	Message
} from '$root/db/datamodels';
import { supabase } from '$lib/supabaseClient';

const defaultUserStore: userStore = {
	user: null
};

export type userStore = {
	user: User | null;
};

// Current user store, stores auth info
export const user: Writable<userStore> = writable(defaultUserStore);

// Current app user store, stores profile info
export const appUser: Writable<AppUser> = writable();

// User role state
export const userRole: Writable<'teacher' | 'student' | null> = writable(null);

// Course store
export const courses: Writable<Course[]> = writable([]);

// Selected course store
export const selectedCourse = writable(null);

// Course Students Store
export const courseStudents: Writable<{ course: Course; students: User[] }[]> = writable([]);

// Lessons store
export const lessons: Writable<Lesson[]> = writable([]);

// Assignments store
export const assignments: Writable<Assignment[]> = writable([]);

// Resources store
export const resources: Writable<Resource[]> = writable([]);

// Categories store
export const categories: Writable<Category[]> = writable([]);

// Channels store
export const channels: Writable<Channel[]> = writable([]);

// Messages store
export const messages: Writable<Message[]> = writable([]);

supabase.auth.onAuthStateChange(async (event, session) => {
	if (event == 'SIGNED_IN' && session) {
		user.update((oldStore) => {
			return {
				...oldStore,
				user: session.user
			};
		});
		const res = await supabase.from('users').select().eq('id', session.user.id);
		if (res.data) {
			appUser.update((oldStore) => {
				return {
					...oldStore,
					id: res.data.id,
					created_at: res.data.created_at,
					updated_at: res.data.updated_at,
					email: res.data.email,
					name: res.data.name,
					avatar: res.data.avatar,
					role: res.data.role
				};
			});
		} else console.log(res.error);
	} else if (event == 'SIGNED_OUT') {
		user.set(defaultUserStore);

		// Create defaultAppUserStore for when nobody is signed in
		// appUser.set(defaultAppUserStore);
	}
});

export default {
	courses: {
		getAll: async () => {
			const res = await supabase.from('courses').select().order('name', {
				ascending: true
			});
			if (res.data) {
				courses.update(() => {
					return res.data;
				});
			} else {
				console.log(res.error);
				courses.set([]);
			}
		}
	},
	lessons: {
		getAll: async (course_id: number) => {
			const res = await supabase.from('courses').select().eq('course_id', course_id);
			if (res.data) {
				lessons.update(() => {
					return res.data;
				});
			} else {
				console.log(res.error);
				lessons.set([]);
			}
		}
	},
	assignments: {
		getAll: async (lesson_id: number) => {
			const res = await supabase.from('courses').select().eq('lesson_id', lesson_id)
			if (res.data) {
				assignments.update(() => {
					return res.data;
				});
			} else {
				console.log(res.error);
				assignments.set([]);
			}
		}
	}
};
