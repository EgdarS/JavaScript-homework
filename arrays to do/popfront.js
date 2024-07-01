// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }
    
    if (arr.length === 0) {
        throw new Error('Cannot pop from an empty array');
    }

    // Store the first element
    const firstElement = arr[0];

    // Shift all elements to the left
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Remove the last element (which is now a duplicate of the second-to-last)
    arr.length--;

    // Print the modified array
    console.log(arr);

    // Return the removed element
    return firstElement;
}

// Test cases
try {
    console.log("Returned value:", popFront([0, 5, 10, 15]));
    console.log("Returned value:", popFront([4, 5, 7, 9]));

    // Invalid input tests
    console.log(popFront("not an array")); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log(popFront([])); // Should throw Error
} catch (error) {
    console.error("Error:", error.message);
}