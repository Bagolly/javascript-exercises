const caesar = (txt, shift) => 
    txt.split("")
    .map(c => encodeByte(c, shift, (c === c.toLowerCase() ? 97 : 65), 26))
    .join("");


const encodeByte = (c, shift, min, range) =>
    c.toLowerCase() === c.toUpperCase() ? c :
    String.fromCodePoint((((c.codePointAt(0) + shift - min) % range) + range) % range + min);

// Do not edit below this line
module.exports = caesar;
