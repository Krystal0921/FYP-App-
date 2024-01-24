module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'max-len': ['error', { code: 320 }],
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/no-unstable-nested-components': 'off',
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassign': 1,
    'template-curly-spacing': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
  }
};
