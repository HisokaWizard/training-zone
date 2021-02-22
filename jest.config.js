module.exports = {
  verbose: true,
  rootDir: '.',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '**/*.tsx', '!**/*.d.ts'],
  coverageDirectory: '<rootDir>/test-results',
};