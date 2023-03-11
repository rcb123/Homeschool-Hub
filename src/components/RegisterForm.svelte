<script lang="ts">
	import { register } from '$root/services/auth';

	let name = '';
	let email = '';
	let password = '';
	let passwordConfirm = '';
	let role: 'student' | 'teacher';
	let terms: boolean = false;
	let responseData;
	let response: { error: any }[];

	const handleSubmit = async () => {
		responseData = register(name, email, password, passwordConfirm, role, terms);
		let responseJSON = await responseData.json();
		response = await JSON.parse(responseJSON.data);
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
			class="input w-full max-w-xs {response[0].nameError ? 'input-error' : 'input-bordered'}"
			bind:value={name}
		/>
		<label for="name" class="label">
			<span class="label-text-alt text-error">
				{#if response[0].nameError}
					<span class="label-text-alt text-error">{response[0].nameError}</span>
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
			class="input w-full max-w-xs {response[0].emailError ? 'input-error' : 'input-bordered'}"
			bind:value={email}
		/>
		<label for="email" class="label">
			<span class="label-text-alt text-error">
				{#if response[0].emailError}
					<span class="label-text-alt text-error">{response[0].emailError}</span>
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
			class="input w-full max-w-xs {response[0].passwordError ? 'input-error' : 'input-bordered'}"
			bind:value={password}
		/>
		<label for="password" class="label">
			<span class="label-text-alt text-error">
				{#if response[0].passwordError}
					<span class="label-text-alt text-error">{response[0].passwordError}</span>
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
			class="input w-full max-w-xs {response[0].passwordMatchError
				? 'input-error'
				: 'input-bordered'}"
			bind:value={passwordConfirm}
		/>
		<label for="passwordConfirm" class="label">
			<span class="label-text-alt text-error">
				{#if response[0].passwordMatchError}
					<span class="label-text-alt text-error">{response[0].passwordMatchError}</span>
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
				{#if response[0].roleError}
					<span class="label-text-alt text-error">{response[0].roleError}</span>
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
				class="checkbox checkbox-primary {response[0].termsError ? 'border-error' : ''}"
			/>
			<span class="label-text">I accept the terms and conditions</span>
		</label>
		<label for="terms" class="label">
			{#if response[0].termsError}
				<span class="label-text-alt text-error">{response[0].termsError}</span>
			{/if}
		</label>
	</div>

	<!-- Submit Buttom -->
	<div class="w-full max-w-xs">
		<button type="submit">Register</button>
	</div>
</form>
{#if response.status == 200}
	<div class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-full max-w-xs mx-auto text-center">
		<p>Verification email sent!</p>
		<p>Please check your email</p>
	</div>
{/if}
{#if response[0].error}
	<div
		class="mt-10 bg-slate-50 rounded-xl p-6 shadow-lg w-full max-w-xs mx-auto text-center font-medium"
	>
		<p class="text-error">{response[0].error}</p>
	</div>
{/if}
