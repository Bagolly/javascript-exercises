const convertToCelsius = function (degFahrenheit) 
{
    return Math.round((degFahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (degCelsius) 
{
    return Math.round((degCelsius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = 
{
  convertToCelsius,
  convertToFahrenheit
};
