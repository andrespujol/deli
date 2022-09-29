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
        'no-tabs': 'off',
        'vuejs-accesibility/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'max-len': ['error', { code: 5500 }],
        'vue/multi-word-component-names': 'off',

    },

};
