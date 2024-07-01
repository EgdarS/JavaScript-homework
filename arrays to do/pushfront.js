// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3] pushFront([99], 7) => [7,99]

function pushFront(arr, value) {
    // Create a new array with a length one greater than the input array
    let newArr = new Array(arr.length + 1);
    
    // Set the first element to the new value
    newArr[0] = value;
    
    // Copy the rest of the elements from the original array
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    
    return newArr;
}

// Test cases
console.log(pushFront([5, 7, 2, 3], 8)); // Output: [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // Output: [7, 99]