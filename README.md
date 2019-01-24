
Update: See branch [simple_fix](https://github.com/utoppo/vue-cli-plugin-electron-builder-build-problem/tree/simple_fix) for a solution
___

# Electron build problem

When setting up a vue-cli-plugin-electron-builder-project with 2 windows, the build process does not seem to work.

- OS and version: OSX 10.12.6
- node version: v11.0.0
- npm version: 6.4.1
- yarn version : 1.9.4
- vue-cli-plugin-electron-builder version : 1.0.0-rc.10
- electron version: 4.0.0

## How to reproduce

```
yarn electron:build
```

Process fails with the message:

```
Building modern bundle for production...(node:66850) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open '/Users/.../vue-cli-plugin-electron-builder-buildfail/dist_electron/bundled/legacy-assets-index.html.json'
(node:66850) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:66850) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

The build process works fine, when using the ```--legacy``` parameter

```
yarn electron:build --legacy
```
