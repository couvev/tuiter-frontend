module.exports = {
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false
    },
    env: {
      browser: true,
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    rules: {
      // Suas regras personalizadas
    }
  }