export default class FizzBuzz {
    static ARRAY_SIZE = 100

    static parse(number: number) {
        if (this.divisibleByFifteen(number)) {
            return 'FizzBuzz'
        }
        if (number % 3 === 0) {
            return 'Fizz'
        }
        if (number % 5 === 0) {
            return 'Buzz'
        }
        return number.toString()
    }

    private static divisibleByFifteen(number: number) {
        return number % 15 === 0
    }

    static printNumbers(arraySize = FizzBuzz.ARRAY_SIZE) {
        let result = ''
        for (let i = 1; i <= arraySize; i++) {
            result += FizzBuzz.parse(i) + '\n'
        }
        return result
    }
}
