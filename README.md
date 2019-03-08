# Betterez Style Guide

## Javascript (ESLint)

Based on Airbnb style guide (base) eslint package.

Guide: https://github.com/airbnb/javascript

The rules were copied from version `13.0.1` of `eslint-config-airbnb-base`.

### Usage

Install `eslint-config-btrz` using npm as a dev dependency.
Please add and install the peer dependencies (shown after installing) as well!

Next, add an `.eslint` file in your project root which extends this configuration:

```
module.exports = {
  extends: ['eslint-config-btrz'],
};
```

Please do not add custom rules to your project.
Just contribute with a change, prior discussing any issues you find :)

## IDEs

### IntelliJ Webstorm config

The style config enforces IDE behaviour to be consistent with the linter.

#### Usage

Go to File -> Settings -> Editor -> Code Style. On the gear icon, select Import Scheme -> IntelliJ IDEA code style XML. 
Select the file `webstorm-code-style.xml` inside the `ide` directory.

## Contribute

Contributions are welcome, but if you are willing to override a rule, please discuss it with others first :)