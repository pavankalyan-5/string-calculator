// Description: This file contains the test cases for the StringCalculator class.

import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
    let calculator: any;

    beforeEach(() => {
        calculator = new (StringCalculator as any)();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

});

