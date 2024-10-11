export interface StringCalculator {
    add(numbers: string): number;
}

export function StringCalculator(this: StringCalculator) {}