module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
    'import/no-unresolved': [
      2,
      { ignore: ['^[/]'] },
    ],
    'import/no-absolute-path': [0],
    'import/extensions': [0],
    'react/no-unused-prop-types': [0],
    'no-unused-prop-types': [0, { skipShapeProps: true }],
    'jsx-a11y/no-static-element-interactions': [1],
    'jsx-a11y/anchor-has-content': [1],
    'class-methods-use-this': [1]
  },
  ecmaFeatures: {
    classes: true,
  },
  env: {
    browser: true,
  },
};
