import FizzBuzz from '../src/Fizz-Buzz'
import { expectedString } from './ExpectedString'

describe('FizzBuzz:', () => {
    const fizzBuzz = new FizzBuzz()

    test('For multiple of Three print Fizz', () => {
        expect(fizzBuzz.parse(3)).toEqual('Fizz')
    })

    test('For multiple of Five print Buzz', () => {
        expect(fizzBuzz.parse(5)).toEqual('Buzz')
    })

    test('For multiple of both Three and Five print FizzBuzz', () => {
        expect(fizzBuzz.parse(15)).toEqual('FizzBuzz')
    })

    test('returns correct string', () => {
        expect(fizzBuzz.printNumbers()).toBe(expectedString)
    })

    test('if number contains a Three print Fizz', () => {
        expect(fizzBuzz.parse(23)).toEqual('Fizz')
    })

    test('if number contains a Five print Buzz', () => {
        expect(fizzBuzz.parse(52)).toEqual('Buzz')
    })
})
