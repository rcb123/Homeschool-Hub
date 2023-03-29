import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$root: path.resolve('./src'),
			$components: path.resolve('./src/components'),
			$db: path.resolve('./src/db'),
			$static: path.resolve('/'),
			$services: path.resolve('./src/services'),
			$lib: path.resolve('/lib')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
