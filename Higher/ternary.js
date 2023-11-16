let Name = "female"
console.log(Name === "male"? "Welcome": "Try Again")

let SignIn ="Tobi"
let SignUp ="Tobi"

let SignInEmail ="tobi@gmail"
let SignUpEmail ="Tobi@gmail"

let Age = 18
console.log( Age >= 18? "Beer":"Minor")

console.log(SignInEmail ===SignUpEmail? "You're Welcome":"Try Again")



//Using if statement

if (SignIn ===SignUp && SignInEmail === SignUpEmail){
    console.log(`Welcome back ${SignIn}`)
}else if (SignIn !==SignUp && SignInEmail === SignUpEmail){
    console.log(`Your SignUp Name Is Wrong`)

//  } else if (SignIn !==SignUp || SignInEmail === SignUpEmail){
//         console.log(`Your Name or Email is correct`)
 
}else if (SignIn ===SignUp && SignInEmail !== SignUpEmail){
    console.log(`Your Email Is Wrong ${SignIn}`)
}else{
    console.log("Wrong Input")
}



