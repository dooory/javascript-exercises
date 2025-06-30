const palindromes = function (string) {
	// Removes special characters and lower cases upper cased letter
	let cleanString = string
		.split("")
		.reduce((previous, current) => {
			if (current.match(/[A-z]|[1-9]/)) {
				return previous + current.toLowerCase();
			}

			return previous;
		}, "");

	let reversedString = cleanString.split("").reverse().join("");

	return reversedString == cleanString;
};

// Do not edit below this line
module.exports = palindromes;
