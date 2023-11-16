// If Conditional Statement
// ......it allows you to embed javascript variable name or fuction inside it

let gender = "Male"
let myName = "Ajayi"
let gmail = "tobi@gmail.com"
let password = "iamtobi"

if (myName ==="Ajayi" && gmail ==="tobi@gmail.com" && password ==="iamtobi"){
    console.log(`Welcome your name is ${myName}, and your email is ${gmail} and your password is ${password}`)
 } else if(myName ==="Ajayi" || gmail ==="tobi@gmail.com" ||  password ==="iamtobi"){
 console.log(`Welcome!! at least one of your input matches your name is ${myName}, and your email is ${gmail} and your password is ${password}`)

}else if(myName !=="Ajayi" && gmail ==="tobi@gmail.com" && password ==="iamtobi"){
    console.log("your Name is incorrect")

}else if(myName ==="Ajayi" && gmail !=="tobi@gmail.com" && password ==="iamtobi"){
    console.log("your gmail is incorrect")

}else if(myName ==="Ajayi" && gmail ==="tobi@gmail.com" && password !=="iamtobi"){
    console.log("your password is incorrect")
}

else {
    console.log("Wrong Input")
}

// if (gender !== "Male"){
//     console.log("Please Welcome")
// } else{
//     console.log("Please Try again")
// }

// Given Three(3) variables 

let num1 = -3
let num2 = 7
let num3 = -2

if (num1 > 0 && num2 < 0 && num3 >0){
    console.log("-")
}else if( num1 < 0 && num2 > 0 && num3 < 0){
    console.log("+")
}else {
    console.log("any sign")
}



//Array of Grades
let score  = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
if (score >= 80 && score === 100){
    console.log("A")
}else if(score >= 60 && score === 70){
    console.log("B")
}else if(score >= 50 && score === 59){
    console.log("C")
}
else if(score >= 40 && score === 49){
    console.log("D")
}else if(score >= 30 && score === 39){
    console.log("E")
} else if(score <=29){
    console.log("F")
} else {
    console.log("No Result")
}
//Given an array of number console.log the even number using conditional statement
let even = [1,2,3,4,5,6,7,8,9]
// if (even%2){
// }
console.log(even%2)

// Modulus


