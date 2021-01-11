describe("FizzBuzz", function () {
    var fizzbuzz;
    beforeEach(function () {
        fizzbuzz = new FizzBuzz();
    })
    describe("knows when an number is", function () {
        it("divisible by 3", function () {
            expect(fizzbuzz.isDivisibleBy3(3)).toBe(true);
        });
    })

    describe("knows when an number is NOT", function () {
        it("divisible by 3", function () {
            expect(fizzbuzz.isDivisibleBy3(1)).toBe(false);
        });
    })
    describe("knows when an number is", function () {
        it("divisible by 5", function () {
            expect(fizzbuzz.isDivisibleBy5(5)).toBe(true);
        });
    })
    describe("knows when an number is NOT", function () {
        it("divisible by 5", function () {
            expect(fizzbuzz.isDivisibleBy5(1)).toBe(false);
        });
    })
    describe("knows when an number is", function () {
        it("divisible by 3 & 5", function () {
            expect(fizzbuzz.isDivisibleBy15(15)).toBe(true);
        });
    })
    describe("knows when an number is NOT", function () {
        it("divisible by 3 & 5", function () {
            expect(fizzbuzz.isDivisibleBy15(11)).toBe(false);
        });
    })
    describe("when playing, says", function () {
        it("FIZZ if divisible by 3", function () {
            expect(fizzbuzz.says(3)).toEqual("FIZZ");
        });
    })
    describe("when playing, says", function () {
        it("BUZZ if divisible by 5", function () {
            expect(fizzbuzz.says(5)).toEqual("BUZZ");
        });
    })
})