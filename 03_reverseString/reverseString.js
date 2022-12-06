const reverseString = function(str) {
    if(str.length < 1)
        return "";

    let strReversed = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        strReversed += str[i];
    }
    
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
