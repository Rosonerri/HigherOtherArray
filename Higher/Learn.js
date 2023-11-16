let SampleArray = ["Red", "Green", "White", "Black" , "Indigo" , "Purple" , "Yellow" ];
// Function to get the length of the array
function Length(arr){
    let len = arr.length
    return len  
}
console.log(Length(SampleArray))
// Function to join the sample array into a string
 function join(arrJoin){
    let combine = arrJoin.join(" - ");
    return combine
 }
 console.log(join(SampleArray));

 function getEl(getArr){
    let sample = getArr.pop()
    return sample
 }
 console.log(getEl(SampleArray))
 console.log(SampleArray)

 // function to check if words are palindrone
 function checkPal(arrPal){
    let myPal = arrPal.toString().split("").reverse("").join()
    return myPal.includes()
 }
 console.log(checkPal(["civic"]));

 //Creating a Number in JavaScript 
 let numbers = [1,2,3,4,5,6,7,8]
 console.log(numbers)
 //function to delete the first and the last element 
 function delArr(arrDel){
    arrDel.shift();
    arrDel.pop();
    return arrDel
 }
 console.log(delArr(numbers));

 //Creating an empty array
 let myArr = []
 console.log(myArr)
 // Using functions to add numbers into the array
 function addEl(){
    let add = myArr.push(0,1,2)
    return add
 }
 console.log(addEl())
 console.log(myArr)
 //changing my array into string using the join method and using "+" as the seperator
 function string(){
    let arrString = myArr.join(" + ")
    return arrString
 }
 console.log(string())

 //functions that turns deep array into plain array
 function nested(arrNes){
    let myNested = arrNes.flat(2).sort()
    return myNested
 } 
 console.log(nested([3, 2, [1, 4, [5]],[1, 4, [5]],[1, 4, [5]]]));
 let foodStuffts = ["Rice" , "Beans" , "Palm Oil" , "Tomatoes" , "Vegetable Oil" , "Chicken"]
 // Function to check if Beans is in the array of beans 
 function check(arrCheck){
    let mycheck = arrCheck.includes("Beans")
    return mycheck
 }
 console.log(check(foodStuffts))

 //function to replace "Vegetable Oil" with "Ororo" and "Turkey"
 function checkList(){
    let myList = foodStuffts.splice(4,1,"Ororo", "Turkey")
    return myList
 }
 console.log(checkList())
 console.log(foodStuffts)