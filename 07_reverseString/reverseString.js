const reverseString = function(string) {
	const stringArray = string.split("");	
	let reversedString = "";

	for (let index = stringArray.length - 1; index >= 0; index--) {	
		const value = stringArray[index];

		reversedString += value;
	}

	return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
