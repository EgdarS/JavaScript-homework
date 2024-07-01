// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, minLength) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new TypeError('First argument must be an array');
    }
    if (typeof minLength !== 'number' || minLength < 0) {
        throw new TypeError('Second argument must be a non-negative number');
    }

    let result = [];
    let resultIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            throw new TypeError('All array elements must be strings');
        }
        if (arr[i].length >= minLength) {
            result[resultIndex] = arr[i];
            resultIndex++;
        }
    }

    return result;
}

// Test cases
try {
    console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
    console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
    
    // Additional test cases
    console.log(removeShorterStrings(['a', 'bb', 'ccc', 'dddd', 'eeeee'], 3)); // Output: ['ccc', 'dddd', 'eeeee']
    console.log(removeShorterStrings(['short', 'long', 'longer'], 10)); // Output: []
    console.log(removeShorterStrings([], 5)); // Output: []
    console.log(removeShorterStrings(['any', 'length', 'is', 'fine'], 0)); // Output: ['any', 'length', 'is', 'fine']

    // Invalid input tests
    console.log(removeShorterStrings("not an array", 3)); // Should throw TypeError
    console.log(removeShorterStrings(['valid', 'array'], -1)); // Should throw TypeError
    console.log(removeShorterStrings(['valid', 'array', 42], 3)); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}