import {
	isValidName,
	isValidEmail,
	isValidPassword,
	isPasswordMatch,
	isValidRole,
	isAcceptingTerms
} from '$lib/Validators';
import type { Role } from '$lib/types';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function register(
	name: string,
	email: string,
	password: string,
	passwordConfirm: string,
	role: Role,
	terms: boolean
) {
	const nameError: string | null = isValidName(name);
	const emailError: string | null = isValidEmail(email);
	const passwordError: string | null = isValidPassword(password);
	const passwordMatchError: string | null = isPasswordMatch(password, passwordConfirm);
	const roleError: string | null = isValidRole(role);
	const acceptedTerms: string | null = isAcceptingTerms(terms);
	const validationError: boolean =
		(nameError ||
			emailError ||
			passwordError ||
			passwordMatchError ||
			roleError ||
			acceptedTerms) != null;

	if (validationError) {
		return fail(400, {
			nameError,
			emailError,
			passwordError,
			passwordMatchError,
			roleError,
			acceptedTerms
		});
	}

	const { error } = await supabase.auth.signUp({
		email: email,
		password: password
	});

	// I don't know how a new auth user will be added to the actual users database,
	// so might have to add a call that creates the necessary corresponding user entry
	// either that or modify the trigger for on register

	if (error) {
		return fail(400, { error });
	}

	return {
		status: 200
	};
}

export async function login(email: string | null, password: string | null) {
	const emailError = isValidEmail(email);
	const passwordError = isValidPassword(password);
	const validationError = emailError || passwordError;

	if (validationError) {
		return fail(400, { emailError, passwordError });
	}

	const { error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	});

	if (error) {
		return fail(400, { error });
	}

	return {
		status: 200
	};
}
