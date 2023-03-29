// See https://kit.svelte.dev/docs/types#app

import type { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from '$lib/database.types';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		interface Supabase {
			Database: import('$lib/database.types').Database;
			SchemaName: 'public';
		}
		// interface Error {}
		// interface Platform {}
	}
}

declare module '$env/static/public' {
    export const PUBLIC_SUPABASE_URL: string;
	export const PUBLIC_SUPABASE_ANON_KEY: string;
}

export {};
