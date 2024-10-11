// below are some common functions that can be used across the application

// function to check if the input is empty
export function isEmptyString(input: string): boolean {
    return input.trim() === '';
}

// function to split the input string and convert the numbers to integers
export function splitAndConvertToInt(input: string, delimiter: string): number[] {
    return input.split(delimiter).map(numStr => parseInt(numStr, 10));
}

// function to sum the numbers in the list
export function sum(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0)
}