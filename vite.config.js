import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		__VERSION__: JSON.stringify('v1.0.0')
	}
};

export default config;
