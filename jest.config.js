module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
    './msw.setup.ts',
  ],
  transformIgnorePatterns: ['node_modules/(?!react-native|@react-native)/'],
};
