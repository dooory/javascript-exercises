const removeFromArray = function(array, ...params) {
    let newArray = array.filter((value) => (
            !params.includes(value)
        )
    )

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;