class FizzBuzz {
    isDivisibleBy3(number) {
        return (number % 3 === 0)
    }
    isDivisibleBy5(number) {
        return (number % 5 === 0)
    }
    isDivisibleBy15(number) {
        return (number % 15 === 0)
    }
    says(number) {
        if (number % 3 === 0) {
            return "FIZZ"
        } else if (number % 5 === 0) {
            return "BUZZ"
        }
    }
}