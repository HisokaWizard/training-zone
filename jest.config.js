module.exports = {
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
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/app/components/$1",
    '^@game/(.*)$': '<rootDir>/src/app/components/colonialists/$1',
    '^@gameModels/(.*)$': '<rootDir>/src/app/components/colonialists/models/$1',
    '^@gameStore/(.*)$': '<rootDir>/src/app/components/colonialists/store/$1',
  },
};