class FizzBuzz {
    isDivisibleBy3(number) {
        return this._isDivisibleBy(number, 3)
    }
    isDivisibleBy5(number) {
        return this._isDivisibleBy(number, 5)
    }
    isDivisibleBy15(number) {
        return this._isDivisibleBy(number, 15)
    }
    says(number) {
        if (this.isDivisibleBy15(number)) {
            return "FIZZBUZZ"
        } else if (this.isDivisibleBy3(number)) {
            return "FIZZ"
        } else if (this.isDivisibleBy5(number)) {
            return "BUZZ"
        } else {
            return number
        }
    }
    //PRIVATE
    _isDivisibleBy(number, divisor) {
        return (number % divisor === 0);
    }
}