// // check for even number from 1-30 using for loop
// for(i=0; i<=10; i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
// }

// // check for odd number from 1-30 using for loop
// for (i = 0; i<=10; i++){
//     if (i%2 !==0){
//         console.log(i)
//     }
// }

//Question 1: Factorial Calculation
//Write a program to calculate the factorial of a given positive integer n using a for loop.
let fact = 5
let result = 1
for (let i = 1; i <= fact; i++){
    result = result * i;
}
console.log(result)

//Question 2: Prime Numbers
//Write a program to determine if a given positive integer n is a prime number using a for loop.
function isPrime(n) {
    // if (n <= 1) {
    //     return false;
    // }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

let n = 5; // Change this to the number you want to check
if (isPrime(n)) {
    console.log(`${n} is a prime number.`);
} else {
    console.log(`${n} is not a prime number.`);
}

//Recheck

function Prime(n){
    for (let i = 2; i <=Math.sqrt(n); i++){
        if (i % 2 ===0){
            return false;
        }
    }
    return true;
}

let checkNumber = 25;
if (Prime(checkNumber)){
    console.log((`${checkNumber} is a prime Number`))

}else{
    console.log((`${checkNumber} is not prime Number`))

}


// Recheck if Nth Number is a prime number

function myPrime(el){
    for(let i = 2; i<=Math.sqrt(el); i++){
        if( i % 2 === 0){
            return false;
        }
    }
    return true;
}
let el = 23
if (myPrime(el)){
    console.log(`${el} is a prime number`)
}else{
    console.log(`${el} is not a prime number`)
}

//Question 3: Fibonacci Series
//Generate and print the first n numbers in the Fibonacci series using a for loop.


//Question 4: Palindrome Check
//Write a program to check if a given string is a palindrome (reads the same forwards and backwards) using a for loop.
function isPalindrome(str) {
    str = str.toLowerCase(); // Convert the string to lowercase for case-insensitive comparison
    const length = str.length;
    
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) {
            return false;
        }
    }
    
    return true;
}

const inputString = "madam"; // Change this to the string you want to check
if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}

// To Check if the word is Palndrome
function checkPal(mypal){
    mypal = mypal.toLowerCase()
    let length = mypal.length

    for (let i=0; i<length/2; i++){
        if ( mypal[i] !== mypal[length -1-i]){
            return false
        }
    }
    return true
}
let mypal = "Esther"
if (checkPal(mypal)){
    console.log(`${mypal} is a palindrome`)
}else{
    console.log(`${mypal} is not a palindrome`)
}

//Recheck Palindrome

function recheck(thePal){
    thePal = thePal.toLowerCase()
    let theLength = thePal.length

    for (i=0; i<=theLength/2; i++){
        if(thePal[i] !==thePal[theLength - i - 1]){
            return false;
        }
    }return true;
}
let thePal = 'tyron';
if (recheck(thePal)){
    console.log(`${thePal} is a Palindrome`)
}else{
    console.log(`${thePal} is not a Palindrome`)
}

// Question 5: Array Sum
// Given an array of numbers, calculate and print the sum of all the elements using a for loop.

// let arrNumbers = [1,2,3,4,5,6,7,8,9]
// let add = 0;
// for (let i = 0; i<arrNumbers.length; i++ ){
//     add += arrNumbers[i];
// console.log(add)

// }


function calculateArraySum(arr) {
    let sum1 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }

    return sum1;
}

const numbers = [5, 10, 15, 20]; // Change this to the array of numbers you want to calculate the sum for
const sum1 = calculateArraySum(numbers);
console.log(`The sum of the array elements is: ${sum1}`);

function mysum(sum){
    let add = 0;
    for (let i=0; i < sum.length; i++){
        add +=sum[i]

    }
    return add;
}
let oursum = [1,2,3,4,5,6,7,8,9]
let mySum = mysum(oursum)
console.log(`the sum of these numbers is ${mySum}`)