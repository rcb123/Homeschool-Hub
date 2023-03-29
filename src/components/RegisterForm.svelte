<script lang="ts">
	import type { AuthError, SupabaseClient } from '@supabase/supabase-js';
	import type { ActionFailure } from '@sveltejs/kit';
	import type { Database } from '$lib/database.types';
	import { register } from '$root/services/auth';

	let name = '';
	let email = '';
	let password = '';
	let passwordConfirm = '';
	let role: 'student' | 'teacher';
	let terms: boolean = false;

	let response:
		| {
				status: number | string;
				data: {
					nameError: string | null;
					emailError: string | null;
					passwordError: string | null;
					passwordMatchError: string | null;
					roleError: string | null;
					termsError: string | null;
					error: string | null;
				};
		  }
		| ActionFailure<{
				nameError: string | null;
				emailError: string | null;
				passwordError: string | null;
				passwordMatchError: string | null;
				roleError: string | null;
				termsError: string | null;
				error: AuthError;
		  }>;

	let nameError: string | null = null;
	let emailError: string | null = null;
	let passwordError: string | null = null;
	let passwordMatchError: string | null = null;
	let roleError: string | null = null;
	let termsError: string | null = null;
	let error: string | AuthError | null = null;

	export let supabase: SupabaseClient<Database, 'public'>;

	const handleSubmit = async () => {
		response = await register(supabase, name, email, password, passwordConfirm, role, terms);

		nameError = response.data.nameError;
		emailError = response.data.emailError;
		passwordError = response.data.passwordError;
		passwordMatchError = response.data.passwordMatchError;
		roleError = response.data.roleError;
		termsError = response.data.termsError;
		error = response.data.error;
	};
</script>

<h1 class="text-3xl font-medium text-center my-2">Register for Homeschool Hub</h1>

<form
	on:submit|preventDefault|trusted={handleSubmit}
	class="flex flex-col items-center w-full justify-center"
>
	<!-- Name Input Field -->
	<div class="form-control w-full max-w-xs">
		<label for="name" class="label">
			<span class="label-text">Name:</span>
		</label>
		<input
			type="text"
			name="name"
			class="input w-full max-w-xs {nameError ? 'input-error' : 'input-bordered'}"
			bind:value={name}
		/>
		<label for="name" class="label">
			<span class="label-text-alt text-error">
				{#if nameError}
					<span class="label-text-alt text-error">{nameError}</span>
				{/if}
			</span>
		</label>
	</div>

	<!-- Email Input Field -->
	<div class="form-control w-full max-w-xs">
		<label for="email" class="label">
			<span class="label-text">Email:</span>
		</label>
		<input
			type="email"
			name="email"
			class="input w-full max-w-xs {emailError ? 'input-error' : 'input-bordered'}"
			bind:value={email}
		/>
		<label for="email" class="label">
			<span class="label-text-alt text-error">
				{#if emailError}
					<span class="label-text-alt text-error">{emailError}</span>
				{/if}
			</span>
		</label>
	</div>

	<!-- Password Input Field -->
	<div class="form-control w-full max-w-xs">
		<label for="password" class="label">
			<span class="label-text">Password:</span>
		</label>
		<input
			type="password"
			class="input w-full max-w-xs {passwordError ? 'input-error' : 'input-bordered'}"
			bind:value={password}
		/>
		<label for="password" class="label">
			<span class="label-text-alt text-error">
				{#if passwordError}
					<span class="label-text-alt text-error">{passwordError}</span>
				{/if}
			</span>
		</label>
	</div>

	<!-- Confirm Password Input Field -->
	<div class="form-control w-full max-w-xs">
		<label for="passwordConfirm" class="label">
			<span class="label-text">Confirm Password:</span>
		</label>
		<input
			type="password"
			class="input w-full max-w-xs {passwordMatchError ? 'input-error' : 'input-bordered'}"
			bind:value={passwordConfirm}
		/>
		<label for="passwordConfirm" class="label">
			<span class="label-text-alt text-error">
				{#if passwordMatchError}
					<span class="label-text-alt text-error">{passwordMatchError}</span>
				{/if}
			</span>
		</label>
	</div>

	<!-- Role Selection Field -->
	<div class="form-control w-full max-w-xs">
		<label for="role" class="label">
			<span class="label-text">Role:</span>
		</label>
		<select class="select w-full max-w-xs" bind:value={role}>
			<option disabled selected>Choose your role:</option>
			<option value="student">Student</option>
			<option value="teacher">Teacher</option>
		</select>
		<label for="role" class="label">
			<span class="label-text-alt text-error">
				{#if roleError}
					<span class="label-text-alt text-error">{roleError}</span>
				{/if}
			</span>
		</label>
	</div>

	<!-- Terms Checkbox Field -->
	<div class="form-control w-full max-w-xs pb-2">
		<label class="label cursor-pointer justify-start space-x-4">
			<input
				type="checkbox"
				name="terms"
				class="checkbox checkbox-primary {termsError ? 'border-error' : ''}"
			/>
			<span class="label-text">I accept the terms and conditions</span>
		</label>
		<label for="terms" class="label">
			{#if termsError}
				<span class="label-text-alt text-error">{termsError}</span>
			{/if}
		</label>
	</div>

	<!-- Submit Buttom -->
	<div class="w-full max-w-xs">
		<button type="submit" class="btn btn-primary w-full">Register</button>
	</div>
</form>
{#if response?.status == 200}
	<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-full max-w-xs mx-auto text-center">
		<p>Verification email sent!</p>
		<p>Please check your email</p>
	</div>
{/if}
{#if error}
	<div
		class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-full max-w-xs mx-auto text-center font-medium"
	>
		<p class="text-error">{error}</p>
	</div>
{/if}
