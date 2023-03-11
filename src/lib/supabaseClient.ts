import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';

const supabaseURL = 'https://kiatomepoooitkrxqnez.supabase.co'

export const supabase = createClient(supabaseURL, env.PUBLIC_SUPABASE_ANON_KEY);
