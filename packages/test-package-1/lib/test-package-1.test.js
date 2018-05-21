'use strict';

const testPackage1 = require('./test-package-1');
const testPackage2 = require('test-package-2');

describe('testPackage1', () => {
    test('works', () => {
        const result = {
            testPackage1: testPackage1(),
            testPackage2: testPackage2(),
        }

        expect(result).toMatchSnapshot();
    });
});
