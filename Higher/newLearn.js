// flatMap():

const numbers = [1, 2, 3, 4, [2, 5]];
const doubledAndFlattened = numbers.fill((num) => [num * 2]);
console.log(doubledAndFlattened); // Output: [2, 3, 4, 6, 6, 9, 8, 12]


// copyWithin():
// The copyWithin() method copies a sequence of array elements within the same array. It takes three arguments: target, start, and end. It copies the elements starting from index start (inclusive) and pastes them over the elements starting at index target. The copying stops before the index end. For example:



//                         R  E  A  D    O  N 
// The flatMap() method is a combination of map() and flat() methods. 
// It maps each element using a mapping function and then flattens the result into a new array. For example:

// Find: Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// Map:  Calls a defined callback function on each element of an array, and returns an array that contains the results.
// Reduce: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// Sort: Sorts an array in place. This method mutates the array and returns a reference to the same array.
// Filter: This method iterate through each element of an array and returns a new array that matches the condition been set in the call back function
// FindIndex: This method returns the first position of the element in the array that matches the consition set and return -1 if otherwise
// CopyWithin: Returns the this object after copying a section of the array identified by start and end to the same array starting at position target
// Fill: Changes all array elements from start to end index to a static value and returns the modified array
