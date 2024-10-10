// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"],
//   plugins: [
//     ["@babel/plugin-transform-runtime", {
//       regenerator: true
//     }]
//   ]
// };


// babel.config.js
// module.exports = {
//   presets: [
//     'module:metro-react-native-babel-preset', // for React Native
//     '@babel/preset-typescript', // to handle TypeScript files
//   ],
// };

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // for React Native
    '@babel/preset-typescript', // to handle TypeScript files
  ],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }], // Ensure loose mode is set
    ['@babel/plugin-transform-class-properties', { loose: true }], // Add this if you're using class properties
    ['@babel/plugin-transform-private-property-in-object', { loose: true }], // Add this if you're using private properties in objects
  ],
};

