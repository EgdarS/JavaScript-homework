// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

function removeAt(arr, index) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    
    if (typeof index !== 'number' || index < 0 || index >= arr.length) {
        throw new RangeError('Index must be a non-negative number less than the array length');
    }

    // Store the value to be removed
    const removedValue = arr[index];

    // Shift elements to fill the gap
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Remove the last element (which is now a duplicate of the second-to-last)
    arr.length--;

    // Print the modified array
    console.log(arr);

    // Return the removed value
    return removedValue;
}

// Test cases
try {
    console.log("Returned value:", removeAt([1000, 3, 204, 77], 1));
    console.log("Returned value:", removeAt([8, 20, 55, 44, 98], 3));
    
    // Edge cases
    console.log("Returned value:", removeAt([1], 0)); // Removing the only element
    console.log("Returned value:", removeAt([1, 2, 3], 2)); // Removing the last element
    
    // Invalid input tests
    console.log(removeAt("not an array", 1)); // Should throw TypeError
    console.log(removeAt([1, 2, 3], -1)); // Should throw RangeError
    console.log(removeAt([1, 2, 3], 3)); // Should throw RangeError
} catch (error) {
    console.error("Error:", error.message);
}