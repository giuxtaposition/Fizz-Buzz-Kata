export interface Rule {
    isValid(number: number): boolean
    getResult(): string
}

export class FizzRule implements Rule {
    public isValid(number: number) {
        return this.isDivisibleByThree(number) || this.containsThree(number)
    }

    public getResult() {
        return 'Fizz'
    }

    private isDivisibleByThree(number: number) {
        return number % 3 === 0
    }

    private containsThree(number: number): boolean {
        return number.toString().includes('3')
    }
}
export class BuzzRule implements Rule {
    public isValid(number: number) {
        return this.divisibleByFive(number) || this.containsFive(number)
    }

    public getResult() {
        return 'Buzz'
    }

    private containsFive(number: number): boolean {
        return number.toString().includes('5')
    }

    private divisibleByFive(number: number) {
        return number % 5 === 0
    }
}

export class FizzBuzzRule implements Rule {
    public isValid(number: number) {
        return number % 15 === 0
    }

    public getResult() {
        return 'FizzBuzz'
    }
}
