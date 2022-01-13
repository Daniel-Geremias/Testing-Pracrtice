import capitalize from '../src/capitalize';

test('Does not capitalize', () => {
    expect(capitalize('test string')).toBe('Test string');
});