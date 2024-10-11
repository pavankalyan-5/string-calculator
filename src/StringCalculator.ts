import { isEmptyString } from './utils/helpers';
export interface StringCalculator {
    add(numbers: string): number;
}

export function StringCalculator(this: StringCalculator) {}

StringCalculator.prototype.add = function(numbers: string): number {
    
    // 1. If the input is empty, return 0
    if(isEmptyString(numbers)) {
        return 0;
    }

    // 2. If the input containing only one number, return the number itself.
    // considering the delimiter as comma for now.
    if(numbers.split(',').length === 1) {
        return parseInt(numbers);
    }

    // TODO: returning 0 for now. Will implement the logic later.
    return 0;
};

