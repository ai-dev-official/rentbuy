// module.exports = {
//   preset: 'react-native',
//   transform: {
//     '^.+\\.[t|j]sx?$': 'babel-jest',
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|my-project|react-native-vector-icons)/)',
//   ],
//   moduleNameMapper: {
//     '\\.(css|less)$': 'identity-obj-proxy',
//   },
// };


// jest.config.js
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|@react-native|@react-native-community|@react-navigation|@react-native-paper)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
