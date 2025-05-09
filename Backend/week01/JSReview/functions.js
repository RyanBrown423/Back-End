const returnEmptyString = function () {
    return ""
};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnString = function (str) {

    console.log("pokemon", str)
    return str

};
console.log(returnString("Ryan brown"))
const addition = function (a, b) {
    return a + b
};

const subtraction = function () { };

const multiplication = function () { };

const division = function () { };

const returnArray = function (arr) {
    return arr
};

const returnFirstIndex = function (arr) {
    return arr[0]
};

const returnSecondIndex = function (arr) {
    return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};

const arraySum = function (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        // result += arr[i]
        result = result + arr[i]

    }
    return arr.reduce((a,b)=>a+b)
    // return result
};

const arraySubtraction = function () { };

const multiplicationArray = function () { };

const divisionArray = function () { };

const oddArray = function () { };

const evenArray = function () { };

module.exports = {
    returnEmptyString,
    returnZeroNumber,
    returnEmptyArray,
    returnEmptyObject,
    returnString,
    addition,
    subtraction,
    multiplication,
    division,
    returnArray,
    returnFirstIndex,
    returnSecondIndex,
    returnArrayLength,
    arraySum,
    arraySubtraction,
    multiplicationArray,
    divisionArray,
    oddArray,
    evenArray
}
