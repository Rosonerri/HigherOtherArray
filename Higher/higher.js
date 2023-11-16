// 1: Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').
// 2:Given an array of cost of different products, create a new array that stores the values if the cost is less than 350
// 3: Given an array of integers, create a new array in which the double of each integer in the first array is stored, and log it to the console.
// 4: Given an array of objects with the city name and population, create an array with objects from the first array if the population of that particular city is >= 5000
// S: Given an array of numbers, find the sum of every element in the array, adding 8 to the array, and log the result to the consale
// const givenArrayl = [1, 2, 3, 4, 5, 6];
// 6 : Given two arrays of numbers, test whether each of the arrays have at least one number that is > 5, and log the result to the console.
// const given^rrayl = [1, 2, 3
// const givenArray2 • [1,
// Given two arrays of numbers, test whether every of the arrays have at every number that is > S, and log the result to the console.
// const givenArray1 - 1, 2,
// 3, 4, 5, 6];
// const givenArray2 - [1, 2,
// 8 : given an array of numbers return the first element with el was 3
// const givenArray1 = (1, 2, 3, 4, 5, 6);


let arrInt = [2, 4, 6, 3, 8, 1]
let doubleArr = arrInt.map((el) => {
    return el * 2
})
console.log(doubleArr)

//Array of Population

let city = [
    {
        cityName : "Lagos",
        population : 6000
    },
    {
        cityName : "Abuja",
        population : 2000
    },
    
    {
        cityName : "Benin",
        population : 7000
    },

    {
        cityName : "Kwara",
        population : 1000
    },
    {
        cityName : "Imo",
        population : 6000
    },
]
// Filter Method iterate through an element of an array and returns new array that matches the set condition
let getArr = city.filter((el) =>{
    return el.population >= 5000
})
console.log(getArr)

// 

let sumNum = [1, 2, 3, 4, 5, 6]
let reduceNum = sumNum.reduce((acc, cur) =>{
    return acc + cur;
}, 8)
console.log(reduceNum);

//
const givenArray1 = [1, 2, 3, 4, 5, 6];
const givenArray2 = [1, 2, 3];
let testArr = givenArray1.some((el) => {
    return el  > 5
})
console.log(testArr)

let testArr2 = givenArray2.some((el) => {
    return el > 5
})
console.log(testArr2)

let testArr3 = givenArray1.every((el) => {
    return el  > 5
})
console.log(testArr3)

let testArr4 = givenArray2.every((el) => {
    return el  > 5
})
console.log(testArr4)

let arrElement = givenArray1.find((el) =>{
    return el === 3
})
console.log(arrElement)
