export default [
  {
    // extends: [
    //   'eslint:recommended',
    //   'plugin:import/recommended',
    //   'plugin:prettier/recommended',
    // ],
    // parserOptions: {
    //   ecmaVersion: 'latest',
    //   sourceType: 'module',
    // },
    {
    plugins: ['prettier', 'import'],},
    rules: {
      'prettier/prettier': ['error'],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            'sibling',
            'parent',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
];
