// 1, 1, 2, 3, 5, 8
const fibonacci = function(numberIndex) {
	if (numberIndex < 0) {
		return "OOPS";
	}

	let sequence = [];

	for (index = 0; index <= numberIndex; index++) {
		if (sequence.length === 0) {
			sequence.push(0);
		} else if (sequence.length === 1) {
			sequence.push(1);
		} else {
			console.log(index);
			sequence.push(sequence[index - 1] + sequence[index - 2]);
		};
	};	

	return sequence[numberIndex];
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
