import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
export default config
