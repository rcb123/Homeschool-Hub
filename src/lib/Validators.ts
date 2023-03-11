import type { Role } from '$lib/types';

export const isValidName = (name: string | null) => {
	if (name) {
		if (name.length < 1) {
			return 'Name is required';
		}
		if (name.length > 32) {
			return 'Name must be less than 32 characters';
		}
		return null;
	} else return 'Name is required';
};

export const isValidEmail = (email: string | null) => {
	// eslint-disable-next-line no-useless-escape
	const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email) {
		if (!email.match(format)) {
			return 'Email must be a valid email address';
		}
		if (email.length < 1) {
			return 'Email is required';
		}
		if (email.length > 64) {
			return 'Email must be less than 64 characters';
		}
		return null;
	} else return 'Email is required';
};

export const isValidPassword = (password: string | null) => {
	if (password) {
		if (password.length < 6) {
			return 'Password must be at least 6 characters';
		} else if (password.length > 32) {
			return 'Password must be less than 32 characters';
		} else {
			return null;
		}
	} else return 'Password is required';
};

export const isPasswordMatch = (password: string | null, confirmPassword: string | null) => {
	if (!confirmPassword) {
		return 'Confirm Password is required';
	} else if (password != confirmPassword) {
		return 'Password and Confirm Password must match';
	} else return null;
};

export const isValidRole = (role: Role | null) => {
	if (role) {
		if (role != 'student' && role != 'teacher') {
			return 'Invalid role selected';
		}
		return null;
	} else return 'Role is required';
};

export const isAcceptingTerms = (terms: boolean) => {
	if (!terms) {
		return 'You must accept the terms before proceeding';
	} else return null;
};
