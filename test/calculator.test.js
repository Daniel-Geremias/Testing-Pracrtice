import calculator from "../src/calculator";

test('Not adding', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Not subtracting', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('Not dividing', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

test('Not multiplying', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
});