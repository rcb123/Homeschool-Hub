<script lang="ts">
	import type { ActionFailure } from '@sveltejs/kit';
	import { login } from '$root/services/auth';

	let email: string | null;
	let password: string | null;

	let responseData: ActionFailure<{ status: number; data: any }>;
	let response: { emailError?: any; passwordError?: any; error?: any }[];

	let emailError: string | null = null;
	let passwordError: string | null = null;
	let error: string | null = null;

	const handleSubmit = async () => {
		responseData = await login(email, password);
		let responseJSON = await responseData.json();
		response = await JSON.parse(responseJSON.data);
		if (responseData.status == 200) {
			window.location.href = '/';
		}

		let emailErrorIndex = response[0].emailError;
		let passwordErrorIndex = response[0].passwordError;
		let errorIndex = response[0].error;

		emailError = response[emailErrorIndex];
		passwordError = response[passwordErrorIndex];
		error = response[errorIndex];
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
			class="input w-full max-w-xs {emailError ? 'input-error' : 'input-bordered'}"
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
			class="input w-full max-w-xs {passwordError ? 'input-error' : 'input-bordered'}"
		/>
		<label for="password" class="label">
			{#if passwordError}
				<span class="label-text-alt text-error">{passwordError}</span>
			{/if}
		</label>
	</div>
	<div class="w-full max-w-xs">
		<button class="btn btn-primary w-full" type="submit">Login</button>
	</div>
	{#if error}
		<div class="w-full rounded-lg bg-slate-100 mt-4 p-4 max-w-xs">
			<p class="text-base text-center font-medium text-error">{error}</p>
		</div>
	{/if}
</form>
