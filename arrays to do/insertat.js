// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, value) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    
    if (typeof index !== 'number' || index < 0 || index > arr.length) {
        throw new RangeError('Index must be a non-negative number not greater than the array length');
    }

    // Create a new array with a length one greater than the input array
    let newArr = new Array(arr.length + 1);
    
    // Copy elements before the insertion index
    for (let i = 0; i < index; i++) {
        newArr[i] = arr[i];
    }
    
    // Insert the new value
    newArr[index] = value;
    
    // Copy the remaining elements
    for (let i = index; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    
    return newArr;
}

// Test cases
try {
    console.log(insertAt([100, 200, 5], 2, 311)); // Output: [100, 200, 311, 5]
    console.log(insertAt([9, 33, 7], 1, 42)); // Output: [9, 42, 33, 7]
    
    // Edge cases
    console.log(insertAt([], 0, 5)); // Output: [5]
    console.log(insertAt([1, 2, 3], 3, 4)); // Output: [1, 2, 3, 4]
    
    // Invalid input tests
    console.log(insertAt("not an array", 1, 5)); // Should throw TypeError
    console.log(insertAt([1, 2, 3], -1, 5)); // Should throw RangeError
    console.log(insertAt([1, 2, 3], 4, 5)); // Should throw RangeError
} catch (error) {
    console.error("Error:", error.message);
}