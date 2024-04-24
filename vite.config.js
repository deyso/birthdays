import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = {
	port: 3000,
	open: true
};

export default defineConfig({
	base: "/birthdays",
	plugins: [sveltekit()],
	server: config,
	preview: config
});
