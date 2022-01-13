import reverseString from '../src/reverse-string';

test('String not reversed', () => {
    expect(reverseString('test')).toBe('tset');
})

test('Handling multiple words', () => {
    expect(reverseString('multiple word string')).toBe('gnirts drow elpitlum')
})

