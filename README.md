# Publish NPM packages

Package naming convention: `@yourUsername/pkgName`

The first time publish a package:
```
npm login
npm publish --access public
```

Publish updated packages:

```
yarn // install again
yarn build
npm update @y0unghe/core-sdk
npm publish
```