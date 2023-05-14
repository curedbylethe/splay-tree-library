'use strict';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src', '<rootDir>/test'],

    transform: {
        '^.+\\.tsx?$': ['ts-jest', { isolatedModules: true }],
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
