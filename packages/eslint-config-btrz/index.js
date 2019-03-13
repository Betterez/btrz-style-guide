module.exports = {
  extends: [
    "./eslint-config-airbnb-base/rules/best-practices.js",
    "./eslint-config-airbnb-base/rules/errors.js",
    "./eslint-config-airbnb-base/rules/node.js",
    "./eslint-config-airbnb-base/rules/style.js",
    "./eslint-config-airbnb-base/rules/variables.js",
    "./eslint-config-airbnb-base/rules/es6.js",
    "./eslint-config-airbnb-base/rules/imports.js",
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
    "html",
    "mocha"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "node": true,
    "mocha": true,
  },
  "rules": {
    strict: 'error', // copied from airbnb-config-airbnb-base (see README)

    // OVERRIDES of airbnb-config-airbnb-base BELOW

    // ---- eslint-plugin-mocha overrides ----
    "mocha/handle-done-callback": "error",
    "mocha/no-global-tests": "error",

    // ---- best-practices.js overrides ----
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-warning-comments": "error",
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "accumulator", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "state", // for Vuex mutations
      ]
    }],

    // ---- variables.js overrides ----
    //  require or disallow initialization in var declarations
    "init-declarations": "error",
    //  disallow initializing variables to undefined
    "no-undef-init": "off",

    // ---- node.js overrides ----
    // require return statements after callbacks
    "callback-return": "error",
    // require require() calls to be placed at top-level module scope
    "global-require": "off",
    // require error handling in callbacks
    "handle-callback-err": ["error", "^(err|error)$"],
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "off",
    "no-restricted-syntax": "off",

    // ---- style.js overrides ----
     "arrow-body-style": [2, "always"],
    // require trailing commas in multiline object literals
    'comma-dangle': ["error", "never"],
    // enforce consistent naming when capturing the current execution context
    "consistent-this": ["error", "self"],
    // enforce named function expressions
    "func-names": "error",
    // enforce the consistent use of either function declarations or expressions
    "func-style": ["error", "declaration"],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": "error",
    // enforce a maximum depth that blocks can be nested
    "max-depth": "error",
    // enforce a maximum line length CHECK OPTIONS
    "max-len": ["error", {"code": 140, "tabWidth": 2, "ignoreUrls": true}],
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": "error",
    // enforce a maximum number of parameters in function definitions
    "max-params": ["error", 5],
    // enforce a maximum number of statements allowed in function blocks
    "max-statements": ["error", 30], //TODO: Talk to the team
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": "error",
    // disallow inline comments after code
    "no-inline-comments": "error",
    // disallow the unary operators ++ and --
    "no-plusplus": "off",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // require padding inside curly braces
    'object-curly-spacing': ["error", "never"],
    // enforce line breaks between braces
    'object-curly-newline': ['error', {
      ObjectExpression: {multiline: true, consistent: true},
      ObjectPattern: {multiline: true, consistent: true},
      ImportDeclaration: {multiline: true, consistent: true},
      ExportDeclaration: {multiline: true, consistent: true},
    }],
    "prefer-destructuring": "off",
    // require quotes around object literal property names
    'quote-props': ["error", "consistent"],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": ["error", "double"],
    // enforce sorted import declarations within module
    "sort-imports": "off",

    // ---- errors.js overrides ----
    "no-console": "off",

    // ---- imports.js overrides ----
    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages'],
    "import/order": "off",
    "import/newline-after-import": "off"
  }
};
