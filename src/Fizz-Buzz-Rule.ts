export interface Rule {
    isValid(number: number): boolean
    getResult(): string
}

export class FizzRule implements Rule {
    public isValid(number: number) {
        return number % 3 === 0
    }

    public getResult() {
        return 'Fizz'
    }
}

export class BuzzRule implements Rule {
    public isValid(number: number) {
        return number % 5 === 0
    }

    public getResult() {
        return 'Buzz'
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
