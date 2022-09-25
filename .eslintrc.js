module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'linebreak-style': 0,
        indent: ['error', 4],
        'object-curly-newline': ['error', {
            ObjectExpression: 'always',
            ObjectPattern: {
                multiline: true,
            },
            ImportDeclaration: 'never',
            ExportDeclaration: {
                multiline: true, minProperties: 3,
            },
        }],
    },

};
