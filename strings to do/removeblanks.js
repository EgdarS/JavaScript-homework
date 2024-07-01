// Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"


function removeBlanks(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Test cases
try {
    console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
    console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));
    
    // Additional test cases
    console.log(removeBlanks("   ")); // Empty string (all spaces)
    console.log(removeBlanks("NoSpacesHere")); // No spaces
    console.log(removeBlanks(" Leading and trailing spaces ")); // Leading and trailing spaces

    // Invalid input test
    console.log(removeBlanks(12345)); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}
