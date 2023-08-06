module.exports = {
  env: {
    production: {
      plugins: ["babel-plugin-transform-remove-console", 'react-native-paper/babel'],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@constants': './src/constants',
          "@theme": "./src/theme",
          "@tstypes": "./src/types",
          "@hooks": "./src/hooks"
        },
      },
    ],
    [
      'react-native-reanimated/plugin', {
        relativeSourceLocation: true,
      },
    ],
  ],
};
