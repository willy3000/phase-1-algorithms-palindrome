function isPalindrome(word) {
  const wordList = word.split("");
  const reversedList = wordList.reverse();
  const newString = reversedList.join("");
  return newString === word;
}

/* 
  Add your pseudocode here
  split string
  reverse array
  join array
  test for equality
*/

/*
  Add written explanation of your solution here

  theword is split into a list, 
  the list is reversed using the reverse() function
   and finally the new reversed list is joined into a 
   string. The new string is compared to the initial 
   word to check whether they are the same.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
