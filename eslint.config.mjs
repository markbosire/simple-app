// eslint.config.js (New Flat Config - Recommended for ESLint 9+)
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      // Possible Errors
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'warn',
      'no-extra-semi': 'error',
      'no-unreachable': 'error',
      'valid-typeof': 'error',

      // Best Practices
      'curly': 'error',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'no-return-assign': 'error',
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-use-before-define': 'error',

      // Style
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'brace-style': ['error', '1tbs'],
      'camelcase': 'warn',
      'consistent-return': 'error'
    },
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.min.js'
    ]
  },
  // Configuration for test files
  {
    files: ['test/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        should: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      'no-unused-expressions': 'off'
    }
  }
];

// Alternative: .eslintrc.js (Legacy Config - Still widely used)
/*
module.exports = {
  env: {
    node: true,
    es2022: true,
    mocha: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'valid-typeof': 'error',

    // Best Practices
    'curly': 'error',
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-use-before-define': 'error',

    // Style
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'camelcase': 'warn',
    'consistent-return': 'error'
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.min.js'
  ]
};
*/
