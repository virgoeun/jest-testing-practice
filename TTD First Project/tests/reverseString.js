// function reverseString (str) {

//     return str.toLowerCase().split("").reverse().join("").replaceAll(/,/g, "")
// }

// module.exports = reverseString;

// just replaceAll(",", "") only replace the the first occurrence of the comma (",") (a,b,c -> ab,c)
// we need regular expression with the global(g) flag.

//f you want to replace all occurrences of the comma in the string, 
// you should use the regular expression with the global (g) flag: replace(/,/g, ""). 
// This is particularly useful when you have multiple occurrences of the substring you want to replace.

// without LowerCase


function reverseString (str) {

    return str.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, "")
}

module.exports = reverseString;