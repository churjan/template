module.exports = {
    parser: "babel-eslint",
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true,
    },
    extends: ["plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                semi: false,
                singleQuote: true,
                trailingComma: "es5",
                printWidth: 120,
            },
        ],
    },
};
