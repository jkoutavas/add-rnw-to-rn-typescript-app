# add-rnw-to-rn-typescript-app
Following along with the article ["How to add React Native Web to an existing React Native project"](https://arry.medium.com/how-to-add-react-native-web-to-an-existing-react-native-project-eb98c952c12f)


Initial commit:

```sh
npx react-native init MyApp --template react-native-template-typescript
```

Add React Native Web package dependencies:

```sh
yarn add react-native-web

yarn add -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack
```

Add [index.html](https://gist.github.com/arrygoo/81d95ecc55313a7d0668f6711cfc7ff9#file-index-html)

Add [index.web.js](https://gist.github.com/arrygoo/81d95ecc55313a7d0668f6711cfc7ff9#file-index-web-js)

Add [webpack.config.js](https://gist.github.com/arrygoo/81d95ecc55313a7d0668f6711cfc7ff9#file-webpack-config-js)