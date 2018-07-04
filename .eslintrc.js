module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'import/no-named-as-default': 'off',
    'react/no-unescaped-entities': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
