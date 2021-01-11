describe("FizzBuzz", function () {
    var fizzbuzz;
    describe("knows when an number is", function () {
        it("divisible by 3", function () {
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });
    })

    describe("knows when an number is NOT", function () {
        it("divisible by 3", function () {
            fizzbuzz = new FizzBuzz();
            expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
        });
    })
})