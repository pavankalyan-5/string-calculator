import { isEmptyString, splitAndConvertToInt, sum } from './utils/helpers';
export interface StringCalculator {
    add(numbers: string): number;
}

export function StringCalculator(this: StringCalculator) {}

StringCalculator.prototype.add = function(numbers: string): number {

    // 4. Support different delimiters such as , or \n
    let delimiter: RegExp = /,|\n/;
    
    // 1. If the input is empty, return 0
    if(isEmptyString(numbers)) {
        return 0;
    }

    // 2. If the input containing only one number, return the number itself.
    const numbersList = splitAndConvertToInt(numbers, delimiter);
    if(numbersList.length === 1) {
        return numbersList[0];
    }

    // 3. If the input contains multiple numbers, return the sum of all the numbers.
    return sum(numbersList);
};

