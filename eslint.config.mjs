import js from '@eslint/js'
import next from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  next.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'warn',
      quotes: ['error', 'single'],
      'react/display-name': 'off',
    },
  },
]
