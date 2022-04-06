module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'key-spacing': ['error', { 'multiLine': { 'beforeColon': false, 'afterColon': true } }],
        'comma-dangle': ['error', 'never']
    }
}