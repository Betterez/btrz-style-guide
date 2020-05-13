module.exports = {
  extends: [
    "eslint-config-btrz",
    "plugin:vue/essential"],
  parserOptions: {  // copied from airbnb-config-airbnb-base (see README)
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.vue']
      }
    },
  },
  plugins: [
    "html"
  ],
  "env": {
    "browser": true,
    "jquery": true
  }
};
