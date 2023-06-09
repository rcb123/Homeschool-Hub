import type { Role } from '$lib/types';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '$lib/database.types';
import { fail } from '@sveltejs/kit';
import {
	isValidName,
	isValidEmail,
	isValidPassword,
	isPasswordMatch,
	isValidRole,
	isAcceptingTerms
} from '$lib/Validators';

export async function register(
	supabase: SupabaseClient<Database, 'public'>,
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
			nameError: nameError,
			emailError: emailError,
			passwordError: passwordError,
			passwordMatchError: passwordMatchError,
			roleError: roleError,
			termsError: acceptedTerms,
			error: null
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
		return fail(400, {
			nameError: nameError,
			emailError: emailError,
			passwordError: passwordError,
			passwordMatchError: passwordMatchError,
			roleError: roleError,
			termsError: acceptedTerms,
			error: error
		});
	}

	return {
		status: 200,
		data: {
			nameError: nameError,
			emailError: emailError,
			passwordError: passwordError,
			passwordMatchError: passwordMatchError,
			roleError: roleError,
			termsError: acceptedTerms,
			error: error
		}
	};
}

export async function login(
	supabase: SupabaseClient<Database, 'public'>,
	email: string,
	password: string
) {
	const emailError = isValidEmail(email);
	const passwordError = isValidPassword(password);
	const validationError = emailError || passwordError;

	if (validationError) {
		return fail(400, { emailError: emailError, passwordError: passwordError, error: null });
	}

	const { error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password
	});

	if (error) {
		return fail(400, { emailError: emailError, passwordError: passwordError, error: error });
	}

	return {
		status: 200,
		data: {
			emailError: emailError,
			passwordError: passwordError,
			error: error
		}
	};
}
