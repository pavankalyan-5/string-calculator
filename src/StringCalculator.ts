import { isEmptyString, splitAndConvertToInt, sum } from './utils/helpers';
export interface StringCalculator {
    add(numbers: string): number;
}

export function StringCalculator(this: StringCalculator) {}

StringCalculator.prototype.add = function(numbers: string): number {

    // 4. Support different delimiters such as , or \n
    let delimiter: RegExp = /,|\n/;

    //  5. Support different delimiters 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }
    
    // 1. If the input is empty, return 0
    if(isEmptyString(numbers)) {
        return 0;
    }

    // 2. If the input containing only one number, return the number itself.
    const numbersList = splitAndConvertToInt(numbers, delimiter);
    

    // 6. to handle negative numbers
    const negatives: number[] = numbersList.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    if(numbersList.length === 1) {
        return numbersList[0];
    }

    // 3. If the input contains multiple numbers, return the sum of all the numbers.
    return sum(numbersList);
};

