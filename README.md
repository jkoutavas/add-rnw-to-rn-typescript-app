# add-rnw-to-rn-typescript-app
Following along with the article "How to add React Native Web to an existing React Native project"


Initial commit:

```sh
npx react-native init MyApp --template react-native-template-typescript
```

Add React Native Web package dependencies:

```sh
yarn add react-native-web

yarn add -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack
```