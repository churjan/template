module.exports = {
	parser: 'babel-eslint',
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
		commonjs: true,
	},
	extends: ['plugin:prettier/recommended'],
	plugins: ['html'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				tabWidth: 4,
				useTabs: true,
				semi: false,
				singleQuote: true,
				trailingComma: 'es5',
				printWidth: 120,
			},
		],
	},
}
