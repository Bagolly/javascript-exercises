const sumAll = function (numStart, numEnd) {

    if ((!Number.isInteger(numStart) || !Number.isInteger(numEnd)) || (Math.min(numStart, numEnd) < 0))
        return 'ERROR';

    let result = 0;
    let numMin = Math.min(numStart, numEnd);
    let numMax = Math.max(numStart, numEnd);

    for (; numMin <= numMax; numMin++)
        result += numMin;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
