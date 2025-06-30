const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = x => x.reduce(function(previous, current) {
		return previous + current;
	}, 0);

const multiply = (x, y) => x.reduce((previous, current) => previous * current, 1);

const power = (x, y) => x ** y;

const factorial = x => {
	let factor = 1;

	for (index = 1; index <= x; index++) {
		factor *= index;
	}

	return factor;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
