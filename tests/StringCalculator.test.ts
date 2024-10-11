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

    test('should return the sum of two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    test('should handle an unknown number of numbers', () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });
});

