describe("FizzBuzz", function () {
    var fizzbuzz;
    beforeEach(function () {
        fizzbuzz = new FizzBuzz();
    })
    // TRUTHY
    describe("knows when an number is", function () {
        it("divisible by 3", function () {
            expect(fizzbuzz.isDivisibleBy3(3)).toBe(true);
        });
        it("divisible by 5", function () {
            expect(fizzbuzz.isDivisibleBy5(5)).toBe(true);
        });
        it("divisible by 3 & 5", function () {
            expect(fizzbuzz.isDivisibleBy15(15)).toBe(true);
        });
    })
    // FALSY
    describe("knows when an number is NOT", function () {
        it("divisible by 3", function () {
            expect(fizzbuzz.isDivisibleBy3(1)).toBe(false);
        });
        it("divisible by 5", function () {
            expect(fizzbuzz.isDivisibleBy5(1)).toBe(false);
        });
        it("divisible by 3 & 5", function () {
            expect(fizzbuzz.isDivisibleBy15(11)).toBe(false);
        });
    })
    // FIZZBUZZ
    describe("when playing, says", function () {
        it("FIZZ if divisible by 3", function () {
            expect(fizzbuzz.says(3)).toEqual("FIZZ");
        });
        it("BUZZ if divisible by 5", function () {
            expect(fizzbuzz.says(5)).toEqual("BUZZ");
        });
        it("FIZZBUZZ if divisible by 15", function () {
            expect(fizzbuzz.says(15)).toEqual("FIZZBUZZ");
        });
        it("number unless divisible by 3,5 or 15", function () {
            expect(fizzbuzz.says(11)).toEqual(11);
        });
    })
})