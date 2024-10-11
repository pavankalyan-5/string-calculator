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

    test('should return 0 for an spaced string', () => {
        expect(calculator.add("   ")).toBe(0);
    });
    
    test('should return the number itself when a single number is provided', () => {
        expect(calculator.add("1")).toBe(1);
    });
});

