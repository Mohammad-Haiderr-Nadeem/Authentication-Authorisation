module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'linebreak-style': [
    //   'error',
    //   'windows'
    // ],
    // // note you must disable the base rule as it can report incorrect errors
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': [
    //   'error'
    // ],
    // 'react/jsx-filename-extension': [
    //   1,
    //   {
    //     extensions: [
    //       '.js',
    //       '.tsx'
    //     ]
    //   }
    // ],
    // 'import/extensions': [
    //   'error',
    //   'never',
    //   {
    //     scss: 'always',
    //     json: 'always'
    //   }
    // ],
    // 'react/prop-types': [
    //   2,
    //   {
    //     ignore: [
    //       'children'
    //     ]
    //   }
    // ],
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'error',
    // 'import/prefer-default-export': 'off',
    // 'max-len': [
    //   'error',
    //   {
    //     code: 140,
    //     ignoreUrls: true,
    //     ignoreTrailingComments: true,
    //     ignoreStrings: true
    //   }
    // ],
    // 'react/jsx-props-no-spreading': [
    //   'error',
    //   {
    //     custom: 'ignore'
    //   }
    // ]
  }
}
