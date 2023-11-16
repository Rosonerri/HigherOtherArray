//filter it iterate through all element in an array and return a new array that meets the given condition or set condition


//Question: FILTER Method to test if an element in "testArray" is greater than 200 and also if an element is equal to beans 
let testArray = [100, 200, 300, 400, 500, 600]
let testArray2 = ["Rice", "Beans", "Indomie"]

    let mygreater = testArray.filter((el) => {
         return el <= 200   
    })
// console.log(mygreater)
console.log(mygreater)


//Given an array object of schools 

let schools = [
    {
        schName: "CodeLab",
        course: "FullStack"
    },
    {
        schName: "W3Schools",
        course: "Devops"
    },
    {
        schName: "Germycode",
        course: "FrontEnd"
    },
    {
        schName: "Academy",
        course: "Backend"
    },
    {
        schName: "DataPoint",
        course: "Database"
    },
]

let getSchool = schools.filter((el) =>{
    return el.schName === "Academy"  &&  el.course === "Database"
})
console.log(getSchool)



// Map method accepts a call back function that check if each element in the array meets the set condition if yes it returns
// True or False

//Question: Check if number greater than 300
testArray = [100, 200, 300, 400, 500, 600]
let checkTest = testArray.map((el) => {
    return el > 300
})
console.log(checkTest)

//Reduce Method: It is used to reduce an array of Values or elements to a single 
//value or element once a call back functions is set it accepts two arguement, the Accumulator and the current Value
//Question: Calculate

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let reducing = arrNumbers.reduce((acc, curr) => {
    return acc + curr
}, 10)
console.log(reducing)


//ForEach method iterates over each element in an array and applies a provided call back function to each element.

//Question Given an array object of an hotel staffs

let hotelStaff = [
    {
        staffName: "Michael",
        Salary: 200000,
        Currency: "Naira"

    },
    {
        staffName: "Gabriel",
        Salary: 2000,
        Currency: "USD"

    },
    {
        staffName: "Chika",
        Salary: 2000,
        Currency: "Pounds"

    },
    {
        staffName: "Chinwe",
        Salary: 2000000,
        Currency: "Kuwait Dina"

    }
]
let myStaff = hotelStaff.forEach((el) =>{
    if (el.Salary === 2000){
   console.log(`I am ${el.staffName} and my Salary is ${el.Salary} and I'm being paid in ${el.Currency}`)
    }else{
        console.log("No Match Found")
    }
})

// const numbers = [1, 2, 3, 4, 5];
const number2 = [1, 2, 3, 4, 5];

// numbers.forEach(item => {
//   const squared = item * item;
//   console.log(`${item} squared is ${squared}`);
// });

let myNumbers = number2.forEach((el) =>{
    let theNumber = el * el 
  console.log(`${el} squared is ${theNumber}`);

})
// sort sorts each elements of an array and return the sorted array
let arrElement = [1, 4, 5, 6, 7, 3, 2, 5]
let sorting = arrElement.sort()
console.log(sorting)


// some Check if at least one element in an array passes the condition that has been set in the call back function
//the return type is Boolean
let some = arrElement.some((el) => {
    return el >=5
})
console.log(some)

//Every return all the elements in the arrray that matches the condition set in the call back function
let every = arrElement.every((el) => {
    return el >=5
})
console.log(every)

//Find the find method return the First element that matches the condition set in the call back function

arrElement = [1, 4, 5, 6, 7, 3, 2, 5]
let findArr = arrElement.find((el) =>{
   return el > 5
})
console.log(findArr)

//findIndex it returns the position that matches the condition set in the call back function
let findArr1 = arrElement.findIndex((el) =>{
    return el > 5
 })
 console.log(findArr1)

 //flat map is a combination of two array methods, it maps each element of an array using the mapping function and then flattens it
 // into a new array
 const numbers = [1, 2, 3, 4, 5];

const mappedAndFiltered = numbers.flatMap(number => {
  if (number % 2 === 0) {
    return [number * 2];
  } else {
    return [];
  }
});

console.log(mappedAndFiltered); // Outputs: [2, 4, 4, 8]


let nestedArray = [[1, 2], [3, 4], [5, 6]];

let myNested = nestedArray.flatMap((el) =>{
    return el
})
console.log(myNested)


//CopyWithin The copy within does not return a new array but instead moddify the array according to the condition set in the call 
// back function
//The copyWithin array method in JavaScript is used to copy a sequence of elements within the same array.
// It takes three arguments: the target index where the copied sequence will be placed, 
//the start index of the sequence to be copied, and the end index (exclusive) of the sequence to be copied.

const number = [1, 2, 3, 4, 5];

number.copyWithin(2, 0, 3);
console.log(number); 



