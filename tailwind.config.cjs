const config = {
	mode: "jit",
	darkMode: 'class',
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};

module.exports = config;
