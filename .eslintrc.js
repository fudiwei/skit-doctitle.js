module.exports = {
    env: {
        es6: true,
        browser: true,
        commonjs: true,
        amd: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2015,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['warn', 'windows'],
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'prettier/prettier': ['warn', { trailingComma: 'none' }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    }
};
