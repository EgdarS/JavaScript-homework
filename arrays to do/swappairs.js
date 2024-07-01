// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// swap([1,2,3,4]) => [2,1,4,3]
// swap​(["Brendan",true,42]) => [true,"Brendan",42]

function swap(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    // Iterate through the array, swapping pairs
    for (let i = 0; i < arr.length - 1; i += 2) {
        // Swap the current element with the next one
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    // Return the modified array
    return arr;
}

// Test cases
try {
    console.log(swap([1, 2, 3, 4])); // Output: [2, 1, 4, 3]
    console.log(swap(["Brendan", true, 42])); // Output: [true, "Brendan", 42]
    
    // Additional test cases
    console.log(swap([1])); // Output: [1] (single element, no change)
    console.log(swap([1, 2])); // Output: [2, 1]
    console.log(swap([1, 2, 3, 4, 5])); // Output: [2, 1, 4, 3, 5] (odd length)
    console.log(swap([])); // Output: [] (empty array)

    // Invalid input test
    console.log(swap("not an array")); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}