const {FlatCompat} = require("@eslint/eslintrc");
const btrzBase = require("eslint-config-btrz-base");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = {
  configs: {
    all: [
      btrzBase.configs.all,
      ...compat.config({
        extends: [
          "plugin:vue/essential"
        ],
        parserOptions: { // copied from airbnb-config-airbnb-base (see README)
          ecmaVersion: 2018,
          sourceType: "module",
        },
        settings: {
          "import/resolver": {
            nuxt: {
              extensions: [".vue"]
            }
          },
        },
        plugins: [
          "html"
        ],
        env: {
          browser: true,
          jquery: true
        }
      })
    ]
  }
};
