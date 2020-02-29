module.exports = {
  preset: 'ts-jest',
  testRegex: '.spec.tsx?$',
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/__tests__/'],
  coverageReporters: ['html', 'text-summary', 'json'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
  clearMocks: true,
  modulePaths: ['<rootDir>'],
}
