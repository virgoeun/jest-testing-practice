function nonFullCoverage() {
  return "This function does nothing, so it won't give you full Coverage report of Jest!";
}

const reverseString = require("./reverseString");

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;

// reverseString: we removed toLowerCase and then pass the test
// Then here, we add toLowerCase to compare isPalindrome case!
