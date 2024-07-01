// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

// Test cases
try {
    console.log(countNonSpaces("Honey pie, you are driving me crazy")); // Output: 29
    console.log(countNonSpaces("Hello world !")); // Output: 11
    
    // Additional test cases
    console.log(countNonSpaces("   ")); // Output: 0 (all spaces)
    console.log(countNonSpaces("NoSpacesHere")); // Output: 12 (no spaces)
    console.log(countNonSpaces(" Leading and trailing spaces ")); // Output: 26
    console.log(countNonSpaces("")); // Output: 0 (empty string)

    // Invalid input test
    console.log(countNonSpaces(12345)); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}