'use strict';

const testPackage2 = require('./test-package-2');

describe('testPackage2', () => {
    test('works', () => {
        const result = testPackage2();

        expect(result).toMatchSnapshot();
    });
});
