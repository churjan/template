module.exports = {
	root: true,
	env: {
		es6:true,
		node: true,
	},
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
				printWidth: 120
			},
		],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
}
