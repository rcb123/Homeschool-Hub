// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
		}
		// interface Platform {}

		interface Supabase {
			Database: import('./DatabaseDefinitions').Database
			SchemaName: 'public'
		}
	}
}

export {};
