module.exports = {
	root: true,
	env: {
		browser: true,
        node: true,
        es6: true,
        commonjs: true,
	},
	parser: 'babel-eslint',
	extends: ["plugin:prettier/recommended"],
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
