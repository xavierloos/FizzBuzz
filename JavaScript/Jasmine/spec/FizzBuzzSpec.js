describe("FizzBuzz", function () {
    var fizzbuzz;
    describe("knows when an number is", function () {
        it("divisible by 3", function () {
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleBy3(3)).toBe(true);
        });
    })

    describe("knows when an number is NOT", function () {
        it("divisible by 3", function () {
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleBy3(1)).toBe(false);
        });
    })
    describe("knows when an number is", function () {
        it("divisible by 5", function () {
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleBy5(5)).toBe(true);
        });
    })
})