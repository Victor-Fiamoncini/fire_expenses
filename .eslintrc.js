module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		process: true,
		__dirname: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
