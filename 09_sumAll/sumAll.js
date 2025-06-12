const sumAll = function(intX, intY) {
    console.log(Number.isInteger(intX))

    if (
        !Number.isInteger(intX) || 
        !Number.isInteger(intY) ||
        intX < 0 ||
         intY < 0
    ) return "ERROR";

    const difference = Math.abs(intY - intX);

    let sum = 0;
    let maxInt = (intY > intX ? intX : intY) 

    for (index = 0 + maxInt; index <= difference + maxInt; index++) {
        sum += index;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
