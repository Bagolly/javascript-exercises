const repeatString = function (string, num) {
    if (num < 0)
        return 'ERROR';
    
        let retStr = "";
    
    for (let i = 0; i < num; i++) {
        retStr += string;
    }

    return retStr;
};

// Do not edit below this line
module.exports = repeatString;
