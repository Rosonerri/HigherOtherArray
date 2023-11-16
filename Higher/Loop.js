//Loop allows you to run a block of code multiple times until a specifield condition is met

Increment
for(i = 0; i<=8; i++){
    console.log(i)
}
Decrement
for(i = 8; i>=0; i--){
    console.log(i)
}
// //Write out a javaScript loop that prints out even Numbers in a given arr if the array is 0-10

//Loop form 1-10(Apply Break when it gets to 7)
for ( i = 0; i  <=10; i++){
console.log(i)
if (i == 7){
break;
}
}
//Decrement 0-15
for(i = 15; i >=0; i--){
console.log(i)
if (i ===2){
    break;
}
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
for (i = 0; i<= arr.length; i++){
    // This is for the Length
console.log("this is i",i)
//This is for the index position
console.log("this is for the arr[i]", arr[i])
}



 let arr2 = [0,1,2,3,4,5,6,7,8,9,10]
// for(i = 2; i<=arr2.length;  i++ && i++){
//     console.log(i)
// }
for (let i = 0; i<=arr2.length; i++){
    if (arr2[i] %2 === 0){
        console.log(arr2[i])
    }
}



let arr3 = ["Rice","Beans","Yam"]
for (x = 0; x<=arr3.length; x++){
    console.log(arr[x])
}

//While
let i =0 
while(i <= 10){
i++

console.log(i)
}



