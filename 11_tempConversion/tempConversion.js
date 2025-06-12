const roundNumber = function (number) {
	return Math.round(number * 10) / 10
}

const convertToCelsius = function(fahrenheit) {
	const converted = (fahrenheit - 32) * 5/9

	return Number.isInteger(converted) ? converted : roundNumber(converted);
};

const convertToFahrenheit = function(celsius) {
	const converted = (celsius * 9/5) + 32

	return Number.isInteger(converted) ? converted : roundNumber(converted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
