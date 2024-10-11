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

    // TODO: returning 0 for now. Will implement the logic later.
    return 0;
};

