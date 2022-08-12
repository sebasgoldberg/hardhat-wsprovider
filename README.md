# hardhat-wsprovider

This plug-in it is used to add getProvider function that supports web socket providers.

[Hardhat](https://hardhat.org) web socket provider plugin. 

## What

This plugin will help you with:
- If you want to use web socket providers.

## Installation

```bash
npm install @sebasgoldberg/hardhat-wsprovider
```

Import the plugin in your `hardhat.config.js`:

```js
require("@sebasgoldberg/hardhat-wsprovider");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@sebasgoldberg/hardhat-wsprovider";
```

## Environment extensions

This plugin extends the Hardhat Runtime Environment by adding an `getProvider` function.

Here is an example to get the configured provider in hardhat network config (supports web sockets!).

``` typescript
// ...
const p: JsonRpcProvider = this.hre.getProvider()
// ...
```

In case it is used a network configured without web socket protocol, `getProvider()` returns `hre.ethers.provider`, so it is safe to use always `getProvider()`.
