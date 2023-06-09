module.exports = {
  env: {
    es6: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': ['off'],
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'comma-dangle': ['off', 'never'],
    'object-curly-spacing': ['warn', 'always'],
  },
};