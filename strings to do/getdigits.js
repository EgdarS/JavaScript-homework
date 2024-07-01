// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


function getDigits(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            result += str[i];
        }
    }
    return Number(result);
}

// Test cases
try {
    console.log(getDigits("abc8c0d1ngd0j0!8")); // Output: 801008
    console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // Output: 1357924680
    
    // Additional test cases
    console.log(getDigits("No digits here!")); // Output: 0
    console.log(getDigits("12345")); // Output: 12345
    console.log(getDigits("000123")); // Output: 123
    console.log(getDigits("")); // Output: 0

    // Invalid input test
    console.log(getDigits(12345)); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}