// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

function removeDupes(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    // Handle empty or single-element arrays
    if (arr.length <= 1) {
        return arr;
    }

    // Pointer for the position to place the next unique element
    let uniqueIndex = 1;

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If current element is different from the previous unique element
        if (arr[i] !== arr[uniqueIndex - 1]) {
            // Place the current element at the uniqueIndex position
            arr[uniqueIndex] = arr[i];
            uniqueIndex++;
        }
    }

    // Truncate the array to remove excess elements
    arr.length = uniqueIndex;

    return arr;
}

// Test cases
try {
    console.log(removeDupes([-2, -2, 3.14, 5, 5, 10])); // Output: [-2, 3.14, 5, 10]
    console.log(removeDupes([9, 19, 19, 19, 19, 19, 29])); // Output: [9, 19, 29]
    
    // Additional test cases
    console.log(removeDupes([1, 1, 1, 1, 1])); // Output: [1]
    console.log(removeDupes([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5] (no duplicates)
    console.log(removeDupes([])); // Output: [] (empty array)
    console.log(removeDupes([1])); // Output: [1] (single element)

    // Invalid input test
    console.log(removeDupes("not an array")); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}