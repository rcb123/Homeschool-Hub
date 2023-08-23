<script lang="ts">
	import type { AuthError, SupabaseClient } from '@supabase/supabase-js';
	import type { ActionFailure } from '@sveltejs/kit';
	import type { Database } from '$lib/database.types';
	import { login } from '$root/services/auth';

	let email: string | null;
	let password: string | null;

	let response:
		| {
				status: number | string;
				data: { emailError: string | null; passwordError: string | null; error: string | null };
		  }
		| ActionFailure<{ emailError: string | null; passwordError: string | null; error: AuthError }>;

	let emailError: string | null = null;
	let passwordError: string | null = null;
	let error: string | AuthError | null = null;

	export let supabase: SupabaseClient<Database, 'public'>;
	export let redirect: string = '/';

	const handleSubmit = async () => {
		response = await login(supabase, email as string, password as string);

		if (response.status == 200) {
			window.location.href = redirect;
		}

		emailError = response.data.emailError;
		passwordError = response.data.passwordError;
		error = response.data.error;
	};
</script>

<form
	on:submit|preventDefault|trusted={handleSubmit}
	class="flex flex-col items-center w-full justify-center"
>
	<h1 class="text-3xl font-medium text-center mb-2">Login</h1>
	<div class="form-control w-full max-w-xs">
		<label for="email" class="label">
			<span class="label-text">Email</span>
		</label>
		<input
			type="email"
			name="email"
			bind:value={email}
			class="input input-accent w-full max-w-xs {emailError ? 'input-error' : 'input-bordered'}"
		/>
		<label for="email" class="label">
			{#if emailError}
				<span class="label-text-alt text-error">{emailError}</span>
			{/if}
		</label>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="password" class="label">
			<span class="label-text">Password</span>
		</label>
		<input
			type="password"
			name="password"
			bind:value={password}
			class="input input-accent w-full max-w-xs {passwordError ? 'input-error' : 'input-bordered'}"
		/>
		<label for="password" class="label">
			{#if passwordError}
				<span class="label-text-alt text-error">{passwordError}</span>
			{/if}
		</label>
	</div>
	<div class="form-control w-full max-w-xs">
		<p class="pb-4 pt-1 text-right">
			<a href="/passwordreset"><span class="link link-primary link-hover">Forgot password</span></a>
		</p>
	</div>
	<div class="form-control w-full max-w-xs">
		<button class="btn btn-primary w-full text-white" type="submit">Login</button>
	</div>
	<div class="form-control w-full max-w-xs">
		<p class="py-4 text-center">
			Don't have an account? <a href="/register"
				><span class="link link-primary link-hover">Sign up</span></a
			>
		</p>
	</div>
	{#if error}
		<div class="w-full rounded-lg bg-slate-100 mt-4 p-4 max-w-xs">
			<p class="text-base text-center font-medium text-error">{error}</p>
		</div>
	{/if}
</form>
