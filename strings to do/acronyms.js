// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    // Validate input
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    // Split the string into words
    let words = str.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        // Skip empty words
        if (words[i].length > 0) {
            // Add the uppercase first letter of each word
            result += words[i][0].toUpperCase();
        }
    }

    return result;
}

// Test cases
try {
    console.log(acronym("there's no free lunch - gotta pay yer way.")); // Output: "TNFL-GPYW"
    console.log(acronym("Live from New York, it's Saturday Night!")); // Output: "LFNYISN"
    
    // Additional test cases
    console.log(acronym("don't repeat yourself")); // Output: "DRY"
    console.log(acronym("as soon as possible")); // Output: "ASAP"
    console.log(acronym("  multiple   spaces   between   words  ")); // Output: "MSBW"
    console.log(acronym("")); // Output: ""

    // Invalid input test
    console.log(acronym(12345)); // Should throw TypeError
} catch (error) {
    console.error("Error:", error.message);
}