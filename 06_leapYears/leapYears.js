const leapYears = function (year) {

    if((year % 4 === 0) && (year % 100 !== 0))
        return true;
    
    return (year % 400 === 0) ? true : false;
    
};

// Do not edit below this line
module.exports = leapYears;
