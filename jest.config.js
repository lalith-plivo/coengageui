module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  moduleNameMapper: {
    '@coengageui/core/src/styles.api': '<rootDir>/src/coengageui-core/src/styles.api',
    '@coengageui/(.*)': '<rootDir>/src/coengageui-$1/src',
  },
};
