import caesarCipher from '../src/caesar-cipher';

test('Handling single word', () => {
    expect(caesarCipher('test', 1)).toBe('uftu');
});

test('Handling punctuation', () => {
    expect(caesarCipher('a.dot', 1)).toBe('b.epu');
});

test('Handling numbers', () => {
    expect(caesarCipher('a2number', 1)).toBe('b2ovncfs');
});

test('Handling loop', () => {
    expect(caesarCipher('zamn', 2)).toBe('bcop');
});

test('Handling upper case', () => {
    expect(caesarCipher('TEST', 3)).toBe('WHVW');
});

test('Handling mixed case', () => {
    expect(caesarCipher('TeSt', 3)).toBe('WhVw');
});
