'use strict';

const testPackage1 = require('./test-package-1');

describe('testPackage1', () => {
    test('works', () => {
        const result = testPackage1();

        expect(result).toMatchSnapshot();
    });
});
