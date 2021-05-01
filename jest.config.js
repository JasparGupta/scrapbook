const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig.json');
const {loadEnvConfig} = require('@next/env');

loadEnvConfig(process.cwd());

module.exports = {
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    preset: 'ts-jest',
};
