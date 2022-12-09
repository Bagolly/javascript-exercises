const findTheOldest = function (people) {
    let today = new Date();

    let oldest = people.reduce((max, current) => {

        let maxAge = max.hasOwnProperty("yearOfDeath") ? 
            max.yearOfDeath - max.yearOfBirth : 
            today.getFullYear() - max.yearOfBirth;
        
        let currentAge = current.hasOwnProperty("yearOfDeath") ? 
            current.yearOfDeath - current.yearOfBirth : 
            today.getFullYear() - current.yearOfBirth;


        return (currentAge > maxAge) ? current : max;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
