# Yale SWE JavaScript Module Jest Example

## Relevant Stack

- Node.js (runtime)
- Express (server framework)
- Jest (test framework)

## Overview

Some groups have been having trouble getting tests that use code with JavaScript ES6 syntax (ex. `import` instead of `require`) working. Ideally we recommend that groups use TypeScript and `ts-jest` to run tests, but if you are already too deep into JavaScript you may find this useful.

## Overview of the Problem

In JavaScript projects that use ES6 syntax (ie. if your `package.json` has `type: "module"`), testing libraries may freak out because test files aren't interpreted as modules. In other words, while your `src` code is happy with `import`, your tests will not be since they aren't interpreted as modules.

## Solution

To solve this problem, we need to run Jest using node with ECMAScript Modules enabled (ie. the flag `--experimental-vm-modules`). Note that this support is still considered experimental by Node as of version `14.13.1`. This is why we recommend you either do not use ES6 syntax in your projects, or you use TypeScript instead (preferred). You can read more about this [here](https://jestjs.io/docs/ecmascript-modules).

## Demo

This repo contains an example hello world server. You can run it locally like so:

```bash
# install packages
yarn

# run server
yarn dev
```

To run the tests (which use ES6 syntax), you can run the following command:

```bash
# run tests with ES6 syntax
yarn test
```

Note that the command above is an alias for the following (see `"scripts"` in `package.json`)

```bash
# run Jest tests with experimental vm module support
node --experimental-vm-modules node_modules/jest/bin/jest.js
```
