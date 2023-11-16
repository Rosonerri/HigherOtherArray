let number1 = 2
let number2 = 24
let result = 1
for(let i = result;  i<= number2; i++){
  result*=number1
  console.log("this is i", i)
  console.log("this is the result", result)

}
// let number3=24
// let result2 = 1
// let num1 = 2
// function myPower(n){
//     for ( let i= result2; i<=n; i++){
//      console.log(i)
//     }
//     return result2*=num1
// }
// console.log(myPower(number3));
function myPower(base, power){
    let result1 = 1
    for(let i = result1; i<= power; i++){
        console.log(i)
        console.log(result1*=base)
    }
    return result1
}
console.log(myPower(3,5))



  //Print the Number from 12 to 24
  for(i=12; i<=24; i++){
    console.log(i)
  }

  function numCall(start, stop){
for (let i = start; i<=stop; i++){
    console.log("this is i",i)
}
  }
  numCall(12,24)

  // Print The Odd number from 7 to 31
  for (i = 7; i<=31; i++){
    if (i %2 !== 0){
        console.log(i)
    }
}

function myOdd(start, stop){
    for(let i= start; i<=stop; i++){
        if (i % 2 !==0){
            console.log(i)
        }
    }
}
myOdd(27,31)