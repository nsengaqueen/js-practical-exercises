// String Compression
// You are given a string containing only uppercase letters. Your task is to implement a 
// function called compressString that compresses the string by counting the consecutive 
// occurrences of each letter and returning a new compressed string.
// The compressed string should consist of each letter followed by its count. 
// If a letter appears only once consecutively, you should include the count.

// Example: 
// compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
// compressString("XYZ


// for(i=0;i<=string.length;i++){
//     let count = 0
//     if(string[i]===string[i=1]){
//         count++
//     }
//     return count
// }
// let string = "AAABBCDGGG";
// console.log(removeDups(string));



function compressString(str) {
    if (str.length === 0) return ""; 
    let compressed = ""; // Initialize an empty string to store the compressed result
    let currentChar = str[0]; // Initialize current character to the first character of the string
    let count = 1; // Initialize count for consecutive occurrences
    
    // Iterate through the string starting from the second character
    for (let i = 1; i < str.length; i++) {
        // If the current character is the same as the previous character, increase the count
        if (str[i] === currentChar) {
            count++;
        } else {
            // If the current character is different from the previous character, append the previous character and its count to the compressed string
            compressed += currentChar + count;
            // Update current character and reset count for the new character
            currentChar = str[i];
            count = 1;
        }
    }
    
    // Append the last character and its count to the compressed string
    compressed += currentChar + count;
    
    return compressed;
}

// Test cases
console.log(compressString("AAAABBBCCDAA")); // Output: "A4B3C2D1A2"
console.log(compressString("XYZ")); // Output: "X1Y1Z1"



const name = ['you','youre']
name