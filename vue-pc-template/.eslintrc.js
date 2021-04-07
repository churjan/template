module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': 'off',
        'no-unused-vars': ['error', { args: 'none' }],
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
                trailingComma: 'es5',
                printWidth: 120,
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
