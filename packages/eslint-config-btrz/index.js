module.exports = {
  extends: ["airbnb-base", "plugin:vue/essential"],
  // required to lint *.vue files
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
    "global-require": "off",  //TODO: Why is this off? Talk to Hernan.
    // require error handling in callbacks
    "handle-callback-err": ["error", "^(err|error)$"],
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "off",  //TODO: Why is this off? Talk to Hernan.

    // ---- style.js overrides ----
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
    "max-statements": ["error", 30], //TODO. Seems too much. Talk with Hernan.
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": "error",
    // disallow inline comments after code
    "no-inline-comments": "error",  //TODO. I like inline comments :( Talk with Hernan.
    // disallow the unary operators ++ and --
    "no-plusplus": "off",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "off",  //TODO. Why is this off? Talk with Hernan.
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",  //TODO. Why is this off? Talk with Hernan.
    // require padding inside curly braces
    'object-curly-spacing': ["error", "never"],
    // enforce line breaks between braces
    'object-curly-newline': ['error', {
      ObjectExpression: {multiline: true, consistent: true},
      ObjectPattern: {multiline: true, consistent: true},
      ImportDeclaration: {multiline: true, consistent: true},
      ExportDeclaration: {multiline: true, consistent: true},
    }],
    // require quotes around object literal property names
    "quote-props": "off",  //TODO. Airbnb "as needed" seems better I think. Talk with Hernan.
    // enforce the consistent use of either backticks, double, or single quotes CHECK OPTIONS
    "quotes": ["error", "double"],
    // enforce sorted import declarations within module
    "sort-imports": "off",

    // ---- es6.js overrides ----
    // require Reflect methods where applicable
    "prefer-reflect": "error", //TODO: Deprecated. Talk to Hernan.

    // ---- errors.js overrides ----
    "no-console": "off",

    // ---- imports.js overrides ----
    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages'],
  }
};