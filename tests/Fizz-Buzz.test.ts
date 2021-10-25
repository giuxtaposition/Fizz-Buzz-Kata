import FizzBuzz from '../src/Fizz-Buzz'
describe('FizzBuzz:', () => {
    test('For multiple of Three print Fizz', () => {
        expect(FizzBuzz.parse(3)).toEqual('Fizz')
    })

    test('For multiple of Five print Buzz', () => {
        expect(FizzBuzz.parse(5)).toEqual('Buzz')
    })

    test('For multiple of both Three and Five print FizzBuzz', () => {
        expect(FizzBuzz.parse(15)).toEqual('FizzBuzz')
    })
})
