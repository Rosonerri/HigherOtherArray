//Write a JavaScript code to find the power of a number using for Loop
let powerNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let exponent = 2;
function calculatePowers(powerNum, exponent) {
   let powers = [];
    for (const num of powerNum) {
      let result = 1;
      for (let i = 1; i <= exponent; i++) {
        result *= num;
      }
      powers.push(result);
    }
    return powers;
  }
  const powers = calculatePowers(powerNum, exponent);
  console.log(powers);


  //Print the Number from 12 to 24
  for(i=12; i<=24; i++){
    console.log(i)
  }
  
  // Print The Odd number from 7 to 31
  for (i = 7; i<=31; i++){
    if (i %2 !== 0){
        console.log(i)
    }
}

// iterate through all the numbers from 1 to 45. print the following
// For Multiples of of 3 print "Fizz"
// for multiples of 5 print "Buzz"
// For multiples of 3 and 5 print "FizzBuzz"

for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}    

