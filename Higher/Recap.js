//Flat: The Flat Method turns a deep array or Nested Array into a single Array
let theNumb = [1, 2, 3, 4, [8,7],[2.4]]

console.log(theNumb.flat(2).sort())

//Flat Map: The flatMap Method combines the functionality of both flat and Map. it first of all map through the element of an array then flattens it into a new Array
let flatMaping = [1, 2, 3, 4, 5, 6, 7]
let myFlat = flatMaping.map((el) => {
    return el * 2
})
    
console.log(myFlat)

//Map: Map method accepts a call back function and returns a boolean if it matches the condition set in the call back.......

let myMap = [1, 2, 3, 4, 5, 6, 7].map((el) => {
    return el * 2
})

console.log(myMap)

let string = ["Hello World"]

console.log(string.map((el) =>{
    return el.split(" ")
}))

console.log(string.flatMap((el) =>{
    return el.split(" ").join(" ").toString()
}))

//Reduce: The reduce Method is basically used for calculations it is used to reduce an array of elements into a single one

let myReduce = myMap.reduce((a,b) =>{
    return a + b
})

console.log(myReduce)

//Sort the sort method is used to arrange element of an array either alphabetically or in a specific order
let fruits  = ["Grape", "Apple", "Melon", "PawPaw"].sort()
console.log(fruits)

const pow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort((a,b) =>{
    return b- a
})
console.log(pow)
// filter the filter method checks each element of the array and return a new array that matches the set condition
let foodItems = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]
let employee = [
    {
        Name: "Maxwell",
        Age: "37",
        Salary: "10000",
        foodItems: "Yam"
    },
    {
        Name: "Peter",
        Age: "17",
        Salary: "10000",
        foodItems: "Rice"
    },
    {
        Name: "Doris",
        Age: "27",
        Salary: "102000",
        foodItems: "Beans"
    }
]
// console.log(foodItems.filter((el) => {
//     return el.includes("a")
// }))
// console.log(foodItems)
// let filtering =  foodItems.filter((el) =>{
//     return el.foodItems === "Yam"  && "Spaghetti"
// })
// console.log(filtering)

let getAge = employee.filter((el) => {
    return el.Age > 30
})
console.log(getAge)


//Slice Method is used to cut a particular part of an element of an array and then return a new array
let myfoodItems = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]
let sliceMyfood = myfoodItems.slice(2,4);
console.log(sliceMyfood)
//Splice Method add or remove an existing array element 

let myfoodItems2 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]
myfoodItems2.splice(2,2, "Ajilomoto","Pineaple")
console.log(myfoodItems2)

//Every Method is used to check if every element of an array passes a condition

let myfoodItems3 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]
console.log(myfoodItems3.every((el) => {
    return el.includes("a")
}))

//Some Method is used to check if some element of an array passes a condition

let myfoodItems4 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]

console.log(myfoodItems4.some((el) => {
    return el.includes("a")
}))

//forEach method is used to iterate over elements in an array or other iterable objects, such as strings or NodeList objects. It allows you to execute a provided function once for each element in the array.

let myfoodItems5 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]

myfoodItems5.forEach((el) => {
    console.log(el)
})

//find method is used to find an element in an array or other iterable objects, such as strings or NodeList objects. It allows you to execute a provided function once for each element in the array.

let myfoodItems6 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]

console.log(myfoodItems6.find((el) => {
    return el.includes("a")
}))

//findIndex method is used to find an element in an array or other iterable objects, such as strings or NodeList objects. It allows you to execute a provided function once for each element in the array.

let myfoodItems7 = ["Rice", "Beans", "Maggi", "Potatoes", "Yam", "Spaghetti"]

console.log(myfoodItems7.findIndex((el) => {
    return el.includes("a")
}))

