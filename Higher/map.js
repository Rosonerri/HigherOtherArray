/*map
reduce
forEach
sort
some
every
findIndex
*/
//Map Calls a defined callback function on each element of an array, and returns an array that contains the results. Or it iterate through an
//element of an array, and return an array that 
let arrOfNum = [1, 2, 3, 4, 5]
let results = arrOfNum.map((el)=>{
    return el * 2
})

console.log(results)

//Comparing Filter & Map
//filter Returns the elements of an array that meet the condition specified in a callback function.
let arr = [100, 150, 200, 250, 300, 400];
let filtered = arr.filter((el) => {
    return el >= 250;
});
console.log(filtered);
// Map
let mapped = arr.map((el) => {
    return el>= 250
})
console.log(mapped)

let set08 = [
    {name: "Joan", gender:"Female"},
    {name: "Stanley", gender:"male"},
    {name: "Daniel", gender:"Male"},
    {name: "Franklin", gender:"Male"},
    {name: "jessia", gender:"Female"},
    {name: "Jemima", gender:"Female"},
]
let getMap = set08.map((el) =>{
    return el.gender === "Female";
})
console.log(getMap)

//Reduce is an iterating method that gives you the accumulated result after all calculation has been done and takes in two method the Accumulator and the current value
let reduced = [1, 2, 3, 4, 5, 6]
let reduceMethod = reduced.reduce((acc, cur) =>{
    return acc * cur;
}, 5)
console.log(reduceMethod);

//Sort 
let sorting = [2, 3, 7, 1, 4, 5, 6, 9, 0, 3]
let mySorting = sorting.sort((a,b) =>{
    return a - b;
});
console.log(mySorting)


let num = [2 , 3 , 4]
let myNum = num.reduce((a, b) =>{
    return a+b 
})
// console.log(myNum)

let average = num.reduce((a, b) =>{
    console.log(a)
    console.log(b)
    return ( a + b) / 3
});
console.log(average); 












9