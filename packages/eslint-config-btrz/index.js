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
    // Mocha
    "mocha/handle-done-callback": 2,
    "mocha/no-global-tests": 2,

    // BEST PRACTICES
    "no-implicit-coercion": 2,
    "no-implicit-globals": 2,
    "no-native-reassign": 2,
    "no-warning-comments": 2,

    // VARIABLES
    //  require or disallow initialization in var declarations
    "init-declarations": 2,
    //  disallow catch clause parameters from shadowing variables in the outer scope
    "no-catch-shadow": 2,
    //  disallow initializing variables to undefined
    "no-undef-init": 0,

    // NODE
    // require return statements after callbacks
    "callback-return": 2,
    // require require() calls to be placed at top-level module scope
    "global-require": 0,
    // require error handling in callbacks
    "handle-callback-err": [2, "^(err|error)$"],
    // disallow require calls to be mixed with regular var declarations
    "no-mixed-requires": 0,
    // disallow new operators with calls to require
    "no-new-require": 2,
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": 0,

    // STYLES
    // enforce consistent naming when capturing the current execution context
    "consistent-this": [2, "self"],
    // enforce named function expressions
    "func-names": 2,
    // enforce the consistent use of either function declarations or expressions
    "func-style": [2, "declaration"],
    // disallow specified identifiers
    "id-blacklist": 2,
    // enforce consistent indentation CHECK OPTIONS
    "indent": ["error", 2],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": 2,
    // enforce consistent spacing between keys and values in object literal properties CHECK OPTIONS
    "key-spacing": 2,
    // enforce consistent spacing before and after keywords CHECK OPTIONS
    "keyword-spacing": 2,
    // enforce a maximum depth that blocks can be nested
    "max-depth": 2,
    // enforce a maximum line length CHECK OPTIONS
    "max-len": [2, {"code": 140, "tabWidth": 2, "ignoreUrls": true}],
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": 2,
    // enforce a maximum number of parameters in function definitions
    "max-params": [2, 5],
    // enforce a maximum number of statements allowed in function blocks
    "max-statements": [2, 30],
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": 2,
    // disallow inline comments after code
    "no-inline-comments": 2,
    // disallow the unary operators ++ and --
    "no-plusplus": 0,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 0,
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": 0,
    // require quotes around object literal property names
    "quote-props": 0,
    // enforce the consistent use of either backticks, double, or single quotes CHECK OPTIONS
    "quotes": [2, "double"],

    // enforce sorted import declarations within module
    "sort-imports": 0,

    // ES6
    // disallow specified modules when loaded by import
    "no-restricted-imports": 2,
    // require Reflect methods where applicable
    "prefer-reflect": 2,

    "no-console": 0,
  }
};