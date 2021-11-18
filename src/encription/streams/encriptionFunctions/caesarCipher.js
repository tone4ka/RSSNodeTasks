function caesarCipher(str, direction) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const cipherLetters = 'BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza';
    return str.split('').map((letter) => {
        const index = direction === 1 ? letters.indexOf(letter) : cipherLetters.indexOf(letter);
        if(index > -1) {
            return direction === 1 ?  cipherLetters[index] : letters[index];
        } else {
            return letter;
        }
    }).join('');
};

module.exports = caesarCipher;
