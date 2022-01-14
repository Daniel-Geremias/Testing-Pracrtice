function caesarCipher(str, shift) {
    let output = '';

    for (let i = 0; i < str.length; i++) {
        var char = str[i];

        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code -97 + shift) % 26) + 97);
            }
        }

        output += char
    }

    return output;
};

export default caesarCipher;