# Publish NPM packages

## 需要替换的地址有

1. INIT_CODE_HASH
`src/constants/legacy.ts`. 否则在生成LP Pair地址的地方会出错，My Positions里会是空的，不会显示已经创建的pair

2. SUSHI_ADDRESS, FACTORY_ADDRESS, ROUTER_ADDRESS, MASTERCHEF_ADDRESS, USD_ADDRESS
`src/constants/addresses.ts`

Package naming convention: `@yourUsername/pkgName`

The first time publish a package:
```
npm login
npm publish --access public
```

Publish updated packages:

```
yarn // if failed use npm
yarn build // if failed use npm run build
npm update @y0unghe/core-sdk
npm publish
```