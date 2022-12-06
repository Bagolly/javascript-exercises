const palindromes = function (str) {       
    let wordsRev = [];

    for(let i = str.length - 1; i >= 0; i--){
        if(str[i].toLowerCase() != str[i].toUpperCase()){
            wordsRev.push(str[i].toLowerCase());
        }
    }

    let words = [...wordsRev].reverse();

    for(let i = 0; i < words.length; i++){
        if(words[i] !== wordsRev[i])
            return false;
    } 

    return true;
};

// Do not edit below this line
module.exports = palindromes;
