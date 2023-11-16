//filter it iterate through all element in an array and return a new array that meets the given condition or set condition

// FILTER Method to test if an element in "testArray" is greater than 200 and also if an element is equal to beans 
let testArray = [100, 200, 300, 400, 500, 600]
let testArray2 = ["Rice", "Beans", "Indomie"]
 let foodstuff = testArray2.filter((el) => {
    return el === "Beans"
 })
 console.log(foodstuff)

 let foodstuffs = testArray2.filter((el) => el === "Beans")

let answer = testArray.filter((el) => {
   return el > 200
})
console.log(answer)

let answer2 = testArray.filter((el) => el > 200)
console.log(answer2)



// map: 
// reduce
// forEach
// sort
// some
// every
// find
// findIndex
// flatMap
// copyWithin
// entries
// keys
// values




// let sheCodes = [

//    {Name: "Esther", Complectons:"dark"},
//    {Name: "Joan", Complectons:"Fair"},
//    {Name: "Jemima", Complectons:"dark"},
//    {Name: "Favour", Complectons:"dark"}
// ]
// let get mySheCodes = sheCodes.filter((get) =>{
//    return get.Complectons === dark
// })
/*Given an array of objects with city name and population,
 create an array with object from the first array if the population is >=2000*/

 let nameOfCities = [
    {cityName: "Lagos",
    population: 3000
    },

    {
    cityName: "Ibadan",
    population: 2000
    },

    {
    cityName: "Abia",
    population: 4000
    },

    {
    cityName: "Kogi",
    population: 6000
    },

    {
    cityName: "Onicha",
    population: 10000
    }
 ]

 let getCityArr = nameOfCities.filter((el) => {
    return el.population >= 4000
 })
 console.log(getCityArr)


 /*Given an array of object
 print out object that is javaScript
 */

 let Instructors = [
    {
        instructorName: "Fellow Esther",
        Subject: "JavaScript"
    },

    {
        instructorName: "Fellow Silvia",
        Subject: "HTML/CSS"
    },

    {
        instructorName: "Fellow Godwin",
        Subject: "UI/UX"
    },

    {
        instructorName: "Fellow Jaji",
        Subject: "ElecElect"
    },

    {
        instructorName: "Fellow Favour",
        Subject: "Design Thinkink"
    },

 ]

 let javaScript = Instructors.filter((el) =>{
    return el.Subject === "JavaScript"
 })
 console.log(javaScript);

 console.log(Instructors);

 let Subject = Instructors.filter((el) => {
    return el.Subject 
 })
 console.log(Subject);

 //forEach
 let testArr = [1, 2, 3, 4, 5, 6]
 let mappedArr = testArr.map((el) =>{
   return el
 })
 console.log(mappedArr)
 let eachArr = testArr.forEach((el) => console.log(el))

 //Some  Check if at least one element in an array passes the condition that has been set in the call back function
let someArr = testArr.some((el) =>{
   return el >= 7
})
console.log(someArr)

//Every
let everyArr = testArr.every((el) =>{
   return el <= 7
})
console.log(everyArr);

 //Given an array of singular nouns create a new array that stores the the plural Noun of each of the element in the first array and log it to the console assuming the singular nouns can be made plural by just adding (s)
 // Given an array of cost of different products create a new array that stores the value if the cost is less than 350


 
 let singleNoun = ["house", "boy", "Girl", "Time", "Home"]
 let pushNoun = singleNoun.map((el) => {
   return el.concat("s")
 })
 console.log(pushNoun)

 let products = ["200","300","350", "400", "500"]
 let filterArr = products.filter((el) => {
   return el < 350
 })
 console.log(filterArr)

 //Find returns the first element in an array that matches the
 

