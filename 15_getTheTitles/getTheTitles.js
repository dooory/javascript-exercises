const getTheTitles = function(books) {
	return books.reduce(function(previous, current) {
		previous.push(current.title);
		return previous;
	}, [])
};

// Do not edit below this line
module.exports = getTheTitles;
