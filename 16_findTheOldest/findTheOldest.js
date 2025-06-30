const findTheOldest = function(people) {
	let currentYear = new Date().getFullYear()

	let sortedByAge = people.sort(function(currentUser, lastUser) {
		let currentAge = (currentUser.yearOfDeath || currentYear) - currentUser.yearOfBirth
		let lastAge = (lastUser.yearOfDeath || currentYear) - lastUser.yearOfBirth

		return lastAge - currentAge;
	});

	let oldest = sortedByAge[0];

	return oldest;
};


const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
]

// Do not edit below this line
module.exports = findTheOldest;
