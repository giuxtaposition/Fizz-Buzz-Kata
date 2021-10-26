import { BuzzRule, FizzBuzzRule, FizzRule, Rule } from './Fizz-Buzz-Rule'

export default class FizzBuzz {
    private ARRAY_SIZE = 100
    private rules: Rule[]

    constructor() {
        this.rules = [new FizzBuzzRule(), new FizzRule(), new BuzzRule()]
    }

    public parse(number: number): string {
        for (const rule of this.rules) {
            if (rule.isValid(number)) {
                return rule.getResult()
            }
        }
        return number.toString()
    }

    public printNumbers(arraySize = this.ARRAY_SIZE) {
        let result = ''
        for (let i = 1; i <= arraySize; i++) {
            result += this.parse(i) + '\n'
        }
        return result
    }
}
