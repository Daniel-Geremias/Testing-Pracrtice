import analyzeArray from '../src/analyze-array';

test('Handling average', () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test('Handling min', () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

test('Handling max', () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test('Handling length', () => {
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
});