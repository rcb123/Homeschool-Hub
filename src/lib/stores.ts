import { writable, type Writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';
import type { AppUser, Course } from '$root/db/datamodels'
import { supabase } from '$lib/supabaseClient';

const defaultUserStore: userStore = {
	user: null
};

export type userStore = {
	user: User | null;
	
};

export const user = writable<userStore>(defaultUserStore);

// User role state
export const userRole = writable('');

// Course store
export const courses = writable<Course[]>([]);

// Selected course store
export const selectedCourse = writable(null);

// Lessons store
export const lessons = writable([]);

// Assignments store
export const assignments = writable([]);

// Resources store
export const resources = writable([]);

// Categories store
export const categories = writable([]);

// Selected category store
export const selectedCategory = writable(null);

// Channels store
export const channels = writable([]);

// Selected channel store
export const selectedChannel = writable(null);

// Messages store
export const messages = writable([]);

supabase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN' && session) {
		store.update((oldStore) => {
			return {
				...oldStore,
				user: session.user
			};
		});
		userRole.update((oldStore) => {
			return {
				...oldStore,
				user: session.user
			};
		});
	} else if (event == 'SIGNED_OUT') {
		store.set(defaultStore);
	}
});